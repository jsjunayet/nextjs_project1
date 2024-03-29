"use client"
import React, { useState } from 'react';
import Navlink from './Navlink/Navlink';
import styles from "./Navbar.module.css"
import Link from 'next/link';

const Navbar = () => {
    const Links = [
        {
            path: '/',
            title: "Homepage"
        },
        {
            path: '/about',
            title: "About"
        },
        {
            path: '/contact',
            title: "Contact"
        },
        {
            path: '/blog',
            title: "Blog"
        },
    ]
    const isAdmin = true;
    const session = true;
    const [open,setopen] = useState(false)
        return (
        <div className={styles.container}>
            <p className={styles.logo}>Logo</p>
            <div className={styles.link}>
            {
                Links.map((item)=>
                <Navlink item={item} key={item}></Navlink>
                ) 
            }
            {
                session?(
                    <>
                    {
                        isAdmin && <Navlink item={{path: '/admin',
                        title: "Admin"}}></Navlink>
                        
                    }
                    <button>LogOut</button>
                    </>
                ):
                (<Navlink item={{path: '/login', title: "Login"}}/>)
            }
        
            </div>
            <button className={styles.mobileBotton} onClick={()=>setopen((prev)=>(!prev))}>menu</button>
            {
                open && <div className={styles.mobiledevices}>
                    {
                         Links.map((item)=>
                         <Navlink item={item} key={item}></Navlink>
                         )  
                    }
                        {
                session?(
                    <>
                    {
                        isAdmin && <Navlink item={{path: '/admin',
                        title: "Admin"}}></Navlink>
                        
                    }
                    <button>LogOut</button>
                    </>
                ):
                (<Navlink item={{path: '/login', title: "Login"}}/>)
            }
                </div>
            }
        
        
            
        </div>
    );
};

export default Navbar;