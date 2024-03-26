import React, { useState } from 'react';
import Logo from './Logo'
import Text from '../text/Text'
import Form from './Form';
import axios from 'axios';

function SignUp() {

	const args = {
		helpText: {
			content: 'Нет аккаунта?',
			linkContent: 'Зарегистрироваться',
		},
		formField: {
			logField: {
				id: 'username',
				label: 'Имя пользователя',
				inputType: 'text',
				required: true,
			},
			passField: {
				id: 'password1',
				label: 'Пароль',
				inputType: 'password',
				required: true,
			},
      passField2: {
				id: 'password2',
				label: 'Повторите пароль',
				inputType: 'password',
				required: true,
			},
		},
		sendDataToBackend: async (formData) => {
			try {
				await axios.post('http://localhost:8000/user/create/', formData);
				alert('ok');
			} catch (error) {
				error.response ? alert(JSON.stringify(error.response.data)) : alert('Доступ к бэку упал');
			}
		},
		formState: useState()
	}

	return(
		<>
			<Logo />
			<Text content='Личный кабинет | Регистрация' className='title-text-black'/>
			<Form args={args}/>
		</>
	);
}

export default SignUp;