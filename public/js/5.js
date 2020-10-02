(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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

/***/ "./resources/assets/js/pages/LogIn/LogIn.jsx":
/*!***************************************************!*\
  !*** ./resources/assets/js/pages/LogIn/LogIn.jsx ***!
  \***************************************************/
/*! exports provided: LogInComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var utils_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/history */ "./resources/assets/js/utils/history.js");
/* harmony import */ var store_action_creators_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/action-creators/session */ "./resources/assets/js/store/action-creators/session/index.js");
/* harmony import */ var _LogInForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LogInForm */ "./resources/assets/js/pages/LogIn/LogInForm.jsx");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






const LogInComponent = props => {
  const {
    attemptLogin
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LogInForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onSubmit: attemptLogin
  });
};

const parseValidationFromResponse = response => {
  let errors = {};

  if (response.errors === true && response.message === 'Incorrect login details') {
    errors.email = 'Incorrect login details';
  }

  return errors;
};

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, dispatch => ({
  attemptLogin: async (loginDetails, {
    setErrors
  }) => {
    try {
      await dispatch(Object(store_action_creators_session__WEBPACK_IMPORTED_MODULE_4__["logIn"])(loginDetails));
      utils_history__WEBPACK_IMPORTED_MODULE_3__["history"].push('/');
    } catch (error) {
      setErrors(parseValidationFromResponse(error.response.data));
    }
  }
}))(LogInComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LogInComponent, "LogInComponent", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/LogIn/LogIn.jsx");
  reactHotLoader.register(parseValidationFromResponse, "parseValidationFromResponse", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/LogIn/LogIn.jsx");
  reactHotLoader.register(_default, "default", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/LogIn/LogIn.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/LogIn/LogInForm.jsx":
/*!*******************************************************!*\
  !*** ./resources/assets/js/pages/LogIn/LogInForm.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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








const validateLogin = (values = {}) => {
  let errors = {};

  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!constants_regexes__WEBPACK_IMPORTED_MODULE_4__["email"].test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'This field is required';
  }

  return errors;
};

const _default = ({
  onSubmit
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    onSubmit: onSubmit,
    validate: validateLogin,
    initialValues: {
      email: '',
      password: ''
    }
  }, props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    name: "email",
    labelText: "Email",
    component: components__WEBPACK_IMPORTED_MODULE_5__["TextFormLine"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "password",
    name: "password",
    labelText: "Password",
    component: components__WEBPACK_IMPORTED_MODULE_5__["PasswordFormLine"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: constants_styles__WEBPACK_IMPORTED_MODULE_3__["linkStyle"],
    to: "/signup"
  }, "Or Signup"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "inline-block px-2"
  }, "|"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: constants_styles__WEBPACK_IMPORTED_MODULE_3__["linkStyle"],
    to: "/forgot-password"
  }, "Forgot Password?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_5__["NeutralButton"], {
    className: "ml-auto",
    type: "submit"
  }, "Log In"))));
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(validateLogin, "validateLogin", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/LogIn/LogInForm.jsx");
  reactHotLoader.register(_default, "default", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/LogIn/LogInForm.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbnN0YW50cy9yZWdleGVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvTG9nSW4vTG9nSW4uanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvTG9nSW4vTG9nSW5Gb3JtLmpzeCJdLCJuYW1lcyI6WyJlbWFpbCIsIkxvZ0luQ29tcG9uZW50IiwicHJvcHMiLCJhdHRlbXB0TG9naW4iLCJwYXJzZVZhbGlkYXRpb25Gcm9tUmVzcG9uc2UiLCJyZXNwb25zZSIsImVycm9ycyIsIm1lc3NhZ2UiLCJjb25uZWN0IiwiZGlzcGF0Y2giLCJsb2dpbkRldGFpbHMiLCJzZXRFcnJvcnMiLCJsb2dJbiIsImhpc3RvcnkiLCJwdXNoIiwiZXJyb3IiLCJkYXRhIiwidmFsaWRhdGVMb2dpbiIsInZhbHVlcyIsImVtYWlsUmVnZXgiLCJ0ZXN0IiwicGFzc3dvcmQiLCJvblN1Ym1pdCIsIlRleHRGb3JtTGluZSIsIlBhc3N3b3JkRm9ybUxpbmUiLCJsaW5rU3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLEtBQUssR0FBRyx1SkFBZDs7Ozs7Ozs7OzswQkFBTUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWI7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVPLE1BQU1DLGNBQWMsR0FBR0MsS0FBSyxJQUFJO0FBQ3JDLFFBQU07QUFBRUM7QUFBRixNQUFtQkQsS0FBekI7QUFFQSxTQUFPLDJEQUFDLGtEQUFEO0FBQVcsWUFBUSxFQUFFQztBQUFyQixJQUFQO0FBQ0QsQ0FKTTs7QUFNUCxNQUFNQywyQkFBMkIsR0FBR0MsUUFBUSxJQUFJO0FBQzlDLE1BQUlDLE1BQU0sR0FBRyxFQUFiOztBQUNBLE1BQ0VELFFBQVEsQ0FBQ0MsTUFBVCxLQUFvQixJQUFwQixJQUNBRCxRQUFRLENBQUNFLE9BQVQsS0FBcUIseUJBRnZCLEVBR0U7QUFDQUQsVUFBTSxDQUFDTixLQUFQLEdBQWUseUJBQWY7QUFDRDs7QUFFRCxTQUFPTSxNQUFQO0FBQ0QsQ0FWRDs7aUJBWWVFLDJEQUFPLENBQUMsSUFBRCxFQUFPQyxRQUFRLEtBQUs7QUFDeENOLGNBQVksRUFBRSxPQUFPTyxZQUFQLEVBQXFCO0FBQUVDO0FBQUYsR0FBckIsS0FBdUM7QUFDbkQsUUFBSTtBQUNGLFlBQU1GLFFBQVEsQ0FBQ0csMkVBQUssQ0FBQ0YsWUFBRCxDQUFOLENBQWQ7QUFDQUcsMkRBQU8sQ0FBQ0MsSUFBUixDQUFhLEdBQWI7QUFDRCxLQUhELENBR0UsT0FBT0MsS0FBUCxFQUFjO0FBQ2RKLGVBQVMsQ0FBQ1AsMkJBQTJCLENBQUNXLEtBQUssQ0FBQ1YsUUFBTixDQUFlVyxJQUFoQixDQUE1QixDQUFUO0FBQ0Q7QUFDRjtBQVJ1QyxDQUFMLENBQWYsQ0FBUCxDQVNYZixjQVRXLEM7O0FBQUE7Ozs7Ozs7Ozs7MEJBbEJGQSxjOzBCQU1QRywyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZE47QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU1hLGFBQWEsR0FBRyxDQUFDQyxNQUFNLEdBQUcsRUFBVixLQUFpQjtBQUNyQyxNQUFJWixNQUFNLEdBQUcsRUFBYjs7QUFFQSxNQUFJLENBQUNZLE1BQU0sQ0FBQ2xCLEtBQVosRUFBbUI7QUFDakJNLFVBQU0sQ0FBQ04sS0FBUCxHQUFlLHdCQUFmO0FBQ0QsR0FGRCxNQUVPLElBQUksQ0FBQ21CLHVEQUFVLENBQUNDLElBQVgsQ0FBZ0JGLE1BQU0sQ0FBQ2xCLEtBQXZCLENBQUwsRUFBb0M7QUFDekNNLFVBQU0sQ0FBQ04sS0FBUCxHQUFlLHVCQUFmO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDa0IsTUFBTSxDQUFDRyxRQUFaLEVBQXNCO0FBQ3BCZixVQUFNLENBQUNlLFFBQVAsR0FBa0Isd0JBQWxCO0FBQ0Q7O0FBRUQsU0FBT2YsTUFBUDtBQUNELENBZEQ7O2lCQWdCZSxDQUFDO0FBQUVnQjtBQUFGLENBQUQsS0FBa0I7QUFDL0IsU0FDRSwyREFBQyw2Q0FBRDtBQUNFLFlBQVEsRUFBRUEsUUFEWjtBQUVFLFlBQVEsRUFBRUwsYUFGWjtBQUdFLGlCQUFhLEVBQUU7QUFBRWpCLFdBQUssRUFBRSxFQUFUO0FBQWFxQixjQUFRLEVBQUU7QUFBdkI7QUFIakIsS0FLR25CLEtBQUssSUFDSiwyREFBQywyQ0FBRCxRQUNFLDJEQUFDLDRDQUFEO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLGFBQVMsRUFBQyxPQUhaO0FBSUUsYUFBUyxFQUFFcUIsdURBQVlBO0FBSnpCLElBREYsRUFPRSwyREFBQyw0Q0FBRDtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsUUFBSSxFQUFDLFVBRlA7QUFHRSxhQUFTLEVBQUMsVUFIWjtBQUlFLGFBQVMsRUFBRUMsMkRBQWdCQTtBQUo3QixJQVBGLEVBYUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLDJEQUFDLHFEQUFEO0FBQU0sYUFBUyxFQUFFQywwREFBakI7QUFBNEIsTUFBRSxFQUFDO0FBQS9CLGlCQURGLEVBSUU7QUFBTSxhQUFTLEVBQUM7QUFBaEIsU0FKRixFQUtFLDJEQUFDLHFEQUFEO0FBQU0sYUFBUyxFQUFFQSwwREFBakI7QUFBNEIsTUFBRSxFQUFDO0FBQS9CLHdCQUxGLEVBUUUsMkRBQUMsd0RBQUQ7QUFBZSxhQUFTLEVBQUMsU0FBekI7QUFBbUMsUUFBSSxFQUFDO0FBQXhDLGNBUkYsQ0FiRixDQU5KLENBREY7QUFvQ0QsQzs7QUFyQ2M7Ozs7Ozs7Ozs7MEJBaEJUUixhIiwiZmlsZSI6ImpzLzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZW1haWwgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgaGlzdG9yeSB9IGZyb20gJ3V0aWxzL2hpc3RvcnknXG5pbXBvcnQgeyBsb2dJbiB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9zZXNzaW9uJ1xuXG5pbXBvcnQgTG9nSW5Gb3JtIGZyb20gJy4vTG9nSW5Gb3JtJ1xuXG5leHBvcnQgY29uc3QgTG9nSW5Db21wb25lbnQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgYXR0ZW1wdExvZ2luIH0gPSBwcm9wc1xuXG4gIHJldHVybiA8TG9nSW5Gb3JtIG9uU3VibWl0PXthdHRlbXB0TG9naW59IC8+XG59XG5cbmNvbnN0IHBhcnNlVmFsaWRhdGlvbkZyb21SZXNwb25zZSA9IHJlc3BvbnNlID0+IHtcbiAgbGV0IGVycm9ycyA9IHt9XG4gIGlmIChcbiAgICByZXNwb25zZS5lcnJvcnMgPT09IHRydWUgJiZcbiAgICByZXNwb25zZS5tZXNzYWdlID09PSAnSW5jb3JyZWN0IGxvZ2luIGRldGFpbHMnXG4gICkge1xuICAgIGVycm9ycy5lbWFpbCA9ICdJbmNvcnJlY3QgbG9naW4gZGV0YWlscydcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBkaXNwYXRjaCA9PiAoe1xuICBhdHRlbXB0TG9naW46IGFzeW5jIChsb2dpbkRldGFpbHMsIHsgc2V0RXJyb3JzIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGlzcGF0Y2gobG9nSW4obG9naW5EZXRhaWxzKSlcbiAgICAgIGhpc3RvcnkucHVzaCgnLycpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9ycyhwYXJzZVZhbGlkYXRpb25Gcm9tUmVzcG9uc2UoZXJyb3IucmVzcG9uc2UuZGF0YSkpXG4gICAgfVxuICB9XG59KSkoTG9nSW5Db21wb25lbnQpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnXG5cbmltcG9ydCB7IGxpbmtTdHlsZSB9IGZyb20gJ2NvbnN0YW50cy9zdHlsZXMnXG5pbXBvcnQgeyBlbWFpbCBhcyBlbWFpbFJlZ2V4IH0gZnJvbSAnY29uc3RhbnRzL3JlZ2V4ZXMnXG5pbXBvcnQgeyBQYXNzd29yZEZvcm1MaW5lLCBUZXh0Rm9ybUxpbmUsIE5ldXRyYWxCdXR0b24gfSBmcm9tICdjb21wb25lbnRzJ1xuXG5jb25zdCB2YWxpZGF0ZUxvZ2luID0gKHZhbHVlcyA9IHt9KSA9PiB7XG4gIGxldCBlcnJvcnMgPSB7fVxuXG4gIGlmICghdmFsdWVzLmVtYWlsKSB7XG4gICAgZXJyb3JzLmVtYWlsID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXG4gIH0gZWxzZSBpZiAoIWVtYWlsUmVnZXgudGVzdCh2YWx1ZXMuZW1haWwpKSB7XG4gICAgZXJyb3JzLmVtYWlsID0gJ0ludmFsaWQgZW1haWwgYWRkcmVzcydcbiAgfVxuXG4gIGlmICghdmFsdWVzLnBhc3N3b3JkKSB7XG4gICAgZXJyb3JzLnBhc3N3b3JkID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IG9uU3VibWl0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybWlrXG4gICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICB2YWxpZGF0ZT17dmFsaWRhdGVMb2dpbn1cbiAgICAgIGluaXRpYWxWYWx1ZXM9e3sgZW1haWw6ICcnLCBwYXNzd29yZDogJycgfX1cbiAgICA+XG4gICAgICB7cHJvcHMgPT4gKFxuICAgICAgICA8Rm9ybT5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbFRleHQ9XCJFbWFpbFwiXG4gICAgICAgICAgICBjb21wb25lbnQ9e1RleHRGb3JtTGluZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBsYWJlbFRleHQ9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICBjb21wb25lbnQ9e1Bhc3N3b3JkRm9ybUxpbmV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2xpbmtTdHlsZX0gdG89XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICAgIE9yIFNpZ251cFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB4LTJcIj58PC9zcGFuPlxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtsaW5rU3R5bGV9IHRvPVwiL2ZvcmdvdC1wYXNzd29yZFwiPlxuICAgICAgICAgICAgICBGb3Jnb3QgUGFzc3dvcmQ/XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TmV1dHJhbEJ1dHRvbiBjbGFzc05hbWU9XCJtbC1hdXRvXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICBMb2cgSW5cbiAgICAgICAgICAgIDwvTmV1dHJhbEJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgKX1cbiAgICA8L0Zvcm1paz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==