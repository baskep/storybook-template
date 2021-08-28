'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var antd = require('antd');

/* eslint-disable react/prop-types */
var PrimaryButton = function PrimaryButton(props) {
  var text = props.text;

  var handleClick = function handleClick() {// const a = 1
  };

  return React.createElement(antd.Button, {
    type: "primary",
    onClick: handleClick
  }, " ", text, " ");
}; // PrimaryButton.propTypes = {
// 	text: PropTypes.string,
// }

exports.PrimaryButton = PrimaryButton;
//# sourceMappingURL=ui-mobile.cjs.development.js.map
