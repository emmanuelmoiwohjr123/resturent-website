import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Herb-Crusted Salmon',
    description: 'Fresh Atlantic salmon with a crispy herb crust, served with seasonal vegetables and lemon butter sauce.',
    price: 28,
    category: 'mains',
    image: 'https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Truffle Risotto',
    description: 'Creamy Arborio rice with wild mushrooms, truffle oil, and Parmigiano-Reggiano cheese.',
    price: 24,
    category: 'mains',
    image: 'https://images.pexels.com/photos/6033968/pexels-photo-6033968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Filet Mignon',
    description: '8oz grass-fed beef tenderloin with garlic mashed potatoes and red wine reduction.',
    price: 36,
    category: 'mains',
    image: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Burrata & Heirloom Tomato',
    description: 'Fresh burrata cheese with heirloom tomatoes, basil, extra virgin olive oil, and balsamic glaze.',
    price: 16,
    category: 'starters',
    image: 'https://images.pexels.com/photos/10897346/pexels-photo-10897346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    name: 'Tuna Tartare',
    description: 'Fresh ahi tuna with avocado, cucumber, and citrus soy dressing, served with wonton crisps.',
    price: 18,
    category: 'starters',
    image: 'https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    name: 'Chocolate Soufflé',
    description: 'Warm chocolate soufflé with vanilla bean ice cream and raspberry coulis.',
    price: 14,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 7,
    name: 'Crème Brûlée',
    description: 'Classic vanilla bean custard with caramelized sugar crust.',
    price: 12,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/8964616/pexels-photo-8964616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 8,
    name: 'Signature Cocktail',
    description: 'House-crafted blend of premium spirits, fresh herbs, and seasonal fruits.',
    price: 15,
    category: 'drinks',
    image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const menuCategories = [
  { id: 'all', name: 'All' },
  { id: 'starters', name: 'Starters' },
  { id: 'mains', name: 'Main Courses' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'drinks', name: 'Drinks' }
];