import SharedLayout from '@/components/layout/shared-layout'
import FormSharedLayout from '@/components/layout/shared-layout/FormSharedLayout'
import React from 'react'
import InternshipPrefer from './InternshipPrefer'

const MainInternshipPreferences = () => {
  return (
    <div>
      <FormSharedLayout>
        <InternshipPrefer />
      </FormSharedLayout>
    </div>
  )
}

export default MainInternshipPreferences