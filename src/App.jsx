import MyFooter from "./components/footer.jsx"

/// skift alle links til assests når der skal buildes
export default function App() {
  return (
    <div className=" w-screen h-screen">
{/*     <h1 className="py-4 mt-0 shadow-sm text-3xl font-bold underline justify-center text-center items-start">
      Anders Helle Malling alling dev yooohuu - tag lidt fra den gamle repo
    </h1> */}
    <div className="flex min-h-full items-center justify-center">
      <div className="shadow drop-shadow-2xl p-2 ">
        <img className="h-96 border-2 border-gray-800 rounded-full rounded-tr-3xl" src="src\assets\ANDMAL.jpg" alt="billede af Anders"></img>
        <p className="text-lg font-semibold ">Anders Helle Malling</p>
        <p className="text-md italic">Fullstack Webdeveloper</p>
        <div className="text-xs">React, Vuejs, Typescript, Tailwind, Flask, SQLserver</div>

      </div>
    </div>
    <h2 className="text-center text-xl font-bold ">Portfolio:</h2>
    <div className="flex min-h-full items-center justify-center">
  
      <div className="grid grid-cols-2 items-center drop-shadow-2xl p-2">
        <span className="col-span-1 ml-52 px-3 italic ">auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl</span>
        <img className="col-span-1 h-96 mr-52 px-3 border-2 border-gray-800" src="src\assets\ss-webapp1.png" alt="Screenshot of med app" />
        <div className="col-span-1"></div> 
        <div className="flex py-2">
          <p className="mr-2 ">Stack: </p>
          <img src="src\assets\vuejs icon.jpg" alt="vueicon"/>
          <img src="src\assets\typescript icon.png" alt="tsicon"/>
          <img className="bg-white"src="src\assets\tailwind icon.png" alt="twicon"/>

        </div>
        
      </div>
      
    </div>
    <div className="grid grid-cols-2 items-center drop-shadow-2xl p-2">
      <div className="ml-52">
        <img className="col-span-1 h-96  px-3 border-2 border-gray-800" src="src\assets\ss-webapp2.png" alt="Screenshot of med app" />
        <div className="col-span-1"></div> 
        <div className="flex py-2">
          <p className="mr-2 ">Stack: </p>
          <img src="src\assets\vuejs icon.jpg" alt="vueicon"/>
          <img src="src\assets\typescript icon.png" alt="tsicon"/>
          <img className="bg-white"src="src\assets\tailwind icon.png" alt="twicon"/>

        </div>
        </div>
        <span className="col-span-1 mr-52 px-3 italic ">auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl</span>
        
        
      </div>
    <MyFooter />
    </div> 
  )
}