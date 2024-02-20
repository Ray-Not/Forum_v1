import React from 'react';
import Logo from './Logo'
import Text from '../text/Text'
import Form from './Form';
import axios from 'axios';

function SignIn() {

	const args = {
		helpText: {
			content: 'Забыли пароль?',
			linkContent: 'Восстановить',
		},
		formField: {
			logField: {
				id: 'username',
				label: 'Имя пользователя',
				inputType: 'text',
				required: true,
			},
			passField: {
				id: 'password',
				label: 'Пароль',
				inputType: 'password',
				required: true,
			},
		},
		sendDataToBackend: async (formData) => {
			try {
				const response = await axios.post('http://localhost:8000/user/create/', formData);
				alert('ok');
			} catch (error) {
				error.response ? alert(JSON.stringify(error.response.data)) : alert('Доступ к бэку упал');
			}
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