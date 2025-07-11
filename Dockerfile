# Stage 1: builder
FROM node:20-alpine AS builder

WORKDIR /app

# Copia apenas os arquivos de dependências e instala
COPY package*.json ./
RUN npm install

# Copia o restante do código-fonte
COPY . .

# Gera cliente Prisma
RUN npx prisma generate

# Compila o projeto
RUN npm run build

# Stage 2: runner
FROM node:20-alpine AS runner

WORKDIR /app

# Copia apenas arquivos necessários para produção
COPY package*.json ./
RUN npm install --omit=dev --ignore-scripts

# Copia artefatos da build e Prisma
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/brawlers.json ./brawlers.json
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# Copia e prepara o script de entrypoint
COPY docker-entrypoint.sh /app/docker-entrypoint.sh
RUN sed -i 's/\r$//' /app/docker-entrypoint.sh && chmod +x /app/docker-entrypoint.sh
ENTRYPOINT ["sh", "/app/docker-entrypoint.sh"]

CMD ["node", "dist/src/main.js"]
