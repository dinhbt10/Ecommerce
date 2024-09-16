import Footer from 'src/components/layout/Footer'
import Header from './Header'

interface Props {
  children?: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
