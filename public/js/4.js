(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/assets/js/constants/regexes.js":
/*!**************************************************!*\
  !*** ./resources/assets/js/constants/regexes.js ***!
  \**************************************************/
/*! exports provided: email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(email, "email", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/constants/regexes.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/ForgotPassword/ForgotPassword.jsx":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/pages/ForgotPassword/ForgotPassword.jsx ***!
  \*********************************************************************/
/*! exports provided: ForgotPasswordComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var utils_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/history */ "./resources/assets/js/utils/history.js");
/* harmony import */ var store_action_creators_flashMessages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store/action-creators/flashMessages */ "./resources/assets/js/store/action-creators/flashMessages/index.js");
/* harmony import */ var _ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ForgotPasswordForm */ "./resources/assets/js/pages/ForgotPassword/ForgotPasswordForm.jsx");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







const ForgotPasswordComponent = props => {
  const {
    submitForgotPassword
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordForm"], {
    onSubmit: submitForgotPassword
  });
};

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, dispatch => ({
  submitForgotPassword: async (values, {
    setErrors
  }) => {
    try {
      await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/forgot-password', values);
      utils_history__WEBPACK_IMPORTED_MODULE_4__["history"].push('/login');
      dispatch(Object(store_action_creators_flashMessages__WEBPACK_IMPORTED_MODULE_5__["flashMessage"])('success', 'The password reset request has been sent to your Email inbox.'));
    } catch (error) {
      setErrors(error.response.data);
    }
  }
}))(ForgotPasswordComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ForgotPasswordComponent, "ForgotPasswordComponent", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/ForgotPassword/ForgotPassword.jsx");
  reactHotLoader.register(_default, "default", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/ForgotPassword/ForgotPassword.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/ForgotPassword/ForgotPasswordForm.jsx":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/pages/ForgotPassword/ForgotPasswordForm.jsx ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordForm", function() { return ForgotPasswordForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var constants_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/styles */ "./resources/assets/js/constants/styles.js");
/* harmony import */ var constants_regexes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/regexes */ "./resources/assets/js/constants/regexes.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
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
  } else if (!constants_regexes__WEBPACK_IMPORTED_MODULE_4__["email"].test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const ForgotPasswordForm = ({
  onSubmit
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    validate: validate,
    onSubmit: onSubmit,
    initialValues: {
      email: ''
    }
  }, () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    name: "email",
    labelText: "Enter Your Email Address",
    component: components__WEBPACK_IMPORTED_MODULE_5__["TextFormLine"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: constants_styles__WEBPACK_IMPORTED_MODULE_3__["linkStyle"],
    to: "/login"
  }, "Back to Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_5__["NeutralButton"], {
    className: "ml-auto",
    type: "submit"
  }, "Request"))));
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(validate, "validate", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/ForgotPassword/ForgotPasswordForm.jsx");
  reactHotLoader.register(ForgotPasswordForm, "ForgotPasswordForm", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/ForgotPassword/ForgotPasswordForm.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbnN0YW50cy9yZWdleGVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvRm9yZ290UGFzc3dvcmQvRm9yZ290UGFzc3dvcmQuanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvRm9yZ290UGFzc3dvcmQvRm9yZ290UGFzc3dvcmRGb3JtLmpzeCJdLCJuYW1lcyI6WyJlbWFpbCIsIkZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IiwicHJvcHMiLCJzdWJtaXRGb3Jnb3RQYXNzd29yZCIsImNvbm5lY3QiLCJkaXNwYXRjaCIsInZhbHVlcyIsInNldEVycm9ycyIsImF4aW9zIiwicG9zdCIsImhpc3RvcnkiLCJwdXNoIiwiZmxhc2hNZXNzYWdlIiwiZXJyb3IiLCJyZXNwb25zZSIsImRhdGEiLCJ2YWxpZGF0ZSIsImVycm9ycyIsImVtYWlsUmVnZXgiLCJ0ZXN0IiwiRm9yZ290UGFzc3dvcmRGb3JtIiwib25TdWJtaXQiLCJUZXh0Rm9ybUxpbmUiLCJsaW5rU3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLEtBQUssR0FBRyx1SkFBZDs7Ozs7Ozs7OzswQkFBTUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBYjtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFTyxNQUFNQyx1QkFBdUIsR0FBR0MsS0FBSyxJQUFJO0FBQzlDLFFBQU07QUFBRUM7QUFBRixNQUEyQkQsS0FBakM7QUFDQSxTQUFPLDJEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRUM7QUFBOUIsSUFBUDtBQUNELENBSE07O2lCQUtRQywyREFBTyxDQUFDLElBQUQsRUFBT0MsUUFBUSxLQUFLO0FBQ3hDRixzQkFBb0IsRUFBRSxPQUFPRyxNQUFQLEVBQWU7QUFBRUM7QUFBRixHQUFmLEtBQWlDO0FBQ3JELFFBQUk7QUFDRixZQUFNQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsc0JBQVgsRUFBbUNILE1BQW5DLENBQU47QUFFQUksMkRBQU8sQ0FBQ0MsSUFBUixDQUFhLFFBQWI7QUFDQU4sY0FBUSxDQUNOTyx3RkFBWSxDQUNWLFNBRFUsRUFFViwrREFGVSxDQUROLENBQVI7QUFNRCxLQVZELENBVUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2ROLGVBQVMsQ0FBQ00sS0FBSyxDQUFDQyxRQUFOLENBQWVDLElBQWhCLENBQVQ7QUFDRDtBQUNGO0FBZnVDLENBQUwsQ0FBZixDQUFQLENBZ0JYZCx1QkFoQlcsQzs7QUFBQTs7Ozs7Ozs7OzswQkFMRkEsdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUYjtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTWUsUUFBUSxHQUFHLENBQUNWLE1BQU0sR0FBRyxFQUFWLEtBQWlCO0FBQ2hDLE1BQUlXLE1BQU0sR0FBRyxFQUFiOztBQUVBLE1BQUksQ0FBQ1gsTUFBTSxDQUFDTixLQUFaLEVBQW1CO0FBQ2pCaUIsVUFBTSxDQUFDakIsS0FBUCxHQUFlLHdCQUFmO0FBQ0QsR0FGRCxNQUVPLElBQUksQ0FBQ2tCLHVEQUFVLENBQUNDLElBQVgsQ0FBZ0JiLE1BQU0sQ0FBQ04sS0FBdkIsQ0FBTCxFQUFvQztBQUN6Q2lCLFVBQU0sQ0FBQ2pCLEtBQVAsR0FBZSx1QkFBZjtBQUNEOztBQUVELFNBQU9pQixNQUFQO0FBQ0QsQ0FWRDs7QUFZTyxNQUFNRyxrQkFBa0IsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUNsRCxTQUNFLDJEQUFDLDZDQUFEO0FBQ0UsWUFBUSxFQUFFTCxRQURaO0FBRUUsWUFBUSxFQUFFSyxRQUZaO0FBR0UsaUJBQWEsRUFBRTtBQUFFckIsV0FBSyxFQUFFO0FBQVQ7QUFIakIsS0FLRyxNQUNDLDJEQUFDLDJDQUFELFFBQ0UsMkRBQUMsNENBQUQ7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFFBQUksRUFBQyxPQUZQO0FBR0UsYUFBUyxFQUFDLDBCQUhaO0FBSUUsYUFBUyxFQUFFc0IsdURBQVlBO0FBSnpCLElBREYsRUFRRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsMkRBQUMscURBQUQ7QUFBTSxhQUFTLEVBQUVDLDBEQUFqQjtBQUE0QixNQUFFLEVBQUM7QUFBL0IscUJBREYsRUFJRSwyREFBQyx3REFBRDtBQUFlLGFBQVMsRUFBQyxTQUF6QjtBQUFtQyxRQUFJLEVBQUM7QUFBeEMsZUFKRixDQVJGLENBTkosQ0FERjtBQTJCRCxDQTVCTTs7Ozs7Ozs7OzswQkFaRFAsUTswQkFZT0ksa0IiLCJmaWxlIjoianMvNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBlbWFpbCA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBoaXN0b3J5IH0gZnJvbSAndXRpbHMvaGlzdG9yeSdcbmltcG9ydCB7IGZsYXNoTWVzc2FnZSB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9mbGFzaE1lc3NhZ2VzJ1xuXG5pbXBvcnQgeyBGb3Jnb3RQYXNzd29yZEZvcm0gfSBmcm9tICcuL0ZvcmdvdFBhc3N3b3JkRm9ybSdcblxuZXhwb3J0IGNvbnN0IEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHN1Ym1pdEZvcmdvdFBhc3N3b3JkIH0gPSBwcm9wc1xuICByZXR1cm4gPEZvcmdvdFBhc3N3b3JkRm9ybSBvblN1Ym1pdD17c3VibWl0Rm9yZ290UGFzc3dvcmR9IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgZGlzcGF0Y2ggPT4gKHtcbiAgc3VibWl0Rm9yZ290UGFzc3dvcmQ6IGFzeW5jICh2YWx1ZXMsIHsgc2V0RXJyb3JzIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9mb3Jnb3QtcGFzc3dvcmQnLCB2YWx1ZXMpXG5cbiAgICAgIGhpc3RvcnkucHVzaCgnL2xvZ2luJylcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBmbGFzaE1lc3NhZ2UoXG4gICAgICAgICAgJ3N1Y2Nlc3MnLFxuICAgICAgICAgICdUaGUgcGFzc3dvcmQgcmVzZXQgcmVxdWVzdCBoYXMgYmVlbiBzZW50IHRvIHlvdXIgRW1haWwgaW5ib3guJ1xuICAgICAgICApXG4gICAgICApXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9ycyhlcnJvci5yZXNwb25zZS5kYXRhKVxuICAgIH1cbiAgfVxufSkpKEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50KVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJ1xuXG5pbXBvcnQgeyBsaW5rU3R5bGUgfSBmcm9tICdjb25zdGFudHMvc3R5bGVzJ1xuaW1wb3J0IHsgZW1haWwgYXMgZW1haWxSZWdleCB9IGZyb20gJ2NvbnN0YW50cy9yZWdleGVzJ1xuaW1wb3J0IHsgTmV1dHJhbEJ1dHRvbiwgVGV4dEZvcm1MaW5lIH0gZnJvbSAnY29tcG9uZW50cydcblxuY29uc3QgdmFsaWRhdGUgPSAodmFsdWVzID0ge30pID0+IHtcbiAgbGV0IGVycm9ycyA9IHt9XG5cbiAgaWYgKCF2YWx1ZXMuZW1haWwpIHtcbiAgICBlcnJvcnMuZW1haWwgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcbiAgfSBlbHNlIGlmICghZW1haWxSZWdleC50ZXN0KHZhbHVlcy5lbWFpbCkpIHtcbiAgICBlcnJvcnMuZW1haWwgPSAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJ1xuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuXG5leHBvcnQgY29uc3QgRm9yZ290UGFzc3dvcmRGb3JtID0gKHsgb25TdWJtaXQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGb3JtaWtcbiAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cbiAgICAgIGluaXRpYWxWYWx1ZXM9e3sgZW1haWw6ICcnIH19XG4gICAgPlxuICAgICAgeygpID0+IChcbiAgICAgICAgPEZvcm0+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgbGFiZWxUZXh0PVwiRW50ZXIgWW91ciBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEZvcm1MaW5lfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2xpbmtTdHlsZX0gdG89XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgQmFjayB0byBMb2dpblxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPE5ldXRyYWxCdXR0b24gY2xhc3NOYW1lPVwibWwtYXV0b1wiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgUmVxdWVzdFxuICAgICAgICAgICAgPC9OZXV0cmFsQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Zvcm0+XG4gICAgICApfVxuICAgIDwvRm9ybWlrPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9