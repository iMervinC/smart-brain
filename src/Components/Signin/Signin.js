import React, { Component } from 'react';


class Signin extends Component {
	constructor(props) {
	super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}	
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	/*onSubmitSignin = () => {
		fetch('http://localhost:3001/signin' ,{
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})	
		})
		.then(response => response.json())
		.then() => {
			if(data === 'success') {
				this.props.onRouteChange('home');
			}
		})	
	}*/

	// onSubmitSignin = () => {
		
	//     let reqBody = {
	//       	email: this.state.signInEmail,
	// 	    password: this.state.signInPassword
	//     };


	// 	fetch('http://localhost:3000/signin' ,{
	// 		method: 'POST',
	// 		headers: {'Content-Type': 'application/json'},
	// 		body: JSON.stringify(reqBody)
	// 	})
	// 	.then(response => response.json())
	// 	.then(data => {
	// 		if(data === 'success') {
	// 			this.props.onRouteChange('home');
	// 		}
	// 	})	
	// }	



	render() {
		const { onRouteChange } = this.props;
		return (
			<article className="br3 ba b--white mv4 w-100 w-50-m w-25-l mw6 shadow-8 center">
				<main className="pa4 white-80">
				  <form className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        	onChange={this.onEmailChange}
				        	className="pa2 br3 white input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="email" 
				        	name="email-address"  
				        	id="email-address" 
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        	onChange={this.onPasswordChange}
				        	className="b br3 white pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        type="password" 
					        name="password"  
					        id="password"
					    />
				      </div>
				    </fieldset>
				    <div className="">
				      	<input 
					      onClick={() => onRouteChange('home') } 
					      className="b ph3 white pv2 input-reset ba b--white bg-transparent grow pointer f6 dib br3" 
					      type="submit" 
					      value="Sign in" 
					     />
				    </div>
				    <div className="lh-copy mt3">
				      <p onClick={() => onRouteChange('register') } href="#" className="f6 link dim white pointer db">Register</p>
				    </div>
				  </form>
				</main>
			</article>
		);
	}
}

export default Signin;