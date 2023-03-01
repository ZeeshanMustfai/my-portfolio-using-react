import React from 'react'
import { createRoot } from 'react-dom/client'
import { Hello } from './components'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<Hello />
	</React.StrictMode>
)
