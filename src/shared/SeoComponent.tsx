import { Helmet } from "react-helmet-async";

interface IProp {
  title: string;
  description: string;
  type: string;
  //   name: string;
  path: string;
  keywords?: string;
  image?: string;
}

export default function SeoComponent({
  title,
  description,
  type,

  path,
  keywords = "PAM, Vishavkarma Overseas, agriculture machinery, combine harvester, rice mill, seed processing, farming equipment, agricultural solutions",
}: //   image = "/logo.jpg",
IProp) {
  const fullUrl = `https://vishavkarmaoverseas.com${path}`;

  return (
    <Helmet>
      {/* HTML5 Doctype and Language */}
      <html lang="en" />

      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Vishavkarma Overseas" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="canonical" href={fullUrl} />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#16a34a" />
      <meta name="msapplication-TileColor" content="#16a34a" />
      <meta name="application-name" content="Vishavkarma Overseas" />
      <meta name="apple-mobile-web-app-title" content="Vishavkarma Overseas" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Open Graph / Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      {/* <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" /> */}
      <meta property="og:site_name" content="Vishavkarma Overseas" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@vishavkarmaoverseas" />
      <meta name="twitter:site" content="@vishavkarmaoverseas" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={image} /> */}

      {/* Additional SEO structured data */}
      {/* <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Vishavkarma Overseas",
          alternateName: "PAM",
          url: "https://vishavkarmaoverseas.com",
          logo: "https://vishavkarmaoverseas.com/logo.jpg",
          description:
            "Leading manufacturer of agricultural machinery including PAM combine harvesters, rice mill equipment, and seed processing machinery",
          foundingDate: "2010",
          industry: "Agricultural Machinery",
          products: [
            "PAM Combine Harvester",
            "Rice Mill Machinery",
            "Seed Processing Equipment",
            "Agricultural Solutions",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-XXX-XXXXXXX",
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: "English",
          },
          sameAs: [
            "https://www.facebook.com/vishavkarmaoverseas",
            "https://www.linkedin.com/company/vishavkarmaoverseas",
          ],
        })}
      </script> */}
    </Helmet>
  );
}
