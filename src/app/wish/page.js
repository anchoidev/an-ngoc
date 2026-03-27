import { metaData } from "../configs/ui";
import Wish from "../pages/wish";

export async function generateMetadata({ params, searchParams }, parent) {
  const previousImages = (await parent).openGraph?.images || [];

  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://ngoc-an-minh-ngoc.vercel.app/';

  const image = new URL(String(metaData.wish.graphImage), base).toString();

  return {
    title: metaData.wish.title,
    description: metaData.wish.description,
    openGraph: {
      images: [{ url: image, width: 1200, height: 630, alt: metaData.wish.title }, ...previousImages],
    },
    twitter: {
      card: "summary_large_image",
      title: metaData.wish.title,
      description: metaData.wish.description,
      images: [image],
    },
  };
}
function Page() {
  return <Wish />;
}

export default Page;
