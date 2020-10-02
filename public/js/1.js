(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

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

/***/ "./resources/assets/js/pages/Settings/Forms/AppSettingsForm.jsx":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/pages/Settings/Forms/AppSettingsForm.jsx ***!
  \**********************************************************************/
/*! exports provided: AppSettingsForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettingsForm", function() { return AppSettingsForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


const AppSettingsForm = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Application Settings Placeholder");
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppSettingsForm, "AppSettingsForm", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/Settings/Forms/AppSettingsForm.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Settings/Forms/BillingSettingsForm.jsx":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/pages/Settings/Forms/BillingSettingsForm.jsx ***!
  \**************************************************************************/
/*! exports provided: BillingSettingsForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingSettingsForm", function() { return BillingSettingsForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


const BillingSettingsForm = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Billing Settings Placeholder");
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BillingSettingsForm, "BillingSettingsForm", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/Settings/Forms/BillingSettingsForm.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Settings/Forms/ChangePasswordForm.jsx":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/pages/Settings/Forms/ChangePasswordForm.jsx ***!
  \*************************************************************************/
/*! exports provided: ChangePasswordForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordForm", function() { return ChangePasswordForm; });
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
  const nonEmptyFieldNames = ['old_password', 'new_password', 'new_password_confirmation'];
  nonEmptyFieldNames.forEach(fieldName => {
    if (!values[fieldName]) {
      errors[fieldName] = 'This field is required';
    }
  });

  if (values.new_password && values.new_password_confirmation !== values.new_password) {
    errors.new_password_confirmation = 'This password does not match the new password you entered';
  }

  return errors;
};

const ChangePasswordForm = ({
  onSubmit
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
  validate: validate,
  onSubmit: onSubmit,
  initialValues: {
    old_password: '',
    new_password: '',
    new_password_confirmation: ''
  }
}, props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
  className: "mb-2",
  name: "old_password",
  component: components__WEBPACK_IMPORTED_MODULE_2__["PasswordFormLine"],
  labelText: "Enter your old password"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "flex items-start mb-4"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
  name: "new_password",
  className: "flex-grow",
  labelText: "New Password",
  component: components__WEBPACK_IMPORTED_MODULE_2__["PasswordFormLine"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
  className: "flex-grow pl-4",
  component: components__WEBPACK_IMPORTED_MODULE_2__["PasswordFormLine"],
  name: "new_password_confirmation",
  labelText: "Repeat your new password"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "flex border-grey-light"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_2__["PositiveButton"], {
  type: "submit",
  className: "ml-auto"
}, "Change Password"))));
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(validate, "validate", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/Settings/Forms/ChangePasswordForm.jsx");
  reactHotLoader.register(ChangePasswordForm, "ChangePasswordForm", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/Settings/Forms/ChangePasswordForm.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Settings/Forms/UserSettingsForm.jsx":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/pages/Settings/Forms/UserSettingsForm.jsx ***!
  \***********************************************************************/
/*! exports provided: UserSettingsForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsForm", function() { return UserSettingsForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var constants_regexes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/regexes */ "./resources/assets/js/constants/regexes.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
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
  } else if (!constants_regexes__WEBPACK_IMPORTED_MODULE_3__["email"].test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const UserSettingsFormComponent = ({
  user,
  onSubmit,
  className = '',
  avatarUploadHandler
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
  validate: validate,
  onSubmit: onSubmit,
  initialValues: user,
  validateOnChange: false
}, () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
  className: className
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "flex items-center my-4"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  name: "avatar",
  component: components__WEBPACK_IMPORTED_MODULE_4__["PictureUpload"],
  uploadHandler: avatarUploadHandler,
  className: "mr-10"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "flex-grow"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  name: "first_name",
  component: components__WEBPACK_IMPORTED_MODULE_4__["TextFormLine"],
  labelText: "First Name"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  name: "last_name",
  component: components__WEBPACK_IMPORTED_MODULE_4__["TextFormLine"],
  labelText: "Last Name"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  name: "email",
  component: components__WEBPACK_IMPORTED_MODULE_4__["TextFormLine"],
  labelText: "Email"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "flex border-grey-light"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_4__["PositiveButton"], {
  type: "submit",
  className: "ml-auto"
}, "Save User Details"))));

const UserSettingsForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => {
  const {
    session: {
      currentUser
    }
  } = state;
  return {
    user: state.entities.users[currentUser]
  };
}, null)(UserSettingsFormComponent);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(validate, "validate", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/Settings/Forms/UserSettingsForm.jsx");
  reactHotLoader.register(UserSettingsFormComponent, "UserSettingsFormComponent", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/Settings/Forms/UserSettingsForm.jsx");
  reactHotLoader.register(UserSettingsForm, "UserSettingsForm", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/Settings/Forms/UserSettingsForm.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Settings/Forms/index.js":
/*!***********************************************************!*\
  !*** ./resources/assets/js/pages/Settings/Forms/index.js ***!
  \***********************************************************/
/*! exports provided: UserSettingsForm, ChangePasswordForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsForm */ "./resources/assets/js/pages/Settings/Forms/UserSettingsForm.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSettingsForm", function() { return _UserSettingsForm__WEBPACK_IMPORTED_MODULE_0__["UserSettingsForm"]; });

/* harmony import */ var _ChangePasswordForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangePasswordForm */ "./resources/assets/js/pages/Settings/Forms/ChangePasswordForm.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordForm", function() { return _ChangePasswordForm__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordForm"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




/***/ }),

/***/ "./resources/assets/js/pages/Settings/SettingsRoutes.jsx":
/*!***************************************************************!*\
  !*** ./resources/assets/js/pages/Settings/SettingsRoutes.jsx ***!
  \***************************************************************/
/*! exports provided: SettingsRoutes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutes", function() { return SettingsRoutes; });
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
/* harmony import */ var constants_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/styles */ "./resources/assets/js/constants/styles.js");
/* harmony import */ var _UserSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserSettings */ "./resources/assets/js/pages/Settings/UserSettings.jsx");
/* harmony import */ var _Forms_AppSettingsForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Forms/AppSettingsForm */ "./resources/assets/js/pages/Settings/Forms/AppSettingsForm.jsx");
/* harmony import */ var _Forms_BillingSettingsForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Forms/BillingSettingsForm */ "./resources/assets/js/pages/Settings/Forms/BillingSettingsForm.jsx");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};









