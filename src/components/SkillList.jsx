import React from 'react'
import checkedmark from '../assets/checkmark-light.svg'

const SkillList = (props) => {
  return (
    <div >
      <img src={checkedmark} height={"20px"} width={"70px"}></img>
      
      <span></span>
      <span style={{}}>{props.skills} </span>
    </div>
  )
}

export default SkillList
