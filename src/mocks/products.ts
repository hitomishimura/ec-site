export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    image: "/images/Image.png",
    name: "商品名A",
    price: 1000,
    description: "サンプル商品Aの説明テキストテキストテキストテキストテキスト",
  },
  {
    id: 2,
    image: "/images/Image.png",
    name: "商品名B",
    price: 800,
    description: "サンプル商品Aの説明テキストテキストテキストテキストテキスト",
  },
  {
    id: 3,
    image: "/images/Image.png",
    name: "商品名C",
    price: 3000,
    description: "サンプル商品Aの説明テキストテキストテキストテキストテキスト",
  },
  {
    id: 4,
    image: "/images/Image.png",
    name: "商品名D",
    price: 16000,
    description: "サンプル商品Aの説明テキストテキストテキストテキストテキスト",
  },
  {
    id: 5,
    image: "/images/Image.png",
    name: "商品名E",
    price: 700,
    description: "サンプル商品Aの説明テキストテキストテキストテキストテキスト",
  },
];
