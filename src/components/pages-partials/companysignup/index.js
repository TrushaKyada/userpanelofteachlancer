
import FormSharedLayout from '../../layout/shared-layout/FormSharedLayout'
import React from 'react'
import FixPart from './../login/FixPart'
import CompSignUp from './signupForm'

const MainSignup = () => {
    return (
        <FormSharedLayout>
            <div className='grid flex gap-5 lg:grid-cols-2 grid-cols-1 '>
                <div className=''>
                    <FixPart />
                </div>
                <div className=''>
                    <CompSignUp />
                </div>
            </div>
        </FormSharedLayout>
    )
}

export default MainSignup