set -e

echo "⏳ Waiting for Postgres..."
until nc -z postgres 5432; do
  sleep 1
done
echo "✅ Postgres is ready."

if [ "$NODE_ENV" = "homolog" ]; then
  echo "📦 Applying Prisma migrations..."
  npx prisma migrate deploy

  echo "🌱 Running seed..."
  npx prisma db seed
else
  echo "ℹ️ Skipping migration/seed (NODE_ENV=$NODE_ENV)"
fi

# ✅ Executa o comando do CMD
exec "$@"
