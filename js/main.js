(function () {
	'use strict';
	/*globals moment*/

	window.onload = function () {
		if (document.readyState === 'complete') {
			init();
			fixedHeader();
		}
	};

	window.onscroll = function () {
		fixedHeader();
	}

	function init() {
		// Do something awesome here...
		var datesElement = document.querySelectorAll('.post-date');

		for (var i = 0, l = datesElement.length; i < l; i ++) {
			var de = datesElement[i];
			var date = de.getAttribute('post-date');

			de.textContent = moment(date).fromNow();
		}
	}

	function fixedHeader() {
		var header      = document.querySelector('header');
		var nav         = document.querySelector('nav');
		var siteBrand   = document.querySelector('.brand-fixed');

		var isSixPercent = 100-((window.scrollY/header.offsetHeight)*100);

		if (window.scrollY > (header.offsetHeight-nav.offsetHeight) && isSixPercent < 6 ){
			nav.className = 'site-nav nav-fixed';
			nav.setAttribute('style', 'top:0;');

			siteBrand.setAttribute('style', 'display:block;');
			return;
		}



		nav.className = nav.className.replace('nav-fixed','');
		nav.removeAttribute('style');
		siteBrand.setAttribute('style', 'display:none;');
	}

})();
