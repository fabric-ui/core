import React$1, { useRef, useMemo, useEffect, useContext, useState, useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import axios from 'axios';
import InputMask from 'react-input-mask';

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
  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$D.wrapper
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$D.loader
  }));
}

var css_248z$F = "@import '../../../misc/theme/styles.module.css';\n\n.Details-module_wrapper__J27HM {\n    background: var(--mfc-background-primary);\n    text-rendering: optimizeLegibility !important;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 35%;\n    height: 100vh;\n\n    border-radius: 5px 0 0 5px;\n    padding: 16px;\n\n    overflow-y: auto;\n    overflow-x: hidden;\n    display: grid;\n    gap: 32px;\n    align-content: flex-start;\n\n    transform: translateZ(0) scale(1.0, 1.0);\n    -webkit-transform: translateZ(0) scale(1.0, 1.0);\n}\n\n.Details-module_header__1tt1f {\n    color: var(--mfc-color-secondary);\n    font-weight: 600;\n    font-size: 1.2rem;\n    font-family: \"Roboto\";\n\n    text-align: left;\n    width: 100%;\n\n    height: fit-content;\n\n\n}\n\n.Details-module_subHeader__2sD0y {\n    margin-top: 4px;\n\n    color: var(--mfc-color-quinary);\n    font-size: .8rem;\n    font-family: \"Roboto\";\n\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    max-width: 75%;\n}\n\n.Details-module_body__2pm_N {\n    margin-top: 4px;\n    font-family: \"Roboto\";\n    overflow-x: auto;\n    color: var(--mfc-color-secondary);\n    font-weight: 600;\n    font-size: .8rem;\n    filter: none;\n    min-height: 50px;\n    border: var(--mfc-border-primary) 1px solid;\n    background: var(--mfc-background-tertiary);\n    padding: 4px;\n    border-radius: 5px;\n}\n\n.Details-module_footer__Pdo9j {\n    margin-top: 4px;\n    border: var(--mfc-border-primary) 1px solid;\n    color: var(--mfc-color-quinary);\n    font-weight: 600;\n    font-size: .75rem;\n    font-family: \"Roboto\";\n    padding: 8px;\n    border-radius: 5px;\n    display: grid;\n    gap: 8px;\n}\n\n\n.Details-module_copyButton__2-6G0 {\n    height: 20px;\n\n    outline: none;\n    cursor: pointer;\n    border: none;\n    background: #0095ff;\n    color: white;\n    border-radius: 5px;\n    font-family: \"Roboto\";\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    transition: 150ms linear;\n\n    padding: 4px 16px;\n}\n\n.Details-module_copyButton__2-6G0:hover {\n    opacity: .9;\n}\n\n.Details-module_copyButton__2-6G0:active {\n    opacity: .6;\n}\n\n\n";
var styles$C = {"wrapper":"Details-module_wrapper__J27HM","header":"Details-module_header__1tt1f","subHeader":"Details-module_subHeader__2sD0y","body":"Details-module_body__2pm_N","footer":"Details-module_footer__Pdo9j","copyButton":"Details-module_copyButton__2-6G0"};
styleInject(css_248z$F);

var css_248z$E = "@import '../../../misc/theme/styles.module.css';\n\n.Modal-module_wrapper__peqWF {\n    /*overflow: hidden;*/\n    position: fixed;\n    z-index: 300;\n    transition: opacity 150ms ease-in-out;\n    bottom: 0;\n}\n\n.Modal-module_fitContent__3p_fP {\n    height: fit-content;\n    width: fit-content;\n}\n\n.Modal-module_fitPage__CXDNO {\n    height: 100vh;\n    width: 100vw;\n}\n\n.Modal-module_modalContainer__3aKtV {\n    width: 100%;\n    height: 100%;\n}\n\n\n\n@keyframes Modal-module_fadeOutAnim__2SUYV {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes Modal-module_fadeInAnim__3Gixz {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n\n.Modal-module_enterFade__1xlj8 {\n    animation: Modal-module_fadeInAnim__3Gixz ease-in-out 250ms forwards;\n}\n\n.Modal-module_exitFade__2gmwF {\n    animation: Modal-module_fadeOutAnim__2SUYV ease-in-out 250ms forwards;\n}\n\n\n.Modal-module_slideLeftEnter__1a4nB {\n    animation: Modal-module_slideLeftEnterAnim__3Y1mE ease-in-out 250ms;\n}\n\n.Modal-module_slideLeftExit__3lXC7 {\n    animation: Modal-module_slideLeftExitAnim__2uGD2 ease-in-out 250ms;\n}\n\n.Modal-module_slideRightEnter__c2m0V {\n    animation: Modal-module_slideRightEnterAnim__zSDil ease-in-out 250ms;\n}\n\n.Modal-module_slideRightExit__3rrOc {\n    animation: Modal-module_slideRightExitAnim__187-I ease-in-out 250ms;\n}\n\n@keyframes Modal-module_slideLeftEnterAnim__3Y1mE {\n    0% {\n        transform: translateX(-100%);\n\n    }\n    100% {\n        transform: translateX(0);\n    }\n}\n\n@keyframes Modal-module_slideLeftExitAnim__2uGD2 {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(-100%);\n    }\n}\n\n@keyframes Modal-module_slideRightEnterAnim__zSDil {\n    0% {\n        transform: translateX(100%);\n\n    }\n    100% {\n        transform: translateX(0);\n    }\n}\n\n@keyframes Modal-module_slideRightExitAnim__187-I {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(100%);\n    }\n}\n\n.Modal-module_background__101HU {\n    background-color: var(--mfc-background-primary);\n}\n\n.Modal-module_slideBottomEnter__39VPK{\n    animation: Modal-module_slideBottomEnterAnim__PXHAQ ease-in-out 250ms;\n}\n.Modal-module_slideBottomExit__3uVE9{\n    animation: Modal-module_slideBottomExitAnim__15zxc ease-in-out 250ms;\n}\n\n@keyframes Modal-module_slideBottomEnterAnim__PXHAQ {\n    0% {\n        transform: translateY(100%);\n\n    }\n    100% {\n        transform: translateY(0);\n    }\n}\n\n@keyframes Modal-module_slideBottomExitAnim__15zxc {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(100%);\n    }\n}\n";
var styles$B = {"wrapper":"Modal-module_wrapper__peqWF","fitContent":"Modal-module_fitContent__3p_fP","fitPage":"Modal-module_fitPage__CXDNO","modalContainer":"Modal-module_modalContainer__3aKtV","enterFade":"Modal-module_enterFade__1xlj8","fadeInAnim":"Modal-module_fadeInAnim__3Gixz","exitFade":"Modal-module_exitFade__2gmwF","fadeOutAnim":"Modal-module_fadeOutAnim__2SUYV","slideLeftEnter":"Modal-module_slideLeftEnter__1a4nB","slideLeftEnterAnim":"Modal-module_slideLeftEnterAnim__3Y1mE","slideLeftExit":"Modal-module_slideLeftExit__3lXC7","slideLeftExitAnim":"Modal-module_slideLeftExitAnim__2uGD2","slideRightEnter":"Modal-module_slideRightEnter__c2m0V","slideRightEnterAnim":"Modal-module_slideRightEnterAnim__zSDil","slideRightExit":"Modal-module_slideRightExit__3rrOc","slideRightExitAnim":"Modal-module_slideRightExitAnim__187-I","background":"Modal-module_background__101HU","slideBottomEnter":"Modal-module_slideBottomEnter__39VPK","slideBottomEnterAnim":"Modal-module_slideBottomEnterAnim__PXHAQ","slideBottomExit":"Modal-module_slideBottomExit__3uVE9","slideBottomExitAnim":"Modal-module_slideBottomExitAnim__15zxc"};
styleInject(css_248z$E);

var css_248z$D = ".styles-module_light__1cr8h {\r\n    --mfc-background-primary: white;\r\n    --mfc-background-secondary: #f3f6f9;\r\n    --mfc-background-tertiary: #f4f5fa;\r\n    --mfc-background-quaternary: #E8F0FE;\r\n\r\n    --mfc-border-primary: #F1F1F5;\r\n    --mfc-border-secondary: #e0e0e0;\r\n\r\n    --mfc-color-primary: #333333;\r\n    --mfc-color-secondary: #555555;\r\n    --mfc-color-tertiary: #666666;\r\n    --mfc-color-quaternary: #777777;\r\n    --mfc-color-quinary: #999999;\r\n    --mfc-color-senary: white;\r\n\r\n    --mfc-box-shadow-primary: #e0e0e0;\r\n}\r\n\r\n.styles-module_dark__3eFo2 {\r\n\r\n\r\n    --mfc-background-primary: #292c2b;\r\n    --mfc-background-secondary: #1e2121;\r\n    --mfc-background-tertiary: #191C1C;\r\n    --mfc-background-quaternary: #1f2123;\r\n\r\n    --mfc-border-primary: #1e2121;\r\n    --mfc-border-secondary: #707070;\r\n\r\n    --mfc-color-primary: white;\r\n    --mfc-color-secondary: #f4f5fa;\r\n    --mfc-color-tertiary: #f0f0f0;\r\n    --mfc-color-quaternary: #e0e0e0;\r\n    --mfc-color-quinary: #dedede;\r\n    --mfc-color-senary: #292c2b;\r\n\r\n    --mfc-box-shadow-primary: #1e2121;\r\n}\r\n\r\n";
var styles$A = {"light":"styles-module_light__1cr8h","dark":"styles-module_dark__3eFo2"};
styleInject(css_248z$D);

