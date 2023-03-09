import React, { ComponentProps } from 'react'
import { Button as AntButton } from 'antd'

enum ButtonTypes {
	default = 'default',
	primary = 'primary',
	ghost = 'ghost',
	dashed = 'dashed',
	link = 'link',
	text = 'text',
}

interface P extends ComponentProps<typeof AntButton> {
	label?: string
	backgroundColor?: string
}

export const Button = ({
	label,
	disabled,
	color,
	loading,
	backgroundColor,
	children,
	style,
	...props
}: P) => (
	<AntButton
		style={{ ...style, backgroundColor }}
		disabled={disabled}
		color={color}
		loading={loading}
		{...props}
	>
		{label || children}
	</AntButton>
)

export default Button
