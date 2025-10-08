# ELib - Digital Library Platform

ELib is a modern, full-featured digital library platform that allows users to discover, read, rate, and manage books with ease. Built with cutting-edge web technologies, it provides an intuitive user experience with both light and dark themes, responsive design, and comprehensive book management capabilities.

## 🚀 Features

- **📚 Book Discovery**: Browse and search through a comprehensive collection of digital books
- **👤 User Authentication**: Secure login and signup system with role-based access
- **⭐ Rating System**: Rate and review books with detailed feedback
- **📖 Reading Experience**: Seamless online book reading interface
- **🎨 Modern UI**: Beautiful, responsive design with dark/light theme support
- **📊 Dashboard**: Administrative dashboard for book and user management
- **🔍 Advanced Search**: Filter and search books by genre, author, and other criteria
- **📱 Mobile Responsive**: Optimized for all device sizes

## 🛠️ Tech Stack

### Frontend Framework
- **[Next.js 15.5.3](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://reactjs.org/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Modern component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** & **[Tabler Icons](https://tabler-icons.io/)** - Icon libraries

### State Management & Data Fetching
- **[TanStack Query](https://tanstack.com/query)** - Server state management
- **[TanStack Table](https://tanstack.com/table)** - Headless table building
- **[Axios](https://axios-http.com/)** - HTTP client

### Form Handling & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[Zod](https://zod.dev/)** - Schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Form validation resolvers

### Additional Libraries
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[@dnd-kit](https://dndkit.com/)** - Drag and drop functionality
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[Recharts](https://recharts.org/)** - Data visualization
- **[Vaul](https://vaul.emilkowal.ski/)** - Drawer component

### Development Tools
- **[ESLint 9](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **Turbopack** - Next.js bundler for faster development

## 📁 Project Structure

```
elib-client-app/
├── public/                     # Static assets
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (home)/            # Home page group
│   │   │   ├── components/    # Home-specific components
│   │   │   │   ├── Banner.tsx
│   │   │   │   ├── BookCard.tsx
│   │   │   │   └── BookList.tsx
│   │   │   └── page.tsx       # Home page
│   │   ├── auth/              # Authentication pages
│   │   │   ├── login/         # Login page
│   │   │   └── signup/        # Signup page
│   │   ├── book/              # Book details pages
│   │   │   └── [bookId]/      # Dynamic book page
│   │   │       ├── components/
│   │   │       │   ├── AddRatingForm.tsx
│   │   │       │   ├── BookDetails.tsx
│   │   │       │   ├── BookImage.tsx
│   │   │       │   ├── RatingItem.tsx
│   │   │       │   ├── RatingsList.tsx
│   │   │       │   └── ReadNowButton.tsx
│   │   │       └── page.tsx
│   │   ├── dashboard/         # Admin dashboard
│   │   ├── ClientNavbar.tsx   # Client-side navigation
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   ├── not-found.tsx      # 404 page
│   │   └── variables.css      # CSS variables
│   ├── components/            # Shared components
│   │   ├── ui/                # shadcn/ui components
│   │   │   ├── avatar.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   └── ... (other UI components)
│   │   │   └── shadcn-io/     # Custom shadcn extensions
│   │   ├── app-sidebar.tsx
│   │   ├── data-table.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── theme-provider.tsx
│   │   └── ... (other shared components)
│   ├── hooks/                 # Custom React hooks
│   │   ├── use-mobile.ts
│   │   ├── useAuth.ts
│   │   └── useRating.ts
│   ├── lib/                   # Utility libraries
│   │   ├── axios.ts           # Axios configuration
│   │   └── utils.ts           # Utility functions
│   └── types/                 # TypeScript type definitions
│       └── index.ts           # Global types (Book, Author, Rating, User, etc.)
├── .env                       # Environment variables
├── .gitignore                 # Git ignore rules
├── components.json            # shadcn/ui configuration
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
├── README.md                  # Project documentation
└── tsconfig.json              # TypeScript configuration
```

## 🏗️ Architecture Overview

### Next.js App Router
The project uses Next.js 15 with the App Router architecture, providing:
- File-based routing system
- Server and client components
- Built-in API routes capability
- Automatic code splitting
- SEO optimization

### Component Architecture
- **Pages**: Located in `src/app/` following App Router conventions
- **Shared Components**: Reusable components in `src/components/`
- **UI Components**: shadcn/ui components in `src/components/ui/`
- **Custom Hooks**: Business logic hooks in `src/hooks/`
- **Type Safety**: Comprehensive TypeScript types in `src/types/`

### State Management
- **Server State**: TanStack Query for API data fetching and caching
- **Client State**: React's built-in state management with custom hooks
- **Form State**: React Hook Form for complex form handling
- **Theme State**: next-themes for dark/light mode

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd elib-client-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## 🎨 Customization

### Themes
The application supports both light and dark themes using `next-themes`. Theme switching is handled automatically based on system preference or user selection.

### UI Components
Customize the UI by modifying:
- `src/app/globals.css` - Global styles and CSS variables
- `src/app/variables.css` - CSS custom properties
- `components.json` - shadcn/ui configuration
- Individual component files in `src/components/ui/`

### Configuration Files
- **Next.js**: `next.config.ts` - Framework configuration
- **TypeScript**: `tsconfig.json` - TypeScript compiler options
- **Tailwind**: Uses Tailwind CSS 4 configuration
- **ESLint**: `eslint.config.mjs` - Linting rules

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
# Add other necessary environment variables
```

## 📚 Key Features Breakdown

### Authentication System
- Secure login/signup pages in `src/app/auth/`
- Custom `useAuth` hook for authentication state management
- Protected routes and role-based access control

### Book Management
- Dynamic book pages with detailed information
- Book rating and review system
- Reading interface with PDF/ebook support
- Search and filtering capabilities

### Dashboard
- Administrative interface for managing books and users
- Data visualization with Recharts
- Sortable and filterable data tables

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Custom mobile detection hook (`use-mobile.ts`)
- Adaptive layouts for all screen sizes

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to [Vercel](https://vercel.com)
2. Configure environment variables
3. Deploy automatically on every push

### Other Platforms
The application can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Google Cloud Platform
- Self-hosted servers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [shadcn/ui Documentation](https://ui.shadcn.com/) - UI component library
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility-first CSS framework
- [TanStack Query Documentation](https://tanstack.com/query/latest) - Server state management
- [React Hook Form Documentation](https://react-hook-form.com/) - Form handling

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies.**
