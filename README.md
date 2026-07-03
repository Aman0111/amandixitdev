# Premium 3D Portfolio

A modern personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, React Three Fiber, Drei, and EmailJS.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Personalize Content

Edit `data/portfolio.ts` to update:

- Name, title, intro, location, email, resume URL
- Navigation labels
- Stats
- Skills
- Experience timeline
- Featured projects and links
- Social links

Add your resume at `public/resume.pdf` or update `profile.resumeUrl`.

## EmailJS

Create a `.env.local` file:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Your EmailJS template should include these fields:

- `to_email`
- `to_name`
- `from_name`
- `reply_to`
- `subject`
- `message`

Set the EmailJS template's recipient to `{{to_email}}`. The website sends `to_email` as `dixitaman.now.wwe@gmail.com` from `data/portfolio.ts`.

The contact form runs fully on the client. No backend is included.

## Production

Build locally:

```bash
npm run build
```

## Deploy

### Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Add the EmailJS variables in Project Settings > Environment Variables.
4. Deploy.

### Netlify

1. Push the project to GitHub.
2. Create a new Netlify site from the repository.
3. Set build command to `npm run build`.
4. Set publish directory to `.next`.
5. Add the EmailJS variables in Site Configuration > Environment Variables.

For Netlify, install the official Next.js runtime if prompted.
