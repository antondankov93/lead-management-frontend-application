# Lead Management Frontend Application

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/*](http://localhost:3000/api/hello).

## Semantic commits
General formula `<type>(<scope>): <subject>`
```
<type> – the type of commit should be one of the following:
   feat: adding new functionality
   fix: fixing a bug
   docs: changes to documentation
   style: code changes that do not affect its meaning (formatting, adding semicolons, etc.)
   refactor: code changes that neither fix a bug nor add a feature
   perf: code changes that improve performance
   test: adding new tests or correcting existing ones
   chore: other changes that do not affect the code
```
```
<scope> – specifies the place or functionality affected by the commit (file name, scope of changes, etc.)
```
```
<subject> – the content of the message, "What exactly was done?"
```