# Katbox Website

A premium, responsive Katbox landing website built from scratch in React + Vite.

## Run in VS Code

1. Extract/open this folder in VS Code.
2. Open the VS Code terminal.
3. Make sure Node.js is installed.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL Vite prints, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Where to customize

- `src/main.jsx` — website content, sections and links.
- `src/styles.css` — colors, spacing, typography and responsive UI.
- `src/assets/` — the supplied Katbox app visuals used by the website.

## Important links to replace before launch

Search in `src/main.jsx` for:
- `href="#"` on the app download buttons
- `hello@katbox.in` for the real chef/contact email
- Privacy Policy / Terms / Refund links

The current site is a front-end landing site. It does not contain an ordering backend or payment integration.

## Production API connection

The website join form sends customer and chef submissions to:

`POST ${VITE_API_URL}/api/messages`

The production build is configured in `.env.production` to use:

`https://katbox-app.onrender.com`

If the backend URL changes, update `.env.production` before running `npm run build`.

For local development, create `.env.local` with:

```env
VITE_API_URL=http://localhost:4000
```

The backend must expose `POST /api/messages` and allow the deployed website's origin through CORS.

### Production build

```bash
npm install
npm run build
```

Deploy the generated `dist/` folder to your website host. Vite embeds `VITE_API_URL` into the production JavaScript bundle at build time.
