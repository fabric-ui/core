'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var ReactDOM = require('react-dom');
var InputMask = require('react-input-mask');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var InputMask__default = /*#__PURE__*/_interopDefaultLegacy(InputMask);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$s = ".ToolTip-module_container__2pbpO {\n    user-select: none;\n    height: auto;\n    min-height: 15px;\n\n    width: fit-content;\n    max-width: 300px;\n    /*box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;*/\n    opacity: 0;\n\n    animation: ToolTip-module_show__qH1QD 250ms ease-in-out forwards;\n    animation-delay: 500ms;\n\n    position: relative;\n}\n\n@keyframes ToolTip-module_show__qH1QD {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n.ToolTip-module_content__frnHK{\n    padding: 4px 8px;\n    border-radius: 5px;\n    background: rgba(38,38,38,1);\n    color: white;\n    font-family: \"Roboto\";\n    font-size: .8rem;\n    font-weight: bold;\n    text-align: center;\n\n}\n.ToolTip-module_exitAnim__3VgmV{\n    animation: ToolTip-module_exit__3c7BK 250ms ease-in-out;\n    transform-origin: top left;\n}\n\n@keyframes ToolTip-module_exit__3c7BK {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}";
var styles$q = {"container":"ToolTip-module_container__2pbpO","show":"ToolTip-module_show__qH1QD","content":"ToolTip-module_content__frnHK","exitAnim":"ToolTip-module_exitAnim__3VgmV","exit":"ToolTip-module_exit__3c7BK"};
styleInject(css_248z$s);

function ToolTip(props) {
  var toolTip = /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$q.container
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$q.content
  }, props.content === undefined ? props.children : props.content));
  var ref = React.useRef();
  var mountingPoint = React.useRef();

  var hover = function hover(event) {
    var _ref$current;

    ReactDOM__default["default"].unmountComponentAtNode(mountingPoint.current);
    ReactDOM__default["default"].render(toolTip, mountingPoint.current);
    var rect = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.parentNode.getBoundingClientRect();

    if (rect !== undefined) {
      mountingPoint.current.style.position = 'fixed';
      mountingPoint.current.style.zIndex = '999';
      var translateX, translateY;

      switch (props.align) {
        case 'middle':
          {
            mountingPoint.current.style.top = rect.top + rect.height / 2 + 'px';
            translateY = '-50%';
            break;
          }

        case 'start':
          {
            mountingPoint.current.style.top = rect.top - 8 + 'px';
            translateY = '-100%';
            break;
          }

        default:
          {
            mountingPoint.current.style.top = rect.top + rect.height + 8 + 'px';
            translateY = '0';
            break;
          }
      }

      switch (props.justify) {
        case 'end':
          {
            mountingPoint.current.style.left = rect.left + rect.width + 8 + 'px';
            translateX = '0';
            break;
          }

        case 'start':
          {
            mountingPoint.current.style.left = rect.left - 8 + 'px';
            translateX = '-100%';
            break;
          }

        default:
          {
            mountingPoint.current.style.left = rect.left + rect.width / 2 + 'px';
            translateX = '-50%';
            break;
          }
      }

      mountingPoint.current.style.transform = "translate(".concat(translateX, ", ").concat(translateY, ")");
    }
  };

  var hoverEnd = function hoverEnd(event) {
    if (!document.elementsFromPoint(event.clientX, event.clientY).includes(mountingPoint.current)) {
      ReactDOM__default["default"].unmountComponentAtNode(mountingPoint.current);
    }
  };

  React.useEffect(function () {
    var _ref$current2, _ref$current3, _mountingPoint$curren;

    var newElement = document.createElement("div");
    mountingPoint.current = newElement;
    document.body.appendChild(newElement);
    (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.parentNode.addEventListener('mouseenter', hover);
    (_ref$current3 = ref.current) === null || _ref$current3 === void 0 ? void 0 : _ref$current3.parentNode.addEventListener('mouseleave', hoverEnd);
    (_mountingPoint$curren = mountingPoint.current) === null || _mountingPoint$curren === void 0 ? void 0 : _mountingPoint$curren.addEventListener('mouseleave', hoverEnd);
    return function () {
      var _ref$current4, _ref$current5, _mountingPoint$curren2;

      (_ref$current4 = ref.current) === null || _ref$current4 === void 0 ? void 0 : _ref$current4.parentNode.removeEventListener('mouseenter', hover);
      (_ref$current5 = ref.current) === null || _ref$current5 === void 0 ? void 0 : _ref$current5.parentNode.removeEventListener('mouseleave', hoverEnd);
      (_mountingPoint$curren2 = mountingPoint.current) === null || _mountingPoint$curren2 === void 0 ? void 0 : _mountingPoint$curren2.removeEventListener('mouseleave', hoverEnd);
      ReactDOM__default["default"].unmountComponentAtNode(mountingPoint.current);
      document.body.removeChild(newElement);
    };
  }, [props.children, props.content]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: ref,
    style: {
      display: 'none'
    }
  });
}
ToolTip.propTypes = {
  content: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node,
  color: PropTypes__default["default"].string,
  justify: PropTypes__default["default"].oneOf(['end', 'middle', 'start']),
  align: PropTypes__default["default"].oneOf(['end', 'middle', 'start'])
};

var css_248z$r = ".Alert-module_wrapper__1Xb80 {\n    top: unset !important;\n    bottom: 16px !important;\n    left: 50% !important;\n    transform: translate(-50%) !important;\n    /*overflow: visible !important;*/\n    /*border-radius: 8px ;*/\n}\n\n.Alert-module_alertContainer__1qzTg {\n    --background: #ff5555;\n    --color: white;\n    background: white;\n    color: #555555 !important;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    transition: visibility 150ms linear, opacity 150ms linear;\n\n    padding: 8px;\n    width: 500px;\n    height: 56px;\n\n    position: relative;\n    border-radius: 8px ;\n\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    overflow: hidden;\n    cursor: pointer;\n}\n\n.Alert-module_alertContainer__1qzTg::before {\n    content: '';\n    z-index: 0;\n    position: absolute;\n    background: var(--background);\n    opacity: .3;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n}\n\n/*.alertContainer:hover {*/\n/*    transform: scale(1.2);*/\n/*}*/\n\n/*.alertContainer:active {*/\n/*    transform: scale(.8);*/\n/*}*/\n\n\n.Alert-module_success__WZPeM {\n\n    --background: #00F400;\n}\n\n.Alert-module_info__19jst {\n    --background: #0095ff;\n\n}\n\n.Alert-module_alert__3PpgF {\n    --background: #FFFF3E;\n\n}\n\n.Alert-module_icon__2UUDw {\n\n    color: var(--background) !important;\n}\n\n.Alert-module_button__2Xjxi {\n    padding: 4px;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.Alert-module_content__2CXCg {\n    width: 100%;\n\n    font-size: .9rem;\n\n    position: relative;\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    height: 100%;\n    justify-items: flex-start;\n    gap: 4px;\n}";
var styles$p = {"wrapper":"Alert-module_wrapper__1Xb80","alertContainer":"Alert-module_alertContainer__1qzTg","success":"Alert-module_success__WZPeM","info":"Alert-module_info__19jst","alert":"Alert-module_alert__3PpgF","icon":"Alert-module_icon__2UUDw","button":"Alert-module_button__2Xjxi","content":"Alert-module_content__2CXCg"};
styleInject(css_248z$r);

var css_248z$q = "@import url('http://fonts.cdnfonts.com/css/roboto');\r\n\r\n.Button-module_button__jUyhs {\r\n    border-radius: 5px;\r\n    outline: none;\r\n    background: unset;\r\n    border: none;\r\n    font-size: .8rem;\r\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\r\n    cursor: pointer;\r\n    --color: #0095ff;\r\n    --darker-color: #0080DB;\r\n    padding: 8px 16px;\r\n    text-align: center;\r\n    color: var(--fabric-color-secondary);\r\n\r\n    overflow: hidden;\r\n    position: relative;\r\n\r\n    --delay: 0ms;\r\n}\r\n\r\n.Button-module_button__jUyhs:disabled {\r\n    cursor: unset;\r\n}\r\n\r\n.Button-module_button__jUyhs:hover {\r\n    --delay: 500ms;\r\n}\r\n\r\n.Button-module_button__jUyhs::after {\r\n    position: absolute;\r\n    content: '';\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background: var(--color);\r\n    opacity: 0;\r\n    transition: 150ms linear var(--delay);\r\n}\r\n\r\n.Button-module_button__jUyhs:disabled::after {\r\n    content: none;\r\n}\r\n\r\n.Button-module_button__jUyhs:not(:active) {\r\n    --delay: 0ms;\r\n}\r\n\r\n.Button-module_button__jUyhs:active::after {\r\n    opacity: .15;\r\n}\r\n\r\n.Button-module_secondaryVariant__2dbm4 {\r\n    --darker-color: #FF2626;\r\n    --color: #ff5555\r\n}\r\n\r\n.Button-module_baseHighlight__13Ysj::after {\r\n    position: absolute;\r\n    content: '';\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background: var(--color);\r\n    opacity: 0;\r\n    animation: Button-module_fadeIn__1a9AP 150ms linear forwards 400ms;\r\n}\r\n\r\n@keyframes Button-module_fadeIn__1a9AP {\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n    100% {\r\n        opacity: .15;\r\n    }\r\n}\r\n\r\n/*MINIMAL*/\r\n.Button-module_minimal__3PuwP {\r\n\r\n    position: relative;\r\n    background: transparent;\r\n\r\n    transition: 150ms ease-in;\r\n}\r\n\r\n.Button-module_minimal__3PuwP::before {\r\n    content: '';\r\n    position: absolute;\r\n\r\n    transition: 150ms ease-in;\r\n    bottom: 0;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n\r\n    border-radius: 16px;\r\n    background: var(--color);\r\n    height: 3px;\r\n    width: 50%;\r\n    opacity: 0;\r\n}\r\n\r\n.Button-module_minimalHorizontal__3HrVf::before {\r\n    content: '';\r\n    position: absolute;\r\n\r\n    transition: 150ms ease-in;\r\n    bottom: 0;\r\n    border-radius: 16px;\r\n    background: var(--color);\r\n\r\n    opacity: 0;\r\n\r\n    height: 50%;\r\n    width: 3px;\r\n    left: 0;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n}\r\n\r\n.Button-module_minimal__3PuwP:hover::before, .Button-module_minimalHighlight__NJAuj.Button-module_minimal__3PuwP::before, .Button-module_minimalHorizontal__3HrVf:hover::before {\r\n    opacity: 1;\r\n}\r\n\r\n\r\n.Button-module_minimal__3PuwP:hover, .Button-module_minimalHighlight__NJAuj {\r\n    color: var(--color);\r\n}\r\n\r\n.Button-module_minimal__3PuwP:disabled::before, .Button-module_minimalHorizontal__3HrVf:disabled::before {\r\n    content: none;\r\n}\r\n\r\n.Button-module_minimal__3PuwP:disabled {\r\n    color: var(--fabric-color-quaternary);\r\n}\r\n\r\n/*MINIMAL*/\r\n\r\n\r\n/*FILLED*/\r\n.Button-module_filled__2btgq {\r\n    position: relative;\r\n    transition: 150ms ease-in;\r\n    color: white;\r\n    background: var(--color) !important;\r\n    box-shadow: var(--fabric-box-shadow-primary) 1px 1px 2px 1px;\r\n}\r\n\r\n.Button-module_filled__2btgq:active, .Button-module_filledHighlight__2zrbL {\r\n    box-shadow: none;\r\n}\r\n\r\n.Button-module_filled__2btgq:disabled {\r\n    border-color: transparent;\r\n    color: var(--fabric-color-quaternary);\r\n    background: transparent !important;\r\n    box-shadow: none;\r\n}\r\n\r\n/*FILLED*/\r\n\r\n\r\n/*OUTLINED*/\r\n.Button-module_outlined__2WAcZ {\r\n\r\n    position: relative;\r\n    background: transparent;\r\n    border: var(--fabric-border-primary) 1px solid;\r\n    transition: 150ms ease-in;\r\n}\r\n\r\n.Button-module_default__1h4uk {\r\n    border: none;\r\n}\r\n\r\n.Button-module_outlined__2WAcZ:hover {\r\n    color: var(--color);\r\n}\r\n\r\n.Button-module_outlined__2WAcZ:active, .Button-module_outlinedHighlight__2bIRC {\r\n    color: var(--color);\r\n    border-color: var(--color);\r\n}\r\n\r\n.Button-module_outlined__2WAcZ:disabled {\r\n    border-color: var(--fabric-border-primary);\r\n    color: var(--fabric-color-quaternary);\r\n    background: transparent;\r\n}\r\n\r\n/*OUTLINED*/\r\n";
var styles$o = {"button":"Button-module_button__jUyhs","secondaryVariant":"Button-module_secondaryVariant__2dbm4","baseHighlight":"Button-module_baseHighlight__13Ysj","fadeIn":"Button-module_fadeIn__1a9AP","minimal":"Button-module_minimal__3PuwP","minimalHorizontal":"Button-module_minimalHorizontal__3HrVf","minimalHighlight":"Button-module_minimalHighlight__NJAuj","filled":"Button-module_filled__2btgq","filledHighlight":"Button-module_filledHighlight__2zrbL","outlined":"Button-module_outlined__2WAcZ","default":"Button-module_default__1h4uk","outlinedHighlight":"Button-module_outlinedHighlight__2bIRC"};
styleInject(css_248z$q);

var css_248z$p = "\r\n.Ripple-module_ripple__a3al8 {\r\n    --y: 0;\r\n    --x: 0;\r\n\r\n    --accent-color: #0095ff;\r\n\r\n    --opacity: .15;\r\n    --size: 16px;\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    border-radius: 50%;\r\n    opacity: 0;\r\n    background: var(--accent-color);\r\n    transform: translate(-50%, -50%);\r\n\r\n    left: var(--x);\r\n    top: var(--y);\r\n\r\n    animation: Ripple-module_rippleAnim__3SqHu 1s ease-in forwards;\r\n}\r\n\r\n@keyframes Ripple-module_rippleAnim__3SqHu {\r\n    0% {\r\n        opacity: 0;\r\n        width: 0;\r\n        height: 0;\r\n    }\r\n    50% {\r\n        opacity: var(--opacity);\r\n        width: calc(var(--size) * 2);\r\n        height: calc(var(--size) * 2);\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        width: calc(var(--size) * 2);\r\n        height: calc(var(--size) * 2);\r\n    }\r\n}";
var styles$n = {"ripple":"Ripple-module_ripple__a3al8","rippleAnim":"Ripple-module_rippleAnim__3SqHu"};
styleInject(css_248z$p);

function Ripple(props) {
  var ref = React.useRef();

  var addRipple = function addRipple(e) {
    var target = document.createElement('span');
    var parent = ref.current.parentNode;
    parent.appendChild(target);
    if (props.opacity) target.style.setProperty('--opacity', props.opacity);
    if (props.accentColor) target.style.setProperty('--accent-color', props.accentColor);
    var rect = ref.current.parentNode.getBoundingClientRect();
    var bigger = rect.width > rect.height ? rect.width : rect.height;
    target.style.setProperty('--size', bigger + 'px');
    target.style.setProperty('--x', e.clientX - rect.x + 'px');
    target.style.setProperty('--y', e.clientY - rect.y + 'px');
    target.classList.add(styles$n.ripple);
    target.addEventListener('animationend', function () {
      var _ref$current;

      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.parentNode.removeChild(target);
    }, {
      once: true
    });
  };

  React.useEffect(function () {
    var _ref$current2;

    if (!props.disabled) (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.parentNode.addEventListener('mousedown', addRipple);
    return function () {
      var _ref$current3;

      (_ref$current3 = ref.current) === null || _ref$current3 === void 0 ? void 0 : _ref$current3.parentNode.removeEventListener('mousedown', addRipple);
    };
  }, [props]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: ref,
    style: {
      display: 'none'
    }
  });
}
Ripple.propTypes = {
  disabled: PropTypes__default["default"].bool,
  accentColor: PropTypes__default["default"].string,
  opacity: PropTypes__default["default"].number
};

