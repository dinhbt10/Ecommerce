import { Product, ProductList, ProductListConfig } from 'src/types/product.type'
import { SuccessResponseAPI } from 'src/types/utils.type'
import instance from 'src/utils/http'

const URL = 'products'

const productApi = {
  getProduct(params: ProductListConfig) {
    return instance.get<SuccessResponseAPI<ProductList>>(URL, {
      params
    })
  },
  getProductDetail(id: string) {
    return instance.get<SuccessResponseAPI<Product>>(`${URL}/${id}`)
  }
}

export default productApi
