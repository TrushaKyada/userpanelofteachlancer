import SharedLayout from '@/components/layout/shared-layout'
import SecondSharedLayout from '@/components/layout/shared-layout/SecondSharedLayout'
import React from 'react'
import AcademyLogin from './AcademyLogin'

const MainAcademyLogin = () => {
  return (
    <div>

      <SecondSharedLayout>
        <AcademyLogin />
      </SecondSharedLayout>
    </div>
  )
}

export default MainAcademyLogin