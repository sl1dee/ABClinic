import useScrollTop from '@hooks/use-scroll-top.js'
import { burgerIsOpenSelector, qualityIsOpenSelector, signUpIsOpenSelector } from '@store/selectors/modals.js'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import ChatButton from '@components/chat-button/index.js'
import Cookie from '@components/cookie/cookie'
import Footer from '@components/footer'
import Header from '@components/header'
import Sidebar from '@components/header/sidebar/index.js'
import QualityModal from '@components/modals/quality-modal/index.js'
import SignUpModal from '@components/modals/sign-up-modal/index.js'

const MainLayout = ({ children }) => {
	const signUpIsOpen = useSelector(signUpIsOpenSelector)
	const qualityUpIsOpen = useSelector(qualityIsOpenSelector)
	const burgerIsOpen = useSelector(burgerIsOpenSelector)

	useScrollTop()
	return (
		<>
			<Header />
			{children}
			<ChatButton />
			<Footer />
			<Cookie />
			{burgerIsOpen && <Sidebar />}
			{signUpIsOpen && <SignUpModal />}
			{qualityUpIsOpen && <QualityModal />}
		</>
	)
}

export default memo(MainLayout)
