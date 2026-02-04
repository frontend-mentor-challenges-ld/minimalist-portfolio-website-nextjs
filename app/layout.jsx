import { Ibarra_Real_Nova, Public_Sans } from "next/font/google";
import "@/app/_styles/globals.scss";
import Attribution from "@/app/_components/attribution/Attribution";

const ibarra = Ibarra_Real_Nova({
  weight: ["700"]
});

const publicSans = Public_Sans({
  weight: ["500", "700"]
});

export const metadata = {
  title: "Frontend Mentor | Minimalist Portfolio Website",
  description: "A frontendmentor.io challenge"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💼</text></svg>"
        />
      </head>
      <body className={`${(ibarra.variable, publicSans.variable)}`}>
        <main>{children}</main>
        <footer>
          <Attribution />
        </footer>
      </body>
    </html>
  );
}
