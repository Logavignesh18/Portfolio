import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
     
    <section id='skills'>
        <span className='skillTitle'>
        What I do</span>
        <span className='skillDesc'>
            I am an enthusiastic and intelligent coder with a creative mindset, known for quickly grasping new concepts. My coding journey reflects a passion for problem-solving, where I approach challenges with innovative solutions. A fast learner, I excel at adapting to new technologies and methodologies.
        </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt="UIDesign" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is the ui/ux section</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt="WebDesign" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>This is the website design section</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt="AppDesign" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>This is the app design section</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;
