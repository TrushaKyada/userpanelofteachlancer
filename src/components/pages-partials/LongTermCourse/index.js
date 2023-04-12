import SharedLayout from '../../layout/shared-layout'
import React from 'react'
import LongTermSalesMentor from './LongTermSalesMentor'
import CourseDetail from './CourseDetail'
import Intro from '../ParticularCourse/Introdution'
import LongTermMasterProg from './LongMasterProg'
import Learn from './Learn'
import Become from './Become'
import LaunchCareer from './LaunchCareer'
import Question from '../home/SalesTelent/Question'
import LongTermQuestion from './LongTermQuestion'
import SecondSharedLayout from '../../../components/layout/shared-layout/SecondSharedLayout/index'

const MainLongTermCourse = () => {
    return (
        <div>
            <SecondSharedLayout>
                <LongTermSalesMentor img="../img/tanayag.png" title="Learn to Master the Art of Sales!" secondtit="Become Efficient and Effective at Selling as Possible. Build job-ready sales skills for an in-demand career these specializations are intended for sales professionals at any point in their career, whether they're just starting to apply for sales jobs or leading a global sales organization. . No degree or prior experience required. No matter where you are in your sales career, these specializations will take it to the next level." />
                <CourseDetail />
                <Intro img="../img/tanayinfo.png" info="Tanay started his career in Business Analytics as a part of research and consulting, but his keen interest led him into the world of startups and business growth towards which he eventually gravitated." name="Tanay Agarwal" />
                <LongTermMasterProg />
                <Learn />
                <Become />
                <LaunchCareer />
                <LongTermQuestion />
            </SecondSharedLayout>
        </div>
    )
}

export default MainLongTermCourse