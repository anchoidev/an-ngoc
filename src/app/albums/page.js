import { metaData } from "../configs/ui";
import Album from "../pages/album";

export async function generateMetadata({}, parent) {
  const previousImages = (await parent).openGraph?.images || [];

  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||'https://ngoc-an-minh-ngoc.vercel.app';

  const image = new URL(String(metaData.album.graphImage), base).toString();

  return {
    title: metaData.album.title,
    description: metaData.album.description,
    openGraph: {
      images: [image, ...previousImages],
    },
  };
}

function Page({}) {
  return <Album />;
}

export default Page;
