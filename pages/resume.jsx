import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Ziyad | Resume</title>
        <meta
          name="description"
          content="I’m a web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        {/* <h2 className="text-center">Resume</h2>  */}
        <div className="bg-[#fff] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Mirza Ziyad Ahmed Baig</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/mirza-ziyad-ahmed-baig-b38b0b1a1/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/Ziyad-Beyg"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4 ">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2 xs:max-w-xs md:max-w-full">
            {/* <span className="font-bold">Technical Skills</span> */}
            <span className="px-2"> MERN Stack Developer</span>|
            <span className="px-2"> HTML</span>|
            <span className="px-2"> CSS </span>|
            <span className="px-2"> Javascript </span>|
            <span className="px-2"> Typescript </span>|
            <span className="px-2"> React JS</span>|
            <span className="px-2"> Next JS </span>|
            <span className="px-2"> SQL</span>|
            <span className="px-2"> MongoDB</span>|
            <span className="px-2"> Redux</span>|
            <span className="px-2"> Tailwind</span>|
            <span className="px-2"> Firebase</span>|
            <span className="px-2"> React Native</span>|
            <span className="px-2"> RESTAPI</span>|
            <span className="px-2"> Node JS</span>|
            <span className="px-2"> Express JS</span>|
            <span className="px-2"> Chakra UI</span>|
            <span className="px-2"> ShadCN UI</span>
          </p>
          {/* <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p> */}
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Contour Software</span>
            <span className="px-2">|</span>Karachi, Pakistan
          </p>
          <p className="py-1 italic">MERN Stack Bootcamp Trainee (3 months)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              In the bootcamp, I dove into the world of web development
              headfirst. With hands-on projects and expert guidance, I built
              robust applications using MongoDB, Express, React, and Node.js.
              This immersive experience transformed me into a confident MERN
              stack developer ready to tackle real-world challenges.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        {/* <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Teaching & Mentoring Web Development
            </span>
            <span className='px-2'>|</span>Dallas, TX
          </p>
          <p className='py-1 italic'>Code Commerce - Youtube Channel (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              In 2021 I started “Code Commerce”, a YouTube channel focused on
              sharing what I’m learning in web development, specifically
              front-end development.
            </li>
            <li>
              Private 1 on 1 Zoom coaching calls related to web development.
              More specifically debugging, teaching basic web development
              concepts and code reviews.
            </li>
          </ul>
        </div> */}

        {/*  */}
        {/* <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5> */}

        {/* Experience */}
        {/* <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>CITY OF SHERMAN, TX</span>
            <span className='px-2'>|</span>Sherman, TX
          </p>
          <p className='py-1 italic'>Paramedic / Firefighter (2010 – 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul>
        </div> */}

        <div className="flex justify-center my-6">
          <a href="/cv.pdf" download>
            <button className="rounded-2 p-4 mx-auto font-medium">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default resume;
