export const site = {
  name: 'JPS Gas & Heating',
  shortName: 'JPS',
  tagline: 'Local. Reliable. Professional.',
  url: 'https://jpsgasandheating.surge.sh',
  engineer: 'Joe',
  established: 2004,
  yearsInTrade: 26,
  phoneDisplay: '07971 463002',
  phoneTel: '+447971463002',
  whatsapp: 'https://wa.me/447971463002',
  email: 'jpsgasandheating@hotmail.co.uk',
  offerCode: 'Service26',
  address: {
    street: '59 Kingfisher Street',
    locality: 'Great Wakering',
    postalTown: 'Southend-on-Sea',
    region: 'Essex',
    postcode: 'SS3 0FS',
    country: 'United Kingdom',
    countryCode: 'GB',
  },
  geo: {
    latitude: 51.5528335,
    longitude: 0.7932168,
  },
  plusCode: 'HQ3V+47 Southend-on-Sea',
  mapsUrl:
    'https://www.google.com/maps/place/JPS+Gas+and+Heating/@51.5528335,0.7932168,17z',
  myjobquote: 'https://www.myjobquote.co.uk/t/jps-gas-heating',
  googleRating: '5.0',
  category: 'Gas engineer',
} as const;

export const addressLine = `${site.address.street}, ${site.address.locality}, ${site.address.postalTown}, ${site.address.postcode}`;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/projects/', label: 'Projects' },
  { href: '/areas/', label: 'Areas' },
  { href: '/reviews/', label: 'Reviews' },
  { href: '/contact/', label: 'Contact' },
] as const;

