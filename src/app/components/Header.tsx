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

    const handleClickLink = (local: string) => {
        setMenuToggle(false);
        window.location.href = local;
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
                        <Image src={'/images/logo.png'} alt="PhotArt logo" width={150} height={96} className="ml-6 pt-3"/>
                        <div className="absolute left-[25%] sm:relative sm:left-0">
                            <ul className={`text-4xl flex flex-col h-screen justify-center space-y-10 pt-40 ${menuToggle ? 'animate__animated animate__tada' : 'animate-none'}
                            sm:text-8xl hover:animate-none`}>
                                <li className="hover:border-b-2 hover:border-white" onClick={() => handleClickLink("#home")}>Inicio</li>
                                <li className="hover:border-b-2 hover:border-white" onClick={() => handleClickLink("#contact")}>Contatos</li>
                                <li className="hover:border-b-2 hover:border-white" onClick={() => handleClickLink("#about")}>Sobre Nos</li>
                                <li className="hover:border-b-2 hover:border-white" onClick={() => handleClickLink("#partnerships")}>Parceiros</li>
                            </ul>
                        </div>
                        <div className="text-6xl w-14 h-24 pt-12 mr-12" onClick={() => handleMenu()}>X</div>
                    </>
                }
            </header>
        </>
    )
}