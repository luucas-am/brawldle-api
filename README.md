## Description

[Nest](https://github.com/nestjs/nest) API for [Brawldle](https://brawldle.vercel.app/).

## Project setup

```bash
$ npm install
```

## Environment variables

```sh
DATABASE_URL="postgresql://user:password@host:port/dbname"
```

## Prisma setup

```bash
$ npx prisma migrate deploy

$ npx prisma generate

# If prisma seed don't run automatically
$ npx prisma db seed
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```