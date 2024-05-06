import React from "react"
import { LoopImageSection } from "./LoopImageSection";

type Props = {
    onNumberSelect: (number: number) => void;
}

export const ParallaxLoopSection = ({onNumberSelect}: Props) => {
    const handleNumberClick = (number: number) => {
        onNumberSelect(number);
    }

    return (
        <div className="w-screen h-screen bg-white overflow-y-hidden flex justify-around items-center relative">
          <div className="absolute text-black top-10 z-[3]">
            <h1 className="text-4xl text-gray-300 sm:text-6xl">As melhores fotos</h1>
            <p className="text-md text-center text-gray-300 sm:text-xl">Para qualquer tipo de experiencia</p>
          </div>
          <div className="flex overflow-y-hidden w-[50%] h-full flex-col md:w-[22%]">
            <div className="w-full bg-black space-y-6 animate-loop-scroll">
                <LoopImageSection photo="bg-loop-one" onClick={() => handleNumberClick(0)}/>
                <LoopImageSection photo="bg-loop-two" onClick={() => handleNumberClick(1)}/>
                <LoopImageSection photo="bg-loop-three" onClick={() => handleNumberClick(2)}/>
                <LoopImageSection photo="bg-loop-four" onClick={() => handleNumberClick(3)}/>
                <LoopImageSection photo="bg-loop-five" onClick={() => handleNumberClick(4)}/>
            </div>
            <div className="w-full mt-6 bg-back space-y-6 animate-loop-scroll" aria-hidden="true">
              <LoopImageSection photo="bg-loop-one" onClick={() => handleNumberClick(0)}/>
              <LoopImageSection photo="bg-loop-two" onClick={() => handleNumberClick(1)}/>
              <LoopImageSection photo="bg-loop-three" onClick={() => handleNumberClick(2)}/>
              <LoopImageSection photo="bg-loop-four" onClick={() => handleNumberClick(3)}/>
              <LoopImageSection photo="bg-loop-five" onClick={() => handleNumberClick(4)}/>
            </div>
           </div>
            
           <div className="flex overflow-y-hidden w-[50%] h-full flex-col md:w-[22%]">
            <div className="w-full bg-black space-y-6 animate-loop-two">
                <LoopImageSection photo="bg-loop-six" onClick={() => handleNumberClick(5)}/>
                <LoopImageSection photo="bg-loop-seven" onClick={() => handleNumberClick(6)}/>
                <LoopImageSection photo="bg-loop-eight" onClick={() => handleNumberClick(7)}/>
                <LoopImageSection photo="bg-loop-nine" onClick={() => handleNumberClick(8)}/>
                <LoopImageSection photo="bg-loop-ten" onClick={() => handleNumberClick(9)}/>
            </div>
            <div className="w-full mt-6 bg-back space-y-6 animate-loop-two" aria-hidden="true">
              <LoopImageSection photo="bg-loop-six" onClick={() => handleNumberClick(5)}/>
              <LoopImageSection photo="bg-loop-seven" onClick={() => handleNumberClick(6)}/>
              <LoopImageSection photo="bg-loop-eight" onClick={() => handleNumberClick(7)}/>
              <LoopImageSection photo="bg-loop-nine" onClick={() => handleNumberClick(8)}/>
              <LoopImageSection photo="bg-loop-ten" onClick={() => handleNumberClick(9)}/>
            </div>
           </div>

           <div className="hidden overflow-y-hidden w-[22%] h-full flex-col md:flex">
            <div className="w-full bg-black space-y-6 animate-loop-three">
              <LoopImageSection photo="bg-loop-five hidden md:flex" onClick={() => handleNumberClick(4)}/>
              <LoopImageSection photo="bg-loop-three hidden md:flex" onClick={() => handleNumberClick(2)}/>
              <LoopImageSection photo="bg-loop-two hidden md:flex" onClick={() => handleNumberClick(1)}/>
              <LoopImageSection photo="bg-loop-four hidden md:flex" onClick={() => handleNumberClick(3)}/>
              <LoopImageSection photo="bg-loop-one hidden md:flex" onClick={() => handleNumberClick(0)}/>
            </div>
            <div className="w-full mt-6 bg-back space-y-6 animate-loop-three" aria-hidden="true">
              <LoopImageSection photo="bg-loop-five hidden md:flex" onClick={() => handleNumberClick(4)}/>
              <LoopImageSection photo="bg-loop-three hidden md:flex" onClick={() => handleNumberClick(2)}/>
              <LoopImageSection photo="bg-loop-two hidden md:flex" onClick={() => handleNumberClick(1)}/>
              <LoopImageSection photo="bg-loop-four hidden md:flex" onClick={() => handleNumberClick(3)}/>
              <LoopImageSection photo="bg-loop-one hidden md:flex" onClick={() => handleNumberClick(0)}/>
            </div>
           </div>

           <div className="hidden overflow-y-hidden w-[22%] h-full flex-col md:flex">
            <div className="w-full bg-black space-y-6 animate-loop-four">
              <LoopImageSection photo="bg-loop-si" onClick={() => handleNumberClick(5)}/>
              <LoopImageSection photo="bg-loop-seven" onClick={() => handleNumberClick(6)}/>
              <LoopImageSection photo="bg-loop-eight" onClick={() => handleNumberClick(7)}/>
              <LoopImageSection photo="bg-loop-nine" onClick={() => handleNumberClick(8)}/>
              <LoopImageSection photo="bg-loop-ten" onClick={() => handleNumberClick(9)}/>
            </div>
            <div className="w-full mt-6 bg-back space-y-6 animate-loop-four" aria-hidden="true">
              <LoopImageSection photo="bg-loop-six" onClick={() => handleNumberClick(5)}/>
              <LoopImageSection photo="bg-loop-seven" onClick={() => handleNumberClick(6)}/>
              <LoopImageSection photo="bg-loop-eight" onClick={() => handleNumberClick(7)}/>
              <LoopImageSection photo="bg-loop-nine" onClick={() => handleNumberClick(8)}/>
              <LoopImageSection photo="bg-loop-ten" onClick={() => handleNumberClick(9)}/>
            </div>
           </div>

           
            
        </div>
    )
}