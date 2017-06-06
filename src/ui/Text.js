import React from 'react';

export default (props) => {
	
	return (
		<input 
			type='text'
			className='text'
			placeholder={props.placeholder}
			onChange={props.onChange}
		/>
	);
};
