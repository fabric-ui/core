'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React$1 = require('react');
var PropTypes = require('prop-types');
var ReactDOM = require('react-dom');
var axios = require('axios');
var InputMask = require('react-input-mask');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var InputMask__default = /*#__PURE__*/_interopDefaultLegacy(InputMask);

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

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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

var css_248z$G = ".Loader-module_wrapper__3QI8p{\n    position: fixed;\n    z-index: 999;\n    background: white;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 5px;\n}\n\n.Loader-module_loader__8FRHL{\n    border-radius: 5px;\n    animation: Loader-module_load__3J-lX 2s infinite;\n    position: absolute;\n    background: #0095ff;\n    height: 5px;\n    width: 15vw;\n}\n\n@keyframes Loader-module_load__3J-lX {\n    0%{\n        opacity: .3;\n        transform: translateX(0);\n    }\n    50%{\n        opacity: 1;\n        transform: translateX(50vw);\n    }\n    100%{\n        opacity: .3;\n        transform: translateX(100vw);\n    }\n}";
var styles$D = {"wrapper":"Loader-module_wrapper__3QI8p","loader":"Loader-module_loader__8FRHL","load":"Loader-module_load__3J-lX"};
styleInject(css_248z$G);

function Loader() {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$D.wrapper
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$D.loader
  }));
}

var css_248z$F = "@import '../../../misc/theme/styles.module.css';\n\n.Details-module_wrapper__J27HM {\n    background: var(--mfc-background-primary);\n    text-rendering: optimizeLegibility !important;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 35%;\n    height: 100vh;\n\n    border-radius: 5px 0 0 5px;\n    padding: 16px;\n\n    overflow-y: auto;\n    overflow-x: hidden;\n    display: grid;\n    gap: 32px;\n    align-content: flex-start;\n\n    transform: translateZ(0) scale(1.0, 1.0);\n    -webkit-transform: translateZ(0) scale(1.0, 1.0);\n}\n\n.Details-module_header__1tt1f {\n    color: var(--mfc-color-secondary);\n    font-weight: 600;\n    font-size: 1.2rem;\n    font-family: \"Roboto\";\n\n    text-align: left;\n    width: 100%;\n\n    height: fit-content;\n\n\n}\n\n.Details-module_subHeader__2sD0y {\n    margin-top: 4px;\n\n    color: var(--mfc-color-quinary);\n    font-size: .8rem;\n    font-family: \"Roboto\";\n\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    max-width: 75%;\n}\n\n.Details-module_body__2pm_N {\n    margin-top: 4px;\n    font-family: \"Roboto\";\n    overflow-x: auto;\n    color: var(--mfc-color-secondary);\n    font-weight: 600;\n    font-size: .8rem;\n    filter: none;\n    min-height: 50px;\n    border: var(--mfc-border-primary) 1px solid;\n    background: var(--mfc-background-tertiary);\n    padding: 4px;\n    border-radius: 5px;\n}\n\n.Details-module_footer__Pdo9j {\n    margin-top: 4px;\n    border: var(--mfc-border-primary) 1px solid;\n    color: var(--mfc-color-quinary);\n    font-weight: 600;\n    font-size: .75rem;\n    font-family: \"Roboto\";\n    padding: 8px;\n    border-radius: 5px;\n    display: grid;\n    gap: 8px;\n}\n\n\n.Details-module_copyButton__2-6G0 {\n    height: 20px;\n\n    outline: none;\n    cursor: pointer;\n    border: none;\n    background: #0095ff;\n    color: white;\n    border-radius: 5px;\n    font-family: \"Roboto\";\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    transition: 150ms linear;\n\n    padding: 4px 16px;\n}\n\n.Details-module_copyButton__2-6G0:hover {\n    opacity: .9;\n}\n\n.Details-module_copyButton__2-6G0:active {\n    opacity: .6;\n}\n\n\n";
var styles$C = {"wrapper":"Details-module_wrapper__J27HM","header":"Details-module_header__1tt1f","subHeader":"Details-module_subHeader__2sD0y","body":"Details-module_body__2pm_N","footer":"Details-module_footer__Pdo9j","copyButton":"Details-module_copyButton__2-6G0"};
styleInject(css_248z$F);

var AlertPT = {
  error: 'Algum erro ocorreu',
  success: 'Sucesso',
  created: 'Criado com sucesso',
  details: 'Detalhes',
  params: 'Parâmetros da requisição',
  method: 'Método http:',
  setPackage: 'Pacote enviado:',
  url: 'URL enviado:'
};

var css_248z$E = "@import '../../../misc/theme/styles.module.css';\n\n.Modal-module_wrapper__peqWF {\n    /*overflow: hidden;*/\n    position: fixed;\n    z-index: 300;\n    transition: opacity 150ms ease-in-out;\n    bottom: 0;\n}\n\n.Modal-module_fitContent__3p_fP {\n    height: fit-content;\n    width: fit-content;\n}\n\n.Modal-module_fitPage__CXDNO {\n    height: 100vh;\n    width: 100vw;\n}\n\n.Modal-module_modalContainer__3aKtV {\n    width: 100%;\n    height: 100%;\n}\n\n\n\n@keyframes Modal-module_fadeOutAnim__2SUYV {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes Modal-module_fadeInAnim__3Gixz {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n\n.Modal-module_enterFade__1xlj8 {\n    animation: Modal-module_fadeInAnim__3Gixz ease-in-out 250ms forwards;\n}\n\n.Modal-module_exitFade__2gmwF {\n    animation: Modal-module_fadeOutAnim__2SUYV ease-in-out 250ms forwards;\n}\n\n\n.Modal-module_slideLeftEnter__1a4nB {\n    animation: Modal-module_slideLeftEnterAnim__3Y1mE ease-in-out 250ms;\n}\n\n.Modal-module_slideLeftExit__3lXC7 {\n    animation: Modal-module_slideLeftExitAnim__2uGD2 ease-in-out 250ms;\n}\n\n.Modal-module_slideRightEnter__c2m0V {\n    animation: Modal-module_slideRightEnterAnim__zSDil ease-in-out 250ms;\n}\n\n.Modal-module_slideRightExit__3rrOc {\n    animation: Modal-module_slideRightExitAnim__187-I ease-in-out 250ms;\n}\n\n@keyframes Modal-module_slideLeftEnterAnim__3Y1mE {\n    0% {\n        transform: translateX(-100%);\n\n    }\n    100% {\n        transform: translateX(0);\n    }\n}\n\n@keyframes Modal-module_slideLeftExitAnim__2uGD2 {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(-100%);\n    }\n}\n\n@keyframes Modal-module_slideRightEnterAnim__zSDil {\n    0% {\n        transform: translateX(100%);\n\n    }\n    100% {\n        transform: translateX(0);\n    }\n}\n\n@keyframes Modal-module_slideRightExitAnim__187-I {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(100%);\n    }\n}\n\n.Modal-module_background__101HU {\n    background-color: var(--mfc-background-primary);\n}\n\n.Modal-module_slideBottomEnter__39VPK{\n    animation: Modal-module_slideBottomEnterAnim__PXHAQ ease-in-out 250ms;\n}\n.Modal-module_slideBottomExit__3uVE9{\n    animation: Modal-module_slideBottomExitAnim__15zxc ease-in-out 250ms;\n}\n\n@keyframes Modal-module_slideBottomEnterAnim__PXHAQ {\n    0% {\n        transform: translateY(100%);\n\n    }\n    100% {\n        transform: translateY(0);\n    }\n}\n\n@keyframes Modal-module_slideBottomExitAnim__15zxc {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(100%);\n    }\n}\n";
var styles$B = {"wrapper":"Modal-module_wrapper__peqWF","fitContent":"Modal-module_fitContent__3p_fP","fitPage":"Modal-module_fitPage__CXDNO","modalContainer":"Modal-module_modalContainer__3aKtV","enterFade":"Modal-module_enterFade__1xlj8","fadeInAnim":"Modal-module_fadeInAnim__3Gixz","exitFade":"Modal-module_exitFade__2gmwF","fadeOutAnim":"Modal-module_fadeOutAnim__2SUYV","slideLeftEnter":"Modal-module_slideLeftEnter__1a4nB","slideLeftEnterAnim":"Modal-module_slideLeftEnterAnim__3Y1mE","slideLeftExit":"Modal-module_slideLeftExit__3lXC7","slideLeftExitAnim":"Modal-module_slideLeftExitAnim__2uGD2","slideRightEnter":"Modal-module_slideRightEnter__c2m0V","slideRightEnterAnim":"Modal-module_slideRightEnterAnim__zSDil","slideRightExit":"Modal-module_slideRightExit__3rrOc","slideRightExitAnim":"Modal-module_slideRightExitAnim__187-I","background":"Modal-module_background__101HU","slideBottomEnter":"Modal-module_slideBottomEnter__39VPK","slideBottomEnterAnim":"Modal-module_slideBottomEnterAnim__PXHAQ","slideBottomExit":"Modal-module_slideBottomExit__3uVE9","slideBottomExitAnim":"Modal-module_slideBottomExitAnim__15zxc"};
styleInject(css_248z$E);

var css_248z$D = ".styles-module_light__1cr8h {\r\n    --mfc-background-primary: white;\r\n    --mfc-background-secondary: #f3f6f9;\r\n    --mfc-background-tertiary: #f4f5fa;\r\n    --mfc-background-quaternary: #E8F0FE;\r\n\r\n    --mfc-border-primary: #F1F1F5;\r\n    --mfc-border-secondary: #e0e0e0;\r\n\r\n    --mfc-color-primary: #333333;\r\n    --mfc-color-secondary: #555555;\r\n    --mfc-color-tertiary: #666666;\r\n    --mfc-color-quaternary: #777777;\r\n    --mfc-color-quinary: #999999;\r\n    --mfc-color-senary: white;\r\n\r\n    --mfc-box-shadow-primary: #e0e0e0;\r\n}\r\n\r\n.styles-module_dark__3eFo2 {\r\n\r\n\r\n    --mfc-background-primary: #292c2b;\r\n    --mfc-background-secondary: #1e2121;\r\n    --mfc-background-tertiary: #191C1C;\r\n    --mfc-background-quaternary: #1f2123;\r\n\r\n    --mfc-border-primary: #1e2121;\r\n    --mfc-border-secondary: #707070;\r\n\r\n    --mfc-color-primary: white;\r\n    --mfc-color-secondary: #f4f5fa;\r\n    --mfc-color-tertiary: #f0f0f0;\r\n    --mfc-color-quaternary: #e0e0e0;\r\n    --mfc-color-quinary: #dedede;\r\n    --mfc-color-senary: #292c2b;\r\n\r\n    --mfc-box-shadow-primary: #1e2121;\r\n}\r\n\r\n";
var styles$A = {"light":"styles-module_light__1cr8h","dark":"styles-module_dark__3eFo2"};
styleInject(css_248z$D);

var ThemeContext = /*#__PURE__*/React__default["default"].createContext({
  dark: false,
  styles: styles$A,
  themes: {
    mfc_background_primary: 'white',
    mfc_background_secondary: '#f3f6f9',
    mfc_background_tertiary: '#f4f5fa',
    mfc_background_quaternary: '#E8F0FE',
    mfc_border_primary: '#F1F1F5',
    mfc_border_secondary: '#e0e0e0',
    mfc_color_primary: '#333333',
    mfc_color_secondary: '#555555',
    mfc_color_tertiary: '#666666',
    mfc_color_quaternary: '#777777',
    mfc_color_quinary: '#999999',
    mfc_color_senary: 'white',
    mfc_box_shadow_primary: '#e0e0e0'
  }
});

function useModal(_ref) {
  var animationStyle = _ref.animationStyle,
      variant = _ref.variant;
  var mountingPoint = React$1.useRef();
  var source = React$1.useRef();
  var target = React$1.useRef();
  var animation = React$1.useMemo(function () {
    var anim = {
      enter: styles$B.enterFade,
      exit: styles$B.exitFade
    };

    switch (animationStyle) {
      case 'slide-left':
        {
          anim = {
            enter: styles$B.slideLeftEnter,
            exit: styles$B.slideLeftExit
          };
          break;
        }

      case 'slide-right':
        {
          anim = {
            enter: styles$B.slideRightEnter,
            exit: styles$B.slideRightExit
          };
          break;
        }

      case 'slide-bottom':
        {
          anim = {
            enter: styles$B.slideBottomEnter,
            exit: styles$B.slideBottomExit
          };
          break;
        }
    }

    return anim;
  }, []);

  var unmountContent = function unmountContent() {
    try {
      ReactDOM__default["default"].unmountComponentAtNode(mountingPoint.current);
    } catch (e) {
      console.log(e);
    }
  };

  var renderContent = function renderContent(content) {
    ReactDOM__default["default"].render(content, mountingPoint.current);
  };

  var animate = function animate(enter) {
    var _target$current;

    console.log('ANIMATING', enter ? animation.enter : animation.exit, target.current);
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

  React$1.useEffect(function () {
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

  var context = React$1.useContext(ThemeContext);

  var handleMouseDown = function handleMouseDown(event) {
    if (!document.elementsFromPoint(event.clientX, event.clientY).includes(target.current) && alreadyRendered) props.handleClose();
  };

  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      alreadyRendered = _useState2[0],
      setAlreadyRendered = _useState2[1];

  React$1.useEffect(function () {
    if (props.open) {
      var position = getParentPosition();
      renderContent( /*#__PURE__*/React__default["default"].createElement("div", {
        style: _objectSpread2(_objectSpread2({}, {
          background: "rgba(0, 0, 0, ".concat(props.blurIntensity !== undefined ? props.blurIntensity : .4, ")")
        }), position),
        className: [styles$B.wrapper, props.variant === 'fit' ? styles$B.fitContent : styles$B.fitPage, props.wrapperClassName, context.dark ? context.styles.dark : context.styles.light].join(' ')
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
  React$1.useEffect(function () {
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

function Details(props) {
  var lang = AlertPT;
  var data = React$1.useMemo(function () {
    var res = props.data.details;

    try {
      var jsonData = props.data.details && typeof props.data.details === 'string' ? JSON.parse(props.data.details) : null;
      res = JSON.stringify(jsonData, null, 4);
    } catch (e) {}

    return res;
  }, [props]);
  return /*#__PURE__*/React__default["default"].createElement(Modal, {
    open: props.open,
    handleClose: function handleClose() {
      return props.handleClose();
    },
    className: styles$C.wrapper,
    blurIntensity: .1,
    animationStyle: "slide-right"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$C.header
  }, props.data.httpStatusCode >= 300 ? lang.error : lang.success, " - ", props.data.httpStatusCode, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$C.subHeader
  }, props.data.url)), /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: '100%',
      display: 'grid'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      position: 'relative'
    }
  }, lang.details, /*#__PURE__*/React__default["default"].createElement("button", {
    className: styles$C.copyButton,
    onClick: function onClick(event) {
      navigator.clipboard.writeText(props.data.details);
      event.target.innerText = 'Copiado';
      event.target.style.background = 'white';
      event.target.style.color = '#555555';
      event.target.style.border = '#ecedf2 1px solid';
      setTimeout(function () {
        event.target.innerText = 'Copiar';
        event.target.style.background = '#0095ff';
        event.target.style.color = 'white';
        event.target.style.border = 'transparent 1px solid';
      }, 5000);
    }
  }, "Copiar")), /*#__PURE__*/React__default["default"].createElement("pre", {
    className: styles$C.body,
    style: {
      overflow: 'auto'
    }
  }, data)), /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      paddingBottom: '16px'
    }
  }, lang.params, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$C.footer
  }, /*#__PURE__*/React__default["default"].createElement("div", null, lang.method, " ", props.data.method), /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: '100%',
      overflow: 'hidden'
    }
  }, lang.setPackage, /*#__PURE__*/React__default["default"].createElement("pre", {
    className: styles$C.body,
    style: {
      overflow: 'auto'
    }
  }, JSON.stringify(props.data["package"], null, 4))), /*#__PURE__*/React__default["default"].createElement("div", null, lang.url, " ", props.data.url))));
}
Details.propTypes = {
  open: PropTypes__default["default"].bool,
  handleClose: PropTypes__default["default"].func,
  data: PropTypes__default["default"].shape({
    message: PropTypes__default["default"].string,
    details: PropTypes__default["default"].string,
    httpStatusCode: PropTypes__default["default"].number,
    "package": PropTypes__default["default"].any,
    method: PropTypes__default["default"].string,
    url: PropTypes__default["default"].string
  })
};

var css_248z$C = ".Alert-module_wrapper__1Xb80 {\n    top: unset !important;\n    bottom: 16px !important;\n    left: 50% !important;\n    transform: translate(-50%) !important;\n    /*overflow: visible !important;*/\n    /*border-radius: 8px ;*/\n}\n\n.Alert-module_alertContainer__1qzTg {\n    --background: #ff5555;\n    --color: white;\n    background: white;\n    color: #555555 !important;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    transition: visibility 150ms linear, opacity 150ms linear;\n\n    padding: 8px;\n    width: 500px;\n    height: 56px;\n\n    position: relative;\n    border-radius: 8px ;\n\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    overflow: hidden;\n    cursor: pointer;\n}\n\n.Alert-module_alertContainer__1qzTg::before {\n    content: '';\n    z-index: 0;\n    position: absolute;\n    background: var(--background);\n    opacity: .3;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n}\n\n/*.alertContainer:hover {*/\n/*    transform: scale(1.2);*/\n/*}*/\n\n/*.alertContainer:active {*/\n/*    transform: scale(.8);*/\n/*}*/\n\n\n.Alert-module_success__WZPeM {\n\n    --background: #00F400;\n}\n\n.Alert-module_info__19jst {\n    --background: #0095ff;\n\n}\n\n.Alert-module_alert__3PpgF {\n    --background: #FFFF3E;\n\n}\n\n.Alert-module_icon__2UUDw {\n\n    color: var(--background) !important;\n}\n\n.Alert-module_button__2Xjxi {\n    padding: 4px;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.Alert-module_content__2CXCg {\n    width: 100%;\n\n    font-size: .9rem;\n\n    position: relative;\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    height: 100%;\n    justify-items: flex-start;\n    gap: 4px;\n}";
var styles$z = {"wrapper":"Alert-module_wrapper__1Xb80","alertContainer":"Alert-module_alertContainer__1qzTg","success":"Alert-module_success__WZPeM","info":"Alert-module_info__19jst","alert":"Alert-module_alert__3PpgF","icon":"Alert-module_icon__2UUDw","button":"Alert-module_button__2Xjxi","content":"Alert-module_content__2CXCg"};
styleInject(css_248z$C);

var css_248z$B = "@import url('http://fonts.cdnfonts.com/css/roboto');\r\n\r\n.Button-module_button__jUyhs {\r\n    border-radius: 5px;\r\n    outline: none;\r\n    background: unset;\r\n    border: none;\r\n    font-size: .8rem;\r\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\r\n    cursor: pointer;\r\n    --color: #0095ff;\r\n    --darker-color: #0080DB;\r\n    padding: 8px 16px;\r\n    text-align: center;\r\n    color: var(--mfc-color-secondary);\r\n\r\n    overflow: hidden;\r\n    position: relative;\r\n\r\n    --delay: 0ms;\r\n}\r\n\r\n.Button-module_button__jUyhs:disabled {\r\n    cursor: unset;\r\n}\r\n\r\n.Button-module_button__jUyhs:hover {\r\n    --delay: 500ms;\r\n}\r\n\r\n.Button-module_button__jUyhs::after {\r\n    position: absolute;\r\n    content: '';\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background: var(--color);\r\n    opacity: 0;\r\n    transition: 150ms linear var(--delay);\r\n}\r\n\r\n.Button-module_button__jUyhs:disabled::after {\r\n    content: none;\r\n}\r\n\r\n.Button-module_button__jUyhs:not(:active) {\r\n    --delay: 0ms;\r\n}\r\n\r\n.Button-module_button__jUyhs:active::after {\r\n    opacity: .15;\r\n}\r\n\r\n.Button-module_secondaryVariant__2dbm4 {\r\n    --darker-color: #FF2626;\r\n    --color: #ff5555\r\n}\r\n\r\n.Button-module_baseHighlight__13Ysj::after {\r\n    position: absolute;\r\n    content: '';\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background: var(--color);\r\n    opacity: 0;\r\n    animation: Button-module_fadeIn__1a9AP 150ms linear forwards 400ms;\r\n}\r\n\r\n@keyframes Button-module_fadeIn__1a9AP {\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n    100% {\r\n        opacity: .15;\r\n    }\r\n}\r\n\r\n/*MINIMAL*/\r\n.Button-module_minimal__3PuwP {\r\n\r\n    position: relative;\r\n    background: transparent;\r\n\r\n    transition: 150ms ease-in;\r\n}\r\n\r\n.Button-module_minimal__3PuwP::before {\r\n    content: '';\r\n    position: absolute;\r\n\r\n    transition: 150ms ease-in;\r\n    bottom: 0;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n\r\n    border-radius: 16px;\r\n    background: var(--color);\r\n    height: 3px;\r\n    width: 50%;\r\n    opacity: 0;\r\n}\r\n\r\n.Button-module_minimalHorizontal__3HrVf::before {\r\n    content: '';\r\n    position: absolute;\r\n\r\n    transition: 150ms ease-in;\r\n    bottom: 0;\r\n    border-radius: 16px;\r\n    background: var(--color);\r\n\r\n    opacity: 0;\r\n\r\n    height: 50%;\r\n    width: 3px;\r\n    left: 0;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n}\r\n\r\n.Button-module_minimal__3PuwP:hover::before, .Button-module_minimalHighlight__NJAuj.Button-module_minimal__3PuwP::before, .Button-module_minimalHorizontal__3HrVf:hover::before {\r\n    opacity: 1;\r\n}\r\n\r\n\r\n.Button-module_minimal__3PuwP:hover, .Button-module_minimalHighlight__NJAuj {\r\n    color: var(--color);\r\n}\r\n\r\n.Button-module_minimal__3PuwP:disabled::before, .Button-module_minimalHorizontal__3HrVf:disabled::before {\r\n    content: none;\r\n}\r\n\r\n.Button-module_minimal__3PuwP:disabled {\r\n    color: var(--mfc-color-quaternary);\r\n}\r\n\r\n/*MINIMAL*/\r\n\r\n\r\n/*FILLED*/\r\n.Button-module_filled__2btgq {\r\n    position: relative;\r\n    transition: 150ms ease-in;\r\n    color: white;\r\n    background: var(--color) !important;\r\n    box-shadow: var(--mfc-box-shadow-primary) 1px 1px 2px 1px;\r\n}\r\n\r\n.Button-module_filled__2btgq:active, .Button-module_filledHighlight__2zrbL {\r\n    box-shadow: none;\r\n}\r\n\r\n.Button-module_filled__2btgq:disabled {\r\n    border-color: transparent;\r\n    color: var(--mfc-color-quaternary);\r\n    background: transparent !important;\r\n    box-shadow: none;\r\n}\r\n\r\n/*FILLED*/\r\n\r\n\r\n/*OUTLINED*/\r\n.Button-module_outlined__2WAcZ {\r\n\r\n    position: relative;\r\n    background: transparent;\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    transition: 150ms ease-in;\r\n}\r\n\r\n.Button-module_default__1h4uk {\r\n    border: none;\r\n}\r\n\r\n.Button-module_outlined__2WAcZ:hover {\r\n    color: var(--color);\r\n}\r\n\r\n.Button-module_outlined__2WAcZ:active, .Button-module_outlinedHighlight__2bIRC {\r\n    color: var(--color);\r\n    border-color: var(--color);\r\n}\r\n\r\n.Button-module_outlined__2WAcZ:disabled {\r\n    border-color: var(--mfc-border-primary);\r\n    color: var(--mfc-color-quaternary);\r\n    background: transparent;\r\n}\r\n\r\n/*OUTLINED*/\r\n";
var styles$y = {"button":"Button-module_button__jUyhs","secondaryVariant":"Button-module_secondaryVariant__2dbm4","baseHighlight":"Button-module_baseHighlight__13Ysj","fadeIn":"Button-module_fadeIn__1a9AP","minimal":"Button-module_minimal__3PuwP","minimalHorizontal":"Button-module_minimalHorizontal__3HrVf","minimalHighlight":"Button-module_minimalHighlight__NJAuj","filled":"Button-module_filled__2btgq","filledHighlight":"Button-module_filledHighlight__2zrbL","outlined":"Button-module_outlined__2WAcZ","default":"Button-module_default__1h4uk","outlinedHighlight":"Button-module_outlinedHighlight__2bIRC"};
styleInject(css_248z$B);

var css_248z$A = "\r\n.Ripple-module_ripple__a3al8 {\r\n    --y: 0;\r\n    --x: 0;\r\n\r\n    --accent-color: #0095ff;\r\n\r\n    --opacity: .15;\r\n    --size: 16px;\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    border-radius: 50%;\r\n    opacity: 0;\r\n    background: var(--accent-color);\r\n    transform: translate(-50%, -50%);\r\n\r\n    left: var(--x);\r\n    top: var(--y);\r\n\r\n    animation: Ripple-module_rippleAnim__3SqHu 1s ease-in forwards;\r\n}\r\n\r\n@keyframes Ripple-module_rippleAnim__3SqHu {\r\n    0% {\r\n        opacity: 0;\r\n        width: 0;\r\n        height: 0;\r\n    }\r\n    50% {\r\n        opacity: var(--opacity);\r\n        width: calc(var(--size) * 2);\r\n        height: calc(var(--size) * 2);\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        width: calc(var(--size) * 2);\r\n        height: calc(var(--size) * 2);\r\n    }\r\n}";
var styles$x = {"ripple":"Ripple-module_ripple__a3al8","rippleAnim":"Ripple-module_rippleAnim__3SqHu"};
styleInject(css_248z$A);

