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
      sydneyOperaHouse,
      sydneyOperaHouse,
      sydneyOperaHouse,
      sydneyOperaHouse,
    ],
  },
  {
    id: 2,
    name: "New Zealand's South Island",
    featured: true,
    desc: "Visit the most spectacular sites in a round-trip around the South Island",
    longDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum esse in beatae atque aliquid nulla, nemo quas vero, itaque deserunt nam quibusdam numquam, tenetur id vitae cumque culpa saepe? Praesentium aspernatur quia voluptate? Dolores dignissimos sunt mollitia, quam tempora esse.",
    img: [mountain, wakatipu, tasmanGlacier, tasmanValley],
  },
  {
    id: 3,
    name: "Cook Islands and Samoa",
    featured: true,
    desc: "Experience the beautiful scenery and cultures of the South Pacific",
    longDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum esse in beatae atque aliquid nulla, nemo quas vero, itaque deserunt nam quibusdam numquam, tenetur id vitae cumque culpa saepe? Praesentium aspernatur quia voluptate? Dolores dignissimos sunt mollitia, quam tempora esse.",
    img: [tropicalBeach, aitutaki, tropicalBeach2, rarotongaBeach],
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
      sydneyOperaHouse,
      sydneyOperaHouse,
      sydneyOperaHouse,
      sydneyOperaHouse,
      sydneyOperaHouse,
    ],
  },
  {
    id: 6,
    name: "Queensland",
    featured: false,
    desc: "Do a road trip from Brisbane to the tropical rainforests in the northeast",
    longDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum esse in beatae atque aliquid nulla, nemo quas vero, itaque deserunt nam quibusdam numquam, tenetur id vitae cumque culpa saepe? Praesentium aspernatur quia voluptate? Dolores dignissimos sunt mollitia, quam tempora esse.",
    img: [
      sydneyOperaHouse,
      sydneyOperaHouse,
      sydneyOperaHouse,
      sydneyOperaHouse,
      sydneyOperaHouse,
    ],
  },
];
