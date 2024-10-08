import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import { TiThMenu } from 'react-icons/ti'
import { MdArrowRight } from 'react-icons/md'
import { FiFilter } from 'react-icons/fi'
import Input from 'src/components/Form'
import { Button } from 'src/components'
import { FaStar } from 'react-icons/fa6'

type Props = {}

const AsideFilter = (props: Props) => {
  return (
    <div className='p-4'>
      <Link to={path.home} className='flex items-center font-bold gap-3 uppercase'>
        <TiThMenu />
        Tất cả danh mục
      </Link>
      <div className='bg-gray-300 h-[1px] my-4' />
      <ul>
        <li className='py-2 pl-2'>
          <Link to={path.home} className='relative px-2 text-orange font-semibold'>
            <MdArrowRight className='fill-orange absolute top-1 left-[-10px]' />
            Thời trang nam
          </Link>
        </li>
        <li className='py-2 pl-2'>
          <Link to={path.home} className='relative px-2'>
            Thời trang nữ
          </Link>
        </li>
      </ul>
      <Link to={path.home} className='flex items-center font-bold mt-4 gap-3 uppercase'>
        <FiFilter />
        Bộ lọc tìm kiếm
      </Link>
      <div className='bg-gray-300 h-[1px] my-4' />
      <div className='my-5'>
        <div>Khoảng giá</div>
        <form className='mt-2'>
          <div className='flex items-start'>
            <Input
              type='text'
              className='grow'
              name='from'
              placeholder='đ Từ'
              classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
            />
            <div className='mx-2 mt-2 shrink-0'>-</div>
            <Input
              type='text'
              className='grow'
              name='from'
              placeholder='đ Đến'
              classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
            />
          </div>
          <Button className='w-full p-2 uppercase bg-orange text-white text-sm hover:bg-orange/80 flex justify-center items-center'>
            Áp dụng
          </Button>
        </form>
      </div>
      <div className='bg-gray-300 h-[1px] my-4' />
      <div className='text-sm'>Đánh giá</div>
      <ul className='my-3'>
        <li className='py-1 pl-2'>
          <Link to='' className='flex items-center text-sm'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <FaStar key={index} className='text-[#ffca11] mr-1' />
              ))}
            <span>Trở lên</span>
          </Link>
        </li>
        <li className='py-1 pl-2'>
          <Link to='' className='flex items-center text-sm'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <FaStar key={index} className='text-[#ffca11] mr-1' />
              ))}
            <span>Trở lên</span>
          </Link>
        </li>
      </ul>
      <div className='bg-gray-300 h-[1px] my-4' />
      <Button className='w-full p-2 uppercase bg-orange text-white text-sm hover:bg-orange/80 flex justify-center items-center'>
        Xóa tất cả
      </Button>
    </div>
  )
}

export default AsideFilter
