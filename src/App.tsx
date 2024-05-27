import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LargeTitle from './app/components/RMGText'
import UpperHeader from './app/components/RMGHeader'
import InputComponent from './app/components/RMGInput'
import BottonComponent from './app/components/RMGBotton'

function App() {
  const [count, setCount] = useState(0)   

  return (
    <><LargeTitle text={"hello"}/>
     <UpperHeader title={"hello"}/>
     <InputComponent/>
     <br />
     <BottonComponent text={"hello"} onClick={"undefined"} />
     <br />
    </>
  )
}

export default App
