
import React from 'react'
import Academy from './Academy'
import CourseOption from './CourseOption'
import SalesFriend from './SalesFriend'
import Trainers from './Trainers'
import Question from '../home/SalesTelent/Question'
import SecondSharedLayout from '../../../components/layout/shared-layout/SecondSharedLayout'

const MainSalesAcademy = () => {
  return (
    <div>
      <SecondSharedLayout>
        <Academy />
        <Trainers />
        <SalesFriend />
        <CourseOption />
        <Question />
      </SecondSharedLayout>
    </div>
  )
}

export default MainSalesAcademy