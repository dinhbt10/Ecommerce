import { useQuery } from '@tanstack/react-query'
import AsideFilter from './AsideFilter'
import Product from './Product'
import SortProductList from './SortProductList'
import useQueryParams from 'src/hooks/useQueryParams'
import productApi from 'src/apis/product.api'

const ProductList = () => {
  const queryParams = useQueryParams()
  const { data } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => {
      return productApi.getProduct(queryParams)
    }
  })

  console.log(data)

  return (
    <div className='bg-gray-200 py-6 px-10'>
      <div className='container max-w-7xl mx-auto'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-3'>
            <AsideFilter />
          </div>
          <div className='col-span-9'>
            <SortProductList />
            <div className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3'>
              {Array(30)
                .fill(0)
                .map((_, index) => (
                  <div className='col-span-1' key={index}>
                    <Product />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
