export const ProductData =  [
  {
    productId: '001',
    productName: 'Laptop',
    productDescription:
      'Dell Inspiron 15-inch Laptop with an Intel i7 processor, 8GB RAM, and 256GB SSD. Perfect for everyday computing and multimedia tasks.',
    price: 1000.0,
    imageUrl: 'https://picsum.photos/id/237/200/300',
    productFeatures: [
      'Intel i7 processor',
      '8GB RAM',
      '256GB SSD',
      'Integrated Graphics',
      '15-inch display',
    ],
  },
  {
    productId: '002',
    productName: 'Smartphone',
    productDescription:
      'Samsung Galaxy S21 with a 6.5-inch AMOLED display, 64GB storage, and a triple-camera setup. Experience mobile computing at its finest.',
    price: 500.0,
    imageUrl: 'https://picsum.photos/id/238/200/300',
    productFeatures: [
      '6.5-inch AMOLED display',
      '64GB storage',
      'Triple-camera setup',
      '4000mAh battery',
      '5G capability',
    ],
  },
  {
    productId: '003',
    productName: 'Headphones',
    productDescription:
      'Bose QuietComfort 35 wireless headphones with noise-cancelling technology. Enjoy music in its purest form without distractions.',
    price: 150.0,
    imageUrl: 'https://picsum.photos/id/239/200/300',
    productFeatures: [
      'Wireless',
      'Noise-cancelling technology',
      'Over-ear design',
      '20-hour battery life',
      'Built-in microphone',
    ],
  },
  {
    productId: '004',
    productName: 'Smartwatch',
    productDescription:
      'Apple Watch Series 6 in Space Gray. Monitor your health, track workouts, and stay connected on the go.',
    price: 350.0,
    imageUrl: 'https://picsum.photos/id/240/200/300',
    productFeatures: [
      'Heart rate monitor',
      'Sleep tracking',
      'GPS',
      'Waterproof',
      'App Store integration',
    ],
  },
  {
    productId: '005',
    productName: 'Gaming Console',
    productDescription:
      'Sony PlayStation 5 with ultra-high-speed SSD and ray tracing. Dive into a new generation of gaming.',
    price: 499.0,
    imageUrl: 'https://picsum.photos/id/241/200/300',
    productFeatures: [
      'Ultra-high-speed SSD',
      'Ray tracing',
      '120Hz refresh rate support',
      '8K resolution support',
      'VR integration',
    ],
  },
  {
    productId: '006',
    productName: 'Digital Camera',
    productDescription:
      'Canon EOS R5 Mirrorless Digital Camera with a 45MP full-frame sensor. Capture moments in stunning detail.',
    price: 3899.0,
    imageUrl: 'https://picsum.photos/id/242/200/300',
    productFeatures: [
      '45MP full-frame sensor',
      'Mirrorless design',
      '8K video recording',
      '5-axis in-body stabilization',
      'Dual Pixel autofocus',
    ],
  },
  {
    productId: '007',
    productName: 'Bluetooth Speaker',
    productDescription:
      'JBL Flip 5 portable bluetooth speaker. Rich sound, waterproof design, and 12 hours of playtime.',
    price: 120.0,
    imageUrl: 'https://picsum.photos/id/243/200/300',
    productFeatures: [
      'Bluetooth 5.0',
      'Waterproof design',
      '12 hours playtime',
      'Rich bass',
      'Portable design',
    ],
  },
  {
    productId: '008',
    productName: 'Smart Home Hub',
    productDescription:
      'Amazon Echo Dot (4th Gen). Control smart devices, play music, and get answers with Alexa.',
    price: 49.99,
    imageUrl: 'https://picsum.photos/id/244/200/300',
    productFeatures: [
      'Voice assistant - Alexa',
      'Music streaming',
      'Smart device control',
      'Intercom functionality',
      'Compact design',
    ],
  },
  {
    productId: '009',
    productName: 'Fitness Tracker',
    productDescription:
      'Fitbit Charge 4 with heart rate monitor, sleep tracking, and GPS. Push your fitness goals to the next level.',
    price: 129.95,
    imageUrl: 'https://picsum.photos/id/293/200/300',
    productFeatures: [
      'Heart rate monitor',
      'Sleep tracking',
      'GPS',
      'Waterproof design',
      '7-day battery life',
    ],
  },
  {
    productId: '0010',
    productName: 'Tablet',
    productDescription:
      'Apple iPad Pro 12.9-inch with A12Z Bionic chip, dual-camera system, and stunning Liquid Retina display.',
    price: 999.0,
    imageUrl: 'https://picsum.photos/id/290/200/300',
    productFeatures: [
      'A12Z Bionic chip',
      'Dual-camera system',
      'Liquid Retina display',
      'USB-C connector',
      'Face ID',
    ],
  },
  {
    productId: '0011',
    productName: 'Gaming Mouse',
    productDescription:
      'Logitech G Pro Wireless Gaming Mouse with Hero 25K sensor for ultimate speed and precision.',
    price: 129.99,
    imageUrl: 'https://picsum.photos/id/291/200/300',
    productFeatures: [
      'Wireless',
      'Hero 25K sensor',
      'Programmable buttons',
      'Ambidextrous design',
      'RGB lighting',
    ],
  },
  {
    productId: '0012',
    productName: 'VR Headset',
    productDescription:
      'Oculus Rift S PC-powered VR headset. Step into virtual reality with improved optics and ergonomic design.',
    price: 399.0,
    imageUrl: 'https://picsum.photos/id/248/200/300',
    productFeatures: [
      'PC-powered VR',
      'Improved optics',
      'Ergonomic design',
      'Touch controllers',
      '6DOF positional tracking',
    ],
  },
] as ProductDetail[];

export const Few_item_left_limit = 5;

export interface ProductDetail {
  productId: string;
  productName: string;
  productDescription: string;
  price: number;
  imageUrl: string;
  productFeatures: Array<string>;
  availableStock?: number; // dummy
  inCart?: number; // dummy
}