var ThemeContext = /*#__PURE__*/React$1.createContext({
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
  var mountingPoint = useRef();
  var source = useRef();
  var target = useRef();
  var animation = useMemo(function () {
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
      ReactDOM.unmountComponentAtNode(mountingPoint.current);
    } catch (e) {
      console.log(e);
    }
  };

  var renderContent = function renderContent(content) {
    ReactDOM.render(content, mountingPoint.current);
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

  useEffect(function () {
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

  var context = useContext(ThemeContext);

  var handleMouseDown = function handleMouseDown(event) {
    if (!document.elementsFromPoint(event.clientX, event.clientY).includes(target.current) && alreadyRendered) props.handleClose();
  };

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      alreadyRendered = _useState2[0],
      setAlreadyRendered = _useState2[1];

  useEffect(function () {
    if (props.open) {
      var position = getParentPosition();
      renderContent( /*#__PURE__*/React$1.createElement("div", {
        style: _objectSpread2(_objectSpread2({}, {
          background: "rgba(0, 0, 0, ".concat(props.blurIntensity !== undefined ? props.blurIntensity : .4, ")")
        }), position),
        className: [styles$B.wrapper, props.variant === 'fit' ? styles$B.fitContent : styles$B.fitPage, props.wrapperClassName, context.dark ? context.styles.dark : context.styles.light].join(' ')
      }, /*#__PURE__*/React$1.createElement("div", {
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
  useEffect(function () {
    document.addEventListener('mousedown', handleMouseDown);
    return function () {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [alreadyRendered, props.open, props.children]);
  return /*#__PURE__*/React$1.createElement("div", {
    ref: source,
    style: {
      display: 'none'
    }
  });
}
Modal.propTypes = {
  wrapperClassName: PropTypes.string,
  variant: PropTypes.oneOf(['fill', 'fit']),
  animationStyle: PropTypes.oneOf(['slide-left', 'slide-right', 'fade', 'slide-bottom']),
  className: PropTypes.string,
  blurIntensity: PropTypes.number,
  styles: PropTypes.object,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node
};

var LanguageContext = /*#__PURE__*/React$1.createContext('en');

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
  completed: 'Completed',
  step: 'Procedure'
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
  completed: 'Completo',
  step: 'Procedimento'
};

function useLocale() {
  var locale = useContext(LanguageContext);
  return function (word) {
    switch (locale) {
      case 'en':
        return LocaleEN[word];

      default:
        return LocalePT[word];
    }
  };
}

function Details(props) {
  var translate = useLocale();
  var data = useMemo(function () {
    var res = props.data.details;

    try {
      var jsonData = props.data.details && typeof props.data.details === 'string' ? JSON.parse(props.data.details) : null;
      res = JSON.stringify(jsonData, null, 4);
    } catch (e) {}

    return res;
  }, [props]);
  return /*#__PURE__*/React$1.createElement(Modal, {
    open: props.open,
    handleClose: function handleClose() {
      return props.handleClose();
    },
    className: styles$C.wrapper,
    blurIntensity: .1,
    animationStyle: "slide-right"
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$C.header
  }, props.data.httpStatusCode >= 300 ? translate('error') : translate('success'), " - ", props.data.httpStatusCode, /*#__PURE__*/React$1.createElement("div", {
    className: styles$C.subHeader
  }, props.data.url)), /*#__PURE__*/React$1.createElement("div", {
    style: {
      width: '100%',
      display: 'grid'
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      position: 'relative'
    }
  }, translate('details')), /*#__PURE__*/React$1.createElement("pre", {
    className: styles$C.body,
    style: {
      overflow: 'auto'
    }
  }, data)), /*#__PURE__*/React$1.createElement("div", {
    style: {
      paddingBottom: '16px'
    }
  }, translate('params'), /*#__PURE__*/React$1.createElement("div", {
    className: styles$C.footer
  }, /*#__PURE__*/React$1.createElement("div", null, translate('method'), " ", props.data.method), /*#__PURE__*/React$1.createElement("div", {
    style: {
      width: '100%',
      overflow: 'hidden'
    }
  }, translate('setPackage'), /*#__PURE__*/React$1.createElement("pre", {
    className: styles$C.body,
    style: {
      overflow: 'auto'
    }
  }, JSON.stringify(props.data["package"], null, 4))), /*#__PURE__*/React$1.createElement("div", null, translate('url'), " ", props.data.url))));
}
Details.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  data: PropTypes.shape({
    message: PropTypes.string,
    details: PropTypes.string,
    httpStatusCode: PropTypes.number,
    "package": PropTypes.any,
    method: PropTypes.string,
    url: PropTypes.string
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
  var ref = useRef();

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

  useEffect(function () {
    var _ref$current2;

    if (!props.disabled) (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.parentNode.addEventListener('mousedown', addRipple);
    return function () {
      var _ref$current3;

      (_ref$current3 = ref.current) === null || _ref$current3 === void 0 ? void 0 : _ref$current3.parentNode.removeEventListener('mousedown', addRipple);
    };
  }, [props]);
  return /*#__PURE__*/React$1.createElement("div", {
    ref: ref,
    style: {
      display: 'none'
    }
  });
}
Ripple.propTypes = {
  disabled: PropTypes.bool,
  accentColor: PropTypes.string,
  opacity: PropTypes.number
};

function Button(props) {
  var variant = useMemo(function () {
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
  var color = useMemo(function () {
    if (props.color === 'secondary') return styles$y.secondaryVariant;else return undefined;
  }, [props.color]);
  var accentColor = useMemo(function () {
    if (props.variant === 'filled') {
      if (props.color === 'secondary') return '#FF2626';else return '#0080DB';
    } else if (props.color === 'secondary') return '#ff5555';else return '#0095ff';
  }, [props.color]);
  return /*#__PURE__*/React$1.createElement("button", {
    className: [styles$y.button, variant.normal, props.highlight ? variant.highlight : undefined, color, props.className].join(' '),
    onClick: props.onClick,
    ref: props.reference,
    style: props.styles,
    "data-highlight": JSON.stringify(props.highlight),
    disabled: props.disabled
  }, /*#__PURE__*/React$1.createElement(Ripple, {
    disabled: props.disabled,
    opacity: props.variant === 'filled' ? .8 : undefined,
    accentColor: accentColor
  }), props.children);
}
Button.propTypes = {
  reference: PropTypes.any,
  variant: PropTypes.oneOf(['minimal', 'filled', 'outlined', 'minimal-horizontal']),
  children: PropTypes.node,
  styles: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  highlight: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string
};

function Alert(props) {
  var variant = useMemo(function () {
    switch (props.variant) {
      case 'success':
        return {
          className: styles$z.success,
          icon: /*#__PURE__*/React$1.createElement("span", {
            className: "material-icons-round"
          }, "done")
        };

      case 'alert':
        return {
          className: styles$z.alert,
          icon: /*#__PURE__*/React$1.createElement("span", {
            className: "material-icons-round"
          }, "warning")
        };

      case 'info':
        return {
          className: styles$z.info,
          icon: /*#__PURE__*/React$1.createElement("span", {
            className: "material-icons-round"
          }, "info")
        };

      default:
        return {
          icon: /*#__PURE__*/React$1.createElement("span", {
            className: "material-icons-round"
          }, "error")
        };
    }
  }, [props.variant]);
  useEffect(function () {
    var timeout = setTimeout(function () {
      try {
        props.handleClose();
      } catch (e) {}
    }, props.delay ? props.delay : 5000);
    return function () {
      if (timeout) clearTimeout(timeout);
    };
  }, [props.open]);
  return /*#__PURE__*/React$1.createElement(Modal, {
    open: props.open,
    wrapperClassName: styles$z.wrapper,
    handleClose: function handleClose() {
      return props.handleClose(false);
    },
    animationStyle: 'fade',
    variant: 'fit',
    blurIntensity: 0,
    className: [styles$z.alertContainer, variant.className].join(' ')
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$z.content,
    onClick: function onClick() {
      if (props.onClick) props.onClick();
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    className: [styles$z.icon, styles$z.button].join(' ')
  }, variant.icon), props.children), /*#__PURE__*/React$1.createElement(Button, {
    color: 'secondary',
    className: styles$z.button,
    onClick: function onClick() {
      return props.handleClose(true);
    }
  }, /*#__PURE__*/React$1.createElement("span", {
    style: {
      fontSize: '1.1rem'
    },
    className: "material-icons-round"
  }, "close")));
}
Alert.propTypes = {
  variant: PropTypes.oneOf(['success', 'alert', 'error', 'info']),
  onClick: PropTypes.func,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  delay: PropTypes.number,
  children: PropTypes.node
};

function RequestAlert(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var ref = useRef();
  var message = useMemo(function () {
    switch (true) {
      case props.httpStatusCode >= 300:
        return "Algum erro ocorreu (".concat(props.httpStatusCode, ")");

      case props.httpStatusCode < 300:
        return "Sucesso (".concat(props.httpStatusCode, ")");

      default:
        return "Algum erro ocorreu (".concat(props.httpStatusCode, ")");
    }
  }, [props]);
  useEffect(function () {
    var timeout = setTimeout(function () {
      if (!open) try {
        var _ref$current;

        ReactDOM.unmountComponentAtNode((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.parentNode);
      } catch (e) {}
    }, 5000);
    return function () {
      if (timeout) clearTimeout(timeout);
    };
  }, [open]);
  return /*#__PURE__*/React$1.createElement("div", {
    ref: ref
  }, /*#__PURE__*/React$1.createElement(Details, {
    open: open,
    handleClose: function handleClose() {
      setOpen(false);
    },
    data: props
  }), /*#__PURE__*/React$1.createElement(Alert, {
    onClick: function onClick() {
      return setOpen(true);
    },
    open: !open,
    variant: props.httpStatusCode < 300 ? 'success' : 'error',
    handleClose: function handleClose(forced) {
      var _ref$current2;

      console.log('ON CLOSE ', forced);
      if (forced) ReactDOM.unmountComponentAtNode((_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.parentNode);
    }
  }, message));
}
Alert.propTypes = {
  message: PropTypes.string,
  details: PropTypes.string,
  httpStatusCode: PropTypes.number,
  "package": PropTypes.any,
  method: PropTypes.string,
  url: PropTypes.string
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
            ReactDOM.render( /*#__PURE__*/React$1.createElement(Loader, null), loader);
            params = {
              method: method,
              headers: props.headers,
              data: method === 'get' ? undefined : packageSent,
              params: method !== 'get' ? undefined : packageSent,
              url: props.url
            };
            return _context.abrupt("return", axios(params).then(function (r) {
              console.log(r);
              ReactDOM.unmountComponentAtNode(loader);

              if (props.showSuccessAlert) {
                var newElement = document.createElement('div');
                document.body.appendChild(newElement);
                ReactDOM.render( /*#__PURE__*/React$1.createElement(RequestAlert, {
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

              ReactDOM.unmountComponentAtNode(loader);
              var newElement = document.createElement('div');
              document.body.appendChild(newElement);
              ReactDOM.render( /*#__PURE__*/React$1.createElement(RequestAlert, {
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
  headers: PropTypes.object,
  "package": PropTypes.object,
  url: PropTypes.string.isRequired,
  // credentials: PropTypes.oneOf(['default', 'include', 'same-origin', 'omit']),
  // redirect: PropTypes.oneOf(['manual', 'follow', 'error']),
  // referrerPolicy: PropTypes.oneOf(['default', 'no-referrer', 'no-referrer-when-downgrade', 'origin', 'origin-when-cross-origin', 'same-origin', 'strict-origin', 'strict-origin-when-cross-origin', 'unsafe-url']),
  // mode: PropTypes.oneOf(['default', 'no-cors', 'cors', 'same-origin']),
  // cache: PropTypes.oneOf(['default', 'no-cache', 'reload', 'force-cache', 'only-if-cached']),
  method: PropTypes.oneOf(['get', 'put', 'post', 'delete', 'patch']).isRequired,
  showSuccessAlert: PropTypes.bool
};

var css_248z$z = ".ToolTip-module_container__2pbpO {\n    user-select: none;\n    height: auto;\n    min-height: 15px;\n\n    width: fit-content;\n    max-width: 300px;\n    /*box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;*/\n    opacity: 0;\n\n    animation: ToolTip-module_show__qH1QD 250ms ease-in-out forwards;\n    animation-delay: 500ms;\n\n    position: relative;\n}\n\n@keyframes ToolTip-module_show__qH1QD {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n.ToolTip-module_content__frnHK{\n    padding: 4px 8px;\n    border-radius: 5px;\n    background: rgba(38,38,38,1);\n    color: white;\n    font-family: \"Roboto\";\n    font-size: .8rem;\n    font-weight: bold;\n    text-align: center;\n\n}\n.ToolTip-module_exitAnim__3VgmV{\n    animation: ToolTip-module_exit__3c7BK 250ms ease-in-out;\n    transform-origin: top left;\n}\n\n@keyframes ToolTip-module_exit__3c7BK {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}";
var styles$w = {"container":"ToolTip-module_container__2pbpO","show":"ToolTip-module_show__qH1QD","content":"ToolTip-module_content__frnHK","exitAnim":"ToolTip-module_exitAnim__3VgmV","exit":"ToolTip-module_exit__3c7BK"};
styleInject(css_248z$z);

function ToolTip(props) {
  var toolTip = /*#__PURE__*/React$1.createElement("div", {
    className: styles$w.container
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$w.content
  }, props.content === undefined ? props.children : props.content));
  var ref = useRef();
  var mountingPoint = useRef();

  var hover = function hover(event) {
    var _ref$current;

    ReactDOM.unmountComponentAtNode(mountingPoint.current);
    ReactDOM.render(toolTip, mountingPoint.current);
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
      ReactDOM.unmountComponentAtNode(mountingPoint.current);
    }
  };

  useEffect(function () {
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
      ReactDOM.unmountComponentAtNode(mountingPoint.current);
      document.body.removeChild(newElement);
    };
  }, [props.children, props.content]);
  return /*#__PURE__*/React$1.createElement("div", {
    ref: ref,
    style: {
      display: 'none'
    }
  });
}
ToolTip.propTypes = {
  content: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  justify: PropTypes.oneOf(['end', 'middle', 'start']),
  align: PropTypes.oneOf(['end', 'middle', 'start'])
};

var css_248z$y = "@import \"../../../misc/theme/styles.module.css\";\n\n.Selector-module_createModal__zGsa_ {\n    position: absolute;\n    background: var(--mfc-background-primary);\n    border-radius: 8px;\n    border: var(--mfc-border-primary) 1px solid;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 50vw;\n    max-height: 75vh;\n}\n\n.Selector-module_labelContainer__zPMB5 {\n    /*animation: slideUp linear 250ms both;*/\n    transition: visibility 150ms linear;\n    color: var(--mfc-color-primary);\n    font-size: .9rem;\n    margin-top: auto;\n    overflow: hidden;\n\n    text-transform: capitalize;\n\n}\n\n\n.Selector-module_button__2l_e_ {\n    user-select: none;\n    position: relative;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n\n    transition: inherit;\n    background: var(--mfc-background-primary);\n    width: 100%;\n\n    padding: 5px;\n\n    max-width: 100%;\n    overflow: hidden;\n}\n\n.Selector-module_button__2l_e_:hover {\n    border-color: var(--accent-color);\n}\n\n.Selector-module_button__2l_e_:disabled {\n    border-color: var(--mfc-border-primary);\n}\n\n.Selector-module_alertLabel__2-P3S {\n    margin-left: auto;\n    font-weight: 550;\n    font-size: .8rem;\n}\n\n\n.Selector-module_inputContainer__1xcoQ {\n\n    border: none;\n    box-shadow: unset;\n\n    background: transparent;\n    width: 100%;\n    font-family: 'Roboto' !important;\n    height: 44px;\n\n    outline: none;\n    padding: 5px 12px;\n    font-size: 1rem;\n\n}\n\n.Selector-module_fieldsContainer__37Ep6 {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    height: 50px;\n    border-radius: 8px;\n    transition: 150ms linear;\n    color: var(--mfc-color-secondary);\n    background: var(--mfc-background-primary);\n    gap: 0;\n    padding: 0 0 0 16px;\n    border: #e0e0e0 1px solid;\n    margin-bottom: 32px;\n}\n\n.Selector-module_fieldsContainer__37Ep6:hover {\n    box-shadow: #0095ff 0px 0px 1px 1.5px;\n}\n\n.Selector-module_fieldsContainer__37Ep6:focus, .Selector-module_fieldsContainer__37Ep6:focus-within {\n    color: black;\n    box-shadow: #0095ff 0px 0px 1px 1.5px;\n    background: var(--mfc-background-tertiary);\n}\n\n.Selector-module_searchButtonContainer__3Jw7g {\n    padding: 0;\n    outline: 0;\n    height: 44px;\n    width: fit-content;\n    border: none;\n    color: var(--mfc-color-secondary);\n    border-radius: 8px;\n\n    cursor: pointer;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n\n    background: transparent;\n    transition: 150ms linear;\n}\n\n.Selector-module_searchButtonContainer__3Jw7g:hover {\n    color: #0095ff;\n}\n\n.Selector-module_selectedEntityContainer__3Vnam {\n    width: 100%;\n    border: none;\n    border-bottom: var(--mfc-border-primary) 1px solid;\n    border-top: var(--mfc-border-primary) 1px solid;\n\n    height: 56px;\n    color: var(--mfc-color-primary);\n    font-size: .9rem;\n\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 8px;\n}\n\n.Selector-module_removeButton__1TFvA {\n\n    width: 28px;\n    height: 28px;\n    border-radius: 32px;\n\n    outline: none;\n    cursor: pointer;\n    border: none;\n    background: transparent;\n    color: #ff5555;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.Selector-module_divider__2Ossq {\n    height: 30px;\n    width: 1px;\n    background: var(--mfc-border-primary);\n\n}\n\n.Selector-module_overflow__3TwOW {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    max-width: 90%;\n}\n\n\n@keyframes Selector-module_enter__2WjLM {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes Selector-module_exit__2Dzcn {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n.Selector-module_buttonWrapper__LLyJf{\n    max-width: 100%;\n    overflow: hidden;\n\n}";
var styles$v = {"createModal":"Selector-module_createModal__zGsa_","labelContainer":"Selector-module_labelContainer__zPMB5","button":"Selector-module_button__2l_e_","alertLabel":"Selector-module_alertLabel__2-P3S","inputContainer":"Selector-module_inputContainer__1xcoQ","fieldsContainer":"Selector-module_fieldsContainer__37Ep6","searchButtonContainer":"Selector-module_searchButtonContainer__3Jw7g","selectedEntityContainer":"Selector-module_selectedEntityContainer__3Vnam","removeButton":"Selector-module_removeButton__1TFvA","divider":"Selector-module_divider__2Ossq","overflow":"Selector-module_overflow__3TwOW","buttonWrapper":"Selector-module_buttonWrapper__LLyJf","enter":"Selector-module_enter__2WjLM","exit":"Selector-module_exit__2Dzcn"};
styleInject(css_248z$y);

var css_248z$x = "@import \"../../../misc/theme/styles.module.css\";\r\n\r\n.SelectorModal-module_wrapper__39kRR {\r\n    height: 100%;\r\n    width: clamp(250px, 25%, 500px);\r\n    background: var(--mfc-background-primary);\r\n    margin-left: auto;\r\n    border-radius: 8px 0 0 8px;\r\n    box-shadow: var(--mfc-box-shadow-primary) -1px 0 3px 1px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 16px;\r\n    padding: 12px;\r\n}\r\n\r\n.SelectorModal-module_header__ckwRV {\r\n    font-family: \"Roboto\";\r\n\r\n    display: flex;\r\n    height: fit-content;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n    font-size: 1.2rem;\r\n    border-radius: 5px;\r\n    font-weight: bold;\r\n    color: var(--mfc-color-primary);\r\n}\r\n\r\n.SelectorModal-module_row__28prZ {\r\n    overflow: hidden;\r\n    outline: none;\r\n\r\n    width: 100%;\r\n    max-width: 100%;\r\n\r\n    padding: 4px;\r\n    height: 50px;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.SelectorModal-module_overflowEllipsis__2C1KC {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    text-align: left;\r\n}\r\n\r\n.SelectorModal-module_rowColumn__2wgID {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    justify-items: center;\r\n\r\n    gap: 4px;\r\n}\r\n\r\n.SelectorModal-module_columnLabel__3EXCz {\r\n    font-size: .75rem;\r\n    color: var(--mfc-color-quaternary);\r\n}\r\n\r\n.SelectorModal-module_rows__dqCYe {\r\n    position: relative;\r\n    display: grid;\r\n    align-content: flex-start;\r\n    gap: 8px;\r\n    overflow-y: auto;\r\n    height: 100%;\r\n    /*padding-top: 16px;*/\r\n    /*display: flex;*/\r\n    /*flex-direction: column;*/\r\n    width: 100%;\r\n    /*gap: 4px;*/\r\n}\r\n\r\n.SelectorModal-module_hoveredRow__2kDC6 {\r\n    background: var(--mfc-background-quaternary);\r\n    border-color: #0095ff;\r\n    border-style: solid;\r\n}\r\n\r\n\r\n\r\n.SelectorModal-module_emptyRow__9HWYo {\r\n    color: var(--mfc-color-quinary);\r\n}\r\n\r\n.SelectorModal-module_divider__1O8uU {\r\n    height: 1px;\r\n    width: 100%;\r\n    background: var(--mfc-border-secondary);\r\n}\r\n\r\n.SelectorModal-module_headerButton__1tHp5 {\r\n    height: 30px;\r\n    padding: 4px 8px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    background: var(--mfc-background-primary);\r\n}\r\n\r\n\r\n.SelectorModal-module_headerButtons__1TWSf {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.SelectorModal-module_mainRow__1PE1p{\r\n    background: var(--mfc-background-tertiary);\r\n}";
var styles$u = {"wrapper":"SelectorModal-module_wrapper__39kRR","header":"SelectorModal-module_header__ckwRV","row":"SelectorModal-module_row__28prZ","overflowEllipsis":"SelectorModal-module_overflowEllipsis__2C1KC","rowColumn":"SelectorModal-module_rowColumn__2wgID","columnLabel":"SelectorModal-module_columnLabel__3EXCz","rows":"SelectorModal-module_rows__dqCYe","hoveredRow":"SelectorModal-module_hoveredRow__2kDC6","emptyRow":"SelectorModal-module_emptyRow__9HWYo","divider":"SelectorModal-module_divider__1O8uU","headerButton":"SelectorModal-module_headerButton__1tHp5","headerButtons":"SelectorModal-module_headerButtons__1TWSf","mainRow":"SelectorModal-module_mainRow__1PE1p"};
styleInject(css_248z$x);

function useField(field, entity) {
  return useMemo(function () {
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

var keyTemplate = PropTypes.shape({
  key: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['string', 'number', 'object', 'date', 'bool', 'array']),
  getColor: PropTypes.func,
  subfieldKey: PropTypes.string,
  visible: PropTypes.bool,
  maskStart: PropTypes.any,
  maskEnd: PropTypes.any,
  additionalWidth: PropTypes.string,
  subType: PropTypes.oneOf(['string', 'number', 'object', 'date', 'bool']),
  query: PropTypes.object
});

function RowCell(props) {
  var content = useField(props.field, props.data);
  return /*#__PURE__*/React$1.createElement("span", {
    style: {
      color: props.field.getColor ? props.field.getColor(props.data[props.field.key]) : undefined
    }
  }, content);
}
RowCell.propTypes = {
  data: PropTypes.object,
  field: keyTemplate
};

function Row$2(props) {
  var translate = useLocale();
  return /*#__PURE__*/React$1.createElement(Button, {
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
  }, /*#__PURE__*/React$1.createElement("div", {
    style: {
      display: props.main && !props.data ? undefined : 'none'
    }
  }, translate('nothing_selected')), props.main && !props.data ? null : props.keys.map(function (k, i) {
    return !k.visible ? null : /*#__PURE__*/React$1.createElement("div", {
      key: 'selector-row-' + i,
      className: styles$u.rowColumn,
      style: {
        width: 1 / props.keys.filter(function (e) {
          return e.visible;
        }).length * 100 + '%'
      }
    }, /*#__PURE__*/React$1.createElement("div", {
      className: styles$u.overflowEllipsis,
      style: {
        maxWidth: '90%'
      }
    }, /*#__PURE__*/React$1.createElement(RowCell, {
      data: props.data,
      field: k
    })), /*#__PURE__*/React$1.createElement("div", {
      className: [styles$u.columnLabel, styles$u.overflowEllipsis, styles$u.emptyRow].join(' '),
      style: {
        maxWidth: '75%'
      }
    }, k.label), /*#__PURE__*/React$1.createElement(ToolTip, {
      justify: 'start'
    }, /*#__PURE__*/React$1.createElement("div", {
      className: styles$u.rowColumn
    }, /*#__PURE__*/React$1.createElement(RowCell, {
      data: props.data,
      field: k
    }), /*#__PURE__*/React$1.createElement("div", {
      className: styles$u.columnLabel
    }, k.label))));
  }));
}
Row$2.propTypes = {
  height: PropTypes.any,
  highlight: PropTypes.bool,
  main: PropTypes.bool,
  keys: PropTypes.array,
  data: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  identificationKey: PropTypes.string,
  reference: PropTypes.any,
  index: PropTypes.number,
  onDrop: PropTypes.func
};

function useInfiniteScroll(setCurrentPage, currentPage, loading, hasMore) {
  var observer = useRef();
  return useCallback(function (node) {
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
  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$t.content
  }, /*#__PURE__*/React$1.createElement("span", {
    style: {
      fontSize: '130px'
    },
    className: "material-icons-round"
  }, "folder"), /*#__PURE__*/React$1.createElement("h5", {
    className: styles$t.label
  }, props.customLabel ? props.customLabel : "Lista vazia, nada encontrado."));
}
Empty.propTypes = {
  customLabel: PropTypes.string
};

function useHeader(dispatch, actions) {
  var _useState = useState(false),
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

function ParseCurrency(event) {
  var value = event;
  value = value + '';
  value = parseInt(value.replace(/[\D]+/g, ''));
  value = value + '';
  value = value.replace(/([0-9]{2})$/g, ".$1");
  return value;
}

var css_248z$t = "\r\n.Shared-module_wrapper__1akhG {\r\n    --accent_color: #0095ff;\r\n\r\n    transition: 150ms linear;\r\n    height: fit-content;\r\n\r\n    outline: transparent 1px solid;\r\n    border-radius: 5px;\r\n}\r\n\r\n.Shared-module_secondaryVariant__lmsuI {\r\n    --accent_color: #ff5555;\r\n}\r\n\r\n\r\n.Shared-module_wrapper__1akhG:hover, .Shared-module_wrapper__1akhG:focus-within, .Shared-module_wrapper__1akhG[data-highlight], .Shared-module_wrapper__1akhG:active {\r\n    outline: var(--accent_color) 1px solid;\r\n}\r\n\r\n.Shared-module_wrapper__1akhG[data-disabled], .Shared-module_wrapper__1akhG:disabled {\r\n    outline: transparent 1px solid;\r\n}\r\n\r\n\r\n.Shared-module_labelContainer__2eUNz {\r\n    transition: 200ms ease-in-out;\r\n\r\n    color: var(--mfc-color-secondary);\r\n    /*font-weight: 600;*/\r\n    font-size: .8rem;\r\n    margin-top: auto;\r\n    user-select: none;\r\n    font-family: \"Roboto\";\r\n    text-transform: capitalize;\r\n\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: center;\r\n\r\n    gap: 6px;\r\n}\r\n\r\n.Shared-module_overflow__xMSr0{\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    max-width: 75%;\r\n    overflow: hidden;\r\n}\r\n.Shared-module_alertLabel__2FAHg {\r\n    color: var(--mfc-color-quaternary);\r\n    font-family: \"Roboto\";\r\n    margin-left: auto;\r\n    font-size: .75rem;\r\n    user-select: none;\r\n\r\n}\r\n.Shared-module_helperText__1QbdR{\r\n    transition: 150ms linear;\r\n    color: #FFAC3E;\r\n    cursor: help;\r\n}\r\n.Shared-module_helperText__1QbdR:hover{\r\n    color: #0095ff;\r\n}";
var shared$2 = {"wrapper":"Shared-module_wrapper__1akhG","secondaryVariant":"Shared-module_secondaryVariant__lmsuI","labelContainer":"Shared-module_labelContainer__2eUNz","overflow":"Shared-module_overflow__xMSr0","alertLabel":"Shared-module_alertLabel__2FAHg","helperText":"Shared-module_helperText__1QbdR"};
styleInject(css_248z$t);

function TextField(props) {
  var translate = useLocale();
  var maskEndRef = useRef();
  var maskStartRef = useRef();
  var ref = useRef();
  useEffect(function () {
    if (props.maskStart) ref.current.style.paddingLeft = maskStartRef.current.offsetWidth + 10 + 'px';
    if (props.maskEnd) ref.current.style.paddingRight = maskEndRef.current.offsetWidth + 10 + 'px';
  }, [props.maskStart, props.maskEnd]);

  var content = function content(value) {
    return /*#__PURE__*/React$1.createElement("div", {
      style: {
        position: 'relative',
        width: '100%'
      }
    }, /*#__PURE__*/React$1.createElement("div", {
      className: styles$r.mask,
      ref: maskStartRef
    }, props.maskStart), /*#__PURE__*/React$1.createElement("input", {
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
    }), /*#__PURE__*/React$1.createElement("div", {
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
        return /*#__PURE__*/React$1.createElement("textarea", {
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
        return /*#__PURE__*/React$1.createElement(InputMask, {
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

  var color = useMemo(function () {
    if (props.colorVariant === 'secondary') return {
      className: shared$2.secondaryVariant,
      color: '#ff5555'
    };else return {
      className: undefined,
      color: '#0095ff'
    };
  }, [props.colorVariant]);
  var valid = useMemo(function () {
    return props.value && props.value.toString().length > 0;
  }, [props.value]);
  return /*#__PURE__*/React$1.createElement("div", {
    "data-valid": valid,
    style: {
      width: props.width,
      height: 'fit-content',
      display: 'grid',
      alignItems: props.value ? 'unset' : 'flex-start',
      gap: '4px',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.labelContainer,
    style: {
      visibility: valid ? 'visible' : 'hidden',
      opacity: valid ? '1' : '0'
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.overflow
  }, props.label), props.helperText ? /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.helperText
  }, /*#__PURE__*/React$1.createElement("span", {
    style: {
      fontSize: '1rem'
    },
    className: "material-icons-round"
  }, "info"), /*#__PURE__*/React$1.createElement(ToolTip, {
    content: props.helperText,
    align: 'start'
  })) : null), /*#__PURE__*/React$1.createElement("div", {
    className: [color.className, shared$2.wrapper, styles$r.focus].join(' '),
    "data-disabled": props.disabled ? props.disabled : undefined
  }, getField(), /*#__PURE__*/React$1.createElement(Ripple, {
    opacity: .15,
    accentColor: color.color,
    disabled: props.disabled
  })), /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.alertLabel,
    style: {
      color: !valid ? '#ff5555' : undefined,
      visibility: props.required ? 'visible' : 'hidden',
      display: props.noMargin && !props.required ? 'none' : undefined
    }
  }, translate('required')));
}
TextField.propTypes = {
  helperText: PropTypes.string,
  width: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  required: PropTypes.bool,
  mask: PropTypes.string,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'area']),
  type: PropTypes.oneOf(['number', 'text', 'password']),
  maskStart: PropTypes.any,
  maskEnd: PropTypes.any,
  floatFilter: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'default']),
  noMargin: PropTypes.bool,
  colorVariant: PropTypes.oneOf(['default', 'secondary', 'primary'])
};

var css_248z$s = "@import \"../../../misc/theme/styles.module.css\";\n\n.DateField-module_fieldsContainer__18OUu {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 10px;\n    height: 56px;\n    border-radius: 5px;\n    border: var(--mfc-border-primary) 1px solid;\n    color: var(--mfc-color-tertiary);\n    background: var(--mfc-background-primary);\n    position: relative;\n    overflow: hidden;\n\n    --delay: 0;\n}\n\n.DateField-module_fieldsContainer__18OUu:hover {\n    --delay: 500ms;\n}\n\n.DateField-module_fieldsContainer__18OUu::after {\n    position: absolute;\n    content: '';\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: var(--color);\n    opacity: 0;\n    transition: 150ms linear var(--delay);\n}\n\n.DateField-module_fieldsContainer__18OUu:disabled::after {\n    content: none;\n}\n\n.DateField-module_fieldsContainer__18OUu:focus-within::after, .DateField-module_fieldsContainer__18OUu:focus-within::after {\n    opacity: .15;\n}\n\n\n.DateField-module_inputContainer__3Jx_6 {\n    text-align: center;\n    border: none;\n    box-shadow: unset;\n\n    background: var(--mfc-background-primary);\n    font-family: \"Roboto\";\n    height: 100%;\n    width: 30px;\n    outline: none;\n    font-size: 1rem;\n\n    color: var(--mfc-color-secondary);\n}\n\n.DateField-module_inputContainer__3Jx_6::-webkit-outer-spin-button,\n.DateField-module_inputContainer__3Jx_6::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n/* Firefox */\n.DateField-module_inputContainer__3Jx_6[type=number] {\n    -moz-appearance: textfield;\n}\n\n.DateField-module_buttonContainer__37d09 {\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    height: 35px;\n    width: 35px;\n    margin-right: 8px;\n}\n\n\n\n.DateField-module_container__11emn {\n    height: 100px;\n    display: grid;\n    gap: 4px;\n\n}\n\n.DateField-module_divider__18rCE {\n    width: 1px;\n    height: 20px;\n    background: var(--mfc-border-secondary);\n}\n\n.DateField-module_calendar__2GTEw {\n    width: 350px;\n\n    background: var(--mfc-background-primary);\n    border-radius: 8px;\n    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\n    height: 223px;\n    overflow-y: auto;\n\n}\n\n.DateField-module_monthContainer__3K4Sw {\n    position: sticky;\n    top: 0;\n    background: var(--mfc-background-primary);\n    z-index: 999;\n    font-family: \"Roboto\";\n    font-weight: bold;\n    font-size: .9rem;\n    height: 45px;\n    user-select: none;\n\n    transition: 150ms linear;\n\n    padding: 8px 4px;\n    color: var(--mfc-color-secondary);\n    width: 100%;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.DateField-module_activeContainer__2lxhB {\n    background: var(--mfc-background-quaternary);\n    color: #0095ff;\n}\n\n.DateField-module_daysContainer__2DuT9 {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 7.45px;\n    width: 100%;\n    padding: 8px;\n    overflow: auto;\n}\n\n.DateField-module_dayContainer__2D1tX {\n    height: 35px;\n    width: 35px;\n    background: var(--mfc-background-primary);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    text-align: center;\n\n    font-size: .85rem;\n    font-weight: bold;\n    font-family: \"Roboto\";\n    color: var(--mfc-color-tertiary);\n    border-radius: 8px;\n    border: transparent 2px solid;\n\n    cursor: pointer;\n    transition: 150ms linear;\n}\n\n.DateField-module_dayContainer__2D1tX:hover {\n    color: #0095ff;\n    border: rgba(0, 149, 255, .5) 2px solid;\n}\n\n.DateField-module_dayContainer__2D1tX:active {\n    background: var(--mfc-background-quaternary);\n\n    color: #0095ff;\n    border: rgba(0, 149, 255, .5) 2px solid;\n}\n\n.DateField-module_currentDate__JD8r5 {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    font-size: .8rem;\n    font-weight: normal;\n    color: var(--mfc-color-tertiary);\n}";
var styles$q = {"fieldsContainer":"DateField-module_fieldsContainer__18OUu","inputContainer":"DateField-module_inputContainer__3Jx_6","buttonContainer":"DateField-module_buttonContainer__37d09","container":"DateField-module_container__11emn","divider":"DateField-module_divider__18rCE","calendar":"DateField-module_calendar__2GTEw","monthContainer":"DateField-module_monthContainer__3K4Sw","activeContainer":"DateField-module_activeContainer__2lxhB","daysContainer":"DateField-module_daysContainer__2DuT9","dayContainer":"DateField-module_dayContainer__2D1tX","currentDate":"DateField-module_currentDate__JD8r5"};
styleInject(css_248z$s);

var css_248z$r = "@import \"../../../misc/theme/styles.module.css\";\n\n.FloatingBox-module_selectBox__3cX-u {\n    transition: 150ms ease-in-out;\n    position: absolute;\n    /*transform: translateY(-50%);*/\n    top: calc(100% - 16px);\n    left: 0;\n    z-index: 999;\n\n\n}";
var styles$p = {"selectBox":"FloatingBox-module_selectBox__3cX-u"};
styleInject(css_248z$r);

function FloatingBox(props) {
  var ref = useRef();

  var handleMouseDown = function handleMouseDown(event) {
    if (props.open && !document.elementsFromPoint(event.clientX, event.clientY).includes(ref.current)) props.setOpen(false);
  };

  useEffect(function () {
    document.addEventListener('mousedown', handleMouseDown);
    return function () {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [props.open]);
  useEffect(function () {
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
  return /*#__PURE__*/React$1.createElement("div", {
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
  parentNode: PropTypes.object,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  children: PropTypes.node,
  width: PropTypes.string
};

var NAMES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
function useDate(value, pattern, handleChange) {
  var _useState = useState({
    year: new Date().getFullYear()
  }),
      _useState2 = _slicedToArray(_useState, 2),
      parsedDate = _useState2[0],
      setDate = _useState2[1];

  var calendar = useMemo(function () {
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

  useEffect(function () {
    if (value) setDate(splitDate(value));
  }, [value]);

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      initialized = _useState4[0],
      setInitialized = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      changed = _useState6[0],
      setChanged = _useState6[1];

  var parseDate = function parseDate(day, month, year) {
    return pattern.replace('dd', day < 10 ? '0' + day : day).replace('mm', month < 10 ? '0' + month : month).replace('yyyy', year);
  };

  useEffect(function () {
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

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var pattern = useMemo(function () {
    if (props.pattern) return props.pattern;else return 'dd/mm/yyyy';
  }, [props.pattern]);

  var _useDate = useDate(props.value, pattern),
      date = _useDate.date,
      calendar = _useDate.calendar,
      initialized = _useDate.initialized,
      setChanged = _useDate.setChanged,
      changed = _useDate.changed,
      parseDate = _useDate.parseDate;

  var ref = useRef();

  var getDays = function getDays(month) {
    var res = [];

    if (month - 1 < calendar.length) {
      var days = calendar[month - 1].days;

      var _loop = function _loop(i) {
        res.push( /*#__PURE__*/React$1.createElement(React$1.Fragment, {
          key: month + '-month-' + (i + 1) + '-day'
        }, /*#__PURE__*/React$1.createElement(Button, {
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

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      mask = _useState4[0],
      setMask = _useState4[1];

  useEffect(function () {
    setMask(pattern.replaceAll('y', '9').replaceAll('d', '9').replaceAll('m', '9'));
  }, [pattern]);
  return /*#__PURE__*/React$1.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      width: props.width,
      height: 'fit-content'
    }
  }, /*#__PURE__*/React$1.createElement(TextField, {
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
    maskEnd: /*#__PURE__*/React$1.createElement(Button, {
      onClick: function onClick() {
        return setOpen(true);
      },
      disabled: props.disabled
    }, /*#__PURE__*/React$1.createElement("span", {
      style: {
        fontSize: '1.2rem'
      },
      className: "material-icons-round"
    }, "calendar_today")),
    noMargin: true,
    required: props.required
  }), /*#__PURE__*/React$1.createElement(FloatingBox, {
    parentNode: (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.parentNode,
    open: open,
    setOpen: setOpen,
    reference: ref.current
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$q.calendar
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$q.monthContainer
  }, /*#__PURE__*/React$1.createElement(Button, {
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
  }, /*#__PURE__*/React$1.createElement("span", {
    style: {
      fontSize: '1.2rem'
    },
    className: "material-icons-round"
  }, "arrow_back_ios")), /*#__PURE__*/React$1.createElement("div", {
    className: styles$q.currentDate
  }, /*#__PURE__*/React$1.createElement("div", null, !date.month || date.month > 12 || date.month < 1 ? calendar[new Date().getMonth()].month : calendar[date.month - 1].month), "-", /*#__PURE__*/React$1.createElement("div", null, !date.year ? new Date().getFullYear() : date.year)), /*#__PURE__*/React$1.createElement(Button, {
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
  }, /*#__PURE__*/React$1.createElement("span", {
    style: {
      fontSize: '1.2rem',
      transform: 'rotate(180deg'
    },
    className: "material-icons-round"
  }, "arrow_back_ios"))), /*#__PURE__*/React$1.createElement("div", {
    className: styles$q.daysContainer
  }, getDays(!date.month || date.month > 12 || date.month < 1 ? new Date().getMonth() : date.month).map(function (e) {
    return e;
  })))));
}
DateField.propTypes = {
  helperText: PropTypes.string,
  width: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'default']),
  pattern: PropTypes.oneOf(['yyyy-mm-dd', 'yyyy/mm/dd', 'yyyy-dd-mm', 'yyyy/dd/mm', 'mm/dd/yyyy', 'mm-dd-yyyy', 'dd/mm/yyyy', 'dd-mm-yyyy'])
};

var css_248z$q = "@import '../../../misc/theme/styles.module.css';\n\n\n.Header-module_wrapper__2bhrC {\n\n    border: var(--mfc-border-primary) 1px solid;\n    transition: 250ms ease-in;\n    box-shadow: var(--mfc-box-shadow-primary) 0 2px 5px 1px;\n    background: var(--mfc-background-primary);\n    border-radius: 5px;\n    position: sticky;\n    top: 0;\n    z-index: 50;\n    height: fit-content;\n\n    max-width: 100%;\n    /*height: ;*/\n    overflow: visible;\n    display: grid;\n}\n\n.Header-module_dropdownLabel__1vYFA {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    padding: 0 10px;\n\n    /*font-size: .9rem;*/\n    font-family: \"Roboto\";\n}\n\n.Header-module_header__ltUNA {\n\n    position: relative;\n\n    display: flex;\n    height: fit-content;\n    justify-content: space-between;\n    width: 100%;\n    padding: 8px;\n    font-family: \"Roboto\";\n    font-size: 1.2rem;\n\n    font-weight: 600;\n    color: var(--mfc-color-secondary);\n\n}\n\n.Header-module_filter__2RF8V {\n    user-select: none;\n    outline: none;\n    background-color: #0095ff;\n    color: white;\n    border: none;\n    padding: 4px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 4px;\n    border-radius: 5px;\n\n    height: 30px;\n    width: fit-content;\n    cursor: pointer;\n\n    transition: 150ms linear;\n}\n\n.Header-module_filter__2RF8V:hover {\n    opacity: .9;\n}\n\n.Header-module_filter__2RF8V:active {\n    opacity: .7;\n    box-shadow: none;\n}\n\n\n.Header-module_overflow__fE49E {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n\n.Header-module_fieldWrapper__1rgwM {\n    display: grid;\n    gap: 16px;\n    height: fit-content;\n\n}\n\n.Header-module_selectWrapper__3Nmlr {\n    display: flex;\n    gap: 8px;\n    font-size: .9rem;\n    width: 50%;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.Header-module_button__8iL-5 {\n\n    height: 30px;\n    padding: 4px 8px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n}";
var styles$o = {"wrapper":"Header-module_wrapper__2bhrC","dropdownLabel":"Header-module_dropdownLabel__1vYFA","header":"Header-module_header__ltUNA","filter":"Header-module_filter__2RF8V","overflow":"Header-module_overflow__fE49E","fieldWrapper":"Header-module_fieldWrapper__1rgwM","selectWrapper":"Header-module_selectWrapper__3Nmlr","button":"Header-module_button__8iL-5"};
styleInject(css_248z$q);

var css_248z$p = "@import \"../../../misc/theme/styles.module.css\";\n\n\n.Checkbox-module_container__1Zcqj{\n    outline: none;\n\n    border: var(--mfc-color-tertiary) 1px solid;\n    width: 17px;\n    height: 17px;\n\n    border-radius: 50%;\n    background: transparent;\n    transition: 150ms linear;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n}\n\n.Checkbox-module_container__1Zcqj:hover{\n    border: #0095ff 1px solid;\n}\n.Checkbox-module_container__1Zcqj:active{\n    background: var(--mfc-background-quaternary);\n    border: #0095ff 1px solid;\n}\n.Checkbox-module_container__1Zcqj:disabled{\n    background: transparent;\n    border-color: var(--mfc-color-quinary);\n    cursor: unset;\n}\n\n.Checkbox-module_wrapper__1BTRc{\n\n\n\n    border: var(--mfc-border-primary) 1px solid;\n    border-radius: 5px;\n    padding: 8px;\n    width: fit-content;\n}\n.Checkbox-module_wrapperChildren__32wIY{\n    display: grid;\n    gap: 8px;\n}";
var styles$n = {"container":"Checkbox-module_container__1Zcqj","wrapper":"Checkbox-module_wrapper__1BTRc","wrapperChildren":"Checkbox-module_wrapperChildren__32wIY"};
styleInject(css_248z$p);

function Checkbox(props) {
  return /*#__PURE__*/React$1.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      opacity: props.disabled ? '.8' : 1
    }
  }, /*#__PURE__*/React$1.createElement("button", {
    className: styles$n.container,
    disabled: props.disabled,
    style: {
      background: props.checked ? '#0095ff' : undefined,
      border: props.checked ? '#0095ff 1px solid' : undefined
    },
    onClick: function onClick() {
      return props.handleCheck(props.checked);
    }
  }, /*#__PURE__*/React$1.createElement("span", {
    style: {
      color: 'white',
      visibility: props.checked ? 'visible' : 'hidden',
      fontSize: '15px',
      fontWeight: "bold"
    },
    className: "material-icons-round"
  }, "done")), props.label ? /*#__PURE__*/React$1.createElement("div", {
    style: {
      fontSize: '.9rem'
    }
  }, props.label) : null);
}
Checkbox.propTypes = {
  checked: PropTypes.bool,
  handleCheck: PropTypes.func,
  label: PropTypes.any,
  disabled: PropTypes.bool
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
  var _useReducer = useReducer(dataReducer, [], init),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      data = _useReducer2[0],
      dispatchData = _useReducer2[1];

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      currentPage = _useState4[0],
      setCurrentPage = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      filters = _useState6[0],
      setFilters = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      sorts = _useState8[0],
      setSorts = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      hasMore = _useState10[0],
      setHasMore = _useState10[1];

  var fetchParams = useCallback(function () {
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
  var fetchData = useCallback(function () {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    setLoading(true);
    var params = fetchParams(page);
    axios(params).then(function (res) {
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
  useEffect(function () {
    if (currentPage > 0) fetchData(currentPage);
  }, [currentPage]);
  useEffect(function () {
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
  url: PropTypes.string.isRequired,
  headers: PropTypes.object,
  parsePackage: PropTypes.func,
  fetchSize: PropTypes.number
};

function useFilter(filter, setFilter, setSelectorOpen, selectorOpen) {
  var _useState = useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      onInput = _useState2[0],
      setOnInput = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      changed = _useState4[0],
      setChanged = _useState4[1];

  var query = useMemo(function () {
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

  var getField = useCallback(function () {
    var field;
    var baseProps = {
      type: filter.type,
      key: filter.key,
      label: filter.label
    };

    var dateNumber = function dateNumber(val) {
      return /*#__PURE__*/React$1.createElement("div", {
        className: styles$o.fieldWrapper
      }, val, /*#__PURE__*/React$1.createElement("div", {
        className: styles$o.selectWrapper
      }, /*#__PURE__*/React$1.createElement(Checkbox, {
        checked: filter.greater_than,
        handleCheck: function handleCheck() {
          setFilter(function (prevState) {
            return _objectSpread2(_objectSpread2({}, baseProps), {
              value: prevState.value,
              greater_than: true
            });
          });
        }
      }), "Maior que."), /*#__PURE__*/React$1.createElement("div", {
        className: styles$o.selectWrapper
      }, /*#__PURE__*/React$1.createElement(Checkbox, {
        checked: filter.less_than,
        handleCheck: function handleCheck() {
          setFilter(function (prevState) {
            return _objectSpread2(_objectSpread2({}, baseProps), {
              value: prevState.value,
              less_than: true
            });
          });
        }
      }), "Menor que."), /*#__PURE__*/React$1.createElement("div", {
        className: styles$o.selectWrapper
      }, /*#__PURE__*/React$1.createElement(Checkbox, {
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
          field = /*#__PURE__*/React$1.createElement("div", {
            className: styles$o.fieldWrapper
          }, /*#__PURE__*/React$1.createElement(TextField, {
            label: filter.label,
            width: '100%',
            disabled: false,
            handleChange: function handleChange(value) {
              return _handleChange(value.target.value);
            },
            value: filter.value,
            placeholder: filter.label
          }), /*#__PURE__*/React$1.createElement("div", {
            className: styles$o.selectWrapper
          }, /*#__PURE__*/React$1.createElement(Checkbox, {
            checked: filter.equal_to,
            handleCheck: function handleCheck() {
              setFilter(function (prevState) {
                return _objectSpread2(_objectSpread2({}, baseProps), {
                  value: prevState.value,
                  equal_to: true
                });
              });
            }
          }), "\xC9 igual a."), /*#__PURE__*/React$1.createElement("div", {
            className: styles$o.selectWrapper
          }, /*#__PURE__*/React$1.createElement(Checkbox, {
            checked: filter.different_from,
            handleCheck: function handleCheck() {
              setFilter(function (prevState) {
                return _objectSpread2(_objectSpread2({}, baseProps), {
                  value: prevState.value,
                  different_from: true
                });
              });
            }
          }), "N\xE3o \xE9 (case sensitive)."), /*#__PURE__*/React$1.createElement("div", {
            className: styles$o.selectWrapper
          }, /*#__PURE__*/React$1.createElement(Checkbox, {
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
          field = dateNumber( /*#__PURE__*/React$1.createElement(TextField, {
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
          field = /*#__PURE__*/React$1.createElement(Selector, {
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
          field = dateNumber( /*#__PURE__*/React$1.createElement(DateField, {
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

  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$s.container
  }, props.selectedField !== null && props.selectedField !== undefined ? /*#__PURE__*/React$1.createElement(React$1.Fragment, null, getField(), /*#__PURE__*/React$1.createElement("div", {
    style: {
      display: 'flex',
      gap: '4px',
      width: '100%',
      height: '35px'
    }
  }, /*#__PURE__*/React$1.createElement(Button, {
    styles: {
      width: '50%',
      padding: '4px'
    },
    variant: 'filled',
    color: 'secondary',
    onClick: function onClick() {
      props.setSelectedField(null);
    }
  }, "Cancelar"), /*#__PURE__*/React$1.createElement(Button, {
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
  }, /*#__PURE__*/React$1.createElement("span", {
    className: "material-icons-round"
  }, "done"), "Aplicar"))) : /*#__PURE__*/React$1.createElement(Empty, {
    customLabel: 'Nada selecionado'
  }));
}
Field.propTypes = {
  applyFilter: PropTypes.func,
  keys: PropTypes.arrayOf(keyTemplate).isRequired,
  selectorOpen: PropTypes.bool,
  setSelectorOpen: PropTypes.func,
  selectedField: PropTypes.object,
  setSelectedField: PropTypes.func
};

function Filter(props) {
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      selectedFilter = _useState2[0],
      setSelectedFilter = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      selectorOpen = _useState4[0],
      setSelectorOpen = _useState4[1];

  var getField = function getField(e) {
    return {
      icon: getIcon(e.type),
      label: /*#__PURE__*/React$1.createElement("div", {
        style: {
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          maxWidth: '100%'
        }
      }, e.label, /*#__PURE__*/React$1.createElement(ToolTip, {
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
          icon = /*#__PURE__*/React$1.createElement("span", {
            className: "material-icons-round",
            style: {
              fontSize: '1.2rem'
            }
          }, "calendar_today");
          break;
        }

      case 'string':
        {
          icon = /*#__PURE__*/React$1.createElement("span", {
            className: "material-icons-round",
            style: {
              fontSize: '1.2rem'
            }
          }, "text_fields");
          break;
        }

      case 'object':
        {
          icon = /*#__PURE__*/React$1.createElement("span", {
            className: "material-icons-round",
            style: {
              fontSize: '1.2rem'
            }
          }, "link");
          break;
        }

      default:
        {
          icon = /*#__PURE__*/React$1.createElement("span", {
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

  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement(Modal, {
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
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$s.filters
  }, props.keys.map(function (k, i) {
    var button = getField(k);
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: i + '-filter'
    }, /*#__PURE__*/React$1.createElement(Button, {
      highlight: (selectedFilter === null || selectedFilter === void 0 ? void 0 : selectedFilter.key) === k.key,
      onClick: button.onClick,
      className: styles$s.filterButton,
      variant: "minimal-horizontal"
    }, button.icon, button.label));
  })), /*#__PURE__*/React$1.createElement(Field, {
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
  })), /*#__PURE__*/React$1.createElement("div", {
    className: styles$s.activeFiltersContainer
  }, props.filters.map(function (e, i) {
    return /*#__PURE__*/React$1.createElement("div", {
      className: styles$s.filter
    }, /*#__PURE__*/React$1.createElement("div", {
      className: styles$s.overflow,
      style: {
        fontSize: '.75rem',
        fontWeight: 'bold'
      }
    }, e.label), /*#__PURE__*/React$1.createElement("div", {
      className: styles$s.overflow,
      style: {
        fontSize: '.7rem'
      }
    }, props.getType(e)), /*#__PURE__*/React$1.createElement("div", {
      className: styles$s.overflow,
      style: {
        fontSize: '.75rem',
        fontWeight: 'bold'
      }
    }, e.type === 'date' ? props.parseDate(e.value) : e.type === 'object' ? e.objectLabel : e.value), /*#__PURE__*/React$1.createElement(ToolTip, null, /*#__PURE__*/React$1.createElement("div", {
      className: styles$s.overflow,
      style: {
        fontSize: '.75rem'
      }
    }, e.label, ":"), /*#__PURE__*/React$1.createElement("div", {
      className: styles$s.overflow,
      style: {
        fontWeight: 'normal',
        fontSize: '.7rem'
      }
    }, props.getType(e)), /*#__PURE__*/React$1.createElement("div", {
      className: styles$s.overflow,
      style: {
        fontSize: '.75rem'
      }
    }, e.type === 'date' ? props.parseDate(e.value) : e.type === 'object' ? e.objectLabel : e.value)), /*#__PURE__*/React$1.createElement(Button, {
      color: 'secondary',
      onClick: function onClick() {
        var newFilters = _toConsumableArray(props.filters);

        newFilters.splice(i, 1);
        props.setFilters(newFilters);
      },
      className: styles$s.button
    }, /*#__PURE__*/React$1.createElement("span", {
      className: "material-icons-round",
      style: {
        fontSize: '1.1rem'
      }
    }, "close")));
  })));
}
Filter.propTypes = {
  keys: PropTypes.arrayOf(keyTemplate).isRequired,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  filters: PropTypes.array,
  setFilters: PropTypes.func,
  getType: PropTypes.func,
  parseDate: PropTypes.func
};

function SelectorModal(props) {
  var lastElementRef = useInfiniteScroll(props.hook.setCurrentPage, props.hook.currentPage, props.hook.loading, props.hook.hasMore);

  var _useHeader = useHeader(props.dispatch, props.actions),
      getType = _useHeader.getType,
      parseDate = _useHeader.parseDate,
      open = _useHeader.open,
      setOpen = _useHeader.setOpen;

  useEffect(function () {
    if (props.open) props.hook.clean();
  }, [props.open]);
  var translate = useLocale();
  return /*#__PURE__*/React$1.createElement(Modal, {
    open: props.open,
    handleClose: function handleClose() {
      console.log(open);
      if (!open) props.setOpen(false);
    },
    animationStyle: 'slide-right',
    blurIntensity: 0,
    className: styles$u.wrapper
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$u.header
  }, props.label), /*#__PURE__*/React$1.createElement("div", {
    className: styles$u.headerButtons
  }, /*#__PURE__*/React$1.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, /*#__PURE__*/React$1.createElement(Button, {
    variant: 'outlined',
    onClick: function onClick() {
      return props.onCreate();
    },
    styles: {
      display: props.createOption === true ? undefined : 'none'
    },
    className: styles$u.headerButton
  }, /*#__PURE__*/React$1.createElement("span", {
    className: "material-icons-round"
  }, "add"), /*#__PURE__*/React$1.createElement(ToolTip, {
    content: translate('create_new')
  })), /*#__PURE__*/React$1.createElement(Button, {
    variant: 'outlined',
    onClick: function onClick() {
      return props.hook.clean();
    },
    className: styles$u.headerButton
  }, /*#__PURE__*/React$1.createElement("span", {
    className: "material-icons-round"
  }, "refresh"), /*#__PURE__*/React$1.createElement(ToolTip, {
    content: translate('reload_data')
  })), /*#__PURE__*/React$1.createElement(Button, {
    variant: 'outlined',
    onClick: function onClick() {
      return setOpen(true);
    },
    className: styles$u.headerButton
  }, /*#__PURE__*/React$1.createElement("span", {
    className: "material-icons-round"
  }, "filter_list"), /*#__PURE__*/React$1.createElement(ToolTip, {
    content: translate('filters')
  }))), /*#__PURE__*/React$1.createElement(Button, {
    variant: 'outlined',
    onClick: function onClick() {
      props.handleChange(null);
      props.setOpen(false);
    },
    color: "secondary",
    className: styles$u.headerButton,
    disabled: !props.value
  }, /*#__PURE__*/React$1.createElement("span", {
    className: "material-icons-round"
  }, "clear_all"), translate('clear_selected'), /*#__PURE__*/React$1.createElement(ToolTip, {
    content: translate('clear_selected')
  }))), /*#__PURE__*/React$1.createElement(Filter, {
    keys: props.keys,
    filters: props.hook.filters,
    setFilters: props.hook.setFilters,
    cleanState: props.hook.clean,
    getType: getType,
    open: open,
    setOpen: setOpen,
    parseDate: parseDate
  }), /*#__PURE__*/React$1.createElement(Row$2, {
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
  }), /*#__PURE__*/React$1.createElement("div", {
    className: styles$u.divider
  }), /*#__PURE__*/React$1.createElement("div", {
    className: styles$u.rows
  }, props.hook.data.length === 0 ? /*#__PURE__*/React$1.createElement(Empty, null) : props.hook.data.map(function (e, i) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: e.id + '-selector-modal-row-' + i
    }, /*#__PURE__*/React$1.createElement(Row$2, {
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
  data: PropTypes.array,
  keys: PropTypes.array,
  createOption: PropTypes.bool,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  cleanState: PropTypes.func,
  value: PropTypes.object,
  handleChange: PropTypes.func,
  label: PropTypes.string,
  hook: PropTypes.object,
  identificationKey: PropTypes.string,
  onCreate: PropTypes.func
};

function Selector(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openCreate = _useState4[0],
      setOpenCreate = _useState4[1];

  var translate = useLocale();
  var color = useMemo(function () {
    if (props.colorVariant === 'secondary') return {
      className: shared$2.secondaryVariant,
      color: '#0095ff'
    };else return {
      className: undefined,
      color: '#0095ff'
    };
  }, []);
  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement(SelectorModal, _extends({}, props, {
    open: props.open === true ? props.open : open,
    onCreate: function onCreate() {
      return setOpenCreate(true);
    },
    setOpen: props.handleClose ? props.handleClose : setOpen
  })), /*#__PURE__*/React$1.createElement("div", {
    style: {
      width: props.width,
      maxWidth: props.width,
      display: 'grid',
      gap: '4px'
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.labelContainer,
    style: {
      visibility: props.value !== null && props.value !== undefined ? 'visible' : 'hidden',
      opacity: props.value !== null && props.value !== undefined ? '1' : '0',
      transition: 'visibility 0.2s ease,opacity 0.2s ease',
      textTransform: 'capitalize'
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.overflow
  }, props.label), props.helperText ? /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.helperText
  }, /*#__PURE__*/React$1.createElement("span", {
    className: "material-icons-round",
    style: {
      fontSize: '1rem'
    }
  }, "info"), /*#__PURE__*/React$1.createElement(ToolTip, {
    content: props.helperText,
    align: 'start'
  })) : null), /*#__PURE__*/React$1.createElement("div", {
    className: [shared$2.wrapper, color.className, styles$v.buttonWrapper].join(' '),
    "data-highlight": open ? open : undefined,
    "data-disabled": props.disabled ? props.disabled : undefined
  }, props.value !== null && props.value !== undefined ? /*#__PURE__*/React$1.createElement(Row$2, {
    onClick: function onClick() {
      if (props.onClick) props.onClick();else setOpen(true);
    },
    disabled: props.disabled,
    data: props.value,
    highlight: open,
    keys: props.keys,
    height: props.size === 'small' ? '36px' : '56px'
  }) : /*#__PURE__*/React$1.createElement(Button, {
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
  }, props.placeholder, /*#__PURE__*/React$1.createElement("span", {
    style: {
      fontSize: '1.2rem'
    },
    className: "material-icons-round"
  }, "launch"))), /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.alertLabel,
    style: {
      color: props.value === null || props.value === undefined ? '#ff5555' : undefined,
      visibility: props.required ? 'visible' : 'hidden'
    }
  }, translate('required'))), /*#__PURE__*/React$1.createElement(Modal, {
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
  helperText: PropTypes.string,
  children: PropTypes.func,
  onClick: PropTypes.func,
  hook: PropTypes.object.isRequired,
  label: PropTypes.any,
  placeholder: PropTypes.any,
  required: PropTypes.bool,
  value: PropTypes.object,
  handleChange: PropTypes.func,
  disabled: PropTypes.bool,
  width: PropTypes.string,
  createOption: PropTypes.bool,
  keys: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['string', 'number', 'object', 'date']),
    maskStart: PropTypes.any,
    maskEnd: PropTypes.any,
    additionalWidth: PropTypes.string
  })).isRequired,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  size: PropTypes.oneOf(['small', 'default']),
  colorVariant: PropTypes.oneOf(['default', 'secondary', 'primary'])
};

var css_248z$o = "@import \"../../../misc/theme/styles.module.css\";\r\n\r\n.Form-module_wrapper__153NP {\r\n\r\n    width: 100%;\r\n    max-height: 100%;\r\n\r\n    overflow-y: auto;\r\n    overflow-x: visible;\r\n    position: relative;\r\n}\r\n\r\n.Form-module_buttonContainer__1aUGJ {\r\n    color: var(--mfc-color-tertiary);\r\n    height: 100%;\r\n\r\n    border-radius: 5px;\r\n    transition: 150ms ease-in-out;\r\n    padding: 4px;\r\n\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n.Form-module_submitButton__3Y6mQ{\r\n    height: 100%;\r\n    border-radius: 5px;\r\n    transition: 150ms ease-in-out;\r\n    padding: 8px 24px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\n.Form-module_divider__3Byas{\r\n    width: 1px;\r\n    height: 75%;\r\n    background: var(--mfc-border-primary);\r\n}\r\n\r\n\r\n.Form-module_header__2ybTo {\r\n    transition: 250ms ease-in;\r\n    box-shadow: var(--mfc-box-shadow-primary) 0 2px 5px 1px;\r\n\r\n\r\n    position: sticky;\r\n    font-family: \"Roboto\";\r\n    top: 0;\r\n    z-index: 50;\r\n    background: var(--mfc-background-primary);\r\n    height: fit-content;\r\n\r\n    display: grid;\r\n    gap: 4px;\r\n\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    padding: 8px;\r\n    border-radius: 5px;\r\n    font-size: 1.05rem;\r\n    font-weight: 600;\r\n\r\n    color: var(--mfc-color-secondary);\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.Form-module_headerContent__3Z2U_ {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\n.Form-module_content__2bq-t {\r\n    padding-bottom: 100px;\r\n    display: grid;\r\n    gap: 8px;\r\n}\r\n\r\n.Form-module_buttons__IkVi0 {\r\n    padding: 8px 0 0 0;\r\n    border-top: var(--mfc-border-primary) 1px solid;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    gap: 8px;\r\n    align-items: center\r\n}";
var shared$1 = {"wrapper":"Form-module_wrapper__153NP","buttonContainer":"Form-module_buttonContainer__1aUGJ","submitButton":"Form-module_submitButton__3Y6mQ","divider":"Form-module_divider__3Byas","header":"Form-module_header__2ybTo","headerContent":"Form-module_headerContent__3Z2U_","content":"Form-module_content__2bq-t","buttons":"Form-module_buttons__IkVi0"};
styleInject(css_248z$o);

function Header$1(props) {
  var _props$options;

  var translate = useLocale();
  return /*#__PURE__*/React$1.createElement("div", {
    className: shared$1.header,
    style: {
      boxShadow: props.scrolled ? undefined : 'none'
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    className: shared$1.headerContent
  }, /*#__PURE__*/React$1.createElement(Button, {
    className: shared$1.buttonContainer,
    color: 'secondary',
    styles: {
      display: props.returnButton ? undefined : 'none'
    },
    onClick: function onClick() {
      return props.handleClose();
    }
  }, /*#__PURE__*/React$1.createElement("span", {
    className: "material-icons-round"
  }, "arrow_back")), props.title), /*#__PURE__*/React$1.createElement("div", {
    className: shared$1.headerContent
  }, /*#__PURE__*/React$1.createElement(Button, {
    className: shared$1.submitButton,
    disabled: props.disabled,
    variant: 'filled',
    onClick: function onClick() {
      props.hook.setChanged(false);
      props.handleSubmit(props.hook.data, props.hook.clearState);
    }
  }, props.submitLabel ? props.submitLabel : props.create ? translate('create') : translate('save')))), /*#__PURE__*/React$1.createElement("div", {
    className: shared$1.buttons,
    style: {
      display: !props.options || props.options.length === 0 ? 'none' : undefined
    }
  }, (_props$options = props.options) === null || _props$options === void 0 ? void 0 : _props$options.map(function (b, index) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: index + '-option-button'
    }, /*#__PURE__*/React$1.createElement("div", {
      className: shared$1.divider,
      style: {
        display: index === 0 ? 'none' : undefined
      }
    }), /*#__PURE__*/React$1.createElement(Button, {
      align: 'bottom',
      variant: 'minimal',
      className: shared$1.buttonContainer,
      disabled: b.disabled,
      onClick: b.onClick
    }, b.icon, b.label));
  })));
}
Header$1.propTypes = {
  scrolled: PropTypes.bool,
  disabled: PropTypes.bool,
  returnButton: PropTypes.bool,
  title: PropTypes.string,
  hook: PropTypes.object.isRequired,
  create: PropTypes.bool,
  dependencies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.oneOf(['string', 'number', 'object', 'bool', 'date', 'array'])
  })),
  handleSubmit: PropTypes.func.isRequired,
  metadata: PropTypes.shape({
    lastModified: PropTypes.any,
    creator: PropTypes.any
  }),
  handleClose: PropTypes.func,
  submitLabel: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.any,
    label: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
  }))
};

function Form(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      disabled = _useState2[0],
      setDisabled = _useState2[1];

  var contentRef = useRef();
  useEffect(function () {
    var childNodes = contentRef.current.childNodes;
    var completed = true;
    childNodes.forEach(function (e) {
      completed = completed && JSON.parse(e.getAttribute('data-completed'));
    });
    setDisabled(!completed || !props.hook.changed);
  }); // const {ref, maxHeight} = useMaxHeight()

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      scrolled = _useState4[0],
      setScrolled = _useState4[1];

  return /*#__PURE__*/React$1.createElement("div", {
    onScroll: function onScroll(event) {
      if (event.target.scrollTop > 0) setScrolled(true);else setScrolled(false);
    },
    className: shared$1.wrapper // style={{maxHeight: maxHeight}}
    // ref={ref}

  }, /*#__PURE__*/React$1.createElement(Header$1, _extends({}, props, {
    disabled: disabled,
    scrolled: scrolled
  })), /*#__PURE__*/React$1.createElement("div", {
    className: shared$1.content,
    ref: contentRef
  }, props.children(props.hook.data, props.hook.handleChange)));
}
Form.propTypes = {
  returnButton: PropTypes.bool,
  title: PropTypes.string,
  hook: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
  create: PropTypes.bool,
  dependencies: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    type: PropTypes.oneOf(['string', 'number', 'object', 'bool', 'date', 'array'])
  })),
  handleSubmit: PropTypes.func.isRequired,
  metadata: PropTypes.shape({
    lastModified: PropTypes.any,
    creator: PropTypes.any
  }),
  handleClose: PropTypes.func,
  submitLabel: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.any,
    label: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
  }))
};

var css_248z$n = "\r\n.FormRow-module_wrapper__e-3ms {\r\n\r\n    background: var(--mfc-background-primary);\r\n    border-radius: 5px;\r\n    border: var(--mfc-border-primary) 1px solid;\r\n\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    column-gap: 32px;\r\n    row-gap: 8px;\r\n    width: 100%;\r\n    overflow: visible;\r\n\r\n    padding: 10px;\r\n}\r\n\r\n.FormRow-module_legendContent__31Jgu {\r\n    user-select: none;\r\n    width: 100%;\r\n    height: 35px;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 4px;\r\n}\r\n\r\n.FormRow-module_legend__2iAih {\r\n\r\n    padding-right: 16px;\r\n    font-size: .9rem;\r\n    font-weight: 600;\r\n    color: var(--mfc-color-tertiary);\r\n    padding-left: 0;\r\n}\r\n\r\n\r\n.FormRow-module_indicator__7yoUZ {\r\n    --color: #0095ff;\r\n    width: 2px;\r\n    height: 100%;\r\n    border-radius: 10px;\r\n\r\n    background: var(--color);\r\n}\r\n\r\n.FormRow-module_notCompleted__1Wtn8 {\r\n    --color: #ff5555;\r\n}";
var styles$m = {"wrapper":"FormRow-module_wrapper__e-3ms","legendContent":"FormRow-module_legendContent__31Jgu","legend":"FormRow-module_legend__2iAih","indicator":"FormRow-module_indicator__7yoUZ","notCompleted":"FormRow-module_notCompleted__1Wtn8"};
styleInject(css_248z$n);

function FormRow(props) {
  useEffect(function () {
    setIndex(Array.prototype.indexOf.call(ref.current.parentNode.children, ref.current) + 1);
  }, []);
  var children = React$1.Children.toArray(props.children);
  var completed = useMemo(function () {
    var res = true;
    children.forEach(function (e) {
      var isText = typeof e.props.value === 'string' ? e.props.value.length > 0 : true;
      res = res && (!e.props.required || e.props.value !== undefined && e.props.value !== null && isText && e.props.required);
    });
    return res;
  }, [props.children]);

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      index = _useState4[0],
      setIndex = _useState4[1];

  var ref = useRef();
  var translate = useLocale();
  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$m.wrapper,
    ref: ref,
    "data-completed": completed
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$m.legendContent
  }, /*#__PURE__*/React$1.createElement(ToolTip, {
    content: !completed ? translate('not_completed') : translate('complete'),
    justify: "start",
    align: 'middle'
  }), /*#__PURE__*/React$1.createElement("div", {
    className: [styles$m.indicator, !completed ? styles$m.notCompleted : undefined].join(' ')
  }), /*#__PURE__*/React$1.createElement(Button, {
    onClick: function onClick() {
      return setOpen(!open);
    },
    highlight: !open,
    color: 'secondary',
    className: shared$1.buttonContainer
  }, /*#__PURE__*/React$1.createElement("span", {
    style: {
      transform: open ? undefined : 'rotate(180deg)',
      transition: 'inherit'
    },
    className: "material-icons-round"
  }, "arrow_drop_down")), /*#__PURE__*/React$1.createElement("h1", {
    className: styles$m.legend
  }, props.title ? props.title : translate('step') + ' ' + index)), open ? props.children : null);
}
FormRow.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

var css_248z$m = "@import \"../../../misc/theme/styles.module.css\";\n\n.Select-module_wrapper__1Jond {\n    display: grid;\n    gap: 4px;\n    position: relative;\n    overflow: visible;\n}\n\n\n.Select-module_selectContainer__286gp {\n    position: relative;\n    z-index: 5;\n    display: flex;\n    justify-content: flex-start;\n    gap: 4px;\n    align-items: center;\n    transition: 150ms linear;\n    background: var(--mfc-background-primary);\n    width: 100%;\n    padding: 5px;\n    border-radius: 5px;\n}\n.Select-module_selectContainer__286gp:hover{\n    border-color: var(--accent-color);\n}\n.Select-module_selectContainer__286gp:disabled {\n    border-color: var(--mfc-border-primary);\n    cursor: default;\n    color: var(--mfc-color-quinary);\n}\n\n.Select-module_dropDownContainer__1MFxG {\n    display: grid;\n}\n\n.Select-module_dropDownChoicesContainer__1b-aa {\n    background-color: var(--mfc-background-primary);\n    border-radius: 5px;\n    box-shadow: 0 0 10px 2px rgba(0, 0, 0, .1);\n    width: 100%;\n    max-height: 200px;\n    height: fit-content;\n    overflow: auto;\n\n}\n\n.Select-module_dropDownButton__1_9m6 {\n    height: 35px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    text-align: left;\n    font-weight: 600;\n    font-family: \"Roboto\";\n    font-size: .75rem;\n}\n\n.Select-module_overflow__Eaw8K {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n}\n\n.Select-module_multiSelectRow__3xH6B {\n    display: flex;\n    user-select: none;\n    overflow: hidden;\n    align-items: center;\n    justify-content: flex-start;\n    height: 40px;\n    background: var(--mfc-background-primary);\n    gap: 8px;\n}\n\n.Select-module_multiSelectRowContent__2aRAa {\n    user-select: none;\n    color: var(--mfc-color-secondary);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    text-align: left;\n    font-weight: 600;\n    font-family: \"Roboto\";\n    font-size: .8rem;\n}\n\n.Select-module_multiSelectRowCheckbox__WOD6G {\n    cursor: pointer;\n}\n";
var styles$l = {"wrapper":"Select-module_wrapper__1Jond","selectContainer":"Select-module_selectContainer__286gp","dropDownContainer":"Select-module_dropDownContainer__1MFxG","dropDownChoicesContainer":"Select-module_dropDownChoicesContainer__1b-aa","dropDownButton":"Select-module_dropDownButton__1_9m6","overflow":"Select-module_overflow__Eaw8K","multiSelectRow":"Select-module_multiSelectRow__3xH6B","multiSelectRowContent":"Select-module_multiSelectRowContent__2aRAa","multiSelectRowCheckbox":"Select-module_multiSelectRowCheckbox__WOD6G"};
styleInject(css_248z$m);

function SelectField(props) {
  var _ref$current;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var translate = useLocale();
  var ref = useRef();
  var selected = useMemo(function () {
    return props.choices.find(function (e) {
      return e.key === props.value;
    });
  }, [props.value]);
  var color = useMemo(function () {
    if (props.colorVariant === 'secondary') return {
      className: shared$2.secondaryVariant,
      color: '#0095ff'
    };else return {
      className: undefined,
      color: '#0095ff'
    };
  }, []);
  return /*#__PURE__*/React$1.createElement("div", {
    style: {
      width: props.width,
      alignItems: props.value ? 'unset' : 'flex-start'
    },
    ref: ref,
    className: styles$l.wrapper
  }, /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.labelContainer,
    style: {
      visibility: props.value !== undefined && props.value !== null ? 'visible' : 'hidden',
      opacity: props.value !== undefined && props.value !== null ? '1' : '0'
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.overflow
  }, props.label), props.helperText ? /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.helperText
  }, /*#__PURE__*/React$1.createElement("span", {
    style: {
      fontSize: '1rem'
    },
    className: "material-icons-round"
  }, "info"), /*#__PURE__*/React$1.createElement(ToolTip, {
    content: props.helperText,
    align: 'start'
  })) : null), /*#__PURE__*/React$1.createElement("div", {
    className: [shared$2.wrapper, color.className].join(' '),
    "data-highlight": open ? open : undefined,
    "data-disabled": props.disabled ? props.disabled : undefined
  }, /*#__PURE__*/React$1.createElement(Button, {
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
  }, /*#__PURE__*/React$1.createElement("span", {
    style: {
      transform: !open ? 'unset' : 'rotate(180deg)',
      transition: '150ms linear'
    },
    className: "material-icons-round"
  }, "arrow_drop_down"), selected ? /*#__PURE__*/React$1.createElement("div", {
    className: styles$l.overflow,
    style: {
      color: selected.color
    }
  }, selected.value) : props.label)), /*#__PURE__*/React$1.createElement(FloatingBox, {
    parentNode: (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.parentNode,
    open: open,
    setOpen: setOpen,
    reference: ref.current,
    width: '100%'
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$l.dropDownChoicesContainer
  }, props.choices.map(function (choice, index) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: index + '-choice-button'
    }, /*#__PURE__*/React$1.createElement(Button, {
      styles: {
        borderRadius: '0',
        borderTop: index > 0 ? 'var(--mfc-border-primary) 1px solid' : 'none'
      },
      highlight: choice.key === props.value,
      onClick: function onClick() {
        props.handleChange(choice.key);
        setOpen(false);
      },
      className: styles$l.dropDownButton
    }, /*#__PURE__*/React$1.createElement("div", {
      className: styles$l.overflow
    }, choice.value), /*#__PURE__*/React$1.createElement(ToolTip, {
      content: choice.value
    })));
  }))), /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.alertLabel,
    style: {
      color: props.value === null || props.value === undefined ? '#ff5555' : '#262626',
      visibility: props.required ? 'visible' : 'hidden'
    }
  }, translate('required')));
}
SelectField.propTypes = {
  helperText: PropTypes.string,
  width: PropTypes.string,
  label: PropTypes.string,
  choices: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    color: PropTypes.string
  })).isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'default']),
  colorVariant: PropTypes.oneOf(['default', 'secondary', 'primary'])
};

function MultiSelectField(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var translate = useLocale();
  var ref = useRef();

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selected = _useState4[0],
      setSelected = _useState4[1];

  useEffect(function () {
    if (typeof props.value === 'string' && selected.length === 0 && props.value.length > 0) setSelected(props.value.split('-*/'));else if (props.asArray) setSelected(props.value ? props.value : []);
  }, [props.value]);
  var color = useMemo(function () {
    if (props.colorVariant === 'secondary') return {
      className: shared$2.secondaryVariant,
      color: '#0095ff'
    };else return {
      className: undefined,
      color: '#0095ff'
    };
  }, []);
  return /*#__PURE__*/React$1.createElement("div", {
    style: {
      width: props.width,
      alignItems: props.value ? 'unset' : 'flex-start'
    },
    ref: ref,
    className: styles$l.wrapper
  }, /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.labelContainer,
    style: {
      visibility: props.value !== undefined && props.value !== null ? 'visible' : 'hidden',
      opacity: props.value !== undefined && props.value !== null ? '1' : '0'
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.overflow
  }, props.label), props.helperText ? /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.helperText
  }, /*#__PURE__*/React$1.createElement("span", {
    style: {
      fontSize: '1rem'
    },
    className: "material-icons-round"
  }, "info"), /*#__PURE__*/React$1.createElement(ToolTip, {
    content: props.helperText,
    align: 'start'
  })) : null), /*#__PURE__*/React$1.createElement("div", {
    className: [shared$2.wrapper, color.className].join(' '),
    "data-highlight": open ? open : undefined,
    "data-disabled": props.disabled ? props.disabled : undefined
  }, /*#__PURE__*/React$1.createElement(Button, {
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
  }, /*#__PURE__*/React$1.createElement("span", {
    style: {
      transform: !open ? 'unset' : 'rotate(180deg)',
      transition: '150ms linear'
    },
    className: "material-icons-round"
  }, "arrow_drop_down"), props.value ? /*#__PURE__*/React$1.createElement("div", {
    className: styles$l.valueContainer
  }, props.asArray ? props.value.length : props.value.split('-*/').length - 1, " - ", translate('values')) : props.label)), /*#__PURE__*/React$1.createElement(FloatingBox, {
    open: open,
    setOpen: setOpen,
    reference: ref.current,
    width: '100%'
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$l.dropDownChoicesContainer,
    style: {
      padding: '0 8px'
    }
  }, props.choices.map(function (choice, index) {
    return /*#__PURE__*/React$1.createElement("div", {
      style: {
        overflow: "hidden"
      },
      className: styles$l.multiSelectRow,
      key: 'multi-choice-' + index
    }, /*#__PURE__*/React$1.createElement(Checkbox, {
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
      label: /*#__PURE__*/React$1.createElement("div", {
        style: {
          color: choice.color ? choice.color : undefined
        },
        className: styles$l.multiSelectRowContent
      }, choice.value)
    }), /*#__PURE__*/React$1.createElement(ToolTip, {
      content: choice.value,
      align: 'middle',
      justify: 'start'
    }));
  }))), /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.alertLabel,
    style: {
      color: props.value === null || props.value === undefined ? '#ff5555' : '#262626',
      visibility: props.required ? 'visible' : 'hidden'
    }
  }, translate('required')));
}
MultiSelectField.propTypes = {
  helperText: PropTypes.string,
  width: PropTypes.string,
  label: PropTypes.string,
  choices: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.any,
    value: PropTypes.any,
    color: PropTypes.string
  })).isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  asArray: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'default']),
  colorVariant: PropTypes.oneOf(['default', 'secondary', 'primary'])
};

function CheckboxGroup(props) {
  var translate = useLocale();
  return /*#__PURE__*/React$1.createElement("div", {
    style: {
      width: props.width,
      display: 'grid',
      gap: '4px'
    }
  }, /*#__PURE__*/React$1.createElement("fieldset", {
    className: styles$n.wrapper,
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React$1.createElement("legend", {
    className: shared$2.labelContainer,
    style: {
      padding: '0 8px'
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.overflow
  }, props.label), props.helperText ? /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.helperText
  }, /*#__PURE__*/React$1.createElement("span", {
    style: {
      fontSize: '1rem'
    },
    className: "material-icons-round"
  }, "info"), /*#__PURE__*/React$1.createElement(ToolTip, {
    content: props.helperText,
    align: 'start'
  })) : null), /*#__PURE__*/React$1.createElement("div", {
    className: styles$n.wrapperChildren
  }, props.children)), /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.alertLabel,
    style: {
      color: props.value === null || props.value === undefined ? '#ff5555' : '#262626',
      visibility: props.required ? 'visible' : 'hidden'
    }
  }, translate('required')));
}
CheckboxGroup.propTypes = {
  helperText: PropTypes.string,
  value: PropTypes.any,
  children: PropTypes.node,
  label: PropTypes.string,
  width: PropTypes.string,
  required: PropTypes.bool
};

var css_248z$l = ".FileField-module_button__2UlZj {\r\n    user-select: none;\r\n    position: relative;\r\n\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n\r\n    transition: inherit;\r\n    background: var(--mfc-background-primary);\r\n    width: 100%;\r\n\r\n    padding: 5px;\r\n\r\n    max-width: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.FileField-module_button__2UlZj:hover {\r\n    border-color: var(--accent-color);\r\n}\r\n\r\n.FileField-module_button__2UlZj:disabled {\r\n    border-color: var(--mfc-border-primary);\r\n}\r\n";
var styles$k = {"button":"FileField-module_button__2UlZj"};
styleInject(css_248z$l);

var css_248z$k = "@import \"../../../misc/theme/styles.module.css\";\n\n.File-module_dropArea__1w63h {\n    position: relative;\n    color: var(--mfc-color-quaternary);\n    transition: 150ms linear;\n    width: 100%;\n    height: 100%;\n    border-radius: 5px;\n    background: var(--mfc-background-secondary);\n    border: var(--mfc-border-secondary) 2px dashed;\n}\n.File-module_dropAreaContent__4oh19{\n    display: flex;\n    align-items: flex-start;\n    align-content: flex-start;\n    justify-content: flex-start;\n\n    gap: 18.5px;\n\n    flex-flow: row wrap;\n    overflow-y: auto;\n    padding: 16px;\n}\n\n\n.File-module_fileContainer__1DNbz{\n    position: relative;\n    width: 15%;\n    height: 25%;\n    background: var(--mfc-background-primary);\n    border-radius: 5px;\n    border: var(--mfc-border-primary) 1px solid;\n    display: grid;\n    align-content: space-between;\n    gap: 4px;\n    justify-content: center;\n    justify-items: center;\n    font-size: .9rem;\n    padding: 16px 8px 8px 8px;\n\n\n\n}\n\n.File-module_fileLabel__2-mr7{\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    max-width: 100%;\n\n}\n\n\n.File-module_header__2_0MX{\n    height: 45px;\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--mfc-color-secondary);\n    /*border-bottom: var(--mfc-border-secondary) 1px solid;*/\n    width: 100%;\n    display: flex;\n\n    align-items: center;\n}\n.File-module_headerAccepted__25LIt{\n    text-align: right;\n    border-left: var(--mfc-border-primary) 1px solid;\n    height: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-size: .7rem;\n    color: var(--mfc-color-quaternary);\n}\n.File-module_overflow__7Foyg{\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n\n\n.File-module_modalContainer__28Sut{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.File-module_modalContent__Cegaf {\n    height: 100%;\n    width: clamp(250px, 25%, 500px);\n    background: var(--mfc-background-primary);\n    margin-left: auto;\n    border-radius: 8px 0 0 8px;\n    box-shadow: var(--mfc-box-shadow-primary) 0 0 2px 1px;\n\n    display: grid;\n    gap: 16px;\n    grid-template-rows: 45px 35px calc(100% - 114px);\n\n\n    top: 0;\n    right: 0;\n\n    align-content: flex-start;\n    /*background: var(--mfc-background-secondary);*/\n    position: absolute;\n\n    border: var(--mfc-border-secondary) 1px solid;\n\n    padding: 16px;\n}\n";
var styles$j = {"dropArea":"File-module_dropArea__1w63h","dropAreaContent":"File-module_dropAreaContent__4oh19","fileContainer":"File-module_fileContainer__1DNbz","fileLabel":"File-module_fileLabel__2-mr7","header":"File-module_header__2_0MX","headerAccepted":"File-module_headerAccepted__25LIt","overflow":"File-module_overflow__7Foyg","modalContainer":"File-module_modalContainer__28Sut","modalContent":"File-module_modalContent__Cegaf"};
styleInject(css_248z$k);

function File(props) {
  // const [hover, setHover] = useState(false)
  var icon = useMemo(function () {
    var icon;

    switch (props.type) {
      case 'pdf':
        {
          icon = /*#__PURE__*/React$1.createElement("span", {
            style: {
              fontSize: '65px'
            },
            className: "material-icons-round"
          }, "picture_as_pdf");
          break;
        }

      case 'png':
        {
          icon = /*#__PURE__*/React$1.createElement("span", {
            style: {
              fontSize: '65px'
            },
            className: "material-icons-round"
          }, "image");
          break;
        }

      case 'jpeg':
        {
          icon = /*#__PURE__*/React$1.createElement("span", {
            style: {
              fontSize: '65px'
            },
            className: "material-icons-round"
          }, "image");
          break;
        }

      case 'jpg':
        {
          icon = /*#__PURE__*/React$1.createElement("span", {
            style: {
              fontSize: '65px'
            },
            className: "material-icons-round"
          }, "image");
          break;
        }

      case 'html':
        {
          icon = /*#__PURE__*/React$1.createElement("span", {
            style: {
              fontSize: '65px'
            },
            className: "material-icons-round"
          }, "web");
          break;
        }

      default:
        {
          icon = /*#__PURE__*/React$1.createElement("span", {
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
  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$j.fileContainer
  }, /*#__PURE__*/React$1.createElement(Button, {
    onClick: function onClick() {
      return props.handleDelete(props.index);
    },
    styles: {
      padding: '4px'
    }
  }, /*#__PURE__*/React$1.createElement("span", {
    style: {
      fontSize: '1rem'
    },
    className: "material-icons-round"
  }, "close")), icon, /*#__PURE__*/React$1.createElement("div", {
    className: styles$j.fileLabel
  }, props.name.split('.')[0]));
}
File.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  index: PropTypes.number,
  handleDelete: PropTypes.func
};

function FileModal(props) {
  var ref = useRef();
  var areaRef = useRef();
  var files = useMemo(function () {
    if (props.files !== undefined && props.files !== null) return props.files.map(function (e, i) {
      return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
        key: 'file-' + i
      }, /*#__PURE__*/React$1.createElement(File, {
        type: e.name.split('.').pop(),
        index: i,
        name: e.name,
        handleDelete: props.handleFileRemoval
      }));
    });
  }, [props.files]);
  var themes = useContext(ThemeContext);
  var translate = useLocale();
  return /*#__PURE__*/React$1.createElement(Modal, {
    open: props.open,
    handleClose: function handleClose() {
      return props.setOpen(false);
    },
    animationStyle: 'slide-right',
    blurIntensity: 0,
    className: styles$j.modalContent
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$j.header
  }, /*#__PURE__*/React$1.createElement("div", {
    style: {
      width: '100%'
    }
  }, translate('upload_files')), /*#__PURE__*/React$1.createElement("div", {
    className: [styles$j.headerAccepted, styles$j.overflow].join(' '),
    style: {
      width: '100%'
    }
  }, translate('accepted_types'), ": ", props.accept.length > 0 ? props.accept.map(function (e, i) {
    return e.split('.')[e.split('.').length - 1] + (i < props.accept.length - 1 ? ', ' : '');
  }) : translate('all'))), /*#__PURE__*/React$1.createElement(Button, {
    disabled: !props.multiple && props.files.length > 0,
    onClick: function onClick(event) {
      event.preventDefault();
      ref.current.click();
    }
  }, translate('upload_files')), /*#__PURE__*/React$1.createElement("div", {
    className: [styles$j.dropArea, props.files.length > 0 ? styles$j.dropAreaContent : ''].join(' '),
    ref: areaRef,
    style: {
      background: !props.multiple && props.files.length > 0 ? themes.theme.background1 : undefined
    },
    onDragLeave: function onDragLeave(e) {
      if (!(!props.multiple && props.files.length > 0)) {
        areaRef.current.style.borderColor = 'var(--mfc-border-primary)';
        areaRef.current.style.background = 'var(--mfc-background-primary)';
      }
    },
    onDragOver: function onDragOver(e) {
      e.preventDefault();

      if (!(!props.multiple && props.files.length > 0)) {
        areaRef.current.style.borderColor = '#0095ff';
        areaRef.current.style.background = 'var(--mfc-background-tertiary)';
      }
    },
    onDrop: function onDrop(e) {
      e.preventDefault();

      if (!(!props.multiple && props.files.length > 0)) {
        areaRef.current.style.borderColor = '#0095ff';
        areaRef.current.style.background = 'var(--mfc-background-tertiary)';
        props.setFiles([].concat(_toConsumableArray(props.files), _toConsumableArray(Array.from(e.dataTransfer.files))));
      }
    }
  }, props.files.length === 0 ? /*#__PURE__*/React$1.createElement(Empty, {
    customLabel: translate('drag_files')
  }) : files), /*#__PURE__*/React$1.createElement("input", {
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
  handleFileRemoval: PropTypes.func,
  setFiles: PropTypes.func,
  files: PropTypes.array,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  multiple: PropTypes.bool,
  accept: PropTypes.array
};

function FileField(props) {
  var translate = useLocale();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      openModal = _useState2[0],
      setOpenModal = _useState2[1];

  var color = useMemo(function () {
    if (props.colorVariant === 'secondary') return {
      className: shared$2.secondaryVariant,
      color: '#0095ff'
    };else return {
      className: undefined,
      color: '#0095ff'
    };
  }, []);
  var files = useMemo(function () {
    if (props.value && Array.isArray(props.value)) return props.value;else return [];
  }, [props.value]);
  var themes = useContext(ThemeContext);
  return /*#__PURE__*/React$1.createElement("div", {
    style: {
      width: props.width,
      marginBottom: 'auto',
      display: "grid",
      gap: '4px'
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.labelContainer,
    style: {
      opacity: files.length > 0 ? 1 : 0,
      transition: 'visibility 0.2s ease,opacity 0.2s ease'
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.overflow
  }, props.label), props.helperText ? /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.helperText
  }, /*#__PURE__*/React$1.createElement("span", {
    style: {
      fontSize: '1rem'
    },
    className: "material-icons-round"
  }, "info"), /*#__PURE__*/React$1.createElement(ToolTip, {
    content: props.helperText,
    align: 'start'
  })) : null), /*#__PURE__*/React$1.createElement("div", {
    className: [shared$2.wrapper, color.className].join(' '),
    "data-highlight": openModal ? openModal : undefined,
    "data-disabled": props.disabled ? props.disabled : undefined
  }, /*#__PURE__*/React$1.createElement(Button, {
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
    className: [styles$k.button, shared$2.labelContainer].join(' '),
    onClick: function onClick() {
      return setOpenModal(true);
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.labelContainer,
    style: {
      alignItems: 'center',
      height: '100%',
      gap: '16px',
      display: 'flex',
      color: themes ? 'var(--mfc-color-primary)' : '#555555'
    }
  }, translate('upload_files'), files.length > 0 ? /*#__PURE__*/React$1.createElement("div", {
    style: {
      fontSize: '.7rem',
      color: themes ? 'var(--mfc-color-secondary)' : '#777777'
    }
  }, "(", files.length, "  ", translate('uploaded_files'), ")") : null), /*#__PURE__*/React$1.createElement("span", {
    style: {
      fontSize: '1.2rem'
    },
    className: "material-icons-round"
  }, "attach_file"))), /*#__PURE__*/React$1.createElement("div", {
    className: shared$2.alertLabel,
    style: {
      color: files.length === 0 ? '#ff5555' : undefined,
      visibility: props.required ? 'visible' : 'hidden'
    }
  }, translate('required')), /*#__PURE__*/React$1.createElement(FileModal, {
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
  helperText: PropTypes.string,
  handleFileRemoval: PropTypes.func,
  value: PropTypes.array,
  multiple: PropTypes.bool,
  acceptTypes: PropTypes.array,
  handleChange: PropTypes.func,
  label: PropTypes.string,
  width: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'default']),
  colorVariant: PropTypes.oneOf(['default', 'secondary', 'primary'])
};

function MfcWrapper(props) {
  return /*#__PURE__*/React$1.createElement(LanguageContext.Provider, {
    value: props.language ? props.language : 'pt'
  }, /*#__PURE__*/React$1.createElement(ThemeContext.Provider, {
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
  }, /*#__PURE__*/React$1.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons+Round"
  }), /*#__PURE__*/React$1.createElement("div", {
    className: [props.onDark ? styles$A.dark : styles$A.light, props.className].join(' '),
    style: props.styles
  }, props.children)));
}
MfcWrapper.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.object,
  onDark: PropTypes.bool,
  language: PropTypes.oneOf(['pt', 'en']),
  children: PropTypes.node
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
  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  useEffect(function () {
    fetch(pathname).then(function (res) {
      if (!asJson) res.text().then(function (text) {
        setData(text);
      })["catch"](function (e) {
        return console.log(e);
      });else res.json().then(function (json) {
        console.log(json);
        setData(json);
      })["catch"](function (e) {
        return console.log(e);
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  }, [pathname]);
  return data;
}

var css_248z$j = "@import \"../../../misc/theme/styles.module.css\";\n@import url('http://fonts.cdnfonts.com/css/roboto');\n\n.Tabs-module_header__8l5LJ {\n    background-color: var(--mfc-background-primary);\n    border-radius: 5px;\n    justify-content: center;\n    border: var(--mfc-border-primary) 1px solid;\n\n    height: fit-content;\n    width: 100%;\n\n    display: grid;\n    /*border-bottom: var(--mfc-border-primary) 1px solid;*/\n    transition: 150ms ease-in;\n}\n\n.Tabs-module_tabs__3EMRN {\n    max-width: 100%;\n    width: 100%;\n\n    overflow: hidden;\n    margin: auto;\n    display: flex;\n    align-items: center;\n}\n\n\n.Tabs-module_button__1f53r {\n    text-transform: uppercase;\n    /*font-family: \"Roboto\" !important;*/\n    text-rendering: optimizeLegibility;\n    color: var(--mfc-color-tertiary);\n    font-weight: bold;\n    font-size: .73rem;\n    padding: 8px 24px;\n    height: 35px;\n    transition: 150ms ease;\n\n    text-overflow: ellipsis;\n    overflow: hidden;\n    max-width: 100%;\n    white-space: nowrap;\n}\n\n.Tabs-module_button__1f53r:hover, .Tabs-module_button__1f53r:active, .Tabs-module_button__1f53r[data-highlight=\"true\"] {\n    color: var(--color) !important;\n}\n\n\n.Tabs-module_enterA__2UsDT {\n    animation: Tabs-module_enter__10Gu2 150ms ease-in-out;\n}\n\n.Tabs-module_exitA__3_0uq {\n    animation: Tabs-module_exit__2fucC 150ms ease-in-out;\n}\n\n@keyframes Tabs-module_exit__2fucC {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes Tabs-module_enter__10Gu2 {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n";
var styles$i = {"header":"Tabs-module_header__8l5LJ","tabs":"Tabs-module_tabs__3EMRN","button":"Tabs-module_button__1f53r","enterA":"Tabs-module_enterA__2UsDT","enter":"Tabs-module_enter__10Gu2","exitA":"Tabs-module_exitA__3_0uq","exit":"Tabs-module_exit__2fucC"};
styleInject(css_248z$j);

var css_248z$i = "\r\n.Switcher-module_enterA__2RSrB {\r\n    animation: Switcher-module_enter__3bQ2E 150ms ease-in-out;\r\n}\r\n\r\n.Switcher-module_exitA__2rXXT {\r\n    animation: Switcher-module_exit__1sA5x 150ms ease-in-out;\r\n}\r\n\r\n@keyframes Switcher-module_exit__1sA5x {\r\n    0% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@keyframes Switcher-module_enter__3bQ2E {\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n";
var styles$h = {"enterA":"Switcher-module_enterA__2RSrB","enter":"Switcher-module_enter__3bQ2E","exitA":"Switcher-module_exitA__2rXXT","exit":"Switcher-module_exit__1sA5x"};
styleInject(css_248z$i);

function Switcher(props) {
  var ref = useRef();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      currentChild = _useState2[0],
      setCurrentChild = _useState2[1];

  useEffect(function () {
    if (props.openChild !== currentChild && props.openChild < React$1.Children.toArray(props.children).length) {
      var _ref$current;

      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.classList.add(styles$h.exitA);
    }
  }, [props.openChild]);
  return /*#__PURE__*/React$1.createElement("div", {
    ref: ref,
    className: props.className,
    style: props.styles,
    onAnimationEnd: function onAnimationEnd() {
      var _ref$current2, _ref$current3;

      setCurrentChild(props.openChild);
      (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.classList.add(styles$h.enterA);
      (_ref$current3 = ref.current) === null || _ref$current3 === void 0 ? void 0 : _ref$current3.classList.remove(styles$h.exitA);
    }
  }, React$1.Children.toArray(props.children).map(function (c, i) {
    return i !== currentChild ? null : /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: i + '-child'
    }, c);
  }));
}
Switcher.propTypes = {
  // animationType: PropTypes.oneOf(['sideways', 'vertically', 'fade']),
  className: PropTypes.string,
  children: PropTypes.node,
  openChild: PropTypes.number.isRequired,
  styles: PropTypes.object
};

function Tab(props) {
  return props.children ? props.children : /*#__PURE__*/React$1.createElement(React$1.Fragment, null);
}
Tab.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  styles: PropTypes.object,
  group: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node
};

function Tabs(props) {
  var _children$open, _children$open2;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var children = React$1.Children.toArray(props.children).filter(function (e) {
    return e.type === Tab;
  });
  return /*#__PURE__*/React$1.createElement("div", {
    className: props.className,
    style: props.styles,
    "data-open-tab": open
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$i.header,
    style: {
      justifyContent: props.align === 'end' ? 'flex-end' : props.align === 'start' ? 'flex-start' : undefined,
      width: props.indicator === 'fit' ? 'fit-content' : undefined,
      margin: props.indicator === 'fit' ? 'auto' : undefined
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$i.tabs
  }, children.map(function (e, i) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: i + '-button-header-tab'
    }, /*#__PURE__*/React$1.createElement(Button, {
      variant: 'minimal',
      highlight: open === i,
      className: styles$i.button,
      onClick: function onClick() {
        setOpen(i);
      }
    }, e.props.label, /*#__PURE__*/React$1.createElement(ToolTip, {
      content: e.props.label
    })));
  }))), /*#__PURE__*/React$1.createElement(Switcher, {
    className: (_children$open = children[open]) === null || _children$open === void 0 ? void 0 : _children$open.props.className,
    styles: (_children$open2 = children[open]) === null || _children$open2 === void 0 ? void 0 : _children$open2.props.styles,
    openChild: open
  }, children.map(function (el, index) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: index + '-tab'
    }, el);
  })));
}
Tabs.propTypes = {
  open: PropTypes.number,
  setOpen: PropTypes.func,
  align: PropTypes.oneOf(['start', 'end', 'center']),
  className: PropTypes.string,
  styles: PropTypes.object,
  children: PropTypes.node.isRequired,
  indicator: PropTypes.oneOf(['stretch', 'fit'])
};

var css_248z$h = "@import \"../../../misc/theme/styles.module.css\";\n\n.Vertical-module_content__3mXHl {\n    width: 100%;\n}\n\n.Vertical-module_wrapper__3BFk5 {\n    overflow: hidden;\n    max-height: 100%;\n    height: 100%;\n    position: relative;\n    width: 100%;\n\n    display: flex;\n\n    padding: 8px;\n}\n\n\n.Vertical-module_header__1E32z {\n    overflow-y: auto;\n    overflow-x: hidden;\n    position: sticky;\n    top: 0;\n\n    border: var(--mfc-border-primary) 1px solid;\n\n    background-color: var(--mfc-background-primary);\n    border-radius: 5px;\n\n    flex-grow: 1;\n    width: 25%;\n    max-width: 250px;\n\n    display: grid;\n    align-content: flex-start;\n    align-items: flex-start;\n    gap: 16px;\n\n\n    transition: 150ms linear;\n    height: 100%;\n\n\n    padding: 4px;\n}\n\n\n.Vertical-module_button__3sXjY {\n\n    padding: 12px 24px;\n\n    max-width: 100%;\n    width: 100%;\n\n\n    font-weight: 600;\n    font-family: \"Roboto\";\n    font-size: .75rem;\n    text-rendering: optimizeLegibility;\n\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 16px;\n}\n\n.Vertical-module_color__1eEjz {\n    color: var(--mfc-color-tertiary)\n}\n.Vertical-module_color__1eEjz:disabled {\n    color: var(--mfc-color-quinary) !important;\n}\n\n.Vertical-module_color__1eEjz:hover, .Vertical-module_color__1eEjz:active, .Vertical-module_highlight__2lbgS {\n    color: var(--color)\n}\n\n.Vertical-module_rowLabel__F8jVb {\n    display: flex;\n    align-content: center;\n    align-items: center;\n    justify-content: space-between;\n    font-weight: 600;\n    font-family: \"Roboto\";\n    color: var(--mfc-color-secondary);\n    font-size: .8rem;\n    padding: 4px 0 4px 16px;\n    margin-top: 8px;\n}\n\n.Vertical-module_overflow__1UgBi {\n    max-width: 100%;\n\n    text-align: left;\n\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}";
var styles$g = {"content":"Vertical-module_content__3mXHl","wrapper":"Vertical-module_wrapper__3BFk5","header":"Vertical-module_header__1E32z","button":"Vertical-module_button__3sXjY","color":"Vertical-module_color__1eEjz","highlight":"Vertical-module_highlight__2lbgS","rowLabel":"Vertical-module_rowLabel__F8jVb","overflow":"Vertical-module_overflow__1UgBi"};
styleInject(css_248z$h);

function Row$1(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hidden = _useState2[0],
      setHidden = _useState2[1];

  return /*#__PURE__*/React$1.createElement("div", {
    style: {
      width: '100%',
      maxWidth: '100%',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/React$1.createElement(Button, {
    className: styles$g.button,
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
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$g.overflow
  }, props.groupName), /*#__PURE__*/React$1.createElement(ToolTip, {
    content: props.groupName,
    align: 'middle',
    justify: "end"
  }), /*#__PURE__*/React$1.createElement("span", {
    className: "material-icons-round",
    style: {
      transform: hidden ? 'rotate(180deg)' : "unset",
      transition: '150ms linear'
    }
  }, "arrow_drop_down")), hidden ? null : props.buttons.map(function (b, bI) {
    return b.group === props.groupName ? /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: props.index + '-button-header-tab-' + bI
    }, /*#__PURE__*/React$1.createElement(Button, {
      variant: 'minimal-horizontal',
      className: [styles$g.button, styles$g.color].join(' '),
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
    }, /*#__PURE__*/React$1.createElement("div", {
      className: styles$g.overflow
    }, b.label))) : null;
  }));
}
Row$1.propTypes = {
  groupName: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
  setOpen: PropTypes.func,
  open: PropTypes.number
};

function VerticalTabs(props) {
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var children = React$1.Children.toArray(props.children);

  var groups = _toConsumableArray(new Set(children.map(function (item) {
    return item.props.group;
  })));

  return /*#__PURE__*/React$1.createElement("div", {
    className: props.className,
    style: _objectSpread2(_objectSpread2({}, props.styles), {
      position: 'relative'
    })
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$g.header
  }, groups.map(function (e, i) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: i + '-class'
    }, /*#__PURE__*/React$1.createElement(Row$1, {
      setOpen: setOpen,
      open: open,
      data: e,
      index: i,
      buttons: children.map(function (item) {
        return {
          label: item.props.label,
          group: item.props.group,
          disabled: item.props.disabled
        };
      }),
      groupName: e
    }));
  })), /*#__PURE__*/React$1.createElement(Switcher, {
    className: children[open].props.className,
    styles: children[open].props.styles,
    openChild: open
  }, children.map(function (el, index) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: index + '-tab-vertical'
    }, el);
  })));
}
VerticalTabs.proptypes = {
  open: PropTypes.number,
  setOpen: PropTypes.func,
  className: PropTypes.string,
  styles: PropTypes.object,
  children: PropTypes.node.isRequired
};

