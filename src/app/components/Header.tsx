"use client"

import Image from "next/image";
import 'animate.css';
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
    const [menuToggle, setMenuToggle] = useState<Boolean>(false);

    const handleMenu = () => {
        setMenuToggle(!menuToggle);
    }

    return (
        <>
            <header className={`w-full ${menuToggle ? 'h-screen items-start bg-black' : 'h-40 items-center'} 
                flex justify-between fixed z-[4]`}>   
                {!menuToggle && 
                    <>
                        <Image src={'/images/logo.png'} alt="PhotArt logo" width={150} height={96} className="ml-6 pt-2"/>
                        <AiOutlineMenu className="w-14 h-24 mr-12 z-[2]" onClick={() => handleMenu()}/>
                    </>
                }
                {menuToggle &&
                    <>
                        <Image src={'/images/logo.png'} alt="PhotArt logo" width={150} height={96} className="ml-12"/>
                        <div>
                            <ul className={`text-8xl flex flex-col h-screen justify-start space-y-10 pt-40 ${menuToggle ? 'animate__animated animate__tada' : 'animate-none'}
                            hover:animate-none`}>
                                <li className="hover:border-b-2 hover:border-white">Inicio</li>
                                <li>Contatos</li>
                                <li>Sobre Nos</li>
                            </ul>
                        </div>
                        <div className="text-6xl w-14 h-24 mr-12 pt-12" onClick={() => handleMenu()}>X</div>
                    </>
                }
            </header>
        </>
    )
}