function Ripple(props) {
  var ref = React$1.useRef();

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
    target.classList.add(styles$x.ripple);
    target.addEventListener('animationend', function () {
      var _ref$current;

      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.parentNode.removeChild(target);
    }, {
      once: true
    });
  };

  React$1.useEffect(function () {
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
  var variant = React$1.useMemo(function () {
    switch (props.variant) {
      case 'minimal':
        return {
          normal: styles$y.minimal,
          highlight: [styles$y.minimalHighlight, styles$y.baseHighlight].join(' ')
        };

      case 'filled':
        return {
          normal: styles$y.filled,
          highlight: styles$y.filledHighlight
        };

      case 'outlined':
        return {
          normal: styles$y.outlined,
          highlight: [styles$y.outlinedHighlight, styles$y.baseHighlight].join(' ')
        };

      case 'minimal-horizontal':
        return {
          normal: [styles$y.minimal, styles$y.minimalHorizontal].join(' '),
          highlight: [styles$y.minimalHighlight, styles$y.baseHighlight].join(' ')
        };

      default:
        return {
          normal: [styles$y["default"], styles$y.outlined].join(' '),
          highlight: [styles$y.outlinedHighlight, styles$y.baseHighlight].join(' ')
        };
    }
  }, [props.variant, props.highlight]);
  var color = React$1.useMemo(function () {
    if (props.color === 'secondary') return styles$y.secondaryVariant;else return undefined;
  }, [props.color]);
  var accentColor = React$1.useMemo(function () {
    if (props.variant === 'filled') {
      if (props.color === 'secondary') return '#FF2626';else return '#0080DB';
    } else if (props.color === 'secondary') return '#ff5555';else return '#0095ff';
  }, [props.color]);
  return /*#__PURE__*/React__default["default"].createElement("button", {
    className: [styles$y.button, variant.normal, props.highlight ? variant.highlight : undefined, color, props.className].join(' '),
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

function Alert(props) {
  var variant = React$1.useMemo(function () {
    switch (props.variant) {
      case 'success':
        return {
          className: styles$z.success,
          icon: /*#__PURE__*/React__default["default"].createElement("span", {
            className: "material-icons-round"
          }, "done")
        };

      case 'alert':
        return {
          className: styles$z.alert,
          icon: /*#__PURE__*/React__default["default"].createElement("span", {
            className: "material-icons-round"
          }, "warning")
        };

      case 'info':
        return {
          className: styles$z.info,
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
  React$1.useEffect(function () {
    var timeout;
    if (props.delay) timeout = setTimeout(function () {
      if (!props.open) try {
        props.handleClose();
      } catch (e) {}
    }, 5000);
    return function () {
      if (timeout) clearTimeout(timeout);
    };
  }, [props.open, props.delay]);
  return /*#__PURE__*/React__default["default"].createElement(Modal, {
    open: props.open,
    wrapperClassName: styles$z.wrapper,
    handleClose: function handleClose() {
      return props.handleClose(false);
    },
    animationStyle: 'fade',
    variant: 'fit',
    blurIntensity: 0,
    className: [styles$z.alertContainer, variant.className].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$z.content,
    onClick: function onClick() {
      return props.onClick();
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: [styles$z.icon, styles$z.button].join(' ')
  }, variant.icon), props.children), /*#__PURE__*/React__default["default"].createElement(Button, {
    color: 'secondary',
    className: styles$z.button,
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

function RequestAlert(props) {
  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var ref = React$1.useRef();
  var message = React$1.useMemo(function () {
    switch (true) {
      case props.httpStatusCode >= 300:
        return "Algum erro ocorreu (".concat(props.httpStatusCode, ")");

      case props.httpStatusCode < 300:
        return "Sucesso (".concat(props.httpStatusCode, ")");

      default:
        return "Algum erro ocorreu (".concat(props.httpStatusCode, ")");
    }
  }, [props]);
  React$1.useEffect(function () {
    var timeout = setTimeout(function () {
      if (!open) try {
        var _ref$current;

        ReactDOM__default["default"].unmountComponentAtNode((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.parentNode);
      } catch (e) {}
    }, 5000);
    return function () {
      if (timeout) clearTimeout(timeout);
    };
  }, [open]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: ref
  }, /*#__PURE__*/React__default["default"].createElement(Details, {
    open: open,
    handleClose: function handleClose() {
      setOpen(false);
    },
    data: props
  }), /*#__PURE__*/React__default["default"].createElement(Alert, {
    onClick: function onClick() {
      return setOpen(true);
    },
    open: !open,
    variant: props.httpStatusCode < 300 ? 'success' : 'error',
    handleClose: function handleClose(forced) {
      var _ref$current2;

      console.log('ON CLOSE ', forced);
      if (forced) ReactDOM__default["default"].unmountComponentAtNode((_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.parentNode);
    }
  }, message));
}
Alert.propTypes = {
  message: PropTypes__default["default"].string,
  details: PropTypes__default["default"].string,
  httpStatusCode: PropTypes__default["default"].number,
  "package": PropTypes__default["default"].any,
  method: PropTypes__default["default"].string,
  url: PropTypes__default["default"].string
};

function Request(_x) {
  return _Request.apply(this, arguments);
}

function _Request() {
  _Request = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(props) {
    var packageSent, method, loader, params;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            packageSent = _objectSpread2({}, props["package"]);
            method = props.method.toLowerCase();
            loader = document.createElement('div');
            document.body.appendChild(loader);
            ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].createElement(Loader, null), loader);
            params = {
              method: method,
              headers: props.headers,
              data: method === 'get' ? undefined : packageSent,
              params: method !== 'get' ? undefined : packageSent,
              url: props.url
            };
            return _context.abrupt("return", axios__default["default"](params).then(function (r) {
              console.log(r);
              ReactDOM__default["default"].unmountComponentAtNode(loader);

              if (props.showSuccessAlert) {
                var newElement = document.createElement('div');
                document.body.appendChild(newElement);
                ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].createElement(RequestAlert, {
                  message: r.statusText,
                  details: r.data,
                  httpStatusCode: r.status,
                  "package": packageSent,
                  method: method,
                  url: props.url
                }), newElement);
              }

              return {
                data: r.data,
                status: r === null || r === void 0 ? void 0 : r.status,
                message: r === null || r === void 0 ? void 0 : r.statusText,
                ok: true
              };
            })["catch"](function (r) {
              var _r$response;

              ReactDOM__default["default"].unmountComponentAtNode(loader);
              var newElement = document.createElement('div');
              document.body.appendChild(newElement);
              ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].createElement(RequestAlert, {
                message: r.message,
                details: r.data,
                httpStatusCode: (_r$response = r.response) === null || _r$response === void 0 ? void 0 : _r$response.status,
                "package": packageSent,
                method: method,
                url: props.url
              }), newElement);
              return {
                status: r === null || r === void 0 ? void 0 : r.status,
                message: r === null || r === void 0 ? void 0 : r.statusText,
                ok: false
              };
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _Request.apply(this, arguments);
}

Request.propTypes = {
  headers: PropTypes__default["default"].object,
  "package": PropTypes__default["default"].object,
  url: PropTypes__default["default"].string.isRequired,
  // credentials: PropTypes.oneOf(['default', 'include', 'same-origin', 'omit']),
  // redirect: PropTypes.oneOf(['manual', 'follow', 'error']),
  // referrerPolicy: PropTypes.oneOf(['default', 'no-referrer', 'no-referrer-when-downgrade', 'origin', 'origin-when-cross-origin', 'same-origin', 'strict-origin', 'strict-origin-when-cross-origin', 'unsafe-url']),
  // mode: PropTypes.oneOf(['default', 'no-cors', 'cors', 'same-origin']),
  // cache: PropTypes.oneOf(['default', 'no-cache', 'reload', 'force-cache', 'only-if-cached']),
  method: PropTypes__default["default"].oneOf(['get', 'put', 'post', 'delete', 'patch']).isRequired,
  showSuccessAlert: PropTypes__default["default"].bool
};

var css_248z$z = ".ToolTip-module_container__2pbpO {\n    user-select: none;\n    height: auto;\n    min-height: 15px;\n\n    width: fit-content;\n    max-width: 300px;\n    /*box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;*/\n    opacity: 0;\n\n    animation: ToolTip-module_show__qH1QD 250ms ease-in-out forwards;\n    animation-delay: 500ms;\n\n    position: relative;\n}\n\n@keyframes ToolTip-module_show__qH1QD {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n.ToolTip-module_content__frnHK{\n    padding: 4px 8px;\n    border-radius: 5px;\n    background: rgba(38,38,38,1);\n    color: white;\n    font-family: \"Roboto\";\n    font-size: .8rem;\n    font-weight: bold;\n    text-align: center;\n\n}\n.ToolTip-module_exitAnim__3VgmV{\n    animation: ToolTip-module_exit__3c7BK 250ms ease-in-out;\n    transform-origin: top left;\n}\n\n@keyframes ToolTip-module_exit__3c7BK {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}";
var styles$w = {"container":"ToolTip-module_container__2pbpO","show":"ToolTip-module_show__qH1QD","content":"ToolTip-module_content__frnHK","exitAnim":"ToolTip-module_exitAnim__3VgmV","exit":"ToolTip-module_exit__3c7BK"};
styleInject(css_248z$z);

function ToolTip(props) {
  var toolTip = /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$w.container
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$w.content
  }, props.content === undefined ? props.children : props.content));
  var ref = React$1.useRef();
  var mountingPoint = React$1.useRef();

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

  React$1.useEffect(function () {
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

var css_248z$y = "@import \"../../../misc/theme/styles.module.css\";\n\n.Selector-module_createModal__zGsa_ {\n    position: absolute;\n    background: var(--mfc-background-primary);\n    border-radius: 8px;\n    border: var(--mfc-border-primary) 1px solid;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 50vw;\n    max-height: 75vh;\n}\n\n.Selector-module_labelContainer__zPMB5 {\n    /*animation: slideUp linear 250ms both;*/\n    transition: visibility 150ms linear;\n    color: var(--mfc-color-primary);\n    font-size: .9rem;\n    margin-top: auto;\n    overflow: hidden;\n\n    text-transform: capitalize;\n\n}\n\n\n.Selector-module_button__2l_e_ {\n    user-select: none;\n    position: relative;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n\n    transition: inherit;\n    background: var(--mfc-background-primary);\n    width: 100%;\n\n    padding: 5px;\n\n    max-width: 100%;\n    overflow: hidden;\n}\n\n.Selector-module_button__2l_e_:hover {\n    border-color: var(--accent-color);\n}\n\n.Selector-module_button__2l_e_:disabled {\n    border-color: var(--mfc-border-primary);\n}\n\n.Selector-module_alertLabel__2-P3S {\n    margin-left: auto;\n    font-weight: 550;\n    font-size: .8rem;\n}\n\n\n.Selector-module_inputContainer__1xcoQ {\n\n    border: none;\n    box-shadow: unset;\n\n    background: transparent;\n    width: 100%;\n    font-family: 'Roboto' !important;\n    height: 44px;\n\n    outline: none;\n    padding: 5px 12px;\n    font-size: 1rem;\n\n}\n\n.Selector-module_fieldsContainer__37Ep6 {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    height: 50px;\n    border-radius: 8px;\n    transition: 150ms linear;\n    color: var(--mfc-color-secondary);\n    background: var(--mfc-background-primary);\n    gap: 0;\n    padding: 0 0 0 16px;\n    border: #e0e0e0 1px solid;\n    margin-bottom: 32px;\n}\n\n.Selector-module_fieldsContainer__37Ep6:hover {\n    box-shadow: #0095ff 0px 0px 1px 1.5px;\n}\n\n.Selector-module_fieldsContainer__37Ep6:focus, .Selector-module_fieldsContainer__37Ep6:focus-within {\n    color: black;\n    box-shadow: #0095ff 0px 0px 1px 1.5px;\n    background: var(--mfc-background-tertiary);\n}\n\n.Selector-module_searchButtonContainer__3Jw7g {\n    padding: 0;\n    outline: 0;\n    height: 44px;\n    width: fit-content;\n    border: none;\n    color: var(--mfc-color-secondary);\n    border-radius: 8px;\n\n    cursor: pointer;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n\n    background: transparent;\n    transition: 150ms linear;\n}\n\n.Selector-module_searchButtonContainer__3Jw7g:hover {\n    color: #0095ff;\n}\n\n.Selector-module_selectedEntityContainer__3Vnam {\n    width: 100%;\n    border: none;\n    border-bottom: var(--mfc-border-primary) 1px solid;\n    border-top: var(--mfc-border-primary) 1px solid;\n\n    height: 56px;\n    color: var(--mfc-color-primary);\n    font-size: .9rem;\n\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 8px;\n}\n\n.Selector-module_removeButton__1TFvA {\n\n    width: 28px;\n    height: 28px;\n    border-radius: 32px;\n\n    outline: none;\n    cursor: pointer;\n    border: none;\n    background: transparent;\n    color: #ff5555;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.Selector-module_divider__2Ossq {\n    height: 30px;\n    width: 1px;\n    background: var(--mfc-border-primary);\n\n}\n\n.Selector-module_overflow__3TwOW {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    max-width: 90%;\n}\n\n\n@keyframes Selector-module_enter__2WjLM {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes Selector-module_exit__2Dzcn {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n.Selector-module_buttonWrapper__LLyJf{\n    max-width: 100%;\n    overflow: hidden;\n\n}";
var styles$v = {"createModal":"Selector-module_createModal__zGsa_","labelContainer":"Selector-module_labelContainer__zPMB5","button":"Selector-module_button__2l_e_","alertLabel":"Selector-module_alertLabel__2-P3S","inputContainer":"Selector-module_inputContainer__1xcoQ","fieldsContainer":"Selector-module_fieldsContainer__37Ep6","searchButtonContainer":"Selector-module_searchButtonContainer__3Jw7g","selectedEntityContainer":"Selector-module_selectedEntityContainer__3Vnam","removeButton":"Selector-module_removeButton__1TFvA","divider":"Selector-module_divider__2Ossq","overflow":"Selector-module_overflow__3TwOW","buttonWrapper":"Selector-module_buttonWrapper__LLyJf","enter":"Selector-module_enter__2WjLM","exit":"Selector-module_exit__2Dzcn"};
styleInject(css_248z$y);

var SelectorsPT = {
  close: 'Fechar',
  search: 'Pesquisar',
  required: 'Este campo é obrigatório.',
  selected: 'Selecionado'
};

var css_248z$x = "@import \"../../../misc/theme/styles.module.css\";\r\n\r\n.SelectorModal-module_wrapper__39kRR {\r\n    height: 100%;\r\n    width: clamp(250px, 25%, 500px);\r\n    background: var(--mfc-background-primary);\r\n    margin-left: auto;\r\n    border-radius: 8px 0 0 8px;\r\n    box-shadow: var(--mfc-box-shadow-primary) -1px 0 3px 1px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 16px;\r\n    padding: 12px;\r\n}\r\n\r\n.SelectorModal-module_header__ckwRV {\r\n    font-family: \"Roboto\";\r\n\r\n    display: flex;\r\n    height: fit-content;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n    font-size: 1.2rem;\r\n    border-radius: 5px;\r\n    font-weight: bold;\r\n    color: var(--mfc-color-primary);\r\n}\r\n\r\n.SelectorModal-module_row__28prZ {\r\n    overflow: hidden;\r\n    outline: none;\r\n\r\n    width: 100%;\r\n    max-width: 100%;\r\n\r\n    padding: 4px;\r\n    height: 50px;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.SelectorModal-module_overflowEllipsis__2C1KC {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    text-align: left;\r\n}\r\n\r\n.SelectorModal-module_rowColumn__2wgID {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    justify-items: center;\r\n\r\n    gap: 4px;\r\n}\r\n\r\n.SelectorModal-module_columnLabel__3EXCz {\r\n    font-size: .75rem;\r\n    color: var(--mfc-color-quaternary);\r\n}\r\n\r\n.SelectorModal-module_rows__dqCYe {\r\n    position: relative;\r\n    display: grid;\r\n    align-content: flex-start;\r\n    gap: 8px;\r\n    overflow-y: auto;\r\n    height: 100%;\r\n    /*padding-top: 16px;*/\r\n    /*display: flex;*/\r\n    /*flex-direction: column;*/\r\n    width: 100%;\r\n    /*gap: 4px;*/\r\n}\r\n\r\n.SelectorModal-module_hoveredRow__2kDC6 {\r\n    background: var(--mfc-background-quaternary);\r\n    border-color: #0095ff;\r\n    border-style: solid;\r\n}\r\n\r\n\r\n\r\n.SelectorModal-module_emptyRow__9HWYo {\r\n    color: var(--mfc-color-quinary);\r\n}\r\n\r\n.SelectorModal-module_divider__1O8uU {\r\n    height: 1px;\r\n    width: 100%;\r\n    background: var(--mfc-border-secondary);\r\n}\r\n\r\n.SelectorModal-module_headerButton__1tHp5 {\r\n    height: 30px;\r\n    padding: 4px 8px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    background: var(--mfc-background-primary);\r\n}\r\n\r\n\r\n.SelectorModal-module_headerButtons__1TWSf {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.SelectorModal-module_mainRow__1PE1p{\r\n    background: var(--mfc-background-tertiary);\r\n}";
var styles$u = {"wrapper":"SelectorModal-module_wrapper__39kRR","header":"SelectorModal-module_header__ckwRV","row":"SelectorModal-module_row__28prZ","overflowEllipsis":"SelectorModal-module_overflowEllipsis__2C1KC","rowColumn":"SelectorModal-module_rowColumn__2wgID","columnLabel":"SelectorModal-module_columnLabel__3EXCz","rows":"SelectorModal-module_rows__dqCYe","hoveredRow":"SelectorModal-module_hoveredRow__2kDC6","emptyRow":"SelectorModal-module_emptyRow__9HWYo","divider":"SelectorModal-module_divider__1O8uU","headerButton":"SelectorModal-module_headerButton__1tHp5","headerButtons":"SelectorModal-module_headerButtons__1TWSf","mainRow":"SelectorModal-module_mainRow__1PE1p"};
styleInject(css_248z$x);

function useField(field, entity) {
  return React$1.useMemo(function () {
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
        return (field.maskStart ? field.maskStart : '') + new Date(entity[field.key]).toLocaleDateString() + (field.maskEnd ? field.maskEnd : '');

      case 'object':
        {
          if (entity[field.key] !== null || entity[field.key] !== null && entity[field.key][field.subfieldKey] === undefined) return (field.maskStart ? field.maskStart : '') + entity[field.key][field.subfieldKey] + (field.maskEnd ? field.maskEnd : '');else return field.fallback;
        }

      case 'array':
        {
          var value = '';
          entity[field.key].forEach(function (e, i) {
            if (i > 0) value = value + '-' + e;else value = e;
          });
          return value;
        }

      default:
        return entity[field.key];
    } else return 'Em branco';
  }, [field.type, entity]);
}

var keyTemplate = PropTypes__default["default"].shape({
  key: PropTypes__default["default"].string.isRequired,
  label: PropTypes__default["default"].string.isRequired,
  type: PropTypes__default["default"].oneOf(['string', 'number', 'object', 'date', 'bool', 'array']),
  getColor: PropTypes__default["default"].func,
  subfieldKey: PropTypes__default["default"].string,
  visible: PropTypes__default["default"].bool,
  maskStart: PropTypes__default["default"].any,
  maskEnd: PropTypes__default["default"].any,
  additionalWidth: PropTypes__default["default"].string,
  subType: PropTypes__default["default"].oneOf(['string', 'number', 'object', 'date', 'bool']),
  query: PropTypes__default["default"].object
});

function RowCell(props) {
  var content = useField(props.field, props.data);
  return /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      color: props.field.getColor ? props.field.getColor(props.data[props.field.key]) : undefined
    }
  }, content);
}
RowCell.propTypes = {
  data: PropTypes__default["default"].object,
  field: keyTemplate
};

function Row$2(props) {
  return /*#__PURE__*/React__default["default"].createElement(Button, {
    onClick: function onClick() {
      return props.onClick();
    },
    reference: props.reference,
    highlight: props.highlight,
    variant: 'outlined',
    className: styles$u.row,
    disabled: props.disabled,
    styles: props.main ? {
      background: 'var(--mfc-background-tertiary)'
    } : {
      height: props.height,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      display: props.main && !props.data ? undefined : 'none'
    }
  }, "Nada selecionado."), props.main && !props.data ? null : props.keys.map(function (k, i) {
    return !k.visible ? null : /*#__PURE__*/React__default["default"].createElement("div", {
      key: 'selector-row-' + i,
      className: styles$u.rowColumn,
      style: {
        width: 1 / props.keys.filter(function (e) {
          return e.visible;
        }).length * 100 + '%'
      }
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$u.overflowEllipsis,
      style: {
        maxWidth: '90%'
      }
    }, /*#__PURE__*/React__default["default"].createElement(RowCell, {
      data: props.data,
      field: k
    })), /*#__PURE__*/React__default["default"].createElement("div", {
      className: [styles$u.columnLabel, styles$u.overflowEllipsis, styles$u.emptyRow].join(' '),
      style: {
        maxWidth: '75%'
      }
    }, k.label), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
      justify: 'start'
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$u.rowColumn
    }, /*#__PURE__*/React__default["default"].createElement(RowCell, {
      data: props.data,
      field: k
    }), /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$u.columnLabel
    }, k.label))));
  }));
}
Row$2.propTypes = {
  height: PropTypes__default["default"].any,
  highlight: PropTypes__default["default"].bool,
  main: PropTypes__default["default"].bool,
  keys: PropTypes__default["default"].array,
  data: PropTypes__default["default"].object,
  onClick: PropTypes__default["default"].func,
  disabled: PropTypes__default["default"].bool,
  identificationKey: PropTypes__default["default"].string,
  reference: PropTypes__default["default"].any,
  index: PropTypes__default["default"].number,
  onDrop: PropTypes__default["default"].func
};

function useInfiniteScroll(setCurrentPage, currentPage, loading, hasMore) {
  var observer = React$1.useRef();
  return React$1.useCallback(function (node) {
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

var css_248z$w = "@import \"../../../misc/theme/styles.module.css\";\n\n.Empty-module_content__2CFlL{\n    user-select: none;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 0 32px;\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n\n    background: var(--mfc-background-tertiary);\n    border: var(--mfc-border-primary) 1px solid;\n    border-radius: 5px;\n    color: var(--mfc-color-quinary);\n}\n\n.Empty-module_label__2kELu{\n    font-size: .8rem;\n    font-weight: bold;\n    color: var(--mfc-color-quaternary);\n    text-align: center;\n}";
var styles$t = {"content":"Empty-module_content__2CFlL","label":"Empty-module_label__2kELu"};
styleInject(css_248z$w);

function Empty(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$t.content
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontSize: '130px'
    },
    className: "material-icons-round"
  }, "folder"), /*#__PURE__*/React__default["default"].createElement("h5", {
    className: styles$t.label
  }, props.customLabel ? props.customLabel : "Lista vazia, nada encontrado."));
}
Empty.propTypes = {
  customLabel: PropTypes__default["default"].string
};

function useHeader(dispatch, actions) {
  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var getType = function getType(object) {
    var label = 'é';
    console.log(object);
    if (object.greater_than === true) label = 'maior que';
    if (object.less_than === true) label = 'menor que';
    if (object.equal_to === true) label = 'igual a';
    if (object.contains === true) label = 'contém';
    if (object.different_from === true) label = 'diferente de';
    return label;
  };

  var parseDate = function parseDate(val) {
    var date = new Date(val);
    return "".concat(date.getDay(), "-").concat(date.getMonth() + 1, "-").concat(date.getFullYear());
  };

  return {
    getType: getType,
    parseDate: parseDate,
    open: open,
    setOpen: setOpen
  };
}

var css_248z$v = "@import '../../../misc/theme/styles.module.css';\r\n\r\n\r\n.Field-module_activeFiltersContainer__1LqJs{\r\n    height: auto;\r\n    max-height: 100px;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    gap: 8px;\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    max-width: 100%;\r\n    padding: 8px 0;\r\n    width: 100%;\r\n}\r\n\r\n.Field-module_modalWrapper__3alrc {\r\n    height: 50vh;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n\r\n    padding: 16px;\r\n    width: 100%;\r\n    background: var(--mfc-background-primary);\r\n    border-radius: 8px 8px 0 0;\r\n\r\n    display: flex;\r\n    gap: 16px;\r\n\r\n}\r\n\r\n.Field-module_overflow__3W_qu {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n\r\n.Field-module_filter__23s4g {\r\n\r\n\r\n    background-color: var(--mfc-background-primary);\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    color: var(--mfc-color-secondary);\r\n    font-size: .85rem;\r\n\r\n    user-select: none;\r\n    padding: 4px;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 4px;\r\n    border-radius: 5px;\r\n\r\n    height: 30px;\r\n    width: fit-content;\r\n    cursor: pointer;\r\n\r\n    transition: 150ms linear;\r\n}\r\n\r\n.Field-module_container__3o_Am {\r\n    position: relative;\r\n    width: 40%;\r\n    border-radius: 5px;\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    padding: 8px;\r\n    display: grid;\r\n\r\n    align-content: space-between;\r\n}\r\n\r\n.Field-module_header__CqM1m {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    font-size: 1.2rem;\r\n    color: var(--mfc-color-secondary);\r\n    height: 32px;\r\n    font-weight: bold;\r\n    font-family: \"Roboto\";\r\n}\r\n\r\n.Field-module_fields__a8JMo {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    gap: 4px;\r\n}\r\n\r\n\r\n.Field-module_button__L_zoF {\r\n    padding: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.Field-module_filters__2yN-6 {\r\n\r\n\r\n    width: 100%;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    background: var(--mfc-background-secondary);\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    padding: 8px;\r\n\r\n    overflow-y: auto;\r\n    align-items: flex-start;\r\n    align-content: flex-start;\r\n    gap: 8px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.Field-module_filterButton__sFD04 {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    padding: 24px 16px;\r\n    gap: 16px;\r\n    background: var(--mfc-background-primary);\r\n    width: calc(33.333% - 6px);\r\n}\r\n/*.filterButton[data-highlight]:active {*/\r\n/*    opacity: .7;*/\r\n/*}*/";
var styles$s = {"activeFiltersContainer":"Field-module_activeFiltersContainer__1LqJs","modalWrapper":"Field-module_modalWrapper__3alrc","overflow":"Field-module_overflow__3W_qu","filter":"Field-module_filter__23s4g","container":"Field-module_container__3o_Am","header":"Field-module_header__CqM1m","fields":"Field-module_fields__a8JMo","button":"Field-module_button__L_zoF","filters":"Field-module_filters__2yN-6","filterButton":"Field-module_filterButton__sFD04"};
styleInject(css_248z$v);

var css_248z$u = ".Input-module_fieldsContainer__EoW_4 {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    height: auto;\n    overflow-x: visible;\n}\n\n\n.Input-module_inputContainer__3Jx-t {\n    background: transparent;\n\n    border-radius: 5px;\n    border: var(--mfc-border-primary) 1px solid;\n    box-shadow: unset;\n    transition: 150ms ease-in;\n\n    width: 100%;\n    font-family: \"Roboto\";\n\n    outline: none;\n    padding: 5px;\n    font-size: 1rem;\n    margin: unset;\n    box-sizing: border-box;\n    color: var(--mfc-color-secondary);\n}\n\n.Input-module_inputContainer__3Jx-t::-webkit-outer-spin-button,\n.Input-module_inputContainer__3Jx-t::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n\n.Input-module_inputContainer__3Jx-t[type=number] {\n    -moz-appearance: textfield;\n}\n\n.Input-module_inputContainer__3Jx-t:hover, .Input-module_inputContainer__3Jx-t:focus {\n    color: var(--mfc-color-primary);\n    border-color: var(--accent_color);\n}\n\n.Input-module_inputContainer__3Jx-t:disabled {\n    border: var(--mfc-border-primary) 1px solid;\n    /*background: var(--mfc-background-secondary);*/\n    color: var(--mfc-color-quinary);\n}\n\n.Input-module_mask__27obY {\n    z-index: 5;\n\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: 8px;\n    color: var(--mfc-color-secondary);\n    font-family: \"Roboto\";\n    font-size: .95rem;\n\n    max-width: 25%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.Input-module_focus__1hNr4 {\n    background: var(--mfc-background-primary);\n\n    display: flex;\n\n    position: relative;\n    overflow: hidden;\n    height: fit-content;\n\n}\n\n.Input-module_focus__1hNr4::before {\n    content: '';\n\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background:var(--accent_color);\n    opacity: 0;\n}\n\n.Input-module_focus__1hNr4:focus::before, .Input-module_focus__1hNr4:focus-within::before {\n    animation: Input-module_fadeIn__1BfZu 150ms linear forwards 500ms;\n}\n\n@keyframes Input-module_fadeIn__1BfZu {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: .15;\n    }\n}\n\n/*.textArea:hover, .textArea:focus{*/\n/*    border-color: transparent;*/\n/*}*/";
var styles$r = {"fieldsContainer":"Input-module_fieldsContainer__EoW_4","inputContainer":"Input-module_inputContainer__3Jx-t","mask":"Input-module_mask__27obY","focus":"Input-module_focus__1hNr4","fadeIn":"Input-module_fadeIn__1BfZu"};
styleInject(css_248z$u);

var LocalePT = {
  required: 'Este campo é obrigatório.',
  values: 'Selecionados'
};

function ParseCurrency(event) {
  var value = event;
  value = value + '';
  value = parseInt(value.replace(/[\D]+/g, ''));
  value = value + '';
  value = value.replace(/([0-9]{2})$/g, ".$1");
  return value;
}

