interface Product {
  productName: string
  photo: string
  price: number
}

interface ProductsResponse {
  success: boolean
  products: Product[]
}
