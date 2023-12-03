import Header from '@components/header'


const MainLayout = ({ children }) => {
	return (
		<>
			<Header/>
			{ children }
		</>
	)
}

export default MainLayout