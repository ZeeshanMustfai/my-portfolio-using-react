import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.module.less'
import Home from './pages/Home'
const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>
)
