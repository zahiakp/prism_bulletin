import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/components/Home/Header";
import Content from "./Content";
import SocialShare from "./SocialShare";
import GuestLayout from "@/components/layouts/GuestLayout";

import { getArticlebyId } from "@/app/(admin)/admin/articles/Add/func";
import { getLastWord } from "@/components/common/IdSepparator";
import { decodeId } from "@/components/common/Decode";
import { ROOT_URL } from "@/components/data/func";

type PageProps = {
  params: { link: string };
};

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
          <div className="w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="col-span-2">
              <Content data={article} />
            </div>

            <div className="md:col-span-1 flex flex-col gap-5">
              {/* Share Section */}
              <div className="bg-zinc-100 border border-zinc-500 flex flex-col gap-4 rounded-xl p-7">
                <p className="text-lg font-semibold">Share Post</p>
                <SocialShare data={article} />
              </div>

              {/* Article Preview Body */}
              {article?.body && (
                <article
                  className="p-10 rounded-xl bg-blue-100"
                  dangerouslySetInnerHTML={{ __html: article.body }}
                />
              )}

              {/* Recent Posts Placeholder */}
              <div className="flex flex-col">
                <p className="text-xl font-bold">Recents</p>
                <div className="flex flex-col gap-3 my-3">
                  {/* Implement recent posts logic here */}
                </div>
              </div>
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
