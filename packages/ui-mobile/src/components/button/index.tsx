/* eslint-disable react/prop-types */
import React from 'react'
import { Button } from 'antd'

import './index.less'

export interface PrimaryButtonProps {
  text: string
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
	const { text } = props

	const handleClick = () => {
		// const a = 1
	}

	return <Button type="primary" onClick={handleClick} > {text} </ Button>
}

// PrimaryButton.propTypes = {
// 	text: PropTypes.string,
// }