export type Service = {
  slug: string;
  title: string;
  nav: string;
  summary: string;
  meta: string;
  lead: string;
  paragraphs: string[];
  includes: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'boiler-installation',
    title: 'Boiler installation',
    nav: 'Boilers supplied and fitted',
    summary: 'New combi, system and regular boilers, supplied and fitted.',
    meta: 'New boilers supplied and fitted in Great Wakering and the Southend area. Call JPS Gas & Heating on 07971 463002.',
    lead: 'If the old boiler is finished, Joe supplies and fits a new one. He will say which type suits the house before any pipes come off the wall.',
    paragraphs: [
      'A straight swap is not always the right job. A combi can suit a flat or a smaller house. A system boiler with a cylinder suits a home that uses a lot of hot water at once. Joe talks that through on the visit, not in a script.',
      'The work includes taking the old boiler out, fitting the new one and the flue, and making good the pipework that has to change. You get the maker’s paperwork for the model that goes on the wall.',
      'New boilers carry the manufacturer’s warranty. The length depends on the model. Ask Joe which warranty applies before you agree the price.',
      'Quote Service26 when you ask for a price. That is the offer code on the JPS advert.',
    ],
    includes: [
      'A look at the current boiler, flue and pipework',
      'A clear choice of boiler type for the house',
      'Supply and fit, including the flue',
      'Removal of the old appliance',
      'The manufacturer’s warranty paperwork for the new boiler',
    ],
    faqs: [
      {
        q: 'Can you fit a boiler in a loft or a cupboard?',
        a: 'Yes. The photos on this site show both. The space needs a safe flue route and room to work. Joe checks that before he prices the job.',
      },
      {
        q: 'Do you only fit one brand?',
        a: 'No. The advert says boilers are supplied and fitted. The brand depends on the house, the parts, and what you want to spend.',
      },
    ],
  },
  {
    slug: 'boiler-servicing',
    title: 'Boiler servicing',
    nav: 'Boiler servicing',
    summary: 'A yearly service to check the boiler is safe to run.',
    meta: 'Boiler servicing in the Southend area from JPS Gas & Heating. Book Joe on 07971 463002.',
    lead: 'A service is a safety check and a clean, not a quick wipe of the case. Joe works through the boiler and tells you what he finds.',
    paragraphs: [
      'Most boilers should be serviced once a year. Skip it and small faults sit there until the cold week when the heating stops.',
      'If the boiler is still under a manufacturer warranty, say so when you book. Some warranties need the service recorded in a set way.',
      'You should be in, or have someone there who can show Joe the boiler and the controls. Keep a carbon monoxide alarm near the appliance and test it.',
    ],
    includes: [
      'Checks on the boiler as part of a service visit',
      'A plain explanation of anything that needs attention',
      'Advice if a part is on the way out',
    ],
    faqs: [
      {
        q: 'How long does a service take?',
        a: 'It depends on the boiler and what Joe finds. Allow a visit, not a five-minute call. He will say if he needs a return trip for parts.',
      },
      {
        q: 'Will you service a boiler you did not fit?',
        a: 'Yes. Servicing is a normal part of the work, including boilers fitted by someone else.',
      },
    ],
  },
  {
    slug: 'boiler-repairs',
    title: 'Boiler repairs and callouts',
    nav: 'Repairs and callouts',
    summary: 'Breakdowns, repairs and emergency callouts when the heat or hot water stops.',
    meta: 'Boiler repairs and emergency callouts in Great Wakering and Southend. Call or WhatsApp 07971 463002.',
    lead: 'No heating or no hot water is miserable. Call or WhatsApp with the boiler make, the model if you can see it, and what the display says.',
    paragraphs: [
      'Joe takes emergency callouts. Phone or WhatsApp is the fast route. He will tell you when he can get there.',
      'A lot of breakdowns are a part, a pressure problem, or a condensate pipe in cold weather. He finds the fault first, then tells you the price of the repair before he fits parts.',
      'If you smell gas, do not wait for a repair visit. Leave the building, do not use switches, and call the National Gas Emergency Service on 0800 111 999. Call Joe after the supply is safe.',
    ],
    includes: [
      'Fault finding on the boiler',
      'Repairs and breakdowns',
      'Emergency callouts',
      'A clear price before parts are fitted',
    ],
    faqs: [
      {
        q: 'What should I tell you when I call?',
        a: 'The make of the boiler, any code on the display, and whether you have lost heating, hot water, or both. A photo of the badge inside the flap helps.',
      },
      {
        q: 'Is a callout a full repair?',
        a: 'The visit finds the fault. If a part has to be ordered, Joe will say so. He does not guess a fix over the phone.',
      },
    ],
  },
  {
    slug: 'landlord-certificates',
    title: 'Landlord gas safety certificates',
    nav: 'Landlord gas safety checks',
    summary: 'Gas safety checks and certificates for rented homes.',
    meta: 'Landlord gas safety certificates in the Southend area. JPS Gas & Heating, 07971 463002.',
    lead: 'Landlords have to have gas appliances in a rented home checked every 12 months. Joe carries out landlord gas safety checks and issues the certificate.',
    paragraphs: [
      'The check covers the gas appliances you rent out, such as the boiler, a gas hob, or a gas fire. Tell Joe what is in the property when you book so the visit is long enough.',
      'Book before the old certificate runs out. If a fault shows up, it has to be put right before the appliance is used again. Joe will say what failed and what it takes to fix it.',
      'Keep a copy of the certificate. You also need to give a copy to the tenants. Ask Joe if you want more than one property booked in the same week.',
    ],
    includes: [
      'A landlord gas safety check',
      'The certificate after the check',
      'A clear note of any appliance that fails',
    ],
    faqs: [
      {
        q: 'Do I need a certificate for a house with only a boiler?',
        a: 'If the rental has any gas appliance, it needs the check. A boiler on its own still counts. Tell Joe if there is also a hob or a fire.',
      },
      {
        q: 'Can tenants be out?',
        a: 'Someone needs to let Joe in. Arrange access with the tenant before the appointment.',
      },
    ],
  },
  {
    slug: 'central-heating',
    title: 'Central heating',
    nav: 'Central heating',
    summary: 'Full systems, radiators, heating controls and water underfloor heating.',
    meta: 'Central heating installation and repairs in Southend and Great Wakering. Call JPS Gas & Heating on 07971 463002.',
    lead: 'JPS fits full central heating and puts right systems that are already in. That includes radiators, heating controls and water underfloor heating.',
    paragraphs: [
      'Cold rooms are often a circulation problem, a valve, or sludge in the pipes, not a dead boiler. Joe checks the system before he tells you to buy a new boiler.',
      'Heating controls matter. A programmer, room thermostat and thermostatic radiator valves that actually work will cut the hours the boiler runs.',
      'Water underfloor heating is on the list of work Joe takes. It is not the same job as electric mats. Say which system you have when you call.',
    ],
    includes: [
      'Full central heating installation',
      'Radiator work',
      'Heating controls',
      'Water underfloor heating',
    ],
    faqs: [
      {
        q: 'Some radiators stay cold. Is that a new boiler?',
        a: 'Not always. It can be air, sludge, or a valve. A power flush is a separate job if the system is dirty. Joe will say which one you need.',
      },
    ],
  },
  {
    slug: 'power-flushing',
    title: 'Power flushing',
    nav: 'Power flushing',
    summary: 'A flush of a dirty heating system so radiators heat up again.',
    meta: 'Power flushing for dirty heating systems in the Southend area. Book JPS Gas & Heating on 07971 463002.',
    lead: 'Black water, cold bottoms on radiators, and a boiler that keeps blocking up are signs the system is full of sludge. A power flush pushes that out.',
    paragraphs: [
      'Joe connects a flushing machine and cleans the system in stages, radiator by radiator. It is a messy job done carefully, with the floors protected.',
      'A flush is not a magic fix for a cracked heat exchanger. If the boiler itself has failed, Joe will say so before you pay for a flush you do not need.',
      'After a flush, inhibitor goes back into the system. That slows the sludge from coming straight back.',
    ],
    includes: [
      'A check that a flush is the right job',
      'Power flushing of the heating system',
      'Inhibitor after the flush',
    ],
    faqs: [
      {
        q: 'Will a power flush fix a broken boiler?',
        a: 'No. It cleans the pipes and radiators. If the boiler part has failed, that is a repair or a new boiler.',
      },
    ],
  },
  {
    slug: 'unvented-cylinders',
    title: 'Unvented cylinders',
    nav: 'Unvented cylinders',
    summary: 'Unvented hot water cylinders, fitted and certificated.',
    meta: 'Unvented hot water cylinders in Great Wakering and Southend. JPS Gas & Heating, 07971 463002.',
    lead: 'An unvented cylinder stores hot water at mains pressure. Joe fits them and provides the certificate for the work.',
    paragraphs: [
      'These cylinders sit in a cupboard or a loft, next to the boiler. The pipework, the safety valves and the discharge route all have to be right.',
      'If you already have a cylinder and the hot water is poor, it may be the thermostat, the valve, or scale. Joe looks before he prices a new tank.',
      'Tell him if the job is a like-for-like swap or a move from an old tank in the loft. The two jobs are different.',
    ],
    includes: [
      'Unvented cylinder supply and fit',
      'The certificate for the cylinder work',
      'Checks on cylinders that are already in',
    ],
    faqs: [
      {
        q: 'Do you still work on open vented tanks?',
        a: 'Water tanks and immersion heaters are on the plumbing list. Say what you have when you book.',
      },
    ],
  },
  {
    slug: 'plumbing',
    title: 'Plumbing repairs',
    nav: 'Plumbing',
    summary: 'Leaks, taps, toilets, showers and general plumbing repairs.',
    meta: 'Plumbing repairs in Great Wakering and the Southend area. Call Joe at JPS Gas & Heating on 07971 463002.',
    lead: 'Heating is the main work. Joe also does general plumbing repairs, from a leak to bathroom and kitchen pipework.',
    paragraphs: [
      'That includes taps, toilets, basins, showers, wastes, and small pipe changes in kitchens and bathrooms. He also covers electric showers, pumped showers, and water tanks.',
      'A dripping pipe under a bath does not need a speech. Send a photo on WhatsApp and say how long it has been leaking. If it is pouring, turn the water off at the stopcock and then call.',
      'Bigger bathroom installs are listed on his trade profile. Ask for a look around before you assume a full bathroom is in the price of a repair.',
    ],
    includes: [
      'General plumbing repairs',
      'Bathroom, kitchen and WC plumbing',
      'Leaks, taps and wastes',
      'Showers, pumps and water tanks',
    ],
    faqs: [
      {
        q: 'Do you do blocked drains?',
        a: 'The published list is plumbing and heating, not a drainage company. Call and describe the problem. If it is outside the work, Joe will say so.',
      },
    ],
  },
  {
    slug: 'gas-appliances',
    title: 'Gas fires, hobs and ovens',
    nav: 'Fires, hobs and ovens',
    summary: 'Gas fires, ovens, hobs and stoves, checked, fitted or made safe.',
    meta: 'Gas fires, hobs and ovens in the Southend area. JPS Gas & Heating, 07971 463002.',
    lead: 'Joe works on gas fires, ovens, hobs and stoves as well as boilers. If you want a gas hob taken out and the pipe capped, that is a job he lists.',
    paragraphs: [
      'A gas appliance that will not light, smells when it is off, or has a cracked firebed needs a look. Do not keep retrying the ignition.',
      'If you smell gas, leave and call 0800 111 999 first. A repair visit comes after the emergency service has made the supply safe.',
      'Landlord checks should include these appliances, not only the boiler. Mention them when you book the certificate.',
    ],
    includes: [
      'Gas fires',
      'Gas ovens, hobs and stoves',
      'Removing a gas hob and capping the supply',
    ],
    faqs: [
      {
        q: 'Can you cap a gas pipe after I take a cooker out?',
        a: 'Yes. Removing a gas hob and capping the supply is listed work. The pipe should not be left open.',
      },
    ],
  },
];

