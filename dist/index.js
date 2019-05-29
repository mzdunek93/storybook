"use strict";

require("core-js/modules/es.function.bind");

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.raw = exports.getStorybookUI = exports.getStorybook = exports.configure = exports.clearDecorators = exports.addParameters = exports.addDecorator = exports.setAddon = exports.storiesOf = void 0;

var _preview = _interopRequireDefault(require("./preview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var preview = new _preview["default"]();
var storiesOf = preview.api().storiesOf.bind(preview);
exports.storiesOf = storiesOf;
var setAddon = preview.api().setAddon.bind(preview);
exports.setAddon = setAddon;
var addDecorator = preview.api().addDecorator.bind(preview);
exports.addDecorator = addDecorator;
var addParameters = preview.api().addParameters.bind(preview);
exports.addParameters = addParameters;
var clearDecorators = preview.api().clearDecorators.bind(preview);
exports.clearDecorators = clearDecorators;
var configure = preview.configure;
exports.configure = configure;
var getStorybook = preview.api().getStorybook.bind(preview);
exports.getStorybook = getStorybook;
var getStorybookUI = preview.getStorybookUI;
exports.getStorybookUI = getStorybookUI;
var raw = preview.api().raw.bind(preview);
exports.raw = raw;