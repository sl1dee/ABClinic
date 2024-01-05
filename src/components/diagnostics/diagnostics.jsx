import cn from 'classnames'
import React, { useMemo } from 'react'

import cl from './diagnostics.module.scss'

const Diagnostics = () => {
	const diagnosticsList = useMemo(
		() => [
			{
				id: 0,
				text: 'Прицельные рентгенографические снимки'
			},
			{
				id: 1,
				text: 'Компьютерная томография (КТ)'
			},
			{
				id: 2,
				text: 'Цифровое моделирование'
			},
			{
				id: 3,
				text: 'Расчёт телерентгенограмм (ТРГ)'
			}
		],
		[]
	)

	return (
		<div className={cl.diagnosticsContainer}>
			<div className="container">
				<div className={cn([cl.diagnosticsBlock, 'd-flex', 'flex-column'])}>
					<div className={cn([cl.diagnosticsInformation, 'd-flex', 'flex-column', 'flex-xl-row'])}>
						<h1 className={cl.diagnosticsTitle}>Диагностика</h1>
						<div className={cl.diagnosticsText}>
							Возможно, вам потребуются следующие процедуры, которые мы можем провести в нашей клинике, перед началом
							основного лечения.
						</div>
					</div>
					<div className={cn([cl.diagnosticsTable, 'd-grid'])}>
						{diagnosticsList.map(({ id, text }) => (
							<div key={id} className={cn([cl.tableContent, 'mb-0', 'd-flex'])}>
								<div className={cl.tablePoint} />
								{text}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Diagnostics