function Button(props) {
  var variant = React.useMemo(function () {
    switch (props.variant) {
      case 'minimal':
        return {
          normal: styles$o.minimal,
          highlight: [styles$o.minimalHighlight, styles$o.baseHighlight].join(' ')
        };

      case 'filled':
        return {
          normal: styles$o.filled,
          highlight: styles$o.filledHighlight
        };

      case 'outlined':
        return {
          normal: styles$o.outlined,
          highlight: [styles$o.outlinedHighlight, styles$o.baseHighlight].join(' ')
        };

      case 'minimal-horizontal':
        return {
          normal: [styles$o.minimal, styles$o.minimalHorizontal].join(' '),
          highlight: [styles$o.minimalHighlight, styles$o.baseHighlight].join(' ')
        };

      default:
        return {
          normal: [styles$o["default"], styles$o.outlined].join(' '),
          highlight: [styles$o.outlinedHighlight, styles$o.baseHighlight].join(' ')
        };
    }
  }, [props.variant, props.highlight]);
  var color = React.useMemo(function () {
    if (props.color === 'secondary') return styles$o.secondaryVariant;else return undefined;
  }, [props.color]);
  var accentColor = React.useMemo(function () {
    if (props.variant === 'filled') {
      if (props.color === 'secondary') return '#FF2626';else return '#0080DB';
    } else if (props.color === 'secondary') return '#ff5555';else return '#0095ff';
  }, [props.color]);
  return /*#__PURE__*/React__default["default"].createElement("button", {
    className: [styles$o.button, variant.normal, props.highlight ? variant.highlight : undefined, color, props.className].join(' '),
    onClick: props.onClick,
    ref: props.reference,
    style: props.styles,
    "data-highlight": JSON.stringify(props.highlight),
    disabled: props.disabled
  }, /*#__PURE__*/React__default["default"].createElement(Ripple, {
    disabled: props.disabled,
    opacity: props.variant === 'filled' ? .8 : undefined,
    accentColor: accentColor
  }), props.children);
}
Button.propTypes = {
  reference: PropTypes__default["default"].any,
  variant: PropTypes__default["default"].oneOf(['minimal', 'filled', 'outlined', 'minimal-horizontal']),
  children: PropTypes__default["default"].node,
  styles: PropTypes__default["default"].object,
  onClick: PropTypes__default["default"].func,
  disabled: PropTypes__default["default"].bool,
  highlight: PropTypes__default["default"].bool,
  color: PropTypes__default["default"].oneOf(['primary', 'secondary']),
  className: PropTypes__default["default"].string
};

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var css_248z$o = "@import '../../../misc/theme/styles.module.css';\n\n.Modal-module_wrapper__peqWF {\n    /*overflow: hidden;*/\n    position: fixed;\n    z-index: 300;\n    transition: opacity 150ms ease-in-out;\n    bottom: 0;\n}\n\n.Modal-module_fitContent__3p_fP {\n    height: fit-content;\n    width: fit-content;\n}\n\n.Modal-module_fitPage__CXDNO {\n    height: 100vh;\n    width: 100vw;\n}\n\n.Modal-module_modalContainer__3aKtV {\n    width: 100%;\n    height: 100%;\n}\n\n\n\n@keyframes Modal-module_fadeOutAnim__2SUYV {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes Modal-module_fadeInAnim__3Gixz {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n\n.Modal-module_enterFade__1xlj8 {\n    animation: Modal-module_fadeInAnim__3Gixz ease-in-out 250ms forwards;\n}\n\n.Modal-module_exitFade__2gmwF {\n    animation: Modal-module_fadeOutAnim__2SUYV ease-in-out 250ms forwards;\n}\n\n\n.Modal-module_slideLeftEnter__1a4nB {\n    animation: Modal-module_slideLeftEnterAnim__3Y1mE ease-in-out 250ms;\n}\n\n.Modal-module_slideLeftExit__3lXC7 {\n    animation: Modal-module_slideLeftExitAnim__2uGD2 ease-in-out 250ms;\n}\n\n.Modal-module_slideRightEnter__c2m0V {\n    animation: Modal-module_slideRightEnterAnim__zSDil ease-in-out 250ms;\n}\n\n.Modal-module_slideRightExit__3rrOc {\n    animation: Modal-module_slideRightExitAnim__187-I ease-in-out 250ms;\n}\n\n@keyframes Modal-module_slideLeftEnterAnim__3Y1mE {\n    0% {\n        transform: translateX(-100%);\n\n    }\n    100% {\n        transform: translateX(0);\n    }\n}\n\n@keyframes Modal-module_slideLeftExitAnim__2uGD2 {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(-100%);\n    }\n}\n\n@keyframes Modal-module_slideRightEnterAnim__zSDil {\n    0% {\n        transform: translateX(100%);\n\n    }\n    100% {\n        transform: translateX(0);\n    }\n}\n\n@keyframes Modal-module_slideRightExitAnim__187-I {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(100%);\n    }\n}\n\n.Modal-module_background__101HU {\n    background-color: var(--fabric-background-primary);\n}\n\n.Modal-module_slideBottomEnter__39VPK{\n    animation: Modal-module_slideBottomEnterAnim__PXHAQ ease-in-out 250ms;\n}\n.Modal-module_slideBottomExit__3uVE9{\n    animation: Modal-module_slideBottomExitAnim__15zxc ease-in-out 250ms;\n}\n\n@keyframes Modal-module_slideBottomEnterAnim__PXHAQ {\n    0% {\n        transform: translateY(100%);\n\n    }\n    100% {\n        transform: translateY(0);\n    }\n}\n\n@keyframes Modal-module_slideBottomExitAnim__15zxc {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(100%);\n    }\n}\n";
var styles$m = {"wrapper":"Modal-module_wrapper__peqWF","fitContent":"Modal-module_fitContent__3p_fP","fitPage":"Modal-module_fitPage__CXDNO","modalContainer":"Modal-module_modalContainer__3aKtV","enterFade":"Modal-module_enterFade__1xlj8","fadeInAnim":"Modal-module_fadeInAnim__3Gixz","exitFade":"Modal-module_exitFade__2gmwF","fadeOutAnim":"Modal-module_fadeOutAnim__2SUYV","slideLeftEnter":"Modal-module_slideLeftEnter__1a4nB","slideLeftEnterAnim":"Modal-module_slideLeftEnterAnim__3Y1mE","slideLeftExit":"Modal-module_slideLeftExit__3lXC7","slideLeftExitAnim":"Modal-module_slideLeftExitAnim__2uGD2","slideRightEnter":"Modal-module_slideRightEnter__c2m0V","slideRightEnterAnim":"Modal-module_slideRightEnterAnim__zSDil","slideRightExit":"Modal-module_slideRightExit__3rrOc","slideRightExitAnim":"Modal-module_slideRightExitAnim__187-I","background":"Modal-module_background__101HU","slideBottomEnter":"Modal-module_slideBottomEnter__39VPK","slideBottomEnterAnim":"Modal-module_slideBottomEnterAnim__PXHAQ","slideBottomExit":"Modal-module_slideBottomExit__3uVE9","slideBottomExitAnim":"Modal-module_slideBottomExitAnim__15zxc"};
styleInject(css_248z$o);

var css_248z$n = ".styles-module_light__1cr8h {\r\n    --fabric-background-primary: white;\r\n    --fabric-background-secondary: #f4f5fa;\r\n    --fabric-background-tertiary: #f3f6f9;\r\n    --fabric-background-quaternary: #E8F0FE;\r\n\r\n    --fabric-border-primary: #F1F1F5;\r\n    --fabric-border-secondary: #e0e0e0;\r\n\r\n    --fabric-color-primary: #333333;\r\n    --fabric-color-secondary: #555555;\r\n    --fabric-color-tertiary: #666666;\r\n    --fabric-color-quaternary: #777777;\r\n    --fabric-color-quinary: #999999;\r\n    --fabric-color-senary: white;\r\n\r\n    --fabric-box-shadow-primary: #e0e0e0;\r\n}\r\n\r\n.styles-module_dark__3eFo2 {\r\n\r\n\r\n    --fabric-background-primary: #292c2b;\r\n    --fabric-background-secondary: #191C1C;\r\n    --fabric-background-tertiary: #1e2121;\r\n    --fabric-background-quaternary: #1f2123;\r\n\r\n    --fabric-border-primary: #1e2121;\r\n    --fabric-border-secondary: #707070;\r\n\r\n    --fabric-color-primary: #f4f5fa;\r\n    --fabric-color-secondary: #f4f5fa;\r\n    --fabric-color-tertiary: #f0f0f0;\r\n    --fabric-color-quaternary: #e0e0e0;\r\n    --fabric-color-quinary: #dedede;\r\n    --fabric-color-senary: #292c2b;\r\n\r\n    --fabric-box-shadow-primary: #1e2121;\r\n}\r\n\r\n";
var styles$l = {"light":"styles-module_light__1cr8h","dark":"styles-module_dark__3eFo2"};
styleInject(css_248z$n);

var ThemeContext = /*#__PURE__*/React__default["default"].createContext({
  dark: false,
  styles: styles$l,
  themes: {
    fabric_background_primary: 'white',
    fabric_background_secondary: '#f3f6f9',
    fabric_background_tertiary: '#f4f5fa',
    fabric_background_quaternary: '#E8F0FE',
    fabric_border_primary: '#F1F1F5',
    fabric_border_secondary: '#e0e0e0',
    fabric_color_primary: '#333333',
    fabric_color_secondary: '#555555',
    fabric_color_tertiary: '#666666',
    fabric_color_quaternary: '#777777',
    fabric_color_quinary: '#999999',
    fabric_color_senary: 'white',
    fabric_box_shadow_primary: '#e0e0e0'
  }
});

function useModal(_ref) {
  var animationStyle = _ref.animationStyle,
      variant = _ref.variant;
  var mountingPoint = React.useRef();
  var source = React.useRef();
  var target = React.useRef();
  var animation = React.useMemo(function () {
    var anim = {
      enter: styles$m.enterFade,
      exit: styles$m.exitFade
    };

    switch (animationStyle) {
      case 'slide-left':
        {
          anim = {
            enter: styles$m.slideLeftEnter,
            exit: styles$m.slideLeftExit
          };
          break;
        }

      case 'slide-right':
        {
          anim = {
            enter: styles$m.slideRightEnter,
            exit: styles$m.slideRightExit
          };
          break;
        }

      case 'slide-bottom':
        {
          anim = {
            enter: styles$m.slideBottomEnter,
            exit: styles$m.slideBottomExit
          };
          break;
        }
    }

    return anim;
  }, []);

  var unmountContent = function unmountContent() {
    try {
      ReactDOM__default["default"].unmountComponentAtNode(mountingPoint.current);
    } catch (e) {}
  };

  var renderContent = function renderContent(content) {
    ReactDOM__default["default"].render(content, mountingPoint.current);
  };

  var animate = function animate(enter) {
    var _target$current;

    if (enter) (_target$current = target.current) === null || _target$current === void 0 ? void 0 : _target$current.classList.add(animation.enter);else {
      var _target$current2, _target$current3;

      (_target$current2 = target.current) === null || _target$current2 === void 0 ? void 0 : _target$current2.classList.remove(animation.enter);
      (_target$current3 = target.current) === null || _target$current3 === void 0 ? void 0 : _target$current3.classList.add(animation.exit);
    }
  };

  var mount = function mount() {
    mountingPoint.current = document.createElement('div');
    document.body.appendChild(mountingPoint.current);
    mountingPoint.current.style.position = 'fixed';
    mountingPoint.current.style.zIndex = 999;
  };

  React.useEffect(function () {
    mount();
    return function () {
      unmountContent();
    };
  }, []);

  var getParentPosition = function getParentPosition() {
    var _source$current, _source$current$paren;

    var bBox = (_source$current = source.current) === null || _source$current === void 0 ? void 0 : (_source$current$paren = _source$current.parentNode) === null || _source$current$paren === void 0 ? void 0 : _source$current$paren.getBoundingClientRect();

    if (bBox && variant === 'fit') {
      return {
        top: bBox.top + bBox.height / 2 + 'px',
        left: bBox.left + bBox.width / 2 + 'px',
        transform: 'translate(-50%, -50%)'
      };
    } else return {};
  };

  return {
    animations: animation,
    renderContent: renderContent,
    animate: animate,
    unmountContent: unmountContent,
    target: target,
    source: source,
    getParentPosition: getParentPosition
  };
}

function Modal(props) {
  var _useModal = useModal({
    animationStyle: props.animationStyle,
    variant: props.variant
  }),
      animations = _useModal.animations,
      renderContent = _useModal.renderContent,
      animate = _useModal.animate,
      unmountContent = _useModal.unmountContent,
      target = _useModal.target,
      source = _useModal.source,
      getParentPosition = _useModal.getParentPosition;

  var context = React.useContext(ThemeContext);

  var handleMouseDown = function handleMouseDown(event) {
    if (!document.elementsFromPoint(event.clientX, event.clientY).includes(target.current) && alreadyRendered) props.handleClose();
  };

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      alreadyRendered = _useState2[0],
      setAlreadyRendered = _useState2[1];

  React.useEffect(function () {
    if (props.open) {
      var position = getParentPosition();
      renderContent( /*#__PURE__*/React__default["default"].createElement("div", {
        style: _objectSpread2(_objectSpread2({}, {
          background: "rgba(0, 0, 0, ".concat(props.blurIntensity !== undefined ? props.blurIntensity : .4, ")")
        }), position),
        className: [styles$m.wrapper, props.variant === 'fit' ? styles$m.fitContent : styles$m.fitPage, props.wrapperClassName, context.dark ? context.styles.dark : context.styles.light].join(' ')
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: [alreadyRendered ? undefined : animations.enter, props.className].join(' '),
        style: props.styles,
        ref: target,
        onAnimationEnd: function onAnimationEnd(e) {
          if (!alreadyRendered) setAlreadyRendered(true);

          if (e.target.classList.contains(animations.exit)) {
            setAlreadyRendered(false);
            props.handleClose();
            unmountContent();
          }
        }
      }, props.children)));
    } else if (alreadyRendered) animate();
  }, [props.children, props.open]);
  React.useEffect(function () {
    document.addEventListener('mousedown', handleMouseDown);
    return function () {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [alreadyRendered, props.open, props.children]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: source,
    style: {
      display: 'none'
    }
  });
}
Modal.propTypes = {
  wrapperClassName: PropTypes__default["default"].string,
  variant: PropTypes__default["default"].oneOf(['fill', 'fit']),
  animationStyle: PropTypes__default["default"].oneOf(['slide-left', 'slide-right', 'fade', 'slide-bottom']),
  className: PropTypes__default["default"].string,
  blurIntensity: PropTypes__default["default"].number,
  styles: PropTypes__default["default"].object,
  open: PropTypes__default["default"].bool.isRequired,
  handleClose: PropTypes__default["default"].func.isRequired,
  children: PropTypes__default["default"].node
};

function Alert(props) {
  var variant = React.useMemo(function () {
    switch (props.variant) {
      case 'success':
        return {
          className: styles$p.success,
          icon: /*#__PURE__*/React__default["default"].createElement("span", {
            className: "material-icons-round"
          }, "done")
        };

      case 'alert':
        return {
          className: styles$p.alert,
          icon: /*#__PURE__*/React__default["default"].createElement("span", {
            className: "material-icons-round"
          }, "warning")
        };

      case 'info':
        return {
          className: styles$p.info,
          icon: /*#__PURE__*/React__default["default"].createElement("span", {
            className: "material-icons-round"
          }, "info")
        };

      default:
        return {
          icon: /*#__PURE__*/React__default["default"].createElement("span", {
            className: "material-icons-round"
          }, "error")
        };
    }
  }, [props.variant]);
  React.useEffect(function () {
    var timeout = setTimeout(function () {
      try {
        props.handleClose();
      } catch (e) {}
    }, props.delay ? props.delay : 5000);
    return function () {
      if (timeout) clearTimeout(timeout);
    };
  }, [props.open]);
  return /*#__PURE__*/React__default["default"].createElement(Modal, {
    open: props.open,
    wrapperClassName: styles$p.wrapper,
    handleClose: function handleClose() {
      return props.handleClose(false);
    },
    animationStyle: 'fade',
    variant: 'fit',
    blurIntensity: 0,
    className: [styles$p.alertContainer, variant.className].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$p.content,
    onClick: function onClick() {
      if (props.onClick) props.onClick();
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: [styles$p.icon, styles$p.button].join(' ')
  }, variant.icon), props.children), /*#__PURE__*/React__default["default"].createElement(Button, {
    color: 'secondary',
    className: styles$p.button,
    onClick: function onClick() {
      return props.handleClose(true);
    }
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontSize: '1.1rem'
    },
    className: "material-icons-round"
  }, "close")));
}
Alert.propTypes = {
  variant: PropTypes__default["default"].oneOf(['success', 'alert', 'error', 'info']),
  onClick: PropTypes__default["default"].func,
  open: PropTypes__default["default"].bool.isRequired,
  handleClose: PropTypes__default["default"].func.isRequired,
  delay: PropTypes__default["default"].number,
  children: PropTypes__default["default"].node
};

var css_248z$m = "@import \"../../../misc/theme/styles.module.css\";\r\n\r\n.Form-module_wrapper__153NP {\r\n\r\n    width: 100%;\r\n    max-height: 100%;\r\n    height: 100%;\r\n\r\n    overflow-y: auto;\r\n    overflow-x: visible;\r\n    position: relative;\r\n}\r\n\r\n.Form-module_buttonContainer__1aUGJ {\r\n    color: var(--fabric-color-tertiary);\r\n    height: 100%;\r\n\r\n    border-radius: 5px;\r\n    transition: 150ms ease-in-out;\r\n    padding: 4px;\r\n\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n.Form-module_submitButton__3Y6mQ{\r\n    height: 100%;\r\n    border-radius: 5px;\r\n    transition: 150ms ease-in-out;\r\n    padding: 8px 24px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\n.Form-module_divider__3Byas{\r\n    width: 1px;\r\n    height: 75%;\r\n    background: var(--fabric-border-primary);\r\n}\r\n\r\n\r\n.Form-module_header__2ybTo {\r\n    transition: 250ms ease-in;\r\n    box-shadow: var(--fabric-box-shadow-primary) 0 2px 5px 1px;\r\n\r\n\r\n    position: sticky;\r\n    font-family: \"Roboto\";\r\n    top: 0;\r\n    z-index: 50;\r\n    background: var(--fabric-background-primary);\r\n    height: fit-content;\r\n\r\n    display: grid;\r\n    gap: 4px;\r\n\r\n    border: var(--fabric-border-primary) 1px solid;\r\n    padding: 8px;\r\n    border-radius: 5px;\r\n    font-size: 1.05rem;\r\n    font-weight: 600;\r\n\r\n    color: var(--fabric-color-secondary);\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.Form-module_headerContent__3Z2U_ {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\n.Form-module_content__2bq-t {\r\n    padding-bottom: 100px;\r\n    display: grid;\r\n    gap: 8px;\r\n}\r\n\r\n.Form-module_buttons__IkVi0 {\r\n    padding: 8px 0 0 0;\r\n    border-top: var(--fabric-border-primary) 1px solid;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    gap: 8px;\r\n    align-items: center\r\n}";
var shared$1 = {"wrapper":"Form-module_wrapper__153NP","buttonContainer":"Form-module_buttonContainer__1aUGJ","submitButton":"Form-module_submitButton__3Y6mQ","divider":"Form-module_divider__3Byas","header":"Form-module_header__2ybTo","headerContent":"Form-module_headerContent__3Z2U_","content":"Form-module_content__2bq-t","buttons":"Form-module_buttons__IkVi0"};
styleInject(css_248z$m);

var LanguageContext = /*#__PURE__*/React__default["default"].createContext('pt');

var LocaleEN = {
  required: 'This field is required.',
  values: 'Selected',
  create_new: 'Create new',
  reload_data: 'Reload data',
  filters: 'Filters',
  clear_selected: 'Clear selected',
  nothing_selected: 'Nothing selected',
  error: 'Some error occurred',
  success: 'Success',
  created: 'Created with success',
  details: 'Details',
  params: 'Request parameters',
  method: 'HTTP method:',
  setPackage: 'Package sent:',
  url: 'URL:',
  upload_files: 'Upload files',
  uploaded_files: 'Uploaded',
  create: 'Create',
  save: 'Save',
  accepted_types: 'Accepted file types',
  all: 'All',
  drag_files: 'Drag your files here',
  not_completed: 'Not completed',
  complete: 'Completed',
  step: 'Procedure',
  numeric: 'Numeric',
  empty: 'Empty'
};

var LocalePT = {
  required: 'Este campo é obrigatório.',
  values: 'Selecionados',
  create_new: 'Criar novo',
  reload_data: 'Recarregar dados',
  filters: 'Filtros',
  clear_selected: 'Limpar selecionado',
  nothing_selected: 'Nada selecionado',
  error: 'Algum erro ocorreu',
  success: 'Sucesso',
  created: 'Criado com sucesso',
  details: 'Detalhes',
  params: 'Parâmetros da requisição',
  method: 'Método http:',
  setPackage: 'Pacote enviado:',
  url: 'URL enviado:',
  upload_files: 'Anexar arquivos',
  uploaded_files: 'Anexados',
  create: 'Criar',
  save: 'Salvar',
  accepted_types: 'Tipos aceitos',
  all: 'Todos',
  drag_files: 'Arraste seus arquivos aqui',
  not_completed: 'Não completo',
  complete: 'Completo',
  step: 'Procedimento',
  numeric: 'Numérico',
  empty: 'Vazio'
};

