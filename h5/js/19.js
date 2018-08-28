(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"215":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),i=n(45),o=_interopRequireDefault(n(46)),l=_interopRequireDefault(n(53));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(216);var c=function(e){function AtActivityIndicator(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtActivityIndicator),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtActivityIndicator.__proto__||Object.getPrototypeOf(AtActivityIndicator)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtActivityIndicator,a.default.Component),r(AtActivityIndicator,[{"key":"render","value":function render(){var e=this.props,t=e.color,n=e.size,r=e.mode,o=e.content,c=["at-activity-indicator"];return"center"===r&&c.push("at-activity-indicator--center"),a.default.createElement(i.View,{"className":c},a.default.createElement(i.View,{"className":"at-activity-indicator__body"},a.default.createElement(l.default,{"size":n,"color":t})),o&&a.default.createElement(i.Text,{"className":"at-activity-indicator__content"},o))}}]),AtActivityIndicator}();t.default=c,c.defaultProps={"size":24,"color":"#6190E8"},c.propTypes={"size":o.default.number,"mode":o.default.string,"color":o.default.string,"content":o.default.string}},"216":function(e,t,n){},"218":function(e,t,n){},"26":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),i=n(45),o=_interopRequireDefault(n(215)),l=_interopRequireDefault(n(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(218);var c=function(e){function ActivityIndicatorPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ActivityIndicatorPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ActivityIndicatorPage.__proto__||Object.getPrototypeOf(ActivityIndicatorPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.atButton="",e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ActivityIndicatorPage,a.default.Component),r(ActivityIndicatorPage,[{"key":"render","value":function render(){return a.default.createElement(i.View,{"className":"page activity-indicator-page"},a.default.createElement(l.default,{"title":"Activity Indicator 活动指示器"}),a.default.createElement(i.View,{"className":"doc-body"},a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"自定义尺寸"),a.default.createElement(i.View,{"className":"panel__content"},a.default.createElement(i.View,{"className":"example-item"},a.default.createElement(i.View,{"className":"subitem"},a.default.createElement(o.default,{"size":"20"})),a.default.createElement(i.View,{"className":"subitem"},a.default.createElement(o.default,{"size":"24"})),a.default.createElement(i.View,{"className":"subitem"},a.default.createElement(o.default,{"size":"32"}))))),a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"自定义颜色"),a.default.createElement(i.View,{"className":"panel__content"},a.default.createElement(i.View,{"className":"example-item"},a.default.createElement(i.View,{"className":"subitem"},a.default.createElement(o.default,{"color":"#13CE66"})),a.default.createElement(i.View,{"className":"subitem"},a.default.createElement(o.default,{"color":"#FF4949"})),a.default.createElement(i.View,{"className":"subitem"},a.default.createElement(o.default,{"color":"#C9C9C9"}))))),a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"自定义文字"),a.default.createElement(i.View,{"className":"panel__content"},a.default.createElement(i.View,{"className":"example-item"},a.default.createElement(o.default,{"content":"加载中..."})))),a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"垂直水平居中"),a.default.createElement(i.View,{"className":"panel__content"},a.default.createElement(i.View,{"className":"example-item example-item--center"},a.default.createElement(o.default,{"mode":"center"})),a.default.createElement(i.View,{"className":"example-item example-item--center"},a.default.createElement(o.default,{"mode":"center","content":"Loading..."}))))))}}]),ActivityIndicatorPage}();t.default=c},"46":function(e,t,n){e.exports=n(48)()},"47":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(1),i=(_interopRequireDefault(a),_interopRequireDefault(n(0))),o=_interopRequireDefault(n(46)),l=n(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(50);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,a.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return i.default.createElement(l.View,{"className":"doc-header"},i.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":o.default.string}},"48":function(e,t,n){"use strict";var r=n(49);function emptyFunction(){}e.exports=function(){function shim(e,t,n,a,i,o){if(o!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"49":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"50":function(e,t,n){},"53":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),i=_interopRequireDefault(n(46)),o=n(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(54);var l=function(e){function AtLoading(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtLoading),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtLoading.__proto__||Object.getPrototypeOf(AtLoading)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtLoading,a.default.Component),r(AtLoading,[{"key":"render","value":function render(){var e=this.props,t=e.color,n=e.size,r={"width":n+"px","height":n+"px"},i={"border":"1px solid "+t,"border-color":t+" transparent transparent transparent"},l=Object.assign({},i,r);return a.default.createElement(o.View,{"className":"at-loading","style":r},a.default.createElement(o.View,{"className":"at-loading__ring","style":l}),a.default.createElement(o.View,{"className":"at-loading__ring","style":l}),a.default.createElement(o.View,{"className":"at-loading__ring","style":l}))}}]),AtLoading}();l.defaultProps={"size":"18","color":"#fff"},l.propTypes={"size":i.default.oneOfType([i.default.string,i.default.number]),"color":i.default.oneOfType([i.default.string,i.default.number])},t.default=l},"54":function(e,t,n){}}]);