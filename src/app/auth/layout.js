import { Work_Sans } from "next/font/google";
import "../globals.css";

const work_sans = Work_Sans({ subsets: ["latin"], weight: ['300','400','500','600','700','800'] });

export const metadata = {
  title: "SENA Learn | Autenticación",
  description: "Inicia sesión o registrate para acceder a una gran variedad de cursos totalmente gratis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={work_sans.className}>
        <a href="/" className="hover:bg-black hover:scale-110 transition-all duration-200 absolute left-7 top-7 bg-[#00324D] rounded-full w-auto h-[50px] p-5 text-white cursor-pointer flex gap-3 justify-center items-center bi bi-arrow-left-circle-fill">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
            </svg>
            <span>Inicio</span>
        </a>
        {children}
      </body>
    </html>
  );
}