import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL("http://localhost:3000"), // change to production url
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "My Tasks",
    description: "A simple way to manage your tasks without the headache",
    url: "http://localhost:3000", // update to production url
    siteName: "My Tasks",
    images: "/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Tasks",
    description: "A simple way to manage your tasks without the headache",
    creator: "Dan Garro",
    images: ["/twitter-image.png"],
  },
  title: "My Tasks",
  description: "A simple way to manage your tasks without the headache",
  keywords: "todo, tasks, tasks manager",
  author: "Dan Garro, 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
