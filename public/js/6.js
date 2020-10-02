(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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

/***/ "./resources/assets/js/pages/SignUp/SignUp.jsx":
/*!*****************************************************!*\
  !*** ./resources/assets/js/pages/SignUp/SignUp.jsx ***!
  \*****************************************************/
/*! exports provided: SignUp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp", function() { return SignUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/history */ "./resources/assets/js/utils/history.js");
/* harmony import */ var _SignUpForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignUpForm */ "./resources/assets/js/pages/SignUp/SignUpForm.jsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






const parseValidationErrorResponse = response => {
  let errors = {};

  if (response.email && response.email.Unique) {
    errors.email = 'This email already exists, please try a different email.';
  }

  return errors;
};

const SignUp = () => {
  const onSubmit = signUpData => {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/signup', signUpData).then(response => {
      if (response.status === 200) {
        utils_history__WEBPACK_IMPORTED_MODULE_2__["history"].push('/');
      }
    }).catch(error => {
      if (error.response.status === 422) {// throw new SubmissionError(
        //   parseValidationErrorResponse(error.response.data.messages)
        // )
      }
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SignUpForm__WEBPACK_IMPORTED_MODULE_3__["SignUpForm"], {
    onSubmit: onSubmit
  });
};
const _default = SignUp;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(parseValidationErrorResponse, "parseValidationErrorResponse", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/SignUp/SignUp.jsx");
  reactHotLoader.register(SignUp, "SignUp", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/SignUp/SignUp.jsx");
  reactHotLoader.register(_default, "default", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/SignUp/SignUp.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/SignUp/SignUpForm.jsx":
/*!*********************************************************!*\
  !*** ./resources/assets/js/pages/SignUp/SignUpForm.jsx ***!
  \*********************************************************/
/*! exports provided: SignUpForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpForm", function() { return SignUpForm; });
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

  if (!values.first_name) {
    errors.first_name = 'This field is required';
  }

  if (!values.last_name) {
    errors.last_name = 'This field is required';
  }

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

const SignUpForm = ({
  onSubmit
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
  validate: validate,
  onSubmit: onSubmit,
  initialValues: {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }
}, () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  component: components__WEBPACK_IMPORTED_MODULE_5__["TextFormLine"],
  type: "text",
  name: "first_name",
  labelText: "First Name"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  component: components__WEBPACK_IMPORTED_MODULE_5__["TextFormLine"],
  type: "text",
  name: "last_name",
  labelText: "Last Name"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  component: components__WEBPACK_IMPORTED_MODULE_5__["TextFormLine"],
  type: "text",
  name: "email",
  labelText: "Email"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  component: components__WEBPACK_IMPORTED_MODULE_5__["PasswordFormLine"],
  type: "password",
  name: "password",
  labelText: "Password"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "flex items-center"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  className: constants_styles__WEBPACK_IMPORTED_MODULE_3__["linkStyle"],
  to: "/login"
}, "Or Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_5__["NeutralButton"], {
  className: "ml-auto",
  type: "submit"
}, "Sign Up"))));
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(validate, "validate", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/SignUp/SignUpForm.jsx");
  reactHotLoader.register(SignUpForm, "SignUpForm", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/SignUp/SignUpForm.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbnN0YW50cy9yZWdleGVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2lnblVwL1NpZ25VcC5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9TaWduVXAvU2lnblVwRm9ybS5qc3giXSwibmFtZXMiOlsiZW1haWwiLCJwYXJzZVZhbGlkYXRpb25FcnJvclJlc3BvbnNlIiwicmVzcG9uc2UiLCJlcnJvcnMiLCJVbmlxdWUiLCJTaWduVXAiLCJvblN1Ym1pdCIsInNpZ25VcERhdGEiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwic3RhdHVzIiwiaGlzdG9yeSIsInB1c2giLCJjYXRjaCIsImVycm9yIiwidmFsaWRhdGUiLCJ2YWx1ZXMiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWxSZWdleCIsInRlc3QiLCJwYXNzd29yZCIsIlNpZ25VcEZvcm0iLCJUZXh0Rm9ybUxpbmUiLCJQYXNzd29yZEZvcm1MaW5lIiwibGlua1N0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxLQUFLLEdBQUcsdUpBQWQ7Ozs7Ozs7Ozs7MEJBQU1BLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWI7QUFDQTtBQUVBO0FBRUE7O0FBRUEsTUFBTUMsNEJBQTRCLEdBQUdDLFFBQVEsSUFBSTtBQUMvQyxNQUFJQyxNQUFNLEdBQUcsRUFBYjs7QUFFQSxNQUFJRCxRQUFRLENBQUNGLEtBQVQsSUFBa0JFLFFBQVEsQ0FBQ0YsS0FBVCxDQUFlSSxNQUFyQyxFQUE2QztBQUMzQ0QsVUFBTSxDQUFDSCxLQUFQLEdBQWUsMERBQWY7QUFDRDs7QUFFRCxTQUFPRyxNQUFQO0FBQ0QsQ0FSRDs7QUFVTyxNQUFNRSxNQUFNLEdBQUcsTUFBTTtBQUMxQixRQUFNQyxRQUFRLEdBQUdDLFVBQVUs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LFdBQVMsRUFBQyxTQUF6QjtBQUFtQyxNQUFJLEVBQUM7QUFBeEMsYUFKRixDQXpCRixDQU5KLENBREs7Ozs7Ozs7Ozs7MEJBeEJEVixROzBCQXdCT08sVSIsImZpbGUiOiJqcy82LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGVtYWlsID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmltcG9ydCB7IGhpc3RvcnkgfSBmcm9tICd1dGlscy9oaXN0b3J5J1xuXG5pbXBvcnQgeyBTaWduVXBGb3JtIH0gZnJvbSAnLi9TaWduVXBGb3JtJ1xuXG5jb25zdCBwYXJzZVZhbGlkYXRpb25FcnJvclJlc3BvbnNlID0gcmVzcG9uc2UgPT4ge1xuICBsZXQgZXJyb3JzID0ge31cblxuICBpZiAocmVzcG9uc2UuZW1haWwgJiYgcmVzcG9uc2UuZW1haWwuVW5pcXVlKSB7XG4gICAgZXJyb3JzLmVtYWlsID0gJ1RoaXMgZW1haWwgYWxyZWFkeSBleGlzdHMsIHBsZWFzZSB0cnkgYSBkaWZmZXJlbnQgZW1haWwuJ1xuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuXG5leHBvcnQgY29uc3QgU2lnblVwID0gKCkgPT4ge1xuICBjb25zdCBvblN1Ym1pdCA9IHNpZ25VcERhdGEgPT4ge1xuICAgIHJldHVybiBheGlvc1xuICAgICAgLnBvc3QoJy9hcGkvc2lnbnVwJywgc2lnblVwRGF0YSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgaGlzdG9yeS5wdXNoKCcvJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xuICAgICAgICAgIC8vIHRocm93IG5ldyBTdWJtaXNzaW9uRXJyb3IoXG4gICAgICAgICAgLy8gICBwYXJzZVZhbGlkYXRpb25FcnJvclJlc3BvbnNlKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZXMpXG4gICAgICAgICAgLy8gKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG5cbiAgcmV0dXJuIDxTaWduVXBGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnblVwXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnXG5cbmltcG9ydCB7IGxpbmtTdHlsZSB9IGZyb20gJ2NvbnN0YW50cy9zdHlsZXMnXG5pbXBvcnQgeyBlbWFpbCBhcyBlbWFpbFJlZ2V4IH0gZnJvbSAnY29uc3RhbnRzL3JlZ2V4ZXMnXG5pbXBvcnQgeyBQYXNzd29yZEZvcm1MaW5lLCBUZXh0Rm9ybUxpbmUsIE5ldXRyYWxCdXR0b24gfSBmcm9tICdjb21wb25lbnRzJ1xuXG5jb25zdCB2YWxpZGF0ZSA9ICh2YWx1ZXMgPSB7fSkgPT4ge1xuICBsZXQgZXJyb3JzID0ge31cblxuICBpZiAoIXZhbHVlcy5maXJzdF9uYW1lKSB7XG4gICAgZXJyb3JzLmZpcnN0X25hbWUgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcbiAgfVxuXG4gIGlmICghdmFsdWVzLmxhc3RfbmFtZSkge1xuICAgIGVycm9ycy5sYXN0X25hbWUgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcbiAgfVxuXG4gIGlmICghdmFsdWVzLmVtYWlsKSB7XG4gICAgZXJyb3JzLmVtYWlsID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXG4gIH0gZWxzZSBpZiAoIWVtYWlsUmVnZXgudGVzdCh2YWx1ZXMuZW1haWwpKSB7XG4gICAgZXJyb3JzLmVtYWlsID0gJ0ludmFsaWQgZW1haWwgYWRkcmVzcydcbiAgfVxuXG4gIGlmICghdmFsdWVzLnBhc3N3b3JkKSB7XG4gICAgZXJyb3JzLnBhc3N3b3JkID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG5cbmV4cG9ydCBjb25zdCBTaWduVXBGb3JtID0gKHsgb25TdWJtaXQgfSkgPT4gKFxuICA8Rm9ybWlrXG4gICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cbiAgICBpbml0aWFsVmFsdWVzPXt7IGZpcnN0X25hbWU6ICcnLCBsYXN0X25hbWU6ICcnLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJyB9fVxuICA+XG4gICAgeygpID0+IChcbiAgICAgIDxGb3JtPlxuICAgICAgICA8RmllbGRcbiAgICAgICAgICBjb21wb25lbnQ9e1RleHRGb3JtTGluZX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cImZpcnN0X25hbWVcIlxuICAgICAgICAgIGxhYmVsVGV4dD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAvPlxuICAgICAgICA8RmllbGRcbiAgICAgICAgICBjb21wb25lbnQ9e1RleHRGb3JtTGluZX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cImxhc3RfbmFtZVwiXG4gICAgICAgICAgbGFiZWxUZXh0PVwiTGFzdCBOYW1lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEZpZWxkXG4gICAgICAgICAgY29tcG9uZW50PXtUZXh0Rm9ybUxpbmV9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgbGFiZWxUZXh0PVwiRW1haWxcIlxuICAgICAgICAvPlxuICAgICAgICA8RmllbGRcbiAgICAgICAgICBjb21wb25lbnQ9e1Bhc3N3b3JkRm9ybUxpbmV9XG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGxhYmVsVGV4dD1cIlBhc3N3b3JkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17bGlua1N0eWxlfSB0bz1cIi9sb2dpblwiPlxuICAgICAgICAgICAgT3IgTG9naW5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPE5ldXRyYWxCdXR0b24gY2xhc3NOYW1lPVwibWwtYXV0b1wiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICA8L05ldXRyYWxCdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gb3JtPlxuICAgICl9XG4gIDwvRm9ybWlrPlxuKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==