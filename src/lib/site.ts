import sigiriya from "@/assets/sigiriya.jpg";
import safari from "@/assets/safari.jpg";
import ella from "@/assets/ella.jpg";
import beach from "@/assets/beach.jpg";
import kandy from "@/assets/kandy.jpeg";
import galle from "@/assets/galle.jpg";
import whale from "@/assets/whale.jpg";
import polonnaruwa from "@/assets/polonnaruwa.jpg";

// Hero background video. Place the file at public/videos/tropical_coast_aerial.mp4
export const HERO_VIDEO = "/videos/tropical_coast_aerial.mp4";

export const images = { sigiriya, safari, ella, beach, kandy, galle, whale, polonnaruwa };

export const CONTACT = {
  phone: "+94 77 803 3914",
  phoneRaw: "+94778033914",
  email: "nalindesilva1971@mail.com",
  address: "No. 111/2, Sri Rahula Mawatha, Dewamottawa, Andiambalama, Sri Lanka.",
  instagram: "https://www.instagram.com/journeywithnalin/reels/",
};

const DEFAULT_MSG =
  "Hello Nalin! I'm interested in exploring Sri Lanka. Could you please share more information about your tours and packages?";

export function waLink(topic?: string) {
  const msg = topic
    ? `Hello Nalin! I'm interested in "${topic}". Could you please share more information and a quotation?`
    : DEFAULT_MSG;
  return `https://wa.me/94778033914?text=${encodeURIComponent(msg)}`;
}

export type Destination = { name: string; desc: string; img: string };
export type Category = { id: string; title: string; items: Destination[] };

export const categories: Category[] = [
  {
    id: "culture",
    title: "Cultural & Historical",
    items: [
      {
        name: "Sigiriya Rock Fortress",
        desc: "Climb the 5th-century Lion Rock citadel rising above the jungle.",
        img: sigiriya,
      },
      {
        name: "Polonnaruwa Ancient City",
        desc: "Wander royal ruins and the serene Gal Vihara Buddha statues.",
        img: polonnaruwa,
      },
      {
        name: "Anuradhapura",
        desc: "Sacred stupas and the world's oldest documented tree.",
        img: polonnaruwa,
      },
      {
        name: "Kandy",
        desc: "The hill capital and the Temple of the Sacred Tooth Relic.",
        img: kandy,
      },
      {
        name: "Pinnawala Elephant Experience",
        desc: "Meet Sri Lanka's gentle giants up close.",
        img: safari,
      },
      {
        name: "Jaffna Naga Viharaya",
        desc: "Discover the culture and temples of the far north.",
        img: kandy,
      },
      {
        name: "Trincomalee Shiva Hindu Temple",
        desc: "Koneswaram temple perched on cliffs above the sea.",
        img: galle,
      },
    ],
  },
  {
    id: "wildlife",
    title: "Wildlife & Safari",
    items: [
      {
        name: "Habarana Eco Safari",
        desc: "Jeep safaris through the heart of elephant country.",
        img: safari,
      },
      {
        name: "Kaudulla National Park Safari",
        desc: "Watch herds gather around the ancient reservoir.",
        img: safari,
      },
      {
        name: "Minneriya National Park Safari",
        desc: "Home of 'The Gathering' of wild elephants.",
        img: safari,
      },
      {
        name: "Yala National Park Safari",
        desc: "Search for leopards, sloth bears and crocodiles.",
        img: safari,
      },
      {
        name: "Udawalawe National Park Safari",
        desc: "Guaranteed elephant sightings on open plains.",
        img: safari,
      },
      {
        name: "Wilpattu National Park Safari",
        desc: "Quiet lakes and wild, untouched forest.",
        img: safari,
      },
    ],
  },
  {
    id: "hills",
    title: "Hill Country & Nature",
    items: [
      { name: "Nuwara Eliya", desc: "'Little England' — cool climate and tea estates.", img: ella },
      { name: "Ella", desc: "Nine Arch Bridge, Little Adam's Peak and misty views.", img: ella },
      {
        name: "Scenic Mountain Journeys",
        desc: "One of the world's most beautiful train rides.",
        img: ella,
      },
      {
        name: "Waterfalls & Tea Plantations",
        desc: "Cascades and emerald tea fields everywhere you look.",
        img: ella,
      },
    ],
  },
  {
    id: "beaches",
    title: "Beaches & Ocean",
    items: [
      { name: "Mirissa Beach", desc: "Palm-fringed bay, sunsets and laid-back cafés.", img: beach },
      {
        name: "Whale Watching",
        desc: "See blue whales and dolphins off the south coast.",
        img: whale,
      },
      { name: "Galle", desc: "Walk the ramparts of the historic Dutch fort.", img: galle },
      { name: "Trincomalee Beach", desc: "Calm, clear waters on the east coast.", img: beach },
      { name: "Marble Beach", desc: "A hidden turquoise cove near Trincomalee.", img: beach },
      { name: "Hiriketiya Beach", desc: "A horseshoe bay loved by surfers.", img: beach },
      { name: "Ahangama Beach", desc: "Stilt fishermen and gentle surf breaks.", img: galle },
      { name: "Arugam Bay", desc: "Sri Lanka's legendary surf town.", img: beach },
      { name: "Batticaloa Beach", desc: "Quiet lagoons and untouched coastline.", img: beach },
      { name: "Hikkaduwa Beach", desc: "Coral reefs, turtles and lively evenings.", img: beach },
      { name: "Tangalle", desc: "Wide, peaceful beaches in the deep south.", img: beach },
      { name: "Bentota Beach", desc: "Golden sands and river water sports.", img: beach },
      { name: "Snorkeling", desc: "Colourful reefs teeming with tropical fish.", img: whale },
      { name: "Turtle Experiences", desc: "Visit turtle hatcheries along the coast.", img: beach },
      {
        name: "Madu River Boat Safari",
        desc: "Glide through mangroves and island temples.",
        img: galle,
      },
    ],
  },
  {
    id: "city",
    title: "City Tours & Transfers",
    items: [
      {
        name: "Colombo City Tour",
        desc: "Colonial landmarks, markets and modern Colombo.",
        img: galle,
      },
      {
        name: "Airport Pickup and Transfers",
        desc: "Comfortable, on-time private airport transfers.",
        img: kandy,
      },
      {
        name: "Airport to Sigiriya Tours",
        desc: "Head straight from the airport to the Lion Rock.",
        img: sigiriya,
      },
      { name: "Customized Round Tours", desc: "Your island trip, planned around you.", img: ella },
      {
        name: "Private Transportation",
        desc: "A comfortable private vehicle with your local guide.",
        img: beach,
      },
    ],
  },
];