var css_248z$g = "\r\n.Action-module_buttonWrapper__1K3tR {\r\n    width: clamp(57px, calc(3vw - 8px), 92px);\r\n    height: clamp(57px, calc(3vw - 8px), 92px);\r\n    /*max-width: clamp(49px, calc(3vw - 16px), 84px);*/\r\n\r\n    overflow: hidden;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 6px;\r\n\r\n\r\n    padding:2px;\r\n    background: transparent;\r\n    outline: none;\r\n    border: none;\r\n\r\n    color: var(--mfc-color-tertiary);\r\n\r\n    cursor: pointer;\r\n    position: relative;\r\n\r\n    border-radius: 5px;\r\n\r\n}\r\n\r\n.Action-module_buttonWrapper__1K3tR[data-highlight = 'true'] {\r\n    color: var(--mfc-color-primary);\r\n    gap: 6px;\r\n}\r\n.Action-module_buttonWrapper__1K3tR[data-highlight = 'false'] {\r\n    gap: 0;\r\n    height: clamp(50px, calc(3vw - 15px),85px);\r\n}\r\n.Action-module_buttonWrapper__1K3tR:disabled{\r\n    cursor: unset;\r\n    color: var(--mfc-color-quinary) !important;\r\n}\r\n\r\n.Action-module_buttonWrapper__1K3tR:active{\r\n    color: #0095ff;\r\n}\r\n\r\n.Action-module_iconWrapper__BGNhO {\r\n    overflow: hidden;\r\n    margin: auto;\r\n    width: 16px;\r\n    height: 55%;\r\n    border-radius: 25%/50%;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    padding: 8px 16px;\r\n\r\n    position: relative;\r\n\r\n    transition: 150ms linear;\r\n}\r\n\r\n\r\n.Action-module_icon__WV_7w {\r\n    transition: 150ms linear;\r\n\r\n\r\n    position: relative;\r\n    z-index: 2;\r\n    padding: 0;\r\n    margin: 0;\r\n    width: fit-content;\r\n    height: 100%;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n\r\n\r\n}\r\n\r\n.Action-module_icon__WV_7w > * {\r\n\r\n    font-size: 1.3rem !important;\r\n}\r\n\r\n.Action-module_buttonWrapper__1K3tR[data-highlight = 'true'] .Action-module_iconWrapper__BGNhO {\r\n    background: #49B3FF;\r\n    color: white;\r\n    width: 100%;\r\n}\r\n\r\n.Action-module_label__11qm2 {\r\n    padding: 0 1px;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    font-weight: 550;\r\n    font-family: 'Roboto';\r\n    text-align: center;\r\n    font-size: .7rem;\r\n}";
var styles$f = {"buttonWrapper":"Action-module_buttonWrapper__1K3tR","iconWrapper":"Action-module_iconWrapper__BGNhO","icon":"Action-module_icon__WV_7w","label":"Action-module_label__11qm2"};
styleInject(css_248z$g);

