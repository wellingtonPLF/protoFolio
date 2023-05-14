import { useState } from 'react'
import './App.css'
import AppRouter from './AppRouter'
import FooterComponent from './components/_main/footerComponent/footerView'

function App() {

  const screenHeight = window.innerHeight * 0.80
  const screenHeight1 = window.innerHeight * 0.20

  return (
    <>
      <div id={"app"} style={{ gridTemplateRows: `1fr ${screenHeight1}px`}}>
        <AppRouter id={'body'}/>
        <FooterComponent id={'footer'}/>
      </div>
    </>
  )
}

export default App
