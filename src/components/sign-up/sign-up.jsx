import cn from 'classnames'
import React from 'react'
import InputMask from 'react-input-mask'

import Button from '@ui/button/button.jsx'

import cl from './sign-up.module.scss'

const SignUp = () => {
	return (
		<div className={cl.signUpContainer}>
			<div className="container">
				<div className={cn([cl.signUpBlock, 'd-flex', 'flex-column', 'flex-sm-row'])}>
					<div className={cl.signUpInformation}>
						<div className={cn([cl.signUpText, 'mb-0'])}>Жду вас у себя на приёме!</div>
						<h1 className={cn([cl.signUpTitle, 'mb-0'])}>Записаться на приём</h1>
						<div className={cn([cl.askBlockFields, 'd-flex', 'flex-column'])}>
							<div className="d-flex flex-column">
								<InputMask name="name" size="16" placeholder="Ваше имя" required />
							</div>
							<div className="d-block d-xs-block d-sm-block d-md-none">
								<InputMask name="phone" size="16" placeholder="Email" required />
							</div>
							<div className="d-flex flex-column">
								<InputMask mask="+7 999 999-99-99" name="phone" size="16" placeholder="Номер телефона" required />
							</div>
							<Button className={cl.btn}>Записаться</Button>
						</div>
						<div className={cl.bckgIcon} />
					</div>
					<div className={cl.signUpImage} />
				</div>
			</div>
		</div>
	)
}

export default SignUp
