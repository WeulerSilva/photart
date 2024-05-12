import { PartnershipLogo } from "./PartnershipLogo"

export const PartnershipDivs = () => {
    return (
        <div id="partnerships" className="w-screen h-[600px] bg-white flex flex-col justify-center items-center relative">
            <h1 className="mb-[90px] text-3xl font-bold uppercase border-b border-black text-black sm:text-4xl sm:mb-0 sm:absolute sm:top-28 sm:left-10">
                Empresas parceiras
            </h1>

            <div className="flex overflow-hidden w-full">
               <div className="w-[1610px] flex space-x-20 animate-loop-logos">
                    <PartnershipLogo color="bg-green-500" image="bg-logo-one" text="Tagline Comp."/>
                    <PartnershipLogo color="bg-red-500" image="bg-logo-two" text="Natur Corp."/>
                    <PartnershipLogo color="bg-blue-500" image="bg-logo-three" text="Vida Animal"/>
                    <PartnershipLogo color="bg-yellow-500" image="bg-logo-four" text="Motor Sul"/>
                    <PartnershipLogo color="bg-orange-500" image="bg-logo-five" text="45D Comp."/>
                    <PartnershipLogo color="bg-pink-500" image="bg-logo-six" text="Tur Passion"/>
                    <PartnershipLogo color="bg-lime-500" image="bg-logo-seven" text="Bee Logo"/>
                </div>
                <div className="w-[1610px] flex space-x-20 animate-loop-logos ml-20" aria-hidden="true">
                    <PartnershipLogo color="bg-green-500" image="bg-logo-one" text="Tagline Comp."/>
                    <PartnershipLogo color="bg-red-500" image="bg-logo-two" text="Natur Corp."/>
                    <PartnershipLogo color="bg-blue-500" image="bg-logo-three" text="Vida Animal"/>
                    <PartnershipLogo color="bg-yellow-500" image="bg-logo-four" text="Motor Sul"/>
                    <PartnershipLogo color="bg-orange-500" image="bg-logo-five" text="45D Comp."/>
                    <PartnershipLogo color="bg-pink-500" image="bg-logo-six" text="Tur Passion"/>
                    <PartnershipLogo color="bg-lime-500" image="bg-logo-seven" text="Bee Logo"/>
                </div> 
            </div>
            
        </div>
    )
}