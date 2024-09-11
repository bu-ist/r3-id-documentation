// Load the library and specify options
// @link https://attacomsian.com/blog/nodejs-replace-string-in-file
const package = require( '../package.json' );
const version = package.version;
const description = package.description;
const repository = package.repository;
const name = package.name;
const homepage = package.homepage;

const theme_file = 'style.css';
const min_file = 'build/css/theme.css';

let css_header = `@charset "UTF-8";
/*
Theme Name: Theme Name
Theme URI: `+repository+`
Description: `+description+`
Author: Boston University Interactive Design
Website: `+homepage+`
Version: `+version+`
Text Domain: `+name+`
Template: responsive-framework-3x
*/
`;

console.log(
	'Updating ' +
	theme_file +
		' to ' +
		css_header
);

const fs = require( 'fs' );

// Read file into a string
fs.readFile( min_file, 'utf-8', ( err, contents ) => {
	if ( err ) {
		return console.error( err );
	}

	let updated = css_header + contents;

	// Write back to file
	fs.writeFile( min_file, updated, 'utf-8', ( err2 ) => {
		if ( err2 ) {
			console.log( err2 );
		}
	} );
} );

// Read file into a string
fs.readFile( theme_file, 'utf-8', ( err, contents ) => {
	if ( err ) {
		return console.error( err );
	}

	// Replace string occurrences
	let updated = css_header;

	// Write back to file
	fs.writeFile( theme_file, updated, 'utf-8', ( err2 ) => {
		if ( err2 ) {
			console.log( err2 );
		}
	} );
} );
