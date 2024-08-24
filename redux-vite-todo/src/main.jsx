import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
    <App store={store} />
)
