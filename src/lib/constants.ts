export const BUSINESS = {
  name: 'Turbo Clean Pressure Washing',
  phone: '(360) 545-0798',
  phoneRaw: '+13605450798',
  address: '1612 W Simpson Ave, McCleary, WA 98557',
  rating: 5.0,
  reviewCount: 86,
  hours: 'Mon–Sat 8 AM – 7 PM · Sun 8 AM',
  areasServed: 'McCleary & surrounding areas',
};

export const SMS_LINK = `sms:${BUSINESS.phoneRaw}?&body=Hi%20Turbo%20Clean%2C%20I%27d%20like%20a%20fast%20quote%20for%20pressure%20washing.%20Here%20are%20photos%20of%20my%20project%3A`;
export const TEL_LINK = `tel:${BUSINESS.phoneRaw}`;

export const SERVICES = [
  {
    name: 'Concrete Cleaning',
    image: '/6.webp',
    description: 'Restore driveways, walkways, and patios to like-new condition. We blast away years of embedded dirt, oil stains, and organic growth without damaging the surface.',
  },
  {
    name: 'House Washing',
    image: '/1.webp',
    description: 'Safe, low-pressure washing that removes algae, mold, and grime from siding, brick, and stucco. Your home looks freshly painted — without the paint job.',
  },
  {
    name: 'Roof Cleaning',
    image: '/4.webp',
    description: 'Black streaks and moss don\'t just look bad — they eat your shingles. Our soft-wash roof treatment kills the organism at the root and keeps it from coming back.',
  },
  {
    name: 'Deck Cleaning',
    image: '/deck_1.webp',
    imageFit: 'cover',
    imagePosition: 'center 25%',
    imageHeight: 'h-72',
    description: 'Strip away gray, splintered wood fibers and green algae to reveal the natural wood underneath. Prepares your deck for sealing or just makes it barefoot-ready again.',
  },
  {
    name: 'Commercial Cleaning',
    image: '/building-washing.jpg',
    imageFit: 'cover',
    imagePosition: 'center bottom',
    imageHeight: 'h-72',
    description: 'From storefronts to sidewalks, we handle the jobs that keep your business looking sharp and passing health inspections.',
  },
];

export const ADDITIONAL_SERVICES = [
  'Gutter Cleaning',
  'Window Cleaning',
  'Sidewalk Cleaning',
  'Fence Cleaning',
  'Patio Cleaning',
];

export const REVIEWS = [
  {
    text: 'We had an excellent experience with this power washing company from start to finish. They were responsive, professional, and showed up right on time. The team did an incredible job—our exterior looks brand new again. They paid attention to the small details and made sure everything was done thoroughly without rushing. What really stood out was how easy they were to work with and how much pride they clearly take in their work. Pricing was fair and transparent, and the results exceeded our expectations. I would absolutely recommend them.',
    author: 'Kate Martin',
    source: 'Google',
    date: '3 months ago',
    rating: 5,
  },
  {
    text: 'The tech was great and really nice. The house looks wonderful both the front and back. I would definitely use them again to power wash our house.',
    author: 'Joe Bleacher',
    source: 'Google',
    date: '2 weeks ago',
    rating: 5,
  },
  {
    text: 'I didn\'t realize what a good job they had done until I saw the house the next day after everything dried out. The driveway, walkway, house siding and the stucco all look brand new! A great bunch of guys and a great job. Very highly recommended.',
    author: 'Fraser Bonnett',
    source: 'Google',
    date: 'a year ago',
    rating: 5,
  },
  {
    text: 'Those guys are magical!!! Couldn\'t even recognize my house and windows and the deck! And it was very unhealthy with a lot of mildew and dirty scum and weather damages. I think it looks better now than when I bought it, and it was 30 years ago! Unreal!!! And what hardworking guys! So clean and close to details, and very pleasant to work with! Wish we had more people like this in our community! Will recommend to anyone without hesitation! Thank you guys! Great job done!',
    author: 'Osher Yam',
    source: 'Google',
    date: '3 months ago',
    rating: 5,
  },
  {
    text: 'We used Turbo Clean for our Christmas lights. They were very responsive, friendly and prompt. Great job. We had many compliments.',
    author: 'Denise Kurtz',
    source: 'Google',
    date: '6 months ago',
    rating: 5,
  },
];

export const STEPS = [
  {
    number: '01',
    title: 'Request a Free Quote',
    description: 'Call us or submit the form. If you have photos, text them over for the fastest and most accurate estimate.',
    badge: 'Fast Response',
  },
  {
    number: '02',
    title: 'Receive Your Upfront Quote',
    description: 'We\'ll provide a clear, honest estimate before any work begins. No hidden fees or surprise charges.',
    badge: 'No Hidden Fees',
  },
  {
    number: '03',
    title: 'Enjoy a Cleaner Property',
    description: 'Our crew arrives on time, protects your landscaping and surfaces, and leaves your home looking its best.',
    badge: 'Satisfaction Guaranteed',
  },
];

export const SERVICE_AREAS = [
  'Mechanicsburg', 'Camp Hill', 'Carlisle', 'Enola', 'Lemoyne',
  'New Cumberland', 'Shippensburg', 'Mount Holly Springs', 'Wormleysburg',
  'Hampden Township', 'East Pennsboro', 'Silver Spring Township',
  'Upper Allen Township', 'Lower Allen Township', 'Newburg',
];

export const SERVICE_OPTIONS = [
  'Concrete Cleaning',
  'House Washing',
  'Roof Cleaning',
  'Deck Cleaning',
  'Commercial Cleaning',
  'Gutter Cleaning',
  'Window Cleaning',
  'Not sure — text me photos',
];
