// import { Work_Sans } from "next/font/google";
import "../../globals.css"

// const work_sans = Work_Sans({ subsets: ["latin"], weight: ['300','400','500','600','700','800'] });

export const metadata = {
  title: "Confirma tu cuenta",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="shortcut icon" href="/logo.webp" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}