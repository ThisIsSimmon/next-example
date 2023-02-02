import "server-only";
import "./globals.css";
import { Noto_Sans_JP } from "@next/font/google";

export const revalidate = 0;

const notoSansJP = Noto_Sans_JP({
    weight: ["500", "700"],
    preload: false,
    display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            {/* <html lang="ja" className={notoSansJP.className}> */}
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body>
                <div style={{ display: "grid", placeContent: "center", height: "100vh", gap: "2rem" }}>{children}</div>
            </body>
        </html>
    );
}
