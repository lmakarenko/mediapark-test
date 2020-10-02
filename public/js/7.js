(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/assets/js/pages/PasswordReset/PasswordReset.jsx":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/pages/PasswordReset/PasswordReset.jsx ***!
  \*******************************************************************/
/*! exports provided: PasswordResetComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return PasswordResetComponent; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var utils_history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/history */ "./resources/assets/js/utils/history.js");
/* harmony import */ var store_action_creators_flashMessages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! store/action-creators/flashMessages */ "./resources/assets/js/store/action-creators/flashMessages/index.js");
/* harmony import */ var _PasswordResetForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PasswordResetForm */ "./resources/assets/js/pages/PasswordReset/PasswordResetForm.jsx");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};









const PasswordResetComponent = props => {
  const {
    submitPasswordReset
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_PasswordResetForm__WEBPACK_IMPORTED_MODULE_10__["PasswordResetForm"], {
    onSubmit: submitPasswordReset
  });
};

const parseValidationFromResponse = data => {
  const errors = {};

  if (data.errors.password && data.errors.password.includes('The password must be at least 6 characters.')) {
    errors.password = 'The password must be at least 6 characters.';
  }

  return errors;
};

const _default = Object(recompose__WEBPACK_IMPORTED_MODULE_5__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"], Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(null, (dispatch, ownProps) => ({
  submitPasswordReset: async (values, {
    setErrors
  }) => {
    const {
      match
    } = ownProps;

    try {
      await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/api/reset-password', _objectSpread({}, values, {
        token: match.params.resetToken
      }));
      utils_history__WEBPACK_IMPORTED_MODULE_8__["history"].push('/login');
      dispatch(Object(store_action_creators_flashMessages__WEBPACK_IMPORTED_MODULE_9__["flashMessage"])('success', 'Password successfully reset'));
    } catch (error) {
      setErrors(parseValidationFromResponse(error.response.data));
    }
  }
})))(PasswordResetComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PasswordResetComponent, "PasswordResetComponent", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/PasswordReset/PasswordReset.jsx");
  reactHotLoader.register(parseValidationFromResponse, "parseValidationFromResponse", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/PasswordReset/PasswordReset.jsx");
  reactHotLoader.register(_default, "default", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/PasswordReset/PasswordReset.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/PasswordReset/PasswordResetForm.jsx":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/pages/PasswordReset/PasswordResetForm.jsx ***!
  \***********************************************************************/
/*! exports provided: PasswordResetForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetForm", function() { return PasswordResetForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





const validate = (values = {}) => {
  let errors = {};

  if (!values.email) {
    errors.email = 'This field is required';
  }

  if (!values.password) {
    errors.password = 'This field is required';
  }

  if (!values.password_confirmation) {
    errors.password_confirmation = 'This field is required';
  } else if (values.password !== values.password_confirmation) {
    errors.password_confirmation = "The two passwords don't match";
  }

  return errors;
};

const PasswordResetForm = ({
  onSubmit
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    validate: validate,
    onSubmit: onSubmit
  }, props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    name: "email",
    labelText: "Enter your Email",
    component: components__WEBPACK_IMPORTED_MODULE_2__["TextFormLine"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "password",
    name: "password",
    labelText: "Enter a New Password",
    component: components__WEBPACK_IMPORTED_MODULE_2__["PasswordFormLine"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "password",
    name: "password_confirmation",
    labelText: "Confirm Your New Password",
    component: components__WEBPACK_IMPORTED_MODULE_2__["PasswordFormLine"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_2__["NeutralButton"], {
    className: "float-right",
    type: "submit"
  }, "Set New Password")));
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(validate, "validate", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/PasswordReset/PasswordResetForm.jsx");
  reactHotLoader.register(PasswordResetForm, "PasswordResetForm", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/PasswordReset/PasswordResetForm.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1Bhc3N3b3JkUmVzZXQvUGFzc3dvcmRSZXNldC5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9QYXNzd29yZFJlc2V0L1Bhc3N3b3JkUmVzZXRGb3JtLmpzeCJdLCJuYW1lcyI6WyJQYXNzd29yZFJlc2V0Q29tcG9uZW50IiwicHJvcHMiLCJzdWJtaXRQYXNzd29yZFJlc2V0IiwicGFyc2VWYWxpZGF0aW9uRnJvbVJlc3BvbnNlIiwiZGF0YSIsImVycm9ycyIsInBhc3N3b3JkIiwiaW5jbHVkZXMiLCJjb21wb3NlIiwid2l0aFJvdXRlciIsImNvbm5lY3QiLCJkaXNwYXRjaCIsIm93blByb3BzIiwidmFsdWVzIiwic2V0RXJyb3JzIiwibWF0Y2giLCJheGlvcyIsInBvc3QiLCJ0b2tlbiIsInBhcmFtcyIsInJlc2V0VG9rZW4iLCJoaXN0b3J5IiwicHVzaCIsImZsYXNoTWVzc2FnZSIsImVycm9yIiwicmVzcG9uc2UiLCJ2YWxpZGF0ZSIsImVtYWlsIiwicGFzc3dvcmRfY29uZmlybWF0aW9uIiwiUGFzc3dvcmRSZXNldEZvcm0iLCJvblN1Ym1pdCIsIlRleHRGb3JtTGluZSIsIlBhc3N3b3JkRm9ybUxpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVPLE1BQU1BLHNCQUFzQixHQUFHQyxLQUFLLElBQUk7QUFDN0MsUUFBTTtBQUFFQztBQUFGLE1BQTBCRCxLQUFoQztBQUNBLFNBQU8sMkRBQUMscUVBQUQ7QUFBbUIsWUFBUSxFQUFFQztBQUE3QixJQUFQO0FBQ0QsQ0FITTs7QUFLUCxNQUFNQywyQkFBMkIsR0FBR0MsSUFBSSxJQUFJO0FBQzFDLFFBQU1DLE1BQU0sR0FBRyxFQUFmOztBQUVBLE1BQ0VELElB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REY7QUFnQ0QsQ0FqQ007Ozs7Ozs7Ozs7MEJBcEJETixROzBCQW9CT0csaUIiLCJmaWxlIjoianMvNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWNvbXBvc2UnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgeyBoaXN0b3J5IH0gZnJvbSAndXRpbHMvaGlzdG9yeSdcbmltcG9ydCB7IGZsYXNoTWVzc2FnZSB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9mbGFzaE1lc3NhZ2VzJ1xuXG5pbXBvcnQgeyBQYXNzd29yZFJlc2V0Rm9ybSB9IGZyb20gJy4vUGFzc3dvcmRSZXNldEZvcm0nXG5cbmV4cG9ydCBjb25zdCBQYXNzd29yZFJlc2V0Q29tcG9uZW50ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHN1Ym1pdFBhc3N3b3JkUmVzZXQgfSA9IHByb3BzXG4gIHJldHVybiA8UGFzc3dvcmRSZXNldEZvcm0gb25TdWJtaXQ9e3N1Ym1pdFBhc3N3b3JkUmVzZXR9IC8+XG59XG5cbmNvbnN0IHBhcnNlVmFsaWRhdGlvbkZyb21SZXNwb25zZSA9IGRhdGEgPT4ge1xuICBjb25zdCBlcnJvcnMgPSB7fVxuXG4gIGlmIChcbiAgICBkYXRhLmVycm9ycy5wYXNzd29yZCAmJlxuICAgIGRhdGEuZXJyb3JzLnBhc3N3b3JkLmluY2x1ZGVzKCdUaGUgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMuJylcbiAgKSB7XG4gICAgZXJyb3JzLnBhc3N3b3JkID0gJ1RoZSBwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycy4nXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHdpdGhSb3V0ZXIsXG4gIGNvbm5lY3QobnVsbCwgKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4gKHtcbiAgICBzdWJtaXRQYXNzd29yZFJlc2V0OiBhc3luYyAodmFsdWVzLCB7IHNldEVycm9ycyB9KSA9PiB7XG4gICAgICBjb25zdCB7IG1hdGNoIH0gPSBvd25Qcm9wc1xuXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3Jlc2V0LXBhc3N3b3JkJywge1xuICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICB0b2tlbjogbWF0Y2gucGFyYW1zLnJlc2V0VG9rZW5cbiAgICAgICAgfSlcblxuICAgICAgICBoaXN0b3J5LnB1c2goJy9sb2dpbicpXG4gICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnc3VjY2VzcycsICdQYXNzd29yZCBzdWNjZXNzZnVsbHkgcmVzZXQnKSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldEVycm9ycyhwYXJzZVZhbGlkYXRpb25Gcm9tUmVzcG9uc2UoZXJyb3IucmVzcG9uc2UuZGF0YSkpXG4gICAgICB9XG4gICAgfVxuICB9KSlcbikoUGFzc3dvcmRSZXNldENvbXBvbmVudClcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnXG5cbmltcG9ydCB7IFRleHRGb3JtTGluZSwgUGFzc3dvcmRGb3JtTGluZSwgTmV1dHJhbEJ1dHRvbiB9IGZyb20gJ2NvbXBvbmVudHMnXG5cbmNvbnN0IHZhbGlkYXRlID0gKHZhbHVlcyA9IHt9KSA9PiB7XG4gIGxldCBlcnJvcnMgPSB7fVxuXG4gIGlmICghdmFsdWVzLmVtYWlsKSB7XG4gICAgZXJyb3JzLmVtYWlsID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXG4gIH1cblxuICBpZiAoIXZhbHVlcy5wYXNzd29yZCkge1xuICAgIGVycm9ycy5wYXNzd29yZCA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMucGFzc3dvcmRfY29uZmlybWF0aW9uKSB7XG4gICAgZXJyb3JzLnBhc3N3b3JkX2NvbmZpcm1hdGlvbiA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ1xuICB9IGVsc2UgaWYgKHZhbHVlcy5wYXNzd29yZCAhPT0gdmFsdWVzLnBhc3N3b3JkX2NvbmZpcm1hdGlvbikge1xuICAgIGVycm9ycy5wYXNzd29yZF9jb25maXJtYXRpb24gPSBcIlRoZSB0d28gcGFzc3dvcmRzIGRvbid0IG1hdGNoXCJcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cblxuZXhwb3J0IGNvbnN0IFBhc3N3b3JkUmVzZXRGb3JtID0gKHsgb25TdWJtaXQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGb3JtaWsgdmFsaWRhdGU9e3ZhbGlkYXRlfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAge3Byb3BzID0+IChcbiAgICAgICAgPEZvcm0+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgbGFiZWxUZXh0PVwiRW50ZXIgeW91ciBFbWFpbFwiXG4gICAgICAgICAgICBjb21wb25lbnQ9e1RleHRGb3JtTGluZX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGxhYmVsVGV4dD1cIkVudGVyIGEgTmV3IFBhc3N3b3JkXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17UGFzc3dvcmRGb3JtTGluZX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICBsYWJlbFRleHQ9XCJDb25maXJtIFlvdXIgTmV3IFBhc3N3b3JkXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17UGFzc3dvcmRGb3JtTGluZX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPE5ldXRyYWxCdXR0b24gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBTZXQgTmV3IFBhc3N3b3JkXG4gICAgICAgICAgPC9OZXV0cmFsQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICApfVxuICAgIDwvRm9ybWlrPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9