function useLocale() {
  var locale = React.useContext(LanguageContext);
  return function (word) {
    switch (locale) {
      case 'en':
        return LocaleEN[word];

      default:
        return LocalePT[word];
    }
  };
}

function Header(props) {
  var _props$options;

  var translate = useLocale();
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$1.header,
    style: {
      boxShadow: props.scrolled ? undefined : 'none'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$1.headerContent
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    className: shared$1.buttonContainer,
    color: 'secondary',
    styles: {
      display: props.returnButton ? undefined : 'none'
    },
    onClick: function onClick() {
      return props.handleClose();
    }
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "material-icons-round"
  }, "arrow_back")), props.title), /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$1.headerContent
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    className: shared$1.submitButton,
    disabled: props.disabled,
    variant: 'filled',
    onClick: function onClick() {
      props.hook.setChanged(false);
      props.handleSubmit(props.hook.data, props.hook.clearState);
    }
  }, props.submitLabel ? props.submitLabel : props.create ? translate('create') : translate('save')))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$1.buttons,
    style: {
      display: !props.options || props.options.length === 0 ? 'none' : undefined
    }
  }, (_props$options = props.options) === null || _props$options === void 0 ? void 0 : _props$options.map(function (b, index) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: index + '-option-button'
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: shared$1.divider,
      style: {
        display: index === 0 ? 'none' : undefined
      }
    }), /*#__PURE__*/React__default["default"].createElement(Button, {
      align: 'bottom',
      variant: 'minimal',
      className: shared$1.buttonContainer,
      disabled: b.disabled,
      onClick: b.onClick
    }, b.icon, b.label));
  })));
}
Header.propTypes = {
  scrolled: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  returnButton: PropTypes__default["default"].bool,
  title: PropTypes__default["default"].string,
  hook: PropTypes__default["default"].object.isRequired,
  create: PropTypes__default["default"].bool,
  dependencies: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string,
    type: PropTypes__default["default"].oneOf(['string', 'number', 'object', 'bool', 'date', 'array'])
  })),
  handleSubmit: PropTypes__default["default"].func.isRequired,
  metadata: PropTypes__default["default"].shape({
    lastModified: PropTypes__default["default"].any,
    creator: PropTypes__default["default"].any
  }),
  handleClose: PropTypes__default["default"].func,
  submitLabel: PropTypes__default["default"].string,
  options: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    icon: PropTypes__default["default"].any,
    label: PropTypes__default["default"].string,
    onClick: PropTypes__default["default"].func,
    disabled: PropTypes__default["default"].bool
  }))
};

function Form(props) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      disabled = _useState2[0],
      setDisabled = _useState2[1];

  var contentRef = React.useRef();
  React.useEffect(function () {
    var childNodes = contentRef.current.childNodes;
    var completed = true;
    childNodes.forEach(function (e) {
      completed = completed && JSON.parse(e.getAttribute('data-completed'));
    });
    setDisabled(!completed || !props.hook.changed);
  }); // const {ref, maxHeight} = useMaxHeight()

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      scrolled = _useState4[0],
      setScrolled = _useState4[1];

  return /*#__PURE__*/React__default["default"].createElement("div", {
    onScroll: function onScroll(event) {
      if (event.target.scrollTop > 0) setScrolled(true);else setScrolled(false);
    },
    className: shared$1.wrapper // style={{maxHeight: maxHeight}}
    // ref={ref}

  }, /*#__PURE__*/React__default["default"].createElement(Header, _extends({}, props, {
    disabled: disabled,
    scrolled: scrolled
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$1.content,
    ref: contentRef
  }, props.children(props.hook.data, props.hook.handleChange)));
}
Form.propTypes = {
  returnButton: PropTypes__default["default"].bool,
  title: PropTypes__default["default"].string,
  hook: PropTypes__default["default"].object.isRequired,
  children: PropTypes__default["default"].func.isRequired,
  create: PropTypes__default["default"].bool,
  dependencies: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    key: PropTypes__default["default"].string,
    type: PropTypes__default["default"].oneOf(['string', 'number', 'object', 'bool', 'date', 'array'])
  })),
  handleSubmit: PropTypes__default["default"].func.isRequired,
  metadata: PropTypes__default["default"].shape({
    lastModified: PropTypes__default["default"].any,
    creator: PropTypes__default["default"].any
  }),
  handleClose: PropTypes__default["default"].func,
  submitLabel: PropTypes__default["default"].string,
  options: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    icon: PropTypes__default["default"].any,
    label: PropTypes__default["default"].string,
    onClick: PropTypes__default["default"].func,
    disabled: PropTypes__default["default"].bool
  }))
};

var css_248z$l = "\r\n.FormRow-module_wrapper__e-3ms {\r\n\r\n    background: var(--fabric-background-primary);\r\n    border-radius: 5px;\r\n    border: var(--fabric-border-primary) 1px solid;\r\n\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    column-gap: 32px;\r\n    row-gap: 8px;\r\n    width: 100%;\r\n    overflow: visible;\r\n\r\n    padding: 10px;\r\n}\r\n\r\n.FormRow-module_legendContent__31Jgu {\r\n    user-select: none;\r\n    width: 100%;\r\n    height: 35px;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 4px;\r\n}\r\n\r\n.FormRow-module_legend__2iAih {\r\n\r\n    padding-right: 16px;\r\n    font-size: .9rem;\r\n    font-weight: 600;\r\n    color: var(--fabric-color-tertiary);\r\n    padding-left: 0;\r\n}\r\n\r\n\r\n.FormRow-module_indicator__7yoUZ {\r\n    --color: #0095ff;\r\n    width: 2px;\r\n    height: 100%;\r\n    border-radius: 10px;\r\n\r\n    background: var(--color);\r\n}\r\n\r\n.FormRow-module_notCompleted__1Wtn8 {\r\n    --color: #ff5555;\r\n}";
var styles$k = {"wrapper":"FormRow-module_wrapper__e-3ms","legendContent":"FormRow-module_legendContent__31Jgu","legend":"FormRow-module_legend__2iAih","indicator":"FormRow-module_indicator__7yoUZ","notCompleted":"FormRow-module_notCompleted__1Wtn8"};
styleInject(css_248z$l);

function FormRow(props) {
  React.useEffect(function () {
    setIndex(Array.prototype.indexOf.call(ref.current.parentNode.children, ref.current) + 1);
  }, []);
  var children = React__default["default"].Children.toArray(props.children);
  var completed = React.useMemo(function () {
    var res = true;
    children.forEach(function (e) {
      var isText = typeof e.props.value === 'string' ? e.props.value.length > 0 : true;
      res = res && (!e.props.required || e.props.value !== undefined && e.props.value !== null && isText && e.props.required);
    });
    return res;
  }, [props.children]);

  var _useState = React.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = React.useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      index = _useState4[0],
      setIndex = _useState4[1];

  var ref = React.useRef();
  var translate = useLocale();
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$k.wrapper,
    ref: ref,
    "data-completed": completed
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$k.legendContent
  }, /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: !completed ? translate('not_completed') : translate('complete'),
    justify: "start",
    align: 'middle'
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: [styles$k.indicator, !completed ? styles$k.notCompleted : undefined].join(' ')
  }), /*#__PURE__*/React__default["default"].createElement(Button, {
    onClick: function onClick() {
      return setOpen(!open);
    },
    highlight: !open,
    color: 'secondary',
    className: shared$1.buttonContainer
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      transform: open ? undefined : 'rotate(180deg)',
      transition: 'inherit'
    },
    className: "material-icons-round"
  }, "arrow_drop_down")), /*#__PURE__*/React__default["default"].createElement("h1", {
    className: styles$k.legend
  }, props.title ? props.title : translate('step') + ' ' + index)), open ? props.children : null);
}
FormRow.propTypes = {
  children: PropTypes__default["default"].node,
  title: PropTypes__default["default"].string
};

var css_248z$k = "@import \"../../../misc/theme/styles.module.css\";\n\n.DateField-module_fieldsContainer__18OUu {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 10px;\n    height: 56px;\n    border-radius: 5px;\n    border: var(--fabric-border-primary) 1px solid;\n    color: var(--fabric-color-tertiary);\n    background: var(--fabric-background-primary);\n    position: relative;\n    overflow: hidden;\n\n    --delay: 0;\n}\n\n.DateField-module_fieldsContainer__18OUu:hover {\n    --delay: 500ms;\n}\n\n.DateField-module_fieldsContainer__18OUu::after {\n    position: absolute;\n    content: '';\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: var(--color);\n    opacity: 0;\n    transition: 150ms linear var(--delay);\n}\n\n.DateField-module_fieldsContainer__18OUu:disabled::after {\n    content: none;\n}\n\n.DateField-module_fieldsContainer__18OUu:focus-within::after, .DateField-module_fieldsContainer__18OUu:focus-within::after {\n    opacity: .15;\n}\n\n\n.DateField-module_inputContainer__3Jx_6 {\n    text-align: center;\n    border: none;\n    box-shadow: unset;\n\n    background: var(--fabric-background-primary);\n    font-family: \"Roboto\";\n    height: 100%;\n    width: 30px;\n    outline: none;\n    font-size: 1rem;\n\n    color: var(--fabric-color-secondary);\n}\n\n.DateField-module_inputContainer__3Jx_6::-webkit-outer-spin-button,\n.DateField-module_inputContainer__3Jx_6::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n/* Firefox */\n.DateField-module_inputContainer__3Jx_6[type=number] {\n    -moz-appearance: textfield;\n}\n\n.DateField-module_buttonContainer__37d09 {\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    height: 35px;\n    width: 35px;\n    margin-right: 8px;\n}\n\n\n\n.DateField-module_container__11emn {\n    height: 100px;\n    display: grid;\n    gap: 4px;\n\n}\n\n.DateField-module_divider__18rCE {\n    width: 1px;\n    height: 20px;\n    background: var(--fabric-border-secondary);\n}\n\n.DateField-module_calendar__2GTEw {\n    width: 350px;\n\n    background: var(--fabric-background-primary);\n    border-radius: 8px;\n    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\n    height: 223px;\n    overflow-y: auto;\n\n}\n\n.DateField-module_monthContainer__3K4Sw {\n    position: sticky;\n    top: 0;\n    background: var(--fabric-background-primary);\n    z-index: 999;\n    font-family: \"Roboto\";\n    font-weight: bold;\n    font-size: .9rem;\n    height: 45px;\n    user-select: none;\n\n    transition: 150ms linear;\n\n    padding: 8px 4px;\n    color: var(--fabric-color-secondary);\n    width: 100%;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.DateField-module_activeContainer__2lxhB {\n    background: var(--fabric-background-quaternary);\n    color: #0095ff;\n}\n\n.DateField-module_daysContainer__2DuT9 {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 7.45px;\n    width: 100%;\n    padding: 8px;\n    overflow: auto;\n}\n\n.DateField-module_dayContainer__2D1tX {\n    height: 35px;\n    width: 35px;\n    background: var(--fabric-background-primary);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    text-align: center;\n\n    font-size: .85rem;\n    font-weight: bold;\n    font-family: \"Roboto\";\n    color: var(--fabric-color-tertiary);\n    border-radius: 8px;\n    border: transparent 2px solid;\n\n    cursor: pointer;\n    transition: 150ms linear;\n}\n\n.DateField-module_dayContainer__2D1tX:hover {\n    color: #0095ff;\n    border: rgba(0, 149, 255, .5) 2px solid;\n}\n\n.DateField-module_dayContainer__2D1tX:active {\n    background: var(--fabric-background-quaternary);\n\n    color: #0095ff;\n    border: rgba(0, 149, 255, .5) 2px solid;\n}\n\n.DateField-module_currentDate__JD8r5 {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    font-size: .8rem;\n    font-weight: normal;\n    color: var(--fabric-color-tertiary);\n}";
var styles$j = {"fieldsContainer":"DateField-module_fieldsContainer__18OUu","inputContainer":"DateField-module_inputContainer__3Jx_6","buttonContainer":"DateField-module_buttonContainer__37d09","container":"DateField-module_container__11emn","divider":"DateField-module_divider__18rCE","calendar":"DateField-module_calendar__2GTEw","monthContainer":"DateField-module_monthContainer__3K4Sw","activeContainer":"DateField-module_activeContainer__2lxhB","daysContainer":"DateField-module_daysContainer__2DuT9","dayContainer":"DateField-module_dayContainer__2D1tX","currentDate":"DateField-module_currentDate__JD8r5"};
styleInject(css_248z$k);

var css_248z$j = "@import \"../../../../misc/theme/styles.module.css\";\n\n.FloatingBox-module_selectBox__iO7zf {\n    transition: 150ms ease-in-out;\n    position: absolute;\n    /*transform: translateY(-50%);*/\n    top: calc(100% - 16px);\n    left: 0;\n    z-index: 999;\n\n\n}\n";
var styles$i = {"selectBox":"FloatingBox-module_selectBox__iO7zf"};
styleInject(css_248z$j);

function FloatingBox(props) {
  var ref = React.useRef();

  var handleMouseDown = function handleMouseDown(event) {
    if (props.open && !document.elementsFromPoint(event.clientX, event.clientY).includes(ref.current)) props.setOpen(false);
  };

  React.useEffect(function () {
    document.addEventListener('mousedown', handleMouseDown);
    return function () {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [props.open]);
  React.useEffect(function () {
    if (props.parentNode) {
      var _ref$current$parentNo;

      var p = props.parentNode.getBoundingClientRect();
      var b = (_ref$current$parentNo = ref.current.parentNode) === null || _ref$current$parentNo === void 0 ? void 0 : _ref$current$parentNo.getBoundingClientRect();
      var childOffset = b.y - p.y;

      if (childOffset > p.height / 2) {
        ref.current.style.top = '0';
        ref.current.style.transform = 'translateY(calc(-100% + 16px))';
      } else {
        ref.current.style.top = 'calc(100% - 16px)';
        ref.current.style.transform = 'none';
      }
    }
  }, [props.parentNode]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      visibility: !props.open ? 'hidden' : 'visible',
      opacity: !props.open ? '0' : '1',
      width: props.width
    },
    className: styles$i.selectBox,
    ref: ref
  }, props.children);
}
FloatingBox.propTypes = {
  parentNode: PropTypes__default["default"].object,
  open: PropTypes__default["default"].bool,
  setOpen: PropTypes__default["default"].func,
  children: PropTypes__default["default"].node,
  width: PropTypes__default["default"].string
};

var css_248z$i = ".Input-module_fieldsContainer__EoW_4 {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    height: auto;\n    overflow-x: visible;\n}\n\n\n.Input-module_inputContainer__3Jx-t {\n    background: transparent;\n\n    border-radius: 5px;\n    border: var(--fabric-border-primary) 1px solid;\n    box-shadow: unset;\n    transition: 150ms ease-in;\n\n    width: 100%;\n    font-family: \"Roboto\";\n\n    outline: none;\n    padding: 5px;\n    font-size: 1rem;\n    margin: unset;\n    box-sizing: border-box;\n    color: var(--fabric-color-secondary);\n}\n\n.Input-module_inputContainer__3Jx-t::-webkit-outer-spin-button,\n.Input-module_inputContainer__3Jx-t::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n\n.Input-module_inputContainer__3Jx-t[type=number] {\n    -moz-appearance: textfield;\n}\n\n.Input-module_inputContainer__3Jx-t:hover, .Input-module_inputContainer__3Jx-t:focus {\n    color: var(--fabric-color-primary);\n    border-color: var(--accent_color);\n}\n\n.Input-module_inputContainer__3Jx-t:disabled {\n    border: var(--fabric-border-primary) 1px solid;\n    /*background: var(--fabric-background-secondary);*/\n    color: var(--fabric-color-quinary);\n}\n\n.Input-module_mask__27obY {\n    z-index: 5;\n\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: 8px;\n    color: var(--fabric-color-secondary);\n    font-family: \"Roboto\";\n    font-size: .95rem;\n\n    max-width: 25%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.Input-module_focus__1hNr4 {\n    background: var(--fabric-background-primary);\n\n    display: flex;\n\n    position: relative;\n    overflow: hidden;\n    height: fit-content;\n\n}\n\n.Input-module_focus__1hNr4::before {\n    content: '';\n\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background:var(--accent_color);\n    opacity: 0;\n}\n\n.Input-module_focus__1hNr4:focus::before, .Input-module_focus__1hNr4:focus-within::before {\n    animation: Input-module_fadeIn__1BfZu 150ms linear forwards 500ms;\n}\n\n@keyframes Input-module_fadeIn__1BfZu {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: .15;\n    }\n}\n.Input-module_icon__3ymBz{\n    font-size: 10px;\n    font-weight: bold;\n\n    padding: 2px;\n    border-right: var(--fabric-border-primary) 1px solid;\n}";
var styles$h = {"fieldsContainer":"Input-module_fieldsContainer__EoW_4","inputContainer":"Input-module_inputContainer__3Jx-t","mask":"Input-module_mask__27obY","focus":"Input-module_focus__1hNr4","fadeIn":"Input-module_fadeIn__1BfZu","icon":"Input-module_icon__3ymBz"};
styleInject(css_248z$i);

function ParseCurrency(event) {
  var value = event;
  value = value + '';
  value = parseInt(value.replace(/[\D]+/g, ''));
  value = value + '';
  value = value.replace(/([0-9]{2})$/g, ".$1");
  return value;
}

