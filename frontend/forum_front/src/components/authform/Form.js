import React, { useState } from 'react';
import Button from './Button';
import HelpText from './HelpText';


function Form(props) {

	const [formData, setFormData] = useState(
		{
			username: '',
			password: '',
		}
	)
	
	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData({
			...formData,
			[name]: value
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		props.args.sendDataToBackend(formData);
    console.log(e);
  };

	return(
		<div className="row d-flex justify-content-center mx-auto">
			<div className='col-lg-4 col-sm-6 col-8 text-white p-4 rounded-2 bg-black'>
				<form onSubmit={handleSubmit}>
					{Object.values(props.args.formField).map((field, index) => (
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
									onChange={handleChange}
									value={formData[field.id]}
								/>
							</div>
							{index !== Object.values(props.args.formField).length - 1 && <hr className="border border-light border-2 opacity-100 rounded"/>}
						</div>
					))}
					<Button />
					<HelpText content={props.args.helpText.content} linkContent={props.args.helpText.linkContent}/>
				</form>
			</div>
		</div>
	)
}


		// return (
		// 	<div className="row d-flex justify-content-center mx-auto">
		// 		<div className='col-lg-4 col-sm-6 col-8 text-white p-4 rounded-2 bg-black'>
		// 			<form onSubmit={this.handleSubmit} method='POST'>
		// 				{formFields.map((field, index) => (
		// 					<div key={index} className="row text-center">
		// 						<div className="col-12 mb-2">
		// 							{field.label}
		// 						</div>
		// 						<div className="col-12 mb-4">
		// 							<input
		// 								className="form-control"
		// 								type={field.inputType}
		// 								id={field.id}
		// 								name={field.id}
		// 								required={field.required}
		// 								value={this.state.fields[field.id]}
		// 								onChange={this.handleChange}
		// 							/>
		// 						</div>
		// 						{index !== formFields.length - 1 && <hr className="border border-light border-2 opacity-100 rounded"/>}
		// 					</div>
		// 				))}
		// 				<Button />
		// 				<HelpText content='Забыли пароль?' linkContent='Восстановить'/>
		// 			</form>
		// 		</div>
		// 	</div>
		// );
export default Form;
