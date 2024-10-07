// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'

import './index.css'
import { Buffer } from 'buffer';
window.Buffer = Buffer;


createRoot(document.getElementById('root')!).render(

    <App />

)