var css_248z$h = "\r\n.Shared-module_wrapper__1akhG {\r\n    --accent_color: #0095ff;\r\n\r\n    transition: 150ms linear;\r\n    height: fit-content;\r\n\r\n    outline: transparent 1px solid;\r\n    border-radius: 5px;\r\n}\r\n\r\n.Shared-module_secondaryVariant__lmsuI {\r\n    --accent_color: #ff5555;\r\n}\r\n\r\n\r\n.Shared-module_wrapper__1akhG:hover, .Shared-module_wrapper__1akhG:focus-within, .Shared-module_wrapper__1akhG[data-highlight], .Shared-module_wrapper__1akhG:active {\r\n    outline: var(--accent_color) 1px solid;\r\n}\r\n\r\n.Shared-module_wrapper__1akhG[data-disabled], .Shared-module_wrapper__1akhG:disabled {\r\n    outline: transparent 1px solid;\r\n}\r\n\r\n\r\n.Shared-module_labelContainer__2eUNz {\r\n    transition: 200ms ease-in-out;\r\n\r\n    color: var(--fabric-color-secondary);\r\n    /*font-weight: 600;*/\r\n    font-size: .8rem;\r\n    margin-top: auto;\r\n    user-select: none;\r\n    font-family: \"Roboto\";\r\n    text-transform: capitalize;\r\n\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: center;\r\n\r\n    gap: 6px;\r\n}\r\n\r\n.Shared-module_overflow__xMSr0{\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    max-width: 75%;\r\n    overflow: hidden;\r\n}\r\n.Shared-module_alertLabel__2FAHg {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    color: var(--fabric-color-quaternary);\r\n    font-family: \"Roboto\";\r\n    font-size: .75rem;\r\n    user-select: none;\r\n\r\n}\r\n.Shared-module_helperText__1QbdR{\r\n    transition: 150ms linear;\r\n    color: var(--fabric-color-quinary);\r\n    cursor: help;\r\n}\r\n.Shared-module_helperText__1QbdR:hover{\r\n    color: #0095ff;\r\n}";
var shared = {"wrapper":"Shared-module_wrapper__1akhG","secondaryVariant":"Shared-module_secondaryVariant__lmsuI","labelContainer":"Shared-module_labelContainer__2eUNz","overflow":"Shared-module_overflow__xMSr0","alertLabel":"Shared-module_alertLabel__2FAHg","helperText":"Shared-module_helperText__1QbdR"};
styleInject(css_248z$h);

function TextField(props) {
  var translate = useLocale();
  var maskEndRef = React.useRef();
  var maskStartRef = React.useRef();
  var ref = React.useRef();
  React.useEffect(function () {
    if (props.maskStart) ref.current.style.paddingLeft = maskStartRef.current.offsetWidth + 10 + 'px';
    if (props.maskEnd) ref.current.style.paddingRight = maskEndRef.current.offsetWidth + 10 + 'px';
  }, [props.maskStart, props.maskEnd]);

  var content = function content(value) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      style: {
        position: 'relative',
        width: '100%'
      }
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$h.mask,
      ref: maskStartRef
    }, props.maskStart), /*#__PURE__*/React__default["default"].createElement("input", {
      disabled: props.disabled,
      lang: '',
      placeholder: props.placeholder,
      type: props.type !== 'password' ? props.type : !props.visible ? 'password' : 'text',
      value: value,
      ref: ref,
      className: styles$h.inputContainer,
      style: {
        height: props.size === 'small' ? '36px' : '56px',
        position: 'relative',
        zIndex: 5
      },
      onChange: function onChange(e) {
        var data = e.target.value;

        if (props.type === 'number' && props.floatFilter) {
          data = ParseCurrency(e.target.value);
        }

        props.handleChange({
          target: {
            value: data
          }
        });
      },
      maxLength: props.maxLength
    }), /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$h.mask,
      style: {
        right: '8px',
        left: 'unset'
      },
      ref: maskEndRef
    }, props.maskEnd));
  };

  var getField = function getField() {
    switch (true) {
      case props.variant === 'area':
        return /*#__PURE__*/React__default["default"].createElement("textarea", {
          disabled: props.disabled,
          placeholder: props.placeholder,
          value: props.value ? props.value : '',
          className: styles$h.inputContainer,
          style: {
            minHeight: props.size === 'small' ? '36px' : '56px',
            resize: props.disabled ? 'none' : 'vertical',
            overflow: 'hidden',
            transition: 'border 150ms ease-in, background 150ms ease-in',
            position: 'relative',
            zIndex: 5
          },
          onChange: props.handleChange,
          maxLength: props.maxLength
        });

      case !props.mask && props.variant !== 'area':
        return content(valid ? props.value : '');

      case props.mask && props.mask !== 'currency' && props.variant !== 'area':
        return /*#__PURE__*/React__default["default"].createElement(InputMask__default["default"], {
          mask: props.mask,
          maskPlaceholder: '',
          value: props.value ? props.value : '',
          alwaysShowMask: false
        }, function (event) {
          return content(event.value);
        });

      default:
        return null;
    }
  };

  var color = React.useMemo(function () {
    if (props.colorVariant === 'secondary') return {
      className: shared.secondaryVariant,
      color: '#ff5555'
    };else return {
      className: undefined,
      color: '#0095ff'
    };
  }, [props.colorVariant]);
  var valid = React.useMemo(function () {
    return props.value && props.value.toString().length > 0 || props.value === 0 || props.value === '0';
  }, [props.value]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    "data-valid": valid,
    style: {
      width: props.width,
      height: 'fit-content',
      display: 'grid',
      alignItems: props.value ? 'unset' : 'flex-start',
      gap: '4px',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.labelContainer,
    style: {
      visibility: valid ? 'visible' : 'hidden',
      opacity: valid ? '1' : '0'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.overflow
  }, props.label)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: [color.className, shared.wrapper, styles$h.focus].join(' '),
    "data-disabled": props.disabled ? props.disabled : undefined
  }, getField(), /*#__PURE__*/React__default["default"].createElement(Ripple, {
    opacity: .15,
    accentColor: color.color,
    disabled: props.disabled
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.alertLabel,
    style: {
      color: !valid ? '#ff5555' : undefined,
      display: props.noMargin && !props.required && !props.helperText ? 'none' : undefined
    }
  }, props.required ? translate('required') : undefined, props.helperText ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.helperText
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontSize: '1rem'
    },
    className: "material-icons-round"
  }, "info"), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: props.helperText,
    align: 'start'
  })) : null, props.type === 'number' && !props.noNumberIndicator ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.helperText
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$h.icon
  }, "123"), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: translate('numeric'),
    align: 'start'
  })) : null));
}
TextField.propTypes = {
  noNumberIndicator: PropTypes__default["default"].bool,
  helperText: PropTypes__default["default"].string,
  width: PropTypes__default["default"].string,
  placeholder: PropTypes__default["default"].string,
  label: PropTypes__default["default"].string,
  handleChange: PropTypes__default["default"].func.isRequired,
  value: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  required: PropTypes__default["default"].bool,
  mask: PropTypes__default["default"].string,
  maxLength: PropTypes__default["default"].number,
  disabled: PropTypes__default["default"].bool,
  variant: PropTypes__default["default"].oneOf(['default', 'area']),
  type: PropTypes__default["default"].oneOf(['number', 'text', 'password']),
  maskStart: PropTypes__default["default"].any,
  maskEnd: PropTypes__default["default"].any,
  floatFilter: PropTypes__default["default"].bool,
  size: PropTypes__default["default"].oneOf(['small', 'default']),
  noMargin: PropTypes__default["default"].bool,
  colorVariant: PropTypes__default["default"].oneOf(['default', 'secondary', 'primary'])
};

var NAMES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
function addHours(h, dateObject) {
  dateObject.setTime(dateObject.getTime() + h * 60 * 60 * 1000);
  return dateObject;
}
function useDate(value, pattern, hoursOffset) {
  var _useState = React.useState({
    year: new Date().getFullYear()
  }),
      _useState2 = _slicedToArray(_useState, 2),
      parsedDate = _useState2[0],
      setDate = _useState2[1];

  var calendar = React.useMemo(function () {
    var months = [];
    NAMES.forEach(function (data, i) {
      var date = new Date(parsedDate.year, i + 1, 0).getDate();
      months.push({
        month: data,
        days: date
      });
    });
    return months;
  }, [parsedDate.year]);

  var splitDate = function splitDate(date) {
    var day, month, year;
    var response;

    try {
      if (date && typeof date === 'string') {
        var d = date.split(pattern.search('/') > -1 ? '/' : '-');
        var indexes = [pattern.indexOf('dd'), pattern.indexOf('mm'), pattern.indexOf('yyyy')];
        indexes.sort(function (a, b) {
          return a - b;
        });
        day = d.length >= 1 ? parseInt(d[indexes.indexOf(pattern.indexOf('dd'))]) : undefined;
        month = d.length >= 2 ? parseInt(d[indexes.indexOf(pattern.indexOf('mm'))]) : undefined;
        year = d.length === 3 ? parseInt(d[indexes.indexOf(pattern.indexOf('yyyy'))]) : new Date().getFullYear();
      }
    } finally {
      response = {
        day: day,
        month: month,
        year: year,
        valid: (day === undefined || day > 0 && day <= 31) && (month === undefined || month > 0 && month <= 12)
      };
    }

    return response;
  };

  React.useEffect(function () {
    if (value) setDate(splitDate(value));
  }, [value]);

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      initialized = _useState4[0],
      setInitialized = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      changed = _useState6[0],
      setChanged = _useState6[1];

  var parseDate = function parseDate(day, month, year) {
    return pattern.replace('dd', day < 10 ? '0' + day : day).replace('mm', month < 10 ? '0' + month : month).replace('yyyy', year);
  };

  React.useEffect(function () {
    var timestamp = Date.parse(value);
    var parsed = new Date(value);
    parsed = !isNaN(timestamp) ? "".concat(parsed.getFullYear(), "/").concat(parsed.getMonth() + 1, "/").concat(parsed.getDate()) : new Date(parsed.getTime() - parsed.getTimezoneOffset() * 60000).toLocaleDateString();
    var date = "".concat(parsedDate.year, "/").concat(parsedDate.month, "/").concat(parsedDate.day);

    if (!isNaN(timestamp) && parsed !== date && !initialized) {
      setInitialized(true);
      var d = new Date(value);
      if (hoursOffset !== undefined) d = addHours(hoursOffset, d);
      setDate(splitDate(parseDate(d.getDate(), d.getMonth() + 1, d.getFullYear())));
    }
  }, [value]);
  return {
    calendar: calendar,
    date: parsedDate,
    initialized: initialized,
    setChanged: setChanged,
    changed: changed,
    parseDate: parseDate
  };
}

function DateField(props) {
  var _ref$current;

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var pattern = React.useMemo(function () {
    if (props.pattern) return props.pattern;else return 'dd/mm/yyyy';
  }, [props.pattern]);

  var _useDate = useDate(props.value, pattern, props.hoursOffset),
      date = _useDate.date,
      calendar = _useDate.calendar,
      initialized = _useDate.initialized,
      setChanged = _useDate.setChanged,
      changed = _useDate.changed,
      parseDate = _useDate.parseDate;

  var ref = React.useRef();

  var getDays = function getDays(month) {
    var res = [];

    if (month - 1 < calendar.length) {
      var days = calendar[month - 1].days;

      var _loop = function _loop(i) {
        res.push( /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
          key: month + '-month-' + (i + 1) + '-day'
        }, /*#__PURE__*/React__default["default"].createElement(Button, {
          styles: {
            padding: '8px',
            width: '35px',
            height: '35px'
          },
          highlight: date.day === i + 1,
          variant: 'minimal',
          onClick: function onClick() {
            var currentDate = new Date();
            var newDay = i + 1;
            setOpen(false);
            props.handleChange(parseDate(newDay, month, !date.year ? currentDate.getFullYear() : date.year));
            setChanged(true);
          }
        }, i + 1)));
      };

      for (var i = 0; i < days; i++) {
        _loop(i);
      }
    }

    return res;
  };

  var _useState3 = React.useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      mask = _useState4[0],
      setMask = _useState4[1];

  React.useEffect(function () {
    setMask(pattern.replaceAll('y', '9').replaceAll('d', '9').replaceAll('m', '9'));
  }, [pattern]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      width: props.width,
      height: 'fit-content'
    }
  }, /*#__PURE__*/React__default["default"].createElement(TextField, {
    handleChange: function handleChange(e) {
      setChanged(true);
      props.handleChange(e.target.value);
    },
    disabled: props.disabled,
    helperText: props.helperText,
    width: '100%',
    highlight: open,
    value: initialized && !changed ? parseDate(date.day, date.month, date.year) : props.value,
    size: props.size,
    colorVariant: date.valid ? 'primary' : 'secondary',
    placeholder: props.label,
    label: props.label,
    mask: mask,
    maskEnd: /*#__PURE__*/React__default["default"].createElement(Button, {
      onClick: function onClick() {
        return setOpen(true);
      },
      disabled: props.disabled
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      style: {
        fontSize: '1.2rem'
      },
      className: "material-icons-round"
    }, "calendar_today")),
    noMargin: true,
    required: props.required
  }), /*#__PURE__*/React__default["default"].createElement(FloatingBox, {
    parentNode: (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.parentNode,
    open: open,
    setOpen: setOpen,
    reference: ref.current
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$j.calendar
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$j.monthContainer
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    className: styles$j.buttonContainer,
    styles: {
      width: 'fit-content',
      margin: 'unset'
    },
    onClick: function onClick() {
      var d = new Date();
      var newDay = date.day ? date.day : d.getDate();
      var newMonth = date.month && date.month === 1 || !date.month && d.getMonth() === 1 ? 12 : (date.month ? date.month : d.getMonth()) - 1;
      var newYear = newMonth === 12 ? date.year ? date.year - 1 : d.getFullYear() - 1 : date.year ? date.year : d.getFullYear();
      props.handleChange(parseDate(newDay, newMonth, newYear));
    }
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontSize: '1.2rem'
    },
    className: "material-icons-round"
  }, "arrow_back_ios")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$j.currentDate
  }, /*#__PURE__*/React__default["default"].createElement("div", null, !date.month || date.month > 12 || date.month < 1 ? calendar[new Date().getMonth()].month : calendar[date.month - 1].month), "-", /*#__PURE__*/React__default["default"].createElement("div", null, !date.year ? new Date().getFullYear() : date.year)), /*#__PURE__*/React__default["default"].createElement(Button, {
    className: styles$j.buttonContainer,
    styles: {
      width: 'fit-content',
      margin: 'unset'
    },
    onClick: function onClick() {
      var d = new Date();
      var newDay = date.day ? date.day : d.getDate();
      var newMonth = date.month && date.month === 12 || !date.month && d.getMonth() === 12 ? 1 : (date.month ? date.month : d.getMonth()) + 1;
      var newYear = newMonth === 1 ? date.year ? date.year + 1 : d.getFullYear() + 1 : date.year ? date.year : d.getFullYear();
      props.handleChange(parseDate(newDay, newMonth, newYear));
    }
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontSize: '1.2rem',
      transform: 'rotate(180deg'
    },
    className: "material-icons-round"
  }, "arrow_back_ios"))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$j.daysContainer
  }, getDays(!date.month || date.month > 12 || date.month < 1 ? new Date().getMonth() : date.month).map(function (e) {
    return e;
  })))));
}
DateField.propTypes = {
  hoursOffset: PropTypes__default["default"].number,
  helperText: PropTypes__default["default"].string,
  width: PropTypes__default["default"].string,
  label: PropTypes__default["default"].string,
  handleChange: PropTypes__default["default"].func.isRequired,
  value: PropTypes__default["default"].string,
  required: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  size: PropTypes__default["default"].oneOf(['small', 'default']),
  pattern: PropTypes__default["default"].oneOf(['yyyy-mm-dd', 'yyyy/mm/dd', 'yyyy-dd-mm', 'yyyy/dd/mm', 'mm/dd/yyyy', 'mm-dd-yyyy', 'dd/mm/yyyy', 'dd-mm-yyyy'])
};

var css_248z$g = "@import \"../../../misc/theme/styles.module.css\";\n\n.Select-module_wrapper__1Jond {\n    display: grid;\n    gap: 4px;\n    position: relative;\n    overflow: visible;\n}\n\n\n.Select-module_selectContainer__286gp {\n    position: relative;\n    z-index: 5;\n    display: flex;\n    justify-content: flex-start;\n    gap: 4px;\n    align-items: center;\n    transition: 150ms linear;\n    background: var(--fabric-background-primary);\n    width: 100%;\n    padding: 5px;\n    border-radius: 5px;\n}\n.Select-module_selectContainer__286gp:hover{\n    border-color: var(--accent-color);\n}\n.Select-module_selectContainer__286gp:disabled {\n    border-color: var(--fabric-border-primary);\n    cursor: default;\n    color: var(--fabric-color-quinary);\n}\n\n.Select-module_dropDownContainer__1MFxG {\n    display: grid;\n}\n\n.Select-module_dropDownChoicesContainer__1b-aa {\n    background-color: var(--fabric-background-primary);\n    border-radius: 5px;\n    box-shadow: 0 0 10px 2px rgba(0, 0, 0, .1);\n    width: 100%;\n    max-height: 200px;\n    height: fit-content;\n    overflow: auto;\n\n}\n\n.Select-module_dropDownButton__1_9m6 {\n    height: 35px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    text-align: left;\n    font-weight: 600;\n    font-family: \"Roboto\";\n    font-size: .75rem;\n}\n\n.Select-module_overflow__Eaw8K {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n}\n\n.Select-module_multiSelectRow__3xH6B {\n    display: flex;\n    user-select: none;\n    overflow: hidden;\n    align-items: center;\n    justify-content: flex-start;\n    height: 40px;\n    background: var(--fabric-background-primary);\n    gap: 8px;\n}\n\n.Select-module_multiSelectRowContent__2aRAa {\n    user-select: none;\n    color: var(--fabric-color-secondary);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    text-align: left;\n    font-weight: 600;\n    font-family: \"Roboto\";\n    font-size: .8rem;\n}\n\n.Select-module_multiSelectRowCheckbox__WOD6G {\n    cursor: pointer;\n}\n";
var styles$g = {"wrapper":"Select-module_wrapper__1Jond","selectContainer":"Select-module_selectContainer__286gp","dropDownContainer":"Select-module_dropDownContainer__1MFxG","dropDownChoicesContainer":"Select-module_dropDownChoicesContainer__1b-aa","dropDownButton":"Select-module_dropDownButton__1_9m6","overflow":"Select-module_overflow__Eaw8K","multiSelectRow":"Select-module_multiSelectRow__3xH6B","multiSelectRowContent":"Select-module_multiSelectRowContent__2aRAa","multiSelectRowCheckbox":"Select-module_multiSelectRowCheckbox__WOD6G"};
styleInject(css_248z$g);

