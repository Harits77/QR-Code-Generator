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
