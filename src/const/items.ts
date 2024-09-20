export interface Item {
  id: number;
  name: string;
  image: string;
  price: number;
  author: string;
  technique: string;
  size: {
    width: number;
    height: number;
  };
  year: number;
  edition: string;
  signature: string;
  framed: boolean;
}

export const ITEMS: Item[] = [
  {
    id: 1,
    name: "Item 1",
    image: "item1.jpg",
    price: 100,
    author: "Author 1",
    technique: "Technique 1",
    size: {
      width: 100,
      height: 100,
    },
    year: 2000,
    edition: "Edition 1",
    signature: "Signature 1",
    framed: true,
  },
  {
    id: 2,
    name: "Item 2",
    image: "item2.jpg",
    price: 200,
    author: "Author 2",
    technique: "Technique 2",
    size: {
      width: 200,
      height: 200,
    },
    year: 2001,
    edition: "Edition 2",
    signature: "Signature 2",
    framed: false,
  },
  {
    id: 3,
    name: "Item 3",
    image: "item3.jpg",
    price: 300,
    author: "Author 3",
    technique: "Technique 3",
    size: {
      width: 300,
      height: 300,
    },
    year: 2002,
    edition: "Edition 3",
    signature: "Signature 3",
    framed: true,
  },
  {
    id: 4,
    name: "Item 4",
    image: "item4.jpg",
    price: 400,
    author: "Author 4",
    technique: "Technique 4",
    size: {
      width: 400,
      height: 400,
    },
    year: 2003,
    edition: "Edition 4",
    signature: "Signature 4",
    framed: false,
  },
  {
    id: 5,
    name: "Item 5",
    image: "item5.jpg",
    price: 500,
    author: "Author 5",
    technique: "Technique 5",
    size: {
      width: 500,
      height: 500,
    },
    year: 2004,
    edition: "Edition 5",
    signature: "Signature 5",
    framed: true,
  },
  {
    id: 6,
    name: "Item 6",
    image: "item6.jpg",
    price: 600,
    author: "Author 6",
    technique: "Technique 6",
    size: {
      width: 600,
      height: 600,
    },
    year: 2005,
    edition: "Edition 6",
    signature: "Signature 6",
    framed: false,
  },
  {
    id: 7,
    name: "Item 7",
    image: "item7.jpg",
    price: 700,
    author: "Author 7",
    technique: "Technique 7",
    size: {
      width: 700,
      height: 700,
    },
    year: 2006,
    edition: "Edition 7",
    signature: "Signature 7",
    framed: true,
  },
  {
    id: 8,
    name: "Item 8",
    image: "item8.jpg",
    price: 800,
    author: "Author 8",
    technique: "Technique 8",
    size: {
      width: 800,
      height: 800,
    },
    year: 2007,
    edition: "Edition 8",
    signature: "Signature 8",
    framed: false,
  },
  {
    id: 9,
    name: "Item 9",
    image: "item9.jpg",
    price: 900,
    author: "Author 9",
    technique: "Technique 9",
    size: {
      width: 900,
      height: 900,
    },
    year: 2008,
    edition: "Edition 9",
    signature: "Signature 9",
    framed: true,
  },
  {
    id: 10,
    name: "Item 10",
    image: "item10.jpg",
    price: 1000,
    author: "Author 10",
    technique: "Technique 10",
    size: {
      width: 1000,
      height: 1000,
    },
    year: 2009,
    edition: "Edition 10",
    signature: "Signature 10",
    framed: false,
  },
];
