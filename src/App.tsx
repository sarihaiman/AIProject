import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LargeTitle from './app/components/RMGText'
import UpperHeader from './app/components/RMGHeader'
<<<<<<< HEAD
import ImageComponent from './app/components/RMGImage'

=======
import InputComponent from './app/components/RMGInput'
import BottonComponent from './app/components/RMGBotton'
>>>>>>> f0df6ad8e8ef9b4ad2fb0234481d28e81efa1ba1

function App() {
  const [count, setCount] = useState(0)
  const imageUrl = '../../logo9.png';
  return (
<<<<<<< HEAD
    <>
      <LargeTitle text={'ret'} />
      <UpperHeader title={"cx"} />
      <ImageComponent src={imageUrl} alt={"Image 1 Description"} />
=======
    <><LargeTitle text={"hello"}/>
     <UpperHeader title={"hello"}/>
     <InputComponent/>
     <br />
     <BottonComponent text={"hello"} onClick={"undefined"} />
     <br />
>>>>>>> f0df6ad8e8ef9b4ad2fb0234481d28e81efa1ba1
    </>
  )
}

export default App
