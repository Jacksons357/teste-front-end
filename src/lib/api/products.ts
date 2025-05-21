interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

interface ProductsResponse {
  success: boolean;
  products: Product[];
}

import mockData from '../../mocks/products.json'

export async function fetchProducts(): Promise<ProductsResponse> {
  try {
    return mockData as unknown as ProductsResponse
  } catch (error) {
    console.error('Erro ao buscar produtos:', error)
    return { success: false, products: [] }
  }
}
