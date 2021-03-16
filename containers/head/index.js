import Head from 'next/head';

const CustomHead = ({ title, description }) => {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <meta property="og:type" content="website" />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
      <meta property="og:locale" content="ru_RU" />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_DOMAIN}/images/og.png`}
      />
      <meta
        property="og:image:secure_url"
        content={`${process.env.NEXT_PUBLIC_DOMAIN}/images/og.png`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={process.env.NEXT_PUBLIC_URL} />
      {title && <meta property="twitter:title" content={title} />}
      {description && (
        <meta property="twitter:description" content={description} />
      )}
      <meta
        property="twitter:image"
        content={`${process.env.NEXT_PUBLIC_DOMAIN}/images/og.png`}
      />
    </Head>
  );
};

export default CustomHead;
