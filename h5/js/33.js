(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"298":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(1)),u=_interopRequireDefault(n(0)),l=n(45),i=_interopRequireDefault(n(46)),s=_interopRequireDefault(n(56));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(299);var o=function(e){function AtInputNumber(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtInputNumber),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtInputNumber.__proto__||Object.getPrototypeOf(AtInputNumber)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtInputNumber,u.default.Component),a(AtInputNumber,[{"key":"handleMinus","value":function handleMinus(){var e=this.props,t=e.disabled,n=e.value,a=e.min,r=e.step;if(!t){var u=AtInputNumber.addNum(n,-r);u=u>a?u:a,this.props.onChange(AtInputNumber.parseValue(u))}}},{"key":"handlePlus","value":function handlePlus(){var e=this.props,t=e.disabled,n=e.value,a=e.max,r=e.step;if(!t){var u=AtInputNumber.addNum(n,r);u=u<a?u:a,this.props.onChange(AtInputNumber.parseValue(u))}}},{"key":"handleInput","value":function handleInput(e){var t=e.target.value,n=this.props,a=n.disabled,r=n.min,u=n.max;if(!a){var l=t<u?t:u;l=l>r?l:r,this.props.onChange(AtInputNumber.parseValue(l))}}},{"key":"render","value":function render(){var e=this.props,t=e.style,n=e.width,a=e.disabled,i=e.value,o=e.min,c=e.max,d=e.size,p="width: "+r.default.pxTransform(n),f=["at-input-number"];return d&&f.push("at-input-number--lg"),u.default.createElement(l.View,{"className":f,"style":t},u.default.createElement(l.View,{"className":i<=o||a?"at-input-number__btn at-input-number--disabled":"at-input-number__btn","onClick":this.handleMinus.bind(this)},u.default.createElement(s.default,{"value":"subtract","size":"18"})),u.default.createElement(l.Input,{"className":"at-input-number__input","style":p,"type":"digit","value":i,"disabled":a,"onInput":this.handleInput.bind(this)}),u.default.createElement(l.View,{"className":i>=c||a?"at-input-number__btn at-input-number--disabled":"at-input-number__btn","onClick":this.handlePlus.bind(this)},u.default.createElement(s.default,{"value":"add","size":"18"})))}}],[{"key":"addNum","value":function addNum(e,t){var n=void 0,a=void 0;try{n=e.toString().split(".")[1].length}catch(e){n=0}try{a=t.toString().split(".")[1].length}catch(e){a=0}var r=Math.pow(10,Math.max(n,a));return(Math.round(e*r)+Math.round(t*r))/r}},{"key":"parseValue","value":function parseValue(e){var t=e.toString();return 0===t.indexOf("0")&&-1===t.indexOf(".")?parseFloat(e):e}}]),AtInputNumber}();o.defaultProps={"style":"","disabled":!1,"value":1,"width":80,"min":0,"max":100,"step":1,"size":"","onChange":function onChange(){}},o.propTypes={"style":i.default.oneOfType([i.default.object,i.default.string]),"disabled":i.default.bool,"value":i.default.number,"width":i.default.number,"min":i.default.number,"max":i.default.number,"step":i.default.number,"size":i.default.string,"onChange":i.default.func},t.default=o},"299":function(e,t,n){},"301":function(e,t,n){},"40":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),u=n(45),l=_interopRequireDefault(n(298)),i=_interopRequireDefault(n(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(301);var s=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"number1":1,"number2":1,"number3":1,"number4":1,"number5":1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,r.default.Component),a(Index,[{"key":"handleNumberChange","value":function handleNumberChange(e,t){this.setState(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},e,t))}},{"key":"render","value":function render(){return r.default.createElement(u.View,{"className":"page"},r.default.createElement(i.default,{"title":"Input Number 数字输入框"}),r.default.createElement(u.View,{"className":"doc-body"},r.default.createElement(u.View,{"className":"panel"},r.default.createElement(u.View,{"className":"panel__title"},"基础用法"),r.default.createElement(u.View,{"className":"panel__content"},r.default.createElement(u.View,{"className":"example-item"},r.default.createElement(u.View,{"className":"example-item__desc"},"min=0, max=10"),r.default.createElement(l.default,{"min":0,"max":10,"step":1,"value":this.state.number1,"onChange":this.handleNumberChange.bind(this,"number1")})))),r.default.createElement(u.View,{"className":"panel"},r.default.createElement(u.View,{"className":"panel__title"},"小数"),r.default.createElement(u.View,{"className":"panel__content"},r.default.createElement(u.View,{"className":"example-item"},r.default.createElement(u.View,{"className":"example-item__desc"},"step=0.1"),r.default.createElement(l.default,{"min":0,"max":5,"step":.1,"value":this.state.number2,"onChange":this.handleNumberChange.bind(this,"number2")})))),r.default.createElement(u.View,{"className":"panel"},r.default.createElement(u.View,{"className":"panel__title"},"禁用状态"),r.default.createElement(u.View,{"className":"panel__content"},r.default.createElement(u.View,{"className":"example-item"},r.default.createElement(l.default,{"disabled":!0,"min":0,"max":10,"step":1,"value":this.state.number3,"onChange":this.handleNumberChange.bind(this,"number3")})))),r.default.createElement(u.View,{"className":"panel"},r.default.createElement(u.View,{"className":"panel__title"},"自定义宽度"),r.default.createElement(u.View,{"className":"panel__content"},r.default.createElement(u.View,{"className":"example-item"},r.default.createElement(l.default,{"width":200,"min":0,"max":10,"step":1,"value":this.state.number4,"onChange":this.handleNumberChange.bind(this,"number4")})))),r.default.createElement(u.View,{"className":"panel"},r.default.createElement(u.View,{"className":"panel__title"},"大尺寸"),r.default.createElement(u.View,{"className":"panel__content"},r.default.createElement(u.View,{"className":"example-item"},r.default.createElement(l.default,{"size":"lg","min":0,"max":10,"step":1,"value":this.state.number5,"onChange":this.handleNumberChange.bind(this,"number5")}))))))}}]),Index}();t.default=s}}]);