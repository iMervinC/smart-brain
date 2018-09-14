import React, { Component } from 'react';


class Register extends Component {
		constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			name: ''
		}	
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	// onSubmitSignin = () => {
		
	//     let reqBody = {
	//       	email: this.state.email,
	// 	    password: this.state.password,
	// 	    name: this.state.name
	//     };


	// 	fetch('http://localhost:8080/register' ,{
	// 		method: 'POST',
	// 		headers: {'Content-Type': 'application/json'},
	// 		body: JSON.stringify(reqBody)
	// 	})
	// 	.then(response => response.json())
	// 	.then(user => {
	// 		if(user) {
	// 			this.props.loadUser(user);
	// 			this.props.onRouteChange('home');
	// 		}
	// 	})	
	// }	


	render() {
		
		return (
			<article className="br3 ba b--white mv4 w-100 w-50-m w-25-l mw6 shadow-8 center">
				<main className="pa4 white-80">
				  <form className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				        <input 
				        className="pa2 white input-reset ba bg-transparent hover-bg-black hover-white w-90 br3" 
				        type="name" 
				        name="Name"  
				        id="name"
				        onChange={this.onNameChange} 
				        />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        className="pa2 white input-reset ba bg-transparent hover-bg-black hover-white w-100 br3" 
				        type="email" 
				        name="email-address"  
				        id="email-address"
				        onChange={this.onEmailChange}  
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        className="b white pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br3" 
				        type="password" 
				        name="password"  
				        id="password" 
				        onChange={this.onPasswordChange} 
				        />
				      </div>
				    </fieldset>
				    <div className="">
				      <input onClick={() => this.props.onRouteChange('home')} className="b br3 ph3 white pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" type="submit" value="Register" />
				    </div>
				  </form>
				</main>
			</article>
		);
	}
}

export default Register;