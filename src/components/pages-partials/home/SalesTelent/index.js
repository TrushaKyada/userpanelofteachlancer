import SecondSharedLayout from '../../../layout/shared-layout/SecondSharedLayout'
import React from 'react'
import Friend from './friend'
import Partner from './partner'
import Question from './Question'
import RecentBlog from './recentBlog'
import RightSale from './rightSale'
import SalesJob from './SalesJob'
import SalesResource from './salesResource'
import Skillset from './Skillset'
import StartApply from './StartApply'


const Salestelent = () => {
    return (
        <>
           
            <SecondSharedLayout>
                <SalesJob />
                <RightSale />
                <Partner />
                <Skillset />
                <Friend />
                <RecentBlog />
                <SalesResource />
                <Question />
                <StartApply />
            </SecondSharedLayout>
        </>
    )
}

export default Salestelent