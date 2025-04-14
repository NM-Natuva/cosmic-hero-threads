
import { Product } from '@/components/ProductCard';

// Converted prices to Indian Rupees (approximate conversion)
export const newArrivals: Product[] = [
  {
    id: '1',
    name: 'Batman Shadow Knight T-Shirt',
    price: 2499, // Roughly converted from $29.99
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1743078788_7044700.jpg?format=webp&w=480&dpr=1.5',
    category: 'Men',
    tags: ['DC Comics', 'Graphic Print']
  },
  {
    id: '2',
    name: 'Spider-Man Classic Logo Tee',
    price: 1999, // Roughly converted from $24.99
    originalPrice: 2799, // Roughly converted from $34.99
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1693841914_4728847.jpg?format=webp&w=480&dpr=1.5',
    category: 'Men',
    tags: ['Marvel', 'Oversized Fit']
  },
  {
    id: '3',
    name: 'Wonder Woman Star Power T-Shirt',
    price: 2299, // Roughly converted from $27.99
    image: 'https://m.media-amazon.com/images/I/616dm19XZUL._SX679_.jpg',
    category: 'Women',
    tags: ['DC Comics', 'Crop Top']
  },
  {
    id: '4',
    name: 'Iron Man Tech Suit Tee',
    price: 2699, // Roughly converted from $32.99
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1741861875_8361423.png?format=webp&w=480&dpr=1.5',
    category: 'Men',
    tags: ['Marvel', 'Long Sleeve']
  }
];

export const bestSellers: Product[] = [
  {
    id: '5',
    name: 'Superman Classic Symbol Tee',
    price: 2199, // Roughly converted from $26.99
    originalPrice: 2899, // Roughly converted from $35.99
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1708154781_9734131.jpg?format=webp&w=480&dpr=1.5',
    category: 'Men',
    tags: ['DC Comics', 'Sleeveless']
  },
  {
    id: '6',
    name: 'Black Panther Vibranium Tech Tee',
    price: 2899, // Roughly converted from $34.99
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1657992255_6491239.jpg?format=webp&w=480&dpr=1.5',
    category: 'Men',
    tags: ['Marvel', 'Acid Wash']
  },
  {
    id: '7',
    name: 'Captain America Shield Tee',
    price: 2399, // Roughly converted from $28.99
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1686849381_6607361.jpg?format=webp&w=480&dpr=1.5',
    category: 'Men',
    tags: ['Marvel', 'Graphic Print']
  },
  {
    id: '8',
    name: 'Harley Quinn Pop Art T-Shirt',
    price: 2499, // Roughly converted from $29.99
    originalPrice: 3199, // Roughly converted from $39.99
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1733916119_1920411.jpg?format=webp&w=480&dpr=1.5',
    category: 'Women',
    tags: ['DC Comics', 'Crop Top']
  }
];

// Add new collections
export const vintageHeroes: Product[] = [
  {
    id: 'vh1',
    name: 'Classic Superman 1938 Tee',
    price: 2799,
    image: 'https://i.pinimg.com/originals/ed/01/a9/ed01a99acf6591de88f31ff38b562c25.jpg',
    category: 'Unisex',
    tags: ['DC Comics', 'Vintage', 'Golden Age']
  },
  {
    id: 'vh2',
    name: 'Captain America WWII Poster Shirt',
    price: 2499,
    originalPrice: 2999,
    image: 'https://i.pinimg.com/originals/1a/f8/91/1af89149224786e272830a3521b38b4b.jpg',
    category: 'Men',
    tags: ['Marvel', 'Vintage', 'Historical']
  },
  {
    id: 'vh3',
    name: 'Wonder Woman Rosie The Riveter Tee',
    price: 2199,
    image: 'https://i.pinimg.com/originals/a2/f5/04/a2f504bd20185e9a7cca902a83eca665.jpg',
    category: 'Women',
    tags: ['DC Comics', 'Retro', 'Feminist Icon']
  },
  {
    id: 'vh4',
    name: 'The Phantom Classic Comic Tee',
    price: 2299,
    image: 'https://i.pinimg.com/564x/7b/6a/00/7b6a00318add8fbca20242a06868dace.jpg',
    category: 'Men',
    tags: ['King Features', 'First Superhero', 'Pulp']
  }
];

