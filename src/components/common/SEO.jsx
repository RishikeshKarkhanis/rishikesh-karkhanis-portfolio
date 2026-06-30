import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  image = "/og-image.png",
  url = "https://yourdomain.com",
}) {
  return (
    <Helmet>
      {/* Basic */}

      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="author"
        content="Rishikesh Karkhanis"
      />

      <meta
        name="keywords"
        content="
        Backend Developer,
        React,
        Node.js,
        Express,
        MongoDB,
        AI,
        Machine Learning,
        Portfolio,
        Rishikesh Karkhanis"
      />

      {/* Open Graph */}

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:image"
        content={image}
      />

      <meta
        property="og:url"
        content={url}
      />

      <meta
        property="og:type"
        content="website"
      />



    </Helmet>
  );
}