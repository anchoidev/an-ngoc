import GlobalContext from "./context";
import "./globals.css";
import Sublayout from "./subLayout";
import { metaData } from "./configs/ui";

// metadataBase used by Next.js to build absolute URLs for metadata when needed.
export const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://ngoc-an-minh-ngoc.vercel.app"
);

// Export default metadata for root (helps crawlers pick up default OG/Twitter tags)
export const metadata = {
  title: metaData.main.title,
  description: metaData.main.description,
  openGraph: {
    images: [
      {
        url: new URL(String(metaData.main.graphImage), metadataBase).toString(),
        width: 1200,
        height: 630,
        alt: metaData.main.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaData.main.title,
    description: metaData.main.description,
    images: [new URL(String(metaData.main.graphImage), metadataBase).toString()],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <GlobalContext>
          <Sublayout>{children}</Sublayout>
        </GlobalContext>
      </body>
    </html>
  );
}