function SelectField(props) {
  var _ref$current;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var translate = useLocale();
  var ref = React.useRef();
  var selected = React.useMemo(function () {
    return props.choices.find(function (e) {
      return e.key === props.value;
    });
  }, [props.value]);
  var color = React.useMemo(function () {
    if (props.colorVariant === 'secondary') return {
      className: shared.secondaryVariant,
      color: '#0095ff'
    };else return {
      className: undefined,
      color: '#0095ff'
    };
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: props.width,
      alignItems: props.value ? 'unset' : 'flex-start'
    },
    ref: ref,
    className: styles$g.wrapper
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.labelContainer,
    style: {
      visibility: props.value !== undefined && props.value !== null ? 'visible' : 'hidden',
      opacity: props.value !== undefined && props.value !== null ? '1' : '0'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.overflow
  }, props.label)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: [shared.wrapper, color.className].join(' '),
    "data-highlight": open ? open : undefined,
    "data-disabled": props.disabled ? props.disabled : undefined
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    disabled: props.disabled,
    variant: "outlined",
    highlight: open,
    styles: {
      height: props.size === 'small' ? '36px' : '56px',
      overflow: "hidden",
      maxWidth: 'unset'
    },
    className: [color.className, styles$g.selectContainer, shared.labelContainer].join(' '),
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      transform: !open ? 'unset' : 'rotate(180deg)',
      transition: '150ms linear'
    },
    className: "material-icons-round"
  }, "arrow_drop_down"), selected ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$g.overflow,
    style: {
      color: selected.color
    }
  }, selected.value) : props.label)), /*#__PURE__*/React__default["default"].createElement(FloatingBox, {
    parentNode: (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.parentNode,
    open: open,
    setOpen: setOpen,
    reference: ref.current,
    width: '100%'
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$g.dropDownChoicesContainer
  }, props.choices.map(function (choice, index) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: index + '-choice-button'
    }, /*#__PURE__*/React__default["default"].createElement(Button, {
      styles: {
        borderRadius: '0',
        borderTop: index > 0 ? 'var(--fabric-border-primary) 1px solid' : 'none'
      },
      highlight: choice.key === props.value,
      onClick: function onClick() {
        props.handleChange(choice.key);
        setOpen(false);
      },
      className: styles$g.dropDownButton
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$g.overflow
    }, choice.value), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
      content: choice.value
    })));
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.alertLabel,
    style: {
      color: props.value === null || props.value === undefined ? '#ff5555' : '#262626'
    }
  }, props.required ? translate('required') : undefined, props.helperText ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.helperText
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontSize: '1rem'
    },
    className: "material-icons-round"
  }, "info"), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: props.helperText,
    align: 'start'
  })) : null));
}
SelectField.propTypes = {
  helperText: PropTypes__default["default"].string,
  width: PropTypes__default["default"].string,
  label: PropTypes__default["default"].string,
  choices: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    key: PropTypes__default["default"].any.isRequired,
    value: PropTypes__default["default"].any.isRequired,
    color: PropTypes__default["default"].string
  })).isRequired,
  handleChange: PropTypes__default["default"].func.isRequired,
  value: PropTypes__default["default"].any,
  required: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  size: PropTypes__default["default"].oneOf(['small', 'default']),
  colorVariant: PropTypes__default["default"].oneOf(['default', 'secondary', 'primary'])
};

var css_248z$f = "@import \"../../../misc/theme/styles.module.css\";\n\n\n.Checkbox-module_container__1Zcqj{\n    outline: none;\n\n    border: var(--fabric-color-tertiary) 1px solid;\n    width: 17px;\n    height: 17px;\n\n    border-radius: 50%;\n    background: transparent;\n    transition: 150ms linear;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n}\n\n.Checkbox-module_container__1Zcqj:hover{\n    border: #0095ff 1px solid;\n}\n.Checkbox-module_container__1Zcqj:active{\n    background: var(--fabric-background-quaternary);\n    border: #0095ff 1px solid;\n}\n.Checkbox-module_container__1Zcqj:disabled{\n    background: transparent;\n    border-color: var(--fabric-color-quinary);\n    cursor: unset;\n}\n\n.Checkbox-module_wrapper__1BTRc{\n\n\n\n    border: var(--fabric-border-primary) 1px solid;\n    border-radius: 5px;\n    padding: 8px;\n    width: fit-content;\n}\n.Checkbox-module_wrapperChildren__32wIY{\n    display: grid;\n    gap: 8px;\n}";
var styles$f = {"container":"Checkbox-module_container__1Zcqj","wrapper":"Checkbox-module_wrapper__1BTRc","wrapperChildren":"Checkbox-module_wrapperChildren__32wIY"};
styleInject(css_248z$f);

function Checkbox(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      opacity: props.disabled ? '.8' : 1
    }
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: styles$f.container,
    disabled: props.disabled,
    style: {
      background: props.checked ? '#0095ff' : undefined,
      border: props.checked ? '#0095ff 1px solid' : undefined
    },
    onClick: function onClick() {
      return props.handleCheck(props.checked);
    }
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      color: 'white',
      visibility: props.checked ? 'visible' : 'hidden',
      fontSize: '15px',
      fontWeight: "bold"
    },
    className: "material-icons-round"
  }, "done")), props.label ? /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      fontSize: '.9rem'
    }
  }, props.label) : null);
}
Checkbox.propTypes = {
  checked: PropTypes__default["default"].bool,
  handleCheck: PropTypes__default["default"].func,
  label: PropTypes__default["default"].any,
  disabled: PropTypes__default["default"].bool
};

function MultiSelectField(props) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var translate = useLocale();
  var ref = React.useRef();

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selected = _useState4[0],
      setSelected = _useState4[1];

  React.useEffect(function () {
    if (typeof props.value === 'string' && selected.length === 0 && props.value.length > 0) setSelected(props.value.split('-*/'));else if (props.asArray) setSelected(props.value ? props.value : []);
  }, [props.value]);
  var color = React.useMemo(function () {
    if (props.colorVariant === 'secondary') return {
      className: shared.secondaryVariant,
      color: '#0095ff'
    };else return {
      className: undefined,
      color: '#0095ff'
    };
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: props.width,
      alignItems: props.value ? 'unset' : 'flex-start'
    },
    ref: ref,
    className: styles$g.wrapper
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.labelContainer,
    style: {
      visibility: props.value !== undefined && props.value !== null ? 'visible' : 'hidden',
      opacity: props.value !== undefined && props.value !== null ? '1' : '0'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.overflow
  }, props.label)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: [shared.wrapper, color.className].join(' '),
    "data-highlight": open ? open : undefined,
    "data-disabled": props.disabled ? props.disabled : undefined
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    disabled: props.disabled,
    variant: "outlined",
    highlight: open,
    styles: {
      height: props.size === 'small' ? '36px' : '56px',
      overflow: "hidden",
      maxWidth: 'unset'
    },
    className: [color.className, styles$g.selectContainer, shared.labelContainer].join(' '),
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      transform: !open ? 'unset' : 'rotate(180deg)',
      transition: '150ms linear'
    },
    className: "material-icons-round"
  }, "arrow_drop_down"), props.value ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$g.valueContainer
  }, props.asArray ? props.value.length : props.value.split('-*/').length - 1, " - ", translate('values')) : props.label)), /*#__PURE__*/React__default["default"].createElement(FloatingBox, {
    open: open,
    setOpen: setOpen,
    reference: ref.current,
    width: '100%'
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$g.dropDownChoicesContainer,
    style: {
      padding: '0 8px'
    }
  }, props.choices.map(function (choice, index) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      style: {
        overflow: "hidden"
      },
      className: styles$g.multiSelectRow,
      key: 'multi-choice-' + index
    }, /*#__PURE__*/React__default["default"].createElement(Checkbox, {
      type: 'checkbox',
      handleCheck: function handleCheck() {
        var newSelected = _toConsumableArray(selected);

        if (selected.includes(choice.key)) {
          newSelected.splice(newSelected.indexOf(choice.key), 1);
          setSelected(newSelected);
        } else {
          newSelected.push(choice.key);
          setSelected(newSelected);
        }

        if (!props.asArray) {
          var newData = '';
          newSelected.forEach(function (e) {
            if (e.length > 0) newData = newData + '-*/' + e;
          });
          props.handleChange(newData);
        } else props.handleChange(newSelected);

        setOpen(false);
      },
      className: styles$g.multiSelectRowCheckbox,
      checked: selected.includes(choice.key),
      label: /*#__PURE__*/React__default["default"].createElement("div", {
        style: {
          color: choice.color ? choice.color : undefined
        },
        className: styles$g.multiSelectRowContent
      }, choice.value)
    }), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
      content: choice.value,
      align: 'middle',
      justify: 'start'
    }));
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.alertLabel,
    style: {
      color: props.value === null || props.value === undefined ? '#ff5555' : '#262626'
    }
  }, props.required ? translate('required') : undefined, props.helperText ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.helperText
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontSize: '1rem'
    },
    className: "material-icons-round"
  }, "info"), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: props.helperText,
    align: 'start'
  })) : null));
}
MultiSelectField.propTypes = {
  helperText: PropTypes__default["default"].string,
  width: PropTypes__default["default"].string,
  label: PropTypes__default["default"].string,
  choices: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    key: PropTypes__default["default"].any,
    value: PropTypes__default["default"].any,
    color: PropTypes__default["default"].string
  })).isRequired,
  handleChange: PropTypes__default["default"].func.isRequired,
  value: PropTypes__default["default"].any,
  required: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  asArray: PropTypes__default["default"].bool,
  size: PropTypes__default["default"].oneOf(['small', 'default']),
  colorVariant: PropTypes__default["default"].oneOf(['default', 'secondary', 'primary'])
};

function CheckboxGroup(props) {
  var translate = useLocale();
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: props.width,
      display: 'grid',
      gap: '4px'
    }
  }, /*#__PURE__*/React__default["default"].createElement("fieldset", {
    className: styles$f.wrapper,
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React__default["default"].createElement("legend", {
    className: shared.labelContainer,
    style: {
      padding: '0 8px'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.overflow
  }, props.label)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$f.wrapperChildren
  }, props.children)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.alertLabel,
    style: {
      color: props.value === null || props.value === undefined ? '#ff5555' : '#262626'
    }
  }, props.required ? translate('required') : undefined, props.helperText ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.helperText
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontSize: '1rem'
    },
    className: "material-icons-round"
  }, "info"), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: props.helperText,
    align: 'start'
  })) : null));
}
CheckboxGroup.propTypes = {
  helperText: PropTypes__default["default"].string,
  value: PropTypes__default["default"].any,
  children: PropTypes__default["default"].node,
  label: PropTypes__default["default"].string,
  width: PropTypes__default["default"].string,
  required: PropTypes__default["default"].bool
};

var css_248z$e = ".FileField-module_button__2UlZj {\r\n    user-select: none;\r\n    position: relative;\r\n\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n\r\n    transition: inherit;\r\n    background: var(--fabric-background-primary);\r\n    width: 100%;\r\n\r\n    padding: 5px;\r\n\r\n    max-width: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.FileField-module_button__2UlZj:hover {\r\n    border-color: var(--accent-color);\r\n}\r\n\r\n.FileField-module_button__2UlZj:disabled {\r\n    border-color: var(--fabric-border-primary);\r\n}\r\n";
var styles$e = {"button":"FileField-module_button__2UlZj"};
styleInject(css_248z$e);

var css_248z$d = "@import \"../../../misc/theme/styles.module.css\";\n\n.File-module_dropArea__1w63h {\n    position: relative;\n    color: var(--fabric-color-quaternary);\n    transition: 150ms linear;\n    width: 100%;\n    height: 100%;\n    border-radius: 5px;\n    background: var(--fabric-background-secondary);\n    border: var(--fabric-border-secondary) 2px dashed;\n}\n.File-module_dropAreaContent__4oh19{\n    display: flex;\n    align-items: flex-start;\n    align-content: flex-start;\n    justify-content: flex-start;\n\n    gap: 18.5px;\n\n    flex-flow: row wrap;\n    overflow-y: auto;\n    padding: 16px;\n}\n\n\n.File-module_fileContainer__1DNbz{\n    position: relative;\n    width: 15%;\n    height: 25%;\n    background: var(--fabric-background-primary);\n    border-radius: 5px;\n    border: var(--fabric-border-primary) 1px solid;\n    display: grid;\n    align-content: space-between;\n    gap: 4px;\n    justify-content: center;\n    justify-items: center;\n    font-size: .9rem;\n    padding: 16px 8px 8px 8px;\n\n\n\n}\n\n.File-module_fileLabel__2-mr7{\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    max-width: 100%;\n\n}\n\n\n.File-module_header__2_0MX{\n    height: 45px;\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--fabric-color-secondary);\n    /*border-bottom: var(--fabric-border-secondary) 1px solid;*/\n    width: 100%;\n    display: flex;\n\n    align-items: center;\n}\n.File-module_headerAccepted__25LIt{\n    text-align: right;\n    border-left: var(--fabric-border-primary) 1px solid;\n    height: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-size: .7rem;\n    color: var(--fabric-color-quaternary);\n}\n.File-module_overflow__7Foyg{\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n\n\n.File-module_modalContainer__28Sut{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.File-module_modalContent__Cegaf {\n    height: 100%;\n    width: clamp(250px, 25%, 500px);\n    background: var(--fabric-background-primary);\n    margin-left: auto;\n    border-radius: 8px 0 0 8px;\n    box-shadow: var(--fabric-box-shadow-primary) 0 0 2px 1px;\n\n    display: grid;\n    gap: 16px;\n    grid-template-rows: 45px 35px calc(100% - 114px);\n\n\n    top: 0;\n    right: 0;\n\n    align-content: flex-start;\n    /*background: var(--fabric-background-secondary);*/\n    position: absolute;\n\n    border: var(--fabric-border-secondary) 1px solid;\n\n    padding: 16px;\n}\n";
var styles$d = {"dropArea":"File-module_dropArea__1w63h","dropAreaContent":"File-module_dropAreaContent__4oh19","fileContainer":"File-module_fileContainer__1DNbz","fileLabel":"File-module_fileLabel__2-mr7","header":"File-module_header__2_0MX","headerAccepted":"File-module_headerAccepted__25LIt","overflow":"File-module_overflow__7Foyg","modalContainer":"File-module_modalContainer__28Sut","modalContent":"File-module_modalContent__Cegaf"};
styleInject(css_248z$d);

function File(props) {
  // const [hover, setHover] = useState(false)
  var icon = React.useMemo(function () {
    var icon;

    switch (props.type) {
      case 'pdf':
        {
          icon = /*#__PURE__*/React__default["default"].createElement("span", {
            style: {
              fontSize: '65px'
            },
            className: "material-icons-round"
          }, "picture_as_pdf");
          break;
        }

      case 'png':
        {
          icon = /*#__PURE__*/React__default["default"].createElement("span", {
            style: {
              fontSize: '65px'
            },
            className: "material-icons-round"
          }, "image");
          break;
        }

      case 'jpeg':
        {
          icon = /*#__PURE__*/React__default["default"].createElement("span", {
            style: {
              fontSize: '65px'
            },
            className: "material-icons-round"
          }, "image");
          break;
        }

      case 'jpg':
        {
          icon = /*#__PURE__*/React__default["default"].createElement("span", {
            style: {
              fontSize: '65px'
            },
            className: "material-icons-round"
          }, "image");
          break;
        }

      case 'html':
        {
          icon = /*#__PURE__*/React__default["default"].createElement("span", {
            style: {
              fontSize: '65px'
            },
            className: "material-icons-round"
          }, "web");
          break;
        }

      default:
        {
          icon = /*#__PURE__*/React__default["default"].createElement("span", {
            style: {
              fontSize: '65px'
            },
            className: "material-icons-round"
          }, "description");
          break;
        }
    }

    return icon;
  }, [props.type]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$d.fileContainer
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    onClick: function onClick() {
      return props.handleDelete(props.index);
    },
    styles: {
      padding: '4px'
    }
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontSize: '1rem'
    },
    className: "material-icons-round"
  }, "close")), icon, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$d.fileLabel
  }, props.name.split('.')[0]));
}
File.propTypes = {
  name: PropTypes__default["default"].string,
  type: PropTypes__default["default"].string,
  index: PropTypes__default["default"].number,
  handleDelete: PropTypes__default["default"].func
};

var css_248z$c = "@import \"../../../misc/theme/styles.module.css\";\n\n.Empty-module_content__2CFlL{\n    user-select: none;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 0 32px;\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n\n    background: var(--fabric-background-tertiary);\n    border: var(--fabric-border-primary) 1px solid;\n    border-radius: 5px;\n    color: var(--fabric-color-quinary);\n}\n\n.Empty-module_label__2kELu{\n    font-size: .8rem;\n    font-weight: bold;\n    color: var(--fabric-color-quaternary);\n    text-align: center;\n}";
var styles$c = {"content":"Empty-module_content__2CFlL","label":"Empty-module_label__2kELu"};
styleInject(css_248z$c);

function Empty(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$c.content
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontSize: '130px'
    },
    className: "material-icons-round"
  }, "folder"), /*#__PURE__*/React__default["default"].createElement("h5", {
    className: styles$c.label
  }, props.customLabel ? props.customLabel : "Lista vazia, nada encontrado."));
}
Empty.propTypes = {
  customLabel: PropTypes__default["default"].string
};

function FileModal(props) {
  var ref = React.useRef();
  var areaRef = React.useRef();
  var files = React.useMemo(function () {
    if (props.files !== undefined && props.files !== null) return props.files.map(function (e, i) {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
        key: 'file-' + i
      }, /*#__PURE__*/React__default["default"].createElement(File, {
        type: e.name.split('.').pop(),
        index: i,
        name: e.name,
        handleDelete: props.handleFileRemoval
      }));
    });
  }, [props.files]);
  var themes = React.useContext(ThemeContext);
  var translate = useLocale();
  return /*#__PURE__*/React__default["default"].createElement(Modal, {
    open: props.open,
    handleClose: function handleClose() {
      return props.setOpen(false);
    },
    animationStyle: 'slide-right',
    blurIntensity: 0,
    className: styles$d.modalContent
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$d.header
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: '100%'
    }
  }, translate('upload_files')), /*#__PURE__*/React__default["default"].createElement("div", {
    className: [styles$d.headerAccepted, styles$d.overflow].join(' '),
    style: {
      width: '100%'
    }
  }, translate('accepted_types'), ": ", props.accept.length > 0 ? props.accept.map(function (e, i) {
    return e.split('.')[e.split('.').length - 1] + (i < props.accept.length - 1 ? ', ' : '');
  }) : translate('all'))), /*#__PURE__*/React__default["default"].createElement(Button, {
    disabled: !props.multiple && props.files.length > 0,
    onClick: function onClick(event) {
      event.preventDefault();
      ref.current.click();
    }
  }, translate('upload_files')), /*#__PURE__*/React__default["default"].createElement("div", {
    className: [styles$d.dropArea, props.files.length > 0 ? styles$d.dropAreaContent : ''].join(' '),
    ref: areaRef,
    style: {
      background: !props.multiple && props.files.length > 0 ? themes.theme.background1 : undefined
    },
    onDragLeave: function onDragLeave(e) {
      if (!(!props.multiple && props.files.length > 0)) {
        areaRef.current.style.borderColor = 'var(--fabric-border-primary)';
        areaRef.current.style.background = 'var(--fabric-background-primary)';
      }
    },
    onDragOver: function onDragOver(e) {
      e.preventDefault();

      if (!(!props.multiple && props.files.length > 0)) {
        areaRef.current.style.borderColor = '#0095ff';
        areaRef.current.style.background = 'var(--fabric-background-tertiary)';
      }
    },
    onDrop: function onDrop(e) {
      e.preventDefault();

      if (!(!props.multiple && props.files.length > 0)) {
        areaRef.current.style.borderColor = '#0095ff';
        areaRef.current.style.background = 'var(--fabric-background-tertiary)';
        props.setFiles([].concat(_toConsumableArray(props.files), _toConsumableArray(Array.from(e.dataTransfer.files))));
      }
    }
  }, props.files.length === 0 ? /*#__PURE__*/React__default["default"].createElement(Empty, {
    customLabel: translate('drag_files')
  }) : files), /*#__PURE__*/React__default["default"].createElement("input", {
    type: "file",
    style: {
      display: 'none'
    },
    disabled: props.disabled,
    accept: props.accept,
    multiple: props.multiple,
    ref: ref,
    onChange: function onChange(event) {
      props.setFiles(Array.from(event.target.files));
      ref.current.value = '';
    }
  }));
}
FileModal.propTypes = {
  handleFileRemoval: PropTypes__default["default"].func,
  setFiles: PropTypes__default["default"].func,
  files: PropTypes__default["default"].array,
  open: PropTypes__default["default"].bool,
  setOpen: PropTypes__default["default"].func,
  multiple: PropTypes__default["default"].bool,
  accept: PropTypes__default["default"].array
};

