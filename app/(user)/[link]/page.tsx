import { notFound } from "next/navigation";
import SocialShare from "./SocialShare";
import GuestLayout from "@/components/layouts/GuestLayout";

import { getArticlebyId } from "@/app/(admin)/admin/articles/Add/func";
import { getLastWord } from "@/components/common/IdSepparator";
import { decodeId } from "@/components/common/Decode";
import { ROOT_URL } from "@/components/data/func";
import RelatedPosts from "./RelatedPosts";
import RelatedPostsWrapper from "./RelatedPosts";
import { Suspense } from "react";
import ArticleSkeleton from "./Skeleton";
import dynamic from "next/dynamic";

type PageProps = {
  params: { link: string };
};

const Content = dynamic(() => import("./Content"), {
  ssr: false,
  loading: () => <ArticleSkeleton />,
});

export default async function Page({ params }: PageProps) {
  try {
    const idEncoded = getLastWord(params?.link);
    const id = decodeId(idEncoded);
    const response = await getArticlebyId(id);

    if (!response?.data) {
      console.error("Article not found or malformed:", response);
      return notFound(); // Next.js 13+ way to show 404
    }

    const article = response.data;

    return (
      <GuestLayout>
        <main className="flex w-full justify-center my-14">
          <div className="w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-14">
            <div className="col-span-2">
              <Suspense fallback={<ArticleSkeleton/>}>
              <Content data={article} />
            </Suspense>
            </div>

            <div className="col-span-1 w-full flex flex-col gap-5">
            <p className="text-lg font-bold">Share Post</p>
            <SocialShare data={response?.data}/>
            <p className="text-lg font-bold">Recent Post</p>
            <RelatedPostsWrapper/>
          </div>
          </div>
        </main>
      </GuestLayout>
    );
  } catch (error) {
    console.error("Error loading article page:", error);
    return notFound();
  }
}



export async function generateMetadata({ params }: PageProps) {
  try {
    const idEncoded = getLastWord(params.link);
    const id = decodeId(idEncoded);
    const response = await getArticlebyId(id);

    if (!response?.data) {
      return {
        title: "Article Not Found | Prism Bulletin",
        description: "This article could not be loaded.",
      };
    }

    const article = response.data;
    const image =
      article?.image && article.image !== ""
        ? `${ROOT_URL}uploads/news/${article.image}`
        : "/prism-thumb.jpg";

    return {
      title: `${article.title} | Prism Bulletin`,
      description:
        "Prism Bulletin is a news portal launched in 2024, under Prism Foundation.",
      metadataBase: new URL(
        `https://bulletin.prismonline.org/${params.link}`
      ),
      openGraph: {
        url: `https://bulletin.prismonline.org/${params.link}`,
        title: article.title,
        description:
          "Prism Bulletin is a news portal launched in 2024, under Prism Foundation.",
        images: [image],
      },
      twitter: {
        card: "summary_large_image",
        title: article.title,
        description:
          "Prism Bulletin is a news portal launched in 2024, under Prism Foundation.",
        images: [image],
      },
    };
  } catch (error) {
    console.error("Metadata error:", error);
    return {
      title: "Error | Prism Bulletin",
      description: "Failed to load metadata for this article.",
    };
  }
}
