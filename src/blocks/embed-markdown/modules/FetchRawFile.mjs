/**
 * Fetch the markdown file and convert it to HTML.
 */

import { useState, useEffect } from '@wordpress/element';

// Convert Markdown into HTML.
import * as showdown from 'showdown';

// This library parses an HTML string and converts it into React elements. It's safer than dangerouslySetInnerHTML because it handles sanitization. Install the library.
import parse from 'html-react-parser';

/**
 * Fetch file contents.
 * @param {string} filePath File to fetch.
 */
export function FetchRawFile( { filePath } ) {
	const [ fileContent, setFileContent ] = useState( '' );
	const [ error, setError ] = useState( null );
	const converter = new showdown.Converter();

	useEffect( () => {
		if ( filePath && 'md' === getExtension( filePath ) ) {
			// convert GitHub ui view to raw
			filePath = filePath.replace(
				'/github.com/',
				'/raw.githubusercontent.com/'
			);
			filePath = filePath.replace( '/blob/', '/' );

			fetch( filePath )
				.then( ( response ) => {
					if ( ! response.ok ) {
						console.error(
							'Network response was not OK:',
							response
						);
					}
					return response.text(); // Get raw text content
				} )
				.then( ( text ) => {
					setFileContent( text );
				} )
				.catch( ( error ) => {
					setError( error );
					console.error( 'Error fetching file:', error );
				} );
		} else {
			setFileContent(
				'Please provide a full URL to a .md file in the Inspector panel to the right →'
			);
		}
	}, [ filePath ] ); // This will run whenever the filePath is changed.

	if ( error ) {
		return (
			<div>
				Error fetching { filePath }: { error.message }
			</div>
		);
	}

	// Convert md to html using Showdown.
	const markdownHtml = converter.makeHtml( fileContent );

	return <div>{ parse( markdownHtml ) }</div>;
}

/**
 * Find extension of file.
 * @param {string} filename File to check.
 */
function getExtension( filename ) {
	return filename.toLowerCase().split( '.' ).pop();
}
