import "./globals.css";
import { poppins } from "@/components/ui/fonts";
import Footer from "@/components/ui/Footer";

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
      <body className={`${poppins.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
