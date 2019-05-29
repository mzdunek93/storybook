"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

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

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _emotionTheming = require("emotion-theming");

var _rnHostDetect = _interopRequireDefault(require("rn-host-detect"));

var _addons = _interopRequireDefault(require("@storybook/addons"));

var _coreEvents = _interopRequireDefault(require("@storybook/core-events"));

var _channels = _interopRequireDefault(require("@storybook/channels"));

var _channelWebsocket = _interopRequireDefault(require("@storybook/channel-websocket"));

var _clientApi = require("@storybook/client-api");

var _OnDeviceUI = _interopRequireDefault(require("./components/OnDeviceUI"));

var _StoryView = _interopRequireDefault(require("./components/StoryView"));

var _theme = require("./components/Shared/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var STORAGE_KEY = 'lastOpenedStory';

var Preview =
/*#__PURE__*/
function () {
  function Preview() {
    var _this = this;

    _classCallCheck(this, Preview);

    this.currentStory = void 0;
    this._clientApi = void 0;
    this._stories = void 0;
    this._addons = void 0;
    this._decorators = void 0;

    this.api = function () {
      return _this._clientApi;
    };

    this.configure = function (loadStories, module) {
      loadStories();

      if (module && module.hot) {
        module.hot.accept(function () {
          return _this._sendSetStories();
        }); // TODO remove all global decorators on dispose
      }
    };

    this.getStorybookUI = function () {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var webUrl = null;
      var channel = null;
      var onDeviceUI = params.onDeviceUI !== false;
      var initialSelection = params.initialSelection,
          shouldPersistSelection = params.shouldPersistSelection; // should the initial story be sent to storybookUI
      // set to true if using disableWebsockets or if connection to WebsocketServer fails.

      var setInitialStory = false;

      try {
        channel = _addons["default"].getChannel();
      } catch (e) {// getChannel throws if the channel is not defined,
        // which is fine in this case (we will define it below)
      }

      if (!channel || params.resetStorybook) {
        if (onDeviceUI && params.disableWebsockets) {
          channel = new _channels["default"]({
            async: true
          });
        } else {
          var host = (0, _rnHostDetect["default"])(params.host || 'localhost');
          var port = ":".concat(params.port || 7007);
          var query = params.query || '';
          var secured = params.secured;
          var websocketType = secured ? 'wss' : 'ws';
          var httpType = secured ? 'https' : 'http';
          var url = "".concat(websocketType, "://").concat(host).concat(port, "/").concat(query);
          webUrl = "".concat(httpType, "://").concat(host).concat(port);
          channel = (0, _channelWebsocket["default"])({
            url: url,
            async: onDeviceUI,
            onError: function onError() {
              // We are both emitting event and telling the component to get initial story. It may happen that component is created before the error or vise versa.
              // This way we handle both cases
              _this._setInitialStory(initialSelection, shouldPersistSelection);

              setInitialStory = true;
            }
          });
        }

        _addons["default"].setChannel(channel);

        _this._stories.setChannel(channel);

        channel.emit(_coreEvents["default"].CHANNEL_CREATED);
      }

      channel.on(_coreEvents["default"].GET_STORIES, function () {
        return _this._sendSetStories();
      });
      channel.on(_coreEvents["default"].SET_CURRENT_STORY, function (d) {
        return _this._selectStoryEvent(d);
      });

      _this._sendSetStories(); // If the app is started with server running, set the story as the one selected in the browser


      if (webUrl) {
        _this._sendGetCurrentStory();
      } else {
        setInitialStory = true;
      }

      var preview = _this;

      _addons["default"].loadAddons(_this._clientApi);

      var appliedTheme = Object.assign({}, _theme.theme, params.theme); // react-native hot module loader must take in a Class - https://github.com/facebook/react-native/issues/10991
      // eslint-disable-next-line react/prefer-stateless-function

      return (
        /*#__PURE__*/
        function (_React$PureComponent) {
          _inherits(StorybookRoot, _React$PureComponent);

          function StorybookRoot() {
            _classCallCheck(this, StorybookRoot);

            return _possibleConstructorReturn(this, _getPrototypeOf(StorybookRoot).apply(this, arguments));
          }

          _createClass(StorybookRoot, [{
            key: "render",
            value: function render() {
              if (onDeviceUI) {
                return _react["default"].createElement(_emotionTheming.ThemeProvider, {
                  theme: appliedTheme
                }, _react["default"].createElement(_OnDeviceUI["default"], {
                  stories: preview._stories,
                  url: webUrl,
                  isUIHidden: params.isUIHidden,
                  tabOpen: params.tabOpen,
                  getInitialStory: setInitialStory ? preview._getInitialStory(initialSelection, shouldPersistSelection) : null,
                  shouldDisableKeyboardAvoidingView: params.shouldDisableKeyboardAvoidingView,
                  keyboardAvoidingViewVerticalOffset: params.keyboardAvoidingViewVerticalOffset
                }));
              }

              return _react["default"].createElement(_emotionTheming.ThemeProvider, {
                theme: appliedTheme
              }, _react["default"].createElement(_StoryView["default"], {
                url: webUrl,
                listenToEvents: true
              }));
            }
          }]);

          return StorybookRoot;
        }(_react["default"].PureComponent)
      );
    };

    this._setInitialStory =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(initialSelection) {
        var shouldPersistSelection,
            story,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                shouldPersistSelection = _args.length > 1 && _args[1] !== undefined ? _args[1] : true;
                _context.next = 3;
                return _this._getInitialStory(initialSelection, shouldPersistSelection)();

              case 3:
                story = _context.sent;

                if (story) {
                  _this._selectStory(story);
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this._getInitialStory = function (initialSelection) {
      var shouldPersistSelection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return (
        /*#__PURE__*/
        _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var story, value, previousStory, dump, nonEmptyKind;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  story = null;

                  if (!(initialSelection && _this._checkStory(initialSelection))) {
                    _context2.next = 5;
                    break;
                  }

                  story = initialSelection;
                  _context2.next = 11;
                  break;

                case 5:
                  if (!shouldPersistSelection) {
                    _context2.next = 11;
                    break;
                  }

                  _context2.next = 8;
                  return _reactNative.AsyncStorage.getItem(STORAGE_KEY);

                case 8:
                  value = _context2.sent;
                  previousStory = JSON.parse(value);

                  if (_this._checkStory(previousStory)) {
                    story = previousStory;
                  }

                case 11:
                  if (!story) {
                    _context2.next = 13;
                    break;
                  }

                  return _context2.abrupt("return", _this._getStory(story));

                case 13:
                  dump = _this._stories.dumpStoryBook();
                  nonEmptyKind = dump.find(function (kind) {
                    return kind.stories.length > 0;
                  });

                  if (!nonEmptyKind) {
                    _context2.next = 17;
                    break;
                  }

                  return _context2.abrupt("return", _this._getStory({
                    kind: nonEmptyKind.kind,
                    story: nonEmptyKind.stories[0]
                  }));

                case 17:
                  return _context2.abrupt("return", null);

                case 18:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))
      );
    };

    this._addons = {};
    this._decorators = [];
    this._stories = new _clientApi.StoryStore({});
    this._clientApi = new _clientApi.ClientApi({
      storyStore: this._stories
    });
  }

  _createClass(Preview, [{
    key: "_sendSetStories",
    value: function _sendSetStories() {
      var channel = _addons["default"].getChannel();

      var stories = this._stories.extract();

      channel.emit(_coreEvents["default"].SET_STORIES, {
        stories: stories
      });
      channel.emit(_coreEvents["default"].STORIES_CONFIGURED);

      if (this.currentStory) {
        channel.emit(_coreEvents["default"].SET_CURRENT_STORY, this.currentStory);
      }
    }
  }, {
    key: "_sendGetCurrentStory",
    value: function _sendGetCurrentStory() {
      var channel = _addons["default"].getChannel();

      channel.emit(_coreEvents["default"].GET_CURRENT_STORY);
    }
  }, {
    key: "_getStory",
    value: function _getStory(selection) {
      var kind = selection.kind,
          story = selection.story;

      var storyFn = this._stories.getStoryWithContext(kind, story);

      return Object.assign({}, selection, {
        storyFn: storyFn
      });
    }
  }, {
    key: "_selectStoryEvent",
    value: function _selectStoryEvent(selection) {
      _reactNative.AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(selection));

      if (selection) {
        var story = this._getStory(selection);

        this._selectStory(story);
      }
    }
  }, {
    key: "_selectStory",
    value: function _selectStory(story) {
      this.currentStory = story;

      var channel = _addons["default"].getChannel();

      channel.emit(_coreEvents["default"].SELECT_STORY, story);
    }
  }, {
    key: "_checkStory",
    value: function _checkStory(selection) {
      if (!selection || _typeof(selection) !== 'object' || !selection.kind || !selection.story) {
        return null;
      }

      var story = this._getStory(selection);

      if (story.storyFn === null) {
        return null;
      }

      return story;
    }
  }]);

  return Preview;
}();

exports["default"] = Preview;