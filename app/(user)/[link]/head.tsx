export async function generateMetadata(params: { lang: string; articleId: string }) {
  // Fetch article data using the articleId
  const article = await fetchArticleData(params.articleId);
  
  return {
    title: `${article.title} | Sunnah Club`,
    description: article.description || "Sunnah Club, The Real face of Islam, Articles",
    metadataBase: new URL(`https://sunnahclub.in/${params.lang}/articles/${params.articleId}`),
    openGraph: {
      url: `https://sunnahclub.in/${params.lang}/articles/${params.articleId}`,
      title: article.title,
      description: article.description || "Sunnah Club, The Real face of Islam, Articles",
      images: [article.image || "https://sunnahclub.in/default-opengraph-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description || "Sunnah Club, The Real face of Islam, Articles",
      image: article.image || "https://sunnahclub.in/default-opengraph-image.png",
    },
  };
}

// Example function to fetch article data (replace this with actual data fetching logic)
async function fetchArticleData(articleId: string) {
  // Placeholder for article data fetching logic
  return {
    title: "Sample Article Title",
    description: "This is a sample article description.",
    image: "https://sunnahclub.in/sample-article-image.png",
  };
}
