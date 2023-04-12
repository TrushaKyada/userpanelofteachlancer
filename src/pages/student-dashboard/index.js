import MainStudentDashboard from '../../components/pages-partials/StudentDashboard/Maindashboard/index'
import SecondSharedLayout from '../../components/layout/shared-layout/SecondSharedLayout'
import React from 'react'

const studentDashboard = () => {
  return (
    <div>
      <SecondSharedLayout>
        <MainStudentDashboard />
      </SecondSharedLayout>
    </div>
  )
}

export default studentDashboard