const CardLink = ({
  to,
  className = '',
  children
}) => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: to,
    activeClassName: "bg-blue-lightest",
    className: "block border-b border-grey-light p-4 ".concat(constants_styles__WEBPACK_IMPORTED_MODULE_4__["linkStyle"], " ").concat(className)
  }, children);
};

const SettingsRoutes = ({
  match: {
    url: currentUrl
  }
}) => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "mb-4"
  }, "Settings"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "w-64"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CardLink, {
    to: "".concat(currentUrl, "/user")
  }, "Account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CardLink, {
    to: "".concat(currentUrl, "/app")
  }, "Application"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CardLink, {
    to: "".concat(currentUrl, "/billing")
  }, "Billing")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "flex-grow ml-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "".concat(currentUrl, "/user"),
    component: _UserSettings__WEBPACK_IMPORTED_MODULE_5__["UserSettings"]
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "".concat(currentUrl, "/app"),
    component: _Forms_AppSettingsForm__WEBPACK_IMPORTED_MODULE_6__["AppSettingsForm"]
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "".concat(currentUrl, "/billing"),
    component: _Forms_BillingSettingsForm__WEBPACK_IMPORTED_MODULE_7__["BillingSettingsForm"]
  }))))));
};
const _default = SettingsRoutes;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CardLink, "CardLink", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/Settings/SettingsRoutes.jsx");
  reactHotLoader.register(SettingsRoutes, "SettingsRoutes", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/Settings/SettingsRoutes.jsx");
  reactHotLoader.register(_default, "default", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/Settings/SettingsRoutes.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Settings/UserSettings.jsx":
/*!*************************************************************!*\
  !*** ./resources/assets/js/pages/Settings/UserSettings.jsx ***!
  \*************************************************************/
/*! exports provided: UserSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettings", function() { return UserSettings; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/actions */ "./resources/assets/js/store/actions.js");
/* harmony import */ var store_action_creators_avatars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/action-creators/avatars */ "./resources/assets/js/store/action-creators/avatars/index.js");
/* harmony import */ var store_action_creators_flashMessages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store/action-creators/flashMessages */ "./resources/assets/js/store/action-creators/flashMessages/index.js");
/* harmony import */ var store_action_creators_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store/action-creators/user */ "./resources/assets/js/store/action-creators/user/index.js");
/* harmony import */ var _Forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Forms */ "./resources/assets/js/pages/Settings/Forms/index.js");


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









const UserSettingsComponent = ({
  saveUserSettings,
  avatarUploadHandler,
  handleChangePassword
}) => {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "text-grey-darkest font-normal"
  }, "Your Details"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Forms__WEBPACK_IMPORTED_MODULE_7__["UserSettingsForm"], {
    className: "mb-4",
    onSubmit: saveUserSettings,
    avatarUploadHandler: avatarUploadHandler
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "text-grey-darkest font-normal"
  }, "Change Your Password"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Forms__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordForm"], {
    onSubmit: handleChangePassword
  }));
};

const userValidationFromResponse = values => {
  let errors = {};
  return errors;
};

const passwordValidationFromResponse = values => {
  let errors = {};
  return errors;
};

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUser]
});

