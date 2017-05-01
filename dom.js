var dom = (function () {
	return {
		create: function (tag, attributes) {
			attributes = attributes || {};

			var element = document.createElement(tag);

			for (var attribute in attributes) {
				if (attributes.hasOwnProperty(attribute)) {
					switch (attribute) {
						case 'children':
							var fragment = document.createDocumentFragment();

							for (var i = 0; i < attributes.children.length; i++) {
								fragment.appendChild(attributes.children[i]);
							}

							element.appendChild(fragment);

							break;
						case 'style':
							for (var style in attributes.style) {
								if (attributes.style.hasOwnProperty(style)) {
									element.style[style] = attributes.style[style];
								}
							}
							
							break;
						default:
							element[attribute] = attributes[attribute];
					}
				}
			}

			return element;
		},
		a: function (attributes) { return this.create('a', attributes); },
		abbr: function (attributes) { return this.create('abbr', attributes); },
		acronym: function (attributes) { return this.create('acronym', attributes); },
		address: function (attributes) { return this.create('address', attributes); },
		applet: function (attributes) { return this.create('applet', attributes); },
		area: function (attributes) { return this.create('area', attributes); },
		article: function (attributes) { return this.create('article', attributes); },
		aside: function (attributes) { return this.create('aside', attributes); },
		audio: function (attributes) { return this.create('audio', attributes); },
		b: function (attributes) { return this.create('b', attributes); },
		base: function (attributes) { return this.create('base', attributes); },
		basefont: function (attributes) { return this.create('basefont', attributes); },
		bdi: function (attributes) { return this.create('bdi', attributes); },
		bdo: function (attributes) { return this.create('bdo', attributes); },
		big: function (attributes) { return this.create('big', attributes); },
		blink: function (attributes) { return this.create('blink', attributes); },
		blockquote: function (attributes) { return this.create('blockquote', attributes); },
		body: function (attributes) { return this.create('body', attributes); },
		br: function (attributes) { return this.create('br', attributes); },
		button: function (attributes) { return this.create('button', attributes); },
		canvas: function (attributes) { return this.create('canvas', attributes); },
		caption: function (attributes) { return this.create('caption', attributes); },
		center: function (attributes) { return this.create('center', attributes); },
		cite: function (attributes) { return this.create('cite', attributes); },
		code: function (attributes) { return this.create('code', attributes); },
		col: function (attributes) { return this.create('col', attributes); },
		colgroup: function (attributes) { return this.create('colgroup', attributes); },
		command: function (attributes) { return this.create('command', attributes); },
		content: function (attributes) { return this.create('content', attributes); },
		data: function (attributes) { return this.create('data', attributes); },
		datalist: function (attributes) { return this.create('datalist', attributes); },
		dd: function (attributes) { return this.create('dd', attributes); },
		del: function (attributes) { return this.create('del', attributes); },
		details: function (attributes) { return this.create('details', attributes); },
		dfn: function (attributes) { return this.create('dfn', attributes); },
		dir: function (attributes) { return this.create('dir', attributes); },
		div: function (attributes) { return this.create('div', attributes); },
		dl: function (attributes) { return this.create('dl', attributes); },
		dt: function (attributes) { return this.create('dt', attributes); },
		element: function (attributes) { return this.create('element', attributes); },
		em: function (attributes) { return this.create('em', attributes); },
		embed: function (attributes) { return this.create('embed', attributes); },
		fieldset: function (attributes) { return this.create('fieldset', attributes); },
		figcaption: function (attributes) { return this.create('figcaption', attributes); },
		figure: function (attributes) { return this.create('figure', attributes); },
		font: function (attributes) { return this.create('font', attributes); },
		footer: function (attributes) { return this.create('footer', attributes); },
		form: function (attributes) { return this.create('form', attributes); },
		frame: function (attributes) { return this.create('frame', attributes); },
		frameset: function (attributes) { return this.create('frameset', attributes); },
		h1: function (attributes) { return this.create('h1', attributes); },
		h2: function (attributes) { return this.create('h2', attributes); },
		h3: function (attributes) { return this.create('h3', attributes); },
		h4: function (attributes) { return this.create('h4', attributes); },
		h5: function (attributes) { return this.create('h5', attributes); },
		h6: function (attributes) { return this.create('h6', attributes); },
		head: function (attributes) { return this.create('head', attributes); },
		header: function (attributes) { return this.create('header', attributes); },
		hr: function (attributes) { return this.create('hr', attributes); },
		html: function (attributes) { return this.create('html', attributes); },
		i: function (attributes) { return this.create('i', attributes); },
		iframe: function (attributes) { return this.create('iframe', attributes); },
		image: function (attributes) { return this.create('image', attributes); },
		input: function (attributes) { return this.create('input', attributes); },
		ins: function (attributes) { return this.create('ins', attributes); },
		isindex: function (attributes) { return this.create('isindex', attributes); },
		kbd: function (attributes) { return this.create('kbd', attributes); },
		keygen: function (attributes) { return this.create('keygen', attributes); },
		label: function (attributes) { return this.create('label', attributes); },
		legend: function (attributes) { return this.create('legend', attributes); },
		li: function (attributes) { return this.create('li', attributes); },
		link: function (attributes) { return this.create('link', attributes); },
		listing: function (attributes) { return this.create('listing', attributes); },
		main: function (attributes) { return this.create('main', attributes); },
		map: function (attributes) { return this.create('map', attributes); },
		mark: function (attributes) { return this.create('mark', attributes); },
		marquee: function (attributes) { return this.create('marquee', attributes); },
		meta: function (attributes) { return this.create('meta', attributes); },
		meter: function (attributes) { return this.create('meter', attributes); },
		nav: function (attributes) { return this.create('nav', attributes); },
		noframes: function (attributes) { return this.create('noframes', attributes); },
		noscript: function (attributes) { return this.create('noscript', attributes); },
		object: function (attributes) { return this.create('object', attributes); },
		ol: function (attributes) { return this.create('ol', attributes); },
		optgroup: function (attributes) { return this.create('optgroup', attributes); },
		option: function (attributes) { return this.create('option', attributes); },
		output: function (attributes) { return this.create('output', attributes); },
		p: function (attributes) { return this.create('p', attributes); },
		param: function (attributes) { return this.create('param', attributes); },
		plaintext: function (attributes) { return this.create('plaintext', attributes); },
		pre: function (attributes) { return this.create('pre', attributes); },
		progress: function (attributes) { return this.create('progress', attributes); },
		q: function (attributes) { return this.create('q', attributes); },
		rp: function (attributes) { return this.create('rp', attributes); },
		rt: function (attributes) { return this.create('rt', attributes); },
		rtc: function (attributes) { return this.create('rtc', attributes); },
		ruby: function (attributes) { return this.create('ruby', attributes); },
		s: function (attributes) { return this.create('s', attributes); },
		samp: function (attributes) { return this.create('samp', attributes); },
		script: function (attributes) { return this.create('script', attributes); },
		section: function (attributes) { return this.create('section', attributes); },
		select: function (attributes) { return this.create('select', attributes); },
		shadow: function (attributes) { return this.create('shadow', attributes); },
		slot: function (attributes) { return this.create('slot', attributes); },
		small: function (attributes) { return this.create('small', attributes); },
		source: function (attributes) { return this.create('source', attributes); },
		spacer: function (attributes) { return this.create('spacer', attributes); },
		span: function (attributes) { return this.create('span', attributes); },
		strike: function (attributes) { return this.create('strike', attributes); },
		strong: function (attributes) { return this.create('strong', attributes); },
		style: function (attributes) { return this.create('style', attributes); },
		sub: function (attributes) { return this.create('sub', attributes); },
		summary: function (attributes) { return this.create('summary', attributes); },
		sup: function (attributes) { return this.create('sup', attributes); },
		table: function (attributes) { return this.create('table', attributes); },
		tbody: function (attributes) { return this.create('tbody', attributes); },
		td: function (attributes) { return this.create('td', attributes); },
		template: function (attributes) { return this.create('template', attributes); },
		textarea: function (attributes) { return this.create('textarea', attributes); },
		tfoot: function (attributes) { return this.create('tfoot', attributes); },
		th: function (attributes) { return this.create('th', attributes); },
		thead: function (attributes) { return this.create('thead', attributes); },
		time: function (attributes) { return this.create('time', attributes); },
		title: function (attributes) { return this.create('title', attributes); },
		tr: function (attributes) { return this.create('tr', attributes); },
		track: function (attributes) { return this.create('track', attributes); },
		tt: function (attributes) { return this.create('tt', attributes); },
		u: function (attributes) { return this.create('u', attributes); },
		ul: function (attributes) { return this.create('ul', attributes); },
		var: function (attributes) { return this.create('var', attributes); },
		video: function (attributes) { return this.create('video', attributes); },
		wbr: function (attributes) { return this.create('wbr', attributes); },
		xmp: function (attributes) { return this.create('xmp', attributes); }
	};
}());
