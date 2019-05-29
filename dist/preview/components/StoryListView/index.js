"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.array.some");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.trim");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _native = _interopRequireDefault(require("@emotion/native"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _coreEvents = _interopRequireDefault(require("@storybook/core-events"));

var _addons = _interopRequireDefault(require("@storybook/addons"));

var _text = require("../Shared/text");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SearchBar =
/*#__PURE__*/
_native["default"].TextInput("background:", function (props) {
  return props.theme.borderColor;
}, ";color:", function (props) {
  return props.theme.buttonActiveTextColor;
}, ";border-top-left-radius:5;border-top-right-radius:5;border-bottom-left-radius:5;border-bottom-right-radius:5;font-size:16;margin-horizontal:5;margin-vertical:5;padding-horizontal:5;padding-vertical:5;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcmV2aWV3L2NvbXBvbmVudHMvU3RvcnlMaXN0Vmlldy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUW9EIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9wcmV2aWV3L2NvbXBvbmVudHMvU3RvcnlMaXN0Vmlldy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VjdGlvbkxpc3QsIFRleHRJbnB1dCwgVG91Y2hhYmxlT3BhY2l0eSwgVmlldywgU2FmZUFyZWFWaWV3IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vbmF0aXZlJztcbmltcG9ydCBFdmVudHMgZnJvbSAnQHN0b3J5Ym9vay9jb3JlLWV2ZW50cyc7XG5pbXBvcnQgYWRkb25zIGZyb20gJ0BzdG9yeWJvb2svYWRkb25zJztcbmltcG9ydCB7IEVtb3Rpb25Qcm9wcyB9IGZyb20gJy4uL1NoYXJlZC90aGVtZSc7XG5pbXBvcnQgeyBIZWFkZXIsIE5hbWUgfSBmcm9tICcuLi9TaGFyZWQvdGV4dCc7XG5cbmNvbnN0IFNlYXJjaEJhcjogdHlwZW9mIFRleHRJbnB1dCA9IHN0eWxlZC5UZXh0SW5wdXRgXG4gIGJhY2tncm91bmQ6ICR7KHByb3BzOiBFbW90aW9uUHJvcHMpID0+IHByb3BzLnRoZW1lLmJvcmRlckNvbG9yfTtcbiAgY29sb3I6ICR7KHByb3BzOiBFbW90aW9uUHJvcHMpID0+IHByb3BzLnRoZW1lLmJ1dHRvbkFjdGl2ZVRleHRDb2xvcn07XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTtcbiAgZm9udC1zaXplOiAxNjtcbiAgbWFyZ2luLWhvcml6b250YWw6IDU7XG4gIG1hcmdpbi12ZXJ0aWNhbDogNTtcbiAgcGFkZGluZy1ob3Jpem9udGFsOiA1O1xuICBwYWRkaW5nLXZlcnRpY2FsOiA1O1xuYDtcblxuY29uc3QgSGVhZGVyQ29udGFpbmVyID0gc3R5bGVkLlZpZXdgXG4gIHBhZGRpbmctdmVydGljYWw6IDU7XG5gO1xuXG5pbnRlcmZhY2UgU2VjdGlvblByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IFNlY3Rpb25IZWFkZXI6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFNlY3Rpb25Qcm9wcz4gPSAoe1xuICB0aXRsZSxcbiAgc2VsZWN0ZWQsXG59OiBTZWN0aW9uUHJvcHMpID0+IChcbiAgPEhlYWRlckNvbnRhaW5lciBrZXk9e3RpdGxlfT5cbiAgICA8SGVhZGVyIHNlbGVjdGVkPXtzZWxlY3RlZH0+e3RpdGxlfTwvSGVhZGVyPlxuICA8L0hlYWRlckNvbnRhaW5lcj5cbik7XG5cbmludGVyZmFjZSBMaXN0SXRlbVByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAga2luZDogc3RyaW5nO1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgb25QcmVzczogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgSXRlbVRvdWNoYWJsZTogdHlwZW9mIFRvdWNoYWJsZU9wYWNpdHkgPSBzdHlsZWQuVG91Y2hhYmxlT3BhY2l0eWBcbiAgcGFkZGluZy1ob3Jpem9udGFsOiAxNjtcbiAgcGFkZGluZy12ZXJ0aWNhbDogNTtcbmA7XG5cbmNvbnN0IExpc3RJdGVtOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxMaXN0SXRlbVByb3BzPiA9ICh7IGtpbmQsIHRpdGxlLCBzZWxlY3RlZCwgb25QcmVzcyB9KSA9PiAoXG4gIDxJdGVtVG91Y2hhYmxlXG4gICAga2V5PXt0aXRsZX1cbiAgICBvblByZXNzPXtvblByZXNzfVxuICAgIGFjdGl2ZU9wYWNpdHk9ezAuOH1cbiAgICB0ZXN0SUQ9e2BTdG9yeWJvb2suTGlzdEl0ZW0uJHtraW5kfS4ke3RpdGxlfWB9XG4gICAgYWNjZXNzaWJpbGl0eUxhYmVsPXtgU3Rvcnlib29rLkxpc3RJdGVtLiR7dGl0bGV9YH1cbiAgPlxuICAgIDxOYW1lIHNlbGVjdGVkPXtzZWxlY3RlZH0+e3RpdGxlfTwvTmFtZT5cbiAgPC9JdGVtVG91Y2hhYmxlPlxuKTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc3RvcmllczogYW55O1xuICBzZWxlY3RlZEtpbmQ/OiBzdHJpbmc7XG4gIHNlbGVjdGVkU3Rvcnk/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGRhdGE6IGFueVtdO1xuICBvcmlnaW5hbERhdGE6IGFueVtdO1xufVxuXG5jb25zdCBMaXN0OiB0eXBlb2YgU2VjdGlvbkxpc3QgPSBzdHlsZWQuU2VjdGlvbkxpc3RgXG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1ib3R0b206IDQwO1xuYDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3J5TGlzdFZpZXcgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiBbXSxcbiAgICAgIG9yaWdpbmFsRGF0YTogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNoYW5uZWwgPSBhZGRvbnMuZ2V0Q2hhbm5lbCgpO1xuICAgIGNoYW5uZWwub24oRXZlbnRzLlNUT1JZX0FEREVELCB0aGlzLmhhbmRsZVN0b3J5QWRkZWQpO1xuICAgIHRoaXMuaGFuZGxlU3RvcnlBZGRlZCgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgY2hhbm5lbCA9IGFkZG9ucy5nZXRDaGFubmVsKCk7XG4gICAgY2hhbm5lbC5yZW1vdmVMaXN0ZW5lcihFdmVudHMuU1RPUllfQURERUQsIHRoaXMuaGFuZGxlU3RvcnlBZGRlZCk7XG4gIH1cblxuICBoYW5kbGVTdG9yeUFkZGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc3RvcmllcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChzdG9yaWVzKSB7XG4gICAgICBjb25zdCBkYXRhID0gc3Rvcmllcy5kdW1wU3RvcnlCb29rKCkubWFwKFxuICAgICAgICAoc2VjdGlvbjogYW55KSA9PiAoe1xuICAgICAgICAgIHRpdGxlOiBzZWN0aW9uLmtpbmQsXG4gICAgICAgICAgZGF0YTogc2VjdGlvbi5zdG9yaWVzLm1hcCgoc3Rvcnk6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGtleTogc3RvcnksXG4gICAgICAgICAgICBuYW1lOiBzdG9yeSxcbiAgICAgICAgICAgIGtpbmQ6IHNlY3Rpb24ua2luZCxcbiAgICAgICAgICB9KSksXG4gICAgICAgIH0pLFxuICAgICAgICB7fVxuICAgICAgKTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEsIG9yaWdpbmFsRGF0YTogZGF0YSB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlU2VhcmNoVGV4dCA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBxdWVyeSA9IHRleHQudHJpbSgpO1xuICAgIGNvbnN0IHsgb3JpZ2luYWxEYXRhOiBkYXRhIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFxdWVyeSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tWYWx1ZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB2YWx1ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGEucmVkdWNlKChhY2MsIHN0b3J5KSA9PiB7XG4gICAgICBjb25zdCBoYXNUaXRsZSA9IGNoZWNrVmFsdWUoc3RvcnkudGl0bGUpO1xuICAgICAgY29uc3QgaGFzS2luZCA9IHN0b3J5LmRhdGEuc29tZSgocmVmOiBhbnkpID0+IGNoZWNrVmFsdWUocmVmLm5hbWUpKTtcblxuICAgICAgaWYgKGhhc1RpdGxlIHx8IGhhc0tpbmQpIHtcbiAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgIC4uLnN0b3J5LFxuICAgICAgICAgIC8vIGluIGNhc2UgdGhlIHF1ZXJ5IG1hdGNoZXMgY29tcG9uZW50J3MgdGl0bGUsIGFsbCBvZiBpdHMgc3RvcmllcyB3aWxsIGJlIHNob3duXG4gICAgICAgICAgZGF0YTogIWhhc1RpdGxlID8gc3RvcnkuZGF0YS5maWx0ZXIoKHJlZjogYW55KSA9PiBjaGVja1ZhbHVlKHJlZi5uYW1lKSkgOiBzdG9yeS5kYXRhLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZmlsdGVyZWREYXRhIH0pO1xuICB9O1xuXG4gIGNoYW5nZVN0b3J5KGtpbmQ6IHN0cmluZywgc3Rvcnk6IHN0cmluZykge1xuICAgIGNvbnN0IGNoYW5uZWwgPSBhZGRvbnMuZ2V0Q2hhbm5lbCgpO1xuICAgIGNoYW5uZWwuZW1pdChFdmVudHMuU0VUX0NVUlJFTlRfU1RPUlksIHsga2luZCwgc3RvcnkgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RlZEtpbmQsIHNlbGVjdGVkU3RvcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTYWZlQXJlYVZpZXcgc3R5bGU9e3sgZmxleDogMSB9fT5cbiAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgIHRlc3RJRD1cIlN0b3J5Ym9vay5MaXN0Vmlldy5TZWFyY2hCYXJcIlxuICAgICAgICAgIGNsZWFyQnV0dG9uTW9kZT1cIndoaWxlLWVkaXRpbmdcIlxuICAgICAgICAgIGRpc2FibGVGdWxsc2NyZWVuVUlcbiAgICAgICAgICBvbkNoYW5nZVRleHQ9e3RoaXMuaGFuZGxlQ2hhbmdlU2VhcmNoVGV4dH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpbHRlclwiXG4gICAgICAgICAgcmV0dXJuS2V5VHlwZT1cInNlYXJjaFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxMaXN0XG4gICAgICAgICAgdGVzdElEPVwiU3Rvcnlib29rLkxpc3RWaWV3XCJcbiAgICAgICAgICByZW5kZXJJdGVtPXsoeyBpdGVtIH0pID0+IChcbiAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICBraW5kPXtpdGVtLmtpbmR9XG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtpdGVtLmtpbmQgPT09IHNlbGVjdGVkS2luZCAmJiBpdGVtLm5hbWUgPT09IHNlbGVjdGVkU3Rvcnl9XG4gICAgICAgICAgICAgIG9uUHJlc3M9eygpID0+IHRoaXMuY2hhbmdlU3RvcnkoaXRlbS5raW5kLCBpdGVtLm5hbWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHJlbmRlclNlY3Rpb25IZWFkZXI9eyh7IHNlY3Rpb246IHsgdGl0bGUgfSB9KSA9PiAoXG4gICAgICAgICAgICA8U2VjdGlvbkhlYWRlciB0aXRsZT17dGl0bGV9IHNlbGVjdGVkPXt0aXRsZSA9PT0gc2VsZWN0ZWRLaW5kfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAga2V5RXh0cmFjdG9yPXsoaXRlbSwgaW5kZXgpID0+IGl0ZW0gKyBpbmRleH1cbiAgICAgICAgICBzZWN0aW9ucz17ZGF0YX1cbiAgICAgICAgICBzdGlja3lTZWN0aW9uSGVhZGVyc0VuYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAvPlxuICAgICAgPC9TYWZlQXJlYVZpZXc+XG4gICAgKTtcbiAgfVxufVxuIl19 */"));