const mapDispatchToProps = dispatch => ({
  saveUserSettings: async (userData, {
    setErrors
  }) => {
    const response = await dispatch(Object(store_action_creators_user__WEBPACK_IMPORTED_MODULE_6__["saveUser"])(userData));

    if (response.status === 400) {
      setErrors(userValidationFromResponse(response.data.data));
    }

    dispatch(Object(store_action_creators_flashMessages__WEBPACK_IMPORTED_MODULE_5__["flashMessage"])('success', 'Successfully saved user info', 4000));
    dispatch({
      type: store_actions__WEBPACK_IMPORTED_MODULE_3__["userActions"].SET_CURRENT_USER_INFO,
      users: response.data.data
    });
  },
  uploadUserAvatar: (fileData, userSlug) => dispatch(Object(store_action_creators_avatars__WEBPACK_IMPORTED_MODULE_4__["uploadUserAvatar"])(fileData, userSlug)),
  changePassword: async (data, {
    setErrors
  }) => {
    try {
      await dispatch(Object(store_action_creators_user__WEBPACK_IMPORTED_MODULE_6__["changePassword"])(data));
      dispatch(Object(store_action_creators_flashMessages__WEBPACK_IMPORTED_MODULE_5__["flashMessage"])('success', 'Your password was successfully changed', 4000));
    } catch (error) {
      if (error.response.status === 422) {
        setErrors(passwordValidationFromResponse(error.response.data.data));
      }

      if (error.response.status === 400) {
        setErrors({
          old_password: 'The current password was incorrect'
        });
      }
    }
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => _objectSpread({}, stateProps, {}, dispatchProps, {}, ownProps, {
  avatarUploadHandler: fileData => {
    return dispatchProps.uploadUserAvatar(fileData, stateProps.currentUser.slug);
  },
  handleChangePassword: values => {
    const data = _objectSpread({
      slug: stateProps.currentUser.slug
    }, values);

    return dispatchProps.changePassword(data);
  }
});

const UserSettings = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps, mergeProps)(UserSettingsComponent);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UserSettingsComponent, "UserSettingsComponent", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/Settings/UserSettings.jsx");
  reactHotLoader.register(userValidationFromResponse, "userValidationFromResponse", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/Settings/UserSettings.jsx");
  reactHotLoader.register(passwordValidationFromResponse, "passwordValidationFromResponse", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/Settings/UserSettings.jsx");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/Settings/UserSettings.jsx");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/Settings/UserSettings.jsx");
  reactHotLoader.register(mergeProps, "mergeProps", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/Settings/UserSettings.jsx");
  reactHotLoader.register(UserSettings, "UserSettings", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/pages/Settings/UserSettings.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/action-creators/avatars/avatars.js":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/avatars/avatars.js ***!
  \**********************************************************************/
/*! exports provided: uploadUserAvatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadUserAvatar", function() { return uploadUserAvatar; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var store_action_creators_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/action-creators/requests */ "./resources/assets/js/store/action-creators/requests/index.js");
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/actions */ "./resources/assets/js/store/actions.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




const uploadUserAvatar = (fileData, userSlug) => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_2__["makeRequest"])('set-user-avatar', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/avatars', fileData)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_3__["userActions"].SET_AVATAR,
    userSlug,
    avatar: response.data.fileUrl
  });
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(uploadUserAvatar, "uploadUserAvatar", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/store/action-creators/avatars/avatars.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/action-creators/avatars/index.js":
/*!********************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/avatars/index.js ***!
  \********************************************************************/
/*! exports provided: uploadUserAvatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _avatars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatars */ "./resources/assets/js/store/action-creators/avatars/avatars.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadUserAvatar", function() { return _avatars__WEBPACK_IMPORTED_MODULE_0__["uploadUserAvatar"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



/***/ }),

/***/ "./resources/assets/js/store/action-creators/requests/index.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/requests/index.js ***!
  \*********************************************************************/
/*! exports provided: makeRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests */ "./resources/assets/js/store/action-creators/requests/requests.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeRequest", function() { return _requests__WEBPACK_IMPORTED_MODULE_0__["makeRequest"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



/***/ }),

/***/ "./resources/assets/js/store/action-creators/requests/requests.js":
/*!************************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/requests/requests.js ***!
  \************************************************************************/
/*! exports provided: makeRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRequest", function() { return makeRequest; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/actions */ "./resources/assets/js/store/actions.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


const makeRequest = (actionType, requestCall) => async dispatch => {
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_1__["requestActions"].REQUEST,
    actionType
  });

  try {
    const data = await requestCall();
    dispatch({
      type: store_actions__WEBPACK_IMPORTED_MODULE_1__["requestActions"].SUCCESS,
      actionType
    });
    return data;
  } catch (error) {
    dispatch({
      type: store_actions__WEBPACK_IMPORTED_MODULE_1__["requestActions"].FAILED,
      error
    });
    throw error;
  }
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(makeRequest, "makeRequest", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/store/action-creators/requests/requests.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/action-creators/user/index.js":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/user/index.js ***!
  \*****************************************************************/
/*! exports provided: saveUser, changePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./resources/assets/js/store/action-creators/user/user.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveUser", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["saveUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changePassword", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["changePassword"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



/***/ }),

/***/ "./resources/assets/js/store/action-creators/user/user.js":
/*!****************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/user/user.js ***!
  \****************************************************************/
/*! exports provided: saveUser, changePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveUser", function() { return saveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePassword", function() { return changePassword; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var store_action_creators_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/action-creators/requests */ "./resources/assets/js/store/action-creators/requests/index.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



const saveUser = userData => async dispatch => {
  const {
    slug
  } = userData;
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_2__["makeRequest"])('save-user-settings', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/users/".concat(slug), userData)));
  return response;
};
const changePassword = data => async dispatch => {
  const {
    slug
  } = data;
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_2__["makeRequest"])('change-user-password', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/users/".concat(slug, "/update-password"), data)));
  return response;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(saveUser, "saveUser", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/store/action-creators/user/user.js");
  reactHotLoader.register(changePassword, "changePassword", "/Users/levmakarenko/PhpstormProjects/react-laravel-boilerplate/resources/assets/js/store/action-creators/user/user.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbnN0YW50cy9yZWdleGVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2V0dGluZ3MvRm9ybXMvQXBwU2V0dGluZ3NGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NldHRpbmdzL0Zvcm1zL0JpbGxpbmdTZXR0aW5nc0Zvcm0uanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2V0dGluZ3MvRm9ybXMvQ2hhbmdlUGFzc3dvcmRGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NldHRpbmdzL0Zvcm1zL1VzZXJTZXR0aW5nc0Zvcm0uanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2V0dGluZ3MvRm9ybXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9TZXR0aW5ncy9TZXR0aW5nc1JvdXRlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9TZXR0aW5ncy9Vc2VyU2V0dGluZ3MuanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvYWN0aW9uLWNyZWF0b3JzL2F2YXRhcnMvYXZhdGFycy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9yZXF1ZXN0cy9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL2FjdGlvbi1jcmVhdG9ycy91c2VyL3VzZXIuanMiXSwibmFtZXMiOlsiZW1haWwiLCJBcHBTZXR0aW5nc0Zvcm0iLCJCaWxsaW5nU2V0dGluZ3NGb3JtIiwidmFsaWRhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJub25FbXB0eUZpZWxkTmFtZXMiLCJmb3JFYWNoIiwiZmllbGROYW1lIiwibmV3X3Bhc3N3b3JkIiwibmV3X3Bhc3N3b3JkX2NvbmZpcm1hdGlvbiIsIkNoYW5nZVBhc3N3b3JkRm9ybSIsIm9uU3VibWl0Iiwib2xkX3Bhc3N3b3JkIiwicHJvcHMiLCJQYXNzd29yZEZvcm1MaW5lIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsUmVnZXgiLCJ0ZXN0IiwiVXNlclNldHRpbmdzRm9ybUNvbXBvbmVudCIsInVzZXIiLCJjbGFzc05hbWUiLCJhdmF0YXJVcGxvYWRIYW5kbGVyIiwiUGljdHVyZVVwbG9hZCIsIlRleHRGb3JtTGluZSIsIlVzZXJTZXR0aW5nc0Zvcm0iLCJjb25uZWN0Iiwic3RhdGUiLCJzZXNzaW9uIiwiY3VycmVudFVzZXIiLCJlbnRpdGllcyIsInVzZXJzIiwiQ2FyZExpbmsiLCJ0byIsImNoaWxkcmVuIiwibGlua1N0eWxlIiwiU2V0dGluZ3NSb3V0ZXMiLCJtYXRjaCIsInVybCIsImN1cnJlbnRVcmwiLCJVc2VyU2V0dGluZ3MiLCJVc2VyU2V0dGluZ3NDb21wb25lbnQiLCJzYXZlVXNlclNldHRpbmdzIiwiaGFuZGxlQ2hhbmdlUGFzc3dvcmQiLCJ1c2VyVmFsaWRhdGlvbkZyb21SZXNwb25zZSIsInBhc3N3b3JkVmFsaWRhdGlvbkZyb21SZXNwb25zZSIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidXNlckRhdGEiLCJzZXRFcnJvcnMiLCJyZXNwb25zZSIsInNhdmVVc2VyIiwic3RhdHVzIiwiZGF0YSIsImZsYXNoTWVzc2FnZSIsInR5cGUiLCJ1c2VyQWN0aW9ucyIsIlNFVF9DVVJSRU5UX1VTRVJfSU5GTyIsInVwbG9hZFVzZXJBdmF0YXIiLCJmaWxlRGF0YSIsInVzZXJTbHVnIiwiY2hhbmdlUGFzc3dvcmQiLCJlcnJvciIsIm1lcmdlUHJvcHMiLCJzdGF0ZVByb3BzIiwiZGlzcGF0Y2hQcm9wcyIsIm93blByb3BzIiwic2x1ZyIsIm1ha2VSZXF1ZXN0IiwiYXhpb3MiLCJwb3N0IiwiYWN0aW9ucyIsIlNFVF9BVkFUQVIiLCJhdmF0YXIiLCJmaWxlVXJsIiwiYWN0aW9uVHlwZSIsInJlcXVlc3RDYWxsIiwicmVxdWVzdEFjdGlvbnMiLCJSRVFVRVNUIiwiU1VDQ0VTUyIsIkZBSUxFRCIsInB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2Isb0NBQW9DLG1CQUFPLENBQUMsK0hBQWlEO0FBQzdGLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyw2QkFBNkIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDNUUseUJBQXlCLG1CQUFPLENBQUMsbUdBQW1DO0FBQ3BFLGlCQUFpQixtQkFBTyxDQUFDLG1HQUFtQzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NNLE1BQU1BLEtBQUssR0FBRyx1SkFBZDs7Ozs7Ozs7OzswQkFBTUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FiO0FBRU8sTUFBTUMsZUFBZSxHQUFHLE1BQU0sMkdBQTlCOzs7Ozs7Ozs7OzBCQUFNQSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmI7QUFFTyxNQUFNQyxtQkFBbUIsR0FBRyxNQUFNLHVHQUFsQzs7Ozs7Ozs7OzswQkFBTUEsbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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QixRQUFRLEdBQUdILFFBQVEsSUFBSSxNQUFNRCxRQUFOLElBQWtCO0FBQ3BELFFBQU07QUFBRW9CO0FBQUYsTUFBV25CLFFBQWpCO0FBRUEsUUFBTUUsUUFBUSxHQUFHLE1BQU1ILFFBQVEsQ0FDN0JxQixrRkFBVyxDQUFDLG9CQUFELEVBQXVCLE1BQ2hDQyw0Q0FBSyxDQUFDWSxHQUFOLHNCQUF3QmQsSUFBeEIsR0FBZ0NuQixRQUFoQyxDQURTLENBRGtCLENBQS9CO0FBTUEsU0FBT0UsUUFBUDtBQUNELENBVk07QUFZQSxNQUFNVyxjQUFjLEdBQUdSLElBQUksSUFBSSxNQUFNTixRQUFOLElBQWtCO0FBQ3RELFFBQU07QUFBRW9CO0FBQUYsTUFBV2QsSUFBakI7QUFFQSxRQUFNSCxRQUFRLEdBQUcsTUFBTUgsUUFBUSxDQUM3QnFCLGtGQUFXLENBQUMsc0JBQUQsRUFBeUIsTUFDbENDLDRDQUFLLENBQUNZLEdBQU4sc0JBQXdCZCxJQUF4Qix1QkFBZ0RkLElBQWhELENBRFMsQ0FEa0IsQ0FBL0I7QUFNQSxTQUFPSCxRQUFQO0FBQ0QsQ0FWTTs7Ozs7Ozs7OzswQkFaTUMsUTswQkFZQVUsYyIsImZpbGUiOiJqcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBtYXRjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ21hdGNoJywgMSwgZnVuY3Rpb24gKE1BVENILCBuYXRpdmVNYXRjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUubWF0Y2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUubWF0Y2hcbiAgICBmdW5jdGlvbiBtYXRjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBtYXRjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtNQVRDSF07XG4gICAgICByZXR1cm4gbWF0Y2hlciAhPT0gdW5kZWZpbmVkID8gbWF0Y2hlci5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbTUFUQ0hdKFN0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQG1hdGNoXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVNYXRjaCwgcmVnZXhwLCB0aGlzKTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuXG4gICAgICBpZiAoIXJ4Lmdsb2JhbCkgcmV0dXJuIHJlZ0V4cEV4ZWMocngsIFMpO1xuXG4gICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB2YXIgbiA9IDA7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgd2hpbGUgKChyZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKSkgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIEFbbl0gPSBtYXRjaFN0cjtcbiAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgICAgbisrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG4gPT09IDAgPyBudWxsIDogQTtcbiAgICB9XG4gIF07XG59KTtcbiIsImV4cG9ydCBjb25zdCBlbWFpbCA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgQXBwU2V0dGluZ3NGb3JtID0gKCkgPT4gPGRpdj5BcHBsaWNhdGlvbiBTZXR0aW5ncyBQbGFjZWhvbGRlcjwvZGl2PlxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgQmlsbGluZ1NldHRpbmdzRm9ybSA9ICgpID0+IDxkaXY+QmlsbGluZyBTZXR0aW5ncyBQbGFjZWhvbGRlcjwvZGl2PlxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gJ2Zvcm1paydcblxuaW1wb3J0IHsgUGFzc3dvcmRGb3JtTGluZSwgUG9zaXRpdmVCdXR0b24gfSBmcm9tICdjb21wb25lbnRzJ1xuXG5jb25zdCB2YWxpZGF0ZSA9ICh2YWx1ZXMgPSB7fSkgPT4ge1xuICBsZXQgZXJyb3JzID0ge31cblxuICBjb25zdCBub25FbXB0eUZpZWxkTmFtZXMgPSBbXG4gICAgJ29sZF9wYXNzd29yZCcsXG4gICAgJ25ld19wYXNzd29yZCcsXG4gICAgJ25ld19wYXNzd29yZF9jb25maXJtYXRpb24nXG4gIF1cblxuICBub25FbXB0eUZpZWxkTmFtZXMuZm9yRWFjaChmaWVsZE5hbWUgPT4ge1xuICAgIGlmICghdmFsdWVzW2ZpZWxkTmFtZV0pIHtcbiAgICAgIGVycm9yc1tmaWVsZE5hbWVdID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXG4gICAgfVxuICB9KVxuXG4gIGlmIChcbiAgICB2YWx1ZXMubmV3X3Bhc3N3b3JkICYmXG4gICAgdmFsdWVzLm5ld19wYXNzd29yZF9jb25maXJtYXRpb24gIT09IHZhbHVlcy5uZXdfcGFzc3dvcmRcbiAgKSB7XG4gICAgZXJyb3JzLm5ld19wYXNzd29yZF9jb25maXJtYXRpb24gPVxuICAgICAgJ1RoaXMgcGFzc3dvcmQgZG9lcyBub3QgbWF0Y2ggdGhlIG5ldyBwYXNzd29yZCB5b3UgZW50ZXJlZCdcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cblxuZXhwb3J0IGNvbnN0IENoYW5nZVBhc3N3b3JkRm9ybSA9ICh7IG9uU3VibWl0IH0pID0+IChcbiAgPEZvcm1pa1xuICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgb2xkX3Bhc3N3b3JkOiAnJyxcbiAgICAgIG5ld19wYXNzd29yZDogJycsXG4gICAgICBuZXdfcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJ1xuICAgIH19XG4gID5cbiAgICB7cHJvcHMgPT4gKFxuICAgICAgPEZvcm0+XG4gICAgICAgIDxGaWVsZFxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTJcIlxuICAgICAgICAgIG5hbWU9XCJvbGRfcGFzc3dvcmRcIlxuICAgICAgICAgIGNvbXBvbmVudD17UGFzc3dvcmRGb3JtTGluZX1cbiAgICAgICAgICBsYWJlbFRleHQ9XCJFbnRlciB5b3VyIG9sZCBwYXNzd29yZFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IG1iLTRcIj5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIG5hbWU9XCJuZXdfcGFzc3dvcmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ncm93XCJcbiAgICAgICAgICAgIGxhYmVsVGV4dD1cIk5ldyBQYXNzd29yZFwiXG4gICAgICAgICAgICBjb21wb25lbnQ9e1Bhc3N3b3JkRm9ybUxpbmV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBwbC00XCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17UGFzc3dvcmRGb3JtTGluZX1cbiAgICAgICAgICAgIG5hbWU9XCJuZXdfcGFzc3dvcmRfY29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgIGxhYmVsVGV4dD1cIlJlcGVhdCB5b3VyIG5ldyBwYXNzd29yZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJvcmRlci1ncmV5LWxpZ2h0XCI+XG4gICAgICAgICAgPFBvc2l0aXZlQnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XG4gICAgICAgICAgICBDaGFuZ2UgUGFzc3dvcmRcbiAgICAgICAgICA8L1Bvc2l0aXZlQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybT5cbiAgICApfVxuICA8L0Zvcm1paz5cbilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnXG5cbmltcG9ydCB7IGVtYWlsIGFzIGVtYWlsUmVnZXggfSBmcm9tICdjb25zdGFudHMvcmVnZXhlcydcbmltcG9ydCB7IFBvc2l0aXZlQnV0dG9uLCBUZXh0Rm9ybUxpbmUsIFBpY3R1cmVVcGxvYWQgfSBmcm9tICdjb21wb25lbnRzJ1xuXG5jb25zdCB2YWxpZGF0ZSA9ICh2YWx1ZXMgPSB7fSkgPT4ge1xuICBsZXQgZXJyb3JzID0ge31cblxuICBpZiAoIXZhbHVlcy5maXJzdF9uYW1lKSB7XG4gICAgZXJyb3JzLmZpcnN0X25hbWUgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcbiAgfVxuXG4gIGlmICghdmFsdWVzLmxhc3RfbmFtZSkge1xuICAgIGVycm9ycy5sYXN0X25hbWUgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcbiAgfVxuXG4gIGlmICghdmFsdWVzLmVtYWlsKSB7XG4gICAgZXJyb3JzLmVtYWlsID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXG4gIH0gZWxzZSBpZiAoIWVtYWlsUmVnZXgudGVzdCh2YWx1ZXMuZW1haWwpKSB7XG4gICAgZXJyb3JzLmVtYWlsID0gJ0ludmFsaWQgZW1haWwgYWRkcmVzcydcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cblxuY29uc3QgVXNlclNldHRpbmdzRm9ybUNvbXBvbmVudCA9ICh7XG4gIHVzZXIsXG4gIG9uU3VibWl0LFxuICBjbGFzc05hbWUgPSAnJyxcbiAgYXZhdGFyVXBsb2FkSGFuZGxlclxufSkgPT4gKFxuICA8Rm9ybWlrXG4gICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cbiAgICBpbml0aWFsVmFsdWVzPXt1c2VyfVxuICAgIHZhbGlkYXRlT25DaGFuZ2U9e2ZhbHNlfVxuICA+XG4gICAgeygpID0+IChcbiAgICAgIDxGb3JtIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBteS00XCI+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBuYW1lPVwiYXZhdGFyXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17UGljdHVyZVVwbG9hZH1cbiAgICAgICAgICAgIHVwbG9hZEhhbmRsZXI9e2F2YXRhclVwbG9hZEhhbmRsZXJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtci0xMFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9XCJmaXJzdF9uYW1lXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0Rm9ybUxpbmV9XG4gICAgICAgICAgICAgIGxhYmVsVGV4dD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPVwibGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0Rm9ybUxpbmV9XG4gICAgICAgICAgICAgIGxhYmVsVGV4dD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJlbWFpbFwiIGNvbXBvbmVudD17VGV4dEZvcm1MaW5lfSBsYWJlbFRleHQ9XCJFbWFpbFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBib3JkZXItZ3JleS1saWdodFwiPlxuICAgICAgICAgIDxQb3NpdGl2ZUJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxuICAgICAgICAgICAgU2F2ZSBVc2VyIERldGFpbHNcbiAgICAgICAgICA8L1Bvc2l0aXZlQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybT5cbiAgICApfVxuICA8L0Zvcm1paz5cbilcblxuZXhwb3J0IGNvbnN0IFVzZXJTZXR0aW5nc0Zvcm0gPSBjb25uZWN0KHN0YXRlID0+IHtcbiAgY29uc3Qge1xuICAgIHNlc3Npb246IHsgY3VycmVudFVzZXIgfVxuICB9ID0gc3RhdGVcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdGF0ZS5lbnRpdGllcy51c2Vyc1tjdXJyZW50VXNlcl1cbiAgfVxufSwgbnVsbCkoVXNlclNldHRpbmdzRm9ybUNvbXBvbmVudClcbiIsImV4cG9ydCB7IFVzZXJTZXR0aW5nc0Zvcm0gfSBmcm9tICcuL1VzZXJTZXR0aW5nc0Zvcm0nXG5leHBvcnQgeyBDaGFuZ2VQYXNzd29yZEZvcm0gfSBmcm9tICcuL0NoYW5nZVBhc3N3b3JkRm9ybSdcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmF2TGluaywgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSAnY29tcG9uZW50cydcbmltcG9ydCB7IGxpbmtTdHlsZSB9IGZyb20gJ2NvbnN0YW50cy9zdHlsZXMnXG5cbmltcG9ydCB7IFVzZXJTZXR0aW5ncyB9IGZyb20gJy4vVXNlclNldHRpbmdzJ1xuaW1wb3J0IHsgQXBwU2V0dGluZ3NGb3JtIH0gZnJvbSAnLi9Gb3Jtcy9BcHBTZXR0aW5nc0Zvcm0nXG5pbXBvcnQgeyBCaWxsaW5nU2V0dGluZ3NGb3JtIH0gZnJvbSAnLi9Gb3Jtcy9CaWxsaW5nU2V0dGluZ3NGb3JtJ1xuXG5jb25zdCBDYXJkTGluayA9ICh7IHRvLCBjbGFzc05hbWUgPSAnJywgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxOYXZMaW5rXG4gICAgICB0bz17dG99XG4gICAgICBhY3RpdmVDbGFzc05hbWU9XCJiZy1ibHVlLWxpZ2h0ZXN0XCJcbiAgICAgIGNsYXNzTmFtZT17YGJsb2NrIGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0IHAtNCAke2xpbmtTdHlsZX0gJHtjbGFzc05hbWV9YH1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9OYXZMaW5rPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBTZXR0aW5nc1JvdXRlcyA9ICh7IG1hdGNoOiB7IHVybDogY3VycmVudFVybCB9IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWItNFwiPlNldHRpbmdzPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydFwiPlxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3LTY0XCI+XG4gICAgICAgICAgPENhcmRMaW5rIHRvPXtgJHtjdXJyZW50VXJsfS91c2VyYH0+QWNjb3VudDwvQ2FyZExpbms+XG4gICAgICAgICAgPENhcmRMaW5rIHRvPXtgJHtjdXJyZW50VXJsfS9hcHBgfT5BcHBsaWNhdGlvbjwvQ2FyZExpbms+XG4gICAgICAgICAgPENhcmRMaW5rIHRvPXtgJHtjdXJyZW50VXJsfS9iaWxsaW5nYH0+QmlsbGluZzwvQ2FyZExpbms+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiZmxleC1ncm93IG1sLTRcIj5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgIHBhdGg9e2Ake2N1cnJlbnRVcmx9L3VzZXJgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VXNlclNldHRpbmdzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgIHBhdGg9e2Ake2N1cnJlbnRVcmx9L2FwcGB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtBcHBTZXR0aW5nc0Zvcm19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgcGF0aD17YCR7Y3VycmVudFVybH0vYmlsbGluZ2B9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtCaWxsaW5nU2V0dGluZ3NGb3JtfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc1JvdXRlc1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IHVzZXJBY3Rpb25zIH0gZnJvbSAnc3RvcmUvYWN0aW9ucydcbmltcG9ydCB7IHVwbG9hZFVzZXJBdmF0YXIgfSBmcm9tICdzdG9yZS9hY3Rpb24tY3JlYXRvcnMvYXZhdGFycydcbmltcG9ydCB7IGZsYXNoTWVzc2FnZSB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9mbGFzaE1lc3NhZ2VzJ1xuaW1wb3J0IHsgc2F2ZVVzZXIsIGNoYW5nZVBhc3N3b3JkIH0gZnJvbSAnc3RvcmUvYWN0aW9uLWNyZWF0b3JzL3VzZXInXG5cbmltcG9ydCB7IFVzZXJTZXR0aW5nc0Zvcm0sIENoYW5nZVBhc3N3b3JkRm9ybSB9IGZyb20gJy4vRm9ybXMnXG5cbmNvbnN0IFVzZXJTZXR0aW5nc0NvbXBvbmVudCA9ICh7XG4gIHNhdmVVc2VyU2V0dGluZ3MsXG4gIGF2YXRhclVwbG9hZEhhbmRsZXIsXG4gIGhhbmRsZUNoYW5nZVBhc3N3b3JkXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtZ3JleS1kYXJrZXN0IGZvbnQtbm9ybWFsXCI+WW91ciBEZXRhaWxzPC9oMz5cbiAgICAgIDxVc2VyU2V0dGluZ3NGb3JtXG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTRcIlxuICAgICAgICBvblN1Ym1pdD17c2F2ZVVzZXJTZXR0aW5nc31cbiAgICAgICAgYXZhdGFyVXBsb2FkSGFuZGxlcj17YXZhdGFyVXBsb2FkSGFuZGxlcn1cbiAgICAgIC8+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWdyZXktZGFya2VzdCBmb250LW5vcm1hbFwiPkNoYW5nZSBZb3VyIFBhc3N3b3JkPC9oMz5cbiAgICAgIDxDaGFuZ2VQYXNzd29yZEZvcm0gb25TdWJtaXQ9e2hhbmRsZUNoYW5nZVBhc3N3b3JkfSAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cblxuY29uc3QgdXNlclZhbGlkYXRpb25Gcm9tUmVzcG9uc2UgPSB2YWx1ZXMgPT4ge1xuICBsZXQgZXJyb3JzID0ge31cblxuICByZXR1cm4gZXJyb3JzXG59XG5cbmNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbkZyb21SZXNwb25zZSA9IHZhbHVlcyA9PiB7XG4gIGxldCBlcnJvcnMgPSB7fVxuXG4gIHJldHVybiBlcnJvcnNcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgY3VycmVudFVzZXI6IHN0YXRlLmVudGl0aWVzLnVzZXJzW3N0YXRlLnNlc3Npb24uY3VycmVudFVzZXJdXG59KVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBzYXZlVXNlclNldHRpbmdzOiBhc3luYyAodXNlckRhdGEsIHsgc2V0RXJyb3JzIH0pID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKHNhdmVVc2VyKHVzZXJEYXRhKSlcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgc2V0RXJyb3JzKHVzZXJWYWxpZGF0aW9uRnJvbVJlc3BvbnNlKHJlc3BvbnNlLmRhdGEuZGF0YSkpXG4gICAgfVxuXG4gICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdzdWNjZXNzJywgJ1N1Y2Nlc3NmdWxseSBzYXZlZCB1c2VyIGluZm8nLCA0MDAwKSlcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IHVzZXJBY3Rpb25zLlNFVF9DVVJSRU5UX1VTRVJfSU5GTyxcbiAgICAgIHVzZXJzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgICB9KVxuICB9LFxuXG4gIHVwbG9hZFVzZXJBdmF0YXI6IChmaWxlRGF0YSwgdXNlclNsdWcpID0+XG4gICAgZGlzcGF0Y2godXBsb2FkVXNlckF2YXRhcihmaWxlRGF0YSwgdXNlclNsdWcpKSxcblxuICBjaGFuZ2VQYXNzd29yZDogYXN5bmMgKGRhdGEsIHsgc2V0RXJyb3JzIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGlzcGF0Y2goY2hhbmdlUGFzc3dvcmQoZGF0YSkpXG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgZmxhc2hNZXNzYWdlKCdzdWNjZXNzJywgJ1lvdXIgcGFzc3dvcmQgd2FzIHN1Y2Nlc3NmdWxseSBjaGFuZ2VkJywgNDAwMClcbiAgICAgIClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XG4gICAgICAgIHNldEVycm9ycyhwYXNzd29yZFZhbGlkYXRpb25Gcm9tUmVzcG9uc2UoZXJyb3IucmVzcG9uc2UuZGF0YS5kYXRhKSlcbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICAgIHNldEVycm9ycyh7XG4gICAgICAgICAgb2xkX3Bhc3N3b3JkOiAnVGhlIGN1cnJlbnQgcGFzc3dvcmQgd2FzIGluY29ycmVjdCdcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pXG5cbmNvbnN0IG1lcmdlUHJvcHMgPSAoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpID0+ICh7XG4gIC4uLnN0YXRlUHJvcHMsXG4gIC4uLmRpc3BhdGNoUHJvcHMsXG4gIC4uLm93blByb3BzLFxuICBhdmF0YXJVcGxvYWRIYW5kbGVyOiBmaWxlRGF0YSA9PiB7XG4gICAgcmV0dXJuIGRpc3BhdGNoUHJvcHMudXBsb2FkVXNlckF2YXRhcihmaWxlRGF0YSwgc3RhdGVQcm9wcy5jdXJyZW50VXNlci5zbHVnKVxuICB9LFxuICBoYW5kbGVDaGFuZ2VQYXNzd29yZDogdmFsdWVzID0+IHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc2x1Zzogc3RhdGVQcm9wcy5jdXJyZW50VXNlci5zbHVnLFxuICAgICAgLi4udmFsdWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIGRpc3BhdGNoUHJvcHMuY2hhbmdlUGFzc3dvcmQoZGF0YSlcbiAgfVxufSlcblxuZXhwb3J0IGNvbnN0IFVzZXJTZXR0aW5ncyA9IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuICBtZXJnZVByb3BzXG4pKFVzZXJTZXR0aW5nc0NvbXBvbmVudClcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuaW1wb3J0IHsgbWFrZVJlcXVlc3QgfSBmcm9tICdzdG9yZS9hY3Rpb24tY3JlYXRvcnMvcmVxdWVzdHMnXG5pbXBvcnQgeyB1c2VyQWN0aW9ucyBhcyBhY3Rpb25zIH0gZnJvbSAnc3RvcmUvYWN0aW9ucydcblxuZXhwb3J0IGNvbnN0IHVwbG9hZFVzZXJBdmF0YXIgPSAoZmlsZURhdGEsIHVzZXJTbHVnKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoJ3NldC11c2VyLWF2YXRhcicsICgpID0+IGF4aW9zLnBvc3QoJy9hcGkvYXZhdGFycycsIGZpbGVEYXRhKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLlNFVF9BVkFUQVIsXG4gICAgdXNlclNsdWcsXG4gICAgYXZhdGFyOiByZXNwb25zZS5kYXRhLmZpbGVVcmxcbiAgfSlcbn1cbiIsImltcG9ydCB7IHJlcXVlc3RBY3Rpb25zIH0gZnJvbSAnc3RvcmUvYWN0aW9ucydcblxuZXhwb3J0IGNvbnN0IG1ha2VSZXF1ZXN0ID0gKGFjdGlvblR5cGUsIHJlcXVlc3RDYWxsKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKHsgdHlwZTogcmVxdWVzdEFjdGlvbnMuUkVRVUVTVCwgYWN0aW9uVHlwZSB9KVxuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0Q2FsbCgpXG4gICAgZGlzcGF0Y2goeyB0eXBlOiByZXF1ZXN0QWN0aW9ucy5TVUNDRVNTLCBhY3Rpb25UeXBlIH0pXG4gICAgcmV0dXJuIGRhdGFcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IHJlcXVlc3RBY3Rpb25zLkZBSUxFRCwgZXJyb3IgfSlcbiAgICB0aHJvdyBlcnJvclxuICB9XG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmltcG9ydCB7IG1ha2VSZXF1ZXN0IH0gZnJvbSAnc3RvcmUvYWN0aW9uLWNyZWF0b3JzL3JlcXVlc3RzJ1xuXG5leHBvcnQgY29uc3Qgc2F2ZVVzZXIgPSB1c2VyRGF0YSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gdXNlckRhdGFcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KCdzYXZlLXVzZXItc2V0dGluZ3MnLCAoKSA9PlxuICAgICAgYXhpb3MucHV0KGAvYXBpL3VzZXJzLyR7c2x1Z31gLCB1c2VyRGF0YSlcbiAgICApXG4gIClcblxuICByZXR1cm4gcmVzcG9uc2Vcbn1cblxuZXhwb3J0IGNvbnN0IGNoYW5nZVBhc3N3b3JkID0gZGF0YSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gZGF0YVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoJ2NoYW5nZS11c2VyLXBhc3N3b3JkJywgKCkgPT5cbiAgICAgIGF4aW9zLnB1dChgL2FwaS91c2Vycy8ke3NsdWd9L3VwZGF0ZS1wYXNzd29yZGAsIGRhdGEpXG4gICAgKVxuICApXG5cbiAgcmV0dXJuIHJlc3BvbnNlXG59XG4iXSwic291cmNlUm9vdCI6IiJ9