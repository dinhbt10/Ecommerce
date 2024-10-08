type Props = {}
import { FiChevronLeft } from 'react-icons/fi'
import { FiChevronRight } from 'react-icons/fi'

const SortProductList = (props: Props) => {
  return (
    <div className='bg-gray-300/40 py-4 px-3'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex items-center flex-wrap gap-2'>
          <div>Sắp xếp theo</div>
          <button className='h-8 px-4 capitalize bg-orange text-white text-sm hover:bg-orange/80 text-center'>
            Phổ biến
          </button>
          <button className='h-8 px-4 capitalize bg-white text-black text-sm hover:bg-slate-100 text-center'>
            Mới nhất
          </button>
          <button className='h-8 px-4 capitalize bg-white text-black text-sm hover:bg-slate-100 text-center'>
            Bán chạy
          </button>
          <select className='h-8 px-4 capitalize bg-white text-black text-sm hover:bg-slate-100 text-left outline-none'>
            <option value='' disabled>
              Giá
            </option>
            <option value='price:asc'>Giá: Thấp đến cao</option>
            <option value='price:desc'>Giá: Cao đến thấp</option>
          </select>
        </div>
        <div className='flex items-center'>
          <div>
            <span className='text-orange'>1</span>
            <span>/2</span>
          </div>
          <div className='ml-2'>
            <button className='px-3 h-8 rounded-tl-sm cursor-not-allowed bg-white/60 hover:bg-slate-100'>
              <FiChevronLeft />
            </button>
            <button className='px-3 h-8 rounded-tl-sm cursor-pointer bg-white hover:bg-slate-100'>
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SortProductList
