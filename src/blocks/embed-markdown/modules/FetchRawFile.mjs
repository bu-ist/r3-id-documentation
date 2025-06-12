import { useState, useEffect } from '@wordpress/element';

export function FetchRawFile( { mdURL } ) {
	const [ fileContent, setFileContent ] = useState( '' );
	const [ error, setError ] = useState( null );

	useEffect( () => {
		if ( mdURL ) {
			fetch( mdURL )
				.then( ( response ) => {
					if ( ! response.ok ) {
						console.error(
							'Network response was not ok:',
							response
						);
						// this makes it stop working... need to handle better
						// throw new Error( 'Network response was not ok:' );
					}
					return response.text(); // Use .text() to get raw text content
				} )
				.then( ( text ) => {
					setFileContent( text );
				} )
				.catch( ( error ) => {
					setError( error );
					console.error( 'Error fetching file:', error );
				} );
		} else {
			setFileContent( 'no url' );
			console.log( 'no url' );
		}
	}, [ mdURL ] ); // This will run whenever the mdURL is changed.

	if ( error ) {
		return (
			<div>
				Error fetching { mdURL }: { error.message }
			</div>
		);
	}

	// Display the content in a preformatted block
	return <pre>{ fileContent }</pre>;
}
