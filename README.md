# Platform Studio

Platform Studio is a showcase landing page for an anonymized Internal Developer Platform (IDP) concept: service catalog, self-service environment provisioning, and application publishing. Built with React, TypeScript, Vite, TailwindCSS, and DaisyUI.

## Getting Started

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

### Google Analytics

Create a `.env` file with your GA4 Measurement ID:

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXX
```

Google Analytics is only enabled in production builds. For GitHub Actions, add `VITE_GA_MEASUREMENT_ID` as a repository secret.

### With Docker

```bash
docker compose up -d
docker compose exec web npm start
```

## Production Build

```bash
npm run build
npm run preview
```

## Quality & Testing

- Lint: `npm run lint`
- Unit tests: `npm run test:ci`

## Features

See [FEATURES.md](./FEATURES.md).

---

## Contact

**Contact :** **Javid Mougamadou** — [Site web](https://javid-mougamadou.pro/) · [GitHub](https://github.com/javid-mougamadou) · [LinkedIn](https://www.linkedin.com/in/mougamadoujavid/) · [Discord](https://discord.gg/8rK6CKGb) · [Email](mailto:javid.mougamadou2@gmail.com)