export type Area = {
  slug: string;
  name: string;
  meta: string;
  lead: string;
  paragraphs: string[];
};

export const areas: Area[] = [
  {
    slug: 'great-wakering',
    name: 'Great Wakering',
    meta: 'Gas and heating engineer based in Great Wakering. Boilers, servicing and repairs. Call JPS on 07971 463002.',
    lead: 'JPS Gas & Heating is based at 59 Kingfisher Street in Great Wakering. This is home ground.',
    paragraphs: [
      'The village sits east of Southend, near Barling and the seawall. Houses run from older homes around the High Street and the Common to newer roads like Kingfisher Street.',
      'Boilers here turn up in kitchens, cupboards and lofts. Joe fits new ones, services what you have, and comes out when the heating stops.',
      'If you are in Great Wakering, say so when you call. Travel is short, which helps on a breakdown.',
    ],
  },
  {
    slug: 'barling',
    name: 'Barling',
    meta: 'Heating and gas work in Barling, next to Great Wakering. Call JPS Gas & Heating on 07971 463002.',
    lead: 'Barling Magna is the next village to Great Wakering. Joe covers it as part of the local round.',
    paragraphs: [
      'The lanes and the houses near the church are a few minutes from Kingfisher Street. A lot of the homes have the boiler tucked in a cupboard or up in the roof.',
      'The same work applies here as in Great Wakering: boiler installs, services, repairs, landlord checks and plumbing.',
      'If the boiler is in a tight loft, say that on the phone so the visit is planned around access.',
    ],
  },
  {
    slug: 'shoeburyness',
    name: 'Shoeburyness',
    meta: 'Boiler engineer for Shoeburyness. Installs, servicing, repairs and landlord checks. 07971 463002.',
    lead: 'Shoeburyness is a short drive from Great Wakering, at the east end of Southend.',
    paragraphs: [
      'The work covers the garrison side, Cambridge Town, and the roads back towards Bournes Green. Sea air is hard on outside flues and pipes. A service is the time to look at them.',
      'Flats near the front and houses set back from East Beach both need the same thing: a boiler that lights and a flue that is safe.',
      'Joe’s advert names Great Wakering and the surrounding area. Shoeburyness is part of that.',
    ],
  },
  {
    slug: 'thorpe-bay',
    name: 'Thorpe Bay',
    meta: 'Gas engineer in Thorpe Bay for boiler installs, servicing and repairs. JPS Gas & Heating, 07971 463002.',
    lead: 'Thorpe Bay sits between Southchurch and Shoeburyness. Many of the houses are 1930s semis with heating that has been altered over the years.',
    paragraphs: [
      'Older boilers in kitchens are common on these roads. A straight swap is sometimes right. Sometimes the pipework and the controls need work at the same time.',
      'Joe will look before he prices. Send a photo of the boiler badge if you want a first idea of the job.',
      'Thorpe Bay station and the Broadway are easy landmarks. The house address is enough when you book.',
    ],
  },
  {
    slug: 'southchurch',
    name: 'Southchurch',
    meta: 'Boiler servicing and repairs in Southchurch, Southend. Call JPS Gas & Heating on 07971 463002.',
    lead: 'Southchurch sits between the seafront and the A13, from Southchurch Park back towards Thorpe Hall Avenue.',
    paragraphs: [
      'The housing mix is flats, bungalows and family houses. Boilers are often in kitchens or airing cupboards. Access is usually simple if someone is home.',
      'Joe covers Southchurch as part of the Southend area he advertises. Services, repairs, new boilers and landlord certificates are all bookable.',
      'If the heating is down in a flat, check whether the boiler is yours or a building system before you book a domestic visit.',
    ],
  },
  {
    slug: 'southend-on-sea',
    name: 'Southend-on-Sea',
    meta: 'Gas and heating engineer for Southend-on-Sea. Boilers, servicing, repairs. Call 07971 463002.',
    lead: 'Joe covers the Southend-on-Sea area from his base in Great Wakering. That is the area named on his trade profile.',
    paragraphs: [
      'Town-centre flats, terraces off the High Street, and houses towards Prittlewell all come up. Parking can be tight. A note about where to stop saves time on the day.',
      'The usual jobs are boiler swaps, annual services, breakdowns, and landlord gas safety checks for rented flats.',
      'Call or WhatsApp with the postcode. SS0, SS1, SS2 and SS3 are the heart of the round.',
    ],
  },
  {
    slug: 'westcliff-on-sea',
    name: 'Westcliff-on-Sea',
    meta: 'Heating engineer in Westcliff-on-Sea. Boiler repairs, servicing and installs. JPS, 07971 463002.',
    lead: 'Westcliff is the west side of Southend, around Hamlet Court Road and the cliffs.',
    paragraphs: [
      'A lot of the houses are Victorian and Edwardian. Pipework can be old, and radiators may have been added in bits. Joe checks the system, not just the boiler badge.',
      'Flats above the shops need a plan for parking and for getting a new boiler up the stairs. Mention the floor when you book.',
      'Westcliff is inside the Southend area JPS covers. It is further than Shoeburyness, so book rather than assume a same-hour arrival.',
    ],
  },
  {
    slug: 'leigh-on-sea',
    name: 'Leigh-on-Sea',
    meta: 'Boiler engineer for Leigh-on-Sea and the Broadway. JPS Gas & Heating, based in Great Wakering. 07971 463002.',
    lead: 'Leigh-on-Sea is the west end of the borough, from the Broadway down to Old Leigh.',
    paragraphs: [
      'Cottages in Old Leigh, flats near the station, and family houses off the London Road all need the same safe gas work. Narrow roads in Old Leigh are worth a mention when you book.',
      'Joe is based in Great Wakering, not in Leigh. He still covers Leigh as part of the Southend area.',
      'Services, repairs, new boilers, landlord checks and plumbing repairs are the jobs to call about.',
    ],
  },
  {
    slug: 'eastwood',
    name: 'Eastwood',
    meta: 'Gas and boiler work in Eastwood, north of Leigh. Call JPS Gas & Heating on 07971 463002.',
    lead: 'Eastwood is the north edge of Southend, on the way towards Rayleigh. Family houses and combis are the usual visit.',
    paragraphs: [
      'Many homes here had a combi fitted in the last fifteen years and now need a service or a straight replacement. Joe does both.',
      'If only some rooms heat up, it may be sludge rather than the boiler. Power flushing is a separate job he lists.',
      'Eastwood is within the Southend area on the trade profile. Rayleigh and beyond is a question to ask, not a promise on this page.',
    ],
  },
  {
    slug: 'rochford',
    name: 'Rochford',
    meta: 'Gas engineer for Rochford. Boilers, servicing and landlord checks. JPS Gas & Heating, 07971 463002.',
    lead: 'Rochford is the market town just north of Southend. Great Wakering is in Rochford district, so this is close to base.',
    paragraphs: [
      'The square, the roads out towards the airport, and the houses near the station are all a short drive from Kingfisher Street.',
      'Older heating systems and newer estates both come up. Tell Joe the boiler make and whether you have a cylinder.',
      'The published area is Southend-on-Sea and Great Wakering’s surroundings. Rochford sits in that surround. Further north, ask before you book.',
    ],
  },
];

