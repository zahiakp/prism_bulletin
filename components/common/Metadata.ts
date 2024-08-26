export async function generateMetadata(params: { lang: string }) {
  const { lang } = params;
  return {
    title: `${lang === "ar" ? "المشاركات" : "Posts"} | Sunnah Club`,
    description: "Sunnah Club, The Real face of Islam, Posts",
    metadataBase: new URL(`https://sunnahclub.in/${lang}/posts`),
    openGraph: {
      url: `https://sunnahclub.in/${lang}/posts`,
      description: "Sunnah Club, The Real face of Islam, Posts",
      images: ["https://sunnahclub.in/opengraph-image.png"],
    },
  };
}
