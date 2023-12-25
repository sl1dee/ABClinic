import React from 'react'
import { Route, Routes } from 'react-router-dom'
import footer from './Bars/footer/footer'
import header from './Bars/header/header'
import MakeRecord from './components/Modals/MakeRecord/MakeRecord.jsx'
import DoctorsPage from '@pages/doctors-page/doctors-page.jsx'
import ArticlePage from './pages/article-page/article-page.jsx'
import main-page from './pages/main-page/main-page'
import StockPage from './pages/stock-page/stock-page.jsx'
import ContactsPage from "@pages/contacts-page/contacts-page.jsx";

export default function App() {
	return (
		<>
			<header />
			<main>
				<Routes>
					{/*<Route path="/">*/}
					{/*	<Route index element={<main-page />} />*/}
					{/*</Route>*/}
					{/*<Route path="/stock">*/}
					{/*	<Route index element={<StockPage />} />*/}
					{/*</Route>*/}
					{/*<Route path="/article">*/}
					{/*	<Route index element={<ArticlePage />} />*/}
					{/*</Route>*/}
					{/*<Route path="/doctors">*/}
					{/*	<Route index element={<DoctorsPage />} />*/}
					{/*</Route>*/}
					{/*<Route path="/contacts">*/}
					{/*	<Route index element={<ContactsPage />} />*/}
					{/*</Route>*/}
				</Routes>
			</main>
			<footer />
			<MakeRecord />
		</>
	)
}
