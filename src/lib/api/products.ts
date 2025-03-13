export async function fetchProducts(): Promise<ProductsResponse> {
  try {
    const response = await fetch('/api/products')

    if (!response.ok) {
      throw new Error('Erro ao buscar produtos')
    }

    const data: ProductsResponse = await response.json()

    return data
  } catch (error) {
    console.error('Erro ao buscar produtos:', error)

    return { success: false, products: [] }
  }
}
