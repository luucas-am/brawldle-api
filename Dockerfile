# Stage 1: build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
# Gera o cliente do Prisma
RUN npx prisma generate
# Gera os arquivos estáticos da aplicação
RUN npm run build

# Stage 2: runner
FROM node:20-alpine AS runner

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev --ignore-scripts

# Copia arquivos gerados e necessários
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/brawlers.json ./brawlers.json
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# Entrypoint para rodar migrations e seed
COPY docker-entrypoint.sh .
RUN chmod +x docker-entrypoint.sh

ENV NODE_ENV=production

# Primeiro o entrypoint roda migrations + seed, depois o CMD inicia a app
ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["node", "dist/src/main.js"]
