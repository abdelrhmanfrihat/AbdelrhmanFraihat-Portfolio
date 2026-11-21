# Abdelrhman Fraihat — Portfolio

A responsive single-page developer portfolio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Run locally

```sh
npm i
npm run dev
npm run build
```

## Update portfolio content

- Add or edit profile details in `src/data/profile.ts`. Set `photo` to an image path (for example `/profile.jpg`) to replace the monogram; set `linkedin` to a URL to reveal LinkedIn links.
- Add skills in `src/data/skills.ts` with an icon slug, category, and only verified level labels.
- Add projects in `src/data/projects.ts`. Optional year, GitHub, live demo, and image fields are hidden when omitted.
- Add verified achievements in `src/data/achievements.ts` using its typed model.
- Replace `public/AbdelrhmanFraihat_CV.pdf` with the current resume PDF. Resume links open it in a new browser tab.

## Deploy to Vercel

Import the `abdelrhman-portfolio` repository in Vercel. Select the Vite framework preset, use `npm run build` as the build command, and `dist` as the output directory.
