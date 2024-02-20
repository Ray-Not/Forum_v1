import React from 'react';
import Logo from './Logo'
import Text from '../text/Text'
import Form from './Form';

function SignIn() {

	const args = {
		helpText: {
			content: 'Забыли пароль?',
			linkContent: 'Восстановить',
		},
		formField: {
			logField: {
				label: 'Имя пользователя',
				inputType: 'text',
				required: true,
			},
			passField: {
				label: 'Пароль',
				inputType: 'password',
				required: true,
			},
		},
	}

	return(
		<>
			<Logo />
			<Text content='Личный кабинет | Авторизация' className='title-text-black'/>
			<Form args={args}/>
		</>
	);
}

export default SignIn;