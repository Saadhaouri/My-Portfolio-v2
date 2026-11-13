import { Inter, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ScrollProgress from "@/components/scroll-progress";
import MotionProvider from "@/components/motion-provider";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Saad Haouri | Full-Stack Developer · .NET, React & Odoo",
  description:
    "Saad Haouri is a full-stack developer in Kénitra, Morocco, building business software with C#/.NET, React and SQL, and leading Cegid → Odoo Enterprise data migrations.",
  keywords:
    "Saad Haouri, Full-Stack Developer, .NET, C#, React, Next.js, TypeScript, SQL Server, Odoo, Cegid, data migration, Kénitra, Morocco",
  authors: [{ name: "Saad Haouri" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  icons: { icon: "/icon.webp" },
};

// Applies the saved (or system) theme before paint to avoid a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} relative bg-[#F7F9FC] font-sans text-navy-900 antialiased dark:bg-navy-950 dark:text-navy-50`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <MotionProvider>
              <ScrollProgress />
              <Header />
              {children}
              <Footer />
              <Toaster position="top-right" />
              <ThemeSwitch />
            </MotionProvider>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
