// components/Meta.tsx
import { ROOT_URL } from '@/components/data/func';
import Head from 'next/head';

interface MetaProps {
  data:any
}

const Meta: React.FC<MetaProps> = ({data}:{data:any}) => {
  const baseUrl = 'https://bulletin.prismonline.org/';

  return (
    <Head>
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.body} />
      <meta property="og:url" content={`${ROOT_URL}/${data.url}`} />
      {data.image && <meta property="og:image" content={`${ROOT_URL}uploads/news/${data.image}`} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.body} />
      {data.image && <meta name="twitter:image" content={`${ROOT_URL}uploads/news/${data.image}`} />}
    </Head>
  );
};

export default Meta;
