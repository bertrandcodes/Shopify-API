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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst CREATE_SCRIPT_TAG = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\nmutation scriptTagCreate($input: ScriptTagInput!){\n    scriptTagCreate(input: $input){\n        scriptTag {\n            id\n        }\n        userErrors {\n            field\n            message\n        }\n    }\n}`;\nconst QUERY_SCRIPTTAGS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\nquery{\n    scriptTags(first:5){\n      edges{\n        node{\n          id\n          src\n          displayScope\n        }\n      }\n    }\n  }\n`;\nconst DELETE_SCRIPTAG = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\nmutation scriptTagDelete($id: ID!){\n    scriptTagDelete(id: $id){\n        deletedScriptTagId\n    \t\tuserErrors{\n          field\n          message\n        }\n    }\n}\n`;\n\nfunction ScriptPage() {\n  const [createScripts] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"])(CREATE_SCRIPT_TAG);\n  const [deleteScripts] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"])(DELETE_SCRIPTAG);\n  const {\n    loading,\n    error,\n    data\n  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(QUERY_SCRIPTTAGS);\n  if (loading) return __jsx(\"div\", null, \"Loading...\");\n  if (error) return __jsx(\"div\", null, error.message);\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Page\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n    title: \"These are the Script Tags:\",\n    sectioned: true\n  }, __jsx(\"p\", null, \"Create or Delete a Script Tag\"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Section, {\n    secondary: true\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n    title: \"Delete Tag\",\n    sectioned: true\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    primary: true,\n    size: \"slim\",\n    type: \"submit\",\n    onClick: () => {\n      createScripts({\n        variables: {\n          input: {\n            src: \"https://8e135ea8749a.ngrok.io/test-script.js\",\n            displayScope: \"ALL\"\n          }\n        },\n        refetchQueries: [{\n          query: QUERY_SCRIPTTAGS\n        }]\n      });\n    }\n  }, \"Create Script Tag\"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"ResourceList\"], {\n    showHeader: true,\n    resourceName: {\n      singular: 'Script',\n      plural: 'Scripts'\n    },\n    items: data.scriptTags.edges,\n    renderItem: item => {\n      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"ResourceList\"].Item, {\n        id: item.id\n      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"].Item, null, __jsx(\"p\", null, item.node.id)), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n        type: \"submit\",\n        onClick: () => {\n          deleteScripts({\n            variables: {\n              id: item.node.id\n            },\n            refetchQueries: [{\n              query: QUERY_SCRIPTTAGS\n            }]\n          });\n        }\n      }, \"Delete Script Tag\"))));\n    }\n  })))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScriptPage); // <div>\n//     <h1>These are the script tags right now:</h1>\n//     <button type='submit' onClick={() => {\n//         console.log(createScripts)\n//         createScripts({\n//             variables: {\n//                 input: {\n//                     src: \"https://fd8b3860e19d.ngrok.io/test-script.js\",\n//                     displayScope: \"ALL\"\n//                 }\n//             },\n//             refetchQueries: [{ query: QUERY_SCRIPTTAGS }]\n//         })\n//     }}>\n//         Create Script Tag\n//     </button>\n//     {\n//         data.scriptTags.edges.map(item => {\n//             return (\n//                 <div key={item.node.id}>\n//                     <p>\n//                         {item.node.id}\n//                     </p>\n//                     <button type='submit' onClick={() => {\n//                         deleteScripts({\n//                             variables: {\n//                                 id: item.node.id\n//                             },\n//                             refetchQueries: [{ query: QUERY_SCRIPTTAGS }]\n//                         })\n//                     }}>Delete Script Tag</button>\n//                 </div>\n//             )\n//         })\n//     }\n// </div >//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zY3JpcHQtcGFnZS5qcz9jYzkwIl0sIm5hbWVzIjpbIkNSRUFURV9TQ1JJUFRfVEFHIiwiZ3FsIiwiUVVFUllfU0NSSVBUVEFHUyIsIkRFTEVURV9TQ1JJUFRBRyIsIlNjcmlwdFBhZ2UiLCJjcmVhdGVTY3JpcHRzIiwidXNlTXV0YXRpb24iLCJkZWxldGVTY3JpcHRzIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInVzZVF1ZXJ5IiwibWVzc2FnZSIsInZhcmlhYmxlcyIsImlucHV0Iiwic3JjIiwiZGlzcGxheVNjb3BlIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsInNpbmd1bGFyIiwicGx1cmFsIiwic2NyaXB0VGFncyIsImVkZ2VzIiwiaXRlbSIsImlkIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxpQkFBaUIsR0FBR0Msa0RBQUk7Ozs7Ozs7Ozs7O0VBQTlCO0FBYUEsTUFBTUMsZ0JBQWdCLEdBQUdELGtEQUFJOzs7Ozs7Ozs7Ozs7Q0FBN0I7QUFjQSxNQUFNRSxlQUFlLEdBQUdGLGtEQUFJOzs7Ozs7Ozs7O0NBQTVCOztBQVlBLFNBQVNHLFVBQVQsR0FBc0I7QUFFbEIsUUFBTSxDQUFDQyxhQUFELElBQWtCQyx1RUFBVyxDQUFDTixpQkFBRCxDQUFuQztBQUNBLFFBQU0sQ0FBQ08sYUFBRCxJQUFrQkQsdUVBQVcsQ0FBQ0gsZUFBRCxDQUFuQztBQUNBLFFBQU07QUFBRUssV0FBRjtBQUFXQyxTQUFYO0FBQWtCQztBQUFsQixNQUEyQkMsb0VBQVEsQ0FBQ1QsZ0JBQUQsQ0FBekM7QUFFQSxNQUFJTSxPQUFKLEVBQWEsT0FBTyxnQ0FBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxPQUFPLG1CQUFNQSxLQUFLLENBQUNHLE9BQVosQ0FBUDtBQUVYLFNBQ0ksTUFBQyxxREFBRCxRQUNJLE1BQUMsdURBQUQsUUFDSSxNQUFDLHVEQUFELENBQVEsT0FBUixRQUNJLE1BQUMscURBQUQ7QUFBTSxTQUFLLEVBQUMsNEJBQVo7QUFBeUMsYUFBUztBQUFsRCxLQUNJLGlEQURKLENBREosQ0FESixFQVFJLE1BQUMsdURBQUQsQ0FBUSxPQUFSO0FBQWdCLGFBQVM7QUFBekIsS0FDSSxNQUFDLHFEQUFEO0FBQU0sU0FBSyxFQUFDLFlBQVo7QUFBeUIsYUFBUztBQUFsQyxLQUNJLE1BQUMsdURBQUQ7QUFDSSxXQUFPLE1BRFg7QUFFSSxRQUFJLEVBQUMsTUFGVDtBQUdJLFFBQUksRUFBQyxRQUhUO0FBR2tCLFdBQU8sRUFBRSxNQUFNO0FBQ3pCUCxtQkFBYSxDQUFDO0FBQ1ZRLGlCQUFTLEVBQUU7QUFDUEMsZUFBSyxFQUFFO0FBQ0hDLGVBQUcsRUFBRSw4Q0FERjtBQUVIQyx3QkFBWSxFQUFFO0FBRlg7QUFEQSxTQUREO0FBT1ZDLHNCQUFjLEVBQUUsQ0FBQztBQUFFQyxlQUFLLEVBQUVoQjtBQUFULFNBQUQ7QUFQTixPQUFELENBQWI7QUFTSDtBQWJMLHlCQURKLENBREosQ0FSSixFQTBCSSxNQUFDLHVEQUFELENBQVEsT0FBUixRQUNJLE1BQUMscURBQUQsUUFDSSxNQUFDLDZEQUFEO0FBQ0ksY0FBVSxNQURkO0FBRUksZ0JBQVksRUFBRTtBQUFFaUIsY0FBUSxFQUFFLFFBQVo7QUFBc0JDLFlBQU0sRUFBRTtBQUE5QixLQUZsQjtBQUdJLFNBQUssRUFBRVYsSUFBSSxDQUFDVyxVQUFMLENBQWdCQyxLQUgzQjtBQUlJLGNBQVUsRUFBRUMsSUFBSSxJQUFJO0FBQ2hCLGFBQ0ksTUFBQyw2REFBRCxDQUFjLElBQWQ7QUFBbUIsVUFBRSxFQUFFQSxJQUFJLENBQUNDO0FBQTVCLFNBQ0ksTUFBQyxzREFBRCxRQUNJLE1BQUMsc0RBQUQsQ0FBTyxJQUFQLFFBQ0ksaUJBQ0tELElBQUksQ0FBQ0UsSUFBTCxDQUFVRCxFQURmLENBREosQ0FESixFQU1JLE1BQUMsc0RBQUQsQ0FBTyxJQUFQLFFBQ0ksTUFBQyx1REFBRDtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRSxNQUFNO0FBQ2pDakIsdUJBQWEsQ0FBQztBQUNWTSxxQkFBUyxFQUFFO0FBQ1BXLGdCQUFFLEVBQUVELElBQUksQ0FBQ0UsSUFBTCxDQUFVRDtBQURQLGFBREQ7QUFJVlAsMEJBQWMsRUFBRSxDQUFDO0FBQUVDLG1CQUFLLEVBQUVoQjtBQUFULGFBQUQ7QUFKTixXQUFELENBQWI7QUFNSDtBQVBELDZCQURKLENBTkosQ0FESixDQURKO0FBdUJIO0FBNUJMLElBREosQ0FESixDQTFCSixDQURKLENBREo7QUFpRUg7O0FBRWNFLHlFQUFmLEUsQ0FHSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9zY3JpcHQtcGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgdXNlUXVlcnksIHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIExheW91dCwgUGFnZSwgUmVzb3VyY2VMaXN0LCBTdGFjayB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuXG5jb25zdCBDUkVBVEVfU0NSSVBUX1RBRyA9IGdxbGBcbm11dGF0aW9uIHNjcmlwdFRhZ0NyZWF0ZSgkaW5wdXQ6IFNjcmlwdFRhZ0lucHV0ISl7XG4gICAgc2NyaXB0VGFnQ3JlYXRlKGlucHV0OiAkaW5wdXQpe1xuICAgICAgICBzY3JpcHRUYWcge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgfVxuICAgICAgICB1c2VyRXJyb3JzIHtcbiAgICAgICAgICAgIGZpZWxkXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgIH1cbiAgICB9XG59YDtcblxuY29uc3QgUVVFUllfU0NSSVBUVEFHUyA9IGdxbGBcbnF1ZXJ5e1xuICAgIHNjcmlwdFRhZ3MoZmlyc3Q6NSl7XG4gICAgICBlZGdlc3tcbiAgICAgICAgbm9kZXtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHNyY1xuICAgICAgICAgIGRpc3BsYXlTY29wZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IERFTEVURV9TQ1JJUFRBRyA9IGdxbGBcbm11dGF0aW9uIHNjcmlwdFRhZ0RlbGV0ZSgkaWQ6IElEISl7XG4gICAgc2NyaXB0VGFnRGVsZXRlKGlkOiAkaWQpe1xuICAgICAgICBkZWxldGVkU2NyaXB0VGFnSWRcbiAgICBcdFx0dXNlckVycm9yc3tcbiAgICAgICAgICBmaWVsZFxuICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgIH1cbn1cbmBcblxuZnVuY3Rpb24gU2NyaXB0UGFnZSgpIHtcblxuICAgIGNvbnN0IFtjcmVhdGVTY3JpcHRzXSA9IHVzZU11dGF0aW9uKENSRUFURV9TQ1JJUFRfVEFHKVxuICAgIGNvbnN0IFtkZWxldGVTY3JpcHRzXSA9IHVzZU11dGF0aW9uKERFTEVURV9TQ1JJUFRBRylcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShRVUVSWV9TQ1JJUFRUQUdTKVxuXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PlxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBhZ2U+XG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQgdGl0bGU9XCJUaGVzZSBhcmUgdGhlIFNjcmlwdCBUYWdzOlwiIHNlY3Rpb25lZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBvciBEZWxldGUgYSBTY3JpcHQgVGFnXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbiBzZWNvbmRhcnk+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIHRpdGxlPVwiRGVsZXRlIFRhZ1wiIHNlY3Rpb25lZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNsaW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNjcmlwdHMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vOGUxMzVlYTg3NDlhLm5ncm9rLmlvL3Rlc3Qtc2NyaXB0LmpzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTY29wZTogXCJBTExcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IFFVRVJZX1NDUklQVFRBR1MgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5DcmVhdGUgU2NyaXB0IFRhZzwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZU5hbWU9e3sgc2luZ3VsYXI6ICdTY3JpcHQnLCBwbHVyYWw6ICdTY3JpcHRzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtkYXRhLnNjcmlwdFRhZ3MuZWRnZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0Lkl0ZW0gaWQ9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5ub2RlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVTY3JpcHRzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5ub2RlLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogUVVFUllfU0NSSVBUVEFHUyB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGUgU2NyaXB0IFRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXNvdXJjZUxpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L1BhZ2U+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRQYWdlO1xuXG5cbiAgICAvLyA8ZGl2PlxuICAgIC8vICAgICA8aDE+VGhlc2UgYXJlIHRoZSBzY3JpcHQgdGFncyByaWdodCBub3c6PC9oMT5cbiAgICAvLyAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZVNjcmlwdHMpXG4gICAgLy8gICAgICAgICBjcmVhdGVTY3JpcHRzKHtcbiAgICAvLyAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJodHRwczovL2ZkOGIzODYwZTE5ZC5uZ3Jvay5pby90ZXN0LXNjcmlwdC5qc1wiLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVNjb3BlOiBcIkFMTFwiXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogUVVFUllfU0NSSVBUVEFHUyB9XVxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgfX0+XG4gICAgLy8gICAgICAgICBDcmVhdGUgU2NyaXB0IFRhZ1xuICAgIC8vICAgICA8L2J1dHRvbj5cblxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICBkYXRhLnNjcmlwdFRhZ3MuZWRnZXMubWFwKGl0ZW0gPT4ge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiAoXG4gICAgLy8gICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLm5vZGUuaWR9PlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubm9kZS5pZH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlU2NyaXB0cyh7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0ubm9kZS5pZFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IFFVRVJZX1NDUklQVFRBR1MgfV1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfX0+RGVsZXRlIFNjcmlwdCBUYWc8L2J1dHRvbj5cbiAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAvLyAgICAgICAgICAgICApXG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICB9XG4gICAgLy8gPC9kaXYgPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/script-page.js\n");

/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

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