function FileField(props) {
  var translate = useLocale();

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      openModal = _useState2[0],
      setOpenModal = _useState2[1];

  var color = React.useMemo(function () {
    if (props.colorVariant === 'secondary') return {
      className: shared.secondaryVariant,
      color: '#0095ff'
    };else return {
      className: undefined,
      color: '#0095ff'
    };
  }, []);
  var files = React.useMemo(function () {
    if (props.value && Array.isArray(props.value)) return props.value;else return [];
  }, [props.value]);
  var themes = React.useContext(ThemeContext);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: props.width,
      marginBottom: 'auto',
      display: "grid",
      gap: '4px'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.labelContainer,
    style: {
      opacity: files.length > 0 ? 1 : 0,
      transition: 'visibility 0.2s ease,opacity 0.2s ease'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.overflow
  }, props.label)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: [shared.wrapper, color.className].join(' '),
    "data-highlight": openModal ? openModal : undefined,
    "data-disabled": props.disabled ? props.disabled : undefined
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    disabled: props.disabled,
    variant: 'outlined',
    highlight: openModal,
    styles: {
      height: props.size === 'small' ? '36px' : '56px',
      overflow: "hidden",
      maxWidth: 'unset',
      marginTop: 'unset'
    },
    color: props.colorVariant === 'secondary' ? 'secondary' : 'primary',
    className: [styles$e.button, shared.labelContainer].join(' '),
    onClick: function onClick() {
      return setOpenModal(true);
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.labelContainer,
    style: {
      alignItems: 'center',
      height: '100%',
      gap: '16px',
      display: 'flex',
      color: themes ? 'var(--fabric-color-primary)' : '#555555'
    }
  }, translate('upload_files'), files.length > 0 ? /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      fontSize: '.7rem',
      color: themes ? 'var(--fabric-color-secondary)' : '#777777'
    }
  }, "(", files.length, " ", translate('uploaded_files'), ")") : null), /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontSize: '1.2rem'
    },
    className: "material-icons-round"
  }, "attach_file"))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.alertLabel,
    style: {
      color: files.length === 0 ? '#ff5555' : undefined
    }
  }, props.required ? translate('required') : undefined, props.helperText ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.helperText
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontSize: '1rem'
    },
    className: "material-icons-round"
  }, "info"), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: props.helperText,
    align: 'start'
  })) : null), /*#__PURE__*/React__default["default"].createElement(FileModal, {
    open: openModal,
    setOpen: setOpenModal,
    files: files,
    multiple: props.multiple,
    setFiles: props.handleChange,
    accept: props.acceptTypes && Array.isArray(props.acceptTypes) ? props.acceptTypes : [],
    handleFileRemoval: props.handleFileRemoval
  }));
}
FileField.propTypes = {
  helperText: PropTypes__default["default"].string,
  handleFileRemoval: PropTypes__default["default"].func,
  value: PropTypes__default["default"].array,
  multiple: PropTypes__default["default"].bool,
  acceptTypes: PropTypes__default["default"].array,
  handleChange: PropTypes__default["default"].func,
  label: PropTypes__default["default"].string,
  width: PropTypes__default["default"].string,
  required: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  size: PropTypes__default["default"].oneOf(['small', 'default']),
  colorVariant: PropTypes__default["default"].oneOf(['default', 'secondary', 'primary'])
};

function Fabric(props) {
  return /*#__PURE__*/React__default["default"].createElement(LanguageContext.Provider, {
    value: props.language !== undefined ? props.language : 'pt'
  }, /*#__PURE__*/React__default["default"].createElement(ThemeContext.Provider, {
    value: {
      dark: props.onDark,
      styles: styles$l,
      themes: {
        fabric_background_primary: !props.onDark ? 'white' : '#292c2b',
        fabric_background_secondary: !props.onDark ? '#f3f6f9' : '#1e2121',
        fabric_background_tertiary: !props.onDark ? '#f4f5fa' : '#191C1C',
        fabric_background_quaternary: !props.onDark ? '#E8F0FE' : '#1f2123',
        fabric_border_primary: !props.onDark ? '#F1F1F5' : '#1e2121',
        fabric_border_secondary: !props.onDark ? '#e0e0e0' : '#707070',
        fabric_color_primary: !props.onDark ? '#333333' : 'white',
        fabric_color_secondary: !props.onDark ? '#555555' : '#f4f5fa',
        fabric_color_tertiary: !props.onDark ? '#666666' : '#f0f0f0',
        fabric_color_quaternary: !props.onDark ? '#777777' : '#e0e0e0',
        fabric_color_quinary: !props.onDark ? '#999999' : '#dedede',
        fabric_color_senary: !props.onDark ? 'white' : '#292c2b',
        fabric_box_shadow_primary: !props.onDark ? '#e0e0e0' : '#1e2121'
      }
    }
  }, /*#__PURE__*/React__default["default"].createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons+Round"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: [props.theme === 'dark' ? styles$l.dark : styles$l.light, props.className].join(' '),
    style: props.styles
  }, props.children)));
}
Fabric.propTypes = {
  className: PropTypes__default["default"].string,
  styles: PropTypes__default["default"].object,
  theme: PropTypes__default["default"].oneOf(['dark', 'light']),
  language: PropTypes__default["default"].oneOf(['pt', 'en']),
  children: PropTypes__default["default"].node
};

function useCopyToClipboard(element) {
  return function () {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    var success = false;
    var toCopy = text ? text : element === null || element === void 0 ? void 0 : element.textContent;
    var copyRange, selection, copyRef;

    try {
      copyRange = document.createRange();
      selection = document.getSelection();
      copyRef = document.createElement("span");
      copyRef.textContent = toCopy;
      copyRef.style.all = "unset";
      copyRef.style.position = "fixed";
      copyRef.style.top = 0;
      copyRef.style.clip = "rect(0, 0, 0, 0)";
      copyRef.style.whiteSpace = "pre";
      copyRef.style.userSelect = "text";
      copyRef.addEventListener("copy", function (e) {
        e.stopPropagation();
        e.preventDefault();
        e.clipboardData.clearData();
        e.clipboardData.setData("text/plain", text);
        e.preventDefault();
      });
      document.body.appendChild(copyRef);
      copyRange.selectNodeContents(copyRef);
      selection.addRange(copyRange);
      success = document.execCommand("copy");
    } catch (e) {} finally {
      if (selection) {
        if (typeof selection.removeRange == "function") {
          selection.removeRange(copyRange);
        } else {
          selection.removeAllRanges();
        }
      }

      if (copyRef) document.body.removeChild(copyRef);
    }

    return success;
  };
}

function useFile(pathname, asJson) {
  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  React.useEffect(function () {
    fetch(pathname).then(function (res) {
      if (!asJson) res.text().then(function (text) {
        setData(text);
      })["catch"](function (e) {});else res.json().then(function (json) {
        setData(json);
      })["catch"](function (e) {});
    })["catch"](function (e) {});
  }, [pathname]);
  return data;
}

var css_248z$b = "@import \"../../../misc/theme/styles.module.css\";\n@import url('http://fonts.cdnfonts.com/css/roboto');\n\n.Tabs-module_header__8l5LJ {\n    background-color: var(--fabric-background-primary);\n    border-radius: 5px;\n    justify-content: center;\n    border: var(--fabric-border-primary) 1px solid;\n\n    height: fit-content;\n    width: 100%;\n\n    display: grid;\n    /*border-bottom: var(--fabric-border-primary) 1px solid;*/\n    transition: 150ms ease-in;\n}\n\n.Tabs-module_tabs__3EMRN {\n    max-width: 100%;\n    width: 100%;\n\n    overflow: hidden;\n    margin: auto;\n    display: flex;\n    align-items: center;\n}\n\n\n.Tabs-module_button__1f53r {\n    text-transform: uppercase;\n    /*font-family: \"Roboto\" !important;*/\n    text-rendering: optimizeLegibility;\n    color: var(--fabric-color-tertiary);\n    font-weight: bold;\n    font-size: .73rem;\n    padding: 8px 24px;\n    height: 35px;\n    transition: 150ms ease;\n\n    text-overflow: ellipsis;\n    overflow: hidden;\n    max-width: 100%;\n    white-space: nowrap;\n}\n\n.Tabs-module_button__1f53r:hover, .Tabs-module_button__1f53r:active, .Tabs-module_button__1f53r[data-highlight=\"true\"] {\n    color: var(--color) !important;\n}\n\n\n.Tabs-module_enterA__2UsDT {\n    animation: Tabs-module_enter__10Gu2 150ms ease-in-out;\n}\n\n.Tabs-module_exitA__3_0uq {\n    animation: Tabs-module_exit__2fucC 150ms ease-in-out;\n}\n\n@keyframes Tabs-module_exit__2fucC {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes Tabs-module_enter__10Gu2 {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n";
var styles$b = {"header":"Tabs-module_header__8l5LJ","tabs":"Tabs-module_tabs__3EMRN","button":"Tabs-module_button__1f53r","enterA":"Tabs-module_enterA__2UsDT","enter":"Tabs-module_enter__10Gu2","exitA":"Tabs-module_exitA__3_0uq","exit":"Tabs-module_exit__2fucC"};
styleInject(css_248z$b);

var css_248z$a = "\r\n.Switcher-module_enterA__2RSrB {\r\n    animation: Switcher-module_enter__3bQ2E 150ms ease-in-out;\r\n}\r\n\r\n.Switcher-module_exitA__2rXXT {\r\n    animation: Switcher-module_exit__1sA5x 150ms ease-in-out;\r\n}\r\n\r\n@keyframes Switcher-module_exit__1sA5x {\r\n    0% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@keyframes Switcher-module_enter__3bQ2E {\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n";
var styles$a = {"enterA":"Switcher-module_enterA__2RSrB","enter":"Switcher-module_enter__3bQ2E","exitA":"Switcher-module_exitA__2rXXT","exit":"Switcher-module_exit__1sA5x"};
styleInject(css_248z$a);

function Switcher(props) {
  var ref = React.useRef();

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      currentChild = _useState2[0],
      setCurrentChild = _useState2[1];

  React.useEffect(function () {
    if (props.openChild !== currentChild && props.openChild < React__default["default"].Children.toArray(props.children).length) {
      var _ref$current;

      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.classList.add(styles$a.exitA);
    }
  }, [props.openChild]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: ref,
    className: props.className,
    style: props.styles,
    onAnimationEnd: function onAnimationEnd() {
      var _ref$current2, _ref$current3;

      setCurrentChild(props.openChild);
      (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.classList.add(styles$a.enterA);
      (_ref$current3 = ref.current) === null || _ref$current3 === void 0 ? void 0 : _ref$current3.classList.remove(styles$a.exitA);
    }
  }, React__default["default"].Children.toArray(props.children).map(function (c, i) {
    return i !== currentChild ? null : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: i + '-child'
    }, c);
  }));
}
Switcher.propTypes = {
  className: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node,
  openChild: PropTypes__default["default"].number.isRequired,
  styles: PropTypes__default["default"].object
};

function Tab(props) {
  return props.children ? props.children : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null);
}
Tab.propTypes = {
  disabled: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  styles: PropTypes__default["default"].object,
  group: PropTypes__default["default"].string,
  label: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node
};

function Tabs(props) {
  var _children$props$open, _children$props$open2;

  var children = React__default["default"].Children.toArray(props.children).filter(function (e) {
    return e.type === Tab;
  });
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: props.className,
    style: props.styles
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$b.header,
    style: {
      justifyContent: props.align === 'end' ? 'flex-end' : props.align === 'start' ? 'flex-start' : undefined,
      width: props.indicator === 'fit' ? 'fit-content' : undefined,
      margin: props.indicator === 'fit' ? 'auto' : undefined
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$b.tabs
  }, children.map(function (e, i) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: i + '-button-header-tab'
    }, /*#__PURE__*/React__default["default"].createElement(Button, {
      variant: 'minimal',
      highlight: props.open === i,
      className: styles$b.button,
      onClick: function onClick() {
        props.setOpen(i);
      }
    }, e.props.label, /*#__PURE__*/React__default["default"].createElement(ToolTip, {
      content: e.props.label
    })));
  }))), /*#__PURE__*/React__default["default"].createElement(Switcher, {
    className: (_children$props$open = children[props.open]) === null || _children$props$open === void 0 ? void 0 : _children$props$open.props.className,
    styles: (_children$props$open2 = children[props.open]) === null || _children$props$open2 === void 0 ? void 0 : _children$props$open2.props.styles,
    openChild: props.open
  }, children.map(function (el, index) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: index + '-tab'
    }, el);
  })));
}
Tabs.propTypes = {
  open: PropTypes__default["default"].number.isRequired,
  setOpen: PropTypes__default["default"].func.isRequired,
  align: PropTypes__default["default"].oneOf(['start', 'end', 'center']),
  className: PropTypes__default["default"].string,
  styles: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node.isRequired,
  indicator: PropTypes__default["default"].oneOf(['stretch', 'fit'])
};

var css_248z$9 = "@import \"../../../misc/theme/styles.module.css\";\n\n.Vertical-module_content__3mXHl {\n    width: 100%;\n}\n\n\n.Vertical-module_wrapper__3BFk5 {\n  background-color: var(--fabric-background-primary);\n}\n.Vertical-module_header__1E32z {\n    overflow-y: auto;\n    overflow-x: hidden;\n    position: sticky;\n    top: 0;\n\n    border: var(--fabric-border-primary) 1px solid;\n\n    background-color: var(--fabric-background-secondary) !important;\n    /*border-radius: 5px;*/\n\n    flex-grow: 1;\n    width: clamp(300px, 17vw, 25%);\n    /*max-width: 250px;*/\n\n    display: flex;\n    flex-direction: column;\n    align-content: flex-start;\n    justify-content: flex-start;\n    align-items: flex-start;\n    gap: 8px;\n\n\n    transition: 150ms linear;\n    height: 100%;\n\n\n    padding: 4px;\n}\n\n\n.Vertical-module_button__3sXjY {\n\n    padding: 12px 24px;\n\n    max-width: 100%;\n    width: 100%;\n\n\n    font-weight: 600;\n    font-family: \"Roboto\";\n    font-size: .75rem;\n    text-rendering: optimizeLegibility;\n\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 16px;\n}\n\n.Vertical-module_color__1eEjz {\n    color: var(--fabric-color-tertiary)\n}\n.Vertical-module_color__1eEjz:disabled {\n    color: var(--fabric-color-quinary) !important;\n}\n\n.Vertical-module_color__1eEjz:hover, .Vertical-module_color__1eEjz:active, .Vertical-module_highlight__2lbgS {\n    color: var(--color)\n}\n\n.Vertical-module_rowLabel__F8jVb {\n    display: flex;\n    align-content: center;\n    align-items: center;\n    justify-content: space-between;\n    font-weight: 600;\n    font-family: \"Roboto\";\n    color: var(--fabric-color-secondary);\n    font-size: .8rem;\n    padding: 4px 0 4px 16px;\n    margin-top: 8px;\n}\n\n.Vertical-module_overflow__1UgBi {\n    max-width: 100%;\n\n    text-align: left;\n\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.Vertical-module_rowWrapper__3RQDb{\n    width: 100%;\n    height: auto;\n    display: grid;\n    gap: 4px;\n    /*padding-bottom: 16px;*/\n\n\n    align-items: flex-start;\n\n    /*overflow-x: hidden;*/\n    overflow-y:visible;\n}";
var styles$9 = {"content":"Vertical-module_content__3mXHl","wrapper":"Vertical-module_wrapper__3BFk5","header":"Vertical-module_header__1E32z","button":"Vertical-module_button__3sXjY","color":"Vertical-module_color__1eEjz","highlight":"Vertical-module_highlight__2lbgS","rowLabel":"Vertical-module_rowLabel__F8jVb","overflow":"Vertical-module_overflow__1UgBi","rowWrapper":"Vertical-module_rowWrapper__3RQDb"};
styleInject(css_248z$9);

function Row(props) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hidden = _useState2[0],
      setHidden = _useState2[1];

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$9.rowWrapper
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    className: styles$9.button,
    variant: 'minimal-horizontal',
    color: hidden ? 'primary' : "secondary",
    styles: {
      display: props.groupName ? 'flex' : 'none',
      alignItems: 'center',
      padding: '8px'
    },
    onClick: function onClick() {
      return setHidden(!hidden);
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$9.overflow
  }, props.groupName), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: props.groupName,
    align: 'middle',
    justify: "end"
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "material-icons-round",
    style: {
      transform: hidden ? 'rotate(180deg)' : "unset",
      transition: '150ms linear'
    }
  }, "arrow_drop_down")), hidden ? null : props.buttons.map(function (b, bI) {
    return b.group === props.groupName ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: props.index + '-button-header-tab-' + bI
    }, /*#__PURE__*/React__default["default"].createElement(Button, {
      variant: 'minimal-horizontal',
      className: [styles$9.button, styles$9.color].join(' '),
      styles: {
        fontWeight: 'normal',
        maxWidth: '100%',
        width: '100%'
      },
      highlight: props.open === bI,
      disabled: b.disabled,
      onClick: function onClick() {
        props.setOpen(bI);
      }
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$9.overflow
    }, b.label))) : null;
  }));
}
Row.propTypes = {
  groupName: PropTypes__default["default"].string,
  buttons: PropTypes__default["default"].arrayOf(PropTypes__default["default"].object),
  index: PropTypes__default["default"].number,
  setOpen: PropTypes__default["default"].func,
  open: PropTypes__default["default"].number
};

