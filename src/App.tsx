import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LargeTitle from './app/components/RMGText'
import UpperHeader from './app/components/RMGHeader'


function App() {
  const [count, setCount] = useState(0)   

  return (
    <><LargeTitle text={'ret'}/>
     <UpperHeader title={"cx"}/>
    </>
  )
}

export default App
