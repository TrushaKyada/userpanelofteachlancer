import SharedLayout from '@/components/layout/shared-layout'
import SecondSharedLayout from '@/components/layout/shared-layout/SecondSharedLayout'
import React from 'react'
import Question from '../home/SalesTelent/Question'
import EnrollNow from './EnrollNow'
import GetOffer from './GetOffer'
import HowItWork from './Howitwork'
import Intro from './Introdution'
import Licended from './LicensedProg'
import ProgramFor from './ProgramFor/chiragProg'
import SalesMentor from './salesMentor'


const MainParticularCourse = () => {
  return (
    <SecondSharedLayout>
      <SalesMentor title="Master Sales Strategies for 
Emerging Markets (NFT & 
Blockchain)" secondtit="Learn How to Establish Essential Pillars of Sales for Newer & Emerging Markets Like NFT and Blockchain" img="../img/Group 49.png" />
      <HowItWork />
      <ProgramFor />
      <Intro img="../img/image 23.png" info="Chirag Sharma is business develo pment head of the Blockchain startup, a strategy consultant,sales leader and product manager dedicated to building the future growth opportunities for the real world. To boost global results, he focused the company's offerings on sol utions for healthcare and financial services into the growing Blockchain market. " name="Chirag Sharma" />
      <Licended />
      <GetOffer />
      <EnrollNow />
      <Question />
    </SecondSharedLayout>
  )
}

export default MainParticularCourse