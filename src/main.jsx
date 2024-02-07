import React from 'react'
import ReactDOM from 'react-dom/client'
import { App}  from './components/App'
import { Card } from './components/App'


import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
<Card>
	<h1>Card title</h1>
	<p>Text between opening and closing tag</p>
</Card>
  </React.StrictMode>,
)
