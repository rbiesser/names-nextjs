# Prisma

https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgresql

# Install Prisma

```sh
npm install prisma --save-dev
```

```sh
npx prisma init --datasource-provider postgresql --output ../generated/prisma
```

## Introspection

Introspection reads the database and updates the schema.prisma configuration.

```sh
npx prisma db pull
```

## Generate

Generate the Prisma client whenever changes are made to the database schema.

```sh
    npx prisma generate
```
