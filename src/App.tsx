import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LargeTitle from './app/components/RMGText'
import UpperHeader from './app/components/RMGHeader'
import ImageComponent from './app/components/RMGImage'


function App() {
  const [count, setCount] = useState(0)
  const imageUrl = '../../logo9.png';
  return (
    <>
      <LargeTitle text={'ret'} />
      <UpperHeader title={"cx"} />
      <ImageComponent src={imageUrl} alt={"Image 1 Description"} />
    </>
  )
}

export default App
