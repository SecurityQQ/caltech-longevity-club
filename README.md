# Caltech Longevity Club Landing Page

A modern, responsive landing page for the Caltech Longevity Club, built with Next.js and configured for static deployment on GitHub Pages.

## 🚀 Features

- **Static Site Generation**: Optimized for GitHub Pages deployment
- **Responsive Design**: Works seamlessly across all devices
- **Modern UI**: Built with Tailwind CSS and Radix UI components
- **Contact Integration**: Sponsor inquiries redirect to email client
- **Performance Optimized**: Static export with optimized assets

## 📧 Sponsor Contact

The sponsor inquiry form now redirects users to their default email client with a pre-filled message to `longevity@caltech.edu`. This eliminates the need for server-side email processing and works perfectly with static hosting.

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- pnpm (recommended package manager)

### Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd longevity-club-landing
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
pnpm build
```

This creates an optimized static export in the `out` directory.

## 🌐 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

2. **Automatic Deployment**:
   - The workflow (`.github/workflows/deploy.yml`) automatically triggers on pushes to the `main` branch
   - The site will be built and deployed to `https://<username>.github.io/longevity-club-landing`
   - First deployment may take a few minutes to appear

3. **Deploy Now**:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **Manual Deployment** (if needed):
   ```bash
   pnpm build
   # Upload the contents of the 'out' directory to your hosting provider
   ```

### Configuration Files

- **`next.config.ts`**: Configured for static export with GitHub Pages optimization
- **`.nojekyll`**: Prevents Jekyll processing on GitHub Pages
- **`.github/workflows/deploy.yml`**: Automated deployment workflow

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # Reusable React components
│   ├── forms/          # Form components (sponsor inquiry)
│   ├── sections/       # Page sections
│   └── ui/             # UI components
├── data/               # Static data files
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

## 🎨 Customization

- **Colors & Themes**: Modify `tailwind.config.ts`
- **Content**: Update components in `src/components/sections/`
- **Styling**: Global styles in `src/app/globals.css`

## 📝 License

This project is private and proprietary to Caltech Longevity Club.