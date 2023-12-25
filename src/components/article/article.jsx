import cn from 'classnames'
import React, { useMemo } from 'react'

import cl from './article.module.scss'

// import MakeRecord from '../Modals/MakeRecord/MakeRecord.jsx'

const Article = () => {
	const questionList = useMemo(
		() => [
			{
				id: 0,
				text: 'Можно ли использовать самые простые зубные щётки из масс-маркета?'
			},
			{
				id: 1,
				text: 'По каким критериям выбирать электрические щетки?'
			},
			{
				id: 2,
				text: 'Что в составе зубной пасты должно насторожить, а что — обязательно присутствовать?'
			}
		],
		[]
	)
	const adviceList = useMemo(
		() => [
			{
				id: 1,
				title: 'Выбирайте зубную щетку с маленькой головкой',
				text: 'При выборе зубной щётки важно обращать внимание на головку: чем она меньше, тем более манёвренной щётка окажется при  чистке и тем легче будет использовать её в труднодоступных местах. Подсказка: головка щётки должна покрывать два жевательных зуба.'
			},
			{
				id: 2,
				title: 'Самое главное — густота щетины, а не резиновые вставки',
				text: 'У правильной щётки должна быть ровно подстриженная щетина с большим количеством щетинок — чем она гуще, тем лучше удаляет зубной налёт и полирует эмаль. Различные резиновые вставки в головку щётки не нужны: на самом деле, они не несут никакой пользы, а просто удешевляют стоимость изделия.'
			},
			{
				id: 3,
				title: 'Мягкая щетина всегда лучше, чем жесткая',
				text: 'Лучше использовать щётку с мягкой щетиной — она отлично справляется с очищением зубов (при наличии большого количества щетинок), при этом меньше травмирует зубы. А вот использование жёстких зубных щёток, особенно в сочетании с неправильной техникой чистки, ведёт к негативным последствиям: стиранию эмали, оголению дёсен. Щётки средней жёсткости обычно назначаются пациентам, которые курят, пьют много кофе, часто едят продукты, окрашивающие зубы.'
			},
			{
				id: 4,
				title: 'Будьте аккуратны с электрической щеткой',
				text: 'Самое важное в чистке зубов — достаточная длительность (2–3 минуты) и  правильная техника. Обратите особое внимание на свою технику, если используете электрическую зубную щётку. Электрическая щётка совершает большое количество движений — у некоторых оно достигает 7 тысяч оборотов в минуту (и до 40 тысяч колебаний среди ультразвуковых). Повторить такое рукой просто невозможно. При этом вред от неправильной чистки зубов электрической щёткой больше, чем от неправильной чистки мануальной щёткой. Чтобы не допустить повреждений, прочищайте каждый зуб по отдельности, немного отступая от десны. Использование электрической щётки в зонах с тонкой эмалью может привести к клиновидным дефектам, оголению десны. Поэтому дочищать зоны рядом с десной рекомендуется монопучковой щёткой.'
			},
			{
				id: 5,
				title: 'Лучшие из электрических зубных щеток — ультразвуковые',
				text: 'Они хороши тем, что «разбивают» налёт ещё и с помощью ультразвуковых колебаний. Выбирая электрическую щётку с ультразвуком, обратите внимание на её щетину — она тоже должна быть мягкой, а резиновые вставки, как и в случае с механическими щётками, не несут никакой пользы. Хорошо, если на устройстве присутствует индикатор давления — в таком случае при излишнем нажатии на зубы она подаст вам звуковой сигнал или замигает. Режимы бережной чистки, чистки чувствительных зубов — тоже дополнительные преимущества.'
			},
			{
				id: 6,
				title: 'Перед покупкой пасты изучите ее состав — никаких парабенов и красителей',
				text: 'Лучше всего подбирать профилактическую пасту вместе со стоматологом. Если у вас нет возможности посоветоваться с врачом, то перед покупкой пасты изучите её  состав. В нем не должно быть антисептиков (хлоргексидин, триклозан), SLS (содиум лаурилсульфат натрия), парабенов, красителей. Цена качественной пасты, как правило, стартует от 200 рублей.'
			},
			{
				id: 7,
				title: 'Детские зубные пасты должны отличаться от взрослых составом',
				text: 'Например, меньшим количеством или отсутствием абразивных частиц, которые могут повредить неокрепшую эмаль, а также меньшей концентрацией добавок. После 3-х лет важно использовать пасту с аминофторидами — коренные зубы прорезывается с ещё несозревшей эмалью, и нужно обеспечить им дополнительное питание. Содержание аминофторидов в детской пасте должно быть не менее 1200ppm — обычно эта цифра всегда присутствует на упаковке. Вы можете чередовать пасты с фтором и пасты с кальцием — используя каждую в течение одного месяца. При этом пасты для детей до 3-х лет должны содержать минимум фтора или не содержать его вообще — чтобы избежать проглатывания.'
			}
		],
		[]
	)

	return (
		<div className={cl.article}>
			<div className="container">
				<div className={cn([cl.articleContent, 'd-flex', 'flex-column'])}>
					<div className={cl.articlesRoute}>Блог / Как выбрать зубную щетку и пасту?</div>
					<div className={cl.articleTitle}>Как выбрать зубную щётку и пасту?</div>
					<img src="/assets/img/article/toothbrushes-XL.svg" alt="" />
					<div className={cn([cl.doctor, 'd-flex', 'flex-column', 'flex-sm-row'])}>
						<div className={cn([cl.doctorProfile, 'd-flex'])}>
							<img src="/assets/img/article/doctor-portrait-M.svg" className={cl.doctorPortrait} alt="doctorPortrait" />
							<div className={cn([cl.doctorInformation, 'd-flex', 'flex-column'])}>
								<div className={cl.doctorProfession}>Врач-ортодонт</div>
								<div className={cl.doctorName}>Иванова Александра</div>
							</div>
						</div>
						<div className={cl.questions}>
							<ul className={cl.questionList}>
								{questionList.map(({ id, text }) => (
									<li key={id}>{text}</li>
								))}
							</ul>
						</div>
					</div>
					<div className={cn([cl.advices, 'd-flex', 'flex-column'])}>
						{adviceList.map(({ id, title, text }) => (
							<div className={cn([cl.adviceBlock, 'd-flex', 'flex-column'])}>
								<div className={cl.adviceTitle}>
									{id}. {title}
								</div>
								<div className={cl.adviceText}>{text}</div>
							</div>
						))}
					</div>
					<div className={cl.articlesRoute}>Опубликовано 11.11.23</div>
					<div className={cn([cl.appointment, 'd-flex'])}>
						{/* <MakeRecord /> */}
						{/* <img src="/media/makeRecord/one.jpg" className={cl.tools} alt="" /> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Article
