// function StringToObjectConverter( userString ) {
// 	if ( ! userString ) {
// 		return undefined;
// 	}
// 	let userObject = {};

// 	try {
// 		// Wrap the object literal string in parentheses for eval() to parse it as an expression
// 		userObject = eval( '(' + userString + ')' );
// 		return userObject;
// 	} catch ( error ) {
// 		console.error( 'Error parsing userString:', error );
// 		return undefined;
// 	}
// }

// function StringToArrayConverter( userString ) {
// 	if ( ! userString ) {
// 		return undefined;
// 	}
// 	let userObject = {};

// 	try {
// 		userObject = eval( userString );
// 		console.log( userObject );
// 		console.log( typeof userObject );
// 		return userObject;
// 	} catch ( error ) {
// 		console.error( 'Error parsing userString:', error );
// 		return undefined;
// 	}
// }
