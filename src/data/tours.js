import {
  tropicalBeach,
  tropicalBeach2,
  mountain,
  sydneyOperaHouse,
  edoras,
  hobbiton,
  sylvan,
  wakatipu,
  tasmanGlacier,
  tasmanValley,
  rarotongaBeach,
  aitutaki,
  melbourne,
  aitutakiKayaks,
  portDouglas,
  queenslandStream,
  noosa,
  brisbane,
  rotoiti,
} from "./index.js";

export const tours = [
  {
    id: 1,
    name: "Sydney to Melbourne",
    featured: true,
    desc: "Explore Australia's most vibrant cities",
    longDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum esse in beatae atque aliquid nulla, nemo quas vero, itaque deserunt nam quibusdam numquam, tenetur id vitae cumque culpa saepe? Praesentium aspernatur quia voluptate? Dolores dignissimos sunt mollitia, quam tempora esse.",
    img: [
      sydneyOperaHouse,
      "https://ygt-res.cloudinary.com/image/upload/c_fit,h_1280,q_80,w_1920/v1614087222/Venues/Shangri-La%20Hotel%20Sydney/shangri-la-hotel-sydney-3.jpg",
      melbourne,
      "https://live.staticflickr.com/834/28708042627_4a7f0d721a_b.jpg",
    ],
  },
  {
    id: 2,
    name: "New Zealand's South Island",
    featured: true,
    desc: "Visit the most spectacular sites in a round-trip around the South Island",
    longDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum esse in beatae atque aliquid nulla, nemo quas vero, itaque deserunt nam quibusdam numquam, tenetur id vitae cumque culpa saepe? Praesentium aspernatur quia voluptate? Dolores dignissimos sunt mollitia, quam tempora esse.",
    img: [mountain, wakatipu, tasmanGlacier, rotoiti, tasmanValley],
  },
  {
    id: 3,
    name: "Cook Islands and Samoa",
    featured: true,
    desc: "Experience the beautiful scenery and cultures of the South Pacific",
    longDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum esse in beatae atque aliquid nulla, nemo quas vero, itaque deserunt nam quibusdam numquam, tenetur id vitae cumque culpa saepe? Praesentium aspernatur quia voluptate? Dolores dignissimos sunt mollitia, quam tempora esse.",
    img: [
      tropicalBeach,
      aitutaki,
      tropicalBeach2,
      rarotongaBeach,
      aitutakiKayaks,
    ],
  },
  {
    id: 4,
    name: "Middle Earth in New Zealand",
    featured: false,
    desc: "Visit filming locations from the Lord of the Rings film trilogy",
    longDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum esse in beatae atque aliquid nulla, nemo quas vero, itaque deserunt nam quibusdam numquam, tenetur id vitae cumque culpa saepe? Praesentium aspernatur quia voluptate? Dolores dignissimos sunt mollitia, quam tempora esse.",
    img: [hobbiton, edoras, sylvan],
  },
  {
    id: 5,
    name: "Fiji",
    featured: false,
    desc: "Go tropical island hopping in Fiji",
    longDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum esse in beatae atque aliquid nulla, nemo quas vero, itaque deserunt nam quibusdam numquam, tenetur id vitae cumque culpa saepe? Praesentium aspernatur quia voluptate? Dolores dignissimos sunt mollitia, quam tempora esse.",
    img: [
      "https://www.qantas.com/content/travelinsider/en/explore/south-pacific/fiji/things-to-know-before-you-go-to-fiji/_jcr_content/parsysTop/hero.img.full.medium.jpg/1543466853365.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tavarua_Island%2C_Fiji.JPG/1200px-Tavarua_Island%2C_Fiji.JPG?20120326013229",
      "https://media.istockphoto.com/photos/empty-hammock-in-the-shade-of-palm-trees-fiji-picture-id522727074?k=20&m=522727074&s=612x612&w=0&h=WbN98s9NDQwpXLE7qqoeYgmQ1tVvGSJ3VpOlbw13DT0=",
    ],
  },
  {
    id: 6,
    name: "Queensland",
    featured: false,
    desc: "Do a road trip from Brisbane to the tropical rainforests in the northeast",
    longDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum esse in beatae atque aliquid nulla, nemo quas vero, itaque deserunt nam quibusdam numquam, tenetur id vitae cumque culpa saepe? Praesentium aspernatur quia voluptate? Dolores dignissimos sunt mollitia, quam tempora esse.",
    img: [portDouglas, queenslandStream, noosa, brisbane],
  },
];