var HeaderContainer =
/*#__PURE__*/
_native["default"].View("padding-vertical:5;");

var SectionHeader = function SectionHeader(_ref) {
  var title = _ref.title,
      selected = _ref.selected;
  return _react["default"].createElement(HeaderContainer, {
    key: title
  }, _react["default"].createElement(_text.Header, {
    selected: selected
  }, title));
};

var ItemTouchable =
/*#__PURE__*/
_native["default"].TouchableOpacity("padding-horizontal:16;padding-vertical:5;");

var ListItem = function ListItem(_ref2) {
  var kind = _ref2.kind,
      title = _ref2.title,
      selected = _ref2.selected,
      onPress = _ref2.onPress;
  return _react["default"].createElement(ItemTouchable, {
    key: title,
    onPress: onPress,
    activeOpacity: 0.8,
    testID: "Storybook.ListItem.".concat(kind, ".").concat(title),
    accessibilityLabel: "Storybook.ListItem.".concat(title)
  }, _react["default"].createElement(_text.Name, {
    selected: selected
  }, title));
};

var List =
/*#__PURE__*/
_native["default"].SectionList("flex:1;margin-bottom:40;");

var StoryListView =
/*#__PURE__*/
function (_Component) {
  _inherits(StoryListView, _Component);

  function StoryListView(props) {
    var _this;

    _classCallCheck(this, StoryListView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StoryListView).call(this, props));

    _this.handleStoryAdded = function () {
      var stories = _this.props.stories;

      if (stories) {
        var data = stories.dumpStoryBook().map(function (section) {
          return {
            title: section.kind,
            data: section.stories.map(function (story) {
              return {
                key: story,
                name: story,
                kind: section.kind
              };
            })
          };
        }, {});

        _this.setState({
          data: data,
          originalData: data
        });
      }
    };

    _this.handleChangeSearchText = function (text) {
      var query = text.trim();
      var data = _this.state.originalData;

      if (!query) {
        _this.setState({
          data: data
        });

        return;
      }

      var checkValue = function checkValue(value) {
        return value.toLowerCase().includes(query.toLowerCase());
      };

      var filteredData = data.reduce(function (acc, story) {
        var hasTitle = checkValue(story.title);
        var hasKind = story.data.some(function (ref) {
          return checkValue(ref.name);
        });

        if (hasTitle || hasKind) {
          acc.push(Object.assign({}, story, {
            // in case the query matches component's title, all of its stories will be shown
            data: !hasTitle ? story.data.filter(function (ref) {
              return checkValue(ref.name);
            }) : story.data
          }));
        }

        return acc;
      }, []);

      _this.setState({
        data: filteredData
      });
    };

    _this.state = {
      data: [],
      originalData: []
    };
    return _this;
  }

  _createClass(StoryListView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var channel = _addons["default"].getChannel();

      channel.on(_coreEvents["default"].STORY_ADDED, this.handleStoryAdded);
      this.handleStoryAdded();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var channel = _addons["default"].getChannel();

      channel.removeListener(_coreEvents["default"].STORY_ADDED, this.handleStoryAdded);
    }
  }, {
    key: "changeStory",
    value: function changeStory(kind, story) {
      var channel = _addons["default"].getChannel();

      channel.emit(_coreEvents["default"].SET_CURRENT_STORY, {
        kind: kind,
        story: story
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          selectedKind = _this$props.selectedKind,
          selectedStory = _this$props.selectedStory;
      var data = this.state.data;
      return _react["default"].createElement(_reactNative.SafeAreaView, {
        style: {
          flex: 1
        }
      }, _react["default"].createElement(SearchBar, {
        testID: "Storybook.ListView.SearchBar",
        clearButtonMode: "while-editing",
        disableFullscreenUI: true,
        onChangeText: this.handleChangeSearchText,
        placeholder: "Filter",
        returnKeyType: "search"
      }), _react["default"].createElement(List, {
        testID: "Storybook.ListView",
        renderItem: function renderItem(_ref3) {
          var item = _ref3.item;
          return _react["default"].createElement(ListItem, {
            title: item.name,
            kind: item.kind,
            selected: item.kind === selectedKind && item.name === selectedStory,
            onPress: function onPress() {
              return _this2.changeStory(item.kind, item.name);
            }
          });
        },
        renderSectionHeader: function renderSectionHeader(_ref4) {
          var title = _ref4.section.title;
          return _react["default"].createElement(SectionHeader, {
            title: title,
            selected: title === selectedKind
          });
        },
        keyExtractor: function keyExtractor(item, index) {
          return item + index;
        },
        sections: data,
        stickySectionHeadersEnabled: false
      }));
    }
  }]);

  return StoryListView;
}(_react.Component);

exports["default"] = StoryListView;