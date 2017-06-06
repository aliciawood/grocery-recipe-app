import React from 'react'

export default (props) => {
	
	return (
		<button {...props} type="button" className='button' >
			{props.label}
		</button>
	);
};
