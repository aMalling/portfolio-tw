import MyFooter from "./components/footer.jsx";
import MyNavBar from "./components/navbar";

/// skift alle links til assests når der skal buildes

export default function App() {
  return (
    <div className=" w-screen h-screen">
      <MyNavBar />

      <div className="h-screen w-screen mx-3 md:mx-0 overflow-x-hidden md:overflow-auto">
        <div className="flex md:h-full mb-24 items-center justify-center">
          <div className=" md:w-4/5 h-auto flex-row md:grid grid-cols-2 p-2 ">
            <div className="flex-row items-center justify-center p-5 pt-0">
              <p className="text-4xl font-bold mt-5 md:mt-0">
                Fullstack Webdeveloper
              </p>
              <p className="text-lg font-semibold text-gray-500 mt-4">
                Welcome to Vanaheim, your go-to destination for all your web
                development needs! I'm Anders Helle Malling, a passionate and
                dependable web developer based in Aarhus, Denmark, and I run
                this solo web agency.
                <p className="mt-3">
                  At Vanaheim, I take on projects of all sizes. Whether you
                  require minor bug fixes, additional functionalities for your
                  existing codebase, or a brand-new web application or webshop
                  built from scratch, I've got you covered.
                </p>
                <p className="mt-3">
                  But don't just take my word for it. Explore my portfolio to
                  see for your self. With Vanaheim, you can trust that your web
                  projects are in save hands, and I'm here to turn your digital
                  aspirations into reality.
                </p>
              </p>
            </div>
            <img
              className="h-96 border-2 rounded-full rounded-tr-3xl border-gray-800"
              src="assets\ANDMAL.jpg"
              alt="billede af Anders"
            ></img>
            <div className="text ml-5 col-span-2">
              Tech Stack : React, Vuejs, Typescript, Nextjs, Tailwind, Flask,
              MongoDB
            </div>
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold ">Portfolio:</h2>
        <div className="flex items-start mt-12 ">
          <div className="flex-row md:grid grid-cols-2 items-center drop-shadow-2xl p-2 ">
            <div className="flex flex-col pr-8 pb-1 md:ml-52 justify-center md:h-96">
              <h3 className="text-xl left font-bold ">AuhKraeft.rm.dk</h3>

              <div className=" italic ">
                Internal database CRUD application, with data from clinical
                Oncological reasearch done at Aarhus University Hostpital. This
                application is designed to serve three distinct user groups:
                doctors and research personnel responsible for conducting
                research, staff members at the Oncological Clinic where
                experimental research takes place, and management personnel
                overseeing the operations. Consequently, the application offers
                three levels of access and functionalities, each meticulously
                crafted to cater to the unique needs of these user groups
              </div>
              <span className="font-semibold bg-black p-2 pt-1 text-yellow-500">
                Not suiteable for phones - since its not going to be accessable
                through phones anyway for security reasons.
              </span>
            </div>
            <div className=" md:mr-52">
              <a
                className="cursor-pointer"
                href="https://kfeappen-clone.vercel.app/"
              >
                <img
                  className="col-span-1 w-11/12 border-2 border-gray-800"
                  src="assets\ss-webapp1.png"
                  alt="Screenshot of med app"
                />
              </a>
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
                  className="bg-white mr-1 h-16 rounded-full"
                  alt="twicon"
                />
                <img
                  src="assets\github_logo.png"
                  className="bg-white h-16 rounded-full "
                  alt="github logo and link"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 flex-row md:grid grid-cols-2 drop-shadow-2xl p-2">
          <div className="flex md:hidden flex-col pr-8 md:mr-52 justify-center ">
            <h3 className=" text-xl font-bold ">BajerBiksen </h3>
            <div className=" italic ">
              BajerBiksen is a local business that every year make a chrismas
              beercalender, they hand pick 24 beers and pack for their
              customers. They wanted a novel and playfull way of revealing the
              beers one day at the time. So that what i made for them...
            </div>
          </div>
          <div className="md:ml-52">
            <a
              className="cursor-pointer"
              href="https://bajer-biksen.vercel.app/"
            >
              <img
                className="col-span-1 w-11/12 border-2 border-gray-800"
                src="assets\ss-webapp2.png"
                alt="Screenshot of med app"
              />
            </a>
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
                src="assets\next-js_icon.png"
                className="h-16 mr-1 rounded-full bg-white"
                alt="nextjs icon"
              />
              <img
                src="assets\tailwind icon.png"
                className="bg-white mr-1 h-16 rounded-full"
                alt="tw icon"
              />
              <img
                src="assets\github_logo.png"
                className="bg-white h-16 rounded-full"
                alt="github logo and link"
              />
            </div>
          </div>
          <div className="hidden md:flex flex-col px-3 md:mr-52 justify-center h-96">
            <h3 className=" text-xl font-bold ">BajerBixen </h3>
            <div className=" italic ">
              auctor augue mauris augue neque gravida in fermentum et
              sollicitudin ac orci phasellus egestas tellus rutrum tellus
              pellentesque eu tincidunt tortor aliquam nulla facilisi cras
              fermentum odio eu feugiat pretium nibh ipsum consequat nisl
            </div>
          </div>
        </div>

        <div className="md:grid grid-cols-2 mt-12 items-center drop-shadow-2xl p-2">
          <div className="flex flex-col pr-8 md:ml-52 justify-center md:h-96">
            <h3 className="text-xl cursor-not-allowed font-bold line-through ">
              PsykologMalling.dk{" "}
            </h3>
            <div className=" italic ">
              auctor augue mauris augue neque gravida in fermentum et
              sollicitudin ac orci phasellus egestas tellus rutrum tellus
              pellentesque eu tincidunt tortor aliquam nulla facilisi cras
              fermentum odio eu feugiat pretium nibh ipsum consequat nisl
            </div>
          </div>
          <div className="md:mr-52">
            <img
              className="col-span-1 w-11/12 border-2 border-gray-800 cursor-not-allowed"
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
                src="assets\next-js_icon.png"
                className="h-16 mr-1 rounded-full bg-white"
                alt="express icon"
              />
              <img
                src="assets\tailwind icon.png"
                className="bg-white h-16 mr-1 rounded-full"
                alt="twicon"
              />
              <img
                src="assets\github_logo.png"
                className="bg-white h-16 rounded-full  "
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
