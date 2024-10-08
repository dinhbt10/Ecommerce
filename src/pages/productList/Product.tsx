import { Link } from 'react-router-dom'

type Props = {}

const Product = (props: Props) => {
  return (
    <Link to='/'>
      <div className='bg-white shadow rounded-sm hover:translate-y-[-0.0625rem] hover:shadow-md duration-100 transition-transform'>
        <div className='w-full pt-[100%] relative'>
          <img
            src='https://png.pngtree.com/background/20230528/original/pngtree-animation-backgrounds-wallpapers-wallpapers-2k-picture-image_2778513.jpg'
            alt=''
            className='absolute top-0 left-0 bg-white w-full h-full object-cover'
          />
        </div>
        <div className='p-2 overflow-hidden'>
          <div className='min-h-[2rem] line-clamp-2 text-xs'>
            Thắt lưng nam da cao cấp Dabaraac mặt khóa mạ kim tự động kiểu dang basic sang trọng TL48
          </div>
          <div className='flex items-center mt-3'>
            <div className='max-w-[50%] text-gray-500 truncate'>
              <span className='text-xs'>đ</span>
              <span className='line-through'>5.000</span>
            </div>
            <div className='text-orange truncate ml-1'>
              <span className='text-xs'>đ</span>
              <span>2.000</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product
