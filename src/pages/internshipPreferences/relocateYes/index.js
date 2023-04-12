import SharedLayout from '@/components/layout/shared-layout'
import FormSharedLayout from '@/components/layout/shared-layout/FormSharedLayout'
import RelocateYes from '@/components/pages-partials/InternshipPreferences/RelocateYes'
import React from 'react'

const relocateyes = () => {
  return (
    <div>
      <FormSharedLayout>
        <RelocateYes />
      </FormSharedLayout>
    </div>
  )
}

export default relocateyes