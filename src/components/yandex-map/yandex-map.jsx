import point from '@assets/img/contactsBlock/placemark.svg'
import { debounce } from '@hooks/debounce.js'
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import { setSignUpIsOpen } from '@store/modules/modals.js'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '@ui/button/index.js'

export default function YandexMap() {
	const debounceMapChangeRef = useRef()
	const mapContainer = useRef()

	const map992 = {
		center: [54.773612, 56.079053],
		zoom: 17,
		controls: ['zoomControl', 'fullscreenControl']
	}

	const map768 = {
		center: [54.77471, 56.078815],
		zoom: 17,
		controls: ['zoomControl', 'fullscreenControl']
	}

	const map320 = {
		center: [54.773468, 56.082293],
		zoom: 17,
		controls: ['zoomControl', 'fullscreenControl']
	}

	const [currPreset, setCurrPreset] = useState(map992)

	const changePreset = () => {
		const width = mapContainer.current.offsetWidth

		if (width >= 992) {
			setCurrPreset(map992)
		}

		if (width >= 768 && width < 992) {
			setCurrPreset(map768)
		}

		if (width >= 320 && width < 768) {
			setCurrPreset(map320)
		}
	}

	useEffect(() => {
		window.addEventListener('resize', () => {
			debounce(changePreset, 300, debounceMapChangeRef)
		})
		changePreset()
		return () => {
			debounce(changePreset, 300, debounceMapChangeRef)
		}
	}, [])

	const dispatch = useDispatch()

	const openModalHandler = () => {
		dispatch(setSignUpIsOpen(true))
	}

	return (
		<section className="contactsBlock">
			<div className="container">
				<div className="contactsBlock-mapWrap">
					<div className="contactsBlock-map d-flex" ref={mapContainer}>
						<YMaps>
							<Map
								defaultState={map992}
								state={currPreset}
								modules={['control.ZoomControl', 'control.FullscreenControl']}
								width="100%"
								height="unset"
								className="flex-grow-1"
							>
								<Placemark
									geometry={[54.773893, 56.082325]}
									options={{
										iconLayout: 'default#image',
										iconImageHref: point,
										iconImageSize: [94, 94],
										iconImageOffset: [-47, -80]
									}}
								/>
							</Map>
						</YMaps>
					</div>
					<div className="contactsBlock-info d-flex flex-column">
						<div>
							<p className="contactsBlock-info-header mb-0">AB Clinic в Сипайлово</p>
						</div>
						<div>
							<p className="contactsBlock-info-contact mb-0">Уфа, ул. Академика Королева, 24</p>
						</div>
						<div>
							<a href="tel:+73472000424">
								<div>
									<p className="contactsBlock-info-contact mb-0">+7 347 200 04 24</p>
								</div>
							</a>
						</div>
						<div>
							<p className="contactsBlock-info-time mb-0">Открыто с 10:00 до 21:00</p>
						</div>
						<div className="d-flex">
							<Button onClick={openModalHandler}>Записаться</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
