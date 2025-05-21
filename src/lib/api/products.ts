interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
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
