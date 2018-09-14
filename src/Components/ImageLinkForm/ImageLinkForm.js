import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div>
		<p className='f3 white'>
		{'This Brain will detect faces on pictures. Give it a Try'}
		</p>
		<div className='center'>
			<div className='pa4 form br3 shadow-5'>
				<input className='f4 pa2 w-70' type='text' onChange={onInputChange} placeholder='Enter Image URL here'/>
				<p className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple br3 pointer' 
				onClick={onButtonSubmit}>Detect!</p>
			</div>
		</div>
		</div>
		);
}

export default ImageLinkForm;