var css_248z$t = "\r\n.Shared-module_wrapper__184dI {\r\n    --accent_color: #0095ff;\r\n\r\n    transition: 150ms linear;\r\n    height: fit-content;\r\n\r\n    outline: transparent 1px solid;\r\n    border-radius: 5px;\r\n}\r\n\r\n.Shared-module_secondaryVariant__JSqkU {\r\n    --accent_color: #ff5555;\r\n}\r\n\r\n\r\n.Shared-module_wrapper__184dI:hover, .Shared-module_wrapper__184dI:focus-within, .Shared-module_wrapper__184dI[data-highlight], .Shared-module_wrapper__184dI:active {\r\n    outline: var(--accent_color) 1px solid;\r\n}\r\n\r\n.Shared-module_wrapper__184dI[data-disabled], .Shared-module_wrapper__184dI:disabled {\r\n    outline: transparent 1px solid;\r\n}\r\n\r\n\r\n.Shared-module_labelContainer__3uQR- {\r\n    transition: 200ms ease-in-out;\r\n\r\n    color: var(--mfc-color-secondary);\r\n    /*font-weight: 600;*/\r\n    font-size: .8rem;\r\n    margin-top: auto;\r\n    user-select: none;\r\n    font-family: \"Roboto\";\r\n    text-transform: capitalize;\r\n\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: center;\r\n\r\n    gap: 6px;\r\n}\r\n\r\n.Shared-module_overflow__2coWY{\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    max-width: 75%;\r\n    overflow: hidden;\r\n}\r\n.Shared-module_alertLabel__KuMWx {\r\n    color: var(--mfc-color-quaternary);\r\n    font-family: \"Roboto\";\r\n    margin-left: auto;\r\n    font-size: .75rem;\r\n    user-select: none;\r\n\r\n}\r\n.Shared-module_helperText__2Ugyl{\r\n    transition: 150ms linear;\r\n    color: #FFAC3E;\r\n    cursor: help;\r\n}\r\n.Shared-module_helperText__2Ugyl:hover{\r\n    color: #0095ff;\r\n}";
var shared$2 = {"wrapper":"Shared-module_wrapper__184dI","secondaryVariant":"Shared-module_secondaryVariant__JSqkU","labelContainer":"Shared-module_labelContainer__3uQR-","overflow":"Shared-module_overflow__2coWY","alertLabel":"Shared-module_alertLabel__KuMWx","helperText":"Shared-module_helperText__2Ugyl"};
styleInject(css_248z$t);

function TextField(props) {
  var lang = LocalePT;
  var maskEndRef = React$1.useRef();
  var maskStartRef = React$1.useRef();
  var ref = React$1.useRef();
  React$1.useEffect(function () {
    if (props.maskStart) ref.current.style.paddingLeft = maskStartRef.current.offsetWidth + 12 + 'px';
    if (props.maskEnd) ref.current.style.paddingRight = maskEndRef.current.offsetWidth + 12 + 'px';
  }, [props.maskStart, props.maskEnd]);

  var content = function content(value) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      style: {
        position: 'relative',
        width: '100%'
      }
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$r.mask,
      ref: maskStartRef
    }, props.maskStart), /*#__PURE__*/React__default["default"].createElement("input", {
      disabled: props.disabled,
      lang: '',
      placeholder: props.placeholder,
      type: props.type !== 'password' ? props.type : !props.visible ? 'password' : 'text',
      value: value,
      ref: ref,
      className: styles$r.inputContainer,
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
      className: styles$r.mask,
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
          className: styles$r.inputContainer,
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
        return content(props.value ? props.value : '');

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

  var color = React$1.useMemo(function () {
    if (props.colorVariant === 'secondary') return {
      className: shared$2.secondaryVariant,
      color: '#ff5555'
    };else return {
      className: undefined,
      color: '#0095ff'
    };
  }, [props.colorVariant]);
  var valid = React$1.useMemo(function () {
    return props.value && props.value.toString().length > 0;
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
    className: shared$2.labelContainer,
    style: {
      visibility: valid ? 'visible' : 'hidden',
      opacity: valid ? '1' : '0'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.overflow
  }, props.label), props.helperText ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.helperText
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontSize: '1rem'
    },
    className: "material-icons-round"
  }, "info"), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: props.helperText,
    align: 'start'
  })) : null), /*#__PURE__*/React__default["default"].createElement("div", {
    className: [color.className, shared$2.wrapper, styles$r.focus].join(' '),
    "data-disabled": props.disabled ? props.disabled : undefined
  }, getField(), /*#__PURE__*/React__default["default"].createElement(Ripple, {
    opacity: .15,
    accentColor: color.color,
    disabled: props.disabled
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.alertLabel,
    style: {
      color: !valid ? '#ff5555' : undefined,
      visibility: props.required ? 'visible' : 'hidden',
      display: props.noMargin && !props.required ? 'none' : undefined
    }
  }, lang.required));
}
TextField.propTypes = {
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

var css_248z$s = "@import \"../../../misc/theme/styles.module.css\";\n\n.DateField-module_fieldsContainer__18OUu {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 10px;\n    height: 56px;\n    border-radius: 5px;\n    border: var(--mfc-border-primary) 1px solid;\n    color: var(--mfc-color-tertiary);\n    background: var(--mfc-background-primary);\n    position: relative;\n    overflow: hidden;\n\n    --delay: 0;\n}\n\n.DateField-module_fieldsContainer__18OUu:hover {\n    --delay: 500ms;\n}\n\n.DateField-module_fieldsContainer__18OUu::after {\n    position: absolute;\n    content: '';\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: var(--color);\n    opacity: 0;\n    transition: 150ms linear var(--delay);\n}\n\n.DateField-module_fieldsContainer__18OUu:disabled::after {\n    content: none;\n}\n\n.DateField-module_fieldsContainer__18OUu:focus-within::after, .DateField-module_fieldsContainer__18OUu:focus-within::after {\n    opacity: .15;\n}\n\n\n.DateField-module_inputContainer__3Jx_6 {\n    text-align: center;\n    border: none;\n    box-shadow: unset;\n\n    background: var(--mfc-background-primary);\n    font-family: \"Roboto\";\n    height: 100%;\n    width: 30px;\n    outline: none;\n    font-size: 1rem;\n\n    color: var(--mfc-color-secondary);\n}\n\n.DateField-module_inputContainer__3Jx_6::-webkit-outer-spin-button,\n.DateField-module_inputContainer__3Jx_6::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n/* Firefox */\n.DateField-module_inputContainer__3Jx_6[type=number] {\n    -moz-appearance: textfield;\n}\n\n.DateField-module_buttonContainer__37d09 {\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    height: 35px;\n    width: 35px;\n    margin-right: 8px;\n}\n\n\n\n.DateField-module_container__11emn {\n    height: 100px;\n    display: grid;\n    gap: 4px;\n\n}\n\n.DateField-module_divider__18rCE {\n    width: 1px;\n    height: 20px;\n    background: var(--mfc-border-secondary);\n}\n\n.DateField-module_calendar__2GTEw {\n    width: 350px;\n\n    background: var(--mfc-background-primary);\n    border-radius: 8px;\n    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\n    height: 223px;\n    overflow-y: auto;\n\n}\n\n.DateField-module_monthContainer__3K4Sw {\n    position: sticky;\n    top: 0;\n    background: var(--mfc-background-primary);\n    z-index: 999;\n    font-family: \"Roboto\";\n    font-weight: bold;\n    font-size: .9rem;\n    height: 45px;\n    user-select: none;\n\n    transition: 150ms linear;\n\n    padding: 8px 4px;\n    color: var(--mfc-color-secondary);\n    width: 100%;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.DateField-module_activeContainer__2lxhB {\n    background: var(--mfc-background-quaternary);\n    color: #0095ff;\n}\n\n.DateField-module_daysContainer__2DuT9 {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 7.45px;\n    width: 100%;\n    padding: 8px;\n    overflow: auto;\n}\n\n.DateField-module_dayContainer__2D1tX {\n    height: 35px;\n    width: 35px;\n    background: var(--mfc-background-primary);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    text-align: center;\n\n    font-size: .85rem;\n    font-weight: bold;\n    font-family: \"Roboto\";\n    color: var(--mfc-color-tertiary);\n    border-radius: 8px;\n    border: transparent 2px solid;\n\n    cursor: pointer;\n    transition: 150ms linear;\n}\n\n.DateField-module_dayContainer__2D1tX:hover {\n    color: #0095ff;\n    border: rgba(0, 149, 255, .5) 2px solid;\n}\n\n.DateField-module_dayContainer__2D1tX:active {\n    background: var(--mfc-background-quaternary);\n\n    color: #0095ff;\n    border: rgba(0, 149, 255, .5) 2px solid;\n}\n\n.DateField-module_currentDate__JD8r5 {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    font-size: .8rem;\n    font-weight: normal;\n    color: var(--mfc-color-tertiary);\n}";
var styles$q = {"fieldsContainer":"DateField-module_fieldsContainer__18OUu","inputContainer":"DateField-module_inputContainer__3Jx_6","buttonContainer":"DateField-module_buttonContainer__37d09","container":"DateField-module_container__11emn","divider":"DateField-module_divider__18rCE","calendar":"DateField-module_calendar__2GTEw","monthContainer":"DateField-module_monthContainer__3K4Sw","activeContainer":"DateField-module_activeContainer__2lxhB","daysContainer":"DateField-module_daysContainer__2DuT9","dayContainer":"DateField-module_dayContainer__2D1tX","currentDate":"DateField-module_currentDate__JD8r5"};
styleInject(css_248z$s);

var css_248z$r = "@import \"../../../misc/theme/styles.module.css\";\n\n.FloatingBox-module_selectBox__3cX-u {\n    transition: 150ms ease-in-out;\n    position: absolute;\n    /*transform: translateY(-50%);*/\n    top: calc(100% - 16px);\n    left: 0;\n    z-index: 999;\n\n\n}";
var styles$p = {"selectBox":"FloatingBox-module_selectBox__3cX-u"};
styleInject(css_248z$r);

function FloatingBox(props) {
  var ref = React$1.useRef();

  var handleMouseDown = function handleMouseDown(event) {
    if (props.open && !document.elementsFromPoint(event.clientX, event.clientY).includes(ref.current)) props.setOpen(false);
  };

  React$1.useEffect(function () {
    document.addEventListener('mousedown', handleMouseDown);
    return function () {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [props.open]);
  React$1.useEffect(function () {
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
    className: styles$p.selectBox,
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

var NAMES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
function useDate(value, pattern, handleChange) {
  var _useState = React$1.useState({
    year: new Date().getFullYear()
  }),
      _useState2 = _slicedToArray(_useState, 2),
      parsedDate = _useState2[0],
      setDate = _useState2[1];

  var calendar = React$1.useMemo(function () {
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

  React$1.useEffect(function () {
    if (value) setDate(splitDate(value));
  }, [value]);

  var _useState3 = React$1.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      initialized = _useState4[0],
      setInitialized = _useState4[1];

  var _useState5 = React$1.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      changed = _useState6[0],
      setChanged = _useState6[1];

  var parseDate = function parseDate(day, month, year) {
    return pattern.replace('dd', day < 10 ? '0' + day : day).replace('mm', month < 10 ? '0' + month : month).replace('yyyy', year);
  };

  React$1.useEffect(function () {
    var timestamp = Date.parse(value);
    var parsed = new Date(value);
    parsed = !isNaN(timestamp) ? "".concat(parsed.getFullYear(), "/").concat(parsed.getMonth() + 1, "/").concat(parsed.getDate()) : parsed.toLocaleDateString();
    var date = "".concat(parsedDate.year, "/").concat(parsedDate.month, "/").concat(parsedDate.day);

    if (!isNaN(timestamp) && parsed !== date && !initialized) {
      setInitialized(true);
      var d = new Date(value);
      setDate(splitDate(parseDate(d.getDate() + 1, d.getMonth() + 1, d.getFullYear())));
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

  var _useState = React$1.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var pattern = React$1.useMemo(function () {
    if (props.pattern) return props.pattern;else return 'dd/mm/yyyy';
  }, [props.pattern]);

  var _useDate = useDate(props.value, pattern),
      date = _useDate.date,
      calendar = _useDate.calendar,
      initialized = _useDate.initialized,
      setChanged = _useDate.setChanged,
      changed = _useDate.changed,
      parseDate = _useDate.parseDate;

  var ref = React$1.useRef();

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
    mask: pattern.replaceAll('y', '9').replaceAll('d', '9').replaceAll('m', '9'),
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
    className: styles$q.calendar
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$q.monthContainer
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    className: styles$q.buttonContainer,
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
    className: styles$q.currentDate
  }, /*#__PURE__*/React__default["default"].createElement("div", null, !date.month || date.month > 12 || date.month < 1 ? calendar[new Date().getMonth()].month : calendar[date.month - 1].month), "-", /*#__PURE__*/React__default["default"].createElement("div", null, !date.year ? new Date().getFullYear() : date.year)), /*#__PURE__*/React__default["default"].createElement(Button, {
    className: styles$q.buttonContainer,
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
    className: styles$q.daysContainer
  }, getDays(!date.month || date.month > 12 || date.month < 1 ? new Date().getMonth() : date.month).map(function (e) {
    return e;
  })))));
}
DateField.propTypes = {
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

var css_248z$q = "@import '../../../misc/theme/styles.module.css';\n\n\n.Header-module_wrapper__2bhrC {\n\n    border: var(--mfc-border-primary) 1px solid;\n    transition: 250ms ease-in;\n    box-shadow: var(--mfc-box-shadow-primary) 0 2px 5px 1px;\n    background: var(--mfc-background-primary);\n    border-radius: 5px;\n    position: sticky;\n    top: 0;\n    z-index: 50;\n    height: fit-content;\n\n    max-width: 100%;\n    /*height: ;*/\n    overflow: visible;\n    display: grid;\n}\n\n.Header-module_dropdownLabel__1vYFA {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    padding: 0 10px;\n\n    /*font-size: .9rem;*/\n    font-family: \"Roboto\";\n}\n\n.Header-module_header__ltUNA {\n\n    position: relative;\n\n    display: flex;\n    height: fit-content;\n    justify-content: space-between;\n    width: 100%;\n    padding: 8px;\n    font-family: \"Roboto\";\n    font-size: 1.2rem;\n\n    font-weight: 600;\n    color: var(--mfc-color-secondary);\n\n}\n\n.Header-module_filter__2RF8V {\n    user-select: none;\n    outline: none;\n    background-color: #0095ff;\n    color: white;\n    border: none;\n    padding: 4px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 4px;\n    border-radius: 5px;\n\n    height: 30px;\n    width: fit-content;\n    cursor: pointer;\n\n    transition: 150ms linear;\n}\n\n.Header-module_filter__2RF8V:hover {\n    opacity: .9;\n}\n\n.Header-module_filter__2RF8V:active {\n    opacity: .7;\n    box-shadow: none;\n}\n\n\n.Header-module_overflow__fE49E {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n\n.Header-module_fieldWrapper__1rgwM {\n    display: grid;\n    gap: 16px;\n    height: fit-content;\n\n}\n\n.Header-module_selectWrapper__3Nmlr {\n    display: flex;\n    gap: 8px;\n    font-size: .9rem;\n    width: 50%;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.Header-module_button__8iL-5 {\n\n    height: 30px;\n    padding: 4px 8px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n}";
var styles$o = {"wrapper":"Header-module_wrapper__2bhrC","dropdownLabel":"Header-module_dropdownLabel__1vYFA","header":"Header-module_header__ltUNA","filter":"Header-module_filter__2RF8V","overflow":"Header-module_overflow__fE49E","fieldWrapper":"Header-module_fieldWrapper__1rgwM","selectWrapper":"Header-module_selectWrapper__3Nmlr","button":"Header-module_button__8iL-5"};
styleInject(css_248z$q);

var css_248z$p = "@import \"../../../misc/theme/styles.module.css\";\n\n\n.Checkbox-module_container__1Zcqj{\n    outline: none;\n\n    border: var(--mfc-color-tertiary) 1px solid;\n    width: 17px;\n    height: 17px;\n\n    border-radius: 50%;\n    background: transparent;\n    transition: 150ms linear;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n}\n\n.Checkbox-module_container__1Zcqj:hover{\n    border: #0095ff 1px solid;\n}\n.Checkbox-module_container__1Zcqj:active{\n    background: var(--mfc-background-quaternary);\n    border: #0095ff 1px solid;\n}\n.Checkbox-module_container__1Zcqj:disabled{\n    background: transparent;\n    border-color: var(--mfc-color-quinary);\n    cursor: unset;\n}\n\n.Checkbox-module_wrapper__1BTRc{\n\n\n\n    border: var(--mfc-border-primary) 1px solid;\n    border-radius: 5px;\n    padding: 8px;\n    width: fit-content;\n}\n.Checkbox-module_wrapperChildren__32wIY{\n    display: grid;\n    gap: 8px;\n}";
var styles$n = {"container":"Checkbox-module_container__1Zcqj","wrapper":"Checkbox-module_wrapper__1BTRc","wrapperChildren":"Checkbox-module_wrapperChildren__32wIY"};
styleInject(css_248z$p);

function Checkbox(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      opacity: props.disabled ? '.8' : 1
    }
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: styles$n.container,
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

var ACTIONS = {
  PUSH: '1',
  EMPTY: '2'
};

function makeId() {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;

  for (var i = 0; i < 24; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function dataReducer(currentState, action) {
  switch (action.type) {
    case ACTIONS.EMPTY:
      {
        return [];
      }

    case ACTIONS.PUSH:
      {
        if (Array.isArray(action.payload)) {
          var data = _toConsumableArray(currentState).map(function (e) {
            return e.data;
          });

          var value = _toConsumableArray(new Set([].concat(_toConsumableArray(data), _toConsumableArray(action.payload))));

          value = value.map(function (e) {
            return {
              id: makeId(),
              data: e
            };
          });
          return value;
        } else return currentState;
      }

    default:
      return currentState;
  }
}

var init = function init(e) {
  return e;
};

function useQuery(props) {
  var _useReducer = React$1.useReducer(dataReducer, [], init),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      data = _useReducer2[0],
      dispatchData = _useReducer2[1];

  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = React$1.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      currentPage = _useState4[0],
      setCurrentPage = _useState4[1];

  var _useState5 = React$1.useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      filters = _useState6[0],
      setFilters = _useState6[1];

  var _useState7 = React$1.useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      sorts = _useState8[0],
      setSorts = _useState8[1];

  var _useState9 = React$1.useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      hasMore = _useState10[0],
      setHasMore = _useState10[1];

  var fetchParams = React$1.useCallback(function () {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    var pack = {
      page: page !== undefined ? page : currentPage,
      quantity: props.fetchSize,
      filters: _toConsumableArray(filters),
      sorts: _toConsumableArray(sorts)
    };
    if (typeof props.parsePackage === 'function') pack = props.parsePackage(pack);
    pack.filters = JSON.stringify(pack.filters);
    pack.sorts = JSON.stringify(pack.sorts);
    return {
      method: 'GET',
      headers: _objectSpread2(_objectSpread2({}, props.headers), {}, {
        'content-type': 'application/json'
      }),
      url: props.url,
      params: pack
    };
  }, [filters, sorts, props]);
  var fetchData = React$1.useCallback(function () {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    setLoading(true);
    var params = fetchParams(page);
    axios__default["default"](params).then(function (res) {
      dispatchData({
        type: ACTIONS.PUSH,
        payload: res.data
      });
      setHasMore(res.data.length > 0);
      setLoading(false);
    })["catch"](function () {
      return null;
    });
  }, [props, loading, hasMore, data]);
  React$1.useEffect(function () {
    if (currentPage > 0) fetchData(currentPage);
  }, [currentPage]);
  React$1.useEffect(function () {
    clean();
  }, [filters, sorts]);

  var clean = function clean() {
    dispatchData({
      type: ACTIONS.EMPTY
    });
    setHasMore(false);
    setCurrentPage(0);
    fetchData(0);
  };

  return {
    data: data,
    filters: filters,
    setFilters: setFilters,
    sorts: sorts,
    setSorts: setSorts,
    setCurrentPage: setCurrentPage,
    currentPage: currentPage,
    hasMore: hasMore,
    loading: loading,
    clean: clean
  };
}
useQuery.propTypes = {
  url: PropTypes__default["default"].string.isRequired,
  headers: PropTypes__default["default"].object,
  parsePackage: PropTypes__default["default"].func,
  fetchSize: PropTypes__default["default"].number
};

function useFilter(filter, setFilter, setSelectorOpen, selectorOpen) {
  var _useState = React$1.useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      onInput = _useState2[0],
      setOnInput = _useState2[1];

  var _useState3 = React$1.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      changed = _useState4[0],
      setChanged = _useState4[1];

  var query = React$1.useMemo(function () {
    console.log(filter, 'here on memo');
    return filter !== null && filter !== void 0 && filter.query ? filter.query : {};
  }, [filter]);
  var hook = useQuery(query);

  var _handleChange = function handleChange(value) {
    setFilter(function (prevState) {
      var _query$keys$;

      if (filter.type === 'object') return _objectSpread2(_objectSpread2({}, prevState), {}, {
        value: value,
        objectLabel: value[query === null || query === void 0 ? void 0 : (_query$keys$ = query.keys[0]) === null || _query$keys$ === void 0 ? void 0 : _query$keys$.key]
      });else return _objectSpread2(_objectSpread2({}, prevState), {}, {
        value: value
      });
    });
    setChanged(true);
  };

  var getField = React$1.useCallback(function () {
    var field;
    var baseProps = {
      type: filter.type,
      key: filter.key,
      label: filter.label
    };

    var dateNumber = function dateNumber(val) {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: styles$o.fieldWrapper
      }, val, /*#__PURE__*/React__default["default"].createElement("div", {
        className: styles$o.selectWrapper
      }, /*#__PURE__*/React__default["default"].createElement(Checkbox, {
        checked: filter.greater_than,
        handleCheck: function handleCheck() {
          setFilter(function (prevState) {
            return _objectSpread2(_objectSpread2({}, baseProps), {
              value: prevState.value,
              greater_than: true
            });
          });
        }
      }), "Maior que."), /*#__PURE__*/React__default["default"].createElement("div", {
        className: styles$o.selectWrapper
      }, /*#__PURE__*/React__default["default"].createElement(Checkbox, {
        checked: filter.less_than,
        handleCheck: function handleCheck() {
          setFilter(function (prevState) {
            return _objectSpread2(_objectSpread2({}, baseProps), {
              value: prevState.value,
              less_than: true
            });
          });
        }
      }), "Menor que."), /*#__PURE__*/React__default["default"].createElement("div", {
        className: styles$o.selectWrapper
      }, /*#__PURE__*/React__default["default"].createElement(Checkbox, {
        checked: filter.equal_to,
        handleCheck: function handleCheck() {
          setFilter(function (prevState) {
            return _objectSpread2(_objectSpread2({}, baseProps), {
              value: prevState.value,
              equal_to: true
            });
          });
        }
      }), "Iqual a"));
    };

    switch (filter.type) {
      case 'string':
        {
          field = /*#__PURE__*/React__default["default"].createElement("div", {
            className: styles$o.fieldWrapper
          }, /*#__PURE__*/React__default["default"].createElement(TextField, {
            label: filter.label,
            width: '100%',
            disabled: false,
            handleChange: function handleChange(value) {
              return _handleChange(value.target.value);
            },
            value: filter.value,
            placeholder: filter.label
          }), /*#__PURE__*/React__default["default"].createElement("div", {
            className: styles$o.selectWrapper
          }, /*#__PURE__*/React__default["default"].createElement(Checkbox, {
            checked: filter.equal_to,
            handleCheck: function handleCheck() {
              setFilter(function (prevState) {
                return _objectSpread2(_objectSpread2({}, baseProps), {
                  value: prevState.value,
                  equal_to: true
                });
              });
            }
          }), "\xC9 igual a."), /*#__PURE__*/React__default["default"].createElement("div", {
            className: styles$o.selectWrapper
          }, /*#__PURE__*/React__default["default"].createElement(Checkbox, {
            checked: filter.different_from,
            handleCheck: function handleCheck() {
              setFilter(function (prevState) {
                return _objectSpread2(_objectSpread2({}, baseProps), {
                  value: prevState.value,
                  different_from: true
                });
              });
            }
          }), "N\xE3o \xE9 (case sensitive)."), /*#__PURE__*/React__default["default"].createElement("div", {
            className: styles$o.selectWrapper
          }, /*#__PURE__*/React__default["default"].createElement(Checkbox, {
            checked: filter.contains,
            handleCheck: function handleCheck() {
              setFilter(function (prevState) {
                return _objectSpread2(_objectSpread2({}, baseProps), {
                  value: prevState.value,
                  contains: true
                });
              });
            }
          }), "Cont\xE9m."));
          break;
        }

      case 'number':
        {
          field = dateNumber( /*#__PURE__*/React__default["default"].createElement(TextField, {
            label: filter.label,
            width: '100%',
            disabled: false,
            required: false,
            handleChange: function handleChange(value) {
              return _handleChange(value.target.value);
            },
            type: 'number',
            placeholder: filter.label,
            value: filter.value
          }));
          break;
        }

      case 'object':
        {
          field = /*#__PURE__*/React__default["default"].createElement(Selector, {
            keys: query && query.keys ? query.keys : [],
            hook: hook,
            open: selectorOpen,
            onClick: function onClick() {
              return setSelectorOpen(true);
            },
            handleClose: function handleClose() {
              return setSelectorOpen(false);
            },
            handleChange: function handleChange(entity) {
              return _handleChange(entity);
            },
            value: filter.value,
            title: filter.label,
            required: false,
            placeholder: filter.label,
            width: '100%'
          });
          break;
        }

      case 'date':
        {
          field = dateNumber( /*#__PURE__*/React__default["default"].createElement(DateField, {
            label: filter.label,
            width: '100%',
            disabled: false,
            required: false,
            handleChange: function handleChange(value) {
              return _handleChange(value);
            },
            value: filter.value
          }));
          break;
        }
    }

    return field;
  }, [filter, hook]);
  return {
    getField: getField,
    changed: changed,
    setChanged: setChanged,
    onInput: onInput,
    setOnInput: setOnInput
  };
}

function Field(props) {
  var _useFilter = useFilter(props.selectedField, props.setSelectedField, props.setSelectorOpen, props.selectorOpen),
      getField = _useFilter.getField,
      changed = _useFilter.changed;

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$s.container
  }, props.selectedField !== null && props.selectedField !== undefined ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, getField(), /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      display: 'flex',
      gap: '4px',
      width: '100%',
      height: '35px'
    }
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    styles: {
      width: '50%',
      padding: '4px'
    },
    variant: 'filled',
    color: 'secondary',
    onClick: function onClick() {
      props.setSelectedField(null);
    }
  }, "Cancelar"), /*#__PURE__*/React__default["default"].createElement(Button, {
    styles: {
      padding: '4px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '4px'
    },
    variant: 'filled',
    disabled: !changed,
    onClick: function onClick() {
      return props.applyFilter();
    }
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "material-icons-round"
  }, "done"), "Aplicar"))) : /*#__PURE__*/React__default["default"].createElement(Empty, {
    customLabel: 'Nada selecionado'
  }));
}
Field.propTypes = {
  applyFilter: PropTypes__default["default"].func,
  keys: PropTypes__default["default"].arrayOf(keyTemplate).isRequired,
  selectorOpen: PropTypes__default["default"].bool,
  setSelectorOpen: PropTypes__default["default"].func,
  selectedField: PropTypes__default["default"].object,
  setSelectedField: PropTypes__default["default"].func
};

