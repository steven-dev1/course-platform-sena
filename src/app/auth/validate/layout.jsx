'use client'
import { Work_Sans } from "next/font/google";
import "../../globals.css"
import { metadata } from "../../../../lib/utilities";

const work_sans = Work_Sans({ subsets: ["latin"], weight: ['300','400','500','600','700','800'] });

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className={work_sans.className}>
        {children}
      </body>
    </html>
  );
}