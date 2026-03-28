import { Helmet } from 'react-helmet-async';
import { RESTAURANT_DETAILS } from '../constants';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export default function SEO({ 
  title = `${RESTAURANT_DETAILS.name} - Best Rooftop Dining in North Lakhimpur`, 
  description = "Experience elegant rooftop dining at The Rooftop Restaurant in North Lakhimpur, Assam. Affordable prices, great ambience, and delicious food.",
  keywords = "restaurant in North Lakhimpur, rooftop dining Assam, budget restaurant Assam, best food Lakhimpur, The Rooftop Restaurant"
}: SEOProps) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": RESTAURANT_DETAILS.name,
    "image": "https://picsum.photos/seed/restaurant/800/600",
    "@id": "",
    "url": window.location.origin,
    "telephone": RESTAURANT_DETAILS.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "DK Road",
      "addressLocality": "North Lakhimpur",
      "addressRegion": "Assam",
      "postalCode": "787001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.2345,
      "longitude": 94.1037
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "11:00",
      "closes": "23:00"
    },
    "priceRange": "₹"
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
}
