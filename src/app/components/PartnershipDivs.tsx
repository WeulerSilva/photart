import { PartnershipLogo } from "./PartnershipLogo"

export const PartnershipDivs = () => {
    return (
        <div id="partnerships" className="w-screen h-[600px] bg-white flex flex-col justify-center items-center relative">
            <h1 className="mb-[90px] text-3xl font-bold uppercase border-b border-black text-black sm:text-4xl sm:mb-0 sm:absolute sm:top-28 sm:left-10">
                Empresas parceiras
            </h1>

            <div className="flex overflow-hidden w-full">
               <div className="w-[1610px] flex space-x-20 animate-loop-logos">
                    <PartnershipLogo color="green" image="one" text="Tagline Comp."/>
                    <PartnershipLogo color="red" image="two" text="Natur Corp."/>
                    <PartnershipLogo color="blue" image="three" text="Vida Animal"/>
                    <PartnershipLogo color="yellow" image="four" text="Motor Sul"/>
                    <PartnershipLogo color="orange" image="five" text="45D Compp."/>
                    <PartnershipLogo color="pink" image="six" text="Tur Passion"/>
                    <PartnershipLogo color="lime" image="seven" text="Bee Logo"/>
                </div>
                <div className="w-[1610px] flex space-x-20 animate-loop-logos ml-20" aria-hidden="true">
                    <PartnershipLogo color="green" image="one" text="Tagline Comp."/>
                    <PartnershipLogo color="red" image="two" text="Natur Corp."/>
                    <PartnershipLogo color="blue" image="three" text="Vida Animal"/>
                    <PartnershipLogo color="yellow" image="four" text="Motor Sul"/>
                    <PartnershipLogo color="orange" image="five" text="45D Comp."/>
                    <PartnershipLogo color="pink" image="six" text="Tur Passion"/>
                    <PartnershipLogo color="lime" image="seven" text="Bee Logo"/>
                </div> 
            </div>
            
        </div>
    )
}