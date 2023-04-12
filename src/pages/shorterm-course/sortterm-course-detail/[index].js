import SalesMentor from '../../../components/pages-partials/ParticularCourse/salesMentor'
import React from 'react'
import ProgramFor from '../../../components/pages-partials/ParticularCourse/ProgramFor/chiragProg'
import HowItWork from '../../../components/pages-partials/ParticularCourse/Howitwork'
import Licended from '../../../components/pages-partials/ParticularCourse/LicensedProg'
import EnrollNow from '../../../components/pages-partials/ParticularCourse/EnrollNow'
import Question from '../../../components/pages-partials/home/SalesTelent/Question'
import SecondSharedLayout from '../../../components/layout/shared-layout/SecondSharedLayout'

const AniruddhaAthawale = () => {
  return (
    <div>
      <SecondSharedLayout>
        <SalesMentor title="Master and Learn Sales 
Distribution Channel in FMCG" secondtit="Learn the Fundamentals and Key Components of Distribution Channel in FMCG Sales" img="/img/anni.png"></SalesMentor>
        <HowItWork />
        <ProgramFor />
        <Licended />
        <EnrollNow />
        <Question />
      </SecondSharedLayout>
    </div>
  )
}

export default AniruddhaAthawale