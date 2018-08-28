(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"318":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=_interopRequireDefault(a(1)),r=_interopRequireDefault(a(0)),u=a(45),i=_interopRequireDefault(a(46)),o=_interopRequireDefault(a(56));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(319);var c=function(e){function AtRate(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtRate),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtRate.__proto__||Object.getPrototypeOf(AtRate)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtRate,r.default.Component),n(AtRate,[{"key":"handleClick","value":function handleClick(e){var t;(t=this.props).onChange.apply(t,[e+1].concat(Array.prototype.slice.call(arguments)))}},{"key":"render","value":function render(){for(var e=this,t=this.props,a=t.style,n=t.value,i=t.max,c=t.size,f=t.margin,s={"margin":l.default.pxTransform(f)},p=[],d=Math.floor(n),m=Math.ceil(n),_=0;_<i;_++)d>_?p.push("at-rate__icon at-rate__icon--on"):m-1===_?p.push("at-rate__icon at-rate__icon--half"):p.push("at-rate__icon at-rate__icon--off");return r.default.createElement(u.View,{"className":"at-rate","style":a},p.map(function(t,a){return r.default.createElement(u.View,{"className":t,"key":a,"style":s,"onClick":e.handleClick.bind(e,a)},r.default.createElement(o.default,{"value":"star-2","size":c}),r.default.createElement(u.View,{"className":"at-rate__left"},r.default.createElement(o.default,{"value":"star-2","size":c})))}))}}]),AtRate}();c.defaultProps={"style":"","size":20,"value":0,"max":5,"margin":5,"onChange":function onChange(){}},c.propTypes={"style":i.default.oneOfType([i.default.object,i.default.string]),"size":i.default.oneOfType([i.default.string,i.default.number]),"value":i.default.number,"max":i.default.number,"margin":i.default.number,"onChange":i.default.func},t.default=c},"319":function(e,t,a){},"321":function(e,t,a){},"44":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=(_interopRequireDefault(a(1)),_interopRequireDefault(a(0))),r=a(45),u=_interopRequireDefault(a(318)),i=_interopRequireDefault(a(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(321);var o=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"rateValue1":3,"rateValue2":3,"rateValue3":3,"rateValue4":3},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,l.default.Component),n(Index,[{"key":"handleRateChange","value":function handleRateChange(e,t){this.setState(function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{"value":a,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=a,e}({},e,t))}},{"key":"render","value":function render(){var e=this.state,t=e.rateValue1,a=e.rateValue2,n=e.rateValue3,o=e.rateValue4;return l.default.createElement(r.View,{"className":"page"},l.default.createElement(i.default,{"title":"Rate 评分"}),l.default.createElement(r.View,{"className":"doc-body"},l.default.createElement(r.View,{"className":"panel"},l.default.createElement(r.View,{"className":"panel__title"},"基础用法"),l.default.createElement(r.View,{"className":"panel__content"},l.default.createElement(r.View,{"className":"example-item"},l.default.createElement(u.default,{"value":t,"onChange":this.handleRateChange.bind(this,"rateValue1")})))),l.default.createElement(r.View,{"className":"panel"},l.default.createElement(r.View,{"className":"panel__title"},"自定义尺寸"),l.default.createElement(r.View,{"className":"panel__content"},l.default.createElement(r.View,{"className":"example-item"},l.default.createElement(u.default,{"size":"16","value":a,"onChange":this.handleRateChange.bind(this,"rateValue2")})))),l.default.createElement(r.View,{"className":"panel"},l.default.createElement(r.View,{"className":"panel__title"},"自定义评分数"),l.default.createElement(r.View,{"className":"panel__content"},l.default.createElement(r.View,{"className":"example-item"},l.default.createElement(u.default,{"max":10,"value":n,"onChange":this.handleRateChange.bind(this,"rateValue3")})))),l.default.createElement(r.View,{"className":"panel"},l.default.createElement(r.View,{"className":"panel__title"},"自定义星星间隔"),l.default.createElement(r.View,{"className":"panel__content"},l.default.createElement(r.View,{"className":"example-item"},l.default.createElement(u.default,{"margin":15,"value":o,"onChange":this.handleRateChange.bind(this,"rateValue4")})))),l.default.createElement(r.View,{"className":"panel"},l.default.createElement(r.View,{"className":"panel__title"},"只读"),l.default.createElement(r.View,{"className":"panel__content"},l.default.createElement(r.View,{"className":"example-item"},l.default.createElement(r.View,null,"评分: 3.5"),l.default.createElement(r.View,null,l.default.createElement(u.default,{"value":3.5})))))))}}]),Index}();t.default=o}}]);