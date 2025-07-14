Repository: harits77/qr-code-generator
Files analyzed: 11

Estimated tokens: 1.9k

Directory structure:
└── harits77-qr-code-generator/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── vite.config.js
    └── src/
        ├── App.css
        ├── App.jsx
        ├── index.css
        └── main.jsx


================================================
FILE: README.md
================================================
# 📱 QR Code Generator - React App

## 📋 Summary

**QR Code Generator** is a simple, responsive React application that allows users to generate QR codes for any text or URL input. It leverages the `qrcode.react` library to render QR codes in real time. Ideal for creating quick, shareable codes for links, contact info, or custom messages.

---

## 🚀 Features

- ✍️ Enter any text or URL
- ⚡ Instantly generate a QR code
- 🎨 Styled with clean UI (custom or CSS framework)
- 🖨️ Right-click to download or scan the QR
- 📱 Mobile-friendly design

---

## 🛠️ Tech Stack

| Layer     | Technology            |
|-----------|------------------------|
| Frontend  | React (Create React App) |
| QR Engine | `qrcode.react` package |
| Styling   | Tailwind |

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Harits77/QR-Code-Generator.git
cd QR-Code-Generator

# Install dependencies
npm install



================================================
FILE: eslint.config.js
================================================
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]



================================================
FILE: index.html
================================================
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>



================================================
FILE: package.json
================================================
{
  "name": "qrcode-generator",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.17.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "vite": "^6.0.5"
  }
}



================================================
FILE: postcss.config.js
================================================
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}



================================================
FILE: tailwind.config.js
================================================
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


================================================
FILE: vite.config.js
================================================
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})



================================================
FILE: src/App.css
================================================
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    background-color: black;
}
button{
    width: 315px;
    margin-left: 156px;
}
h1{
    margin-left: 185px;
}
@media (max-width:600px) {
    .h1{
        font-size: 21px;
        margin-left: -1px;
    }
    .form input{
        width: 305px;
        margin-left: -100px;
    }
    .form label{
        margin-left: -100px;
    }
    button{
        margin-left: -55px;
        width: 305px;
    }

}



================================================
FILE: src/App.jsx
================================================
import { useState } from 'react'
import './App.css'

function App() {
  const [img, setimg] = useState("")
  const[load, setLoad] = useState(false)
  const[Data, setData] = useState('')
  const[size, setSize] = useState('200')

 const generate = () => {
  setLoad(true)
  try{
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(Data)}`;
  setimg(url)
  }catch(err){
    console.log("error is occur",err)
 }finally{
   setLoad(false)
  }
}

  return (
    
    <div className='mx-auto w-1/2 mt-10 pb-10 text-white md:border-2 border-white '>
      <h1 className='my-10 text-3xl font-bold h1' >QR Code Generate</h1>
      <div className='mx-auto'>
      {load && <p>loading...</p>}
      {img && <img src={img} alt='No result' className='pb-10 mx-auto'/>}
      </div>
      <div className='flex flex-col mx-auto w-1/2 form'>
      <label htmlFor="data" className='text-xl mb-3'>Data</label>
      <input type="text" value={Data} onChange={(e)=>setData(e.target.value)} placeholder='enter the url' id='data' className='border-2 p-2 pl-4'/>

      <label htmlFor="size" className='text-xl mt-5 mb-3'>Size</label>
      <input type="text" value={size} onChange={(e)=>setSize(e.target.value)} placeholder='enter the size' id='size'  className='border-2  p-2 pl-4'/>
      </div>
      
       <button onClick={generate} disabled={load} className='bg-blue-800 hover:bg-blue-700  text-white p-3 rounded mt-10 btn'>Generate</button>
   
    </div>
  )
}

export default App



================================================
FILE: src/index.css
================================================
@tailwind base;
@tailwind components;
@tailwind utilities;  




================================================
FILE: src/main.jsx
================================================
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


