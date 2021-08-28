import React from 'react';
import { Button } from 'antd';

/* eslint-disable react/prop-types */
var PrimaryButton = function PrimaryButton(props) {
  var text = props.text;

  var handleClick = function handleClick() {// const a = 1
  };

  return React.createElement(Button, {
    type: "primary",
    onClick: handleClick
  }, " ", text, " ");
}; // PrimaryButton.propTypes = {
// 	text: PropTypes.string,
// }

export { PrimaryButton };
//# sourceMappingURL=ui-mobile.esm.js.map
