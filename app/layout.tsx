import Header from "@/components/header";
import { Nunito } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Footer from "@/components/footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Saad Hoauri | Full-Stack Developer",
  description:
    "Hi, I'm Saad Hoauri, a passionate Full-Stack Developer with expertise in front-end and back-end development using React, .NET, TypeScript, and Tailwind CSS. My portfolio showcases my projects, skills, and achievements, designed with modern aesthetics and smooth animations. Explore my work and get to know me better!",
  keywords:
    "Saad Hoauri, Full-Stack Developer, Frontend Developer, Backend Developer, React, .NET, TypeScript, Tailwind CSS, Portfolio, Web Development, UI/UX",
  authors: [{ name: "Saad Hoauri" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  icons: {
    icon: "./icon.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${nunito.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}

            <Toaster position="top-right" />
            <ThemeSwitch />
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