function RailActionButton(props) {
  return /*#__PURE__*/React$1.createElement("span", null, /*#__PURE__*/React$1.createElement("button", {
    onClick: props.onClick,
    disabled: props.disabled,
    className: styles$f.buttonWrapper,
    "data-extended": JSON.stringify(props.extended),
    "data-highlight": JSON.stringify(props.highlight)
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$f.iconWrapper
  }, /*#__PURE__*/React$1.createElement("span", {
    className: styles$f.icon
  }, props.icon)), /*#__PURE__*/React$1.createElement("div", {
    className: styles$f.label
  }, props.label), /*#__PURE__*/React$1.createElement(Ripple, {
    disabled: props.disabled,
    opacity: .15
  })), /*#__PURE__*/React$1.createElement(ToolTip, {
    content: props.label + (props.disabled ? ' (Disabled)' : ''),
    align: 'middle',
    justify: "end"
  }));
}
RailActionButton.propTypes = {
  extended: PropTypes.bool,
  highlight: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.any,
  icon: PropTypes.any,
  onClick: PropTypes.func
};

function RailActionWrapper(props) {
  return props.children ? props.children : /*#__PURE__*/React$1.createElement(React$1.Fragment, null);
}
RailActionWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.string,
  place: PropTypes.oneOf(['start', 'end'])
};