function VerticalTabs(props) {
  var _children$props$open, _children$props$open2;

  var children = React__default["default"].Children.toArray(props.children);

  var groups = _toConsumableArray(new Set(children.map(function (item) {
    return item.props.group;
  })));

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [props.className, styles$9.wrapper].join(' '),
    style: _objectSpread2(_objectSpread2({}, props.styles), {
      position: 'relative'
    })
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$9.header
  }, groups.map(function (e, i) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: i + '-class'
    }, /*#__PURE__*/React__default["default"].createElement(Row, {
      setOpen: props.setOpen,
      open: props.open,
      data: e,
      index: i,
      buttons: children.map(function (item) {
        return {
          label: item === null || item === void 0 ? void 0 : item.props.label,
          group: item === null || item === void 0 ? void 0 : item.props.group,
          disabled: item === null || item === void 0 ? void 0 : item.props.disabled
        };
      }),
      groupName: e
    }));
  })), /*#__PURE__*/React__default["default"].createElement(Switcher, {
    className: (_children$props$open = children[props.open]) === null || _children$props$open === void 0 ? void 0 : _children$props$open.props.className,
    styles: (_children$props$open2 = children[props.open]) === null || _children$props$open2 === void 0 ? void 0 : _children$props$open2.props.styles,
    openChild: props.open
  }, children.map(function (el, index) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: index + '-tab-vertical'
    }, el);
  })));
}
VerticalTabs.propTypes = {
  open: PropTypes__default["default"].number.isRequired,
  setOpen: PropTypes__default["default"].func.isRequired,
  className: PropTypes__default["default"].string,
  styles: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node.isRequired
};

var css_248z$8 = "\r\n.Action-module_buttonWrapper__1K3tR {\r\n    width: clamp(57px, calc(3vw - 8px), 92px);\r\n    height: clamp(57px, calc(3vw - 8px), 92px);\r\n    /*max-width: clamp(49px, calc(3vw - 16px), 84px);*/\r\n\r\n    overflow: hidden;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 6px;\r\n\r\n\r\n    padding: 2px;\r\n    background: transparent;\r\n    outline: none;\r\n    border: none;\r\n\r\n    color: var(--fabric-color-tertiary);\r\n\r\n    cursor: pointer;\r\n    position: relative;\r\n\r\n    border-radius: 5px;\r\n\r\n    transition: background 150ms linear 350ms;\r\n\r\n}\r\n\r\n.Action-module_buttonWrapper__1K3tR[data-extended = 'true'] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 6px;\r\n    justify-content: flex-start;\r\n    justify-items: flex-start;\r\n\r\n    height: 45px;\r\n    border-radius: 64px;\r\n    padding: 8px;\r\n}\r\n\r\n.Action-module_buttonWrapper__1K3tR[data-extended = 'true'][data-highlight = 'true'] {\r\n    background: rgba(0, 149, 255, .15);\r\n    color: #0095ff;\r\n}\r\n\r\n.Action-module_buttonWrapper__1K3tR[data-extended = 'true'] .Action-module_label__11qm2 {\r\n    /*width: fit-content;*/\r\n    text-align: left;\r\n}\r\n\r\n.Action-module_buttonWrapper__1K3tR[data-extended = 'true'] .Action-module_iconWrapper__BGNhO {\r\n    width: 40px !important;\r\n\r\n}\r\n\r\n.Action-module_buttonWrapper__1K3tR[data-highlight = 'true'] {\r\n    color: var(--fabric-color-primary);\r\n    gap: 6px;\r\n}\r\n\r\n.Action-module_buttonWrapper__1K3tR[data-highlight = 'false'][data-extended = 'false'] {\r\n    gap: 0;\r\n    height: clamp(50px, calc(3vw - 15px), 85px);\r\n}\r\n\r\n.Action-module_buttonWrapper__1K3tR:disabled {\r\n    cursor: unset;\r\n    color: var(--fabric-color-quinary) !important;\r\n}\r\n\r\n.Action-module_buttonWrapper__1K3tR:active {\r\n    color: #0095ff;\r\n}\r\n\r\n.Action-module_iconWrapper__BGNhO {\r\n    overflow: hidden;\r\n    margin: auto;\r\n    width: 16px;\r\n    height: 55%;\r\n    border-radius: 25%/50%;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    padding: 8px 16px;\r\n\r\n    position: relative;\r\n\r\n    transition: 150ms linear;\r\n}\r\n\r\n\r\n.Action-module_icon__WV_7w {\r\n    transition: 150ms linear;\r\n\r\n\r\n    position: relative;\r\n    z-index: 2;\r\n    padding: 0;\r\n    margin: 0;\r\n    width: fit-content;\r\n    height: 100%;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n\r\n\r\n}\r\n\r\n.Action-module_icon__WV_7w > * {\r\n\r\n    font-size: 1.3rem !important;\r\n}\r\n\r\n.Action-module_buttonWrapper__1K3tR[data-highlight = 'true'][data-extended = 'false'] .Action-module_iconWrapper__BGNhO {\r\n    background: #49B3FF;\r\n    color: white;\r\n    width: 100%;\r\n}\r\n\r\n.Action-module_label__11qm2 {\r\n    padding: 0 1px;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    font-weight: 550;\r\n    font-family: 'Roboto';\r\n    text-align: center;\r\n    font-size: .7rem;\r\n}";
var styles$8 = {"buttonWrapper":"Action-module_buttonWrapper__1K3tR","label":"Action-module_label__11qm2","iconWrapper":"Action-module_iconWrapper__BGNhO","icon":"Action-module_icon__WV_7w"};
styleInject(css_248z$8);

var RailContext = /*#__PURE__*/React__default["default"].createContext(false);

function RailActionButton(props) {
  var context = React.useContext(RailContext);
  return /*#__PURE__*/React__default["default"].createElement("span", null, /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: props.onClick,
    disabled: props.disabled,
    className: styles$8.buttonWrapper,
    "data-extended": JSON.stringify(context),
    "data-highlight": JSON.stringify(props.highlight)
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$8.iconWrapper
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: styles$8.icon
  }, props.icon)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$8.label
  }, props.label), /*#__PURE__*/React__default["default"].createElement(Ripple, {
    disabled: props.disabled,
    opacity: .15
  })), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: props.label + (props.disabled ? ' (Disabled)' : ''),
    align: 'middle',
    justify: "end"
  }));
}
RailActionButton.propTypes = {
  // extended: PropTypes.bool,
  highlight: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  label: PropTypes__default["default"].any,
  icon: PropTypes__default["default"].any,
  onClick: PropTypes__default["default"].func,
  group: PropTypes__default["default"].string
};

function RailActionWrapper(props) {
  var context = React.useContext(RailContext);
  return props.children !== null && props.children !== undefined ? typeof props.children === 'function' ? props.children(context) : props.children : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null);
}
RailActionWrapper.propTypes = {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].node, PropTypes__default["default"].func]),
  className: PropTypes__default["default"].string,
  styles: PropTypes__default["default"].object,
  place: PropTypes__default["default"].oneOf(['start', 'end']),
  group: PropTypes__default["default"].string
};

var css_248z$7 = "\r\n\r\n.Rail-module_wrapper__1n2jm {\r\n    padding: 4px;\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    overflow: visible;\r\n    width: clamp(65px, 3vw, 100px);\r\n    transition: 250ms ease-in-out;\r\n    background: var(--fabric-background-primary);\r\n    position: sticky;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n}\r\n\r\n.Rail-module_button__23Yrt{\r\n    width: 100%;\r\n    height: clamp(57px, calc(3vw - 8px), 92px);\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.Rail-module_alignEnd__tizDz {\r\n    display: grid;\r\n    gap: 8px;\r\n    width: 100%;\r\n    height: 100%;\r\n    align-content: flex-end;\r\n    align-items: flex-end;\r\n}\r\n\r\n.Rail-module_alignStart__2GL1m {\r\n    display: grid;\r\n    align-content: flex-start;\r\n    align-items: flex-start;\r\n\r\n    gap: 8px;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.Rail-module_modal__3fWBZ{\r\n    padding: 4px 8px;\r\n    box-shadow: var(--fabric-box-shadow-primary) 0 0 2px 1px;\r\n    height: 100%;\r\n    width: clamp(250px, 15vw, 350px);\r\n\r\n    background: var(--fabric-background-primary);\r\n}";
var styles$7 = {"wrapper":"Rail-module_wrapper__1n2jm","button":"Rail-module_button__23Yrt","alignEnd":"Rail-module_alignEnd__tizDz","alignStart":"Rail-module_alignStart__2GL1m","modal":"Rail-module_modal__3fWBZ"};
styleInject(css_248z$7);

function NavigationRail(props) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      extended = _useState2[0],
      setExtended = _useState2[1];

  var content = /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$7.alignStart,
    "data-variant": props.orientation ? props.orientation : 'vertical'
  }, React__default["default"].Children.toArray(props.children).filter(function (e) {
    return e.props.place !== 'end';
  }).map(function (e, i) {
    if (e.type === RailActionButton) return e;else return /*#__PURE__*/React__default["default"].createElement("div", {
      key: i + '-rail-node-start',
      className: e.props.className,
      style: e.props.styles
    }, e);
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$7.alignEnd,
    "data-variant": props.orientation ? props.orientation : 'vertical'
  }, React__default["default"].Children.toArray(props.children).filter(function (e) {
    return e.props.place === 'end';
  }).map(function (e, i) {
    if (e.type === RailActionButton) return e;else return /*#__PURE__*/React__default["default"].createElement("div", {
      key: i + '-rail-node-end',
      className: e.props.className,
      style: e.props.styles
    }, e);
  })));
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$7.wrapper,
    "data-extended": JSON.stringify(extended)
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    onClick: function onClick() {
      return setExtended(!extended);
    },
    className: styles$7.button
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: 'material-icons-round'
  }, "menu")), /*#__PURE__*/React__default["default"].createElement(Modal, {
    className: styles$7.modal,
    open: extended,
    blurIntensity: 0,
    handleClose: function handleClose() {
      return setExtended(false);
    },
    animationStyle: "slide-left"
  }, /*#__PURE__*/React__default["default"].createElement(RailContext.Provider, {
    value: true
  }, content)), content);
}
NavigationRail.propTypes = {
  children: PropTypes__default["default"].node
};

var css_248z$6 = "@import '../../../misc/theme/styles.module.css';\n\n.Dropdown-module_wrapper__148qJ {\n  position: relative;\n\n}\n\n.Dropdown-module_buttons__1C8Y3 {\n  width: 200px;\n  border-radius: 5px;\n  background: var(--fabric-background-primary);\n  height: auto;\n  box-shadow: rgba(0, 0, 0, .2) 2px 2px 2px 2px;\n\n  overflow-x: hidden;\n  overflow-y: auto;\n  max-height: clamp(250px, 10vh, 300px);\n\n  display: grid;\n  transition: 150ms ease;\n}\n\n.Dropdown-module_iconSpace__25gU3 {\n  min-width: 25px;\n  max-width: 25px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  height: 100%;\n\n}\n\n.Dropdown-module_button__j9GrD {\n  max-width: 100%;\n  width: 100%;\n\n  overflow: hidden;\n  outline: none;\n  border: none;\n  padding: 8px !important;\n  text-align: left;\n  background: transparent;\n\n  transition: 150ms linear;\n  cursor: pointer;\n\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 4px;\n\n  font-size: .75rem;\n  font-weight: 550;\n  height: 25px;\n}\n\n.Dropdown-module_button__j9GrD:hover {\n  background-color: rgba(0, 149, 255, .5);\n  color: var(--fabric-color-secondary);\n}\n\n.Dropdown-module_buttonLabel__3grzf {\n  text-align: left;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  width: 100%;\n}\n\n.Dropdown-module_shortcut__2aVcD {\n  font-weight: normal;\n  width: fit-content;\n  white-space: nowrap;\n\n  color: var(--fabric-color-tertiary);\n}\n\n.Dropdown-module_overflow__1S_Cf {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n";
var styles$6 = {"wrapper":"Dropdown-module_wrapper__148qJ","buttons":"Dropdown-module_buttons__1C8Y3","iconSpace":"Dropdown-module_iconSpace__25gU3","button":"Dropdown-module_button__j9GrD","buttonLabel":"Dropdown-module_buttonLabel__3grzf","shortcut":"Dropdown-module_shortcut__2aVcD","overflow":"Dropdown-module_overflow__1S_Cf"};
styleInject(css_248z$6);

function DropdownOptions(props) {
  return props.children;
}
DropdownOptions.propTypes = {
  children: PropTypes__default["default"].node.isRequired
};

function Dropdown(props) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = React.useState(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      width = _useState4[0],
      setWidth = _useState4[1];

  var _useState5 = React.useState(undefined),
      _useState6 = _slicedToArray(_useState5, 2),
      height = _useState6[0],
      setHeight = _useState6[1];

  var ref = React.useRef();
  var resizeObs = React.useRef();

  var callback = function callback() {
    var _ref$current, _ref$current2;

    setWidth((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.offsetWidth);
    setHeight((_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.offsetHeight);
  };

  React.useEffect(function () {
    var _ref$current3, _ref$current4, _resizeObs$current;

    setWidth((_ref$current3 = ref.current) === null || _ref$current3 === void 0 ? void 0 : _ref$current3.offsetWidth);
    setHeight((_ref$current4 = ref.current) === null || _ref$current4 === void 0 ? void 0 : _ref$current4.offsetHeight);
    resizeObs.current = new ResizeObserver(callback);
    (_resizeObs$current = resizeObs.current) === null || _resizeObs$current === void 0 ? void 0 : _resizeObs$current.observe(ref.current);
    return function () {
      var _resizeObs$current2;

      (_resizeObs$current2 = resizeObs.current) === null || _resizeObs$current2 === void 0 ? void 0 : _resizeObs$current2.disconnect();
    };
  }, []);
  var justifyTranslation = React.useMemo(function () {
    if (width !== undefined) switch (props.justify) {
      case 'end':
        return "calc(-50% + ".concat(width / 2, "px)");

      case 'start':
        return "calc(50% - ".concat(width / 2, "px)");

      case 'middle':
        return '0%';

      default:
        return '0%';
    } else return '0%';
  }, [width, props.justify]);
  var alignTranslation = React.useMemo(function () {
    if (height !== undefined) switch (props.align) {
      case 'top':
        return "calc(-50% - ".concat(height / 2, "px)");

      case 'bottom':
        return "calc(50% + ".concat(height / 2, "px)");

      case 'middle':
        return '0%';

      default:
        return '0%';
    } else return '0%';
  }, [height, props.align]);
  var content = React.useMemo(function () {
    return React__default["default"].Children.toArray(props.children).find(function (e) {
      var _e$type;

      return (e === null || e === void 0 ? void 0 : (_e$type = e.type) === null || _e$type === void 0 ? void 0 : _e$type.name) === DropdownOptions.name;
    });
  }, [props.children]);
  var label = React.useMemo(function () {
    return React__default["default"].Children.toArray(props.children).filter(function (e) {
      var _e$type2;

      return !(e !== null && e !== void 0 && (_e$type2 = e.type) !== null && _e$type2 !== void 0 && _e$type2.name) || (e === null || e === void 0 ? void 0 : e.type.name) !== DropdownOptions.name;
    });
  }, [props.children]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$6.wrapper
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    highlight: open || props.highlight,
    reference: ref,
    styles: props.styles,
    variant: props.variant,
    color: props.color,
    onClick: function onClick() {
      return setOpen(true);
    },
    disabled: props.disabled,
    className: props.className
  }, label.map(function (l) {
    return l;
  })), /*#__PURE__*/React__default["default"].createElement(Modal, {
    variant: "fit",
    styles: {
      transform: "translate(".concat(justifyTranslation, ", ").concat(alignTranslation, ")")
    },
    blurIntensity: 0,
    className: styles$6.buttons,
    animationStyle: 'fade',
    open: open,
    handleClose: function handleClose() {
      return setOpen(false);
    }
  }, content));
}
Dropdown.propTypes = {
  highlight: PropTypes__default["default"].bool,
  variant: PropTypes__default["default"].oneOf(['minimal', 'filled', 'outlined', 'minimal-horizontal']),
  className: PropTypes__default["default"].string,
  styles: PropTypes__default["default"].object,
  disabled: PropTypes__default["default"].bool,
  color: PropTypes__default["default"].oneOf(['primary', 'secondary']),
  children: PropTypes__default["default"].node,
  align: PropTypes__default["default"].oneOf(['top', 'middle', 'bottom']),
  justify: PropTypes__default["default"].oneOf(['start', 'middle', 'end'])
};

function DropdownOption(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    "data-keepalive": "".concat(props.option.keepAlive),
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    disabled: props.option.disabled,
    onClick: function onClick() {
      props.option.onClick(props.option.onClickEvent);
    },
    className: styles$6.button
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$6.iconSpace
  }, props.option.icon), /*#__PURE__*/React__default["default"].createElement("div", {
    className: [styles$6.buttonLabel, styles$6.overflow].join(' ')
  }, props.option.label), props.option.shortcut ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$6.shortcut
  }, props.option.shortcut) : null));
}
DropdownOption.propTypes = {
  option: PropTypes__default["default"].shape({
    label: PropTypes__default["default"].any,
    icon: PropTypes__default["default"].object,
    onClick: PropTypes__default["default"].func,
    disabled: PropTypes__default["default"].bool,
    keepAlive: PropTypes__default["default"].bool,
    shortcut: PropTypes__default["default"].string
  })
};

var css_248z$5 = "@import \"../../../misc/theme/styles.module.css\";\r\n\r\n.Breadcrumbs-module_wrapper__3KOun {\r\n    display: flex;\r\n    align-items: center;\r\n    align-content: center;\r\n    justify-content: center;\r\n    gap: 8px;\r\n    border-radius: 5px;\r\n    background: var(--fabric-background-primary);\r\n    width: 100%;\r\n    padding: 8px;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n.Breadcrumbs-module_crumbWrapper__3KMnN {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n}";
var styles$5 = {"wrapper":"Breadcrumbs-module_wrapper__3KOun","crumbWrapper":"Breadcrumbs-module_crumbWrapper__3KMnN"};
styleInject(css_248z$5);

function Breadcrumbs(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$5.wrapper,
    style: {
      justifyContent: props.justify === 'start' ? 'flex-start' : props.justify === 'end' ? 'flex-end' : undefined
    }
  }, React__default["default"].Children.toArray(props.children).map(function (crumb, i) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$5.crumbWrapper,
      key: 'breadcrumb-' + i
    }, crumb, /*#__PURE__*/React__default["default"].createElement("span", {
      style: {
        fontSize: '1rem',
        display: i === React__default["default"].Children.toArray(props.children).length - 1 ? 'none' : undefined
      },
      className: "material-icons-round"
    }, "arrow_forward_ios"));
  }));
}
Breadcrumbs.propTypes = {
  children: PropTypes__default["default"].node,
  divider: PropTypes__default["default"].string,
  justify: PropTypes__default["default"].oneOf(['start', 'middle', 'end'])
};

