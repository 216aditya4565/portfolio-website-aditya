import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';

// about data
export const aboutData = [
  {
    id: 'skills',
    title: 'skills and experience',
    info: [
      {
        title: 'Programming Languages',
        items: [
          'Python',
          'Java',
          'C',
          'JavaScript',
          'Microsoft SQL Server',
          'React JS',
          'jQuery',
          'AJAX',
          'XML',
          'JSON',
          'Bash Scripts',
        ],
      },
      {
        title: 'Tools',
        items: [
          'Anaconda',
          'GitHub',
          'Tableau',
          'Amazon AWS',
          'Microsoft SQL Server Management Studio',
          'JIRA',
          'Visual Studio Code',
        ],
      },
      {
        title: 'Skills',
        items: [
          'Data Structures & Algorithms',
          'Object Oriented Programming',
          'Machine Learning',
          'Data Mining',
          'Data Analysis',
          'CSS',
          'HTML',
          'PHP',
          'jQuery',
          'Flask',
          'AJAX',
          'MySQL',
          'DevOps',
          'Microsoft Office',
        ],
      },
      {
        title: 'Relevant Coursework',
        items: [
          'Software Engineering',
          'Machine Learning',
          'Malware and Software Vulnerability Analysis',
          'Natural Language Processing',
          'Data Structures and Algorithms',
          'Cyber Security',
        ],
      },
    ],
  },
];

// components
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Everything <span className='text-accent'>Technical About</span> me
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            I've honed my skills in Python, SQL, machine learning, Power BI, Tableau and data engineering through hands-on projects and internships. 
            Driven by curiosity and a strong work ethic, I'm dedicated to pushing data's potential. Whether analyzing complex datasets, engineering robust solutions, or exploring new tech, I'm always ready to make a meaningful impact. 
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={6} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished projects
                </div>
              </div>
              {/* awards */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={2} duration={5} /> 
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Individual Brilliance Awards from Merkle USA
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <Element
                  key={itemIndex}
                  id={item.id}
                  name={item.id}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex flex-wrap gap-x-4 gap-y-2'>
                    {/* items */}
                    {item.items?.map((itemName, itemIndex) => {
                      return <div key={itemIndex} className='text-base text-white'>{itemName}</div>;
                    })}
                  </div>
                </Element>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
