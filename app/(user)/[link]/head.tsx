// import { getArticlebyId } from "@/app/(admin)/admin/articles/Add/func";
// import { decodeId, encodeId } from "@/components/common/Decode";

// export async function generateMetadata(params: {articleId: string }) {
//   // Fetch article data using the articleId
//   const article = await getArticlebyId(decodeId(params.articleId));
//   const post = article?.data
//   console.log("id",article?.data);
  
//   return {
//     title: `${article.title} | Prism Bulletin`,
//     description: article.description || "Prism Bulletin is a news portal launched in 2024, under Prism Foundation.",
//     metadataBase: new URL(`https://bulletin.prismonline.org/${article.url}_${encodeId(article.id)}`),
//     openGraph: {
//       url: `https://sunnahclub.in//articles/${params.articleId}`,
//       title: article.title,
//       description: article.description || "Sunnah Club, The Real face of Islam, Articles",
//       images: [article.image || "https://sunnahclub.in/default-opengraph-image.png"],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: article.title,
//       description: article.description || "Sunnah Club, The Real face of Islam, Articles",
//       image: article.image || "https://sunnahclub.in/default-opengraph-image.png",
//     },
//   };
// }

// // Example function to fetch article data (replace this with actual data fetching logic)
// // async function fetchArticleData(articleId: string) {
// //   // Placeholder for article data fetching logic
// //   return {
// //     title: "Sample Article Title",
// //     description: "This is a sample article description.",
// //     image: "https://sunnahclub.in/sample-article-image.png",

// //   };
// // }
