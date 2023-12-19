import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Bars/Footer/Footer'
import Header from './Bars/Header/Header'
import MakeRecord from './Components/Modals/MakeRecord/MakeRecord'
import Main from './Pages/Main/Main'
import Stock from './Pages/Main/Stock'


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
						<Route index element={ <Stock /> } />
					</Route>
				</Routes>
			</main>
			<Footer />
			<MakeRecord />
		</>
	)
}