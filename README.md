# Dr. Mukesh Kumar - Professional Website

A modern, responsive website for Dr. Mukesh Kumar built with Next.js, React, and Tailwind CSS.

## Features

- ✅ Responsive navbar with mobile menu
- ✅ Home page with quick links to all sections
- ✅ Bio - Biography and background
- ✅ Teaching - Courses and teaching materials
- ✅ Ebook - Published ebooks
- ✅ Writing - Research papers and publications
- ✅ Office Hours - Schedule and contact information

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn)

### Installation

1. Navigate to the project directory:
```bash
cd dr-mukesh-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Customization

### Edit Content

All page content is located in the `app/` directory:
- `app/page.tsx` - Home page
- `app/bio/page.tsx` - Biography page
- `app/teaching/page.tsx` - Teaching page
- `app/ebook/page.tsx` - Ebooks page
- `app/writing/page.tsx` - Publications page
- `app/office-hours/page.tsx` - Office hours page

### Customize Navbar

Edit `components/Navbar.tsx` to change the navbar title or add/remove navigation items.

### Styling

The site uses Tailwind CSS for styling. Edit `tailwind.config.js` to customize colors and themes.

## Building for Production

To build the site for production:

```bash
npm run build
npm start
```

## Project Structure

```
dr-mukesh-site/
├── app/
│   ├── bio/
│   ├── teaching/
│   ├── ebook/
│   ├── writing/
│   ├── office-hours/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── Navbar.tsx
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Next Steps

1. Replace placeholder text with actual content
2. Add images and branding
3. Customize colors and styling
4. Deploy to a hosting service (Vercel, Netlify, etc.)

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety

## License

MIT
