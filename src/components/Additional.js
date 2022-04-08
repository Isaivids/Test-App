import React, { useState } from 'react'
import './Additional.css'

const Additional = () => {

const [isActive, setIsActive] = useState();
const accordianData = [
    {
        title: "Bachelor of Engineering", name: "Dr. Sivanthi Aditanar college of Engineering", percentage: "70%"
    },
    {
        title: "Higher Secondary +2", name: "St.Francis xaviers hr.sec.school",percentage: "88.5%"
    },
    {
        title: "Secondary school 10", name: "St.Francis xaviers hr.sec.school",percentage: "96.2%"
    },
];

  return (
    <div className='adl' id="additional">
        <div className='accordian'>
            {accordianData.map((item)=>{
                return(
                    <div className='acc'>
                    <div className='acc-title' onClick={() => setIsActive(item.title)}>
                        <div>{item.title}</div>
                        <div >{isActive ? '-' : "+"}</div>
                    </div>
                    <div>
                    {isActive === item.title ? (
                        <div className='acc-content'>
                            <div>{item.name}</div>
                            <div>{item.percentage}</div>
                            </div>
                    ) : ""}
                    </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Additional