var dom = (function () {
	return {
		create: function (tag, attributes) {
			attributes = attributes || {};
			var element = document.createElement(tag);

			for (var attribute in attributes) {
				if (attributes.hasOwnProperty(attribute)) {
					switch (attribute) {
						case 'children':
							for (var i = 0; i < attributes.children.length; i++) {
								element.appendChild(attributes.children[i]);
							}
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
		}
	};
}());