function Filter(props) {
  var _useState = React$1.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      selectedFilter = _useState2[0],
      setSelectedFilter = _useState2[1];

  var _useState3 = React$1.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      selectorOpen = _useState4[0],
      setSelectorOpen = _useState4[1];

  var getField = function getField(e) {
    return {
      icon: getIcon(e.type),
      label: /*#__PURE__*/React__default["default"].createElement("div", {
        style: {
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          maxWidth: '100%'
        }
      }, e.label, /*#__PURE__*/React__default["default"].createElement(ToolTip, {
        content: e.label
      })),
      onClick: function onClick() {
        var op = e.type !== 'object' ? e.type === 'string' ? {
          contains: true
        } : {
          greater_than: true
        } : {};
        setSelectedFilter(_objectSpread2(_objectSpread2({}, e), op));
      }
    };
  };

  var getIcon = function getIcon(type) {
    var icon;

    switch (type) {
      case 'date':
        {
          icon = /*#__PURE__*/React__default["default"].createElement("span", {
            className: "material-icons-round",
            style: {
              fontSize: '1.2rem'
            }
          }, "calendar_today");
          break;
        }

      case 'string':
        {
          icon = /*#__PURE__*/React__default["default"].createElement("span", {
            className: "material-icons-round",
            style: {
              fontSize: '1.2rem'
            }
          }, "text_fields");
          break;
        }

      case 'object':
        {
          icon = /*#__PURE__*/React__default["default"].createElement("span", {
            className: "material-icons-round",
            style: {
              fontSize: '1.2rem'
            }
          }, "link");
          break;
        }

      default:
        {
          icon = /*#__PURE__*/React__default["default"].createElement("span", {
            className: "material-icons-round",
            style: {
              fontSize: '1.2rem'
            }
          }, "category");
          break;
        }
    }

    return icon;
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Modal, {
    variant: 'fill',
    blurIntensity: .05,
    open: props.open,
    className: styles$s.modalWrapper,
    handleClose: function handleClose(event) {
      if (!selectedFilter || !selectorOpen) {
        props.setOpen(false);
        setSelectedFilter(null);
      }
    },
    animationStyle: 'slide-bottom'
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$s.filters
  }, props.keys.map(function (k, i) {
    var button = getField(k);
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: i + '-filter'
    }, /*#__PURE__*/React__default["default"].createElement(Button, {
      highlight: (selectedFilter === null || selectedFilter === void 0 ? void 0 : selectedFilter.key) === k.key,
      onClick: button.onClick,
      className: styles$s.filterButton,
      variant: "minimal-horizontal"
    }, button.icon, button.label));
  })), /*#__PURE__*/React__default["default"].createElement(Field, {
    setFilters: props.setFilters,
    filters: props.filters,
    selectedField: selectedFilter,
    setSelectedField: setSelectedFilter,
    selectorOpen: selectorOpen,
    keys: props.keys,
    setSelectorOpen: setSelectorOpen,
    applyFilter: function applyFilter() {
      props.setOpen(false);
      props.setFilters(function (prevState) {
        return [].concat(_toConsumableArray(prevState), [selectedFilter]);
      });
      setSelectedFilter(null);
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$s.activeFiltersContainer
  }, props.filters.map(function (e, i) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$s.filter
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$s.overflow,
      style: {
        fontSize: '.75rem',
        fontWeight: 'bold'
      }
    }, e.label), /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$s.overflow,
      style: {
        fontSize: '.7rem'
      }
    }, props.getType(e)), /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$s.overflow,
      style: {
        fontSize: '.75rem',
        fontWeight: 'bold'
      }
    }, e.type === 'date' ? props.parseDate(e.value) : e.type === 'object' ? e.objectLabel : e.value), /*#__PURE__*/React__default["default"].createElement(ToolTip, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$s.overflow,
      style: {
        fontSize: '.75rem'
      }
    }, e.label, ":"), /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$s.overflow,
      style: {
        fontWeight: 'normal',
        fontSize: '.7rem'
      }
    }, props.getType(e)), /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$s.overflow,
      style: {
        fontSize: '.75rem'
      }
    }, e.type === 'date' ? props.parseDate(e.value) : e.type === 'object' ? e.objectLabel : e.value)), /*#__PURE__*/React__default["default"].createElement(Button, {
      color: 'secondary',
      onClick: function onClick() {
        var newFilters = _toConsumableArray(props.filters);

        newFilters.splice(i, 1);
        props.setFilters(newFilters);
      },
      className: styles$s.button
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: "material-icons-round",
      style: {
        fontSize: '1.1rem'
      }
    }, "close")));
  })));
}
Filter.propTypes = {
  keys: PropTypes__default["default"].arrayOf(keyTemplate).isRequired,
  open: PropTypes__default["default"].bool,
  setOpen: PropTypes__default["default"].func,
  filters: PropTypes__default["default"].array,
  setFilters: PropTypes__default["default"].func,
  getType: PropTypes__default["default"].func,
  parseDate: PropTypes__default["default"].func
};

function SelectorModal(props) {
  var lastElementRef = useInfiniteScroll(props.hook.setCurrentPage, props.hook.currentPage, props.hook.loading, props.hook.hasMore);

  var _useHeader = useHeader(props.dispatch, props.actions),
      getType = _useHeader.getType,
      parseDate = _useHeader.parseDate,
      open = _useHeader.open,
      setOpen = _useHeader.setOpen;

  React$1.useEffect(function () {
    if (props.open) props.hook.clean();
  }, [props.open]);
  return /*#__PURE__*/React__default["default"].createElement(Modal, {
    open: props.open,
    handleClose: function handleClose() {
      console.log(open);
      if (!open) props.setOpen(false);
    },
    animationStyle: 'slide-right',
    blurIntensity: 0,
    className: styles$u.wrapper
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$u.header
  }, props.label), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$u.headerButtons
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    variant: 'outlined',
    onClick: function onClick() {
      return props.onCreate();
    },
    styles: {
      display: props.createOption === true ? undefined : 'none'
    },
    className: styles$u.headerButton
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "material-icons-outlined"
  }, "add"), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: 'Criar novo'
  })), /*#__PURE__*/React__default["default"].createElement(Button, {
    variant: 'outlined',
    onClick: function onClick() {
      return props.hook.clean();
    },
    className: styles$u.headerButton
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "material-icons-outlined"
  }, "refresh"), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: 'Recarregar dados'
  })), /*#__PURE__*/React__default["default"].createElement(Button, {
    variant: 'outlined',
    onClick: function onClick() {
      return setOpen(true);
    },
    className: styles$u.headerButton
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "material-icons-outlined"
  }, "filter_list"), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: 'Filtros'
  }))), /*#__PURE__*/React__default["default"].createElement(Button, {
    variant: 'outlined',
    onClick: function onClick() {
      props.handleChange(null);
      props.setOpen(false);
    },
    color: "secondary",
    className: styles$u.headerButton,
    disabled: !props.value
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "material-icons-outlined"
  }, "clear_all"), "Limpar selecionado", /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: 'Limpar'
  }))), /*#__PURE__*/React__default["default"].createElement(Filter, {
    keys: props.keys,
    filters: props.hook.filters,
    setFilters: props.hook.setFilters,
    cleanState: props.hook.clean,
    getType: getType,
    open: open,
    setOpen: setOpen,
    parseDate: parseDate
  }), /*#__PURE__*/React__default["default"].createElement(Row$2, {
    main: true,
    disabled: true,
    data: props.value,
    keys: props.keys,
    onDrop: function onDrop(index) {
      if (!isNaN(index)) {
        props.handleChange(props.hook.data[index].data);
        props.setOpen(false);
      }
    }
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$u.divider
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$u.rows
  }, props.hook.data.length === 0 ? /*#__PURE__*/React__default["default"].createElement(Empty, null) : props.hook.data.map(function (e, i) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: e.id + '-selector-modal-row-' + i
    }, /*#__PURE__*/React__default["default"].createElement(Row$2, {
      disabled: false,
      emptyIndicator: false,
      onClick: function onClick() {
        props.handleChange(e.data);
        props.setOpen(false);
      },
      keys: props.keys,
      reference: i === props.hook.data.length - 1 ? lastElementRef : undefined,
      data: e.data,
      index: i,
      identificationKey: props.identificationKey
    }));
  })));
}
SelectorModal.propTypes = {
  data: PropTypes__default["default"].array,
  keys: PropTypes__default["default"].array,
  createOption: PropTypes__default["default"].bool,
  open: PropTypes__default["default"].bool,
  setOpen: PropTypes__default["default"].func,
  cleanState: PropTypes__default["default"].func,
  value: PropTypes__default["default"].object,
  handleChange: PropTypes__default["default"].func,
  label: PropTypes__default["default"].string,
  hook: PropTypes__default["default"].object,
  identificationKey: PropTypes__default["default"].string,
  onCreate: PropTypes__default["default"].func
};

function Selector(props) {
  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = React$1.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openCreate = _useState4[0],
      setOpenCreate = _useState4[1];

  var lang = SelectorsPT;
  var color = React$1.useMemo(function () {
    if (props.colorVariant === 'secondary') return {
      className: shared$2.secondaryVariant,
      color: '#0095ff'
    };else return {
      className: undefined,
      color: '#0095ff'
    };
  }, []);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(SelectorModal, _extends({}, props, {
    open: props.open === true ? props.open : open,
    onCreate: function onCreate() {
      return setOpenCreate(true);
    },
    setOpen: props.handleClose ? props.handleClose : setOpen
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: props.width,
      maxWidth: props.width,
      display: 'grid',
      gap: '4px'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.labelContainer,
    style: {
      visibility: props.value !== null && props.value !== undefined ? 'visible' : 'hidden',
      opacity: props.value !== null && props.value !== undefined ? '1' : '0',
      transition: 'visibility 0.2s ease,opacity 0.2s ease',
      textTransform: 'capitalize'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.overflow
  }, props.label), props.helperText ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.helperText
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: '1rem'
    }
  }, "info"), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: props.helperText,
    align: 'start'
  })) : null), /*#__PURE__*/React__default["default"].createElement("div", {
    className: [shared$2.wrapper, color.className, styles$v.buttonWrapper].join(' '),
    "data-highlight": open ? open : undefined,
    "data-disabled": props.disabled ? props.disabled : undefined
  }, props.value !== null && props.value !== undefined ? /*#__PURE__*/React__default["default"].createElement(Row$2, {
    onClick: function onClick() {
      if (props.onClick) props.onClick();else setOpen(true);
    },
    disabled: props.disabled,
    data: props.value,
    highlight: open,
    keys: props.keys,
    height: props.size === 'small' ? '36px' : '56px'
  }) : /*#__PURE__*/React__default["default"].createElement(Button, {
    disabled: props.disabled,
    highlight: open,
    variant: 'outlined',
    styles: {
      height: props.size === 'small' ? '36px' : '56px',
      overflow: "hidden",
      maxWidth: 'unset',
      marginTop: 'unset',
      zIndex: 5
    },
    color: props.colorVariant === 'secondary' ? 'secondary' : 'primary',
    className: [styles$v.button, shared$2.labelContainer].join(' '),
    onClick: function onClick() {
      if (props.onClick) props.onClick();else setOpen(true);
    }
  }, props.placeholder, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontSize: '1.2rem'
    },
    className: "material-icons-round"
  }, "launch"))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.alertLabel,
    style: {
      color: props.value === null || props.value === undefined ? '#ff5555' : undefined,
      visibility: props.required ? 'visible' : 'hidden'
    }
  }, lang.required)), /*#__PURE__*/React__default["default"].createElement(Modal, {
    open: openCreate,
    handleClose: function handleClose() {
      return setOpenCreate(false);
    },
    animationStyle: 'fade',
    blurIntensity: .1,
    className: styles$v.createModal
  }, typeof props.children === 'function' ? props.children(function () {
    setOpenCreate(false);
    props.hook.clean();
  }) : undefined));
}
Selector.propTypes = {
  helperText: PropTypes__default["default"].string,
  children: PropTypes__default["default"].func,
  onClick: PropTypes__default["default"].func,
  hook: PropTypes__default["default"].object.isRequired,
  label: PropTypes__default["default"].any,
  placeholder: PropTypes__default["default"].any,
  required: PropTypes__default["default"].bool,
  value: PropTypes__default["default"].object,
  handleChange: PropTypes__default["default"].func,
  disabled: PropTypes__default["default"].bool,
  width: PropTypes__default["default"].string,
  createOption: PropTypes__default["default"].bool,
  keys: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    key: PropTypes__default["default"].string.isRequired,
    label: PropTypes__default["default"].string.isRequired,
    type: PropTypes__default["default"].oneOf(['string', 'number', 'object', 'date']),
    maskStart: PropTypes__default["default"].any,
    maskEnd: PropTypes__default["default"].any,
    additionalWidth: PropTypes__default["default"].string
  })).isRequired,
  open: PropTypes__default["default"].bool,
  handleClose: PropTypes__default["default"].func,
  size: PropTypes__default["default"].oneOf(['small', 'default']),
  colorVariant: PropTypes__default["default"].oneOf(['default', 'secondary', 'primary'])
};

var css_248z$o = "@import \"../../../misc/theme/styles.module.css\";\r\n\r\n.Form-module_wrapper__153NP {\r\n\r\n    width: 100%;\r\n    max-height: 100%;\r\n\r\n    overflow-y: auto;\r\n    overflow-x: visible;\r\n    position: relative;\r\n}\r\n\r\n.Form-module_buttonContainer__1aUGJ {\r\n    color: var(--mfc-color-tertiary);\r\n    height: 100%;\r\n\r\n    border-radius: 5px;\r\n    transition: 150ms ease-in-out;\r\n    padding: 4px;\r\n\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n.Form-module_submitButton__3Y6mQ{\r\n    height: 100%;\r\n    border-radius: 5px;\r\n    transition: 150ms ease-in-out;\r\n    padding: 8px 24px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\n.Form-module_divider__3Byas{\r\n    width: 1px;\r\n    height: 75%;\r\n    background: var(--mfc-border-primary);\r\n}\r\n\r\n\r\n.Form-module_header__2ybTo {\r\n    transition: 250ms ease-in;\r\n    box-shadow: var(--mfc-box-shadow-primary) 0 2px 5px 1px;\r\n\r\n\r\n    position: sticky;\r\n    font-family: \"Roboto\";\r\n    top: 0;\r\n    z-index: 50;\r\n    background: var(--mfc-background-primary);\r\n    height: fit-content;\r\n\r\n    display: grid;\r\n    gap: 4px;\r\n\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    padding: 8px;\r\n    border-radius: 5px;\r\n    font-size: 1.05rem;\r\n    font-weight: 600;\r\n\r\n    color: var(--mfc-color-secondary);\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.Form-module_headerContent__3Z2U_ {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\n.Form-module_content__2bq-t {\r\n    padding-bottom: 100px;\r\n    display: grid;\r\n    gap: 8px;\r\n}\r\n\r\n.Form-module_buttons__IkVi0 {\r\n    padding: 8px 0 0 0;\r\n    border-top: var(--mfc-border-primary) 1px solid;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    gap: 8px;\r\n    align-items: center\r\n}";
var shared$1 = {"wrapper":"Form-module_wrapper__153NP","buttonContainer":"Form-module_buttonContainer__1aUGJ","submitButton":"Form-module_submitButton__3Y6mQ","divider":"Form-module_divider__3Byas","header":"Form-module_header__2ybTo","headerContent":"Form-module_headerContent__3Z2U_","content":"Form-module_content__2bq-t","buttons":"Form-module_buttons__IkVi0"};
styleInject(css_248z$o);

var EntityLayoutPT = {
  history: 'Histórico de mudanças',
  edit: 'Editar',
  overview: 'Visão geral',
  info: 'Informações',
  create: 'Criar',
  save: 'Salvar'
};

function Header$1(props) {
  var _props$options;

  var lang = EntityLayoutPT;
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
  }, props.submitLabel ? props.submitLabel : props.create ? lang.create : lang.save))), /*#__PURE__*/React__default["default"].createElement("div", {
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
Header$1.propTypes = {
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
  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      disabled = _useState2[0],
      setDisabled = _useState2[1];

  var contentRef = React$1.useRef();
  React$1.useEffect(function () {
    var childNodes = contentRef.current.childNodes;
    var completed = true;
    childNodes.forEach(function (e) {
      completed = completed && JSON.parse(e.getAttribute('data-completed'));
    });
    setDisabled(!completed || !props.hook.changed);
  }); // const {ref, maxHeight} = useMaxHeight()

  var _useState3 = React$1.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      scrolled = _useState4[0],
      setScrolled = _useState4[1];

  return /*#__PURE__*/React__default["default"].createElement("div", {
    onScroll: function onScroll(event) {
      if (event.target.scrollTop > 0) setScrolled(true);else setScrolled(false);
    },
    className: shared$1.wrapper // style={{maxHeight: maxHeight}}
    // ref={ref}

  }, /*#__PURE__*/React__default["default"].createElement(Header$1, _extends({}, props, {
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

var css_248z$n = "\r\n.FormRow-module_wrapper__e-3ms {\r\n\r\n    background: var(--mfc-background-primary);\r\n    border-radius: 5px;\r\n    border: var(--mfc-border-primary) 1px solid;\r\n\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    column-gap: 32px;\r\n    row-gap: 8px;\r\n    width: 100%;\r\n    overflow: visible;\r\n\r\n    padding: 10px;\r\n}\r\n\r\n.FormRow-module_legendContent__31Jgu {\r\n    user-select: none;\r\n    width: 100%;\r\n    height: 35px;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 4px;\r\n}\r\n\r\n.FormRow-module_legend__2iAih {\r\n\r\n    padding-right: 16px;\r\n    font-size: .9rem;\r\n    font-weight: 600;\r\n    color: var(--mfc-color-tertiary);\r\n    padding-left: 0;\r\n}\r\n\r\n\r\n.FormRow-module_indicator__7yoUZ {\r\n    --color: #0095ff;\r\n    width: 2px;\r\n    height: 100%;\r\n    border-radius: 10px;\r\n\r\n    background: var(--color);\r\n}\r\n\r\n.FormRow-module_notCompleted__1Wtn8 {\r\n    --color: #ff5555;\r\n}";
var styles$m = {"wrapper":"FormRow-module_wrapper__e-3ms","legendContent":"FormRow-module_legendContent__31Jgu","legend":"FormRow-module_legend__2iAih","indicator":"FormRow-module_indicator__7yoUZ","notCompleted":"FormRow-module_notCompleted__1Wtn8"};
styleInject(css_248z$n);

function FormRow(props) {
  React$1.useEffect(function () {
    setIndex(Array.prototype.indexOf.call(ref.current.parentNode.children, ref.current) + 1);
  }, []);
  var children = React__default["default"].Children.toArray(props.children);
  var completed = React$1.useMemo(function () {
    var res = true;
    children.forEach(function (e) {
      var isText = typeof e.props.value === 'string' ? e.props.value.length > 0 : true;
      res = res && (!e.props.required || e.props.value !== undefined && e.props.value !== null && isText && e.props.required);
    });
    return res;
  }, [props.children]);

  var _useState = React$1.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = React$1.useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      index = _useState4[0],
      setIndex = _useState4[1];

  var ref = React$1.useRef();
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$m.wrapper,
    ref: ref,
    "data-completed": completed
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$m.legendContent
  }, /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: !completed ? 'Não completo' : 'Completo',
    justify: "start",
    align: 'middle'
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: [styles$m.indicator, !completed ? styles$m.notCompleted : undefined].join(' ')
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
    className: styles$m.legend
  }, props.title ? props.title : 'Procedimento ' + index)), open ? props.children : null);
}
FormRow.propTypes = {
  children: PropTypes__default["default"].node,
  title: PropTypes__default["default"].string
};

var css_248z$m = "@import \"../../misc/theme/styles.module.css\";\n\n.Dropdown-module_wrapper__1Blgv {\n    display: grid;\n    gap: 4px;\n    position: relative;\n    overflow: visible;\n}\n\n\n.Dropdown-module_selectContainer__3u-GM {\n    position: relative;\n    z-index: 5;\n    display: flex;\n    justify-content: flex-start;\n    gap: 4px;\n    align-items: center;\n    transition: 150ms linear;\n    background: var(--mfc-background-primary);\n    width: 100%;\n    padding: 5px;\n    border-radius: 5px;\n}\n.Dropdown-module_selectContainer__3u-GM:hover{\n    border-color: var(--accent-color);\n}\n.Dropdown-module_selectContainer__3u-GM:disabled {\n    border-color: var(--mfc-border-primary);\n    cursor: default;\n    color: var(--mfc-color-quinary);\n}\n\n.Dropdown-module_dropDownContainer__3KRpm {\n    display: grid;\n}\n\n.Dropdown-module_dropDownChoicesContainer__1PZFY {\n    background-color: var(--mfc-background-primary);\n    border-radius: 5px;\n    box-shadow: 0 0 10px 2px rgba(0, 0, 0, .1);\n    width: 100%;\n    max-height: 200px;\n    height: fit-content;\n    overflow: auto;\n\n}\n\n.Dropdown-module_dropDownButton__hsTSD {\n    height: 35px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    text-align: left;\n    font-weight: 600;\n    font-family: \"Roboto\";\n    font-size: .75rem;\n}\n\n.Dropdown-module_overflow__2BgnM {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n}\n\n.Dropdown-module_multiSelectRow__2Zipw {\n    display: flex;\n    user-select: none;\n    overflow: hidden;\n    align-items: center;\n    justify-content: flex-start;\n    height: 40px;\n    background: var(--mfc-background-primary);\n    gap: 8px;\n}\n\n.Dropdown-module_multiSelectRowContent__1ArWF {\n    user-select: none;\n    color: var(--mfc-color-secondary);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    text-align: left;\n    font-weight: 600;\n    font-family: \"Roboto\";\n    font-size: .8rem;\n}\n\n.Dropdown-module_multiSelectRowCheckbox__Qu8ga {\n    cursor: pointer;\n}\n";
var styles$l = {"wrapper":"Dropdown-module_wrapper__1Blgv","selectContainer":"Dropdown-module_selectContainer__3u-GM","dropDownContainer":"Dropdown-module_dropDownContainer__3KRpm","dropDownChoicesContainer":"Dropdown-module_dropDownChoicesContainer__1PZFY","dropDownButton":"Dropdown-module_dropDownButton__hsTSD","overflow":"Dropdown-module_overflow__2BgnM","multiSelectRow":"Dropdown-module_multiSelectRow__2Zipw","multiSelectRowContent":"Dropdown-module_multiSelectRowContent__1ArWF","multiSelectRowCheckbox":"Dropdown-module_multiSelectRowCheckbox__Qu8ga"};
styleInject(css_248z$m);

function DropDownField(props) {
  var _ref$current;

  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var themes = React$1.useContext(ThemeContext);
  var lang = LocalePT;
  var ref = React$1.useRef();
  var selected = React$1.useMemo(function () {
    return props.choices.find(function (e) {
      return e.key === props.value;
    });
  }, [props.value]);
  var color = React$1.useMemo(function () {
    if (props.colorVariant === 'secondary') return {
      className: shared$2.secondaryVariant,
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
    className: styles$l.wrapper
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.labelContainer,
    style: {
      visibility: props.value !== undefined && props.value !== null ? 'visible' : 'hidden',
      opacity: props.value !== undefined && props.value !== null ? '1' : '0'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.overflow
  }, props.label), props.helperText ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.helperText
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontSize: '1rem'
    },
    className: "material-icons-round"
  }, "info"), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: props.helperText,
    align: 'start'
  })) : null), /*#__PURE__*/React__default["default"].createElement("div", {
    className: [shared$2.wrapper, color.className].join(' '),
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
    className: [color.className, styles$l.selectContainer, shared$2.labelContainer].join(' '),
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
    className: styles$l.overflow,
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
    className: styles$l.dropDownChoicesContainer
  }, props.choices.map(function (choice, index) {
    var _themes$theme;

    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: index + '-choice-button'
    }, /*#__PURE__*/React__default["default"].createElement(Button, {
      styles: {
        borderRadius: '0',
        borderTop: index > 0 ? ((_themes$theme = themes.theme) === null || _themes$theme === void 0 ? void 0 : _themes$theme.border0) + ' 1px solid' : 'none'
      },
      highlight: choice.key === props.value,
      onClick: function onClick() {
        props.handleChange(choice.key);
        setOpen(false);
      },
      className: styles$l.dropDownButton
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$l.overflow
    }, choice.value), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
      content: choice.value
    })));
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.alertLabel,
    style: {
      color: props.value === null || props.value === undefined ? '#ff5555' : '#262626',
      visibility: props.required ? 'visible' : 'hidden'
    }
  }, lang.required));
}
DropDownField.propTypes = {
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

function MultiSelectField(props) {
  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var lang = LocalePT;
  var ref = React$1.useRef();

  var _useState3 = React$1.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selected = _useState4[0],
      setSelected = _useState4[1];

  React$1.useEffect(function () {
    if (typeof props.value === 'string' && selected.length === 0 && props.value.length > 0) setSelected(props.value.split('-*/'));else if (props.asArray) setSelected(props.value ? props.value : []);
  }, [props.value]);
  var color = React$1.useMemo(function () {
    if (props.colorVariant === 'secondary') return {
      className: shared$2.secondaryVariant,
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
    className: styles$l.wrapper
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.labelContainer,
    style: {
      visibility: props.value !== undefined && props.value !== null ? 'visible' : 'hidden',
      opacity: props.value !== undefined && props.value !== null ? '1' : '0'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.overflow
  }, props.label), props.helperText ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.helperText
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontSize: '1rem'
    },
    className: "material-icons-round"
  }, "info"), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: props.helperText,
    align: 'start'
  })) : null), /*#__PURE__*/React__default["default"].createElement("div", {
    className: [shared$2.wrapper, color.className].join(' '),
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
    className: [color.className, styles$l.selectContainer, shared$2.labelContainer].join(' '),
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
    className: styles$l.valueContainer
  }, props.asArray ? props.value.length : props.value.split('-*/').length - 1, " - ", lang.values) : props.label)), /*#__PURE__*/React__default["default"].createElement(FloatingBox, {
    open: open,
    setOpen: setOpen,
    reference: ref.current,
    width: '100%'
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$l.dropDownChoicesContainer,
    style: {
      padding: '0 8px'
    }
  }, props.choices.map(function (choice, index) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      style: {
        overflow: "hidden"
      },
      className: styles$l.multiSelectRow,
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
      className: styles$l.multiSelectRowCheckbox,
      checked: selected.includes(choice.key),
      label: /*#__PURE__*/React__default["default"].createElement("div", {
        style: {
          color: choice.color ? choice.color : undefined
        },
        className: styles$l.multiSelectRowContent
      }, choice.value)
    }), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
      content: choice.value,
      align: 'middle',
      justify: 'start'
    }));
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.alertLabel,
    style: {
      color: props.value === null || props.value === undefined ? '#ff5555' : '#262626',
      visibility: props.required ? 'visible' : 'hidden'
    }
  }, lang.required));
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

