import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,
  AiFillGithub,
} from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import myAvatar from "../public/full-body-murithi.png";
import design from "../public/design.jpg";
import development from "../public/development.jpg";
import maintenance from "../public/maintenance.jpg";
import snappy from "../public/snappy.png";
import weather from "../public/Weatherapp.png";
import data from "../public/data.png";
import tut from "../public/tut.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hope Murithi portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 text-black">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Hope Murithi</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-tr from-gray-800 to-yellow-600 text-white px-4 py-2 rounded-full ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-6xl py-2 font-burtons text-yellow-600">
              {" "}
              Hope Murithi
            </h2>
            <h3 className="font-burtons md:text-lg font-bold text-md py-2">
              <TypeAnimation
                sequence={[
                  "Software engineer",
                  1000,
                  "Web developer",
                  1000,
                  "Competitive programmer",
                  1000,
                  "Always learning",
                  1000,
                ]}
                speed={50}
                style={{ fontSize: "18px" }}
                wrapper="span"
                repeat={Infinity}
              />
            </h3>
            <p className="text-md text-gray-700 leading-8">
              Creating user-centered solutions using emerging web technologies
              and tools.Hit me up; lets connect
            </p>
          </div>
          <div className="flex justify-center text-5xl gap-10 text-gray-700 py-3">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillMail />
            <AiFillGithub />
          </div>
          <div className="relative mx-auto bg-gradient-to-tr from-gray-800 to-yellow-600 rounded-full w-80 h-80 mt-10 overflow-hidden">
            <Image src={myAvatar} alt="Avatar" />
          </div>
        </section>
        <section>
          <div>
            <h3 className=" flex justify-center items-center text-3xl py-1 mt-5">
              What I do
            </h3>
            <p className="text-md text-gray-700 leading-8">
              I design and develop secure,user-friendly and scalable websites
              and web apps with appealing UIs, using top notch tools and
              technologies for both businesses and consumer use. I am also a
              budding contributor to open source projects
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} alt="design" width={250} height={250} />
              <h3 className="py-4 text-yellow-600 text-lg pb-2 pt-8 font-medium">
                Elegant designs
              </h3>
              <p className="py-2">
                Creating beautiful models,sitemaps,wireframes and
                user/architectural designs using tools like photoshop and figma
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image
                src={development}
                alt="development"
                width={250}
                height={250}
              />
              <h3 className="py-4 text-yellow-600 text-lg pb-2 pt-8 font-medium">
                Agile Development
              </h3>
              <p className="py-2">
                Writing and testing code with expert teams in short sprints to
                ensure attention to detail as well as the stakeholder's
                involvement in the building process
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={maintenance} alt="design" width={250} height={250} />
              <h3 className="py-4 text-yellow-600 text-lg pb-2 pt-8 font-medium">
                Maintenance
              </h3>
              <p className="py-2">
                Wheather it's bug fixes,code refactoring,introduction of new
                features to an existing software or redesigning, I deliver.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="flex justify-center items-center text-3xl pb-5 py-1 mt-5">
              Projects
            </h3>
            <div className="lg:flex gap-10">
              <div className="max-w-sm rounded overflow-hidden shadow-lg  dark:bg-white">
                <Image className="w-full" src={snappy} alt="Snappy" />
                <div className="px-6 py-4">
                  <div className="flex items-center text-yellow-600 justify-center font-bold font-burtons text-xl mb-2">
                    Snappy
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <a href="#">Demo</a>
                  </button>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg  dark:bg-white">
                <Image className="w-full" src={weather} alt="Snappy" />
                <div className="px-6 py-4">
                  <div className="flex items-center text-yellow-600 justify-center font-bold font-burtons text-xl mb-2">
                    Weather app
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <a href="#">Demo</a>
                  </button>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg  dark:bg-white">
                <Image className="w-full" src={data} alt="Scrapped data" />
                <div className="px-6 py-4">
                  <div className="flex items-center text-yellow-600 justify-center font-bold font-burtons text-xl mb-2">
                    Web scrapper
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <a href="#">Demo</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="w-full bg-yellow-600 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2">
                <a href="#">View more</a>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
