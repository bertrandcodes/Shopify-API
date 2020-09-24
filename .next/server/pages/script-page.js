module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/script-page.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/script-page.js":
/*!******************************!*\
  !*** ./pages/script-page.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst CREATE_SCRIPT_TAG = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\nmutation scriptTagCreate($input: ScriptTagInput!){\n    scriptTagCreate(input: $input){\n        scriptTag {\n            id\n        }\n        userErrors {\n            field\n            message\n        }\n    }\n}`;\nconst QUERY_SCRIPTTAGS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\nquery{\n    scriptTags(first:5){\n      edges{\n        node{\n          id\n          src\n          displayScope\n        }\n      }\n    }\n  }\n`;\nconst DELETE_SCRIPTAG = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\nmutation scriptTagDelete($id: ID!){\n    scriptTagDelete(id: $id){\n        deletedScriptTagId\n    \t\tuserErrors{\n          field\n          message\n        }\n    }\n}\n`;\n\nfunction ScriptPage() {\n  const [createScripts] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"])(CREATE_SCRIPT_TAG);\n  const [deleteScripts] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"])(DELETE_SCRIPTAG);\n  const {\n    loading,\n    error,\n    data\n  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(QUERY_SCRIPTTAGS);\n  if (loading) return __jsx(\"div\", null, \"Loading...\");\n  if (error) return __jsx(\"div\", null, error.message);\n  return __jsx(\"div\", null, __jsx(\"h1\", null, \"These are the script tags right now:\"), __jsx(\"button\", {\n    type: \"submit\",\n    onClick: () => {\n      console.log(createScripts);\n      createScripts({\n        variables: {\n          input: {\n            src: \"https://fd8b3860e19d.ngrok.io/test-script.js\",\n            displayScope: \"ALL\"\n          }\n        },\n        refetchQueries: [{\n          query: QUERY_SCRIPTTAGS\n        }]\n      });\n    }\n  }, \"Create Script Tag\"), data.scriptTags.edges.map(item => {\n    return __jsx(\"div\", {\n      key: item.node.id\n    }, __jsx(\"p\", null, item.node.id), __jsx(\"button\", {\n      type: \"submit\",\n      onClick: () => {\n        deleteScripts({\n          variables: {\n            id: item.node.id\n          },\n          refetchQueries: [{\n            query: QUERY_SCRIPTTAGS\n          }]\n        });\n      }\n    }, \"Delete Script Tag\"));\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScriptPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zY3JpcHQtcGFnZS5qcz9jYzkwIl0sIm5hbWVzIjpbIkNSRUFURV9TQ1JJUFRfVEFHIiwiZ3FsIiwiUVVFUllfU0NSSVBUVEFHUyIsIkRFTEVURV9TQ1JJUFRBRyIsIlNjcmlwdFBhZ2UiLCJjcmVhdGVTY3JpcHRzIiwidXNlTXV0YXRpb24iLCJkZWxldGVTY3JpcHRzIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInVzZVF1ZXJ5IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInNyYyIsImRpc3BsYXlTY29wZSIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJzY3JpcHRUYWdzIiwiZWRnZXMiLCJtYXAiLCJpdGVtIiwibm9kZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsaUJBQWlCLEdBQUdDLGtEQUFJOzs7Ozs7Ozs7OztFQUE5QjtBQWFBLE1BQU1DLGdCQUFnQixHQUFHRCxrREFBSTs7Ozs7Ozs7Ozs7O0NBQTdCO0FBY0EsTUFBTUUsZUFBZSxHQUFHRixrREFBSTs7Ozs7Ozs7OztDQUE1Qjs7QUFZQSxTQUFTRyxVQUFULEdBQXNCO0FBRWxCLFFBQU0sQ0FBQ0MsYUFBRCxJQUFrQkMsdUVBQVcsQ0FBQ04saUJBQUQsQ0FBbkM7QUFDQSxRQUFNLENBQUNPLGFBQUQsSUFBa0JELHVFQUFXLENBQUNILGVBQUQsQ0FBbkM7QUFDQSxRQUFNO0FBQUVLLFdBQUY7QUFBV0MsU0FBWDtBQUFrQkM7QUFBbEIsTUFBMkJDLG9FQUFRLENBQUNULGdCQUFELENBQXpDO0FBRUEsTUFBSU0sT0FBSixFQUFhLE9BQU8sZ0NBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsT0FBTyxtQkFBTUEsS0FBSyxDQUFDRyxPQUFaLENBQVA7QUFFWCxTQUNJLG1CQUNJLHlEQURKLEVBRUk7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUUsTUFBTTtBQUNqQ0MsYUFBTyxDQUFDQyxHQUFSLENBQVlULGFBQVo7QUFDQUEsbUJBQWEsQ0FBQztBQUNWVSxpQkFBUyxFQUFFO0FBQ1BDLGVBQUssRUFBRTtBQUNIQyxlQUFHLEVBQUUsOENBREY7QUFFSEMsd0JBQVksRUFBRTtBQUZYO0FBREEsU0FERDtBQU9WQyxzQkFBYyxFQUFFLENBQUM7QUFBRUMsZUFBSyxFQUFFbEI7QUFBVCxTQUFEO0FBUE4sT0FBRCxDQUFiO0FBU0g7QUFYRCx5QkFGSixFQWtCUVEsSUFBSSxDQUFDVyxVQUFMLENBQWdCQyxLQUFoQixDQUFzQkMsR0FBdEIsQ0FBMEJDLElBQUksSUFBSTtBQUM5QixXQUNJO0FBQUssU0FBRyxFQUFFQSxJQUFJLENBQUNDLElBQUwsQ0FBVUM7QUFBcEIsT0FDSSxpQkFDS0YsSUFBSSxDQUFDQyxJQUFMLENBQVVDLEVBRGYsQ0FESixFQUlJO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBTyxFQUFFLE1BQU07QUFDakNuQixxQkFBYSxDQUFDO0FBQ1ZRLG1CQUFTLEVBQUU7QUFDUFcsY0FBRSxFQUFFRixJQUFJLENBQUNDLElBQUwsQ0FBVUM7QUFEUCxXQUREO0FBSVZQLHdCQUFjLEVBQUUsQ0FBQztBQUFFQyxpQkFBSyxFQUFFbEI7QUFBVCxXQUFEO0FBSk4sU0FBRCxDQUFiO0FBTUg7QUFQRCwyQkFKSixDQURKO0FBZ0JILEdBakJELENBbEJSLENBREo7QUF3Q0g7O0FBRWNFLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvc2NyaXB0LXBhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuXG5jb25zdCBDUkVBVEVfU0NSSVBUX1RBRyA9IGdxbGBcbm11dGF0aW9uIHNjcmlwdFRhZ0NyZWF0ZSgkaW5wdXQ6IFNjcmlwdFRhZ0lucHV0ISl7XG4gICAgc2NyaXB0VGFnQ3JlYXRlKGlucHV0OiAkaW5wdXQpe1xuICAgICAgICBzY3JpcHRUYWcge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgfVxuICAgICAgICB1c2VyRXJyb3JzIHtcbiAgICAgICAgICAgIGZpZWxkXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgIH1cbiAgICB9XG59YDtcblxuY29uc3QgUVVFUllfU0NSSVBUVEFHUyA9IGdxbGBcbnF1ZXJ5e1xuICAgIHNjcmlwdFRhZ3MoZmlyc3Q6NSl7XG4gICAgICBlZGdlc3tcbiAgICAgICAgbm9kZXtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHNyY1xuICAgICAgICAgIGRpc3BsYXlTY29wZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IERFTEVURV9TQ1JJUFRBRyA9IGdxbGBcbm11dGF0aW9uIHNjcmlwdFRhZ0RlbGV0ZSgkaWQ6IElEISl7XG4gICAgc2NyaXB0VGFnRGVsZXRlKGlkOiAkaWQpe1xuICAgICAgICBkZWxldGVkU2NyaXB0VGFnSWRcbiAgICBcdFx0dXNlckVycm9yc3tcbiAgICAgICAgICBmaWVsZFxuICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgIH1cbn1cbmBcblxuZnVuY3Rpb24gU2NyaXB0UGFnZSgpIHtcblxuICAgIGNvbnN0IFtjcmVhdGVTY3JpcHRzXSA9IHVzZU11dGF0aW9uKENSRUFURV9TQ1JJUFRfVEFHKVxuICAgIGNvbnN0IFtkZWxldGVTY3JpcHRzXSA9IHVzZU11dGF0aW9uKERFTEVURV9TQ1JJUFRBRylcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShRVUVSWV9TQ1JJUFRUQUdTKVxuXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PlxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5UaGVzZSBhcmUgdGhlIHNjcmlwdCB0YWdzIHJpZ2h0IG5vdzo8L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVTY3JpcHRzKVxuICAgICAgICAgICAgICAgIGNyZWF0ZVNjcmlwdHMoe1xuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vZmQ4YjM4NjBlMTlkLm5ncm9rLmlvL3Rlc3Qtc2NyaXB0LmpzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVNjb3BlOiBcIkFMTFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IFFVRVJZX1NDUklQVFRBR1MgfV1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgQ3JlYXRlIFNjcmlwdCBUYWdcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0YS5zY3JpcHRUYWdzLmVkZ2VzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLm5vZGUuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5ub2RlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVTY3JpcHRzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLm5vZGUuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IFFVRVJZX1NDUklQVFRBR1MgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5EZWxldGUgU2NyaXB0IFRhZzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2ID5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmlwdFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/script-page.js\n");

/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });