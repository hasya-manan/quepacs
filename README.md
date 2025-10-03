## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [HeroUI](https://heroui.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)
- [next-themes](https://github.com/pacocoursey/next-themes)

## Team

```bash
polz was here
```

```bash
paan was here
```

```bash
hasya was here
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

## Available Scripts

- `npm run dev` → Start development server with Turbopack
- `npm run build` → Build project for production
- `npm run start` → Run production build
- `npm run lint` → Lint and fix code
- `npm run clean` → Clean build artifacts
- `npm run seed` → Seed database (runs `prisma/seed.ts` with ts-node)

## Notes

- Seeding creates the first **ADMIN role** and a default admin user:

  - Email: `admin@example.com`
  - Password: `admin123`

  # Project Documentation

## Seed Database

- To populate the database with the initial ADMIN role and a default admin user, run:

```bash
npm run seed
```

- This executes the seeding script located at prisma/seed.ts.

## Default Admin User:

# Email: admin@example.com

# Password: admin123

## Example Output

(node:19900) ExperimentalWarning: --experimental-loader may be removed in the future; instead use register():
--import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));'
🌱 Seeding completed!

## Why the Warning Appears

- This happens because we are using ts-node with ESM loader:

```bash
node --loader ts-node/esm prisma/seed.ts
```

- Node.js marks this feature as experimental.

- Is It Safe?

- Yes ✅ the script still runs fine and seeds data into the database.

# Precautions / Future Steps

- If Node.js removes --experimental-loader in future versions, you can:

- Switch to --import syntax inside package.json under scripts (recommended):

```bash

  "seed": "node --import ts-node/register prisma/seed.ts"

```

# Keep ts-node installed as a dev dependency:

```bash

npm install -D ts-node

```

## License

Licensed under the [MIT license](https://github.com/heroui-inc/next-pages-template/blob/main/LICENSE).
