# Learning disabilities knowledge check

A React + TypeScript + Vite instructional design portfolio demonstration.
The app contains five questions with feedback, including two written-response
questions. Responses are kept only in browser memory and reset on reload.
No backend, database, API keys, or Replit account is required to run this export.

## Add to the existing portfolio repository

1. Extract the ZIP. It contains one `learning-disabilities-knowledge-check` folder.
2. Copy that folder into the root of your existing `portfolio` repository.
   Do not replace your portfolio's root files.
3. Commit and push the added folder. If using GitHub's website, open your
   `portfolio` repository, choose **Add file → Upload files**, and drag the
   extracted folder into the upload area. Upload the extracted folder, not the ZIP.

This adds the source code only. It does not change your portfolio homepage,
configure hosting, or automatically publish the app.

## Run locally

Install Node.js 22.12 or newer, then run from inside this folder:

```sh
npm install
npm run dev
```

Open the local address printed by Vite.

## Check and build

```sh
npm run typecheck
npm run build
npm run preview
```

The production website is generated in `dist/`. A static hosting service should
use this folder as the project root, `npm run build` as the build command, and
`dist` as the output directory.

If hosting under a URL subpath, set `BASE_PATH` to the actual public URL path
with a trailing slash before building. The folder name in your GitHub repository
does not necessarily match the website's URL path.

The app uses externally hosted Google Fonts; system font fallbacks are supplied.

## Content

All written content © 2012, 2026 Emily Sheepy. All rights reserved.

This e-learning demonstration was developed for portfolio purposes and is not
intended as professional training or legal advice. For guidance on workplace
accommodations, consult current legislation and qualified human resources
professionals.

The learner-facing wording, feedback, and images are unchanged from the Replit
app. Only the build configuration was adapted for use outside its workspace.
