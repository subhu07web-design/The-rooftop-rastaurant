export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'Starters' | 'Veg Main Course' | 'Non Veg Main Course' | 'Breads' | 'Rice' | 'Biryani' | 'Veg Fried Rice' | 'Non Veg Fried Rice' | 'Noodles' | 'Pasta' | 'Snacks' | 'Maggi' | 'Rolls' | 'Drinks (Beverages)';
  description: string;
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}