var RailContext = /*#__PURE__*/React$1.createContext(false);

var css_248z$f = ".Rail-module_bottomOptions__3EzQp {\r\n    position: absolute;\r\n    bottom: 4px;\r\n    width: calc(100% - 8px);\r\n    transform: translateX(4px);\r\n\r\n    display: grid;\r\n    align-content: flex-start;\r\n    gap: 8px;\r\n}\r\n\r\n.Rail-module_buttons__28CnC {\r\n    width: 100%;\r\n    padding: 4px;\r\n    position: relative;\r\n    height: 100%;\r\n    display: grid;\r\n    align-content: flex-start;\r\n\r\n    gap: 8px;\r\n}\r\n\r\n.Rail-module_button__23Yrt {\r\n    width: 100%;\r\n\r\n    padding: 4px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.Rail-module_wrapperVertical__3vB2K {\r\n    padding: 4px;\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    overflow: hidden;\r\n    width: clamp(65px, 3vw, 100px);\r\n    transition: 250ms ease-in-out;\r\n    background: var(--mfc-background-primary);\r\n    position: sticky;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n\r\n}\r\n\r\n\r\n\r\n.Rail-module_buttonContainer__3KBqq {\r\n    align-items: center;\r\n\r\n    cursor: pointer;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    height: 50px;\r\n    overflow: hidden;\r\n\r\n    transition: 250ms ease-in-out;\r\n    border-radius: 5px;\r\n    padding: 8px 4px;\r\n\r\n    position: relative;\r\n\r\n\r\n}\r\n\r\n\r\n.Rail-module_buttonLabel__23YTk {\r\n\r\n    outline: none;\r\n    background: none;\r\n    border: none;\r\n    padding: 0;\r\n\r\n    font-size: .7rem;\r\n    overflow: hidden;\r\n    color: var(--mfc-color-quaternary);\r\n\r\n    font-family: \"Roboto\";\r\n    /*font-weight: 575;*/\r\n}\r\n\r\n.Rail-module_activeButton__2EOfu {\r\n    animation: Rail-module_slideDown__2hjgb 150ms linear forwards;\r\n\r\n    position: absolute;\r\n    left: 4px;\r\n    height: 42px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n@keyframes Rail-module_slideDown__2hjgb {\r\n    0% {\r\n        top: 0;\r\n        /*transform: translateY(-50%);*/\r\n    }\r\n    100% {\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n    }\r\n}\r\n\r\n.Rail-module_buttonLabel__23YTk:disabled {\r\n    color: var(--mfc-color-quinary);\r\n}\r\n\r\n.Rail-module_overflowEllipsis__1jjld {\r\n    max-width: 100%;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.Rail-module_alignEnd__tizDz {\r\n    display: grid;\r\n    gap: 8px;\r\n    width: 100%;\r\n    height: 100%;\r\n    align-content: flex-end;\r\n    align-items: flex-end;\r\n}\r\n\r\n.Rail-module_alignStart__2GL1m {\r\n    display: grid;\r\n    align-content: flex-start;\r\n    align-items: flex-start;\r\n\r\n    gap: 8px;\r\n    width: 100%;\r\n    height: 100%;\r\n}";
var styles$e = {"bottomOptions":"Rail-module_bottomOptions__3EzQp","buttons":"Rail-module_buttons__28CnC","button":"Rail-module_button__23Yrt","wrapperVertical":"Rail-module_wrapperVertical__3vB2K","buttonContainer":"Rail-module_buttonContainer__3KBqq","buttonLabel":"Rail-module_buttonLabel__23YTk","activeButton":"Rail-module_activeButton__2EOfu","slideDown":"Rail-module_slideDown__2hjgb","overflowEllipsis":"Rail-module_overflowEllipsis__1jjld","alignEnd":"Rail-module_alignEnd__tizDz","alignStart":"Rail-module_alignStart__2GL1m"};
styleInject(css_248z$f);

