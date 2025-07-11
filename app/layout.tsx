import { Urbanist } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./providers/ConvexClientProvider";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { Toaster } from "sonner";
import Modals from "@/components/global/modals/Modals";
import { ThemeProvider } from "@/components/ThemeProvider";
import LoadingClientWrapper from "@/components/global/LoadingClientWrapper";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata = {
  title: "FusionFootwear | Modern E-commerce for Footwear",
  description:
    "FusionFootwear is a sleek, responsive e-commerce store for stylish and performance-driven footwear. Built with Next.js, Tailwind CSS, and Stripe integration.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
        </head>
        <body className={`${urbanist.className}  antialiased`}>
          <ConvexClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              enableColorScheme
              disableTransitionOnChange
            >
              <LoadingClientWrapper>{children}</LoadingClientWrapper>
              <Toaster position="top-center"></Toaster>
              <Modals></Modals>
            </ThemeProvider>
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