var css_248z$l = "\r\n.Action-module_buttonWrapper__3MOeL {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    height: 55px;\r\n    overflow: hidden;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 6px;\r\n\r\n\r\n    padding: 0;\r\n    background: transparent;\r\n    outline: none;\r\n    border: none;\r\n\r\n    color: var(--mfc-color-secondary);\r\n\r\n    cursor: pointer;\r\n}\r\n.Action-module_buttonWrapper__3MOeL[data-highlight = 'true']{\r\n    color: #0095ff !important;\r\n}\r\n.Action-module_buttonWrapper__3MOeL[data-highlight = 'true'] .Action-module_iconWrapper__irMuB::after{\r\n    opacity: .15;\r\n}\r\n/*.buttonWrapper[data-highlight = 'true'] .icon > * {*/\r\n/*    font-size: 1.3rem !important;*/\r\n/*}*/\r\n/*.buttonWrapper[data-highlight = 'false'] .icon > * {*/\r\n/*    font-size: 1.5rem !important;*/\r\n/*}*/\r\n\r\n.Action-module_buttonWrapper__3MOeL:active .Action-module_icon__3E4df {\r\n    color: #0095ff;\r\n}\r\n\r\n.Action-module_iconWrapper__irMuB {\r\n    overflow: hidden;\r\n\r\n    width: 100%;\r\n    height: 50%;\r\n    border-radius: 25%/50%;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    padding: 8px 16px;\r\n\r\n    position: relative;\r\n}\r\n\r\n\r\n.Action-module_icon__3E4df {\r\n    transition: 150ms linear !important;\r\n\r\n\r\n    position: relative;\r\n    z-index: 2;\r\n    padding: 0;\r\n    margin: 0;\r\n    width: fit-content;\r\n    height: 100%;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n\r\n\r\n}\r\n.Action-module_icon__3E4df > * {\r\n\r\n    font-size: 1.3rem !important;\r\n}\r\n\r\n\r\n\r\n.Action-module_iconWrapper__irMuB::after {\r\n    content: '';\r\n\r\n    z-index: 0;\r\n\r\n    position: absolute;\r\n\r\n    background: #0095ff;\r\n    opacity: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n\r\n.Action-module_label__2NqHm {\r\n    padding: 0 1px;\r\n    max-width: 100%;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    font-weight: 600;\r\n    font-family: 'Roboto';\r\n    text-align: center;\r\n    font-size: .7rem;\r\n}";
var styles$k = {"buttonWrapper":"Action-module_buttonWrapper__3MOeL","iconWrapper":"Action-module_iconWrapper__irMuB","icon":"Action-module_icon__3E4df","label":"Action-module_label__2NqHm"};
styleInject(css_248z$l);

function ActionButton(props) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: props.onClick,
    disabled: props.disabled,
    className: styles$k.buttonWrapper,
    "data-highlight": JSON.stringify(props.highlight)
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$k.iconWrapper
  }, /*#__PURE__*/React.createElement("span", {
    className: styles$k.icon
  }, props.icon), /*#__PURE__*/React.createElement(Ripple, {
    disabled: props.disabled,
    opacity: .3
  })), /*#__PURE__*/React.createElement("div", {
    className: styles$k.label
  }, props.label), /*#__PURE__*/React.createElement(ToolTip, {
    content: props.label,
    align: 'middle',
    justify: "end"
  }));
}
ActionButton.propTypes = {
  width: PropTypes__default["default"].oneOf(['fit', 'stretch']),
  highlight: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  label: PropTypes__default["default"].any,
  icon: PropTypes__default["default"].any,
  onClick: PropTypes__default["default"].func
};

function CheckboxGroup(props) {
  var lang = LocalePT;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: props.width,
      display: 'grid',
      gap: '4px'
    }
  }, /*#__PURE__*/React__default["default"].createElement("fieldset", {
    className: styles$n.wrapper,
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React__default["default"].createElement("legend", {
    className: shared$2.labelContainer,
    style: {
      padding: '0 8px'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.overflow
  }, props.label), props.helperText ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.helperText
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontSize: '1rem'
    },
    className: "material-icons-round"
  }, "info"), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: props.helperText,
    align: 'start'
  })) : null), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$n.wrapperChildren
  }, props.children)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.alertLabel,
    style: {
      color: props.value === null || props.value === undefined ? '#ff5555' : '#262626',
      visibility: props.required ? 'visible' : 'hidden'
    }
  }, lang.required));
}
CheckboxGroup.propTypes = {
  helperText: PropTypes__default["default"].string,
  value: PropTypes__default["default"].any,
  children: PropTypes__default["default"].node,
  label: PropTypes__default["default"].string,
  width: PropTypes__default["default"].string,
  required: PropTypes__default["default"].bool
};

var css_248z$k = ".FileField-module_button__2UlZj {\r\n    user-select: none;\r\n    position: relative;\r\n\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n\r\n    transition: inherit;\r\n    background: var(--mfc-background-primary);\r\n    width: 100%;\r\n\r\n    padding: 5px;\r\n\r\n    max-width: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.FileField-module_button__2UlZj:hover {\r\n    border-color: var(--accent-color);\r\n}\r\n\r\n.FileField-module_button__2UlZj:disabled {\r\n    border-color: var(--mfc-border-primary);\r\n}\r\n";
var styles$j = {"button":"FileField-module_button__2UlZj"};
styleInject(css_248z$k);

var css_248z$j = "@import \"../../../misc/theme/styles.module.css\";\n\n.File-module_dropArea__1w63h {\n    position: relative;\n    color: var(--mfc-color-quaternary);\n    transition: 150ms linear;\n    width: 100%;\n    height: 100%;\n    border-radius: 5px;\n    background: var(--mfc-background-secondary);\n    border: var(--mfc-border-secondary) 2px dashed;\n}\n.File-module_dropAreaContent__4oh19{\n    display: flex;\n    align-items: flex-start;\n    align-content: flex-start;\n    justify-content: flex-start;\n\n    gap: 18.5px;\n\n    flex-flow: row wrap;\n    overflow-y: auto;\n    padding: 16px;\n}\n\n\n.File-module_fileContainer__1DNbz{\n    position: relative;\n    width: 15%;\n    height: 25%;\n    background: var(--mfc-background-primary);\n    border-radius: 5px;\n    border: var(--mfc-border-primary) 1px solid;\n    display: grid;\n    align-content: space-between;\n    gap: 4px;\n    justify-content: center;\n    justify-items: center;\n    font-size: .9rem;\n    padding: 16px 8px 8px 8px;\n\n\n\n}\n\n.File-module_fileLabel__2-mr7{\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    max-width: 100%;\n\n}\n\n\n.File-module_header__2_0MX{\n    height: 45px;\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--mfc-color-secondary);\n    /*border-bottom: var(--mfc-border-secondary) 1px solid;*/\n    width: 100%;\n    display: flex;\n\n    align-items: center;\n}\n.File-module_headerAccepted__25LIt{\n    text-align: right;\n    border-left: var(--mfc-border-primary) 1px solid;\n    height: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-size: .7rem;\n    color: var(--mfc-color-quaternary);\n}\n.File-module_overflow__7Foyg{\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n\n\n.File-module_modalContainer__28Sut{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.File-module_modalContent__Cegaf {\n    height: 100%;\n    width: clamp(250px, 25%, 500px);\n    background: var(--mfc-background-primary);\n    margin-left: auto;\n    border-radius: 8px 0 0 8px;\n    box-shadow: var(--mfc-box-shadow-primary) 0 0 2px 1px;\n\n    display: grid;\n    gap: 16px;\n    grid-template-rows: 45px 35px calc(100% - 114px);\n\n\n    top: 0;\n    right: 0;\n\n    align-content: flex-start;\n    /*background: var(--mfc-background-secondary);*/\n    position: absolute;\n\n    border: var(--mfc-border-secondary) 1px solid;\n\n    padding: 16px;\n}\n";
var styles$i = {"dropArea":"File-module_dropArea__1w63h","dropAreaContent":"File-module_dropAreaContent__4oh19","fileContainer":"File-module_fileContainer__1DNbz","fileLabel":"File-module_fileLabel__2-mr7","header":"File-module_header__2_0MX","headerAccepted":"File-module_headerAccepted__25LIt","overflow":"File-module_overflow__7Foyg","modalContainer":"File-module_modalContainer__28Sut","modalContent":"File-module_modalContent__Cegaf"};
styleInject(css_248z$j);

function File(props) {
  // const [hover, setHover] = useState(false)
  var icon = React$1.useMemo(function () {
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
    className: styles$i.fileContainer
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
    className: styles$i.fileLabel
  }, props.name.split('.')[0]));
}
File.propTypes = {
  name: PropTypes__default["default"].string,
  type: PropTypes__default["default"].string,
  index: PropTypes__default["default"].number,
  handleDelete: PropTypes__default["default"].func
};

function FileModal(props) {
  var ref = React$1.useRef();
  var areaRef = React$1.useRef();
  var files = React$1.useMemo(function () {
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
  var themes = React$1.useContext(ThemeContext);
  return /*#__PURE__*/React__default["default"].createElement(Modal, {
    open: props.open,
    handleClose: function handleClose() {
      return props.setOpen(false);
    },
    animationStyle: 'slide-right',
    blurIntensity: 0,
    className: styles$i.modalContent
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$i.header
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: '100%'
    }
  }, "Anexar arquivos"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: [styles$i.headerAccepted, styles$i.overflow].join(' '),
    style: {
      width: '100%'
    }
  }, "Tipos aceitos: ", props.accept.length > 0 ? props.accept.map(function (e, i) {
    return e.split('.')[e.split('.').length - 1] + (i < props.accept.length - 1 ? ', ' : '');
  }) : 'todos')), /*#__PURE__*/React__default["default"].createElement(Button, {
    disabled: !props.multiple && props.files.length > 0,
    onClick: function onClick(event) {
      event.preventDefault();
      ref.current.click();
    }
  }, "Anexar arquivos"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: [styles$i.dropArea, props.files.length > 0 ? styles$i.dropAreaContent : ''].join(' '),
    ref: areaRef,
    style: {
      background: !props.multiple && props.files.length > 0 ? themes.theme.background1 : undefined
    },
    onDragLeave: function onDragLeave(e) {
      if (!(!props.multiple && props.files.length > 0)) {
        areaRef.current.style.borderColor = themes.theme.border1;
        areaRef.current.style.background = themes.theme.backgroundBase;
      }
    },
    onDragOver: function onDragOver(e) {
      e.preventDefault();

      if (!(!props.multiple && props.files.length > 0)) {
        areaRef.current.style.borderColor = '#0095ff';
        areaRef.current.style.background = themes.theme.background3;
      }
    },
    onDrop: function onDrop(e) {
      e.preventDefault();

      if (!(!props.multiple && props.files.length > 0)) {
        areaRef.current.style.borderColor = '#0095ff';
        areaRef.current.style.background = themes.theme.background3;
        props.setFiles([].concat(_toConsumableArray(props.files), _toConsumableArray(Array.from(e.dataTransfer.files))));
      }
    }
  }, props.files.length === 0 ? /*#__PURE__*/React__default["default"].createElement(Empty, {
    customLabel: 'Arraste seus arquivos aqui'
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
  var lang = LocalePT;

  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      openModal = _useState2[0],
      setOpenModal = _useState2[1];

  var color = React$1.useMemo(function () {
    if (props.colorVariant === 'secondary') return {
      className: shared$2.secondaryVariant,
      color: '#0095ff'
    };else return {
      className: undefined,
      color: '#0095ff'
    };
  }, []);
  var files = React$1.useMemo(function () {
    if (props.value && Array.isArray(props.value)) return props.value;else return [];
  }, [props.value]);
  var themes = React$1.useContext(ThemeContext);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: props.width,
      marginBottom: 'auto',
      display: "grid",
      gap: '4px'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.labelContainer,
    style: {
      opacity: files.length > 0 ? 1 : 0,
      transition: 'visibility 0.2s ease,opacity 0.2s ease'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.overflow
  }, props.label), props.helperText ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.helperText
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontSize: '1rem'
    },
    className: "material-icons-round"
  }, "info"), /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: props.helperText,
    align: 'start'
  })) : null), /*#__PURE__*/React__default["default"].createElement("div", {
    className: [shared$2.wrapper, color.className].join(' '),
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
    className: [styles$j.button, shared$2.labelContainer].join(' '),
    onClick: function onClick() {
      return setOpenModal(true);
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.labelContainer,
    style: {
      alignItems: 'center',
      height: '100%',
      gap: '16px',
      display: 'flex',
      color: themes ? themes.themes.color1 : '#555555'
    }
  }, "Anexar arquivos", files.length > 0 ? /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      fontSize: '.7rem',
      color: themes ? themes.themes.color2 : '#777777'
    }
  }, "(", files.length, " Anexados)") : null), /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontSize: '1.2rem'
    },
    className: "material-icons-round"
  }, "attach_file"))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared$2.alertLabel,
    style: {
      color: files.length === 0 ? '#ff5555' : undefined,
      visibility: props.required ? 'visible' : 'hidden'
    }
  }, lang.required), /*#__PURE__*/React__default["default"].createElement(FileModal, {
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

function ThemeProvider(props) {
  return /*#__PURE__*/React__default["default"].createElement(ThemeContext.Provider, {
    value: {
      dark: props.onDark,
      styles: styles$A,
      themes: {
        mfc_background_primary: !props.onDark ? 'white' : '#292c2b',
        mfc_background_secondary: !props.onDark ? '#f3f6f9' : '#1e2121',
        mfc_background_tertiary: !props.onDark ? '#f4f5fa' : '#191C1C',
        mfc_background_quaternary: !props.onDark ? '#E8F0FE' : '#1f2123',
        mfc_border_primary: !props.onDark ? '#F1F1F5' : '#1e2121',
        mfc_border_secondary: !props.onDark ? '#e0e0e0' : '#707070',
        mfc_color_primary: !props.onDark ? '#333333' : 'white',
        mfc_color_secondary: !props.onDark ? '#555555' : '#f4f5fa',
        mfc_color_tertiary: !props.onDark ? '#666666' : '#f0f0f0',
        mfc_color_quaternary: !props.onDark ? '#777777' : '#e0e0e0',
        mfc_color_quinary: !props.onDark ? '#999999' : '#dedede',
        mfc_color_senary: !props.onDark ? 'white' : '#292c2b',
        mfc_box_shadow_primary: !props.onDark ? '#e0e0e0' : '#1e2121'
      }
    }
  }, /*#__PURE__*/React__default["default"].createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons+Round"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: [props.onDark ? styles$A.dark : styles$A.light, props.className].join(' '),
    style: props.styles
  }, props.children));
}
ThemeProvider.propTypes = {
  className: PropTypes__default["default"].string,
  styles: PropTypes__default["default"].object,
  onDark: PropTypes__default["default"].bool,
  children: PropTypes__default["default"].node
};

var css_248z$i = "@import \"../../../misc/theme/styles.module.css\";\n@import url('http://fonts.cdnfonts.com/css/roboto');\n\n.Tabs-module_header__8l5LJ {\n    background-color: var(--mfc-background-primary);\n    border-radius: 5px;\n    justify-content: center;\n    border: var(--mfc-border-primary) 1px solid;\n\n    height: fit-content;\n    width: 100%;\n\n    display: grid;\n    /*border-bottom: var(--mfc-border-primary) 1px solid;*/\n    transition: 150ms ease-in;\n}\n\n.Tabs-module_tabs__3EMRN {\n    max-width: 100%;\n    width: 100%;\n\n    overflow: hidden;\n    margin: auto;\n    display: flex;\n    align-items: center;\n}\n\n\n.Tabs-module_button__1f53r {\n    text-transform: uppercase;\n    /*font-family: \"Roboto\" !important;*/\n    text-rendering: optimizeLegibility;\n    color: var(--mfc-color-tertiary);\n    font-weight: bold;\n    font-size: .73rem;\n    padding: 8px 24px;\n    height: 35px;\n    transition: 150ms ease;\n\n    text-overflow: ellipsis;\n    overflow: hidden;\n    max-width: 100%;\n    white-space: nowrap;\n}\n\n.Tabs-module_button__1f53r:hover, .Tabs-module_button__1f53r:active, .Tabs-module_button__1f53r[data-highlight=\"true\"] {\n    color: var(--color) !important;\n}\n\n\n.Tabs-module_enterA__2UsDT {\n    animation: Tabs-module_enter__10Gu2 150ms ease-in-out;\n}\n\n.Tabs-module_exitA__3_0uq {\n    animation: Tabs-module_exit__2fucC 150ms ease-in-out;\n}\n\n@keyframes Tabs-module_exit__2fucC {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes Tabs-module_enter__10Gu2 {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n";
var styles$h = {"header":"Tabs-module_header__8l5LJ","tabs":"Tabs-module_tabs__3EMRN","button":"Tabs-module_button__1f53r","enterA":"Tabs-module_enterA__2UsDT","enter":"Tabs-module_enter__10Gu2","exitA":"Tabs-module_exitA__3_0uq","exit":"Tabs-module_exit__2fucC"};
styleInject(css_248z$i);

var css_248z$h = "\r\n.Switcher-module_enterA__2RSrB {\r\n    animation: Switcher-module_enter__3bQ2E 150ms ease-in-out;\r\n}\r\n\r\n.Switcher-module_exitA__2rXXT {\r\n    animation: Switcher-module_exit__1sA5x 150ms ease-in-out;\r\n}\r\n\r\n@keyframes Switcher-module_exit__1sA5x {\r\n    0% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@keyframes Switcher-module_enter__3bQ2E {\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n";
var styles$g = {"enterA":"Switcher-module_enterA__2RSrB","enter":"Switcher-module_enter__3bQ2E","exitA":"Switcher-module_exitA__2rXXT","exit":"Switcher-module_exit__1sA5x"};
styleInject(css_248z$h);

function Switcher(props) {
  var ref = React$1.useRef();

  var _useState = React$1.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      currentChild = _useState2[0],
      setCurrentChild = _useState2[1];

  React$1.useEffect(function () {
    if (props.openChild !== currentChild && props.openChild < React__default["default"].Children.toArray(props.children).length) {
      var _ref$current;

      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.classList.add(styles$g.exitA);
    }
  }, [props.openChild]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: ref,
    className: props.className,
    style: props.styles,
    onAnimationEnd: function onAnimationEnd() {
      var _ref$current2, _ref$current3;

      setCurrentChild(props.openChild);
      (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.classList.add(styles$g.enterA);
      (_ref$current3 = ref.current) === null || _ref$current3 === void 0 ? void 0 : _ref$current3.classList.remove(styles$g.exitA);
    }
  }, React__default["default"].Children.toArray(props.children).map(function (c, i) {
    return i !== currentChild ? null : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: i + '-child'
    }, c);
  }));
}
Switcher.propTypes = {
  // animationType: PropTypes.oneOf(['sideways', 'vertically', 'fade']),
  className: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node,
  openChild: PropTypes__default["default"].number.isRequired,
  styles: PropTypes__default["default"].object
};

function Tab(props) {
  return props.children;
}
Tab.propTypes = {
  className: PropTypes__default["default"].string,
  styles: PropTypes__default["default"].object,
  group: PropTypes__default["default"].string,
  label: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node
};

function Tabs(props) {
  var _children$open, _children$open2;

  var _useState = React$1.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var children = React__default["default"].Children.toArray(props.children).filter(function (e) {
    return e.type === Tab;
  });
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: props.className,
    style: props.styles,
    "data-open-tab": open
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$h.header,
    style: {
      justifyContent: props.align === 'end' ? 'flex-end' : props.align === 'start' ? 'flex-start' : undefined,
      width: props.indicator === 'fit' ? 'fit-content' : undefined,
      margin: props.indicator === 'fit' ? 'auto' : undefined
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$h.tabs
  }, children.map(function (e, i) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: i + '-button-header-tab'
    }, /*#__PURE__*/React__default["default"].createElement(Button, {
      variant: 'minimal',
      highlight: open === i,
      className: styles$h.button,
      onClick: function onClick() {
        setOpen(i);
      }
    }, e.props.label, /*#__PURE__*/React__default["default"].createElement(ToolTip, {
      content: e.props.label
    })));
  }))), /*#__PURE__*/React__default["default"].createElement(Switcher, {
    className: (_children$open = children[open]) === null || _children$open === void 0 ? void 0 : _children$open.props.className,
    styles: (_children$open2 = children[open]) === null || _children$open2 === void 0 ? void 0 : _children$open2.props.styles,
    openChild: open
  }, children.map(function (el, index) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: index + '-tab'
    }, el);
  })));
}
Tabs.proptypes = {
  align: PropTypes__default["default"].oneOf(['start', 'end', 'center']),
  className: PropTypes__default["default"].string,
  styles: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node.isRequired,
  indicator: PropTypes__default["default"].oneOf(['stretch', 'fit'])
};

var css_248z$g = "@import \"../../../misc/theme/styles.module.css\";\n\n.Vertical-module_content__3mXHl {\n    width: 100%;\n}\n\n.Vertical-module_wrapper__3BFk5 {\n    overflow: hidden;\n    max-height: 100%;\n    height: 100%;\n    position: relative;\n    width: 100%;\n\n    display: flex;\n\n    padding: 8px;\n}\n\n\n.Vertical-module_header__1E32z {\n    position: sticky;\n    top: 0;\n\n    border: var(--mfc-border-primary) 1px solid;\n\n    background-color: var(--mfc-background-primary);\n    border-radius: 5px;\n\n    flex-grow: 1;\n    width: 25%;\n    max-width: 250px;\n\n    display: grid;\n    gap: 24px;\n\n\n    transition: 150ms linear;\n    height: 100%;\n}\n\n.Vertical-module_tabs__1DGLb {\n\n    overflow: hidden;\n\n    width: 100%;\n    padding: 4px;\n}\n\n.Vertical-module_button__3sXjY {\n\n    padding: 12px 24px;\n\n    max-width: 100%;\n    width: 100%;\n\n\n    font-weight: 600;\n    font-family: \"Roboto\";\n    font-size: .75rem;\n    text-rendering: optimizeLegibility;\n\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 16px;\n}\n\n.Vertical-module_color__1eEjz {\n    color: var(--mfc-color-quaternary)\n}\n\n.Vertical-module_color__1eEjz:hover, .Vertical-module_color__1eEjz:active, .Vertical-module_highlight__2lbgS {\n    color: var(--color)\n}\n\n.Vertical-module_rowLabel__F8jVb {\n    display: flex;\n    align-content: center;\n    align-items: center;\n    justify-content: space-between;\n    font-weight: 600;\n    font-family: \"Roboto\";\n    color: var(--mfc-color-secondary);\n    font-size: .8rem;\n    padding: 4px 0 4px 16px;\n    margin-top: 8px;\n}\n\n.Vertical-module_overflow__1UgBi {\n    max-width: 100%;\n\n    text-align: left;\n\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}";
var styles$f = {"content":"Vertical-module_content__3mXHl","wrapper":"Vertical-module_wrapper__3BFk5","header":"Vertical-module_header__1E32z","tabs":"Vertical-module_tabs__1DGLb","button":"Vertical-module_button__3sXjY","color":"Vertical-module_color__1eEjz","highlight":"Vertical-module_highlight__2lbgS","rowLabel":"Vertical-module_rowLabel__F8jVb","overflow":"Vertical-module_overflow__1UgBi"};
styleInject(css_248z$g);

function Row$1(props) {
  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hidden = _useState2[0],
      setHidden = _useState2[1];

  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: '100%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    className: styles$f.button,
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
  }, props.groupName, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "material-icons-round",
    style: {
      transform: hidden ? 'rotate(180deg)' : "unset",
      transition: '150ms linear'
    }
  }, "arrow_drop_down")), /*#__PURE__*/React__default["default"].createElement(Switcher, {
    openChild: hidden ? 0 : 1
  }, /*#__PURE__*/React__default["default"].createElement("div", null), /*#__PURE__*/React__default["default"].createElement("div", null, props.buttons.map(function (b, bI) {
    return b.group === props.groupName ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: props.index + '-button-header-tab-' + bI
    }, /*#__PURE__*/React__default["default"].createElement(Button, {
      variant: 'minimal-horizontal',
      className: [styles$f.button, styles$f.color].join(' '),
      styles: {
        fontWeight: 'normal',
        width: '100%'
      },
      highlight: props.open === bI,
      onClick: function onClick() {
        props.setOpen(bI);
      }
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$f.overflow
    }, b.label))) : null;
  }))));
}
Row$1.propTypes = {
  groupName: PropTypes__default["default"].string,
  buttons: PropTypes__default["default"].arrayOf(PropTypes__default["default"].object),
  index: PropTypes__default["default"].number,
  setOpen: PropTypes__default["default"].func,
  open: PropTypes__default["default"].number
};

function VerticalTabs(props) {
  var _useState = React$1.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var children = React__default["default"].Children.toArray(props.children);

  var groups = _toConsumableArray(new Set(children.map(function (item) {
    return item.props.group;
  })));

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: props.className,
    style: _objectSpread2(_objectSpread2({}, props.styles), {
      position: 'relative'
    })
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$f.header
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$f.tabs
  }, groups.map(function (e, i) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: i + '-class'
    }, /*#__PURE__*/React__default["default"].createElement(Row$1, {
      setOpen: setOpen,
      open: open,
      data: e,
      index: i,
      buttons: children.map(function (item) {
        return {
          label: item.props.label,
          group: item.props.group
        };
      }),
      groupName: e
    }));
  }))), /*#__PURE__*/React__default["default"].createElement(Switcher, {
    className: children[open].props.className,
    styles: children[open].styles,
    openChild: open
  }, children.map(function (el, index) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: index + '-tab-vertical'
    }, el);
  })));
}
VerticalTabs.proptypes = {
  className: PropTypes__default["default"].string,
  styles: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node.isRequired
};

var css_248z$f = ".Bar-module_bottomOptions__10Ava {\r\n    position: absolute;\r\n    bottom: 4px;\r\n    width: calc(100% - 8px);\r\n    transform: translateX(4px);\r\n\r\n    display: grid;\r\n    align-content: flex-start;\r\n    gap: 8px;\r\n}\r\n\r\n.Bar-module_buttons__EFwoj {\r\n    width: 100%;\r\n    padding: 4px;\r\n    position: relative;\r\n    height: 100%;\r\n    display: grid;\r\n    align-content: flex-start;\r\n\r\n    gap: 8px;\r\n}\r\n\r\n.Bar-module_button__3PXzG {\r\n    width: 100%;\r\n\r\n    padding: 4px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.Bar-module_wrapperHorizontal__1dz9H {\r\n    padding: 4px;\r\n    overflow: hidden;\r\n    /*width: 60px;*/\r\n    transition: 250ms ease-in-out;\r\n    background: var(--mfc-background-primary);\r\n    position: sticky;\r\n    left: 0;\r\n    top: 0;\r\n    height: 40px;\r\n    width: 100%;\r\n    display: flex;\r\n\r\n}\r\n\r\n.Bar-module_wrapperVertical__1ROE7 {\r\n    padding: 4px;\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    overflow: hidden;\r\n    width: 60px;\r\n    transition: 250ms ease-in-out;\r\n    background: var(--mfc-background-primary);\r\n    position: sticky;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n\r\n}\r\n\r\n\r\n\r\n.Bar-module_buttonContainer__2CV9H {\r\n    align-items: center;\r\n\r\n    cursor: pointer;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    height: 50px;\r\n    overflow: hidden;\r\n\r\n    transition: 250ms ease-in-out;\r\n    border-radius: 5px;\r\n    padding: 8px 4px;\r\n\r\n    position: relative;\r\n\r\n\r\n}\r\n\r\n\r\n.Bar-module_buttonLabel__3CrmY {\r\n\r\n    outline: none;\r\n    background: none;\r\n    border: none;\r\n    padding: 0;\r\n\r\n    font-size: .7rem;\r\n    overflow: hidden;\r\n    color: var(--mfc-color-quaternary);\r\n\r\n    font-family: \"Roboto\";\r\n    /*font-weight: 575;*/\r\n}\r\n\r\n.Bar-module_activeButton__35KQw {\r\n    animation: Bar-module_slideDown__2VhN7 150ms linear forwards;\r\n\r\n    position: absolute;\r\n    left: 4px;\r\n    height: 42px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n@keyframes Bar-module_slideDown__2VhN7 {\r\n    0% {\r\n        top: 0;\r\n        /*transform: translateY(-50%);*/\r\n    }\r\n    100% {\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n    }\r\n}\r\n\r\n.Bar-module_buttonLabel__3CrmY:disabled {\r\n    color: var(--mfc-color-quinary);\r\n}\r\n\r\n.Bar-module_overflowEllipsis__3KezM {\r\n    max-width: 100%;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.Bar-module_alignEnd__bal_Y[data-variant = 'vertical'] {\r\n\r\n    flex-flow: column;\r\n    align-content: flex-end;\r\n    align-items: flex-end;\r\n    /*justify-items: center;*/\r\n    /*justify-content: stretch;*/\r\n\r\n}\r\n\r\n.Bar-module_alignStart__3OBLV[data-variant = 'vertical'] {\r\n\r\n    flex-flow: column;\r\n    /*justify-content: stretch;*/\r\n    align-content: flex-start;\r\n    align-items: flex-start;\r\n    /*justify-items: center;*/\r\n}\r\n\r\n.Bar-module_alignEnd__bal_Y[data-variant = 'horizontal'] {\r\n\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n}\r\n\r\n.Bar-module_alignStart__3OBLV[data-variant = 'horizontal'] {\r\n\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.Bar-module_alignEnd__bal_Y {\r\n    display: flex;\r\n    gap: 8px;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.Bar-module_alignStart__3OBLV {\r\n    display: flex;\r\n    gap: 8px;\r\n    width: 100%;\r\n    height: 100%;\r\n    /*display: var(--display);*/\r\n}";
var styles$e = {"bottomOptions":"Bar-module_bottomOptions__10Ava","buttons":"Bar-module_buttons__EFwoj","button":"Bar-module_button__3PXzG","wrapperHorizontal":"Bar-module_wrapperHorizontal__1dz9H","wrapperVertical":"Bar-module_wrapperVertical__1ROE7","buttonContainer":"Bar-module_buttonContainer__2CV9H","buttonLabel":"Bar-module_buttonLabel__3CrmY","activeButton":"Bar-module_activeButton__35KQw","slideDown":"Bar-module_slideDown__2VhN7","overflowEllipsis":"Bar-module_overflowEllipsis__3KezM","alignEnd":"Bar-module_alignEnd__bal_Y","alignStart":"Bar-module_alignStart__3OBLV"};
styleInject(css_248z$f);

