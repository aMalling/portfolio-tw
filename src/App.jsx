import MyFooter from "./components/footer.jsx";
import MyNavBar from "./components/navbar";

/// skift alle links til assests når der skal buildes

export default function App() {
  return (
    <div className=" w-screen h-screen">
      <MyNavBar />

      <div className="flex h-5/6 mb-24 items-center justify-center">
        <div className="shadow drop-shadow-2xl p-2 ">
          <img
            className="h-96 border-2 rounded-full rounded-tr-3xl border-gray-800"
            src="assets\ANDMAL.jpg"
            alt="billede af Anders"
          ></img>
          <p className="text-lg font-semibold ">Anders Helle Malling</p>
          <p className="text-md italic">Fullstack Webdeveloper</p>
          <div className="text-xs">
            React, Vuejs, Typescript, Tailwind, Flask, SQLserver
          </div>
        </div>
      </div>
      <h2 className="text-center text-2xl font-bold ">Portfolio:</h2>
      <div className="flex items-start mt-12">
        <div className="grid grid-cols-2 items-center drop-shadow-2xl p-2">
          <div className="flex flex-col px-3 ml-52 justify-center h-96">
            <h3 className="text-xl left font-bold ">AuhKraeft.rm.dk </h3>
            <div className=" italic ">
              auctor augue mauris augue neque gravida in fermentum et
              sollicitudin ac orci phasellus egestas tellus rutrum tellus
              pellentesque eu tincidunt tortor aliquam nulla facilisi cras
              fermentum odio eu feugiat pretium nibh ipsum consequat nisl
            </div>
          </div>
          <div className="mr-52">
            <img
              className="col-span-1 h-96 border-2 border-gray-800"
              src="assets\ss-webapp1.png"
              alt="Screenshot of med app"
            />

            <div className="flex py-2">
              <p className="mr-2 ">Stack: </p>
              <img
                src="assets\vuejs icon.jpg"
                className="h-16 mr-1 rounded-full"
                alt="vueicon"
              />
              <img
                src="assets\typescript icon.png"
                className="h-16 mr-1 rounded-full"
                alt="tsicon"
              />
              <img
                src="assets\tailwind icon.png"
                className="bg-white h-16 rounded-full"
                alt="twicon"
              />
              <img
                src="assets\github_logo.png"
                className="bg-white h-16 rounded-full ml-[21rem]"
                alt="github logo and link"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 grid grid-cols-2 drop-shadow-2xl p-2">
        <div className="ml-52">
          <img
            className="col-span-1 h-96  border-2 border-gray-800"
            src="assets\ss-webapp2.png"
            alt="Screenshot of med app"
          />
          <div className="col-span-1"></div>
          <div className="flex py-2">
            <p className="mr-2 ">Stack: </p>
            <img
              src="assets\react-icon.png"
              className="bg-white h-16 p-1 mr-1 rounded-full"
              alt="vue icon"
            />
            <img
              src="assets\typescript icon.png"
              className="h-16 mr-1 rounded-full"
              alt="ts icon"
            />
            <img
              src="assets\mongodb-logo.png"
              className="h-16 mr-1 rounded-full"
              alt="mongodb icon"
            />
            <img
              src="assets\express-logo.png"
              className="h-16 mr-1 rounded-full bg-white"
              alt="express icon"
            />
            <img
              src="assets\tailwind icon.png"
              className="bg-white h-16 rounded-full"
              alt="tw icon"
            />
            <img
              src="assets\github_logo.png"
              className="bg-white h-16 rounded-full ml-48"
              alt="github logo and link"
            />
          </div>
        </div>
        <div className="flex flex-col px-3 mr-52 justify-center h-96">
          <h3 className="text-xl left font-bold ">BajerBixen.dk </h3>
          <div className=" italic ">
            auctor augue mauris augue neque gravida in fermentum et sollicitudin
            ac orci phasellus egestas tellus rutrum tellus pellentesque eu
            tincidunt tortor aliquam nulla facilisi cras fermentum odio eu
            feugiat pretium nibh ipsum consequat nisl
          </div>
        </div>
      </div>
      <div className="flex items-start mt-12">
        <div className="grid grid-cols-2 items-center drop-shadow-2xl p-2">
          <div className="flex flex-col px-3 ml-52 justify-center h-96">
            <h3 className="text-xl left font-bold ">PsykologNanna.dk </h3>
            <div className=" italic ">
              auctor augue mauris augue neque gravida in fermentum et
              sollicitudin ac orci phasellus egestas tellus rutrum tellus
              pellentesque eu tincidunt tortor aliquam nulla facilisi cras
              fermentum odio eu feugiat pretium nibh ipsum consequat nisl
            </div>
          </div>
          <div className="mr-52">
            <img
              className="col-span-1 h-96 border-2 border-gray-800"
              src="assets\ss-webapp3.png"
              alt="Screenshot of med app"
            />

            <div className="flex py-2">
              <p className="mr-2 ">Stack: </p>
              <img
                src="assets\vuejs icon.jpg"
                className="h-16 mr-1 rounded-full"
                alt="vueicon"
              />
              <img
                src="assets\typescript icon.png"
                className="h-16 mr-1 rounded-full"
                alt="tsicon"
              />
              <img
                src="assets\express-logo.png"
                className="h-16 mr-1 rounded-full bg-white"
                alt="express icon"
              />
              <img
                src="assets\tailwind icon.png"
                className="bg-white h-16 rounded-full"
                alt="twicon"
              />
              <img
                src="assets\github_logo.png"
                className="bg-white h-16 rounded-full ml-64  "
                alt="github logo and link"
              />
            </div>
          </div>
        </div>
      </div>
      <MyFooter />
    </div>
  );
}