function NavigationRail(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      extended = _useState2[0];
      _useState2[1];

  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$e.wrapperVertical
  }, /*#__PURE__*/React$1.createElement(RailContext.Provider, {
    value: extended
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$e.alignStart,
    "data-variant": props.orientation ? props.orientation : 'vertical'
  }, React$1.Children.toArray(props.children).filter(function (e) {
    return e.props.place !== 'end';
  }).map(function (e, i) {
    if (e.type === RailActionButton) return e;else return /*#__PURE__*/React$1.createElement("div", {
      key: i + '-rail-node-start',
      className: e.props.className,
      style: e.props.styles
    }, e);
  })), /*#__PURE__*/React$1.createElement("div", {
    className: styles$e.alignEnd,
    "data-variant": props.orientation ? props.orientation : 'vertical'
  }, React$1.Children.toArray(props.children).filter(function (e) {
    return e.props.place === 'end';
  }).map(function (e, i) {
    if (e.type === RailActionButton) return e;else return /*#__PURE__*/React$1.createElement("div", {
      key: i + '-rail-node-end',
      className: e.props.className,
      style: e.props.styles
    }, e);
  }))));
}
NavigationRail.propTypes = {
  children: PropTypes.node
};

var css_248z$e = "@import '../../../misc/theme/styles.module.css';\n\n.Dropdown-module_wrapper__148qJ {\n    position: relative;\n\n}\n\n.Dropdown-module_buttons__1C8Y3 {\n    width: 200px;\n    border-radius: 5px;\n    background: var(--mfc-background-primary);\n    height: auto;\n    box-shadow: var(--mfc-box-shadow-primary) 0 0 2px 1px;\n\n    overflow-y: auto;\n    max-height: clamp(250px, 10vh, 300px);\n\n    display: grid;\n    transition: 150ms ease;\n}\n\n\n.Dropdown-module_button__j9GrD {\n\n\n    overflow: hidden;\n    outline: none;\n    border: none;\n    padding: 12px 0 12px 8px;\n    text-align: left;\n    background: transparent;\n\n    transition: 150ms linear;\n    cursor: pointer;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.Dropdown-module_buttonLabel__3grzf {\n    display: flex;\n    padding: 0 10px;\n    justify-content: flex-end;\n    width: 100%;\n}\n";
var styles$d = {"wrapper":"Dropdown-module_wrapper__148qJ","buttons":"Dropdown-module_buttons__1C8Y3","button":"Dropdown-module_button__j9GrD","buttonLabel":"Dropdown-module_buttonLabel__3grzf"};
styleInject(css_248z$e);

function Dropdown(props) {
  var _props$options;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = useState(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      width = _useState4[0],
      setWidth = _useState4[1];

  var _useState5 = useState(undefined),
      _useState6 = _slicedToArray(_useState5, 2),
      height = _useState6[0],
      setHeight = _useState6[1];

  var ref = useRef();
  var resizeObs = useRef();

  var callback = function callback() {
    var _ref$current, _ref$current2;

    setWidth((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.offsetWidth);
    setHeight((_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.offsetHeight);
  };

  useEffect(function () {
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
  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$d.wrapper
  }, /*#__PURE__*/React$1.createElement(Button, {
    highlight: open,
    reference: ref,
    variant: props.variant,
    onClick: function onClick() {
      return setOpen(true);
    },
    disabled: props.disabled,
    className: props.className
  }, props.children), /*#__PURE__*/React$1.createElement(Modal, {
    variant: "fit",
    styles: {
      transform: "translate(".concat(props.justify === 'end' ? '-50%' : "calc(50% - ".concat(width / 2, "px)"), ", ").concat(props.align === 'top' ? "calc(-50% - ".concat(height / 2, "px)") : "calc(50% + ".concat(height / 2, "px)"), ")")
    },
    blurIntensity: 0,
    className: styles$d.buttons,
    animationStyle: 'fade',
    open: open,
    handleClose: function handleClose() {
      return setOpen(false);
    }
  }, (_props$options = props.options) === null || _props$options === void 0 ? void 0 : _props$options.map(function (b, i) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: 'select-' + i
    }, /*#__PURE__*/React$1.createElement(Button, {
      disabled: b.disabled,
      onClick: function onClick() {
        b.onClick(b.onClickEvent);
        setOpen(false);
      },
      className: styles$d.button
    }, b.icon, /*#__PURE__*/React$1.createElement("div", {
      className: styles$d.buttonLabel
    }, b.label)));
  })));
}
Dropdown.propTypes = {
  variant: PropTypes.oneOf(['minimal', 'filled', 'outlined', 'minimal-horizontal']),
  className: PropTypes.string,
  styles: PropTypes.object,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.any,
    icon: PropTypes.object,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    onClickEvent: PropTypes.any
  })),
  align: PropTypes.oneOf(['top', 'bottom']),
  justify: PropTypes.oneOf(['start', 'end'])
};

var css_248z$d = "@import \"../../../misc/theme/styles.module.css\";\r\n\r\n.Breadcrumbs-module_wrapper__3KOun {\r\n    display: flex;\r\n    align-items: center;\r\n    align-content: center;\r\n    justify-content: center;\r\n    gap: 8px;\r\n    border-radius: 5px;\r\n    background: var(--mfc-background-primary);\r\n    width: 100%;\r\n    padding: 8px;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n.Breadcrumbs-module_crumbWrapper__3KMnN {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n}";
var styles$c = {"wrapper":"Breadcrumbs-module_wrapper__3KOun","crumbWrapper":"Breadcrumbs-module_crumbWrapper__3KMnN"};
styleInject(css_248z$d);

function Breadcrumbs(props) {
  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$c.wrapper,
    style: {
      justifyContent: props.justify === 'start' ? 'flex-start' : props.justify === 'end' ? 'flex-end' : undefined
    }
  }, React$1.Children.toArray(props.children).map(function (crumb, i) {
    return /*#__PURE__*/React$1.createElement("div", {
      className: styles$c.crumbWrapper,
      key: 'breadcrumb-' + i
    }, crumb, /*#__PURE__*/React$1.createElement("span", {
      style: {
        fontSize: '1rem',
        display: i === React$1.Children.toArray(props.children).length - 1 ? 'none' : undefined
      },
      className: "material-icons-round"
    }, "arrow_forward_ios"));
  }));
}
Breadcrumbs.propTypes = {
  children: PropTypes.node,
  divider: PropTypes.string,
  justify: PropTypes.oneOf(['start', 'middle', 'end'])
};

var css_248z$c = ".Carousel-module_wrapper__3jfG8{\r\n    padding: 16px;\r\n    height: 50vh;\r\n    overflow: hidden;\r\n    position: relative;\r\n\r\n    display: grid;\r\n    align-content: space-between;\r\n    user-select: none;\r\n}";
var styles$b = {"wrapper":"Carousel-module_wrapper__3jfG8"};
styleInject(css_248z$c);

var css_248z$b = ".Card-module_cardWrapper__2VU2m {\r\n    /*border: var(--mfc-border-primary) 1px solid;*/\r\n    background: var(--mfc-background-primary);\r\n    border-radius: 8px;\r\n    height: 115px;\r\n\r\n\r\n    position: relative;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n\r\n    transition: 150ms linear;\r\n}\r\n.Card-module_cardWrapper__2VU2m:active{\r\n    transform: scale(.98);\r\n}\r\n.Card-module_cardImage__2t-3X {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    border-radius: 8px;\r\n    z-index: 0;\r\n    transition: 150ms linear;\r\n}\r\n\r\n.Card-module_cardTitle__S4Fs3 {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 0;\r\n    transform: translate(4px, -50%);\r\n    transition: 250ms linear;\r\n}\r\n\r\n.Card-module_cardHeaderBackground__2lcN2{\r\n    z-index: 0;\r\n    opacity: .8;\r\n    background: var(--mfc-background-primary);\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.Card-module_cardHeader__25Kks {\r\n    overflow: hidden;\r\n\r\n    display: grid;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n\r\n    padding: 4px 0;\r\n    user-select: none;\r\n    height: 30%;\r\n    width: 50%;\r\n\r\n    color: var(--mfc-color-primary);\r\n    position: relative;\r\n    z-index: 5;\r\n\r\n    border-radius: 0 5px 5px 0;\r\n    transition: 150ms linear;\r\n\r\n    font-family: \"Roboto\";\r\n    font-weight: 600;\r\n    font-size: 1rem;\r\n}\r\n.Card-module_cardWrapper__2VU2m:hover, .Card-module_onRender__2Z0Qp{\r\n    border: #0095ff 2px solid;\r\n\r\n}\r\n.Card-module_cardWrapper__2VU2m:hover .Card-module_cardTitle__S4Fs3 {\r\n    position: relative;\r\n    top: 0;\r\n    transform: translateX(4px);\r\n}\r\n\r\n.Card-module_cardWrapper__2VU2m:hover .Card-module_cardHeader__25Kks {\r\n    height: 50%;\r\n    width: 75%;\r\n    align-items: flex-start;\r\n}\r\n\r\n.Card-module_cardWrapper__2VU2m:hover .Card-module_cardImage__2t-3X {\r\n    transform: scale(1.2);\r\n}\r\n\r\n\r\n.Card-module_onRender__2Z0Qp .Card-module_cardTitle__S4Fs3 {\r\n    position: relative;\r\n    top: 0;\r\n    transform: translateX(4px);\r\n}\r\n\r\n.Card-module_onRender__2Z0Qp .Card-module_cardHeader__25Kks {\r\n    height: 50%;\r\n    width: 75%;\r\n    align-items: flex-start;\r\n}\r\n\r\n.Card-module_onRender__2Z0Qp .Card-module_cardImage__2t-3X {\r\n    transform: scale(1.2);\r\n}\r\n\r\n\r\n.Card-module_cardDescription__9H_cz {\r\n    position: relative;\r\n    z-index: 5;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: 150ms linear;\r\n\r\n    font-weight: normal;\r\n    font-size: .8rem;\r\n    color: var(--mfc-color-quaternary);\r\n    padding-left: 4px;\r\n}\r\n\r\n.Card-module_cardWrapper__2VU2m:hover .Card-module_cardDescription__9H_cz {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n.Card-module_onRender__2Z0Qp .Card-module_cardDescription__9H_cz {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n.Card-module_overflow__VDvpD {\r\n    overflow: hidden;\r\n    max-width: 100%;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n";
var styles$a = {"cardWrapper":"Card-module_cardWrapper__2VU2m","cardImage":"Card-module_cardImage__2t-3X","cardTitle":"Card-module_cardTitle__S4Fs3","cardHeaderBackground":"Card-module_cardHeaderBackground__2lcN2","cardHeader":"Card-module_cardHeader__25Kks","onRender":"Card-module_onRender__2Z0Qp","cardDescription":"Card-module_cardDescription__9H_cz","overflow":"Card-module_overflow__VDvpD"};
styleInject(css_248z$b);

function Card(props) {
  var ref = useRef();

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  useEffect(function () {
    setWidth(ref.current.parentNode.offsetWidth * (12.5 / 100));
  }, []);
  return /*#__PURE__*/React$1.createElement("div", {
    className: [styles$a.cardWrapper, props.currentOnRender ? styles$a.onRender : ''].join(' '),
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
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$a.cardHeader
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$a.cardHeaderBackground
  }), /*#__PURE__*/React$1.createElement("div", {
    className: [styles$a.overflow, styles$a.cardTitle].join(' ')
  }, props.data.title), /*#__PURE__*/React$1.createElement("div", {
    className: [styles$a.cardDescription, styles$a.overflow].join(' ')
  }, props.data.details)), /*#__PURE__*/React$1.createElement("img", {
    src: props.data.image,
    alt: props.data.title,
    className: styles$a.cardImage
  }));
}
Card.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    details: PropTypes.string,
    onClick: PropTypes.func
  }),
  currentOnRender: PropTypes.bool,
  onClick: PropTypes.func
};

var css_248z$a = ".CardGroup-module_groupWrapper__11q7W {\r\n    display: flex;\r\n    gap: 16px;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    position: relative;\r\n\r\n    height: fit-content;\r\n\r\n    padding: 0 16px;\r\n\r\n}\r\n.CardGroup-module_button__3_U-r{\r\n    color: var(--mfc-color-tertiary);\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 65px;\r\n    transform: translateY(25%);\r\n\r\n    background: var(--mfc-background-primary);\r\n    border-radius: 5px;\r\n    width: 20px;\r\n    height: 45px;\r\n\r\n    z-index: 50;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    transition: 150ms linear;\r\n\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n.CardGroup-module_button__3_U-r:hover{\r\n\r\n    background: var(--mfc-background-quaternary);\r\n    color: #0095ff;\r\n}\r\n.CardGroup-module_button__3_U-r:active{\r\n    background: #0095ff;\r\n    color: white;\r\n    border-color: #0095ff;\r\n}\r\n\r\n";
var styles$9 = {"groupWrapper":"CardGroup-module_groupWrapper__11q7W","button":"CardGroup-module_button__3_U-r"};
styleInject(css_248z$a);

function CardGroup(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      buttonEnd = _useState2[0],
      setButtonEnd = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      buttonStart = _useState4[0],
      setButtonStart = _useState4[1];

  var ref = useRef();
  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("button", {
    className: styles$9.button,
    style: {
      right: '20px',
      visibility: buttonEnd ? 'visible' : 'hidden',
      opacity: buttonEnd ? '1' : '0'
    },
    onClick: function onClick(e) {
      ref.current.scrollLeft = ref.current.scrollLeft + ref.current.scrollWidth * 0.25;
      if (ref.current.scrollWidth - ref.current.offsetWidth < ref.current.scrollLeft) setButtonEnd(true);else setButtonEnd(false);
    }
  }, /*#__PURE__*/React$1.createElement("span", {
    style: {
      transform: 'rotate(-90deg)'
    },
    className: "material-icons-round"
  }, "arrow_drop_down")), /*#__PURE__*/React$1.createElement("button", {
    className: styles$9.button,
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
  }, /*#__PURE__*/React$1.createElement("span", {
    style: {
      transform: 'rotate(90deg)'
    },
    className: "material-icons-round"
  }, "arrow_drop_down")), /*#__PURE__*/React$1.createElement("div", {
    className: styles$9.groupWrapper,
    ref: ref,
    onMouseEnter: function onMouseEnter() {
      if (ref.current.scrollWidth - ref.current.offsetWidth > ref.current.scrollLeft) setButtonEnd(true);
      if (ref.current.scrollLeft > 0) setButtonStart(true);
    }
  }, props.children));
}
CardGroup.propTypes = {
  children: PropTypes.node
};

var css_248z$9 = ".Panel-module_image__1kM7v{\r\n    position: absolute;\r\n    border-radius: 5px 5px 0 0;\r\n    width: calc(100% - 32px);\r\n    height: calc(100% - 97px);\r\n    overflow: hidden;\r\n    mask-image: linear-gradient(to bottom, rgba(0,0,0,1) calc(100% - 65px), rgba(0,0,0,0) 100%);\r\n    transition: 150ms linear;\r\n\r\n}\r\n\r\n\r\n.Panel-module_wrapper__2Sl2K{\r\n    transition: 150ms linear;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n}\r\n.Panel-module_wrapper__2Sl2K:active{\r\n    opacity: .8;\r\n}\r\n\r\n\r\n.Panel-module_title__2hU7K{\r\n    height: 20%;\r\n    max-width: 35%;\r\n    overflow: hidden;\r\n    position: absolute;\r\n\r\n    /*transform: translateY(-50%);*/\r\n    top: calc(50% - 65px);\r\n\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n    padding: 8px 16px;\r\n\r\n    border-radius: 0 5px 5px 0;\r\n\r\n    background: var(--mfc-background-primary);\r\n    border: var(--mfc-border-primary) 1px solid;\r\n\r\n    display: grid;\r\n    gap: 8px;\r\n\r\n\r\n    transition: 150ms linear;\r\n}\r\n\r\n.Panel-module_description__2S5Fu{\r\n    font-size: .9rem;\r\n    color: var(--mfc-color-tertiary);\r\n}\r\n\r\n.Panel-module_overflow__bIsf5{\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    max-width: 100%;\r\n}\r\n";
var styles$8 = {"image":"Panel-module_image__1kM7v","wrapper":"Panel-module_wrapper__2Sl2K","title":"Panel-module_title__2hU7K","description":"Panel-module_description__2S5Fu","overflow":"Panel-module_overflow__bIsf5"};
styleInject(css_248z$9);

function Panel(props) {
  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$8.wrapper
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$8.image
  }, /*#__PURE__*/React$1.createElement("img", {
    src: props.data.image,
    alt: props.data.title,
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/React$1.createElement("div", {
    className: styles$8.title
  }, props.data.title, /*#__PURE__*/React$1.createElement("div", {
    className: [styles$8.description, styles$8.overflow].join(' ')
  }, props.data.details)));
}
Panel.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    details: PropTypes.string,
    onClick: PropTypes.func
  })
};

function Carousel(props) {
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentOnRender = _useState2[0],
      setCurrentOnRender = _useState2[1];

  useEffect(function () {
    var interval = setInterval(function () {
      if (currentOnRender < props.data.length - 1) setCurrentOnRender(currentOnRender + 1);else setCurrentOnRender(0);
    }, 10000);
    return function () {
      clearInterval(interval);
    };
  }, [currentOnRender]);
  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$b.wrapper
  }, /*#__PURE__*/React$1.createElement(Switcher, {
    openChild: currentOnRender
  }, props.data.map(function (panel, i) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: i + '-panel'
    }, /*#__PURE__*/React$1.createElement(Panel, {
      data: panel
    }));
  })), /*#__PURE__*/React$1.createElement(CardGroup, null, props.data.map(function (card, index) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: 'card-' + index
    }, /*#__PURE__*/React$1.createElement(Card, {
      data: card,
      currentOnRender: currentOnRender === index,
      onClick: function onClick() {
        return setCurrentOnRender(index);
      }
    }));
  })));
}
Carousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    details: PropTypes.string,
    onClick: PropTypes.func
  }))
};

function DynamicRoutes(props) {
  var contentIndex = useMemo(function () {
    if (props.ready && props.path !== undefined) return props.routes.findIndex(function (route) {
      return props.path === route.basePath;
    });else return props.routes.findIndex(function (route) {
      return route.asIndex;
    });
  }, [props.ready, props.path, props.routes]);
  var Content = useMemo(function () {
    if (contentIndex >= 0) return props.routes[contentIndex].content;else return null;
  }, [contentIndex]);
  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, Content !== null ? /*#__PURE__*/React$1.createElement(Content, props.componentProps) : null);
}
DynamicRoutes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    basePath: PropTypes.string,
    content: PropTypes.object,
    asIndex: PropTypes.bool
  })),
  ready: PropTypes.bool,
  path: PropTypes.string,
  componentProps: PropTypes.object
};

var css_248z$8 = "@import '../../../misc/theme/styles.module.css';\n\n.List-module_tableWrapper__191zi {\n    max-width: 100%;\n    height: fit-content;\n    overflow-x: hidden;\n    overflow-y: hidden;\n\n    display: grid;\n    align-content: flex-start;\n\n    gap: 4px;\n\n    padding-bottom: 64px;\n}\n\n.List-module_container__20irL {\n\n\n    display: grid;\n    gap: 8px;\n    max-height: 100%;\n    height: 100%;\n    overflow-y: auto;\n    overflow-x: hidden;\n    position: relative;\n\n    align-content: flex-start;\n}\n\n.List-module_divider__20Bn- {\n    height: 50%;\n    width: 1px;\n    background: var(--mfc-border-secondary);\n}";
var styles$7 = {"tableWrapper":"List-module_tableWrapper__191zi","container":"List-module_container__20irL","divider":"List-module_divider__20Bn-"};
styleInject(css_248z$8);

var css_248z$7 = ".Row-module_row__2HKgP {\r\n    display: flex;\r\n    align-items: center;\r\n    height: 60px;\r\n    width: 100%;\r\n    padding: 0;\r\n    background: var(--mfc-background-primary);\r\n    border-radius: 5px 0 0 5px;\r\n\r\n    border: var(--mfc-border-primary) 1px solid;\r\n}\r\n\r\n\r\n.Row-module_cell__1glv0 {\r\n    background: var(--mfc-background-primary);\r\n    padding: 0 8px;\r\n    color: inherit;\r\n    display: flex;\r\n    align-items: center;\r\n    align-content: center;\r\n    height: 100%;\r\n}\r\n\r\n\r\n.Row-module_overflow__3ktb- {\r\n    overflow: hidden;\r\n    max-width: 100%;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.Row-module_headerRow__zvgwa {\r\n    /*border: var(--mfc-border-primary) 1px solid;*/\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 50;\r\n\r\n    height: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    width: 100%;\r\n    transition: 150ms linear;\r\n\r\n}\r\n\r\n.Row-module_scrolledHeader__2XQ70 {\r\n    box-shadow: var(--mfc-box-shadow-primary) 0 0 1px 1px;\r\n}\r\n\r\n\r\n.Row-module_mainButton__26HDy {\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    border-left: none;\r\n    background: var(--mfc-background-primary);\r\n    border-radius: 0 5px 5px 0;\r\n    padding: 4px;\r\n    width: 30px;\r\n    height: 60px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.Row-module_divider__2xBdi {\r\n    height: 50%;\r\n    width: 1px;\r\n    background: var(--mfc-border-secondary);\r\n}";
var styles$6 = {"row":"Row-module_row__2HKgP","cell":"Row-module_cell__1glv0","overflow":"Row-module_overflow__3ktb-","headerRow":"Row-module_headerRow__zvgwa","scrolledHeader":"Row-module_scrolledHeader__2XQ70","mainButton":"Row-module_mainButton__26HDy","divider":"Row-module_divider__2xBdi"};
styleInject(css_248z$7);

