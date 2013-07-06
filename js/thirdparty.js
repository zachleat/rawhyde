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