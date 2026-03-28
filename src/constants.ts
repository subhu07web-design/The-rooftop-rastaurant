import { MenuItem, Review } from './types';

export const RESTAURANT_DETAILS = {
  name: "The Rooftop Restaurant",
  address: "DK Road, North Lakhimpur, Assam 787001, India",
  phone: "+91 70020 22074",
  whatsapp: "+917002022074",
  rating: 4.1,
  reviewCount: 80,
  priceRange: "₹1–200 per person",
  timings: "Open daily, closes at 11 PM",
  email: "info@therooftoprestaurant.com",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    google: "https://google.com"
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: '1',
    name: 'Chicken 65',
    price: 199,
    category: 'Starters',
    description: 'Spicy, deep-fried chicken dish originating from South India.',
    image: 'https://i.postimg.cc/3NnJNkmZ/chicken-65.jpg'
  },
  {
    id: '32',
    name: 'Soy 65',
    price: 89,
    category: 'Starters',
    description: 'Crispy fried soya chunks tossed in spicy 65 masala.',
    image: 'https://i.postimg.cc/66Z49c7W/soya-65.jpg'
  },
  {
    id: '33',
    name: 'Crispy Chilli Potato',
    price: 129,
    category: 'Starters',
    description: 'Golden fried potato fingers tossed in a sweet and spicy chilli sauce.',
    image: 'https://i.postimg.cc/tJJ6kGqZ/Honey-Chilli-Potatoes-3.jpg'
  },
  {
    id: '34',
    name: 'Crispy Chilli Baby Corn',
    price: 190,
    category: 'Starters',
    description: 'Crispy baby corn tossed with bell peppers and onions in chilli sauce.',
    image: 'https://i.postimg.cc/767dLj8g/Crispy-Babycorn-Chilli-4.jpg'
  },
  {
    id: '35',
    name: 'Honey Chilli Baby Corn',
    price: 159,
    category: 'Starters',
    description: 'Sweet and spicy baby corn with a hint of honey and sesame.',
    image: 'https://i.postimg.cc/kGT0rKPf/honey-chilli-babycorn-recipe-1.webp'
  },
  {
    id: '36',
    name: 'Chilli Paneer',
    price: 189,
    category: 'Starters',
    description: 'Paneer cubes tossed in a classic Indo-Chinese chilli sauce.',
    image: 'https://i.postimg.cc/XNPLPQTK/chilli-paneer-recipe-01.jpg'
  },
  {
    id: '37',
    name: 'Mushroom Chilli',
    price: 229,
    category: 'Starters',
    description: 'Fresh mushrooms tossed in a spicy and tangy chilli sauce.',
    image: 'https://i.postimg.cc/SQZQbzrT/chilli-mashroom.jpg'
  },
  {
    id: '38',
    name: 'Chicken Dry Fry',
    price: 219,
    category: 'Starters',
    description: 'Spicy and crispy chicken pieces fried to perfection.',
    image: 'https://i.postimg.cc/YCKJ5pJ6/chicken-dry-fry.jpg'
  },
  {
    id: '39',
    name: 'Crispy Chicken',
    price: 239,
    category: 'Starters',
    description: 'Extra crunchy chicken strips served with a spicy dip.',
    image: 'https://i.postimg.cc/hvn2CjJY/crispy-chiken.jpg'
  },
  {
    id: '40',
    name: 'Garlic Chicken Dry',
    price: 239,
    category: 'Starters',
    description: 'Chicken pieces tossed in a rich garlic-infused spicy sauce.',
    image: 'https://i.postimg.cc/MT5BSKPL/garlic-chicken.jpg'
  },
  {
    id: '41',
    name: 'Chicken Manchurian Dry',
    price: 239,
    category: 'Starters',
    description: 'Classic chicken manchurian balls in a dry, spicy sauce.',
    image: 'https://i.postimg.cc/44tdV3bL/chickn-manchurian.jpg'
  },
  {
    id: '42',
    name: 'Dragon Chicken',
    price: 239,
    category: 'Starters',
    description: 'Thin chicken strips tossed in a fiery red sauce with cashews.',
    image: 'https://i.postimg.cc/fb94pVbg/dragon-chicek.jpg'
  },
  {
    id: '43',
    name: 'Honey Garlic Chicken',
    price: 259,
    category: 'Starters',
    description: 'Crispy chicken tossed in a sweet and savory honey garlic glaze.',
    image: 'https://i.postimg.cc/Y28PX63t/honey-garlic-chickn.jpg'
  },
  {
    id: '44',
    name: 'Chilli Chicken',
    price: 249,
    category: 'Starters',
    description: 'The all-time favorite Indo-Chinese chilli chicken.',
    image: 'https://i.postimg.cc/dtbjn3zT/chilli-chickn.jpg'
  },
  {
    id: '45',
    name: 'Drum Heaven',
    price: 289,
    category: 'Starters',
    description: 'Succulent chicken drumsticks in a heavenly spicy sauce.',
    image: 'https://i.postimg.cc/xjW6p6mk/drum-of-heaven.jpg'
  },
  {
    id: '46',
    name: 'Gobhi Manchurian',
    price: 159,
    category: 'Starters',
    description: 'Crispy cauliflower florets in a tangy manchurian sauce.',
    image: 'https://i.postimg.cc/XJBww0QL/gobi-mancgurian.jpg'
  },

  // Veg Main Course
  {
    id: '47',
    name: 'Aloo Jeera',
    price: 99,
    category: 'Veg Main Course',
    description: 'Potatoes sautéed with cumin seeds and Indian spices.',
    image: 'https://picsum.photos/seed/aloo-jeera-dish/400/300'
  },
  {
    id: '48',
    name: 'Dal Fry',
    price: 119,
    category: 'Veg Main Course',
    description: 'Yellow lentils tempered with aromatic spices and herbs.',
    image: 'https://picsum.photos/seed/dal-fry-indian/400/300'
  },
  {
    id: '49',
    name: 'Dum Aloo',
    price: 129,
    category: 'Veg Main Course',
    description: 'Slow-cooked potatoes in a rich and spicy gravy.',
    image: 'https://picsum.photos/seed/dum-aloo-curry/400/300'
  },
  {
    id: '50',
    name: 'Butter Dal Fry',
    price: 139,
    category: 'Veg Main Course',
    description: 'Creamy yellow lentils finished with a dollop of butter.',
    image: 'https://picsum.photos/seed/butter-dal/400/300'
  },
  {
    id: '51',
    name: 'Veg Korma',
    price: 199,
    category: 'Veg Main Course',
    description: 'Mixed vegetables cooked in a creamy and mildly spiced coconut-based gravy.',
    image: 'https://picsum.photos/seed/veg-korma/400/300'
  },
  {
    id: '52',
    name: 'Paneer Bhurji',
    price: 209,
    category: 'Veg Main Course',
    description: 'Scrambled paneer cooked with onions, tomatoes, and spices.',
    image: 'https://picsum.photos/seed/paneer-bhurji/400/300'
  },
  {
    id: '53',
    name: 'Mushroom Masala',
    price: 209,
    category: 'Veg Main Course',
    description: 'Fresh mushrooms cooked in a spicy onion-tomato gravy.',
    image: 'https://picsum.photos/seed/mushroom-masala/400/300'
  },
  {
    id: '54',
    name: 'Mixed Vegetable',
    price: 219,
    category: 'Veg Main Course',
    description: 'Assorted seasonal vegetables cooked in a traditional Indian gravy.',
    image: 'https://picsum.photos/seed/mixed-veg-curry/400/300'
  },
  {
    id: '55',
    name: 'Matar Paneer',
    price: 229,
    category: 'Veg Main Course',
    description: 'Paneer cubes and green peas cooked in a flavorful tomato-based gravy.',
    image: 'https://picsum.photos/seed/matar-paneer-dish/400/300'
  },
  {
    id: '56',
    name: 'Achaari Paneer',
    price: 249,
    category: 'Veg Main Course',
    description: 'Paneer cooked with pickling spices for a tangy and spicy flavor.',
    image: 'https://picsum.photos/seed/achaari-paneer/400/300'
  },
  {
    id: '57',
    name: 'Kadhai Paneer',
    price: 249,
    category: 'Veg Main Course',
    description: 'Paneer tossed with bell peppers and onions in a spicy kadhai masala.',
    image: 'https://picsum.photos/seed/kadhai-paneer/400/300'
  },
  {
    id: '58',
    name: 'Malai Kofta',
    price: 249,
    category: 'Veg Main Course',
    description: 'Fried vegetable and paneer balls in a rich and creamy white gravy.',
    image: 'https://picsum.photos/seed/malai-kofta-curry/400/300'
  },
  {
    id: '59',
    name: 'Paneer Do Pyaaz',
    price: 259,
    category: 'Veg Main Course',
    description: 'Paneer cooked with double the amount of onions in a rich gravy.',
    image: 'https://picsum.photos/seed/paneer-do-pyaaz/400/300'
  },
  {
    id: '60',
    name: 'Paneer Lababdar',
    price: 279,
    category: 'Veg Main Course',
    description: 'Paneer in a luscious tomato-cream gravy with grated paneer.',
    image: 'https://picsum.photos/seed/paneer-lababdar/400/300'
  },
  {
    id: '61',
    name: 'Paneer Butter Masala',
    price: 299,
    category: 'Veg Main Course',
    description: 'All-time favorite creamy and buttery paneer dish.',
    image: 'https://picsum.photos/seed/paneer-butter-masala-rich/400/300'
  },
  {
    id: '62',
    name: 'Mughlai Shahi Paneer',
    price: 349,
    category: 'Veg Main Course',
    description: 'Royal paneer dish cooked in a rich, nutty, and aromatic gravy.',
    image: 'https://picsum.photos/seed/shahi-paneer-royal/400/300'
  },
  {
    id: '63',
    name: 'Kashmiri Aloo',
    price: 149,
    category: 'Veg Main Course',
    description: 'Deep-fried potatoes in a spicy and aromatic Kashmiri gravy.',
    image: 'https://picsum.photos/seed/kashmiri-dum-aloo/400/300'
  },
  {
    id: '64',
    name: 'Palak Paneer',
    price: 269,
    category: 'Veg Main Course',
    description: 'Paneer cubes in a healthy and delicious spinach-based gravy.',
    image: 'https://picsum.photos/seed/palak-paneer-spinach/400/300'
  },

  // Non Veg Main Course
  {
    id: '5',
    name: 'Butter Chicken',
    price: 220,
    category: 'Non Veg Main Course',
    description: 'Creamy tomato-based curry with tender chicken pieces.',
    image: 'https://i.postimg.cc/pVhHn1x5/butter-chicken.jpg'
  },
  {
    id: '14',
    name: 'Tandoori Chicken',
    price: 280,
    category: 'Non Veg Main Course',
    description: 'Classic roasted chicken marinated in yogurt and spices.',
    image: 'https://i.postimg.cc/jSRmv8Vf/tandoori-chicken.jpg'
  },

  // Breads
  {
    id: '15',
    name: 'Masala Kulcha',
    price: 60,
    category: 'Breads',
    description: 'Soft Indian bread stuffed with spiced potato filling.',
    image: 'https://i.postimg.cc/mg0MBnbR/masala-kulcha.jpg'
  },
  {
    id: '16',
    name: 'Garlic Naan',
    price: 70,
    category: 'Breads',
    description: 'Leavened bread topped with minced garlic and butter.',
    image: 'https://i.postimg.cc/QtNM3gWW/garlic-naan.jpg'
  },
  {
    id: '21',
    name: 'Butter Roti',
    price: 20,
    category: 'Breads',
    description: 'Whole wheat flatbread with a dollop of butter.',
    image: 'https://i.postimg.cc/SR2kSgQb/butter-roti.jpg'
  },

  // Rice
  {
    id: '22',
    name: 'Steamed Rice',
    price: 80,
    category: 'Rice',
    description: 'Fluffy and perfectly cooked basmati rice.',
    image: 'https://picsum.photos/seed/steamed-basmati-rice/400/300'
  },
  {
    id: '23',
    name: 'Jeera Rice',
    price: 100,
    category: 'Rice',
    description: 'Basmati rice tempered with cumin seeds and ghee.',
    image: 'https://picsum.photos/seed/jeera-rice-cumin/400/300'
  },

  // Biryani
  {
    id: '12',
    name: 'Chicken Biryani',
    price: 250,
    category: 'Biryani',
    description: 'Fragrant basmati rice cooked with tender chicken and spices.',
    image: 'https://picsum.photos/seed/chicken-biryani-rice/400/300'
  },
  {
    id: '13',
    name: 'Veg Biryani',
    price: 180,
    category: 'Biryani',
    description: 'Aromatic rice dish with seasonal vegetables and saffron.',
    image: 'https://picsum.photos/seed/veg-biryani-rice/400/300'
  },

  // Veg Fried Rice
  {
    id: '6',
    name: 'Veg Fried Rice',
    price: 120,
    category: 'Veg Fried Rice',
    description: 'Wok-tossed rice with fresh seasonal vegetables.',
    image: 'https://picsum.photos/seed/veg-fried-rice-chinese/400/300'
  },

  // Non Veg Fried Rice
  {
    id: '24',
    name: 'Chicken Fried Rice',
    price: 160,
    category: 'Non Veg Fried Rice',
    description: 'Wok-tossed rice with chicken pieces and eggs.',
    image: 'https://picsum.photos/seed/chicken-fried-rice-chinese/400/300'
  },

  // Noodles
  {
    id: '3',
    name: 'Chicken Hakka Noodles',
    price: 150,
    category: 'Noodles',
    description: 'Classic Indo-Chinese noodles with chicken and vegetables.',
    image: 'https://images.pexels.com/photos/4223925/pexels-photo-4223925.jpeg'
  },
  {
    id: '25',
    name: 'Veg Hakka Noodles',
    price: 130,
    category: 'Noodles',
    description: 'Stir-fried noodles with crisp vegetables and soy sauce.',
    image: 'https://picsum.photos/seed/veg-hakka-noodles/400/300'
  },

  // Pasta
  {
    id: '26',
    name: 'White Sauce Pasta',
    price: 180,
    category: 'Pasta',
    description: 'Creamy pasta with mushrooms, corn, and bell peppers.',
    image: 'https://picsum.photos/seed/white-sauce-pasta/400/300'
  },
  {
    id: '27',
    name: 'Red Sauce Pasta',
    price: 170,
    category: 'Pasta',
    description: 'Tangy tomato-based pasta with herbs and spices.',
    image: 'https://picsum.photos/seed/red-sauce-pasta/400/300'
  },

  // Snacks
  {
    id: '11',
    name: 'Veg Manchurian',
    price: 160,
    category: 'Snacks',
    description: 'Vegetable balls in a tangy and spicy soy-based gravy.',
    image: 'https://picsum.photos/seed/veg-manchurian-balls/400/300'
  },
  {
    id: '8',
    name: 'Gulab Jamun',
    price: 60,
    category: 'Snacks',
    description: 'Warm milk-solid based sweets in sugar syrup.',
    image: 'https://picsum.photos/seed/gulab-jamun-sweet/400/300'
  },
  {
    id: '18',
    name: 'Chocolate Brownie',
    price: 150,
    category: 'Snacks',
    description: 'Warm, gooey chocolate brownie served with chocolate sauce.',
    image: 'https://picsum.photos/seed/chocolate-brownie-dessert/400/300'
  },

  // Maggi
  {
    id: '28',
    name: 'Masala Maggi',
    price: 50,
    category: 'Maggi',
    description: 'The classic comfort food with extra masala and veggies.',
    image: 'https://picsum.photos/seed/masala-maggi-noodles/400/300'
  },
  {
    id: '29',
    name: 'Cheese Maggi',
    price: 70,
    category: 'Maggi',
    description: 'Creamy Maggi loaded with melted cheese.',
    image: 'https://picsum.photos/seed/cheese-maggi-noodles/400/300'
  },

  // Rolls
  {
    id: '30',
    name: 'Chicken Egg Roll',
    price: 90,
    category: 'Rolls',
    description: 'Spiced chicken and egg wrapped in a crispy paratha.',
    image: 'https://picsum.photos/seed/chicken-egg-roll-wrap/400/300'
  },
  {
    id: '31',
    name: 'Paneer Roll',
    price: 80,
    category: 'Rolls',
    description: 'Marinated paneer and veggies in a soft wrap.',
    image: 'https://picsum.photos/seed/paneer-roll-wrap/400/300'
  },

  // Drinks (Beverages)
  {
    id: '4',
    name: 'Blue Lagoon',
    price: 99,
    category: 'Drinks (Beverages)',
    description: 'Refreshing citrus mocktail with a vibrant blue hue.',
    image: 'https://images.pexels.com/photos/1289256/pexels-photo-1289256.jpeg'
  },
  {
    id: '7',
    name: 'Virgin Mojito',
    price: 80,
    category: 'Drinks (Beverages)',
    description: 'Classic mint and lime refresher.',
    image: 'https://picsum.photos/seed/virgin-mojito-drink/400/300'
  },
  {
    id: '17',
    name: 'Cold Coffee',
    price: 120,
    category: 'Drinks (Beverages)',
    description: 'Rich and creamy chilled coffee with a hint of chocolate.',
    image: 'https://picsum.photos/seed/cold-coffee-glass/400/300'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Rahul Sharma',
    rating: 5,
    comment: 'Amazing rooftop ambience and the Chicken 65 is a must-try!',
    date: '2 weeks ago'
  },
  {
    id: '2',
    author: 'Priya Das',
    rating: 4,
    comment: 'Great place for family dinner. Very affordable and friendly staff.',
    date: '1 month ago'
  },
  {
    id: '3',
    author: 'Amit Gogoi',
    rating: 4,
    comment: 'The view from the rooftop is beautiful. Good music and vibe.',
    date: '3 weeks ago'
  }
];