function Bar$1(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: props.orientation === 'horizontal' ? styles$e.wrapperHorizontal : styles$e.wrapperVertical
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$e.alignStart,
    "data-variant": props.orientation ? props.orientation : 'vertical'
  }, React__default["default"].Children.toArray(props.children).filter(function (e) {
    return e.props.place !== 'end';
  }).map(function (e, i) {
    if (e.type === ActionButton) return e;else return /*#__PURE__*/React__default["default"].createElement("div", {
      key: i + '-bar-node-start',
      className: e.props.className,
      style: e.props.styles
    }, e);
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$e.alignEnd,
    "data-variant": props.orientation ? props.orientation : 'vertical'
  }, React__default["default"].Children.toArray(props.children).filter(function (e) {
    return e.props.place === 'end';
  }).map(function (e, i) {
    if (e.type === ActionButton) return e;else return /*#__PURE__*/React__default["default"].createElement("div", {
      key: i + '-bar-node-end',
      className: e.props.className,
      style: e.props.styles
    }, e);
  })));
}
Bar$1.propTypes = {
  orientation: PropTypes__default["default"].oneOf(['vertical', 'horizontal']),
  children: PropTypes__default["default"].node
};

function BarAction(props) {
  return props.children;
}
BarAction.propTypes = {
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  styles: PropTypes__default["default"].string,
  place: PropTypes__default["default"].oneOf(['start', 'end'])
};

var css_248z$e = "@import \"../../../misc/theme/styles.module.css\";\r\n\r\n.Breadcrumbs-module_wrapper__3KOun {\r\n    display: flex;\r\n    align-items: center;\r\n    align-content: center;\r\n    justify-content: center;\r\n    gap: 8px;\r\n    border-radius: 5px;\r\n    background: var(--mfc-background-primary);\r\n    width: 100%;\r\n    padding: 8px;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n.Breadcrumbs-module_crumbWrapper__3KMnN {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n}";
var styles$d = {"wrapper":"Breadcrumbs-module_wrapper__3KOun","crumbWrapper":"Breadcrumbs-module_crumbWrapper__3KMnN"};
styleInject(css_248z$e);

function Breadcrumbs(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$d.wrapper,
    style: {
      justifyContent: props.justify === 'start' ? 'flex-start' : props.justify === 'end' ? 'flex-end' : undefined
    }
  }, React__default["default"].Children.toArray(props.children).map(function (crumb, i) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$d.crumbWrapper,
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

var css_248z$d = ".Carousel-module_wrapper__3jfG8{\r\n    padding: 16px;\r\n    height: 50vh;\r\n    overflow: hidden;\r\n    position: relative;\r\n\r\n    display: grid;\r\n    align-content: space-between;\r\n    user-select: none;\r\n}";
var styles$c = {"wrapper":"Carousel-module_wrapper__3jfG8"};
styleInject(css_248z$d);

var css_248z$c = ".Card-module_cardWrapper__2VU2m {\r\n    /*border: var(--mfc-border-primary) 1px solid;*/\r\n    background: var(--mfc-background-primary);\r\n    border-radius: 8px;\r\n    height: 115px;\r\n\r\n\r\n    position: relative;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n\r\n    transition: 150ms linear;\r\n}\r\n.Card-module_cardWrapper__2VU2m:active{\r\n    transform: scale(.98);\r\n}\r\n.Card-module_cardImage__2t-3X {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    border-radius: 8px;\r\n    z-index: 0;\r\n    transition: 150ms linear;\r\n}\r\n\r\n.Card-module_cardTitle__S4Fs3 {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 0;\r\n    transform: translate(4px, -50%);\r\n    transition: 250ms linear;\r\n}\r\n\r\n.Card-module_cardHeaderBackground__2lcN2{\r\n    z-index: 0;\r\n    opacity: .8;\r\n    background: var(--mfc-background-primary);\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.Card-module_cardHeader__25Kks {\r\n    overflow: hidden;\r\n\r\n    display: grid;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n\r\n    padding: 4px 0;\r\n    user-select: none;\r\n    height: 30%;\r\n    width: 50%;\r\n\r\n    color: var(--mfc-color-primary);\r\n    position: relative;\r\n    z-index: 5;\r\n\r\n    border-radius: 0 5px 5px 0;\r\n    transition: 150ms linear;\r\n\r\n    font-family: \"Roboto\";\r\n    font-weight: 600;\r\n    font-size: 1rem;\r\n}\r\n.Card-module_cardWrapper__2VU2m:hover, .Card-module_onRender__2Z0Qp{\r\n    border: #0095ff 2px solid;\r\n\r\n}\r\n.Card-module_cardWrapper__2VU2m:hover .Card-module_cardTitle__S4Fs3 {\r\n    position: relative;\r\n    top: 0;\r\n    transform: translateX(4px);\r\n}\r\n\r\n.Card-module_cardWrapper__2VU2m:hover .Card-module_cardHeader__25Kks {\r\n    height: 50%;\r\n    width: 75%;\r\n    align-items: flex-start;\r\n}\r\n\r\n.Card-module_cardWrapper__2VU2m:hover .Card-module_cardImage__2t-3X {\r\n    transform: scale(1.2);\r\n}\r\n\r\n\r\n.Card-module_onRender__2Z0Qp .Card-module_cardTitle__S4Fs3 {\r\n    position: relative;\r\n    top: 0;\r\n    transform: translateX(4px);\r\n}\r\n\r\n.Card-module_onRender__2Z0Qp .Card-module_cardHeader__25Kks {\r\n    height: 50%;\r\n    width: 75%;\r\n    align-items: flex-start;\r\n}\r\n\r\n.Card-module_onRender__2Z0Qp .Card-module_cardImage__2t-3X {\r\n    transform: scale(1.2);\r\n}\r\n\r\n\r\n.Card-module_cardDescription__9H_cz {\r\n    position: relative;\r\n    z-index: 5;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: 150ms linear;\r\n\r\n    font-weight: normal;\r\n    font-size: .8rem;\r\n    color: var(--mfc-color-quaternary);\r\n    padding-left: 4px;\r\n}\r\n\r\n.Card-module_cardWrapper__2VU2m:hover .Card-module_cardDescription__9H_cz {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n.Card-module_onRender__2Z0Qp .Card-module_cardDescription__9H_cz {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n.Card-module_overflow__VDvpD {\r\n    overflow: hidden;\r\n    max-width: 100%;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n";
var styles$b = {"cardWrapper":"Card-module_cardWrapper__2VU2m","cardImage":"Card-module_cardImage__2t-3X","cardTitle":"Card-module_cardTitle__S4Fs3","cardHeaderBackground":"Card-module_cardHeaderBackground__2lcN2","cardHeader":"Card-module_cardHeader__25Kks","onRender":"Card-module_onRender__2Z0Qp","cardDescription":"Card-module_cardDescription__9H_cz","overflow":"Card-module_overflow__VDvpD"};
styleInject(css_248z$c);

function Card(props) {
  var ref = React$1.useRef();

  var _useState = React$1.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  React$1.useEffect(function () {
    setWidth(ref.current.parentNode.offsetWidth * (12.5 / 100));
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [styles$b.cardWrapper, props.currentOnRender ? styles$b.onRender : ''].join(' '),
    ref: ref,
    style: {
      minWidth: width + 'px'
    },
    onDoubleClick: function onDoubleClick() {
      return props.data.onClick();
    },
    onClick: function onClick() {
      return props.onClick();
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$b.cardHeader
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$b.cardHeaderBackground
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: [styles$b.overflow, styles$b.cardTitle].join(' ')
  }, props.data.title), /*#__PURE__*/React__default["default"].createElement("div", {
    className: [styles$b.cardDescription, styles$b.overflow].join(' ')
  }, props.data.details)), /*#__PURE__*/React__default["default"].createElement("img", {
    src: props.data.image,
    alt: props.data.title,
    className: styles$b.cardImage
  }));
}
Card.propTypes = {
  data: PropTypes__default["default"].shape({
    image: PropTypes__default["default"].string,
    title: PropTypes__default["default"].string,
    details: PropTypes__default["default"].string,
    onClick: PropTypes__default["default"].func
  }),
  currentOnRender: PropTypes__default["default"].bool,
  onClick: PropTypes__default["default"].func
};

var css_248z$b = ".CardGroup-module_groupWrapper__11q7W {\r\n    display: flex;\r\n    gap: 16px;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    position: relative;\r\n\r\n    height: fit-content;\r\n\r\n    padding: 0 16px;\r\n\r\n}\r\n.CardGroup-module_button__3_U-r{\r\n    color: var(--mfc-color-tertiary);\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 65px;\r\n    transform: translateY(25%);\r\n\r\n    background: var(--mfc-background-primary);\r\n    border-radius: 5px;\r\n    width: 20px;\r\n    height: 45px;\r\n\r\n    z-index: 50;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    transition: 150ms linear;\r\n\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n.CardGroup-module_button__3_U-r:hover{\r\n\r\n    background: var(--mfc-background-quaternary);\r\n    color: #0095ff;\r\n}\r\n.CardGroup-module_button__3_U-r:active{\r\n    background: #0095ff;\r\n    color: white;\r\n    border-color: #0095ff;\r\n}\r\n\r\n";
var styles$a = {"groupWrapper":"CardGroup-module_groupWrapper__11q7W","button":"CardGroup-module_button__3_U-r"};
styleInject(css_248z$b);

function CardGroup(props) {
  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      buttonEnd = _useState2[0],
      setButtonEnd = _useState2[1];

  var _useState3 = React$1.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      buttonStart = _useState4[0],
      setButtonStart = _useState4[1];

  var ref = React$1.useRef();
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("button", {
    className: styles$a.button,
    style: {
      right: '20px',
      visibility: buttonEnd ? 'visible' : 'hidden',
      opacity: buttonEnd ? '1' : '0'
    },
    onClick: function onClick(e) {
      ref.current.scrollLeft = ref.current.scrollLeft + ref.current.scrollWidth * 0.25;
      if (ref.current.scrollWidth - ref.current.offsetWidth < ref.current.scrollLeft) setButtonEnd(true);else setButtonEnd(false);
    }
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      transform: 'rotate(-90deg)'
    },
    className: "material-icons-round"
  }, "arrow_drop_down")), /*#__PURE__*/React__default["default"].createElement("button", {
    className: styles$a.button,
    style: {
      left: '20px',
      visibility: buttonStart ? 'visible' : 'hidden',
      opacity: buttonStart ? '1' : '0'
    },
    onClick: function onClick() {
      var newScroll = ref.current.scrollLeft - ref.current.scrollWidth * 0.25;
      ref.current.scrollLeft = newScroll;
      if (newScroll > 0) setButtonStart(true);else setButtonStart(false);
    }
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      transform: 'rotate(90deg)'
    },
    className: "material-icons-round"
  }, "arrow_drop_down")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$a.groupWrapper,
    ref: ref,
    onMouseEnter: function onMouseEnter() {
      if (ref.current.scrollWidth - ref.current.offsetWidth > ref.current.scrollLeft) setButtonEnd(true);
      if (ref.current.scrollLeft > 0) setButtonStart(true);
    }
  }, props.children));
}
CardGroup.propTypes = {
  children: PropTypes__default["default"].node
};

var css_248z$a = ".Panel-module_image__1kM7v{\r\n    position: absolute;\r\n    border-radius: 5px 5px 0 0;\r\n    width: calc(100% - 32px);\r\n    height: calc(100% - 97px);\r\n    overflow: hidden;\r\n    mask-image: linear-gradient(to bottom, rgba(0,0,0,1) calc(100% - 65px), rgba(0,0,0,0) 100%);\r\n    transition: 150ms linear;\r\n\r\n}\r\n\r\n\r\n.Panel-module_wrapper__2Sl2K{\r\n    transition: 150ms linear;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n}\r\n.Panel-module_wrapper__2Sl2K:active{\r\n    opacity: .8;\r\n}\r\n\r\n\r\n.Panel-module_title__2hU7K{\r\n    height: 20%;\r\n    max-width: 35%;\r\n    overflow: hidden;\r\n    position: absolute;\r\n\r\n    /*transform: translateY(-50%);*/\r\n    top: calc(50% - 65px);\r\n\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n    padding: 8px 16px;\r\n\r\n    border-radius: 0 5px 5px 0;\r\n\r\n    background: var(--mfc-background-primary);\r\n    border: var(--mfc-border-primary) 1px solid;\r\n\r\n    display: grid;\r\n    gap: 8px;\r\n\r\n\r\n    transition: 150ms linear;\r\n}\r\n\r\n.Panel-module_description__2S5Fu{\r\n    font-size: .9rem;\r\n    color: var(--mfc-color-tertiary);\r\n}\r\n\r\n.Panel-module_overflow__bIsf5{\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    max-width: 100%;\r\n}\r\n";
var styles$9 = {"image":"Panel-module_image__1kM7v","wrapper":"Panel-module_wrapper__2Sl2K","title":"Panel-module_title__2hU7K","description":"Panel-module_description__2S5Fu","overflow":"Panel-module_overflow__bIsf5"};
styleInject(css_248z$a);

function Panel(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$9.wrapper
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$9.image
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: props.data.image,
    alt: props.data.title,
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$9.title
  }, props.data.title, /*#__PURE__*/React__default["default"].createElement("div", {
    className: [styles$9.description, styles$9.overflow].join(' ')
  }, props.data.details)));
}
Panel.propTypes = {
  data: PropTypes__default["default"].shape({
    image: PropTypes__default["default"].string,
    title: PropTypes__default["default"].string,
    details: PropTypes__default["default"].string,
    onClick: PropTypes__default["default"].func
  })
};

function Carousel(props) {
  var _useState = React$1.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentOnRender = _useState2[0],
      setCurrentOnRender = _useState2[1];

  React$1.useEffect(function () {
    var interval = setInterval(function () {
      if (currentOnRender < props.data.length - 1) setCurrentOnRender(currentOnRender + 1);else setCurrentOnRender(0);
    }, 10000);
    return function () {
      clearInterval(interval);
    };
  }, [currentOnRender]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$c.wrapper
  }, /*#__PURE__*/React__default["default"].createElement(Switcher, {
    openChild: currentOnRender
  }, props.data.map(function (panel, i) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: i + '-panel'
    }, /*#__PURE__*/React__default["default"].createElement(Panel, {
      data: panel
    }));
  })), /*#__PURE__*/React__default["default"].createElement(CardGroup, null, props.data.map(function (card, index) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: 'card-' + index
    }, /*#__PURE__*/React__default["default"].createElement(Card, {
      data: card,
      currentOnRender: currentOnRender === index,
      onClick: function onClick() {
        return setCurrentOnRender(index);
      }
    }));
  })));
}
Carousel.propTypes = {
  data: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    image: PropTypes__default["default"].string,
    title: PropTypes__default["default"].string,
    details: PropTypes__default["default"].string,
    onClick: PropTypes__default["default"].func
  }))
};

function DynamicRoutes(props) {
  var contentIndex = React$1.useMemo(function () {
    if (props.ready && props.path !== undefined) return props.routes.findIndex(function (route) {
      return props.path === route.basePath;
    });else return props.routes.findIndex(function (route) {
      return route.asIndex;
    });
  }, [props.ready, props.path, props.routes]);
  var Content = React$1.useMemo(function () {
    if (contentIndex >= 0) return props.routes[contentIndex].content;else return null;
  }, [contentIndex]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, Content !== null ? /*#__PURE__*/React__default["default"].createElement(Content, props.componentProps) : null);
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

var css_248z$9 = "@import '../../../misc/theme/styles.module.css';\n\n.List-module_tableWrapper__191zi {\n    max-width: 100%;\n    height: fit-content;\n    overflow-x: hidden;\n    overflow-y: hidden;\n\n    display: grid;\n    align-content: flex-start;\n\n    gap: 4px;\n\n    padding-bottom: 64px;\n}\n\n.List-module_container__20irL {\n\n\n    display: grid;\n    gap: 8px;\n    max-height: 100%;\n    height: 100%;\n    overflow-y: auto;\n    overflow-x: hidden;\n    position: relative;\n\n    align-content: flex-start;\n}\n\n.List-module_divider__20Bn- {\n    height: 50%;\n    width: 1px;\n    background: var(--mfc-border-secondary);\n}";
var styles$8 = {"tableWrapper":"List-module_tableWrapper__191zi","container":"List-module_container__20irL","divider":"List-module_divider__20Bn-"};
styleInject(css_248z$9);

var css_248z$8 = ".Row-module_row__2HKgP {\r\n    display: flex;\r\n    align-items: center;\r\n    height: 60px;\r\n    width: 100%;\r\n    padding: 0;\r\n    background: var(--mfc-background-primary);\r\n    border-radius: 5px 0 0 5px;\r\n\r\n    border: var(--mfc-border-primary) 1px solid;\r\n}\r\n\r\n\r\n.Row-module_cell__1glv0 {\r\n    background: var(--mfc-background-primary);\r\n    padding: 0 8px;\r\n    color: inherit;\r\n    display: flex;\r\n    align-items: center;\r\n    align-content: center;\r\n    height: 100%;\r\n}\r\n\r\n\r\n.Row-module_overflow__3ktb- {\r\n    overflow: hidden;\r\n    max-width: 100%;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.Row-module_headerRow__zvgwa {\r\n    /*border: var(--mfc-border-primary) 1px solid;*/\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 50;\r\n\r\n    height: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    width: 100%;\r\n    transition: 150ms linear;\r\n\r\n}\r\n\r\n.Row-module_scrolledHeader__2XQ70 {\r\n    box-shadow: var(--mfc-box-shadow-primary) 0 0 1px 1px;\r\n}\r\n\r\n\r\n.Row-module_mainButton__26HDy {\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    border-left: none;\r\n    background: var(--mfc-background-primary);\r\n    border-radius: 0 5px 5px 0;\r\n    padding: 4px;\r\n    width: 30px;\r\n    height: 60px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.Row-module_divider__2xBdi {\r\n    height: 50%;\r\n    width: 1px;\r\n    background: var(--mfc-border-secondary);\r\n}";
var styles$7 = {"row":"Row-module_row__2HKgP","cell":"Row-module_cell__1glv0","overflow":"Row-module_overflow__3ktb-","headerRow":"Row-module_headerRow__zvgwa","scrolledHeader":"Row-module_scrolledHeader__2XQ70","mainButton":"Row-module_mainButton__26HDy","divider":"Row-module_divider__2xBdi"};
styleInject(css_248z$8);

function HeaderCell(props) {
  var ref = React$1.useRef();

  var _useState = React$1.useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      currentSort = _useState2[0],
      setCurrentSort = _useState2[1];

  return /*#__PURE__*/React__default["default"].createElement(Button, {
    className: styles$7.cell,
    variant: 'minimal-horizontal',
    styles: {
      width: "calc(".concat(1 / props.length * 100, "% + ").concat(props.additionalWidth, ")"),
      color: props.value.type === 'object' ? 'var(--mfc-color-quinary)' : 'var(--mfc-color-secondary)',
      justifyContent: props.value.type !== 'object' ? 'space-between' : 'flex-start'
    },
    disabled: props.value.type === 'object',
    onClick: function onClick() {
      var exists = props.sorts.findIndex(function (e) {
        return e.key === props.value.key;
      });

      switch (currentSort) {
        case 'desc':
          {
            setCurrentSort('asc');

            var value = _toConsumableArray(props.sorts);

            value[exists] = {
              key: props.value.key,
              asc: true,
              desc: false
            };
            props.setSorts(value);
            break;
          }

        case 'asc':
          {
            setCurrentSort(undefined);

            var _value = _toConsumableArray(props.sorts);

            _value.splice(exists, 1);

            props.setSorts(_value);
            break;
          }

        default:
          {
            setCurrentSort('desc');
            props.setSorts([].concat(_toConsumableArray(props.sorts), [{
              key: props.value.key,
              asc: false,
              desc: true
            }]));
            break;
          }
      }
    },
    reference: ref
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "material-icons-round",
    style: {
      display: props.value.type !== 'object' ? 'none' : undefined,
      fontSize: '1.1rem'
    }
  }, "link"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$7.overflow
  }, props.value.label, /*#__PURE__*/React__default["default"].createElement(ToolTip, {
    content: props.value.label.toUpperCase()
  })), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "material-icons-round",
    style: {
      display: props.value.type === 'object' ? 'none' : undefined,
      transform: currentSort === 'desc' ? 'rotate(180deg)' : undefined,
      fontSize: '1.1rem',
      transition: '150ms linear',
      color: currentSort === undefined ? 'var(--mfc-color-quinary)' : 'inherit'
    }
  }, "arrow_downward"));
}
HeaderCell.propTypes = {
  hasOptions: PropTypes__default["default"].bool,
  length: PropTypes__default["default"].number,
  additionalWidth: PropTypes__default["default"].string,
  value: keyTemplate,
  sorts: PropTypes__default["default"].array,
  setSorts: PropTypes__default["default"].func
};

function Header(props) {
  var ref = React$1.useRef();
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$7.headerRow,
    ref: ref
  }, props.keys.map(function (e, i) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: i + 'header-row-cell'
    }, /*#__PURE__*/React__default["default"].createElement(HeaderCell, {
      hasOptions: props.hasOptions,
      setSorts: props.setSorts,
      additionalWidth: e.additionalWidth ? e.additionalWidth : '0px',
      value: e,
      sorts: props.sorts,
      length: props.keys.length
    }), /*#__PURE__*/React__default["default"].createElement("div", {
      style: {
        display: i === props.keys.length - 1 && !props.hasOptions ? 'none' : undefined
      },
      className: styles$7.divider
    }));
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$7.cell,
    disabled: true,
    style: {
      display: props.hasOptions ? 'flex' : 'none',
      justifyContent: 'center',
      width: '30px'
    }
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "material-icons-round",
    style: {
      fontSize: '1.1rem',
      color: 'var(--mfc-color-quinary)'
    }
  }, "settings")));
}
Header.propTypes = {
  keys: PropTypes__default["default"].arrayOf(keyTemplate),
  hasOptions: PropTypes__default["default"].bool,
  setSorts: PropTypes__default["default"].func,
  sorts: PropTypes__default["default"].arrayOf(PropTypes__default["default"].object)
};

function ListHeader(props) {
  var _useHeader = useHeader(props.dispatch, props.actions),
      getType = _useHeader.getType,
      parseDate = _useHeader.parseDate,
      open = _useHeader.open,
      setOpen = _useHeader.setOpen;

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$o.wrapper,
    style: {
      boxShadow: props.scrolled ? undefined : 'none'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$o.header,
    style: {
      marginBottom: props.hook.filters.length === 0 ? '8px' : undefined
    }
  }, props.title, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    variant: 'outlined',
    className: styles$o.button,
    styles: {
      gap: '16px'
    },
    onClick: function onClick() {
      return props.hook.clean();
    }
  }, "Recarregar", /*#__PURE__*/React__default["default"].createElement("span", {
    className: "material-icons-round",
    style: {
      fontSize: '1.3rem'
    }
  }, "refresh")), /*#__PURE__*/React__default["default"].createElement(Button, {
    variant: 'outlined',
    styles: {
      gap: '16px'
    },
    className: styles$o.button,
    onClick: function onClick() {
      return props.setOpenSettings(true);
    }
  }, "Configura\xE7\xF5es", /*#__PURE__*/React__default["default"].createElement("span", {
    className: "material-icons-round",
    style: {
      fontSize: '1.3rem'
    }
  }, "settings")), /*#__PURE__*/React__default["default"].createElement(Button, {
    styles: {
      display: !props.noFilters ? undefined : 'none',
      gap: '16px'
    },
    onClick: function onClick() {
      return setOpen(true);
    },
    variant: "outlined",
    className: styles$o.button
  }, "Filtros", /*#__PURE__*/React__default["default"].createElement("span", {
    className: "material-icons-round",
    style: {
      fontSize: '1.3rem'
    }
  }, "filter_list")), /*#__PURE__*/React__default["default"].createElement(Button, {
    styles: {
      display: props.createOption ? undefined : 'none',
      color: 'white'
    },
    onClick: function onClick() {
      return props.onCreate();
    },
    variant: "filled",
    className: styles$o.button
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "material-icons-round",
    style: {
      fontSize: '1.3rem'
    }
  }, "add")))), props.noFilters ? null : /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      padding: '8px'
    }
  }, /*#__PURE__*/React__default["default"].createElement(Filter, {
    keys: props.keys,
    filters: props.hook.filters,
    setFilters: props.hook.setFilters,
    getType: getType,
    open: open,
    setOpen: setOpen,
    parseDate: parseDate
  })), /*#__PURE__*/React__default["default"].createElement(Header, {
    keys: props.keys.filter(function (e) {
      return e.visible === true;
    }),
    sorts: props.hook.sorts,
    setSorts: props.hook.setSorts,
    hasOptions: props.hasOptions
  }));
}
ListHeader.propTypes = {
  scrolled: PropTypes__default["default"].bool,
  hook: PropTypes__default["default"].object,
  noFilters: PropTypes__default["default"].bool,
  dispatch: PropTypes__default["default"].func,
  actions: PropTypes__default["default"].object,
  title: PropTypes__default["default"].any,
  keys: PropTypes__default["default"].arrayOf(keyTemplate).isRequired,
  setOpenSettings: PropTypes__default["default"].func,
  createOption: PropTypes__default["default"].bool,
  onCreate: PropTypes__default["default"].func,
  hasOptions: PropTypes__default["default"].bool
};

var actions = {
  UPDATE_SIZE: 0,
  UPDATE_VISIBILITY: 1,
  UPDATE_ORDER: 2
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case actions.UPDATE_ORDER:
      {
        return state;
      }

    case actions.UPDATE_SIZE:
      {
        var newValue = _toConsumableArray(state);

        var i = newValue.findIndex(function (e) {
          return e.key === action.payload.key && e.subfieldKey === action.payload.subfieldKey;
        });
        newValue[i].additionalWidth = action.payload.size;
        return newValue;
      }

    case actions.UPDATE_VISIBILITY:
      {
        var _newValue = _toConsumableArray(state);

        var _i = _newValue.findIndex(function (e) {
          return e.key === action.payload.key && e.subfieldKey === action.payload.subfieldKey;
        });

        _newValue[_i].visible = !_newValue[_i].visible;
        return _newValue;
      }

    default:
      return state;
  }
};

