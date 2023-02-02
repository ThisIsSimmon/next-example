import "server-only";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
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
