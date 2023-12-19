import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Bars/Footer/Footer'
import Header from './Bars/Header/Header'
import MakeRecord from './Components/Modals/MakeRecord/MakeRecord'
import DoctorPage from './Pages/Doctors-page/doctor-page.jsx'
import Main from './Pages/Main/Main'
import StockPage from './Pages/Stock-page/stock-page.jsx'


export default function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path='/'>
						<Route index element={ <Main /> } />
					</Route>
					<Route path='/stock'>
						<Route index element={ <StockPage /> } />
					</Route>
					<Route path='/doctors'>
						<Route index element={ <DoctorPage /> } />
					</Route>
				</Routes>
			</main>
			<Footer />
			<MakeRecord />
		</>
	)
}