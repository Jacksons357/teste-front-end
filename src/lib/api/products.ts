export async function fetchProducts(): Promise<ProductsResponse> {
  try {
    const response = await fetch(
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
    )

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
