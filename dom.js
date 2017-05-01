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

							if (Array.isArray(attributes.children)) {
								var children = [].concat.apply([], attributes.children);

								for (var i = 0; i < children.length; i++) {
									fragment.appendChild(children[i]);
								}
							} else {
								fragment.appendChild(attributes.children);
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

		repeat: function (tag, count, attributes) {
			var tagGenerator;

			if (typeof tag === 'function') {
				tagGenerator = tag;
			} else {
				tagGenerator = function (attributes) {
					return dom.create(tag, attributes);
				};
			}

			var attributeGenerator;

			if (typeof attributes === 'function') {
				attributeGenerator = attributes;
			} else {
				attributeGenerator = function () {
					return attributes;
				};
			}

			var elements = [];

			for (var i = 0; i < count; i++) {
				elements.push(tagGenerator(attributeGenerator(i)));
			}

			return elements;
		},

		a: function (attributes) { return dom.create('a', attributes); },
		abbr: function (attributes) { return dom.create('abbr', attributes); },
		acronym: function (attributes) { return dom.create('acronym', attributes); },
		address: function (attributes) { return dom.create('address', attributes); },
		applet: function (attributes) { return dom.create('applet', attributes); },
		area: function (attributes) { return dom.create('area', attributes); },
		article: function (attributes) { return dom.create('article', attributes); },
		aside: function (attributes) { return dom.create('aside', attributes); },
		audio: function (attributes) { return dom.create('audio', attributes); },
		b: function (attributes) { return dom.create('b', attributes); },
		base: function (attributes) { return dom.create('base', attributes); },
		basefont: function (attributes) { return dom.create('basefont', attributes); },
		bdi: function (attributes) { return dom.create('bdi', attributes); },
		bdo: function (attributes) { return dom.create('bdo', attributes); },
		big: function (attributes) { return dom.create('big', attributes); },
		blink: function (attributes) { return dom.create('blink', attributes); },
		blockquote: function (attributes) { return dom.create('blockquote', attributes); },
		body: function (attributes) { return dom.create('body', attributes); },
		br: function (attributes) { return dom.create('br', attributes); },
		button: function (attributes) { return dom.create('button', attributes); },
		canvas: function (attributes) { return dom.create('canvas', attributes); },
		caption: function (attributes) { return dom.create('caption', attributes); },
		center: function (attributes) { return dom.create('center', attributes); },
		cite: function (attributes) { return dom.create('cite', attributes); },
		code: function (attributes) { return dom.create('code', attributes); },
		col: function (attributes) { return dom.create('col', attributes); },
		colgroup: function (attributes) { return dom.create('colgroup', attributes); },
		command: function (attributes) { return dom.create('command', attributes); },
		content: function (attributes) { return dom.create('content', attributes); },
		data: function (attributes) { return dom.create('data', attributes); },
		datalist: function (attributes) { return dom.create('datalist', attributes); },
		dd: function (attributes) { return dom.create('dd', attributes); },
		del: function (attributes) { return dom.create('del', attributes); },
		details: function (attributes) { return dom.create('details', attributes); },
		dfn: function (attributes) { return dom.create('dfn', attributes); },
		dir: function (attributes) { return dom.create('dir', attributes); },
		div: function (attributes) { return dom.create('div', attributes); },
		dl: function (attributes) { return dom.create('dl', attributes); },
		dt: function (attributes) { return dom.create('dt', attributes); },
		element: function (attributes) { return dom.create('element', attributes); },
		em: function (attributes) { return dom.create('em', attributes); },
		embed: function (attributes) { return dom.create('embed', attributes); },
		fieldset: function (attributes) { return dom.create('fieldset', attributes); },
		figcaption: function (attributes) { return dom.create('figcaption', attributes); },
		figure: function (attributes) { return dom.create('figure', attributes); },
		font: function (attributes) { return dom.create('font', attributes); },
		footer: function (attributes) { return dom.create('footer', attributes); },
		form: function (attributes) { return dom.create('form', attributes); },
		frame: function (attributes) { return dom.create('frame', attributes); },
		frameset: function (attributes) { return dom.create('frameset', attributes); },
		h1: function (attributes) { return dom.create('h1', attributes); },
		h2: function (attributes) { return dom.create('h2', attributes); },
		h3: function (attributes) { return dom.create('h3', attributes); },
		h4: function (attributes) { return dom.create('h4', attributes); },
		h5: function (attributes) { return dom.create('h5', attributes); },
		h6: function (attributes) { return dom.create('h6', attributes); },
		head: function (attributes) { return dom.create('head', attributes); },
		header: function (attributes) { return dom.create('header', attributes); },
		hr: function (attributes) { return dom.create('hr', attributes); },
		html: function (attributes) { return dom.create('html', attributes); },
		i: function (attributes) { return dom.create('i', attributes); },
		iframe: function (attributes) { return dom.create('iframe', attributes); },
		image: function (attributes) { return dom.create('image', attributes); },
		input: function (attributes) { return dom.create('input', attributes); },
		ins: function (attributes) { return dom.create('ins', attributes); },
		isindex: function (attributes) { return dom.create('isindex', attributes); },
		kbd: function (attributes) { return dom.create('kbd', attributes); },
		keygen: function (attributes) { return dom.create('keygen', attributes); },
		label: function (attributes) { return dom.create('label', attributes); },
		legend: function (attributes) { return dom.create('legend', attributes); },
		li: function (attributes) { return dom.create('li', attributes); },
		link: function (attributes) { return dom.create('link', attributes); },
		listing: function (attributes) { return dom.create('listing', attributes); },
		main: function (attributes) { return dom.create('main', attributes); },
		map: function (attributes) { return dom.create('map', attributes); },
		mark: function (attributes) { return dom.create('mark', attributes); },
		marquee: function (attributes) { return dom.create('marquee', attributes); },
		meta: function (attributes) { return dom.create('meta', attributes); },
		meter: function (attributes) { return dom.create('meter', attributes); },
		nav: function (attributes) { return dom.create('nav', attributes); },
		noframes: function (attributes) { return dom.create('noframes', attributes); },
		noscript: function (attributes) { return dom.create('noscript', attributes); },
		object: function (attributes) { return dom.create('object', attributes); },
		ol: function (attributes) { return dom.create('ol', attributes); },
		optgroup: function (attributes) { return dom.create('optgroup', attributes); },
		option: function (attributes) { return dom.create('option', attributes); },
		output: function (attributes) { return dom.create('output', attributes); },
		p: function (attributes) { return dom.create('p', attributes); },
		param: function (attributes) { return dom.create('param', attributes); },
		plaintext: function (attributes) { return dom.create('plaintext', attributes); },
		pre: function (attributes) { return dom.create('pre', attributes); },
		progress: function (attributes) { return dom.create('progress', attributes); },
		q: function (attributes) { return dom.create('q', attributes); },
		rp: function (attributes) { return dom.create('rp', attributes); },
		rt: function (attributes) { return dom.create('rt', attributes); },
		rtc: function (attributes) { return dom.create('rtc', attributes); },
		ruby: function (attributes) { return dom.create('ruby', attributes); },
		s: function (attributes) { return dom.create('s', attributes); },
		samp: function (attributes) { return dom.create('samp', attributes); },
		script: function (attributes) { return dom.create('script', attributes); },
		section: function (attributes) { return dom.create('section', attributes); },
		select: function (attributes) { return dom.create('select', attributes); },
		shadow: function (attributes) { return dom.create('shadow', attributes); },
		slot: function (attributes) { return dom.create('slot', attributes); },
		small: function (attributes) { return dom.create('small', attributes); },
		source: function (attributes) { return dom.create('source', attributes); },
		spacer: function (attributes) { return dom.create('spacer', attributes); },
		span: function (attributes) { return dom.create('span', attributes); },
		strike: function (attributes) { return dom.create('strike', attributes); },
		strong: function (attributes) { return dom.create('strong', attributes); },
		style: function (attributes) { return dom.create('style', attributes); },
		sub: function (attributes) { return dom.create('sub', attributes); },
		summary: function (attributes) { return dom.create('summary', attributes); },
		sup: function (attributes) { return dom.create('sup', attributes); },
		table: function (attributes) { return dom.create('table', attributes); },
		tbody: function (attributes) { return dom.create('tbody', attributes); },
		td: function (attributes) { return dom.create('td', attributes); },
		template: function (attributes) { return dom.create('template', attributes); },
		textarea: function (attributes) { return dom.create('textarea', attributes); },
		tfoot: function (attributes) { return dom.create('tfoot', attributes); },
		th: function (attributes) { return dom.create('th', attributes); },
		thead: function (attributes) { return dom.create('thead', attributes); },
		time: function (attributes) { return dom.create('time', attributes); },
		title: function (attributes) { return dom.create('title', attributes); },
		tr: function (attributes) { return dom.create('tr', attributes); },
		track: function (attributes) { return dom.create('track', attributes); },
		tt: function (attributes) { return dom.create('tt', attributes); },
		u: function (attributes) { return dom.create('u', attributes); },
		ul: function (attributes) { return dom.create('ul', attributes); },
		var: function (attributes) { return dom.create('var', attributes); },
		video: function (attributes) { return dom.create('video', attributes); },
		wbr: function (attributes) { return dom.create('wbr', attributes); },
		xmp: function (attributes) { return dom.create('xmp', attributes); }
	};
}());
