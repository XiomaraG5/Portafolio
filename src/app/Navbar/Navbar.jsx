"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import "./Navbar.css"

const Navbar = () => {
    const [active,setActive]=useState(1)
    const onChangeAvtive =(x)=>{
        setActive(x)
    }
  return (
    <div className='Nav'>
        <h1 className='title'><Link href="/">Xiom</Link></h1>

        <div>
            <Link className={"subtitle"} style={active==1?{ color: "#FDBF50"}:{ color: "#eae8e6"}} onClick={()=>{setActive(1)}} href="/">Sobre mi</Link>
            <Link className={"subtitle"} style={active==2?{ color: "#FDBF50"}:{ color: "#eae8e6"}} onClick={()=>{setActive(2)}} href="/experiencia">Experiencia</Link>
            <Link className={"subtitle"} style={active==3?{ color: "#FDBF50"}:{ color: "#eae8e6"}} onClick={()=>{setActive(3)}} href="/cursos">Cursos</Link>
        </div>
    </div>
  )
}

export default Navbar