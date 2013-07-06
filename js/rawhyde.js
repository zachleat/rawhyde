var RawHyde = {
	withJsDocClass: 'with-js'
};

RawHyde.injectCss = function( href ) {
	var link = document.createElement( 'link' ),
		head = document.head || document.getElementsByTagName( 'head' )[ 0 ];

	link.setAttribute( 'href', href );
	link.setAttribute( 'rel', 'stylesheet' );
	head.appendChild( link );
};

RawHyde.injectJs = function( src ) {
	var script = document.createElement( 'script' ),
		head = document.head || document.getElementsByTagName( 'head' )[ 0 ];

	script.setAttribute( 'src', src );
	head.appendChild( script );
};

RawHyde.isEnhanced = function() {
	return 'querySelectorAll' in document;
};

// Progressive Enhancement
(function( doc ) {
	if( !RawHyde.isEnhanced() ) {
		return;
	}

	doc.documentElement.className += ' ' + RawHyde.withJsDocClass;


	var distMeta = doc.querySelector( 'meta[name="dist"]' );
	RawHyde.dist = distMeta ? distMeta.content : '';
})( document );