function HeaderCell(props) {
  var ref = useRef();

  var _useState = useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      currentSort = _useState2[0],
      setCurrentSort = _useState2[1];

  return /*#__PURE__*/React$1.createElement(Button, {
    className: styles$6.cell,
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
  }, /*#__PURE__*/React$1.createElement("span", {
    className: "material-icons-round",
    style: {
      display: props.value.type !== 'object' ? 'none' : undefined,
      fontSize: '1.1rem'
    }
  }, "link"), /*#__PURE__*/React$1.createElement("div", {
    className: styles$6.overflow
  }, props.value.label, /*#__PURE__*/React$1.createElement(ToolTip, {
    content: props.value.label.toUpperCase()
  })), /*#__PURE__*/React$1.createElement("span", {
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
  hasOptions: PropTypes.bool,
  length: PropTypes.number,
  additionalWidth: PropTypes.string,
  value: keyTemplate,
  sorts: PropTypes.array,
  setSorts: PropTypes.func
};

function Header(props) {
  var ref = useRef();
  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$6.headerRow,
    ref: ref
  }, props.keys.map(function (e, i) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: i + 'header-row-cell'
    }, /*#__PURE__*/React$1.createElement(HeaderCell, {
      hasOptions: props.hasOptions,
      setSorts: props.setSorts,
      additionalWidth: e.additionalWidth ? e.additionalWidth : '0px',
      value: e,
      sorts: props.sorts,
      length: props.keys.length
    }), /*#__PURE__*/React$1.createElement("div", {
      style: {
        display: i === props.keys.length - 1 && !props.hasOptions ? 'none' : undefined
      },
      className: styles$6.divider
    }));
  }), /*#__PURE__*/React$1.createElement("div", {
    className: styles$6.cell,
    disabled: true,
    style: {
      display: props.hasOptions ? 'flex' : 'none',
      justifyContent: 'center',
      width: '30px'
    }
  }, /*#__PURE__*/React$1.createElement("span", {
    className: "material-icons-round",
    style: {
      fontSize: '1.1rem',
      color: 'var(--mfc-color-quinary)'
    }
  }, "settings")));
}
Header.propTypes = {
  keys: PropTypes.arrayOf(keyTemplate),
  hasOptions: PropTypes.bool,
  setSorts: PropTypes.func,
  sorts: PropTypes.arrayOf(PropTypes.object)
};

function ListHeader(props) {
  var _props$options;

  var _useHeader = useHeader(props.dispatch, props.actions),
      getType = _useHeader.getType,
      parseDate = _useHeader.parseDate,
      open = _useHeader.open,
      setOpen = _useHeader.setOpen;

  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$o.wrapper,
    style: {
      boxShadow: props.scrolled ? undefined : 'none'
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$o.header,
    style: {
      marginBottom: props.hook.filters.length === 0 ? '8px' : undefined
    }
  }, props.title, /*#__PURE__*/React$1.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, (_props$options = props.options) === null || _props$options === void 0 ? void 0 : _props$options.map(function (op, ind) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: ind + '-list-op'
    }, /*#__PURE__*/React$1.createElement(Button, {
      variant: 'outlined',
      className: styles$o.button,
      styles: {
        gap: '16px'
      },
      onClick: function onClick() {
        return op.onClick();
      }
    }, op.label));
  }), /*#__PURE__*/React$1.createElement(Button, {
    variant: 'outlined',
    className: styles$o.button,
    styles: {
      gap: '16px'
    },
    onClick: function onClick() {
      return props.hook.clean();
    }
  }, "Recarregar", /*#__PURE__*/React$1.createElement("span", {
    className: "material-icons-round",
    style: {
      fontSize: '1.3rem'
    }
  }, "refresh")), /*#__PURE__*/React$1.createElement(Button, {
    variant: 'outlined',
    styles: {
      gap: '16px'
    },
    className: styles$o.button,
    onClick: function onClick() {
      return props.setOpenSettings(true);
    }
  }, "Configura\xE7\xF5es", /*#__PURE__*/React$1.createElement("span", {
    className: "material-icons-round",
    style: {
      fontSize: '1.3rem'
    }
  }, "settings")), /*#__PURE__*/React$1.createElement(Button, {
    styles: {
      display: !props.noFilters ? undefined : 'none',
      gap: '16px'
    },
    onClick: function onClick() {
      return setOpen(true);
    },
    variant: "outlined",
    className: styles$o.button
  }, "Filtros", /*#__PURE__*/React$1.createElement("span", {
    className: "material-icons-round",
    style: {
      fontSize: '1.3rem'
    }
  }, "filter_list")), /*#__PURE__*/React$1.createElement(Button, {
    styles: {
      display: props.createOption ? undefined : 'none',
      color: 'white'
    },
    onClick: function onClick() {
      return props.onCreate();
    },
    variant: "filled",
    className: styles$o.button
  }, /*#__PURE__*/React$1.createElement("span", {
    className: "material-icons-round",
    style: {
      fontSize: '1.3rem'
    }
  }, "add")))), props.noFilters ? null : /*#__PURE__*/React$1.createElement("div", {
    style: {
      padding: '8px'
    }
  }, /*#__PURE__*/React$1.createElement(Filter, {
    keys: props.keys,
    filters: props.hook.filters,
    setFilters: props.hook.setFilters,
    getType: getType,
    open: open,
    setOpen: setOpen,
    parseDate: parseDate
  })), /*#__PURE__*/React$1.createElement(Header, {
    keys: props.keys.filter(function (e) {
      return e.visible === true;
    }),
    sorts: props.hook.sorts,
    setSorts: props.hook.setSorts,
    hasOptions: props.hasOptions
  }));
}
ListHeader.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func
  })),
  scrolled: PropTypes.bool,
  hook: PropTypes.object,
  noFilters: PropTypes.bool,
  dispatch: PropTypes.func,
  actions: PropTypes.object,
  title: PropTypes.any,
  keys: PropTypes.arrayOf(keyTemplate).isRequired,
  setOpenSettings: PropTypes.func,
  createOption: PropTypes.bool,
  onCreate: PropTypes.func,
  hasOptions: PropTypes.bool
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
  var _useReducer = useReducer(reducer, initialKeys, function (val) {
    return val;
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      keys = _useReducer2[0],
      keysDispatcher = _useReducer2[1];

  var _useState = useState(false),
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

var css_248z$6 = "@import '../../../misc/theme/styles.module.css';\n\n.Settings-module_modal__37ZQb {\n    overflow: hidden;\n    background-color: var(--mfc-background-primary);\n\n    border-radius: 5px 0 5px 0;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 25%;\n    height: 100%;\n    padding: 16px;\n    box-shadow: var(--mfc-box-shadow-primary) -1px 0 3px 1px;\n}\n\n.Settings-module_contentWrapper__2PqW1 {\n    display: grid;\n    gap: 8px;\n\n    margin-top: 16px;\n\n    align-content: flex-start;\n    height: 100%;\n\n    width: 100%;\n}\n\n.Settings-module_content__2xUqh {\n    display: grid;\n    gap: 8px;\n    height: 100%;\n    background: var(--mfc-background-secondary);\n    border-radius: 5px;\n    padding: 8px;\n    overflow-y: auto;\n\n    border: var(--mfc-border-primary) 1px solid;\n}\n\n.Settings-module_fieldRow__35E7r {\n\n    height: 60px;\n    position: relative;\n    z-index: 999;\n    background: var(--mfc-background-primary);\n    border-radius: 5px;\n    border: var(--mfc-border-primary) 1px solid;\n    padding: 8px;\n\n    display: flex;\n    gap: 16px;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    /*height: auto;*/\n\n    user-select: none;\n}\n\n.Settings-module_fieldRow__35E7r:hover {\n    border-color: #0095ff;\n}\n\n.Settings-module_fieldLabel__VuNf- {\n\n\n    text-transform: capitalize;\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-weight: 600;\n    color: var(--mfc-color-tertiary);\n    font-size: .9rem;\n\n}\n\n.Settings-module_visibilityButton__2k5Pv {\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n}\n\n\n.Settings-module_header__ToHmR {\n    font-weight: 600;\n    color: var(--mfc-color-secondary);\n}\n\n.Settings-module_range__pOYnk{\n    /*max-width: */\n}";
var styles$5 = {"modal":"Settings-module_modal__37ZQb","contentWrapper":"Settings-module_contentWrapper__2PqW1","content":"Settings-module_content__2xUqh","fieldRow":"Settings-module_fieldRow__35E7r","fieldLabel":"Settings-module_fieldLabel__VuNf-","visibilityButton":"Settings-module_visibilityButton__2k5Pv","header":"Settings-module_header__ToHmR","range":"Settings-module_range__pOYnk"};
styleInject(css_248z$6);

function Settings(props) {
  var getField = function getField(field, index) {
    return /*#__PURE__*/React$1.createElement("div", {
      className: shared$2.wrapper
    }, /*#__PURE__*/React$1.createElement("div", {
      className: styles$5.fieldRow
    }, /*#__PURE__*/React$1.createElement("div", {
      className: styles$5.fieldLabel
    }, field.label), /*#__PURE__*/React$1.createElement("input", {
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
      className: styles$5.range,
      value: field.additionalWidth ? parseInt(field.additionalWidth.replace('%', '')) : '0'
    }), /*#__PURE__*/React$1.createElement(Button, {
      className: styles$5.visibilityButton,
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
    }, field.visible ? /*#__PURE__*/React$1.createElement("span", {
      className: "material-icons-round"
    }, "visibility") : /*#__PURE__*/React$1.createElement("span", {
      className: "material-icons-round"
    }, "visibility_off"), /*#__PURE__*/React$1.createElement(ToolTip, null, field.visible ? 'Esconder' : 'Mostrar'))));
  };

  var fields = useMemo(function () {
    return {
      hidden: props.keys.filter(function (f) {
        return !f.visible;
      }),
      visible: props.keys.filter(function (f) {
        return f.visible;
      })
    };
  }, [props.keys]);
  return /*#__PURE__*/React$1.createElement(Modal, {
    open: props.open,
    handleClose: function handleClose() {
      return props.setOpen(false);
    },
    animationStyle: "slide-right",
    blurIntensity: 0,
    className: styles$5.modal
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$5.header
  }, "Configura\xE7\xF5es"), /*#__PURE__*/React$1.createElement(Tabs, {
    className: styles$5.contentWrapper
  }, /*#__PURE__*/React$1.createElement(Tab, {
    label: 'Todos',
    className: styles$5.content
  }, props.keys.map(function (e, i) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: i + '-row-' + JSON.stringify(e.label)
    }, getField(e));
  })), /*#__PURE__*/React$1.createElement(Tab, {
    label: 'Visíveis',
    className: styles$5.content
  }, fields.visible.length > 0 ? fields.visible.map(function (e, i) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: i + '-row-' + JSON.stringify(e.label)
    }, getField(e));
  }) : /*#__PURE__*/React$1.createElement(Empty, {
    customLabel: 'Todos os campos estão escondidos'
  })), /*#__PURE__*/React$1.createElement(Tab, {
    label: 'Escondidos',
    className: styles$5.content
  }, fields.hidden.length > 0 ? fields.hidden.map(function (e, i) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: i + '-row-' + JSON.stringify(e.label)
    }, getField(e));
  }) : /*#__PURE__*/React$1.createElement(Empty, {
    customLabel: 'Todos os campos estão visíveis'
  }))));
}
Settings.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  keys: PropTypes.arrayOf(keyTemplate),
  dispatchKeys: PropTypes.func,
  actions: PropTypes.object
};

function Row(props) {
  return /*#__PURE__*/React$1.createElement("div", {
    style: {
      display: 'flex',
      maxWidth: '100%',
      overflow: 'hidden'
    },
    ref: props.reference
  }, /*#__PURE__*/React$1.createElement(Button, {
    className: styles$6.row,
    variant: 'minimal-horizontal',
    onClick: function onClick() {
      return props.onClick();
    }
  }, props.keys.map(function (e, i) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: i + '-row-cell-' + props.index
    }, /*#__PURE__*/React$1.createElement("div", {
      style: {
        display: i === 0 ? 'none' : undefined,
        height: '40%'
      },
      className: styles$6.divider
    }), /*#__PURE__*/React$1.createElement("div", {
      className: styles$6.cell,
      style: {
        maxWidth: "calc(".concat(1 / props.keys.length * 100, "% + ").concat(e.additionalWidth ? e.additionalWidth : '0px', ")"),
        width: "calc(".concat(1 / props.keys.length * 100, "% + ").concat(e.additionalWidth ? e.additionalWidth : '0px', ")"),
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React$1.createElement("div", {
      className: styles$6.overflow
    }, /*#__PURE__*/React$1.createElement(RowCell, {
      data: props.entry,
      field: e
    }))));
  })), props.controlButtons ? /*#__PURE__*/React$1.createElement("div", {
    className: styles$6.cell,
    style: {
      width: '30px',
      alignItems: 'unset',
      height: '60px',
      padding: 0
    }
  }, /*#__PURE__*/React$1.createElement(Dropdown, {
    className: styles$6.mainButton,
    variant: 'minimal-horizontal',
    options: props.controlButtons.map(function (e) {
      return _objectSpread2(_objectSpread2({}, e), {}, {
        onClickEvent: props.entry
      });
    })
  }, /*#__PURE__*/React$1.createElement("span", {
    className: "material-icons-round"
  }, "arrow_drop_down"))) : null);
}
Row.propTypes = {
  keys: PropTypes.arrayOf(keyTemplate),
  entry: PropTypes.object,
  onClick: PropTypes.func,
  hasOptions: PropTypes.bool,
  index: PropTypes.number,
  reference: PropTypes.func,
  controlButtons: PropTypes.array
};

function List(props) {
  var _useList = useList(props.keys),
      keys = _useList.keys,
      keysDispatcher = _useList.keysDispatcher,
      actions = _useList.actions,
      setOpenSettings = _useList.setOpenSettings,
      openSettings = _useList.openSettings;

  var lastElementRef = useInfiniteScroll(props.hook.setCurrentPage, props.hook.currentPage, props.hook.loading, props.hook.hasMore);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      scrolled = _useState2[0],
      setScrolled = _useState2[1];

  return /*#__PURE__*/React$1.createElement("div", {
    onScroll: function onScroll(event) {
      if (event.target.scrollTop > 0) setScrolled(true);else setScrolled(false);
    },
    className: styles$7.container
  }, /*#__PURE__*/React$1.createElement(Settings, {
    open: openSettings,
    keys: keys,
    actions: actions,
    setOpen: setOpenSettings,
    dispatchKeys: keysDispatcher
  }), /*#__PURE__*/React$1.createElement(ListHeader, {
    options: props.options,
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
  }), /*#__PURE__*/React$1.createElement("div", {
    className: styles$7.tableWrapper
  }, props.hook.data.length === 0 ? /*#__PURE__*/React$1.createElement(Empty, null) : null, props.hook.data.map(function (e, index) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: e.id + '-list-row'
    }, /*#__PURE__*/React$1.createElement(Row, {
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
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func
  })),
  noFilters: PropTypes.bool,
  hook: PropTypes.object.isRequired,
  onRowClick: PropTypes.func.isRequired,
  keys: PropTypes.arrayOf(keyTemplate).isRequired,
  controlButtons: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.element,
    label: PropTypes.any,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
  })),
  title: PropTypes.any,
  createOption: PropTypes.bool,
  onCreate: PropTypes.func,
  onlyVisualization: PropTypes.bool
};

function useChart(props) {
  var theme = useContext(ThemeContext);
  var ref = useRef();

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      points = _useState2[0],
      setPoints = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      context = _useState4[0],
      setContext = _useState4[1];

  var biggest = useMemo(function () {
    var values = props.data.map(function (e) {
      return e[props.valueKey];
    });
    return Math.max.apply(Math, _toConsumableArray(values));
  }, [props.data]);
  var total = useMemo(function () {
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

  useEffect(function () {
    var _ref$current;

    var ctx = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.getContext('2d');
    setContext(ctx);
    ctx.fillStyle = theme.themes.mfc_color_primary;
    ctx.font = "600 14px Roboto";
  }, []);
  useEffect(function () {
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
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  valueKey: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired
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
  value: PropTypes.shape({
    label: PropTypes.string,
    field: PropTypes.string
  }),
  axis: PropTypes.shape({
    label: PropTypes.string,
    field: PropTypes.string
  }),
  data: PropTypes.arrayOf(PropTypes.object),
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
  legends: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    field: PropTypes.string
  })),
  color: PropTypes.string
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

  return /*#__PURE__*/React$1.createElement("div", {
    className: shared.wrapper
  }, /*#__PURE__*/React$1.createElement("h1", {
    className: shared.title
  }, props.title), /*#__PURE__*/React$1.createElement("canvas", {
    ref: ref,
    width: props.width,
    height: props.height
  }));
}
LineChart.propTypes = {
  value: PropTypes.shape({
    label: PropTypes.string,
    field: PropTypes.string
  }),
  axis: PropTypes.shape({
    label: PropTypes.string,
    field: PropTypes.string
  }),
  data: PropTypes.arrayOf(PropTypes.object),
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
  legends: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    field: PropTypes.string
  })),
  color: PropTypes.string
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

  return /*#__PURE__*/React$1.createElement("div", {
    className: shared.wrapper
  }, /*#__PURE__*/React$1.createElement("h1", {
    className: shared.title
  }, props.title), /*#__PURE__*/React$1.createElement("canvas", {
    ref: ref,
    width: props.width,
    height: props.height
  }));
}
PieChart.propTypes = {
  value: PropTypes.shape({
    label: PropTypes.string,
    field: PropTypes.string
  }),
  axis: PropTypes.shape({
    label: PropTypes.string,
    field: PropTypes.string
  }),
  data: PropTypes.arrayOf(PropTypes.object),
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
  legends: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    field: PropTypes.string
  })),
  color: PropTypes.string
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

  return /*#__PURE__*/React$1.createElement("div", {
    className: shared.wrapper
  }, /*#__PURE__*/React$1.createElement("h1", {
    className: shared.title
  }, props.title), /*#__PURE__*/React$1.createElement("canvas", {
    ref: ref,
    width: props.width,
    height: props.height
  }));
}
VerticalChart.propTypes = {
  value: PropTypes.shape({
    label: PropTypes.string,
    field: PropTypes.string
  }),
  axis: PropTypes.shape({
    label: PropTypes.string,
    field: PropTypes.string
  }),
  data: PropTypes.arrayOf(PropTypes.object),
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
  legends: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    field: PropTypes.string
  })),
  color: PropTypes.string
};

var css_248z$4 = ".Feed-module_wrapper__Xvrje{\r\n    padding: 16px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-flow: wrap;\r\n    gap: 16px;\r\n}\r\n.Feed-module_title__1yn-F{\r\n    font-size: 1.2rem;\r\n    color: var(--mfc-color-secondary);\r\n    font-weight: 600;\r\n\r\n    display: flex;\r\n    gap: 8px;\r\n    align-items: center;\r\n    padding: 16px;\r\n    white-space: nowrap;\r\n}\r\n\r\n.Feed-module_titleDivider__3dtLy{\r\n    height: 1px;\r\n    width: 100%;\r\n    background: var(--mfc-border-secondary);\r\n}";
var styles$4 = {"wrapper":"Feed-module_wrapper__Xvrje","title":"Feed-module_title__1yn-F","titleDivider":"Feed-module_titleDivider__3dtLy"};
styleInject(css_248z$4);

function Feed(props) {
  return /*#__PURE__*/React$1.createElement("div", {
    style: {
      width: props.width
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$4.title
  }, props.title, /*#__PURE__*/React$1.createElement("div", {
    className: styles$4.titleDivider
  })), /*#__PURE__*/React$1.createElement("div", {
    className: styles$4.wrapper
  }, props.children));
}
Feed.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  width: PropTypes.string
};

var css_248z$3 = ".Card-module_cardWrapper__JQNtF {\r\n    width: calc(24% + 1.7px);\r\n    height: 25vh;\r\n    overflow: hidden;\r\n    border-radius: 8px;\r\n\r\n    background: var(--mfc-background-primary);\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    cursor: pointer;\r\n\r\n    transition: 150ms linear;\r\n\r\n    user-select: none;\r\n    position: relative;\r\n}\r\n\r\n.Card-module_cardWrapper__JQNtF:active {\r\n    transform: scale(.98);\r\n}\r\n\r\n.Card-module_cardImage__3fNss {\r\n    height: 75%;\r\n    overflow: hidden;\r\n    transition: 150ms linear;\r\n}\r\n\r\n.Card-module_cardContent__1DzmO {\r\n    border-top: var(--mfc-border-primary) 1px solid;\r\n    transition: 150ms linear;\r\n    padding: 8px;\r\n\r\n    display: grid;\r\n    gap: 4px;\r\n    align-items: flex-start;\r\n    align-content: flex-start;\r\n}\r\n\r\n.Card-module_cardWrapper__JQNtF:hover .Card-module_cardImage__3fNss {\r\n    height: 25%;\r\n}\r\n\r\n.Card-module_cardWrapper__JQNtF:hover .Card-module_cardContent__1DzmO {\r\n    height: 75%;\r\n}\r\n\r\n.Card-module_cardWrapper__JQNtF:hover .Card-module_description__3PC9l {\r\n    white-space: normal;\r\n}\r\n\r\n.Card-module_header__2vgzP {\r\n    font-size: 1.1rem;\r\n    font-weight: 600;\r\n    color: var(--mfc-color-secondary);\r\n}\r\n\r\n.Card-module_description__3PC9l {\r\n    font-size: .8rem;\r\n    font-weight: normal;\r\n    color: var(--mfc-color-tertiary);\r\n\r\n    overflow: hidden;\r\n    max-width: 100%;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.Card-module_categories__1oZt6 {\r\n    display: flex;\r\n}\r\n\r\n.Card-module_category__1uRxa {\r\n    font-size: .75rem;\r\n    font-weight: bold;\r\n    color: var(--mfc-color-tertiary);\r\n\r\n    position: absolute;\r\n    top: 8px;\r\n    left: 8px;\r\n    transition: 150ms linear;\r\n    transform: translateX(calc(-100% - 8px));\r\n}\r\n.Card-module_cardWrapper__JQNtF:hover .Card-module_category__1uRxa {\r\n    transform: translateX(0);\r\n}\r\n";
var styles$3 = {"cardWrapper":"Card-module_cardWrapper__JQNtF","cardImage":"Card-module_cardImage__3fNss","cardContent":"Card-module_cardContent__1DzmO","description":"Card-module_description__3PC9l","header":"Card-module_header__2vgzP","categories":"Card-module_categories__1oZt6","category":"Card-module_category__1uRxa"};
styleInject(css_248z$3);

function FeedCard(props) {
  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$3.cardWrapper
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$3.cardImage
  }, /*#__PURE__*/React$1.createElement("img", {
    src: props.image,
    alt: props.title,
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/React$1.createElement("div", {
    className: styles$3.cardContent
  }, /*#__PURE__*/React$1.createElement("div", {
    className: styles$3.header
  }, props.title), /*#__PURE__*/React$1.createElement("div", {
    className: styles$3.description
  }, props.description)), /*#__PURE__*/React$1.createElement("div", {
    className: styles$3.category
  }, props.category));
}
FeedCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

var css_248z$2 = "/*HEADER*/\r\n.Article-module_headers__VgW0I {\r\n    display: grid;\r\n    align-items: flex-start;\r\n    text-align: left;\r\n\r\n}\r\n\r\n.Article-module_header__1uZNZ[ data-variant = 'primary'] {\r\n    font-size: 1.3rem;\r\n    color: var(--mfc-color-secondary);\r\n    font-weight: 600;\r\n\r\n    font-family: 'Roboto';\r\n\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.Article-module_header__1uZNZ[ data-variant = 'secondary'] {\r\n    font-size: .95rem;\r\n    color: var(--mfc-color-tertiary);\r\n    font-weight: 600;\r\n\r\n    font-family: 'Roboto';\r\n\r\n    margin: 0;\r\n}\r\n\r\n.Article-module_header__1uZNZ[ data-variant = 'tertiary'] {\r\n    font-size: .75rem;\r\n    color: var(--mfc-color-quaternary);\r\n    font-weight: 600;\r\n\r\n    font-family: 'Roboto';\r\n\r\n    margin: 0;\r\n}\r\n\r\n\r\n/*BODY*/\r\n.Article-module_body__3fgRT {\r\n\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    border-radius: 5px;\r\n    padding: 8px;\r\n    display: grid;\r\n    align-items: flex-start;\r\n    gap: 12px;\r\n    background: var(--mfc-background-primary);\r\n    text-align: left;\r\n    font-size: .9rem;\r\n    color: var(--mfc-color-tertiary);\r\n}\r\n\r\n\r\n\r\n.Article-module_baseText__2TAlu {\r\n    margin: 0;\r\n    font-size: 1rem;\r\n}\r\n\r\n\r\n/*MISC*/\r\n.Article-module_block__2rf8r {\r\n    display: grid;\r\n    gap: 12px;\r\n}\r\n\r\n.Article-module_link__2f9QC {\r\n    transition: 150ms linear;\r\n    width: fit-content;\r\n    text-decoration: none;\r\n    color: #0095ff;\r\n    font-weight: bold;\r\n}\r\n\r\n.Article-module_link__2f9QC:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.Article-module_link__2f9QC:active {\r\n    color: var(--mfc-color-quaternary);\r\n    text-decoration: none;\r\n}\r\n\r\n.Article-module_footer__1yhY4 {\r\n    background: var(--mfc-background-primary);\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    border-radius: 5px;\r\n    padding: 16px;\r\n\r\n    display: flex;\r\n    text-align: left;\r\n    font-size: .9rem;\r\n    color: var(--mfc-color-tertiary);\r\n}\r\n\r\n.Article-module_wrapper__3Ek7A {\r\n    width: 100%;\r\n    display: grid;\r\n    gap: 32px;\r\nheight: fit-content;\r\n\r\n    padding-bottom: 25%;\r\n}\r\n\r\n.Article-module_container__3Zz32 {\r\n    padding: 8px 0;\r\n    display: flex;\r\n    scroll-behavior: smooth;\r\n    max-height: 100%;\r\n    overflow-y: auto;\r\n    gap: 32px;\r\n\r\n\r\n}\r\n.Article-module_nativeCode__2wLu7{\r\n    gap: 8px;\r\n    width: 100%;\r\n    padding: 8px;\r\n    border-radius: 5px;\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n}\r\n\r\n\r\n.Article-module_preFormattedText__3jcDF {\r\n\r\n    margin: 16px 0 0;\r\n    justify-self: stretch;\r\n\r\n    background: var(--mfc-background-secondary);\r\n    border: var(--mfc-border-primary) 1px solid;\r\n    color: var(--mfc-color-primary);\r\n    border-radius: 5px;\r\n    padding: 16px 24px;\r\n    text-align: left;\r\n}\r\n";
var styles$2 = {"headers":"Article-module_headers__VgW0I","header":"Article-module_header__1uZNZ","body":"Article-module_body__3fgRT","baseText":"Article-module_baseText__2TAlu","block":"Article-module_block__2rf8r","link":"Article-module_link__2f9QC","footer":"Article-module_footer__1yhY4","wrapper":"Article-module_wrapper__3Ek7A","container":"Article-module_container__3Zz32","nativeCode":"Article-module_nativeCode__2wLu7","preFormattedText":"Article-module_preFormattedText__3jcDF"};
styleInject(css_248z$2);

