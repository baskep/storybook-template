import React from 'react'
import { Button } from 'antd'
import PropTypes from 'prop-types'

import './index.less'

export interface PrimaryButtonProps {
  text: string
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
	const { text } = props

	const handleClick = () => {
		//
	}

	return <Button type="primary" onClick={handleClick} > {text} </ Button>
}

PrimaryButton.propTypes = {
	text: PropTypes.string
}
