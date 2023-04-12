import FormSharedLayout from '../../layout/shared-layout/FormSharedLayout'
import React from 'react'
import Form from '../contact/Form'
import GetInTouch from '../contact/getintouch'

const Contact = () => {
  return (
    <>
        <FormSharedLayout>
            <GetInTouch />
            <Form />
        </FormSharedLayout>
    </>

  )
}

export default Contact