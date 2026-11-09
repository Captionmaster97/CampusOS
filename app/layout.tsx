import type { Metadata } from "next"; import "./globals.css";
export const metadata: Metadata = {title:"Campus OS",description:"One home for your campus life."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
