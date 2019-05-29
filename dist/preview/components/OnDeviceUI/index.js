"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("regenerator-runtime/runtime");

var _native = _interopRequireDefault(require("@emotion/native"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _coreEvents = _interopRequireDefault(require("@storybook/core-events"));

var _addons = _interopRequireDefault(require("@storybook/addons"));

var _StoryListView = _interopRequireDefault(require("../StoryListView"));

var _StoryView = _interopRequireDefault(require("../StoryView"));

var _addons2 = _interopRequireDefault(require("./addons"));

var _panel = _interopRequireDefault(require("./panel"));

var _navigation = _interopRequireDefault(require("./navigation"));

var _absolutePositionedKeyboardAwareView = _interopRequireDefault(require("./absolute-positioned-keyboard-aware-view"));

var _constants = require("./navigation/constants");

var _animation = require("./animation");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ANIMATION_DURATION = 300;
var IS_IOS = _reactNative.Platform.OS === 'ios';

var Preview =
/*#__PURE__*/
_native["default"].TouchableOpacity("flex:1;border-left-width:", function (props) {
  return props.disabled ? '0' : '1';
}, ";border-top-width:", function (props) {
  return props.disabled ? '0' : '1';
}, ";border-right-width:", function (props) {
  return props.disabled ? '0' : '1';
}, ";border-bottom-width:", function (props) {
  return props.disabled ? '0' : '1';
}, ";border-color:", function (props) {
  return props.disabled ? 'transparent' : props.theme.previewBorderColor;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcmV2aWV3L2NvbXBvbmVudHMvT25EZXZpY2VVSS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RnRSIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvcHJldmlldy9jb21wb25lbnRzL09uRGV2aWNlVUkvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBLZXlib2FyZCxcbiAgS2V5Ym9hcmRBdm9pZGluZ1ZpZXcsXG4gIFBsYXRmb3JtLFxuICBBbmltYXRlZCxcbiAgVG91Y2hhYmxlT3BhY2l0eSxcbiAgVG91Y2hhYmxlT3BhY2l0eVByb3BzLFxufSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9uYXRpdmUnO1xuaW1wb3J0IEV2ZW50cyBmcm9tICdAc3Rvcnlib29rL2NvcmUtZXZlbnRzJztcbmltcG9ydCBhZGRvbnMgZnJvbSAnQHN0b3J5Ym9vay9hZGRvbnMnO1xuaW1wb3J0IENoYW5uZWwgZnJvbSAnQHN0b3J5Ym9vay9jaGFubmVscyc7XG5pbXBvcnQgU3RvcnlMaXN0VmlldyBmcm9tICcuLi9TdG9yeUxpc3RWaWV3JztcbmltcG9ydCBTdG9yeVZpZXcgZnJvbSAnLi4vU3RvcnlWaWV3JztcbmltcG9ydCBBZGRvbnMgZnJvbSAnLi9hZGRvbnMnO1xuaW1wb3J0IFBhbmVsIGZyb20gJy4vcGFuZWwnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9uYXZpZ2F0aW9uJztcbmltcG9ydCBBYnNvbHV0ZVBvc2l0aW9uZWRLZXlib2FyZEF3YXJlVmlldywge1xuICBQcmV2aWV3RGltZW5zLFxufSBmcm9tICcuL2Fic29sdXRlLXBvc2l0aW9uZWQta2V5Ym9hcmQtYXdhcmUtdmlldyc7XG5pbXBvcnQgeyBQUkVWSUVXIH0gZnJvbSAnLi9uYXZpZ2F0aW9uL2NvbnN0YW50cyc7XG5pbXBvcnQge1xuICBnZXRQcmV2aWV3UG9zaXRpb24sXG4gIGdldFByZXZpZXdTY2FsZSxcbiAgZ2V0QWRkb25QYW5lbFBvc2l0aW9uLFxuICBnZXROYXZpZ2F0b3JQYW5lbFBvc2l0aW9uLFxufSBmcm9tICcuL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBFbW90aW9uUHJvcHMgfSBmcm9tICcuLi9TaGFyZWQvdGhlbWUnO1xuXG5jb25zdCBBTklNQVRJT05fRFVSQVRJT04gPSAzMDA7XG5jb25zdCBJU19JT1MgPSBQbGF0Zm9ybS5PUyA9PT0gJ2lvcyc7XG5cbmludGVyZmFjZSBPbkRldmljZVVJUHJvcHMge1xuICBzdG9yaWVzOiBhbnk7XG4gIHVybD86IHN0cmluZztcbiAgdGFiT3Blbj86IG51bWJlcjtcbiAgaXNVSUhpZGRlbj86IGJvb2xlYW47XG4gIGdldEluaXRpYWxTdG9yeT86ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55O1xuICBzaG91bGREaXNhYmxlS2V5Ym9hcmRBdm9pZGluZ1ZpZXc/OiBib29sZWFuO1xuICBrZXlib2FyZEF2b2lkaW5nVmlld1ZlcnRpY2FsT2Zmc2V0PzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgT25EZXZpY2VVSVN0YXRlIHtcbiAgc2VsZWN0aW9uOiBhbnk7XG4gIHN0b3J5Rm46IGFueTtcbiAgdGFiT3BlbjogbnVtYmVyO1xuICBzbGlkZUJldHdlZW5BbmltYXRpb246IGJvb2xlYW47XG4gIHByZXZpZXdXaWR0aDogbnVtYmVyO1xuICBwcmV2aWV3SGVpZ2h0OiBudW1iZXI7XG59XG5cbnR5cGUgRW1vdGlvblByZXZpZXdQcm9wcyA9IEVtb3Rpb25Qcm9wcyAmIFRvdWNoYWJsZU9wYWNpdHlQcm9wcztcblxuY29uc3QgUHJldmlldzogdHlwZW9mIFRvdWNoYWJsZU9wYWNpdHkgPSBzdHlsZWQuVG91Y2hhYmxlT3BhY2l0eWBcbiAgZmxleDogMTtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6ICR7KHByb3BzOiBFbW90aW9uUHJldmlld1Byb3BzKSA9PiAocHJvcHMuZGlzYWJsZWQgPyAnMCcgOiAnMScpfTtcbiAgYm9yZGVyLXRvcC13aWR0aDogJHsocHJvcHM6IEVtb3Rpb25QcmV2aWV3UHJvcHMpID0+IChwcm9wcy5kaXNhYmxlZCA/ICcwJyA6ICcxJyl9O1xuICBib3JkZXItcmlnaHQtd2lkdGg6ICR7KHByb3BzOiBFbW90aW9uUHJldmlld1Byb3BzKSA9PiAocHJvcHMuZGlzYWJsZWQgPyAnMCcgOiAnMScpfTtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogJHsocHJvcHM6IEVtb3Rpb25QcmV2aWV3UHJvcHMpID0+IChwcm9wcy5kaXNhYmxlZCA/ICcwJyA6ICcxJyl9O1xuICBib3JkZXItY29sb3I6ICR7KHByb3BzOiBFbW90aW9uUHJldmlld1Byb3BzKSA9PlxuICAgIHByb3BzLmRpc2FibGVkID8gJ3RyYW5zcGFyZW50JyA6IHByb3BzLnRoZW1lLnByZXZpZXdCb3JkZXJDb2xvcn07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPbkRldmljZVVJIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxPbkRldmljZVVJUHJvcHMsIE9uRGV2aWNlVUlTdGF0ZT4ge1xuICBhbmltYXRlZFZhbHVlOiBBbmltYXRlZC5WYWx1ZTtcbiAgY2hhbm5lbDogQ2hhbm5lbDtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogT25EZXZpY2VVSVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHRhYk9wZW4gPSBwcm9wcy50YWJPcGVuIHx8IFBSRVZJRVc7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRhYk9wZW4sXG4gICAgICBzbGlkZUJldHdlZW5BbmltYXRpb246IGZhbHNlLFxuICAgICAgc2VsZWN0aW9uOiB7fSxcbiAgICAgIHN0b3J5Rm46IG51bGwsXG4gICAgICBwcmV2aWV3V2lkdGg6IDAsXG4gICAgICBwcmV2aWV3SGVpZ2h0OiAwLFxuICAgIH07XG4gICAgdGhpcy5hbmltYXRlZFZhbHVlID0gbmV3IEFuaW1hdGVkLlZhbHVlKHRhYk9wZW4pO1xuICAgIHRoaXMuY2hhbm5lbCA9IGFkZG9ucy5nZXRDaGFubmVsKCk7XG4gIH1cblxuICBhc3luYyBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgeyBnZXRJbml0aWFsU3RvcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGdldEluaXRpYWxTdG9yeSkge1xuICAgICAgY29uc3Qgc3RvcnkgPSBhd2FpdCBnZXRJbml0aWFsU3RvcnkoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3Rpb246IHN0b3J5IHx8IHt9LFxuICAgICAgICBzdG9yeUZuOiBzdG9yeSA/IHN0b3J5LnN0b3J5Rm4gOiBudWxsLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuY2hhbm5lbC5vbihFdmVudHMuU0VMRUNUX1NUT1JZLCB0aGlzLmhhbmRsZVN0b3J5Q2hhbmdlKTtcbiAgICB0aGlzLmNoYW5uZWwub24oRXZlbnRzLkZPUkNFX1JFX1JFTkRFUiwgdGhpcy5mb3JjZVJlUmVuZGVyKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2hhbm5lbC5yZW1vdmVMaXN0ZW5lcihFdmVudHMuU0VMRUNUX1NUT1JZLCB0aGlzLmhhbmRsZVN0b3J5Q2hhbmdlKTtcbiAgICB0aGlzLmNoYW5uZWwucmVtb3ZlTGlzdGVuZXIoRXZlbnRzLkZPUkNFX1JFX1JFTkRFUiwgdGhpcy5mb3JjZVJlUmVuZGVyKTtcbiAgfVxuXG4gIG9uTGF5b3V0ID0gKHsgcHJldmlld1dpZHRoLCBwcmV2aWV3SGVpZ2h0IH06IFByZXZpZXdEaW1lbnMpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJldmlld1dpZHRoLCBwcmV2aWV3SGVpZ2h0IH0pO1xuICB9O1xuXG4gIGhhbmRsZU9wZW5QcmV2aWV3ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlVG9nZ2xlVGFiKFBSRVZJRVcpO1xuICB9O1xuXG4gIGZvcmNlUmVSZW5kZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9O1xuXG4gIGhhbmRsZVN0b3J5Q2hhbmdlID0gKHNlbGVjdGlvbjogYW55KSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3Rpb246IHByZXZTZWxlY3Rpb24gfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHNlbGVjdGlvbi5raW5kID09PSBwcmV2U2VsZWN0aW9uLmtpbmQgJiYgc2VsZWN0aW9uLnN0b3J5ID09PSBwcmV2U2VsZWN0aW9uLnN0b3J5KSB7XG4gICAgICB0aGlzLmhhbmRsZVRvZ2dsZVRhYihQUkVWSUVXKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3Rpb246IHtcbiAgICAgICAga2luZDogc2VsZWN0aW9uLmtpbmQsXG4gICAgICAgIHN0b3J5OiBzZWxlY3Rpb24uc3RvcnksXG4gICAgICB9LFxuICAgICAgc3RvcnlGbjogc2VsZWN0aW9uLnN0b3J5Rm4sXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlVG9nZ2xlVGFiID0gKG5ld1RhYk9wZW46IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHsgdGFiT3BlbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAobmV3VGFiT3BlbiA9PT0gdGFiT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBBbmltYXRlZC50aW1pbmcodGhpcy5hbmltYXRlZFZhbHVlLCB7XG4gICAgICB0b1ZhbHVlOiBuZXdUYWJPcGVuLFxuICAgICAgZHVyYXRpb246IEFOSU1BVElPTl9EVVJBVElPTixcbiAgICAgIHVzZU5hdGl2ZURyaXZlcjogdHJ1ZSxcbiAgICB9KS5zdGFydCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGFiT3BlbjogbmV3VGFiT3BlbixcbiAgICAgIC8vIFRydWUgaWYgc3dpcGluZyBiZXR3ZWVuIG5hdmlnYXRvciBhbmQgYWRkb25zXG4gICAgICBzbGlkZUJldHdlZW5BbmltYXRpb246IHRhYk9wZW4gKyBuZXdUYWJPcGVuID09PSBQUkVWSUVXLFxuICAgIH0pO1xuICAgIC8vIGNsb3NlIHRoZSBrZXlib2FyZCBvcGVuZWQgZnJvbSBhIFRleHRJbnB1dCBmcm9tIHN0b3J5IGxpc3Qgb3Iga25vYnNcbiAgICBpZiAobmV3VGFiT3BlbiA9PT0gUFJFVklFVykge1xuICAgICAgS2V5Ym9hcmQuZGlzbWlzcygpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3RvcmllcyxcbiAgICAgIHVybCxcbiAgICAgIGlzVUlIaWRkZW4sXG4gICAgICBzaG91bGREaXNhYmxlS2V5Ym9hcmRBdm9pZGluZ1ZpZXcsXG4gICAgICBrZXlib2FyZEF2b2lkaW5nVmlld1ZlcnRpY2FsT2Zmc2V0LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qge1xuICAgICAgdGFiT3BlbixcbiAgICAgIHNsaWRlQmV0d2VlbkFuaW1hdGlvbixcbiAgICAgIHNlbGVjdGlvbixcbiAgICAgIHN0b3J5Rm4sXG4gICAgICBwcmV2aWV3V2lkdGgsXG4gICAgICBwcmV2aWV3SGVpZ2h0LFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgcHJldmlld1dyYXBwZXJTdHlsZXMgPSBbXG4gICAgICB7IGZsZXg6IDEgfSxcbiAgICAgIGdldFByZXZpZXdQb3NpdGlvbih0aGlzLmFuaW1hdGVkVmFsdWUsIHByZXZpZXdXaWR0aCwgcHJldmlld0hlaWdodCwgc2xpZGVCZXR3ZWVuQW5pbWF0aW9uKSxcbiAgICBdO1xuXG4gICAgY29uc3QgcHJldmlld1N0eWxlcyA9IFt7IGZsZXg6IDEgfSwgZ2V0UHJldmlld1NjYWxlKHRoaXMuYW5pbWF0ZWRWYWx1ZSwgc2xpZGVCZXR3ZWVuQW5pbWF0aW9uKV07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEtleWJvYXJkQXZvaWRpbmdWaWV3XG4gICAgICAgIGVuYWJsZWQ9eyFzaG91bGREaXNhYmxlS2V5Ym9hcmRBdm9pZGluZ1ZpZXcgfHwgdGFiT3BlbiAhPT0gUFJFVklFV31cbiAgICAgICAgYmVoYXZpb3I9e0lTX0lPUyA/ICdwYWRkaW5nJyA6IG51bGx9XG4gICAgICAgIGtleWJvYXJkVmVydGljYWxPZmZzZXQ9e2tleWJvYXJkQXZvaWRpbmdWaWV3VmVydGljYWxPZmZzZXR9XG4gICAgICAgIHN0eWxlPXt7IGZsZXg6IDEgfX1cbiAgICAgID5cbiAgICAgICAgPEFic29sdXRlUG9zaXRpb25lZEtleWJvYXJkQXdhcmVWaWV3XG4gICAgICAgICAgb25MYXlvdXQ9e3RoaXMub25MYXlvdXR9XG4gICAgICAgICAgcHJldmlld0hlaWdodD17cHJldmlld0hlaWdodH1cbiAgICAgICAgICBwcmV2aWV3V2lkdGg9e3ByZXZpZXdXaWR0aH1cbiAgICAgICAgPlxuICAgICAgICAgIDxBbmltYXRlZC5WaWV3IHN0eWxlPXtwcmV2aWV3V3JhcHBlclN0eWxlc30+XG4gICAgICAgICAgICA8QW5pbWF0ZWQuVmlldyBzdHlsZT17cHJldmlld1N0eWxlc30+XG4gICAgICAgICAgICAgIDxQcmV2aWV3XG4gICAgICAgICAgICAgICAgYWNjZXNzaWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RhYk9wZW4gPT09IFBSRVZJRVd9XG4gICAgICAgICAgICAgICAgb25QcmVzcz17dGhpcy5oYW5kbGVPcGVuUHJldmlld31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTdG9yeVZpZXdcbiAgICAgICAgICAgICAgICAgIHVybD17dXJsfVxuICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgICBzdG9yeUZuPXtzdG9yeUZufVxuICAgICAgICAgICAgICAgICAgbGlzdGVuVG9FdmVudHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvUHJldmlldz5cbiAgICAgICAgICAgIDwvQW5pbWF0ZWQuVmlldz5cbiAgICAgICAgICA8L0FuaW1hdGVkLlZpZXc+XG4gICAgICAgICAgPFBhbmVsIHN0eWxlPXtnZXROYXZpZ2F0b3JQYW5lbFBvc2l0aW9uKHRoaXMuYW5pbWF0ZWRWYWx1ZSwgcHJldmlld1dpZHRoKX0+XG4gICAgICAgICAgICA8U3RvcnlMaXN0Vmlld1xuICAgICAgICAgICAgICBzdG9yaWVzPXtzdG9yaWVzfVxuICAgICAgICAgICAgICBzZWxlY3RlZEtpbmQ9e3NlbGVjdGlvbi5raW5kfVxuICAgICAgICAgICAgICBzZWxlY3RlZFN0b3J5PXtzZWxlY3Rpb24uc3Rvcnl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgPFBhbmVsIHN0eWxlPXtnZXRBZGRvblBhbmVsUG9zaXRpb24odGhpcy5hbmltYXRlZFZhbHVlLCBwcmV2aWV3V2lkdGgpfT5cbiAgICAgICAgICAgIDxBZGRvbnMgLz5cbiAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICA8L0Fic29sdXRlUG9zaXRpb25lZEtleWJvYXJkQXdhcmVWaWV3PlxuICAgICAgICA8TmF2aWdhdGlvblxuICAgICAgICAgIHRhYk9wZW49e3RhYk9wZW59XG4gICAgICAgICAgb25DaGFuZ2VUYWI9e3RoaXMuaGFuZGxlVG9nZ2xlVGFifVxuICAgICAgICAgIGluaXRpYWxVaVZpc2libGU9eyFpc1VJSGlkZGVufVxuICAgICAgICAvPlxuICAgICAgPC9LZXlib2FyZEF2b2lkaW5nVmlldz5cbiAgICApO1xuICB9XG59XG4iXX0= */"));

var OnDeviceUI =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(OnDeviceUI, _PureComponent);

  function OnDeviceUI(props) {
    var _this;

    _classCallCheck(this, OnDeviceUI);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OnDeviceUI).call(this, props));
    _this.animatedValue = void 0;
    _this.channel = void 0;

    _this.onLayout = function (_ref) {
      var previewWidth = _ref.previewWidth,
          previewHeight = _ref.previewHeight;

      _this.setState({
        previewWidth: previewWidth,
        previewHeight: previewHeight
      });
    };

    _this.handleOpenPreview = function () {
      _this.handleToggleTab(_constants.PREVIEW);
    };

    _this.forceReRender = function () {
      _this.forceUpdate();
    };

    _this.handleStoryChange = function (selection) {
      var prevSelection = _this.state.selection;

      if (selection.kind === prevSelection.kind && selection.story === prevSelection.story) {
        _this.handleToggleTab(_constants.PREVIEW);
      }

      _this.setState({
        selection: {
          kind: selection.kind,
          story: selection.story
        },
        storyFn: selection.storyFn
      });
    };

    _this.handleToggleTab = function (newTabOpen) {
      var tabOpen = _this.state.tabOpen;

      if (newTabOpen === tabOpen) {
        return;
      }

      _reactNative.Animated.timing(_this.animatedValue, {
        toValue: newTabOpen,
        duration: ANIMATION_DURATION,
        useNativeDriver: true
      }).start();

      _this.setState({
        tabOpen: newTabOpen,
        // True if swiping between navigator and addons
        slideBetweenAnimation: tabOpen + newTabOpen === _constants.PREVIEW
      }); // close the keyboard opened from a TextInput from story list or knobs


      if (newTabOpen === _constants.PREVIEW) {
        _reactNative.Keyboard.dismiss();
      }
    };

    var _tabOpen = props.tabOpen || _constants.PREVIEW;

    _this.state = {
      tabOpen: _tabOpen,
      slideBetweenAnimation: false,
      selection: {},
      storyFn: null,
      previewWidth: 0,
      previewHeight: 0
    };
    _this.animatedValue = new _reactNative.Animated.Value(_tabOpen);
    _this.channel = _addons["default"].getChannel();
    return _this;
  }

  _createClass(OnDeviceUI, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var getInitialStory, story;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                getInitialStory = this.props.getInitialStory;

                if (!getInitialStory) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return getInitialStory();

              case 4:
                story = _context.sent;
                this.setState({
                  selection: story || {},
                  storyFn: story ? story.storyFn : null
                });

              case 6:
                this.channel.on(_coreEvents["default"].SELECT_STORY, this.handleStoryChange);
                this.channel.on(_coreEvents["default"].FORCE_RE_RENDER, this.forceReRender);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.channel.removeListener(_coreEvents["default"].SELECT_STORY, this.handleStoryChange);
      this.channel.removeListener(_coreEvents["default"].FORCE_RE_RENDER, this.forceReRender);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          stories = _this$props.stories,
          url = _this$props.url,
          isUIHidden = _this$props.isUIHidden,
          shouldDisableKeyboardAvoidingView = _this$props.shouldDisableKeyboardAvoidingView,
          keyboardAvoidingViewVerticalOffset = _this$props.keyboardAvoidingViewVerticalOffset;
      var _this$state = this.state,
          tabOpen = _this$state.tabOpen,
          slideBetweenAnimation = _this$state.slideBetweenAnimation,
          selection = _this$state.selection,
          storyFn = _this$state.storyFn,
          previewWidth = _this$state.previewWidth,
          previewHeight = _this$state.previewHeight;
      var previewWrapperStyles = [{
        flex: 1
      }, (0, _animation.getPreviewPosition)(this.animatedValue, previewWidth, previewHeight, slideBetweenAnimation)];
      var previewStyles = [{
        flex: 1
      }, (0, _animation.getPreviewScale)(this.animatedValue, slideBetweenAnimation)];
      return _react["default"].createElement(_reactNative.KeyboardAvoidingView, {
        enabled: !shouldDisableKeyboardAvoidingView || tabOpen !== _constants.PREVIEW,
        behavior: IS_IOS ? 'padding' : null,
        keyboardVerticalOffset: keyboardAvoidingViewVerticalOffset,
        style: {
          flex: 1
        }
      }, _react["default"].createElement(_absolutePositionedKeyboardAwareView["default"], {
        onLayout: this.onLayout,
        previewHeight: previewHeight,
        previewWidth: previewWidth
      }, _react["default"].createElement(_reactNative.Animated.View, {
        style: previewWrapperStyles
      }, _react["default"].createElement(_reactNative.Animated.View, {
        style: previewStyles
      }, _react["default"].createElement(Preview, {
        accessible: false,
        disabled: tabOpen === _constants.PREVIEW,
        onPress: this.handleOpenPreview
      }, _react["default"].createElement(_StoryView["default"], {
        url: url,
        selection: selection,
        storyFn: storyFn,
        listenToEvents: false
      })))), _react["default"].createElement(_panel["default"], {
        style: (0, _animation.getNavigatorPanelPosition)(this.animatedValue, previewWidth)
      }, _react["default"].createElement(_StoryListView["default"], {
        stories: stories,
        selectedKind: selection.kind,
        selectedStory: selection.story
      })), _react["default"].createElement(_panel["default"], {
        style: (0, _animation.getAddonPanelPosition)(this.animatedValue, previewWidth)
      }, _react["default"].createElement(_addons2["default"], null))), _react["default"].createElement(_navigation["default"], {
        tabOpen: tabOpen,
        onChangeTab: this.handleToggleTab,
        initialUiVisible: !isUIHidden
      }));
    }
  }]);

  return OnDeviceUI;
}(_react.PureComponent);

exports["default"] = OnDeviceUI;