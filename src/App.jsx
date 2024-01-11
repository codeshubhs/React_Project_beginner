import { useState } from 'react'

import './App.css'
const images=["https://hips.hearstapps.com/hmg-prod/images/cute-baby-animals-1558535060.jpg",
"https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg",
"https://preview.redd.it/asked-for-some-cute-baby-animals-and-wasnt-disappointed-v0-k4ogdp841qm91.png?width=640&crop=smart&auto=webp&s=06fc8546e592f157cbce75f39b0904cbbde36995",
"https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/4:3/w_2663,h_1997,c_limit/shouts-animals-watch-baby-hemingway.jpg"];

function App() {
  const[current, setCurrent]=useState(0);
function Nextslide(){
  setCurrent(current===images.length-1?0:current+1)
}
function Prevslide(){
  setCurrent(current===0?images.length-1:current-1)
}
  return (
    <>
    <h2 className='title'>Project1:Image-Slider</h2>
      <div className='slider'>
        <div className='left-arrow' onClick={Prevslide}> ←
        </div>
        <div className='right-arrow' onClick={Nextslide}>→</div>
{images.map((image,index)=>current===index&&(
 <div key={image} className='slide'>
  <img src={image}alt="image" className='image'/> </div>
))}
      </div>
    </>
  )
}

export default App;
