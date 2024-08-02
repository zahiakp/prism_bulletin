import { ROOT_URL } from "@/components/data/func";
import { Metadata } from "next";
export const metadata = ({ data }: { data: any }): Metadata => ({
    title: data[0].title,
    description: data[0].dis,
    keywords: data[0].tags || "",
    metadataBase: new URL('https://bulletin.prismonline.org/'),
    openGraph: {
      url: `https://bulletin.prismonline.org/${data[0].url}`,
      description: data[0].title,
      images: `${ROOT_URL}/uploads/news/${data[0].image}`
    },
  });