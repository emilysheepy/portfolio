# Supporting employees with learning disabilities

An interactive e-learning self-assessment for managers, adapted from instructional materials I developed in 2012 and revisited in 2026 as part of my instructional design portfolio.

The assessment includes five questions exploring workplace accommodations, managerial responsibilities and employee privacy. Learners receive explanatory feedback and can compare their written responses to sample responses.

[Try the interactive demo](https://knowledge-check-demo.replit.app)

## Learning design

- Self-paced formative assessment
- Multiple-choice and multiple-selection questions
- Scenario-based written responses
- Explanatory feedback and annotated sample responses
- Opportunities for reflection and response revision

## Development

Built with React, TypeScript and Vite. The application runs entirely in the browser. Learner responses are not stored or transmitted and are cleared when the page is reloaded.

## Running locally

Requires Node.js 22.12 or later.

```sh
npm install
npm run dev
```

## Production build

```sh
npm run typecheck
npm run build
npm run preview
```

The production build is generated in `dist/`.

When deploying to a URL subpath, set `BASE_PATH` to the public URL path, including a trailing slash, before building.

The application uses Google Fonts with system font fallbacks.

## Copyright

All written content © 2012, 2026 Emily Sheepy. All rights reserved.

This e-learning demonstration is intended for portfolio purposes only. For guidance on workplace accommodations, consult current legislation and qualified professionals.