export const projects = [
  {
    title: 'Combi boiler and copper pipework',
    image: 'ideal',
    alt: 'White Ideal combi boiler on a cream wall, with copper pipes to the left and a filter underneath.',
    caption:
      'An Ideal combi on the wall, with new copper pipework and a filter below the boiler. The flue leaves through a white elbow at the top.',
  },
  {
    title: 'Boiler and cylinder in a cupboard',
    image: 'cupboard',
    alt: 'Wall-mounted boiler and a tall white unvented cylinder, piped in copper inside a cupboard.',
    caption:
      'A wall boiler beside a tall unvented cylinder, piped in copper inside a cupboard. Valves, a pump and the discharge pipework are all in reach for a service.',
  },
  {
    title: 'Loft plant room',
    image: 'loft',
    alt: 'Loft with a wall boiler, a white expansion vessel and a large stainless hot water cylinder against a brick wall.',
    caption:
      'A loft plant room. The boiler is on the left, an expansion vessel hangs on the brickwork, and a stainless cylinder stands on the right. Copper joins the parts.',
  },
  {
    title: 'Loft plant, from the hatch side',
    image: 'loftWide',
    alt: 'Wider view of a boarded loft with timber beams, a boiler, expansion vessel and cylinder in the background.',
    caption:
      'A wider view of a boarded loft with the boiler, vessel and cylinder at the far end. The timber trusses stay clear of the flue and the pipe runs.',
  },
] as const;

export const review = {
  author: 'Matt',
  date: '2026-04-17',
  dateLabel: '17 April 2026',
  rating: 5,
  source: 'MyJobQuote',
  sourceUrl: site.myjobquote,
  body: 'Absolutely brilliant. Joe replied quickly and answered all our questions, we made an appointment and he turned up right on time. Joe was very friendly and polite. He didn’t rush and explained what he was doing when I asked. Highly recommended.',
};

export function serviceBySlug(slug: string) {
  return services.find((item) => item.slug === slug);
}

export function areaBySlug(slug: string) {
  return areas.find((item) => item.slug === slug);
}
