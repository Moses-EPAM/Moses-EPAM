import React, { useEffect, useState } from 'react'
import { BottomIcons } from './constants'
import {useNavigate } from 'react-router-dom'

const Bottombar = () => {
    const navigate=useNavigate();
    const [navItem, setNavItem] = useState('about');

    useEffect(()=> {
        const sections=document.querySelectorAll("section");


        const observer=new IntersectionObserver((entries)=> {
            entries.forEach((entry)=> {
                if(entry?.isIntersecting) {
                    setNavItem(entry.target.getAttribute("id"));
                }
            })
        },{root:null,rootMargin:"0px",threshold:0.4});


        sections.forEach((section)=> {
            observer.observe(section);
        })

        return()=>{
            sections.forEach((section)=> {
                observer.unobserve(section);
            })
        }

    },[setNavItem]);

    console.log("navItem",navItem);

  return (
    <div className=' position-fixed bottom-0 mb-2 mx-auto bottom_cls'>
      <div className='bottom_cls1 p-3'>
        <div className=' bottom-radius-set bg-dark d-flex mx-3 p-2'>
            {BottomIcons.map(({link,icon,name},i)=> {

                console.log("link",link);

                return(
                    <a 
                        className={`p-2 mx-1 ${navItem===name ? " text-danger":""}`}
                        style={{borderRadius:"50%",backgroundColor:"rgb(0,0,0,0.6)"}} 
                        key={i} 
                        onClick={()=> navigate(link)}
                        href={link}
                    >
                        <span className=''>
                            {icon}
                        </span>
                    </a>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Bottombar
