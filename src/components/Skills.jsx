import React from 'react';
import SkillList from '../components/SkillList';

const Skills = () => {
  return (
    <div id='skill'>
    <div className='skillbox'>
      <h1 data-aos="zoom-in-down" style={{
        display:"flex",alignItems:"center",justifyContent:"center",fontSize:"30px"
      }}>SKILLS</h1>
      <div className='skillinnerbox' data-aos="flip-up" style={{
        fontSize:"20px"
      }}>
        <SkillList skills={"HTML"} />
        <SkillList skills={"CSS"} />
        <SkillList skills={"JavaScript"} />
        <SkillList skills={"ReactJs"} />
        <SkillList skills={"Tailwind CSS"} />
        <SkillList skills={"Bootstrap"}></SkillList>
        <SkillList skills={"C"} />
        <SkillList skills={"C++"} />
        <SkillList skills={"JAVA"} />
        <SkillList skills={"DSA"} />
        <SkillList skills={"CP"} />
        <SkillList skills={"GIT"} >
          
        </SkillList>
      </div>
    </div></div>
  );
}

export default Skills;
