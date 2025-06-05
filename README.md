# 🌸 EventBlossom -Events Website

A beautiful, responsive events discovery website. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## ✨ Features

- 📱 **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- 🔍 **Search Functionality**: Real-time event filtering by name, location, or category
- 💖 **Modern UI**: Clean design with gradient effects and smooth animations
- 🌟 **Interactive Elements**: Hover effects, rounded corners, and beautiful typography
- ⚡ **Fast Performance**: Built with Next.js for optimal speed and SEO

## 🚀 Quick Start

### Prerequisites

Before you begin, make sure you have installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)
- A web browser (Chrome, Firefox, Safari, etc.)

### Installation

1. **Clone or download this project**
   ```bash
   # If using Git
   git clone https://github.com/manal-shahid/eventblossom.git
   cd eventblossom
   
   # Or create a new Next.js project and copy the files
   npx create-next-app@latest eventblossom --typescript --tailwind --eslint
   cd eventblossom
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install shadcn/ui components**
   ```bash
   # Initialize shadcn/ui
   npx shadcn@latest init
   
   # Install required components
   npx shadcn@latest add button card input badge
   ```

4. **Install additional packages**
   ```bash
   npm install lucide-react
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your website!

## 📁 Project Structure

```
girly-events-website/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout component
│   ├── loading.tsx         # Loading component
│   └── page.tsx            # Main events page
├── components/             # Reusable components
│   └── ui/                 # shadcn/ui components
│       ├── badge.tsx       # Custom badge component
│       ├── button.tsx      # Button component
│       ├── card.tsx        # Card component
│       └── input.tsx       # Input component
├── hooks/                  # Custom React hooks
│   └── use-mobile.tsx      # Mobile detection hook
├── lib/                    # Utility functions
│   └── utils.ts            # Helper functions
├── public/                 # Static assets
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
└── README.md               # This file
```

## 🎨 Customization

### Changing Colors

The website uses a pink/purple color scheme. To customize colors:

1. **Primary Colors**: Edit the gradient classes in `app/page.tsx`
   ```tsx
   // Change from pink/purple to blue/teal
   className="bg-gradient-to-r from-blue-400 to-teal-500"
   ```

2. **Component Colors**: Update the `getCategoryColor` function
   ```tsx
   const colors = {
     Music: "bg-blue-100 text-blue-700 border border-blue-200",
     Business: "bg-green-100 text-green-700 border border-green-200",
     // ... add your colors
   }
   ```

### Adding Your Own Events

Edit the `sampleEvents` array in `app/page.tsx`:

```tsx
const sampleEvents = [
  {
    id: 1,
    name: "Your Event Name",
    date: "2024-07-15",
    time: "6:00 PM",
    location: "Your Location",
    description: "Your event description...",
    category: "Your Category",
    attendees: 100,
  },
  // Add more events...
]
```

### Customizing the Logo

Replace the heart icon in the navigation:

```tsx
// In app/page.tsx, find this line:
<Heart className="h-8 w-8 text-pink-500 mr-2" />

// Replace with your own icon or image:
<img src="/your-logo.png" alt="Logo" className="h-8 w-8 mr-2" />
```

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px (1 column layout)
- **Tablet**: 768px - 1024px (2 column layout)
- **Desktop**: > 1024px (3 column layout)

## 🎯 Key Components

### EventCard
Displays individual event information with:
- Category badge
- Event name and description
- Date, time, and location
- Attendee count
- Register button

### SearchBar
Real-time filtering functionality that searches:
- Event names
- Locations
- Categories

### Navigation
Responsive navigation with:
- Logo/brand name
- Menu items
- Mobile hamburger menu

## 🌟 Technologies Used

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful UI components
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[React](https://reactjs.org/)** - UI library


## 🆘 Troubleshooting

### Common Issues

**1. "Module not found" errors**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**2. Styling not working**
- Make sure Tailwind CSS is properly configured
- Check that `globals.css` is imported in `layout.tsx`

**3. Components not rendering**
- Verify all shadcn/ui components are installed
- Check import paths are correct

**4. Development server won't start**
- Make sure port 3000 is available
- Try running on a different port: `npm run dev -- -p 3001`


Made with 💖 by Manal Shahid.
