import React, { useRef } from 'react'

import HowItWorks from '@components/how-it-works/index.js'
import LoyaltyProgram from '@components/loyalty-program/index.js'
import OurGoal from '@components/our-goal/our-goal.jsx'
import SignUpLoyalty from '@components/sign-up-loyalty/index.js'

import MainLayout from '../../layout/main/main-layout.jsx'

const LoyaltyProgramPage = () => {
	const fourthComponentRef = useRef(null)

	const scrollToFourthComponent = () => {
		fourthComponentRef.current.scrollIntoView({ behavior: 'smooth' })
	}

	const handleForwardRef = (ref) => {
		fourthComponentRef.current = ref.current
	}

	return (
		<MainLayout>
			<LoyaltyProgram scrollToFourthComponent={scrollToFourthComponent} />
			<HowItWorks />
			<OurGoal />
			<SignUpLoyalty forwardedRef={handleForwardRef} />
		</MainLayout>
	)
}

export default LoyaltyProgramPage
