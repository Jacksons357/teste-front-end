export async function fetchProducts(): Promise<ProductsResponse> {
  try {
    const API_URL = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
    
    const response = await fetch(CORS_PROXY + API_URL)

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
