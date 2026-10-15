import { addressLine, review, site } from '../data/site';

export const businessId = `${site.url}/#business`;

export function localBusiness() {
  return {
    '@type': ['Plumber', 'HVACBusiness'],
    '@id': businessId,
    name: site.name,
    description:
      'Gas and heating engineer based in Great Wakering, covering the Southend-on-Sea area. Boiler installs, servicing, repairs, landlord certificates and plumbing.',
    url: site.url,
    image: `${site.url}/og.jpg`,
    telephone: site.phoneTel,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postcode,
      addressCountry: site.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: site.mapsUrl,
    areaServed: [
      'Great Wakering',
      'Barling',
      'Shoeburyness',
      'Thorpe Bay',
      'Southchurch',
      'Southend-on-Sea',
      'Westcliff-on-Sea',
      'Leigh-on-Sea',
      'Eastwood',
      'Rochford',
    ],
    sameAs: [site.myjobquote, site.mapsUrl],
    founder: { '@type': 'Person', name: site.engineer },
    foundingDate: String(site.established),
    slogan: site.tagline,
    knowsAbout: [
      'Boiler installation',
      'Boiler servicing',
      'Boiler repair',
      'Landlord gas safety certificates',
      'Central heating',
      'Power flushing',
      'Unvented cylinders',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(review.rating),
      reviewCount: '1',
      bestRating: '5',
      worstRating: '1',
    },
    review: {
      '@type': 'Review',
      author: { '@type': 'Person', name: review.author },
      datePublished: review.date,
      reviewBody: review.body,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(review.rating),
        bestRating: '5',
      },
      publisher: { '@type': 'Organization', name: review.source },
    },
  };
}

export function graph(extra: Record<string, unknown>[] = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': [localBusiness(), ...extra],
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, site.url).href,
    })),
  };
}

export function pageGraph(crumbs: { name: string; path: string }[], extra: Record<string, unknown>[] = []) {
  return graph([breadcrumbs(crumbs), ...extra]);
}

export { addressLine };
