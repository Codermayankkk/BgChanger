import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <h1>Mayank Matkar, The Pro Developer</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
             <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2">
                  <button className="outline-none px-4 rounded-full text-white" 
                  onClick={() => {setColor("red")}}
                  style={{backgroundColor: "red"}}>
                    red
                  </button>

                  <button className="outline-none px-4 rounded-full text-white" 
                  onClick={() => {setColor("blue")}}
                  style={{backgroundColor: "blue"}}>
                    blue
                  </button>

                  <button className="outline-none px-4 rounded-full text-white" 
                  onClick={() => {setColor("cyan")}}
                  style={{backgroundColor: "cyan"}}>
                    cyan
                  </button>

                  <button className="outline-none px-4 rounded-full text-white"
                  onClick={() => {setColor("pink")}}
                  style={{backgroundColor: "pink"}}>
                    pink
                  </button>

                  <button className="outline-none px-4 rounded-full text-white"
                  onClick={() => {setColor("purple")}}
                  style={{backgroundColor: "purple"}}>
                    purple
                  </button>

                  <button className="outline-none px-4 rounded-full text-white" 
                  onClick={() => {setColor("grey")}}
                  style={{backgroundColor: "grey"}}>
                    grey
                  </button>

                  <button className="outline-none px-4 rounded-full text-white" 
                  onClick={() => {setColor("green")}}
                  style={{backgroundColor: "green"}}>
                    green
                  </button>
             </div>
      </div>
    </div>
  )
}

export default App
