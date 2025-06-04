import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Book Manager",
  authors: [{ name: "mLascurain" }],
  keywords: [
    "Next.js",
    "Supabase",
    "Book Manager",
    "Book Collection",
    "Personal Library",
    "Reading Tracker",
    "Book Management",
    "Web App",
    "Open Source",
    "Free",
    "JavaScript",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Lucide Icons",
  ],
  description:
    "The fastest way to organize your book collection and track your reading journey.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
