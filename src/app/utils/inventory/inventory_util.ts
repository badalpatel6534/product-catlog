export const InventoryData = [
  {
    productId: '001',
    availableStock: 8,
  },
  {
    productId: '002',
    availableStock: 5,
  },
  {
    productId: '003',
    availableStock: 7,
  },
  {
    productId: '004',
    availableStock: 8,
  },
  {
    productId: '005',
    availableStock: 2,
  },
  {
    productId: '006',
    availableStock: 7,
  },
  {
    productId: '007',
    availableStock: 2,
  },
  {
    productId: '008',
    availableStock: 9,
  },
  {
    productId: '009',
    availableStock: 10,
  },
  {
    productId: '0010',
    availableStock: 4,
  },
  {
    productId: '0011',
    availableStock: 30,
  },
  {
    productId: '0012',
    availableStock: 30,
  }
];

export interface ProductInventory {
  productId: string;
  availableStock: number;
}