function useList(initialKeys) {
  var _useReducer = React$1.useReducer(reducer, initialKeys, function (val) {
    return val;
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      keys = _useReducer2[0],
      keysDispatcher = _useReducer2[1];

  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      openSettings = _useState2[0],
      setOpenSettings = _useState2[1];

  return {
    keys: keys,
    keysDispatcher: keysDispatcher,
    actions: actions,
    openSettings: openSettings,
    setOpenSettings: setOpenSettings
  };
}

var css_248z$7 = "@import '../../../misc/theme/styles.module.css';\n\n.Settings-module_modal__37ZQb {\n    overflow: hidden;\n    background-color: var(--mfc-background-primary);\n\n    border-radius: 5px 0 5px 0;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 25%;\n    height: 100%;\n    padding: 16px;\n    box-shadow: var(--mfc-box-shadow-primary) -1px 0 3px 1px;\n}\n\n.Settings-module_contentWrapper__2PqW1 {\n    display: grid;\n    gap: 8px;\n\n    margin-top: 16px;\n\n    align-content: flex-start;\n    height: 100%;\n\n    width: 100%;\n}\n\n.Settings-module_content__2xUqh {\n    display: grid;\n    gap: 8px;\n    height: 100%;\n    background: var(--mfc-background-secondary);\n    border-radius: 5px;\n    padding: 8px;\n    overflow-y: auto;\n\n    border: var(--mfc-border-primary) 1px solid;\n}\n\n.Settings-module_fieldRow__35E7r {\n\n    height: 60px;\n    position: relative;\n    z-index: 999;\n    background: var(--mfc-background-primary);\n    border-radius: 5px;\n    border: var(--mfc-border-primary) 1px solid;\n    padding: 8px;\n\n    display: flex;\n    gap: 16px;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    /*height: auto;*/\n\n    user-select: none;\n}\n\n.Settings-module_fieldRow__35E7r:hover {\n    border-color: #0095ff;\n}\n\n.Settings-module_fieldLabel__VuNf- {\n\n\n    text-transform: capitalize;\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-weight: 600;\n    color: var(--mfc-color-tertiary);\n    font-size: .9rem;\n\n}\n\n.Settings-module_visibilityButton__2k5Pv {\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n}\n\n\n.Settings-module_header__ToHmR {\n    font-weight: 600;\n    color: var(--mfc-color-secondary);\n}\n\n.Settings-module_range__pOYnk{\n    /*max-width: */\n}";
var styles$6 = {"modal":"Settings-module_modal__37ZQb","contentWrapper":"Settings-module_contentWrapper__2PqW1","content":"Settings-module_content__2xUqh","fieldRow":"Settings-module_fieldRow__35E7r","fieldLabel":"Settings-module_fieldLabel__VuNf-","visibilityButton":"Settings-module_visibilityButton__2k5Pv","header":"Settings-module_header__ToHmR","range":"Settings-module_range__pOYnk"};
styleInject(css_248z$7);

function Settings(props) {
  var getField = function getField(field, index) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: shared$2.wrapper
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$6.fieldRow
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$6.fieldLabel
    }, field.label), /*#__PURE__*/React__default["default"].createElement("input", {
      disabled: !field.visible,
      type: 'range',
      max: 100,
      min: 0,
      onChange: function onChange(event) {
        console.log({
          key: field.key,
          size: event.target.value + '%'
        });
        props.dispatchKeys({
          type: props.actions.UPDATE_SIZE,
          payload: {
            key: field.key,
            size: event.target.value + '%',
            subfieldKey: field.subfieldKey
          }
        });
      },
      className: styles$6.range,
      value: field.additionalWidth ? parseInt(field.additionalWidth.replace('%', '')) : '0'
    }), /*#__PURE__*/React__default["default"].createElement(Button, {
      className: styles$6.visibilityButton,
      color: field.visible ? 'secondary' : undefined,
      onClick: function onClick() {
        console.log({
          type: props.actions.UPDATE_VISIBILITY,
          payload: {
            key: field.key
          }
        });
        props.dispatchKeys({
          type: props.actions.UPDATE_VISIBILITY,
          payload: field
        });
      }
    }, field.visible ? /*#__PURE__*/React__default["default"].createElement("span", {
      className: "material-icons-round"
    }, "visibility") : /*#__PURE__*/React__default["default"].createElement("span", {
      className: "material-icons-round"
    }, "visibility_off"), /*#__PURE__*/React__default["default"].createElement(ToolTip, null, field.visible ? 'Esconder' : 'Mostrar'))));
  };

  var fields = React$1.useMemo(function () {
    return {
      hidden: props.keys.filter(function (f) {
        return !f.visible;
      }),
      visible: props.keys.filter(function (f) {
        return f.visible;
      })
    };
  }, [props.keys]);
  return /*#__PURE__*/React__default["default"].createElement(Modal, {
    open: props.open,
    handleClose: function handleClose() {
      return props.setOpen(false);
    },
    animationStyle: "slide-right",
    blurIntensity: 0,
    className: styles$6.modal
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$6.header
  }, "Configura\xE7\xF5es"), /*#__PURE__*/React__default["default"].createElement(Tabs, {
    className: styles$6.contentWrapper
  }, /*#__PURE__*/React__default["default"].createElement(Tab, {
    label: 'Todos',
    className: styles$6.content
  }, props.keys.map(function (e, i) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: i + '-row-' + JSON.stringify(e.label)
    }, getField(e));
  })), /*#__PURE__*/React__default["default"].createElement(Tab, {
    label: 'Visíveis',
    className: styles$6.content
  }, fields.visible.length > 0 ? fields.visible.map(function (e, i) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: i + '-row-' + JSON.stringify(e.label)
    }, getField(e));
  }) : /*#__PURE__*/React__default["default"].createElement(Empty, {
    customLabel: 'Todos os campos estão escondidos'
  })), /*#__PURE__*/React__default["default"].createElement(Tab, {
    label: 'Escondidos',
    className: styles$6.content
  }, fields.hidden.length > 0 ? fields.hidden.map(function (e, i) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: i + '-row-' + JSON.stringify(e.label)
    }, getField(e));
  }) : /*#__PURE__*/React__default["default"].createElement(Empty, {
    customLabel: 'Todos os campos estão visíveis'
  }))));
}
Settings.propTypes = {
  open: PropTypes__default["default"].bool,
  setOpen: PropTypes__default["default"].func,
  keys: PropTypes__default["default"].arrayOf(keyTemplate),
  dispatchKeys: PropTypes__default["default"].func,
  actions: PropTypes__default["default"].object
};

var css_248z$6 = "@import '../../../misc/theme/styles.module.css';\n\n.Dropdown-module_wrapper__3QXzm {\n    position: relative;\n\n}\n\n.Dropdown-module_buttons__2J8JD {\n    width: 200px;\n    border-radius: 5px;\n    background: var(--mfc-background-primary);\n    height: auto;\n    box-shadow: var(--mfc-box-shadow-primary) 0 0 2px 1px;\n\n    overflow-y: auto;\n    max-height: clamp(250px, 10vh, 300px);\n\n    display: grid;\n    transition: 150ms ease;\n}\n\n\n.Dropdown-module_button__3lkck {\n\n\n    overflow: hidden;\n    outline: none;\n    border: none;\n    padding: 12px 0 12px 8px;\n    text-align: left;\n    background: transparent;\n\n    transition: 150ms linear;\n    cursor: pointer;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.Dropdown-module_buttonLabel__2HvoU {\n    display: flex;\n    padding: 0 10px;\n    justify-content: flex-end;\n    width: 100%;\n}\n";
var styles$5 = {"wrapper":"Dropdown-module_wrapper__3QXzm","buttons":"Dropdown-module_buttons__2J8JD","button":"Dropdown-module_button__3lkck","buttonLabel":"Dropdown-module_buttonLabel__2HvoU"};
styleInject(css_248z$6);

function Dropdown(props) {
  var _props$buttons;

  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$5.wrapper
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    highlight: open,
    variant: props.variant,
    onClick: function onClick() {
      return setOpen(true);
    },
    disabled: props.disabled,
    className: props.className
  }, props.label), /*#__PURE__*/React__default["default"].createElement(Modal, {
    variant: "fit",
    styles: {
      transform: props.align === 'top' ? 'translateY(-100%)' : 'translateY(100%)'
    },
    blurIntensity: 0,
    className: styles$5.buttons,
    animationStyle: 'fade',
    open: open,
    handleClose: function handleClose() {
      return setOpen(false);
    }
  }, (_props$buttons = props.buttons) === null || _props$buttons === void 0 ? void 0 : _props$buttons.map(function (b, i) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: 'dropdown-' + i
    }, /*#__PURE__*/React__default["default"].createElement(Button, {
      disabled: b.disabled,
      onClick: function onClick() {
        b.onClick(props.onClickProps);
        setOpen(false);
      },
      className: styles$5.button
    }, b.icon, /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$5.buttonLabel
    }, b.label)));
  })));
}
Dropdown.propTypes = {
  variant: PropTypes__default["default"].oneOf(['minimal', 'filled', 'outlined', 'minimal-horizontal']),
  className: PropTypes__default["default"].string,
  onClickProps: PropTypes__default["default"].any,
  label: PropTypes__default["default"].any,
  disabled: PropTypes__default["default"].bool,
  buttons: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    label: PropTypes__default["default"].any,
    icon: PropTypes__default["default"].object,
    onClick: PropTypes__default["default"].func,
    disabled: PropTypes__default["default"].bool
  })),
  align: PropTypes__default["default"].oneOf(['top', 'bottom'])
};

function Row(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      display: 'flex',
      maxWidth: '100%',
      overflow: 'hidden'
    },
    ref: props.reference
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    className: styles$7.row,
    variant: 'minimal-horizontal',
    onClick: function onClick() {
      return props.onClick();
    }
  }, props.keys.map(function (e, i) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: i + '-row-cell-' + props.index
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      style: {
        display: i === 0 ? 'none' : undefined,
        height: '40%'
      },
      className: styles$7.divider
    }), /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$7.cell,
      style: {
        maxWidth: "calc(".concat(1 / props.keys.length * 100, "% + ").concat(e.additionalWidth ? e.additionalWidth : '0px', ")"),
        width: "calc(".concat(1 / props.keys.length * 100, "% + ").concat(e.additionalWidth ? e.additionalWidth : '0px', ")"),
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$7.overflow
    }, /*#__PURE__*/React__default["default"].createElement(RowCell, {
      data: props.entry,
      field: e
    }))));
  })), props.controlButtons ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$7.cell,
    style: {
      width: '30px',
      alignItems: 'unset',
      height: '60px',
      padding: 0
    }
  }, /*#__PURE__*/React__default["default"].createElement(Dropdown, {
    className: styles$7.mainButton,
    variant: 'minimal-horizontal',
    label: /*#__PURE__*/React__default["default"].createElement("span", {
      className: "material-icons-round"
    }, "arrow_drop_down"),
    buttons: props.controlButtons,
    onClickProps: props.entry
  })) : null);
}
Row.propTypes = {
  keys: PropTypes__default["default"].arrayOf(keyTemplate),
  entry: PropTypes__default["default"].object,
  onClick: PropTypes__default["default"].func,
  hasOptions: PropTypes__default["default"].bool,
  index: PropTypes__default["default"].number,
  reference: PropTypes__default["default"].func,
  controlButtons: PropTypes__default["default"].array
};

function List(props) {
  var _useList = useList(props.keys),
      keys = _useList.keys,
      keysDispatcher = _useList.keysDispatcher,
      actions = _useList.actions,
      setOpenSettings = _useList.setOpenSettings,
      openSettings = _useList.openSettings;

  var lastElementRef = useInfiniteScroll(props.hook.setCurrentPage, props.hook.currentPage, props.hook.loading, props.hook.hasMore);

  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      scrolled = _useState2[0],
      setScrolled = _useState2[1];

  return /*#__PURE__*/React__default["default"].createElement("div", {
    onScroll: function onScroll(event) {
      if (event.target.scrollTop > 0) setScrolled(true);else setScrolled(false);
    },
    className: styles$8.container
  }, /*#__PURE__*/React__default["default"].createElement(Settings, {
    open: openSettings,
    keys: keys,
    actions: actions,
    setOpen: setOpenSettings,
    dispatchKeys: keysDispatcher
  }), /*#__PURE__*/React__default["default"].createElement(ListHeader, {
    scrolled: scrolled,
    title: props.title,
    noFilters: props.noFilters,
    createOption: props.createOption,
    onCreate: props.onCreate,
    hook: props.hook,
    hasOptions: props.controlButtons && props.controlButtons.length > 0,
    keys: keys,
    actions: actions,
    dispatch: keysDispatcher,
    setOpenSettings: setOpenSettings
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$8.tableWrapper
  }, props.hook.data.length === 0 ? /*#__PURE__*/React__default["default"].createElement(Empty, null) : null, props.hook.data.map(function (e, index) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: e.id + '-list-row'
    }, /*#__PURE__*/React__default["default"].createElement(Row, {
      onClick: function onClick() {
        return props.onRowClick(e.data);
      },
      entry: e.data,
      index: index,
      controlButtons: props.controlButtons,
      keys: props.keys.filter(function (e) {
        return e.visible === true;
      }),
      reference: lastElementRef,
      hasOptions: props.controlButtons && props.controlButtons.length > 0
    }));
  })));
}
List.propTypes = {
  noFilters: PropTypes__default["default"].bool,
  hook: PropTypes__default["default"].object.isRequired,
  onRowClick: PropTypes__default["default"].func.isRequired,
  keys: PropTypes__default["default"].arrayOf(keyTemplate).isRequired,
  controlButtons: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    icon: PropTypes__default["default"].element,
    label: PropTypes__default["default"].any,
    onClick: PropTypes__default["default"].func,
    disabled: PropTypes__default["default"].bool
  })),
  title: PropTypes__default["default"].any,
  createOption: PropTypes__default["default"].bool,
  onCreate: PropTypes__default["default"].func,
  onlyVisualization: PropTypes__default["default"].bool
};

function useChart(props) {
  var theme = React$1.useContext(ThemeContext);
  var ref = React$1.useRef();

  var _useState = React$1.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      points = _useState2[0],
      setPoints = _useState2[1];

  var _useState3 = React$1.useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      context = _useState4[0],
      setContext = _useState4[1];

  var biggest = React$1.useMemo(function () {
    var values = props.data.map(function (e) {
      return e[props.valueKey];
    });
    return Math.max.apply(Math, _toConsumableArray(values));
  }, [props.data]);
  var total = React$1.useMemo(function () {
    return props.data.reduce(function (total, el) {
      return total + el[props.valueKey];
    }, 0);
  }, [props.data]);

  var randomColor = function randomColor() {
    var n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

  var handleMouseMove = function handleMouseMove(event) {
  };

  React$1.useEffect(function () {
    var _ref$current;

    var ctx = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.getContext('2d');
    setContext(ctx);
    ctx.fillStyle = theme.themes.mfc_color_primary;
    ctx.font = "600 14px Roboto";
  }, []);
  React$1.useEffect(function () {
    var _ref$current2;

    props.render(context);
    (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.addEventListener('mousemove', handleMouseMove);
    return function () {
      var _ref$current3;

      (_ref$current3 = ref.current) === null || _ref$current3 === void 0 ? void 0 : _ref$current3.removeEventListener('mousemove', handleMouseMove);
    };
  }, [props.data, context]);
  return {
    biggest: biggest,
    total: total,
    randomColor: randomColor,
    points: points,
    setPoints: setPoints,
    ref: ref,
    theme: theme
  };
}
useChart.propTypes = {
  data: PropTypes__default["default"].arrayOf(PropTypes__default["default"].object).isRequired,
  valueKey: PropTypes__default["default"].string.isRequired,
  render: PropTypes__default["default"].func.isRequired
};

var Bar = /*#__PURE__*/function () {
  function Bar(_ref) {
    var x = _ref.x,
        y = _ref.y,
        value = _ref.value,
        label = _ref.label,
        color = _ref.color,
        width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, Bar);

    self.width = width;
    self.height = height;
    self.x = x;
    self.y = y;
    self.value = value;
    self.label = label;
    self.color = color;
  }

  _createClass(Bar, [{
    key: "draw",
    value: function draw(context) {
      context.fillStyle = self.color;
      context.fillRect(self.x, self.y, self.width, self.height);
    }
  }, {
    key: "onHover",
    value: function onHover() {}
  }]);

  return Bar;
}();

var css_248z$5 = "@import '../../../misc/theme/styles.module.css';\r\n@import url('http://fonts.cdnfonts.com/css/roboto');\r\n\r\n.Charts-module_wrapper__2bzGf {\r\n    background: var(--mfc-background-primary);\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    border-radius: 5px;\r\n    padding: 4px;\r\n    width: fit-content;\r\n    height: fit-content;\r\n    display: grid;\r\n    gap: 8px;\r\n}\r\n\r\n.Charts-module_title__19E6C {\r\n    font-size: 1.1rem;\r\n    color: var(--mfc-color-primary);\r\n    text-align: left;\r\n    font-weight: 600;\r\n    margin: unset;\r\n    padding: 0;\r\n}\r\n\r\n";
var shared = {"wrapper":"Charts-module_wrapper__2bzGf","title":"Charts-module_title__19E6C"};
styleInject(css_248z$5);

function HorizontalChart(props) {
  var drawBar = function drawBar(_ref) {
    var axis = _ref.axis,
        value = _ref.value,
        position = _ref.position,
        context = _ref.context;
    var length = props.data.length;
    var width = value * 100 / biggest * (ref.current.width - ref.current.width * 0.1) / 100;
    var height = ref.current.height / length;
    var x = ref.current.width * 0.1;
    var y = position * height;
    var bar = new Bar({
      x: x,
      y: y,
      value: value,
      label: axis,
      color: randomColor(),
      width: width,
      height: height
    });
    bar.draw(context);
    setPoints(function (prevState) {
      return [].concat(_toConsumableArray(prevState), [{
        x: x,
        y: y,
        value: value
      }]);
    });
    context.fillStyle = theme.themes.mfc_color_primary;
    context.fillText(axis, 0, y + 7 + height / 2);
  };

  var render = function render(context) {
    if (context) {
      context.clearRect(0, 0, ref.current.width, ref.current.height);
      props.data.forEach(function (el, index) {
        drawBar({
          axis: el[props.axis.field],
          value: el[props.value.field],
          context: context,
          position: index
        });
      });
    }
  };

  var _useChart = useChart({
    data: props.data,
    valueKey: props.value.field,
    render: render
  }),
      biggest = _useChart.biggest,
      randomColor = _useChart.randomColor,
      setPoints = _useChart.setPoints,
      ref = _useChart.ref,
      theme = _useChart.theme;

  return /*#__PURE__*/React.createElement("div", {
    className: shared.wrapper
  }, /*#__PURE__*/React.createElement("h1", {
    className: shared.title
  }, props.title), /*#__PURE__*/React.createElement("canvas", {
    ref: ref,
    width: props.width,
    height: props.height
  }));
}
HorizontalChart.propTypes = {
  value: PropTypes__default["default"].shape({
    label: PropTypes__default["default"].string,
    field: PropTypes__default["default"].string
  }),
  axis: PropTypes__default["default"].shape({
    label: PropTypes__default["default"].string,
    field: PropTypes__default["default"].string
  }),
  data: PropTypes__default["default"].arrayOf(PropTypes__default["default"].object),
  width: PropTypes__default["default"].number,
  height: PropTypes__default["default"].number,
  title: PropTypes__default["default"].string,
  legends: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    label: PropTypes__default["default"].string,
    field: PropTypes__default["default"].string
  })),
  color: PropTypes__default["default"].string
};

function LineChart(props) {
  var xBefore, yBefore;

  var drawBar = function drawBar(_ref) {
    var axis = _ref.axis,
        value = _ref.value,
        position = _ref.position,
        context = _ref.context;
    var labelSpacing = ref.current.height * 0.1;
    var pVariation = value * 100 / biggest;
    var height = pVariation * (ref.current.height - labelSpacing) / 100;
    var x, y;
    x = (ref.current.width / (props.data.length - 1) - 7.5) * position + 15;
    y = ref.current.height - labelSpacing - height + 10;
    setPoints(function (prevState) {
      return [].concat(_toConsumableArray(prevState), [{
        x: x,
        y: y
      }]);
    });
    context.strokeStyle = props.color ? props.color : '#0095ff';
    context.fillStyle = props.color ? props.color : '#0095ff';
    context.beginPath();
    context.arc(x, y, 4, 0, 2 * Math.PI);
    context.fill();
    context.stroke();

    if (position > 0) {
      context.beginPath();
      context.moveTo(xBefore, yBefore);
      context.lineTo(x, y);
      context.stroke();
    }

    xBefore = x;
    yBefore = y;
    context.fillStyle = theme.themes.mfc_color_primary;
    context.fillText(axis, x - 8, ref.current.height - 16);
  };

  var render = function render(context) {
    if (context) {
      context.clearRect(0, 0, ref.current.width, ref.current.height);
      props.data.forEach(function (el, index) {
        drawBar({
          axis: el[props.axis.field],
          value: el[props.value.field],
          context: context,
          position: index
        });
      });
    }
  };

  var _useChart = useChart({
    data: props.data,
    valueKey: props.value.field,
    render: render
  }),
      biggest = _useChart.biggest,
      ref = _useChart.ref,
      setPoints = _useChart.setPoints,
      theme = _useChart.theme;

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.wrapper
  }, /*#__PURE__*/React__default["default"].createElement("h1", {
    className: shared.title
  }, props.title), /*#__PURE__*/React__default["default"].createElement("canvas", {
    ref: ref,
    width: props.width,
    height: props.height
  }));
}
LineChart.propTypes = {
  value: PropTypes__default["default"].shape({
    label: PropTypes__default["default"].string,
    field: PropTypes__default["default"].string
  }),
  axis: PropTypes__default["default"].shape({
    label: PropTypes__default["default"].string,
    field: PropTypes__default["default"].string
  }),
  data: PropTypes__default["default"].arrayOf(PropTypes__default["default"].object),
  width: PropTypes__default["default"].number,
  height: PropTypes__default["default"].number,
  title: PropTypes__default["default"].string,
  legends: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    label: PropTypes__default["default"].string,
    field: PropTypes__default["default"].string
  })),
  color: PropTypes__default["default"].string
};

function PieChart(props) {
  var render = function render(context) {
    if (context) {
      context.clearRect(0, 0, ref.current.width, ref.current.height);
      var startAngle = 0;
      var cx = ref.current.width / 2;
      var cy = ref.current.height / 2;
      var radius = (cx > cy ? cx : cy) - 20;
      var newPoints = [];
      props.data.forEach(function (el, index) {
        var color = randomColor();
        context.fillStyle = color;
        context.lineWidth = 1;
        context.strokeStyle = color;
        context.beginPath();
        var endAngle = el[props.value.field] / total * (Math.PI * 2) + startAngle;
        newPoints.push({
          x: endAngle,
          y: startAngle,
          value: el[props.value.field]
        });
        context.moveTo(cx, cy);
        context.arc(cx, cy, radius, startAngle, endAngle, false);
        context.lineTo(cx, cy);
        context.fill();
        context.stroke();
        context.closePath();
        startAngle = endAngle;
      });
      setPoints(newPoints);
    }
  };

  var _useChart = useChart({
    data: props.data,
    valueKey: props.value.field,
    render: render
  }),
      total = _useChart.total,
      randomColor = _useChart.randomColor,
      ref = _useChart.ref,
      setPoints = _useChart.setPoints;

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.wrapper
  }, /*#__PURE__*/React__default["default"].createElement("h1", {
    className: shared.title
  }, props.title), /*#__PURE__*/React__default["default"].createElement("canvas", {
    ref: ref,
    width: props.width,
    height: props.height
  }));
}
PieChart.propTypes = {
  value: PropTypes__default["default"].shape({
    label: PropTypes__default["default"].string,
    field: PropTypes__default["default"].string
  }),
  axis: PropTypes__default["default"].shape({
    label: PropTypes__default["default"].string,
    field: PropTypes__default["default"].string
  }),
  data: PropTypes__default["default"].arrayOf(PropTypes__default["default"].object),
  width: PropTypes__default["default"].number,
  height: PropTypes__default["default"].number,
  title: PropTypes__default["default"].string,
  legends: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    label: PropTypes__default["default"].string,
    field: PropTypes__default["default"].string
  })),
  color: PropTypes__default["default"].string
};

function VerticalChart(props) {
  var drawBar = function drawBar(_ref) {
    var axis = _ref.axis,
        value = _ref.value,
        position = _ref.position,
        context = _ref.context;
    var length = props.data.length - 1;
    var width = ref.current.width / length;
    var x = position * width;
    var y = ref.current.height - 20;
    var height = value * 100 / biggest * (ref.current.height - ref.current.height * 0.1) / 100;
    var bar = new Bar({
      x: x,
      y: y,
      value: value,
      label: axis,
      color: randomColor(),
      width: width,
      height: -height
    });
    bar.draw(context);
    setPoints(function (prevState) {
      return [].concat(_toConsumableArray(prevState), [{
        x: x,
        y: y,
        value: value
      }]);
    });
    context.fillStyle = theme.themes.mfc_color_primary;
    context.fillText(axis, x, ref.current.height);
  };

  var render = function render(context) {
    if (context) {
      context.clearRect(0, 0, ref.current.width, ref.current.height);
      props.data.forEach(function (el, index) {
        drawBar({
          axis: el[props.axis.field],
          value: el[props.value.field],
          context: context,
          position: index
        });
      });
    }
  };

  var _useChart = useChart({
    render: render,
    data: props.data,
    valueKey: props.value.field
  }),
      biggest = _useChart.biggest,
      randomColor = _useChart.randomColor,
      ref = _useChart.ref,
      setPoints = _useChart.setPoints,
      theme = _useChart.theme;

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: shared.wrapper
  }, /*#__PURE__*/React__default["default"].createElement("h1", {
    className: shared.title
  }, props.title), /*#__PURE__*/React__default["default"].createElement("canvas", {
    ref: ref,
    width: props.width,
    height: props.height
  }));
}
VerticalChart.propTypes = {
  value: PropTypes__default["default"].shape({
    label: PropTypes__default["default"].string,
    field: PropTypes__default["default"].string
  }),
  axis: PropTypes__default["default"].shape({
    label: PropTypes__default["default"].string,
    field: PropTypes__default["default"].string
  }),
  data: PropTypes__default["default"].arrayOf(PropTypes__default["default"].object),
  width: PropTypes__default["default"].number,
  height: PropTypes__default["default"].number,
  title: PropTypes__default["default"].string,
  legends: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    label: PropTypes__default["default"].string,
    field: PropTypes__default["default"].string
  })),
  color: PropTypes__default["default"].string
};

var css_248z$4 = ".Feed-module_wrapper__Xvrje{\r\n    padding: 16px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-flow: wrap;\r\n    gap: 16px;\r\n}\r\n.Feed-module_title__1yn-F{\r\n    font-size: 1.2rem;\r\n    color: var(--mfc-color-secondary);\r\n    font-weight: 600;\r\n\r\n    display: flex;\r\n    gap: 8px;\r\n    align-items: center;\r\n    padding: 16px;\r\n    white-space: nowrap;\r\n}\r\n\r\n.Feed-module_titleDivider__3dtLy{\r\n    height: 1px;\r\n    width: 100%;\r\n    background: var(--mfc-border-secondary);\r\n}";
var styles$4 = {"wrapper":"Feed-module_wrapper__Xvrje","title":"Feed-module_title__1yn-F","titleDivider":"Feed-module_titleDivider__3dtLy"};
styleInject(css_248z$4);

