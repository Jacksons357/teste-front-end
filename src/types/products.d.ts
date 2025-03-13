interface Product {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

interface ProductsResponse {
  success: boolean
  products: Product[]
}