export const movieAdaptations: Product[] = [
  {
    id: 'ma1',
    name: 'Avengers Endgame Team Tee',
    price: 2899,
    image: 'https://cdn.shopify.com/s/files/1/0057/6840/9075/products/avengers-endgame-quantum-realm-white-suit-mens-t-shirt-628951_800x.jpg',
    category: 'Unisex',
    tags: ['Marvel', 'MCU', 'Blockbuster']
  },
  {
    id: 'ma2',
    name: 'Dark Knight Trilogy Batman Shirt',
    price: 2699,
    originalPrice: 3299,
    image: 'https://m.media-amazon.com/images/I/71RiIMeVQxL._AC_UY780_.jpg',
    category: 'Men',
    tags: ['DC Comics', 'Christopher Nolan', 'Film Series']
  },
  {
    id: 'ma3',
    name: 'Captain Marvel Movie Poster Tee',
    price: 2599,
    image: 'https://m.media-amazon.com/images/I/71NDuD2zi8L._AC_SL1500_.jpg',
    category: 'Women',
    tags: ['Marvel', 'MCU', 'Carol Danvers']
  },
  {
    id: 'ma4',
    name: 'Shazam! Lightning Logo T-Shirt',
    price: 2399,
    image: 'https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C91zaD8TgUtL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY1000_.png',
    category: 'Kids',
    tags: ['DC Comics', 'Family Friendly', 'DCEU']
  }
];

export const comicBookArts: Product[] = [
  {
    id: 'cba1',
    name: 'Jim Lee X-Men Art T-Shirt',
    price: 3199,
    image: 'https://cdn.shopify.com/s/files/1/0190/0156/6660/files/jim-lee-x-men-21-jim-lee-signed-personal-collection-cgc-9-8-comic-kings_882.jpg',
    category: 'Men',
    tags: ['Marvel', 'Jim Lee', 'Limited Edition']
  },
  {
    id: 'cba2',
    name: 'Alex Ross Justice League Tee',
    price: 3499,
    originalPrice: 3999,
    image: 'https://m.media-amazon.com/images/I/71xTbR7SRmL._AC_UY780_.jpg',
    category: 'Unisex',
    tags: ['DC Comics', 'Alex Ross', 'Painted Art']
  },
  {
    id: 'cba3',
    name: 'Todd McFarlane Spider-Man Shirt',
    price: 2999,
    image: 'https://cdn.shopify.com/s/files/1/0190/0156/6660/products/todd-mcfarlane-spider-man-1-facsimile-edition-todd-mcfarlane-autographed-comic-kings_153_1800x1800.jpg',
    category: 'Men',
    tags: ['Marvel', 'McFarlane', 'Iconic Art']
  },
  {
    id: 'cba4',
    name: 'Frank Miller Daredevil T-Shirt',
    price: 2799,
    image: 'https://m.media-amazon.com/images/I/A1ntnF3PJOL._CLa%7C2140%2C2000%7C91oJpgKUTuL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png',
    category: 'Unisex',
    tags: ['Marvel', 'Frank Miller', 'Noir Style']
  }
];

export const superheroTeamUps: Product[] = [
  {
    id: 'stu1',
    name: 'Justice League Team Shirt',
    price: 2899,
    image: 'https://cdn.shopify.com/s/files/1/0057/6840/9075/products/justice-league-symbol-dc-comics-mens-t-shirt-651732_500x.jpg',
    category: 'Men',
    tags: ['DC Comics', 'Team', 'Classic Heroes']
  },
  {
    id: 'stu2',
    name: 'Avengers Assemble Group Tee',
    price: 2699,
    originalPrice: 3299,
    image: 'https://cdn.shopify.com/s/files/1/0057/6840/9075/products/avengers-symbols-marvel-comics-mens-t-shirt-651778_800x.jpg',
    category: 'Unisex',
    tags: ['Marvel', 'Ensemble', 'Earth\'s Mightiest Heroes']
  },
  {
    id: 'stu3',
    name: 'X-Men 90s Team Roster Shirt',
    price: 3099,
    image: 'https://m.media-amazon.com/images/I/71OpFtQYUkL._AC_UY1000_.jpg',
    category: 'Unisex',
    tags: ['Marvel', 'Mutants', '90s Nostalgia']
  },
  {
    id: 'stu4',
    name: 'Teen Titans Classic Group Tee',
    price: 2599,
    image: 'https://m.media-amazon.com/images/I/71pmXRcKaqL._AC_UX679_.jpg',
    category: 'Youth',
    tags: ['DC Comics', 'Young Heroes', 'Robin']
  }
];
