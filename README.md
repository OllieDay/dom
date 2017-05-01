# Dom
Dom is a tiny JavaScript library for creating DOM elements expressively.

## Basic usage
```js
// <div></div>

var div = dom.div();
```

## Specifying attributes
```js
// <button id="my-button-id" class="my-button-class" onclick="function () { ... }">Click me!</button>

var button = dom.button({
    id: 'my-button-id',
    className: 'my-button-class',
    innerHTML: 'Click me!',
    onclick: function () {
        ...
    }
});
```

## Applying styles
```js
// <p style="background-color: black; color: red;">Red text on a black background</p>

var p = dom.p({
    innerHTML: 'Red text on a black background',
    style: {
        backgroundColor: 'black',
        color: 'red'
    }
});
```

## Appending child elements
```js
// <ul>
//    <li>Item #1</li>
//    <li>Item #2</li>
//    <li>Item #3</li>
// </ul>

var ul = dom.ul({
    children: [
        dom.li({
            innerHTML: 'Item #1'
        }),
        dom.li({
            innerHTML: 'Item #2'
        }),
        dom.li({
            innerHTML: 'Item #3'
        })
    ]
});
```

## Appending child elements with callback function
```js
// <ul>
//    <li>Item #1</li>
//    <li>Item #2</li>
//    <li>Item #3</li>
// </ul>

var ul = dom.ul({
    children: dom.repeat(dom.li, 3, function (index) {
        return {
            innerHTML: 'Item #' + (index + 1)
        };
    })
});
```

## Creating custom elements
```js
// <my-custom-element></my-custom-element>

var myCustomElement = dom.create('my-custom-element');
```

## Supported HTML tags
* &lt;a&gt;
* &lt;abbr&gt;
* &lt;acronym&gt;
* &lt;address&gt;
* &lt;applet&gt;
* &lt;area&gt;
* &lt;article&gt;
* &lt;aside&gt;
* &lt;audio&gt;
* &lt;b&gt;
* &lt;base&gt;
* &lt;basefont&gt;
* &lt;bdi&gt;
* &lt;bdo&gt;
* &lt;big&gt;
* &lt;blink&gt;
* &lt;blockquote&gt;
* &lt;body&gt;
* &lt;br&gt;
* &lt;button&gt;
* &lt;canvas&gt;
* &lt;caption&gt;
* &lt;center&gt;
* &lt;cite&gt;
* &lt;code&gt;
* &lt;col&gt;
* &lt;colgroup&gt;
* &lt;command&gt;
* &lt;content&gt;
* &lt;data&gt;
* &lt;datalist&gt;
* &lt;dd&gt;
* &lt;del&gt;
* &lt;details&gt;
* &lt;dfn&gt;
* &lt;dir&gt;
* &lt;div&gt;
* &lt;dl&gt;
* &lt;dt&gt;
* &lt;element&gt;
* &lt;em&gt;
* &lt;embed&gt;
* &lt;fieldset&gt;
* &lt;figcaption&gt;
* &lt;figure&gt;
* &lt;font&gt;
* &lt;footer&gt;
* &lt;form&gt;
* &lt;frame&gt;
* &lt;frameset&gt;
* &lt;h1&gt;
* &lt;h2&gt;
* &lt;h3&gt;
* &lt;h4&gt;
* &lt;h5&gt;
* &lt;h6&gt;
* &lt;head&gt;
* &lt;header&gt;
* &lt;hr&gt;
* &lt;html&gt;
* &lt;i&gt;
* &lt;iframe&gt;
* &lt;image&gt;
* &lt;input&gt;
* &lt;ins&gt;
* &lt;isindex&gt;
* &lt;kbd&gt;
* &lt;keygen&gt;
* &lt;label&gt;
* &lt;legend&gt;
* &lt;li&gt;
* &lt;link&gt;
* &lt;listing&gt;
* &lt;main&gt;
* &lt;map&gt;
* &lt;mark&gt;
* &lt;marquee&gt;
* &lt;meta&gt;
* &lt;meter&gt;
* &lt;nav&gt;
* &lt;noframes&gt;
* &lt;noscript&gt;
* &lt;object&gt;
* &lt;ol&gt;
* &lt;optgroup&gt;
* &lt;option&gt;
* &lt;output&gt;
* &lt;p&gt;
* &lt;param&gt;
* &lt;plaintext&gt;
* &lt;pre&gt;
* &lt;progress&gt;
* &lt;q&gt;
* &lt;rp&gt;
* &lt;rt&gt;
* &lt;rtc&gt;
* &lt;ruby&gt;
* &lt;s&gt;
* &lt;samp&gt;
* &lt;script&gt;
* &lt;section&gt;
* &lt;select&gt;
* &lt;shadow&gt;
* &lt;slot&gt;
* &lt;small&gt;
* &lt;source&gt;
* &lt;spacer&gt;
* &lt;span&gt;
* &lt;strike&gt;
* &lt;strong&gt;
* &lt;style&gt;
* &lt;sub&gt;
* &lt;summary&gt;
* &lt;sup&gt;
* &lt;table&gt;
* &lt;tbody&gt;
* &lt;td&gt;
* &lt;template&gt;
* &lt;textarea&gt;
* &lt;tfoot&gt;
* &lt;th&gt;
* &lt;thead&gt;
* &lt;time&gt;
* &lt;title&gt;
* &lt;tr&gt;
* &lt;track&gt;
* &lt;tt&gt;
* &lt;u&gt;
* &lt;ul&gt;
* &lt;var&gt;
* &lt;video&gt;
* &lt;wbr&gt;
* &lt;xmp&gt;