export const packages = [
  {
    name: "Airport to Sigiriya Tour",
    img: sigiriya,
    desc: "Arrive and head straight into the Cultural Triangle.",
    highlights: ["Airport pickup", "Sigiriya Rock", "Dambulla"],
  },
  {
    name: "Cultural Triangle Tour",
    img: polonnaruwa,
    desc: "Ancient kingdoms, sacred cities and temples.",
    highlights: ["Anuradhapura", "Polonnaruwa", "Sigiriya"],
  },
  {
    name: "Wildlife Safari Experience",
    img: safari,
    desc: "Jeep safaris in Sri Lanka's best national parks.",
    highlights: ["Minneriya", "Yala", "Udawalawe"],
  },
  {
    name: "Kandy and Nuwara Eliya Tour",
    img: kandy,
    desc: "The hill capital and cool tea country.",
    highlights: ["Temple of the Tooth", "Tea estates", "Gregory Lake"],
  },
  {
    name: "Ella Hill Country Adventure",
    img: ella,
    desc: "Train rides, hikes and misty viewpoints.",
    highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Scenic train"],
  },
  {
    name: "Southern Coast Beach Tour",
    img: beach,
    desc: "Golden beaches, Galle Fort and whales.",
    highlights: ["Mirissa", "Galle Fort", "Whale watching"],
  },
  {
    name: "Trincomalee Beach Experience",
    img: galle,
    desc: "Turquoise waters on the east coast.",
    highlights: ["Marble Beach", "Koneswaram", "Snorkeling"],
  },
  {
    name: "Complete Sri Lanka Round Tour",
    img: whale,
    desc: "The whole island — culture, wildlife and beaches.",
    highlights: ["Culture", "Safari", "Beaches"],
  },
];

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/destinations", label: "Destinations" },
  { to: "/tours", label: "Tours" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;
