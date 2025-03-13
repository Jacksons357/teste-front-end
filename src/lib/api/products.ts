export async function fetchProducts(): Promise<ProductsResponse> {
  const response = await fetch('/api/products')

  if (!response.ok) {
    throw new Error('Erro ao buscar produtos')
  }

  const data: ProductsResponse = await response.json()

  return data
}
