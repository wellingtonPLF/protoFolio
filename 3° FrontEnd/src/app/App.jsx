import { useState } from 'react'
import './App.css'
import AppRouter from './AppRouter'
import FooterComponent from './components/_main/footerComponent/footerView'

function App() {
  
  return (
    <>
      <div id={"app"}>
        <AppRouter id={'body'}/>
        <FooterComponent id={'footer'}/>
      </div>
    </>
  )
}

export default App
