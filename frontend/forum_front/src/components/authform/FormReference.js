import React from 'react';
import Button from './Button';
import HelpText from './HelpText';

class SignUpForm extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
			fields: {
				login: '',
				pass: '',
				repass: ''
			}
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
  
	handleChange(event) {
		const { name, value } = event.target;
		this.setState(prevState => ({
			fields: {
				...prevState.fields,
				[name]: value
			}
		}));
	}
  
	handleSubmit(event) {
		alert('Отправленные данные: ' + JSON.stringify(this.state.fields));
		event.preventDefault();
	}
  
	render() {
		const formFields = [
			{ label: 'Имя пользователя', id: 'login', inputType: 'text', required: true },
			{ label: 'Пароль', id: 'pass', inputType: 'password1', required: true },
			{ label: 'Подтверждение пароля', id: 'repass', inputType: 'password2', required: true },
		];
		return (
			<div className="row d-flex justify-content-center mx-auto">
				<div className='col-lg-4 col-sm-6 col-8 text-white p-4 rounded-2 bg-black'>
					<form onSubmit={this.handleSubmit} method='POST'>
						{formFields.map((field, index) => (
							<div key={index} className="row text-center">
								<div className="col-12 mb-2">
									{field.label}
								</div>
								<div className="col-12 mb-4">
									<input
										className="form-control"
										type={field.inputType}
										id={field.id}
										name={field.id}
										required={field.required}
										value={this.state.fields[field.id]}
										onChange={this.handleChange}
									/>
								</div>
								{index !== formFields.length - 1 && <hr className="border border-light border-2 opacity-100 rounded"/>}
							</div>
						))}
						<Button />
						<HelpText content='Забыли пароль?' linkContent='Восстановить'/>
					</form>
				</div>
			</div>
		);
	}
}

export default SignUpForm;
