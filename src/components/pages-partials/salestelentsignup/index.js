import React from 'react'
import SharedLayout from '@/components/layout/shared-layout'
import FixPart from '../login/FixPart'
import SalesSignup from './salesSignup'
import SecondSharedLayout from '@/components/layout/shared-layout/SecondSharedLayout'
const SaleTelentSignup = () => {
    return (
        <SecondSharedLayout>
            <div className='grid flex gap-5 lg:grid-cols-2 md:grid-cols-1 sm:col-auto'>
                <div className=''>
                    <FixPart />
                </div>
                <div className=''>
                    <SalesSignup />
                </div>
            </div>
        </SecondSharedLayout>
    )
}

export default SaleTelentSignup 