var css_248z$3 = ".Card-module_cardWrapper__JQNtF {\r\n    width: calc(16.666% - 13.4px);\r\n    height: 25vh;\r\n    overflow: hidden;\r\n    border-radius: 8px;\r\n\r\n    background: var(--mfc-background-primary);\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    cursor: pointer;\r\n\r\n    transition: 150ms linear;\r\n\r\n    user-select: none;\r\n}\r\n.Card-module_cardWrapper__JQNtF:active{\r\n    transform: scale(.98);\r\n}\r\n.Card-module_cardImage__3fNss {\r\n    height: 75%;\r\n    overflow: hidden;\r\n    transition: 150ms linear;\r\n}\r\n\r\n.Card-module_cardContent__1DzmO {\r\n    transition: 150ms linear;\r\n    padding: 8px;\r\n\r\n    display: grid;\r\n    gap: 4px;\r\n    align-items: flex-start;\r\n    align-content: flex-start;\r\n}\r\n\r\n.Card-module_cardWrapper__JQNtF:hover .Card-module_cardImage__3fNss {\r\n    height: 25%;\r\n}\r\n\r\n.Card-module_cardWrapper__JQNtF:hover .Card-module_cardContent__1DzmO {\r\n    height: 75%;\r\n}\r\n.Card-module_cardWrapper__JQNtF:hover .Card-module_description__3PC9l {\r\n    white-space: normal;\r\n}\r\n.Card-module_header__2vgzP {\r\n    font-size: 1.1rem;\r\n    font-weight: 600;\r\n    color: var(--mfc-color-secondary);\r\n}\r\n\r\n.Card-module_description__3PC9l {\r\n    font-size: .8rem;\r\n    font-weight: normal;\r\n    color: var(--mfc-color-tertiary);\r\n\r\n    overflow: hidden;\r\n    max-width: 100%;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}";
var styles$3 = {"cardWrapper":"Card-module_cardWrapper__JQNtF","cardImage":"Card-module_cardImage__3fNss","cardContent":"Card-module_cardContent__1DzmO","description":"Card-module_description__3PC9l","header":"Card-module_header__2vgzP"};
styleInject(css_248z$3);

function FeedCard(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$3.cardWrapper
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$3.cardImage
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: props.image,
    alt: props.title
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$3.cardContent
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$3.header
  }, props.title), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$3.description
  }, props.description)));
}
FeedCard.propTypes = {
  image: PropTypes__default["default"].string,
  title: PropTypes__default["default"].string,
  description: PropTypes__default["default"].string,
  onClick: PropTypes__default["default"].func.isRequired,
  index: PropTypes__default["default"].number
};

function Feed(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: props.width
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$4.title
  }, props.title, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$4.titleDivider
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$4.wrapper
  }, props.data.filter(function (_, i) {
    return i % 2;
  }).map(function (entry, i) {
    return /*#__PURE__*/React__default["default"].createElement(FeedCard, {
      onClick: function onClick() {
        return props.onCardClick(entry);
      },
      description: entry[props.keys.description],
      title: entry[props.keys.title],
      index: i,
      image: entry[props.keys.image]
    });
  })));
}
Feed.propTypes = {
  onCardClick: PropTypes__default["default"].func,
  keys: PropTypes__default["default"].shape({
    title: PropTypes__default["default"].string,
    image: PropTypes__default["default"].string,
    description: PropTypes__default["default"].string
  }),
  title: PropTypes__default["default"].string,
  width: PropTypes__default["default"].string
};

var css_248z$2 = "/*HEADER*/\r\n.Article-module_headers__VgW0I {\r\n    display: grid;\r\n    align-items: flex-start;\r\n    text-align: left;\r\n\r\n}\r\n\r\n.Article-module_header__1uZNZ[ data-variant = 'primary'] {\r\n    font-size: 1.3rem;\r\n    color: var(--mfc-color-secondary);\r\n    font-weight: 600;\r\n\r\n    font-family: 'Roboto';\r\n\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.Article-module_header__1uZNZ[ data-variant = 'secondary'] {\r\n    font-size: .95rem;\r\n    color: var(--mfc-color-tertiary);\r\n    font-weight: 600;\r\n\r\n    font-family: 'Roboto';\r\n\r\n    margin: 0;\r\n}\r\n\r\n.Article-module_header__1uZNZ[ data-variant = 'tertiary'] {\r\n    font-size: .75rem;\r\n    color: var(--mfc-color-quaternary);\r\n    font-weight: 600;\r\n\r\n    font-family: 'Roboto';\r\n\r\n    margin: 0;\r\n}\r\n\r\n\r\n/*BODY*/\r\n.Article-module_body__3fgRT {\r\n\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    border-radius: 5px;\r\n    padding: 8px;\r\n    display: grid;\r\n    align-items: flex-start;\r\n    gap: 12px;\r\n    background: var(--mfc-background-primary);\r\n    text-align: left;\r\n    font-size: .9rem;\r\n    color: var(--mfc-color-tertiary);\r\n}\r\n\r\n\r\n\r\n.Article-module_baseText__2TAlu {\r\n    margin: 0;\r\n    font-size: 1rem;\r\n}\r\n\r\n\r\n/*MISC*/\r\n.Article-module_block__2rf8r {\r\n    display: grid;\r\n    gap: 12px;\r\n}\r\n\r\n.Article-module_link__2f9QC {\r\n    transition: 150ms linear;\r\n    width: fit-content;\r\n    text-decoration: none;\r\n    color: #0095ff;\r\n    font-weight: bold;\r\n}\r\n\r\n.Article-module_link__2f9QC:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.Article-module_link__2f9QC:active {\r\n    color: var(--mfc-color-quaternary);\r\n    text-decoration: none;\r\n}\r\n\r\n.Article-module_footer__1yhY4 {\r\n    background: var(--mfc-background-primary);\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    border-radius: 5px;\r\n    padding: 16px;\r\n\r\n    display: flex;\r\n    text-align: left;\r\n    font-size: .9rem;\r\n    color: var(--mfc-color-tertiary);\r\n}\r\n\r\n.Article-module_wrapper__3Ek7A {\r\n    width: 100%;\r\n    display: grid;\r\n    gap: 32px;\r\nheight: fit-content;\r\n\r\n    padding-bottom: 25%;\r\n}\r\n\r\n.Article-module_container__3Zz32 {\r\n    padding: 8px 0;\r\n    display: flex;\r\n    scroll-behavior: smooth;\r\n    max-height: 100%;\r\n    overflow-y: auto;\r\n    gap: 32px;\r\n\r\n\r\n}\r\n.Article-module_nativeCode__2wLu7{\r\n    gap: 8px;\r\n    width: 100%;\r\n    padding: 8px;\r\n    border-radius: 5px;\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n}\r\n\r\n\r\n.Article-module_preFormattedText__3jcDF {\r\n\r\n    margin: 16px 0 0;\r\n    justify-self: stretch;\r\n\r\n    background: var(--mfc-background-secondary);\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    color: var(--mfc-color-primary);\r\n    border-radius: 5px;\r\n    padding: 16px 24px;\r\n    text-align: left;\r\n}\r\n";
var styles$2 = {"headers":"Article-module_headers__VgW0I","header":"Article-module_header__1uZNZ","body":"Article-module_body__3fgRT","baseText":"Article-module_baseText__2TAlu","block":"Article-module_block__2rf8r","link":"Article-module_link__2f9QC","footer":"Article-module_footer__1yhY4","wrapper":"Article-module_wrapper__3Ek7A","container":"Article-module_container__3Zz32","nativeCode":"Article-module_nativeCode__2wLu7","preFormattedText":"Article-module_preFormattedText__3jcDF"};
styleInject(css_248z$2);

var css_248z$1 = ".Block-module_code__HODBm {\r\n    white-space: pre-wrap;\r\n    word-wrap: break-word;\r\n    tab-size: 16;\r\n    padding-bottom: 16px;\r\n}\r\n\r\n.Block-module_button__1vdzp {\r\n    position: absolute !important;\r\n    top: 0;\r\n    left: 0;\r\n    --transform: translate(-50%, -50%);\r\n\r\n    padding: 8px;\r\n    width: 30px;\r\n    height: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    /*background: var(--mfc-background-primary) !important;*/\r\n}\r\n\r\n\r\n.Block-module_wrapper__1eIkX {\r\n    padding: 8px;\r\n    background: var(--mfc-background-secondary);\r\n    border: var(--mfc-border-primary) 1px solid;\r\n\r\n    max-height: 100%;\r\n    overflow: auto;\r\n\r\n    border-radius: 5px;\r\n\r\n    max-width: 100%;\r\n    margin: 16px auto;\r\n    position: relative;\r\n\r\n    display: grid;\r\n    gap: 0;\r\n}\r\n\r\n.Block-module_enumeration__3VK4l{\r\n    padding: 0;\r\n    margin: 0;\r\n    background: transparent;\r\n    border: none;\r\n    outline: none;\r\n\r\n    text-align: left;\r\n    user-select: none;\r\n    color: var(--mfc-color-quinary);\r\n    position: absolute;\r\n    width: calc(100% - 16px);\r\n    transition: 150ms linear;\r\n\r\n}\r\n.Block-module_enumContent__btUnw{\r\n    width: fit-content;\r\n    position: absolute;\r\n    z-index: 1;\r\n    padding-left: 16px;\r\n}\r\n\r\n\r\n.Block-module_line__a_hET:hover .Block-module_enumeration__3VK4l{\r\n\r\n    color: var(--mfc-color-primary);\r\n    background: var(--mfc-background-quaternary);\r\n    /*background: red !important;*/\r\n}";
var styles$1 = {"code":"Block-module_code__HODBm","button":"Block-module_button__1vdzp","wrapper":"Block-module_wrapper__1eIkX","enumeration":"Block-module_enumeration__3VK4l","enumContent":"Block-module_enumContent__btUnw","line":"Block-module_line__a_hET"};
styleInject(css_248z$1);

function copyToClipboard(element) {
  element.select();
  element.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(element.value);
}

function Wrapper(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$1.wrapper,
    style: {
      width: props.width
    },
    "data-float": props["float"] ? props["float"] : 'none'
  }, !props.noCopy ? null : /*#__PURE__*/React__default["default"].createElement(Button, {
    variant: "filled",
    onClick: function onClick() {
      copyToClipboard(props.contentRef);
    },
    className: styles$1.button
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "material-icons-round",
    style: {
      fontSize: '1.2rem'
    }
  }, "content_copy")), props.children);
}
Wrapper.propTypes = {
  width: PropTypes__default["default"].string,
  "float": PropTypes__default["default"].oneOf(['right', 'left', 'stretch']),
  children: PropTypes__default["default"].node,
  contentRef: PropTypes__default["default"].object,
  noCopy: PropTypes__default["default"].bool
};

function TypeTag(props) {
  var ref = React$1.useRef();
  var content = React$1.useMemo(function () {
    switch (props.type) {
      case 'pre-formatted':
        return /*#__PURE__*/React__default["default"].createElement("pre", {
          ref: ref,
          className: styles$2.preFormattedText
        }, props.content);

      case 'native-code':
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: styles$2.nativeCode
        }, props.content);

      case 'image':
        return /*#__PURE__*/React__default["default"].createElement("img", {
          src: props.content,
          alt: 'image-' + props.index,
          className: styles$2.image,
          "data-float": props["float"]
        });

      default:
        if (props.linkTo) return /*#__PURE__*/React__default["default"].createElement("a", {
          className: styles$2.link,
          href: props.linkTo
        }, props.content);else return /*#__PURE__*/React__default["default"].createElement("p", {
          className: styles$2.baseText,
          dangerouslySetInnerHTML: {
            __html: props.content
          },
          "data-float": props["float"]
        });
    }
  }, [props.content]);
  return content;
}
TypeTag.propTypes = {
  content: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].node]),
  type: PropTypes__default["default"].oneOf(['native-code', 'pre-formatted', 'text', 'image']),
  index: PropTypes__default["default"].number,
  "float": PropTypes__default["default"].oneOf(['right', 'left', 'stretch']),
  linkTo: PropTypes__default["default"].string,
  noCopy: PropTypes__default["default"].bool
};

var css_248z = ".Navigation-module_wrapper__fZnqT{\r\n    width: 20%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 4px;\r\n\r\n    position: sticky;\r\n    top: 0;\r\n}\r\n\r\n.Navigation-module_button__11JVb{\r\n    font-weight: 600;\r\n    text-align: left;\r\n    background: var(--mfc-background-primary);\r\n}";
var styles = {"wrapper":"Navigation-module_wrapper__fZnqT","button":"Navigation-module_button__11JVb"};
styleInject(css_248z);

function ArticleNavigation(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles.wrapper
  }, props.headers.map(function (e, i) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      key: i + '-headers'
    }, /*#__PURE__*/React__default["default"].createElement(Button, {
      variant: 'minimal-horizontal',
      className: styles.button,
      highlight: props.onHeader === i,
      onClick: function onClick() {
        var element = document.getElementById(e.id);

        if (element) {
          var target = element.parentNode;
          props.scrollTo(target.offsetTop);
        }
      }
    }, e.content));
  }));
}
ArticleNavigation.propTypes = {
  setOnHeader: PropTypes__default["default"].func,
  onHeader: PropTypes__default["default"].number,
  scrollTo: PropTypes__default["default"].func,
  headers: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string,
    type: PropTypes__default["default"].oneOf(['primary', 'secondary', 'tertiary']),
    linkTo: PropTypes__default["default"].string,
    id: PropTypes__default["default"].string
  }))
};

function Article(props) {
  var ref = React$1.useRef();
  var headers = React$1.useMemo(function () {
    var h = [];
    props.data.forEach(function (e, eI) {
      var _e$headers;

      return (_e$headers = e.headers) === null || _e$headers === void 0 ? void 0 : _e$headers.forEach(function (l, i) {
        if (l.type === 'primary') h.push(_objectSpread2(_objectSpread2({}, l), {}, {
          id: 'header-' + eI
        }));
      });
    });
    return h;
  }, [props.data]);
  var intersectionObs = React$1.useRef();

  var _useState = React$1.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      onHeader = _useState2[0],
      setOnHeader = _useState2[1];

  var handleIntersection = function handleIntersection(event) {
    var inter = event.filter(function (e) {
      return e.isIntersecting;
    });

    if (inter && inter.length > 0) {
      var i = parseInt(inter[0].target.id.split('-')[1]);
      setOnHeader(i);
    }
  };

  React$1.useEffect(function () {
    intersectionObs.current = new IntersectionObserver(handleIntersection, {
      root: ref.current,
      rootMargin: "0px 0px -50% 0px"
    });
    headers.forEach(function (e) {
      var _intersectionObs$curr;

      var element = document.getElementById(e.id);
      (_intersectionObs$curr = intersectionObs.current) === null || _intersectionObs$curr === void 0 ? void 0 : _intersectionObs$curr.observe(element);
    });
    return function () {
      headers.forEach(function (e) {
        var _intersectionObs$curr2;

        var element = document.getElementById(e.id);
        if (element !== null) (_intersectionObs$curr2 = intersectionObs.current) === null || _intersectionObs$curr2 === void 0 ? void 0 : _intersectionObs$curr2.unobserve(element);
      });
    };
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$2.container,
    ref: ref
  }, /*#__PURE__*/React__default["default"].createElement("article", {
    className: [props.className, styles$2.wrapper].join(' '),
    style: props.styles
  }, props.data.map(function (data, index) {
    var _data$headers, _data$body;

    return /*#__PURE__*/React__default["default"].createElement("section", {
      className: styles$2.block,
      key: "".concat(index, "-data_object"),
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      id: 'header-' + index,
      style: {
        height: '10px',
        position: 'absolute',
        top: '0'
      }
    }), /*#__PURE__*/React__default["default"].createElement("header", {
      className: styles$2.headers
    }, (_data$headers = data.headers) === null || _data$headers === void 0 ? void 0 : _data$headers.map(function (header, hIndex) {
      return /*#__PURE__*/React__default["default"].createElement("h1", {
        key: "".concat(index, "-data_object-").concat(hIndex, "-header"),
        className: styles$2.header,
        "data-variant": header.type
      }, header.linkTo ? /*#__PURE__*/React__default["default"].createElement("a", {
        className: styles$2.link,
        href: header.linkTo
      }, header.content) : header.content);
    })), /*#__PURE__*/React__default["default"].createElement("section", {
      className: styles$2.body
    }, (_data$body = data.body) === null || _data$body === void 0 ? void 0 : _data$body.map(function (body, bIndex) {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
        key: "".concat(index, "-data_object-").concat(bIndex, "-body")
      }, /*#__PURE__*/React__default["default"].createElement(TypeTag, {
        linkTo: body.linkTo,
        type: body.type,
        "float": body["float"],
        content: body.content,
        index: bIndex
      }));
    })), /*#__PURE__*/React__default["default"].createElement("footer", {
      className: styles$2.footer,
      dangerouslySetInnerHTML: {
        __html: data.alert
      },
      style: {
        display: data.alert ? undefined : 'none'
      }
    }));
  })), /*#__PURE__*/React__default["default"].createElement(ArticleNavigation, {
    onHeader: onHeader,
    headers: headers,
    setOnHeader: setOnHeader,
    scrollTo: function scrollTo(position) {
      ref.current.scroll(0, position - ref.current.offsetTop);
    }
  }));
}
Article.propTypes = {
  className: PropTypes__default["default"].string,
  styles: PropTypes__default["default"].object,
  data: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    headers: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
      content: PropTypes__default["default"].string,
      type: PropTypes__default["default"].oneOf(['primary', 'secondary', 'tertiary']),
      linkTo: PropTypes__default["default"].string
    })),
    body: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
      content: PropTypes__default["default"].any,
      type: PropTypes__default["default"].oneOf(['text', 'native-code', 'pre-formatted', 'image']),
      "float": PropTypes__default["default"].oneOf(['right', 'left', 'stretch']),
      linkTo: PropTypes__default["default"].string
    })),
    alert: PropTypes__default["default"].any
  }))
};

var SPACE$1 = '  ';

var parseData = function parseData(field, layer) {
  if (field !== null && field && _typeof(field) === 'object' && !Array.isArray(field)) {
    if (Object.keys(field).length > 0) return "".concat(parseObject(field, layer + 1));else return "".concat(SPACE$1.repeat(layer - 1), "{}");
  } else if (field !== null && field && Array.isArray(field)) {
    var newField = [];
    var subFieldLayer = field.length === 1 ? layer : layer + 1;
    field.forEach(function (e) {
      var parsed = parseData(e, subFieldLayer);
      newField.push(typeof e === 'string' ? "\"".concat(parsed, "\"") : parsed);
    });
    var startP, endP;
    startP = SPACE$1.repeat(layer + 2);
    endP = SPACE$1.repeat(layer + 1);
    if (field.length === 0 || field.length === 1) return "[".concat(newField.join(',<br>' + startP), "]");else return "[<br>".concat(startP).concat(newField.join(',<br>' + startP), "<br>").concat(endP, "]");
  } else return "<i style=\"color: red\">".concat(field, "</i>");
};

var removeDoubleQuotes = function removeDoubleQuotes(string) {
  return string.replace("\"{", '{').replace("}\"", '}').replace("\"[", '[').replace("]\"", ']').replace("]\"\"", ']').replace(" ]\"", ']').replace("\"[", '[').replace("}]\"", '}]');
};

var parseObject = function parseObject(obj, layer, isWrapper) {
  var keys = Object.keys(obj);
  var newObj = {};
  if (!isWrapper) keys.forEach(function (e) {
    newObj[e] = parseData(obj[e], layer);
  });else newObj = obj;
  var str = removeDoubleQuotes(JSON.stringify(newObj));
  keys.forEach(function (e) {
    str = str.replace("\"".concat(e, "\":"), "".concat(layer === 0 || layer > 0 ? '<br>' + SPACE$1.repeat(layer + 1) : '', "<b style=\"color: #0095ff\">\"").concat(e, "\": </b>"));
  });
  str = str.split('');
  if (str[str.length - 1] === '}') str[str.length - 1] = '<br>' + SPACE$1.repeat(!isWrapper ? layer ? layer : 1 : 0) + '}';
  return str.join('');
};

var replaceTypes = function replaceTypes(string) {
  return string.replace('"\<i style="color: red">null</i>\"', '<i style="color: red">null</i>').replace('"\<i style="color: red">true</i>\"', '<i style="color: red">true</i>').replace('"\<i style="color: red">false</i>\"', '<i style= "color: red">false</i>');
};

function jsonParser(data) {
  console.log(data);
  var keys = Object.keys(data);
  var newObj = {};
  keys.forEach(function (e) {
    var v = parseData(data[e], 0);
    newObj[e] = _typeof(data[e]) === 'object' || typeof data[e] === 'boolean' ? removeDoubleQuotes(v) : v;
  });
  newObj = parseObject(newObj, 0, true).replaceAll("\\", '');
  newObj = replaceTypes(newObj);
  return newObj;
}

function jsxParser(component) {
  if (component.type === React__default["default"].Fragment && component.props.children && component.props.children.length > 0) {
    var data = '';
    component.props.children.forEach(function (child) {
      data = data + '<br>' + jsxParser(child);
    });
    return data;
  } else try {
    var _component$type;

    var type = (_component$type = component.type) === null || _component$type === void 0 ? void 0 : _component$type.name;
    var props = component.props;
    var propsString = "";
    var childrenNode = '';

    for (var key in props) {
      var propValue = props[key];

      if (key !== "children" && typeof propValue !== 'function' && typeof propValue !== 'boolean') {
        var value = "";

        if (propValue instanceof Object) {
          value = "{".concat(JSON.stringify(propValue).replace(/['"]+/g, ''), "}");
        } else {
          value = "\"".concat(propValue, "\"");
        }

        propsString += " <b style=\"color: #0095ff\">".concat(key, "=</b><i style=\"color: #007d07\">").concat(value, "</i>");
      } else if (typeof props[key] === 'function') propsString += " <b style=\"color: #0095ff\">".concat(key, "=</b><i style=\"color: #FFBF00\">").concat(key, "</i>");else if (typeof propValue === 'boolean') propsString += " <b style=\"color: #0095ff\">".concat(key, "=</b><i style=\"color: #FF1500\">").concat(propValue, "</i>");
    }

    if (props.children) {
      switch (true) {
        case Array.isArray(props.children):
          {
            childrenNode = props.children.join('').replace(/\s\s+/g, ' ');
            break;
          }

        case /*#__PURE__*/React__default["default"].isValidElement(props.children):
          {
            childrenNode = jsxParser(props.children);
            break;
          }

        default:
          {
            childrenNode = props.children;
            break;
          }
      }
    }

    console.log(childrenNode);
    if (type) return props.children ? "&lt;<b style=\"color:#86128f;\">".concat(type, "</b>").concat(propsString, "&gt;") + '<br>   ' + childrenNode + '<br>' + "&lt;/<b style=\"color:#86128f;\">".concat(type, "</b>&gt;") : "&lt;<b style=\"color:#86128f;\">".concat(type, "</b>").concat(propsString, "/&gt;");else return childrenNode;
  } catch (e) {
    return component;
  }
}

function htmlParser(htmlText) {
  return htmlText.replaceAll('<', '&lt;').replaceAll('>', '&gt;') // attr
  .replaceAll(/[a-zA-Z]+=/ig, '<b style="color: #0095ff;">$&</b>') // attr value
  .replaceAll(/{[^}]*}/ig, '<span style="color: #007d07;" >$&</span>') // tag
  .replaceAll(/&lt;[a-zA-Z]+\s/ig, '<b style="color:#86128f;">$&</b>').replaceAll(/&lt;[a-zA-Z]+&gt;/g, '<b style="color:#86128f;">$&</b>').replaceAll(/&lt;\/[a-zA-Z]+&gt;/g, '<b style="color:#86128f;">$&</b>') // attr value
  .replaceAll(/\s[a-zA-Z]+""[a-zA-Z]+"/ig, '<span style="color: #007d07;">$&</span>') // attr
  .replaceAll(/"[a-zA-Z]+"/ig, '<span style="color: #007d07;">$&</span>');
}

function javascriptParser(data) {
  var parsed = '';

  try {
    if (data.split('///JSX').length > 0) {
      var jsx = data.split('///JSX')[1];
      parsed = htmlParser(jsx);
    }
  } catch (e) {
    console.log(e);
  }

  return parsed;
}

function useCode(data, language) {
  return React$1.useMemo(function () {
    switch (language) {
      case 'json':
        {
          return jsonParser(data);
        }

      case 'javascript':
        return javascriptParser(data);

      case 'jsx':
        return jsxParser(data);

      default:
        return;
    }
  }, [language, data]);
}

var SPACE = '  ';
function enumerateLines(data, divider) {
  var d = data;
  var smallestWhiteSpace;

  try {
    d = d.split(divider);
    d.forEach(function (e) {
      if (e !== '\r') {
        var c = e.split('');
        var whitespaces = 0;
        c.every(function (s) {
          if (/\s/.test(s)) {
            console.log(s);
            whitespaces = whitespaces + 1;
            return true;
          } else return false;
        });
        if (whitespaces < smallestWhiteSpace || smallestWhiteSpace === undefined) smallestWhiteSpace = whitespaces;
      }
    });
    var removedLines = 0;
    d = d.map(function (line, i) {
      var content = line.replace(' '.repeat(smallestWhiteSpace), '');
      if (content.length > 0 && content !== '\r') return "<span class=".concat(styles$1.line, "><button class=").concat(styles$1.enumeration, ">").concat(i - removedLines, "</button>").concat(SPACE, "<span class=").concat(styles$1.enumContent, ">").concat(content, "</span></span>");else {
        removedLines += 1;
        return null;
      }
    });
    d = d.join(divider);
  } catch (e) {}

  return d;
}

function CodeBlock(props) {
  var parsedString = useCode(props.data, props.language);
  var ref = React$1.useRef();
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, {
    contentRef: ref.current,
    width: props.width
  }, /*#__PURE__*/React__default["default"].createElement("code", {
    ref: ref,
    className: styles$1.code,
    dangerouslySetInnerHTML: {
      __html: enumerateLines(parsedString, props.language === 'jsx' || props.language === 'javascript' ? '\n' : '<br>')
    }
  }));
}
CodeBlock.propTypes = {
  width: PropTypes__default["default"].string,
  data: PropTypes__default["default"].string,
  language: PropTypes__default["default"].oneOf(['json', 'jsx', 'javascript'])
};

exports.ActionButton = ActionButton;
exports.Alert = Alert;
exports.Article = Article;
exports.Bar = Bar$1;
exports.BarAction = BarAction;
exports.Breadcrumbs = Breadcrumbs;
exports.Button = Button;
exports.Carousel = Carousel;
exports.Checkbox = Checkbox;
exports.CheckboxGroup = CheckboxGroup;
exports.CodeBlock = CodeBlock;
exports.DateField = DateField;
exports.DropDownField = DropDownField;
exports.DynamicRoutes = DynamicRoutes;
exports.Empty = Empty;
exports.Feed = Feed;
exports.FeedCard = FeedCard;
exports.FileField = FileField;
exports.Filter = Filter;
exports.Form = Form;
exports.FormRow = FormRow;
exports.HorizontalChart = HorizontalChart;
exports.LineChart = LineChart;
exports.List = List;
exports.Modal = Modal;
exports.MultiSelectField = MultiSelectField;
exports.PieChart = PieChart;
exports.Ripple = Ripple;
exports.Selector = Selector;
exports.Switcher = Switcher;
exports.Tab = Tab;
exports.Tabs = Tabs;
exports.TextField = TextField;
exports.ThemeContext = ThemeContext;
exports.ThemeProvider = ThemeProvider;
exports.ToolTip = ToolTip;
exports.VerticalChart = VerticalChart;
exports.VerticalTabs = VerticalTabs;
exports.request = Request;
exports.useInfiniteScroll = useInfiniteScroll;
exports.useQuery = useQuery;
