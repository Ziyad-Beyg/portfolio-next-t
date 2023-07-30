import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import BeFit from '../public/assets/projects/be-fit.png'
import RedStore from '../public/assets/projects/redstore.png'
import cpPunks from '../public/assets/projects/Cp-punks.PNG'
import owlangtutor from '../public/assets/projects/Owlang-tutor.PNG'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Be-Fit'
            backgroundImg={BeFit}
            projectUrl='/befit'
            tech='React JS'
          />
          <ProjectItem
            title='RedStore'
            backgroundImg={RedStore}
            projectUrl='/redstore'
            tech='HTML / CSS'

          />
          <ProjectItem
            title='CP Punks'
            backgroundImg={cpPunks}
            projectUrl='/cppunks'
            tech='React JS'

          />
          <ProjectItem
            title='Owlang Tutor'
            backgroundImg={owlangtutor}
            projectUrl='/owlangtutor'
            tech='HTML / CSS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