function TypeTag(props) {
  var ref = useRef();
  var content = useMemo(function () {
    switch (props.type) {
      case 'any':
        return props.content;

      case 'pre-formatted':
        return /*#__PURE__*/React$1.createElement("pre", {
          ref: ref,
          className: styles$2.preFormattedText
        }, props.content);

      case 'native-code':
        return /*#__PURE__*/React$1.createElement("div", {
          className: styles$2.nativeCode
        }, props.content);

      case 'image':
        return /*#__PURE__*/React$1.createElement("img", {
          src: props.content,
          alt: 'image-' + props.index,
          className: styles$2.image,
          "data-float": props["float"]
        });

      default:
        {
          if (props.linkTo) return /*#__PURE__*/React$1.createElement("a", {
            className: styles$2.link,
            href: props.linkTo
          }, props.content);else return /*#__PURE__*/React$1.createElement("p", {
            className: styles$2.baseText,
            dangerouslySetInnerHTML: {
              __html: props.content
            },
            "data-float": props["float"]
          });
        }
    }
  }, [props.content]);
  return content;
}
TypeTag.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  type: PropTypes.oneOf(['any', 'native-code', 'pre-formatted', 'text', 'image']),
  index: PropTypes.number,
  "float": PropTypes.oneOf(['right', 'left', 'stretch']),
  linkTo: PropTypes.string,
  noCopy: PropTypes.bool
};

var css_248z$1 = ".Navigation-module_wrapper__fZnqT{\r\n    width: 20%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 4px;\r\n\r\n    position: sticky;\r\n    top: 0;\r\n}\r\n\r\n.Navigation-module_button__11JVb{\r\n    font-weight: 600;\r\n    text-align: left;\r\n    background: var(--mfc-background-primary);\r\n}";
var styles$1 = {"wrapper":"Navigation-module_wrapper__fZnqT","button":"Navigation-module_button__11JVb"};
styleInject(css_248z$1);

function ArticleNavigation(props) {
  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$1.wrapper
  }, props.headers.map(function (e, i) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
      key: i + '-headers'
    }, /*#__PURE__*/React$1.createElement(Button, {
      variant: 'minimal-horizontal',
      className: styles$1.button,
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
  setOnHeader: PropTypes.func,
  onHeader: PropTypes.number,
  scrollTo: PropTypes.func,
  headers: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    linkTo: PropTypes.string,
    id: PropTypes.string
  }))
};

function Article(props) {
  var ref = useRef();
  var headers = useMemo(function () {
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
  var intersectionObs = useRef();

  var _useState = useState(0),
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

  useEffect(function () {
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
      var _intersectionObs$curr3;

      headers.forEach(function (e) {
        var _intersectionObs$curr2;

        var element = document.getElementById(e.id);
        if (element !== null) (_intersectionObs$curr2 = intersectionObs.current) === null || _intersectionObs$curr2 === void 0 ? void 0 : _intersectionObs$curr2.unobserve(element);
      });
      (_intersectionObs$curr3 = intersectionObs.current) === null || _intersectionObs$curr3 === void 0 ? void 0 : _intersectionObs$curr3.disconnect();
    };
  }, []);
  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$2.container,
    ref: ref
  }, /*#__PURE__*/React$1.createElement("article", {
    className: [props.className, styles$2.wrapper].join(' '),
    style: props.styles
  }, props.data.map(function (data, index) {
    var _data$headers, _data$body;

    return /*#__PURE__*/React$1.createElement("section", {
      className: styles$2.block,
      key: "".concat(index, "-data_object"),
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React$1.createElement("div", {
      id: 'header-' + index,
      style: {
        height: '10px',
        position: 'absolute',
        top: '0'
      }
    }), /*#__PURE__*/React$1.createElement("header", {
      className: styles$2.headers
    }, (_data$headers = data.headers) === null || _data$headers === void 0 ? void 0 : _data$headers.map(function (header, hIndex) {
      return /*#__PURE__*/React$1.createElement("h1", {
        key: "".concat(index, "-data_object-").concat(hIndex, "-header"),
        className: styles$2.header,
        "data-variant": header.type
      }, header.linkTo ? /*#__PURE__*/React$1.createElement("a", {
        className: styles$2.link,
        href: header.linkTo
      }, header.content) : header.content);
    })), /*#__PURE__*/React$1.createElement("section", {
      className: styles$2.body
    }, (_data$body = data.body) === null || _data$body === void 0 ? void 0 : _data$body.map(function (body, bIndex) {
      return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
        key: "".concat(index, "-data_object-").concat(bIndex, "-body")
      }, /*#__PURE__*/React$1.createElement(TypeTag, {
        linkTo: body.linkTo,
        type: body.type,
        "float": body["float"],
        content: body.content,
        index: bIndex
      }));
    })), /*#__PURE__*/React$1.createElement("footer", {
      className: styles$2.footer,
      dangerouslySetInnerHTML: {
        __html: data.alert
      },
      style: {
        display: data.alert ? undefined : 'none'
      }
    }));
  })), /*#__PURE__*/React$1.createElement(ArticleNavigation, {
    onHeader: onHeader,
    headers: headers,
    setOnHeader: setOnHeader,
    scrollTo: function scrollTo(position) {
      ref.current.scroll(0, position - ref.current.offsetTop);
    }
  }));
}
Article.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.shape({
    headers: PropTypes.arrayOf(PropTypes.shape({
      content: PropTypes.string,
      type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
      linkTo: PropTypes.string
    })),
    body: PropTypes.arrayOf(PropTypes.shape({
      content: PropTypes.any,
      type: PropTypes.oneOf(['text', 'native-code', 'pre-formatted', 'image']),
      "float": PropTypes.oneOf(['right', 'left', 'stretch']),
      linkTo: PropTypes.string
    })),
    alert: PropTypes.any
  }))
};

var SPACE = '  ';

var parseData = function parseData(field, layer, isArrayField) {
  if (field !== null && field && _typeof(field) === 'object' && !Array.isArray(field)) {
    if (Object.keys(field).length > 0) return "".concat(highlightObject(field, layer + 1));else return "".concat(SPACE.repeat(layer - 1), "{}");
  } else if (field !== null && field && Array.isArray(field)) {
    return highlightArray(field, layer);
  } else {
    if (typeof field === 'string' && !isArrayField) return "\"<i style=\"color: red\">".concat(field, "</i>\"");else if (typeof field === 'boolean') return "<b style=\"color: #FF6A00\">".concat(field, "</b>");else return "<i style=\"color: red\">".concat(field, "</i>");
  }
};

var highlightArray = function highlightArray(field, layer, isWrapper) {
  var newField = [],
      startP,
      endP;
  var subFieldLayer = field.length === 1 ? layer : layer + 1;
  field.forEach(function (e) {
    var parsed = parseData(e, subFieldLayer, true);
    newField.push(typeof e === 'string' && !isWrapper ? "\"".concat(parsed, "\"") : parsed);
  });
  startP = SPACE.repeat(layer + 2);
  endP = SPACE.repeat(layer + 1);
  if (field.length === 0 || field.length === 1) return "[".concat(newField.join(',\n' + startP), "]");else return "[\n".concat(startP).concat(newField.join(',\n' + startP), "\n").concat(endP, "]");
};

var highlightObject = function highlightObject(obj, layer, isWrapper) {
  var keys = Object.keys(obj);
  var newObj = '';

  if (!isWrapper) {
    keys.forEach(function (e) {
      newObj += "\"".concat(e, "\": ").concat(parseData(obj[e], layer, Array.isArray(obj[e])));
    });
    newObj = "{".concat(newObj, "}");
  } else {
    keys.forEach(function (e) {
      newObj += "\"".concat(e, "\": ").concat(obj[e]);
    });
    newObj = "{".concat(newObj, "}");
  }

  var str = newObj;
  var lineTerminator = keys.length > 1 || keys.length > 0 && _typeof(obj[keys[0]]) === 'object' ? '\n' : '';
  keys.forEach(function (e) {
    str = str.replace("\"".concat(e, "\":"), "".concat(layer === 0 || layer > 0 ? lineTerminator + SPACE.repeat(layer + 1) : '', "<b style=\"color: #0095ff\">\"").concat(e, "\": </b>"));
  });
  str = str.split('');
  if (str[str.length - 1] === '}') str[str.length - 1] = lineTerminator + SPACE.repeat(!isWrapper ? layer ? layer : 1 : 0) + '}';
  return str.join('');
};

function jsonParser(data) {
  var response;

  if (Array.isArray(data)) {
    var newArr = [];
    data.forEach(function (e) {
      var keys = Object.keys(e);
      var newObj = {}; // console.log(e)

      keys.forEach(function (key) {
        newObj[key] = parseData(e[key], 0);
      });
      newArr.push(highlightObject(newObj, 0, true));
    });
    console.log(newArr);
    response = highlightArray(newArr, 0, true);
  } else {
    var newObject = {};
    Object.keys(data).forEach(function (e) {
      newObject[e] = parseData(data[e], 0);
    });
    console.log(newObject);
    response = highlightObject(newObject, 0, true);
  }

  return response;
}

function jsxParser(component) {
  if (component.type === React$1.Fragment && component.props.children && component.props.children.length > 0) {
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

        case /*#__PURE__*/React$1.isValidElement(props.children):
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
  .replaceAll(/[a-zA-Z0-9]+=/ig, '<b style="color: #0095ff;">$&</b>') // attr value
  .replaceAll(/{[^}]*}/ig, '<span style="color: #007d07;" >$&</span>') // tag
  .replaceAll(/&lt;[a-zA-Z0-9]+\s/ig, '<b style="color:#86128f;">$&</b>').replaceAll(/&lt;[a-zA-Z0-9]+&gt;/g, '<b style="color:#86128f;">$&</b>').replaceAll(/&lt;\/[a-zA-Z0-9]+&gt;/g, '<b style="color:#86128f;">$&</b>') // attr value
  .replaceAll(/\s[a-zA-Z0-9]+""[a-zA-Z0-9]+"/ig, '<span style="color: #007d07;">$&</span>') // attr
  .replaceAll(/"[a-zA-Z0-9]+"/ig, '<span style="color: #007d07;">$&</span>');
}

var reactDomHighlight = function reactDomHighlight(str) {
  return str.replace(/(.*?)ReactDOM.render/igm, '<b style="color: #EA00FF">$&</b>').replace(/(.*?)ReactDOM.unmountComponentAtNode/igm, '<b style="color: #EA00FF">$&</b>');
};

function javascriptParser(data) {
  var res = [];
  var fullCode = [];

  try {
    var js = data.replace('\r', '\n').split('\n');
    var ended = false;
    var startsOn = undefined;
    var indexes = [];
    var regexStartJSX = /^\s*\/\/\/JSX$/gm;
    var regexEndJSX = /^\s*\/\/\/JSX-END$/gm;
    js.forEach(function (e, i) {
      if (regexEndJSX.test(e)) {
        indexes.push({
          startsOn: startsOn,
          endsOn: i
        });
        ended = true;
      }

      if (regexStartJSX.test(e) && (ended || startsOn === undefined)) {
        startsOn = i;
        ended = false;
      }
    });
    indexes.forEach(function (e, index) {
      var str = _toConsumableArray(js).splice(e.startsOn, e.endsOn - e.startsOn);

      var jsx = htmlParser(str.join('\n').replace(regexStartJSX, '').replace(regexEndJSX, ''));
      var before = [],
          after = '';

      if (index > 0) {
        _toConsumableArray(js).forEach(function (h, i) {
          if (i >= indexes[index - 1].endsOn && i <= e.startsOn) before.push(h);
        });

        before = before.join('\n');
      } else if (index === 0) before = _toConsumableArray(js).splice(0, e.startsOn + 2).join('\n');

      if (index === indexes.length - 1) after = _toConsumableArray(js).splice(e.endsOn, js.length).join('\n');
      if (typeof before === 'string') before = before.replace(/ const /igm, '<b style="color: #003DFF">$&</b>').replace(/const /igm, '<b style="color: #003DFF">$&</b>').replace(/ let /igm, '<b style="color: #003DFF">$&</b>').replace(/ var /igm, '<b style="color: #003DFF">$&</b>').replace(/ import /igm, '<b style="color: #63474D">$&</b>').replace(/import /igm, '<b style="color: orange">$&</b>').replace(/ from /igm, '<b style="color: orange">$&</b>').replace(/function /igm, '<b style="color: #FF6A00">$&</b>').replace(/return /igm, '<b style="color: #FF6A00">$&</b>');
      fullCode.push(reactDomHighlight(before) + jsx + '\n' + reactDomHighlight(after));
      res.push(jsx);
    });
  } catch (e) {
    console.log(e);
  }

  return {
    jsxContent: res,
    fullCode: fullCode.join('\n'),
    originalCode: data
  };
}

function useCode(data, language) {
  return useMemo(function () {
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

var css_248z = ".Block-module_code__HODBm {\r\n    white-space: pre-wrap;\r\n    word-wrap: break-word;\r\n    tab-size: 16;\r\n    /*padding-bottom: 16px;*/\r\n\r\n    max-width: 100%;\r\n    padding: 8px;\r\n    background: var(--mfc-background-secondary);\r\n}\r\n.Block-module_buttons__3Ygx3{\r\n    display: flex;\r\n    gap: 8px;\r\n    justify-content: flex-end;\r\n    padding: 8px;\r\n}\r\n.Block-module_button__1vdzp {\r\n    padding: 8px;\r\n    width: 30px;\r\n    height: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    /*background: var(--mfc-background-primary) !important;*/\r\n}\r\n\r\n\r\n.Block-module_wrapper__1eIkX {\r\n\r\n    border: var(--mfc-border-primary) 1px solid;\r\n\r\n    max-height: 100%;\r\n\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n\r\n    border-radius: 5px;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin: 16px auto;\r\n    position: relative;\r\n\r\n    display: grid;\r\n    gap: 0;\r\n}\r\n\r\n.Block-module_enumeration__3VK4l{\r\n    padding: 0;\r\n    margin: 0;\r\n    background: transparent;\r\n    border: none;\r\n    outline: none;\r\n\r\n    text-align: left;\r\n    user-select: none;\r\n    color: var(--mfc-color-quinary);\r\n    position: absolute;\r\n\r\n    transition: 150ms linear;\r\n\r\n    width: 100%;\r\n}\r\n.Block-module_enumeration__3VK4l:hover{\r\n    background: var(--mfc-background-quaternary);\r\n}\r\n.Block-module_enumContent__btUnw{\r\n    width: fit-content;\r\n    height: 1rem;\r\n    line-break: strict;\r\n    position: relative;\r\n    white-space: nowrap;\r\n    /*line-break: strict;*/\r\n    z-index: 1;\r\n\r\n    padding-left: 16px;\r\n}\r\n";
var styles = {"code":"Block-module_code__HODBm","buttons":"Block-module_buttons__3Ygx3","button":"Block-module_button__1vdzp","wrapper":"Block-module_wrapper__1eIkX","enumeration":"Block-module_enumeration__3VK4l","enumContent":"Block-module_enumContent__btUnw"};
styleInject(css_248z);

function Wrapper(props) {
  var _props$options;

  var copy = useCopyToClipboard();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      content = _useState2[0],
      setContent = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      success = _useState4[0],
      setSuccess = _useState4[1];

  return /*#__PURE__*/React$1.createElement("div", {
    className: styles.wrapper,
    style: {
      width: props.width
    },
    "data-float": props["float"] ? props["float"] : 'none'
  }, props.children(setContent), /*#__PURE__*/React$1.createElement(Alert, {
    handleClose: function handleClose() {
      return setSuccess(null);
    },
    open: success !== null,
    variant: success ? 'success' : 'alert',
    delay: 3000
  }, success ? 'Copied!' : 'Copy was unsuccessful.'), /*#__PURE__*/React$1.createElement("div", {
    className: styles.buttons
  }, (_props$options = props.options) === null || _props$options === void 0 ? void 0 : _props$options.map(function (e, i) {
    return /*#__PURE__*/React$1.createElement(Button, {
      variant: 'minimal',
      color: e.color,
      onClick: e.onClick,
      className: styles.button
    }, e.icon, /*#__PURE__*/React$1.createElement(ToolTip, {
      content: e.label
    }));
  }), /*#__PURE__*/React$1.createElement(Button, {
    variant: "filled",
    onClick: function onClick() {
      setSuccess(copy(content));
    },
    className: styles.button
  }, /*#__PURE__*/React$1.createElement(ToolTip, {
    content: 'Copy content'
  }), /*#__PURE__*/React$1.createElement("span", {
    className: "material-icons-round",
    style: {
      fontSize: '1.2rem'
    }
  }, "content_copy"))));
}
Wrapper.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    onClick: PropTypes.func,
    label: PropTypes.string,
    icon: PropTypes.node
  })),
  width: PropTypes.string,
  "float": PropTypes.oneOf(['right', 'left', 'stretch']),
  children: PropTypes.func.isRequired,
  noCopy: PropTypes.bool
};

var getPadding = function getPadding(length) {
  switch (true) {
    case length > 10 && length < 100:
      return '24px';

    case length >= 100 && length < 1000:
      return '32px';

    default:
      return '16px';
  }
};

function enumerateLines(data, divider) {
  var smallestWhiteSpace,
      removedLines = 0,
      padding,
      d = data;

  try {
    d = d.split(divider);
    padding = getPadding(d.length);
    console.log(padding);
    d.forEach(function (e, index) {
      if (e !== '\r') {
        var c = e.split('');
        var whitespaces = 0;
        c.every(function (s) {
          if (/\s/.test(s)) {
            whitespaces = whitespaces + 1;
            return true;
          } else return false;
        });
        if (whitespaces < smallestWhiteSpace || smallestWhiteSpace === undefined) smallestWhiteSpace = whitespaces;
      }
    });
    d = d.map(function (line, i) {
      if (!/^\s+$/gm.test(line)) {
        var c = line.split('');
        var newLine = [];
        var reachedLetter = false;
        c.forEach(function (s) {
          if (/\s/.test(s) && !reachedLetter) newLine.push('&nbsp');else {
            reachedLetter = true;
            newLine.push(s);
          }
        });
        newLine = newLine.join('');
        var content = newLine.replace(' '.repeat(smallestWhiteSpace), '');
        return "<span><button class=".concat(styles.enumeration, ">").concat(i - removedLines, "</button><span class=").concat(styles.enumContent, " style=\"padding-left: ").concat(padding, "\">").concat(content, "</span></span>");
      } else {
        removedLines += 1;
        return null;
      }
    });
    d.filter(function (e) {
      return e !== null;
    });
    d = d.join(divider);
  } catch (e) {}

  return d;
}

function JavascriptCode(props) {
  var ref = useRef();
  var tabs = useMemo(function () {
    return props.jsxContent.map(function (c, i) {
      return enumerateLines(c, '\n');
    });
  }, []);
  var full = useMemo(function () {
    return enumerateLines(props.fullCode, '\n');
  }, []);
  useEffect(function () {
    props.setCopy(props.originalCode);
  }, []);
  return useMemo(function () {
    if (props.extended) {
      return /*#__PURE__*/React$1.createElement("code", {
        style: {
          display: 'grid',
          alignItems: 'flex-start',
          alignContent: 'flex-start'
        },
        className: styles.code,
        ref: ref,
        dangerouslySetInnerHTML: {
          __html: full
        }
      });
    } else if (tabs.length > 1) {
      return /*#__PURE__*/React$1.createElement(Tabs, {
        styles: {
          position: 'relative'
        }
      }, tabs.map(function (c, i) {
        return /*#__PURE__*/React$1.createElement(Tab, {
          label: 'Jsx code ' + i
        }, /*#__PURE__*/React$1.createElement("code", {
          ref: ref,
          className: styles.code,
          dangerouslySetInnerHTML: {
            __html: c
          },
          style: {
            display: 'grid',
            alignItems: 'flex-start',
            alignContent: 'flex-start'
          }
        }));
      }));
    } else if (tabs.length === 1) return /*#__PURE__*/React$1.createElement("code", {
      ref: ref,
      className: styles.code,
      dangerouslySetInnerHTML: {
        __html: tabs[0]
      },
      style: {
        display: 'grid',
        alignItems: 'flex-start',
        alignContent: 'flex-start'
      }
    });else return null;
  }, [props.extended, props.jsxContent]);
}
JavascriptCode.propTypes = {
  originalCode: PropTypes.string,
  jsxContent: PropTypes.arrayOf(PropTypes.shape({
    jsx: PropTypes.string,
    before: PropTypes.string,
    after: PropTypes.string
  })),
  fullCode: PropTypes.string,
  setCopy: PropTypes.func,
  extended: PropTypes.bool
};

function JsonCode(props) {
  useEffect(function () {
    props.setCopy(props.data);
  });
  return /*#__PURE__*/React$1.createElement("code", {
    className: styles.code,
    dangerouslySetInnerHTML: {
      __html: enumerateLines(props.parsedData, '\n')
    }
  });
}
JsonCode.propTypes = {
  setCopy: PropTypes.func,
  data: PropTypes.object,
  parsedData: PropTypes.string
};

function CodeBlock(props) {
  var parsedString = useCode(props.data, props.language);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      extended = _useState2[0],
      setExtended = _useState2[1];

  return /*#__PURE__*/React$1.createElement(Wrapper, {
    width: props.width,
    options: props.language === 'javascript' ? [{
      icon: /*#__PURE__*/React$1.createElement("span", {
        className: "material-icons-round",
        style: {
          fontSize: '1rem'
        }
      }, "code"),
      onClick: function onClick() {
        return setExtended(!extended);
      },
      label: 'Show code',
      color: extended ? 'secondary' : 'primary'
    }] : []
  }, function (copyContent) {
    return props.language === 'javascript' ? JavascriptCode(_objectSpread2(_objectSpread2({}, parsedString), {}, {
      setCopy: copyContent,
      extended: extended
    })) : JsonCode({
      setCopy: copyContent,
      data: props.data,
      parsedData: parsedString
    });
  });
}
CodeBlock.propTypes = {
  width: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  language: PropTypes.oneOf(['json', 'jsx', 'javascript']).isRequired
};

export { Alert, Article, Breadcrumbs, Button, Carousel, Checkbox, CheckboxGroup, CodeBlock, DateField, Dropdown, DynamicRoutes, Empty, Feed, FeedCard, FileField, Filter, Form, FormRow, HorizontalChart, LineChart, List, MfcWrapper, Modal, MultiSelectField, NavigationRail, PieChart, RailActionButton, RailActionWrapper, RailContext, Ripple, SelectField, Selector, Switcher, Tab, Tabs, TextField, ThemeContext, ToolTip, VerticalChart, VerticalTabs, Request as request, useCopyToClipboard, useFile, useInfiniteScroll, useQuery };
