import React from 'react'

import HowItWorks from '@components/how-it-works/index.js'
import LoyaltyProgram from '@components/loyalty-program/index.js'
import OurGoal from '@components/our-goal/our-goal.jsx'
import SignUp from '@components/sign-up/index.js'

import MainLayout from '../../layout/main/main-layout.jsx'

const LoyaltyProgramPage = () => {
	return (
		<MainLayout>
			<LoyaltyProgram />
			<HowItWorks />
			<OurGoal />
			<SignUp />
		</MainLayout>
	)
}

export default LoyaltyProgramPage
