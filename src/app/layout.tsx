import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joinville Suites",
  description: "Premium living experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          strategy="beforeInteractive"
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body className="antialiased">
        <ClientBody>{children}</ClientBody>

        <Script strategy="afterInteractive" id="remove-extension-attributes">
          {`
            (function () {
              function removeExtensionAttributes() {
                const attributes = [
                  'bis_skin_checked',
                  'bis_register',
                  'bis_use',
                  'data-bis-config',
                  '__processed_a01c0dec-d266-4a8a-9d71-7329061eeec4__'
                ];
                
                attributes.forEach(attr => {
                  document.querySelectorAll(\`[\${attr}]\`).forEach(el => {
                    el.removeAttribute(attr);
                  });
                });

                document.querySelectorAll('script[src^="chrome-extension://"]').forEach(script => {
                  script.remove();
                });
              }

              if ('requestIdleCallback' in window) {
                requestIdleCallback(removeExtensionAttributes);
              } else {
                setTimeout(removeExtensionAttributes, 1000);
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}