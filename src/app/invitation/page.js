import { metaData } from "../configs/ui";
import Invitation from "../pages/invitation";

export async function generateMetadata({ params, searchParams }, parent) {
  const previousImages = (await parent).openGraph?.images || [];

  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
   'https://ngoc-an-minh-ngoc.vercel.app'

  const image = new URL(String(metaData.invitation.graphImage), base).toString();

  return {
    title: metaData.invitation.title,
    description: metaData.invitation.description,
    openGraph: {
      images: [{ url: image, width: 1200, height: 630, alt: metaData.invitation.title }, ...previousImages],
    },
    twitter: {
      card: "summary_large_image",
      title: metaData.invitation.title,
      description: metaData.invitation.description,
      images: [image],
    },
  };
}

function Page() {
  return <Invitation />;
}

export default Page;
