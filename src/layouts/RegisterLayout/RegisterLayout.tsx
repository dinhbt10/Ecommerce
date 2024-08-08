import React from 'react'
import Footer from 'src/components/layout/Footer'
import RegisterHeader from 'src/components/layout/RegisterHeader'

interface Props {
  children?: React.ReactNode
}

const RegisterLayout = ({ children }: Props) => {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}

export default RegisterLayout
