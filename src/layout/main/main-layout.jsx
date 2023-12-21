import useScrollTop from '@hooks/use-scroll-top.js'
import { memo } from 'react'

import Footer from '@components/footer'
import Header from '@components/header'

const MainLayout = ({ children }) => {
	useScrollTop()
	return (
		<>
			<Header />
			{children}
			{/* <Footer /> */}
		</>
	)
}

export default memo(MainLayout)
