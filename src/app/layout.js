import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: "Kriti.Portfolio | %s",
    default: "Kriti.Portfolio",
  },
  description:
    "An innovative and immersive creative portfolio crafted by Kriti, showcasing cutting-edge web technologies including Next.js, Tailwind CSS, Three.js, and Framer Motion to deliver stunning visual experiences and seamless interactions.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}