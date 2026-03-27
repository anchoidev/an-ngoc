import Home from "./pages/home/home";
import { metaData } from "./configs/ui";
export async function generateMetadata({ params, searchParams }, parent) {
  const previousImages = (await parent).openGraph?.images || [];

  // Build absolute URL for og:image so social crawlers can fetch it.
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    `https://ngoc-an-minh-ngoc.vercel.app`;

  const name = searchParams.name || "You";
  const image = new URL(String(metaData.main.graphImage), base).toString();

  return {
    title: `${metaData.main.title} ${name}`,
    description: metaData.main.description,
    openGraph: {
      images: [image, ...previousImages],
    },
  };
}

export default function Page({ params, searchParams }) {
  // console.log(searchParams);
  return <Home />;
}
