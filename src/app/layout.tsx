/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import {Layout, FixedPlugin} from "@/components";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Roman Shrestha Portfolio",
    description: "A website for showcasing my portfolio.",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <script
                defer
                data-site="YOUR_DOMAIN_HERE"
                src="https://api.nepcha.com/js/nepcha-analytics.js"
            ></script>

            <link rel="shortcut icon" href="/favicon2.jpg" type="image/jpg"/>
        </head>

        <body className={roboto.className}>
        <Layout>
            {children}
        </Layout>
        </body>
        </html>
    );
}
