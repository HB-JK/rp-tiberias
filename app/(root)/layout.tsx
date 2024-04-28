import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Topbar from "@/components/shared/Topbar";
import Bottombar from "@/components/shared/Bottombar";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
  });

export const metadata: Metadata = {
    title: "RP Tiberias - GKKB Pontianak",
    description: "Komunitas rayon pemuda dari GKKB gajah mada Pontianak.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-min-10">
            <link rel="shortcut icon" href="/assets/logo.ico" type="image/x-icon" />
            <body className={poppins.variable}>
                <Topbar />

                {children}

                <Footer />
            </body>
        </html>
    );
}
