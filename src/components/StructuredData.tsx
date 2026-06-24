import React from 'react';

export default function StructuredData() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MADENT",
    "applicationCategory": "MedicalBusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "MXN",
      "price": "799",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "MXN",
        "price": "799",
        "referenceQuantity": {
          "@type": "QuantitativeValue",
          "value": "1",
          "unitCode": "MON"
        }
      }
    },
    "brand": {
      "@type": "Brand",
      "name": "MADENT"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "México"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MADENT",
    "url": "https://madent.com.mx",
    "logo": "https://madent.com.mx/icon-512.png",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "MX"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