var css_248z$4 = ".Accordion-module_details__19zGf{\r\n    background: var(--fabric-background-tertiary);\r\n    /*box-shadow: var(--fabric-box-shadow-primary) 0 0 2px 1px;*/\r\n\r\n    border-radius: 5px;\r\n    border: var(--fabric-border-primary) 1px solid;\r\n    width: 100%;\r\n    color: var(--fabric-color-secondary);\r\n\r\n    transition: 150ms linear;\r\n}\r\n.Accordion-module_details__19zGf[open]{\r\n    box-shadow: var(--fabric-box-shadow-primary) 0 0 5px 1px;\r\n}\r\n\r\n\r\n.Accordion-module_details__19zGf[open] .Accordion-module_summary__3YrzJ{\r\n    box-shadow: none;\r\n}\r\n.Accordion-module_summary__3YrzJ{\r\n    position: relative;\r\n    overflow: hidden;\r\n    user-select: none;\r\n    cursor: pointer;\r\n\r\n    box-shadow: var(--fabric-box-shadow-primary) 0 0 5px 1px;\r\n    border-radius: 5px;\r\n    color: var(--fabric-color-secondary);\r\n    width: 100%;\r\n    padding: 8px 16px;\r\n    background: var(--fabric-background-primary);\r\n\r\n}\r\n.Accordion-module_summary__3YrzJ::after{\r\n    content: '';\r\n    background: #0095ff;\r\n    opacity: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    position: absolute;\r\n    transition:opacity 150ms ease 500ms;\r\n\r\n    z-index: -1;\r\n}\r\n.Accordion-module_summary__3YrzJ:active::after{\r\n    z-index: 0;\r\n    opacity: .15;\r\n}";
var styles$4 = {"details":"Accordion-module_details__19zGf","summary":"Accordion-module_summary__3YrzJ"};
styleInject(css_248z$4);

function AccordionSummary(props) {
  return props.children ? props.children : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null);
}
AccordionSummary.propTypes = {
  children: PropTypes__default["default"].node
};

function Accordion(props) {
  var summary = React__default["default"].Children.toArray(props.children).find(function (e) {
    return e.type === AccordionSummary;
  });
  var content = React__default["default"].Children.toArray(props.children).filter(function (e) {
    return e.type !== AccordionSummary;
  });
  return /*#__PURE__*/React__default["default"].createElement("details", {
    className: styles$4.details
  }, /*#__PURE__*/React__default["default"].createElement("summary", {
    className: styles$4.summary
  }, summary, /*#__PURE__*/React__default["default"].createElement(Ripple, null)), content);
}
Accordion.propTypes = {
  children: PropTypes__default["default"].node
};

function DynamicRoutes(props) {
  var contentIndex = React.useMemo(function () {
    if (props.ready && props.path !== undefined) return props.routes.findIndex(function (route) {
      return props.path === route.basePath;
    });else return props.routes.findIndex(function (route) {
      return route.asIndex;
    });
  }, [props.ready, props.path, props.routes]);
  var Content = React.useMemo(function () {
    if (contentIndex >= 0) return props.routes[contentIndex].content;else return null;
  }, [contentIndex]);
  return Content !== null ? /*#__PURE__*/React__default["default"].createElement(Content, props.componentProps) : null;
}
DynamicRoutes.propTypes = {
  routes: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    basePath: PropTypes__default["default"].string,
    content: PropTypes__default["default"].object,
    asIndex: PropTypes__default["default"].bool
  })),
  ready: PropTypes__default["default"].bool,
  path: PropTypes__default["default"].string,
  componentProps: PropTypes__default["default"].object
};

var css_248z$3 = ".Stepper-module_wrapper__di_1V {\r\n    max-height: 100%;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.Stepper-module_button__1u825 {\r\n    padding: 0 !important;\r\n    width: 30px !important;\r\n    height: 30px !important;\r\n    border-radius: 50% !important;\r\n    position: relative;\r\n}\r\n\r\n.Stepper-module_tabs__E91zo {\r\n    transition: none;\r\n    right: 0;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    position: fixed;\r\n    display: grid;\r\n    gap: 8px;\r\n    align-content: center;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 30px;\r\n}\r\n\r\n.Stepper-module_filler__GbQHP{\r\n    position: absolute;\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50%;\r\n    background: var(--fabric-background-primary);\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\r\n    transition: 150ms linear;\r\n}\r\n.Stepper-module_filler__GbQHP[data-filled = 'true']{\r\n    background: #0095ff;\r\n}";
var styles$3 = {"wrapper":"Stepper-module_wrapper__di_1V","button":"Stepper-module_button__1u825","tabs":"Stepper-module_tabs__E91zo","filler":"Stepper-module_filler__GbQHP"};
styleInject(css_248z$3);

function StepperWrapper(props) {
  return props.children ? props.children : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null);
}
StepperWrapper.propTypes = {
  className: PropTypes__default["default"].string,
  styles: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node
};

function ScrollStepper(props) {
  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      id = _useState2[0],
      setId = _useState2[1];

  React.useEffect(function () {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for (var i = 0; i < 15; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    setId(result);
  }, []);
  var ref = React.useRef();
  var children = React__default["default"].Children.toArray(props.children).filter(function (e) {
    return e.type === StepperWrapper;
  });

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      scrolled = _useState4[0],
      setScrolled = _useState4[1];

  var intersectionObs = React.useRef();

  var handleIntersection = function handleIntersection(event) {
    var inter = event.filter(function (e) {
      return e.isIntersecting;
    });
    var i;

    if (inter && inter.length > 0) {
      i = parseInt(inter[0].target.id.split('-stepper-child-')[1]);
      setScrolled(i);
    }
  };

  React.useEffect(function () {
    intersectionObs.current = new IntersectionObserver(handleIntersection, {
      root: ref.current,
      rootMargin: '0px 0px -50% 0px',
      threshold: 0.5
    });
    children.forEach(function (e, index) {
      var _intersectionObs$curr;

      var element = document.getElementById(id + '-stepper-child-' + index);
      (_intersectionObs$curr = intersectionObs.current) === null || _intersectionObs$curr === void 0 ? void 0 : _intersectionObs$curr.observe(element);
    });
    return function () {
      var _intersectionObs$curr3;

      children.forEach(function (e, index) {
        var _intersectionObs$curr2;

        var element = document.getElementById(id + '-stepper-child-' + index);
        if (element !== null) (_intersectionObs$curr2 = intersectionObs.current) === null || _intersectionObs$curr2 === void 0 ? void 0 : _intersectionObs$curr2.unobserve(element);
      });
      (_intersectionObs$curr3 = intersectionObs.current) === null || _intersectionObs$curr3 === void 0 ? void 0 : _intersectionObs$curr3.disconnect();
    };
  }, [id]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [styles$3.wrapper, props.className].join(' '),
    style: props.styles,
    ref: ref
  }, children.map(function (child, index) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: child.props.className,
      style: _objectSpread2(_objectSpread2({}, child.props.styles), {
        position: 'absolute',
        top: 'calc(100% * ' + index + ')'
      }),
      key: id + '-stepper-child-' + index,
      id: id + '-stepper-child-' + index
    }, child);
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$3.tabs
  }, children.map(function (a, index) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: id + '-button-' + index
    }, /*#__PURE__*/React__default["default"].createElement(Button, {
      variant: 'filled',
      className: styles$3.button,
      onClick: function onClick() {
        var el = document.getElementById(id + '-stepper-child-' + index);

        if (el !== null) {
          // setScrolled(index)
          ref.current.scroll(0, el.offsetTop);
        }
      }
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$3.filler,
      "data-filled": JSON.stringify(scrolled === index)
    })));
  })));
}
ScrollStepper.propTypes = {
  className: PropTypes__default["default"].string,
  styles: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node
};

var css_248z$2 = ".Row-module_wrapper__3ChK1 {\r\n    border-radius: 5px;\r\n\r\n    display: flex;\r\n\r\n    background: var(--fabric-background-primary);\r\n    border: var(--fabric-border-primary) 1px solid;\r\n\r\n    padding: 4px;\r\n}\r\n\r\n.Row-module_row__2fnCo {\r\n    padding: 4px;\r\n    font-size: .8rem;\r\n\r\n    font-weight: bold;\r\n    color: var(--fabric-color-tertiary);\r\n\r\n    font-family: 'Roboto';\r\n    width: 100%;\r\n\r\n    display: grid;\r\n    gap: 4px;\r\n}\r\n\r\n.Row-module_footer__2QbOC {\r\n    font-weight: normal;\r\n    color: var(--fabric-color-secondary);\r\n}";
var styles$2 = {"wrapper":"Row-module_wrapper__3ChK1","row":"Row-module_row__2fnCo","footer":"Row-module_footer__2QbOC"};
styleInject(css_248z$2);

function useField(field, entity) {
  var translate = useLocale();
  return React.useMemo(function () {
    if (entity && entity[field.key] !== undefined && entity[field.key] !== null && (field.type === 'object' && entity[field.key][field.subfieldKey] || field.type !== 'object')) switch (field.type) {
      case 'string':
        return (field.maskStart ? field.maskStart : '') + entity[field.key] + (field.maskEnd ? field.maskEnd : '');

      case 'number':
        {
          var parts = entity[field.key].toString().split(".");
          parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          return (field.maskStart ? field.maskStart : '') + parts.join(".") + (field.maskEnd ? field.maskEnd : '');
        }

      case 'bool':
        return (field.maskStart ? field.maskStart : '') + (entity[field.key] ? 'Sim' : 'Não') + (field.maskEnd ? field.maskEnd : '');

      case 'date':
        {
          var dateObj = new Date(entity[field.key]);
          if (field.hoursOffset !== undefined) dateObj = addHours(field.hoursOffset, dateObj);
          return (field.maskStart ? field.maskStart : '') + dateObj.toLocaleDateString() + (field.maskEnd ? field.maskEnd : '');
        }

      default:
        return entity[field.key];
    } else return translate('empty');
  }, [field, entity]);
}

function RowKey(props) {
  var data = useField(props.field, props.object);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$2.row
  }, data, props.selfContained ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$2.footer
  }, props.field.label) : null);
}
RowKey.propTypes = {
  index: PropTypes__default["default"].number,
  selfContained: PropTypes__default["default"].bool,
  object: PropTypes__default["default"].object.isRequired,
  field: PropTypes__default["default"].shape({
    label: PropTypes__default["default"].string,
    key: PropTypes__default["default"].string.isRequired,
    type: PropTypes__default["default"].oneOf(['number', 'string', 'bool', 'date']).isRequired,
    hoursOffset: PropTypes__default["default"].number
  }).isRequired
};

function DataRow(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$2.wrapper
  }, props.keys.map(function (k, i) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: 'key-' + k.key + '-' + i
    }, /*#__PURE__*/React__default["default"].createElement(RowKey, {
      index: i,
      field: k,
      object: props.object,
      selfContained: props.selfContained
    }));
  }));
}
DataRow.propTypes = {
  selfContained: PropTypes__default["default"].bool,
  object: PropTypes__default["default"].object.isRequired,
  keys: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    label: PropTypes__default["default"].string,
    key: PropTypes__default["default"].string.isRequired,
    type: PropTypes__default["default"].oneOf(['number', 'string', 'bool', 'date']).isRequired,
    hoursOffset: PropTypes__default["default"].number
  })).isRequired
};

var css_248z$1 = ".Masonry-module_wrapper__3ZuaW{\r\n    padding: 8px;\r\n    width: 100%;\r\n    display: flex;\r\n    gap: 8px;\r\n    justify-content: center;\r\n    /*background: red;*/\r\n}\r\n.Masonry-module_column__2qsGK{\r\n    display: grid;\r\n    align-content: flex-start;\r\n    align-items: flex-start;\r\n    justify-content: center;\r\n    /*padding: 8px;*/\r\n    gap: 8px;\r\n}\r\n\r\n\r\n\r\n.Masonry-module_title__1oScc{\r\n    font-size: 1.2rem;\r\n    color: var(--fabric-color-secondary);\r\n    font-weight: 600;\r\n\r\n    display: flex;\r\n    gap: 8px;\r\n    align-items: center;\r\n    padding: 16px;\r\n    white-space: nowrap;\r\n}\r\n\r\n.Masonry-module_titleDivider__BhIhX{\r\n    height: 1px;\r\n    width: 100%;\r\n    background: var(--fabric-border-secondary);\r\n}";
var styles$1 = {"wrapper":"Masonry-module_wrapper__3ZuaW","column":"Masonry-module_column__2qsGK","title":"Masonry-module_title__1oScc","titleDivider":"Masonry-module_titleDivider__BhIhX"};
styleInject(css_248z$1);

var css_248z = ".Card-module_cardWrapper__2BCiJ {\r\n    width: 250px;\r\n    height: auto;\r\n    /*min-height: 250px;*/\r\n    overflow: hidden;\r\n    border-radius: 8px;\r\n\r\n    background: var(--fabric-background-primary);\r\n    border: var(--fabric-border-primary) 1px solid;\r\n    cursor: pointer;\r\n\r\n    transition: 150ms linear;\r\n\r\n    user-select: none;\r\n    position: relative;\r\n\r\n}\r\n\r\n.Card-module_cardWrapper__2BCiJ:active {\r\n    transform: scale(.98);\r\n}\r\n\r\n.Card-module_cardImage__23UHK {\r\n    max-height:  40vh;\r\n    overflow: hidden;\r\n    transition: 150ms linear;\r\n}\r\n\r\n\r\n.Card-module_header__1dMBl {\r\n    font-size: 1.1rem;\r\n    font-weight: 600;\r\n    color: var(--fabric-color-secondary);\r\n}\r\n\r\n.Card-module_description__Wpu5Z {\r\n    max-width: 100%;\r\n    word-break: break-all;\r\n    display: inline-block;\r\n    padding: 16px;\r\n    font-weight: normal;\r\n    color: var(--fabric-color-tertiary);\r\n\r\n    white-space: pre-wrap;\r\n\r\n}\r\n";
var styles = {"cardWrapper":"Card-module_cardWrapper__2BCiJ","cardImage":"Card-module_cardImage__23UHK","header":"Card-module_header__1dMBl","description":"Card-module_description__Wpu5Z"};
styleInject(css_248z);

function Card(props) {
  var height = React.useMemo(function () {
    var _props$dimensions, _props$dimensions2, _props$dimensions3, _props$dimensions4;

    var max = (_props$dimensions = props.dimensions) !== null && _props$dimensions !== void 0 && _props$dimensions.maxHeight ? (_props$dimensions2 = props.dimensions) === null || _props$dimensions2 === void 0 ? void 0 : _props$dimensions2.maxHeight : 250,
        min = (_props$dimensions3 = props.dimensions) !== null && _props$dimensions3 !== void 0 && _props$dimensions3.minHeight ? (_props$dimensions4 = props.dimensions) === null || _props$dimensions4 === void 0 ? void 0 : _props$dimensions4.minHeight : 150;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles.cardWrapper,
    style: _objectSpread2(_objectSpread2({}, props.styles), {
      height: props.randomHeight ? height + 'px' : undefined
    })
  }, props.children);
}
Card.propTypes = {
  children: PropTypes__default["default"].node,
  styles: PropTypes__default["default"].object,
  randomHeight: PropTypes__default["default"].bool,
  dimensions: PropTypes__default["default"].shape({
    maxHeight: PropTypes__default["default"].number,
    minHeight: PropTypes__default["default"].number
  })
};

function Masonry(props) {
  var children = React__default["default"].Children.toArray(props.children).filter(function (c) {
    return c.type === Card;
  });

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      quantityColumn = _useState2[0],
      setQuantityColumn = _useState2[1];

  var resizeObs = React.useRef();
  var ref = React.useRef();

  var callback = function callback() {
    var _ref$current;

    var q = Math.floor(((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.offsetWidth) / 250);
    setQuantityColumn(q <= 0 ? 1 : q);
  };

  React.useEffect(function () {
    resizeObs.current = new ResizeObserver(callback);
    resizeObs.current.observe(ref.current);
  }, []);
  var columns = React.useMemo(function () {
    var newColumns = Array(quantityColumn);
    var onColumn = 0;
    children.forEach(function (child) {
      if (newColumns[onColumn] !== undefined) newColumns[onColumn].push(child);else newColumns[onColumn] = [child];
      if (onColumn < quantityColumn - 1) onColumn += 1;else onColumn = 0;
    });
    return newColumns;
  }, [quantityColumn, children]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: ref,
    className: styles$1.wrapper
  }, columns.map(function (column) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$1.column
    }, column.map(function (row) {
      return row;
    }));
  }));
}
Masonry.propTypes = {
  children: PropTypes__default["default"].node.isRequired,
  title: PropTypes__default["default"].string,
  width: PropTypes__default["default"].string
};

function useInfiniteScroll(setCurrentPage, currentPage, loading, hasMore) {
  var observer = React.useRef();
  return React.useCallback(function (node) {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && hasMore) {
        setCurrentPage(currentPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);
}

exports.Accordion = Accordion;
exports.AccordionSummary = AccordionSummary;
exports.Alert = Alert;
exports.Breadcrumbs = Breadcrumbs;
exports.Button = Button;
exports.Card = Card;
exports.Checkbox = Checkbox;
exports.CheckboxGroup = CheckboxGroup;
exports.DataRow = DataRow;
exports.DateField = DateField;
exports.Dropdown = Dropdown;
exports.DropdownOption = DropdownOption;
exports.DropdownOptions = DropdownOptions;
exports.DynamicRoutes = DynamicRoutes;
exports.Fabric = Fabric;
exports.FileField = FileField;
exports.Form = Form;
exports.FormRow = FormRow;
exports.Masonry = Masonry;
exports.Modal = Modal;
exports.MultiSelectField = MultiSelectField;
exports.NavigationRail = NavigationRail;
exports.RailActionButton = RailActionButton;
exports.RailActionWrapper = RailActionWrapper;
exports.RailContext = RailContext;
exports.Ripple = Ripple;
exports.ScrollStepper = ScrollStepper;
exports.SelectField = SelectField;
exports.StepperWrapper = StepperWrapper;
exports.Switcher = Switcher;
exports.Tab = Tab;
exports.Tabs = Tabs;
exports.TextField = TextField;
exports.ThemeContext = ThemeContext;
exports.ToolTip = ToolTip;
exports.VerticalTabs = VerticalTabs;
exports.useCopyToClipboard = useCopyToClipboard;
exports.useFile = useFile;
exports.useInfiniteScroll = useInfiniteScroll;
