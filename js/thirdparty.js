// Disqus Comments
// Set the this in config.js
var disqus_shortname = RawHydeConfig.disqusShortname;

(function() {
	if( !RawHyde.isEnhanced() || !disqus_shortname || !document.getElementById( 'disqus_thread' ) ) {
		return;
	}

	var dsq = document.createElement('script');
	dsq.type = 'text/javascript';
	dsq.async = true;
	dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
	(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();

// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', RawHydeConfig.googleAnalyticsId]);
_gaq.push(['_trackPageview']);

(function() {
	if( !RawHydeConfig.googleAnalyticsId ) {
		return;
	}

	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();

// grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license.

(function() {
	window.grunticon = function( css, foo ){
		// expects a css array with 3 items representing CSS paths to datasvg, datapng, urlpng
		if( !css || css.length !== 3 ){
			return;
		}

		// Thanks Modernizr & Erik Dahlstrom
		var w = window,
			svg = !!w.document.createElementNS && !!w.document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect && !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"),

			loadCSS = function( data ){
				var link = w.document.createElement( "link" ),
					ref = w.document.getElementsByTagName( "script" )[ 0 ];
				link.rel = "stylesheet";
				link.href = css[ data && svg ? 0 : data ? 1 : 2 ];
				ref.parentNode.insertBefore( link, ref );
			},

			// Thanks Modernizr
			img = new w.Image();

			img.onerror = function(){
				loadCSS( false );
			};

			img.onload = function(){
				loadCSS( img.width === 1 && img.height === 1 );
			};

			img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
	};

	grunticon( [ RawHyde.dist + "icons/icons.data.svg.css",
		RawHyde.dist + "icons/icons.data.png.css",
		RawHyde.dist + "icons/icons.fallback.css" ] );
})();