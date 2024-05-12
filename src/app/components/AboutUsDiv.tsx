import Image from "next/image"

export const AboutUsDiv = () => {
    return (
        <div id="about" className="flex flex-col w-screen h-[650px] justify-center items-center bg-black md:flex-row">
            <div className="flex justify-center items-center md:flex-1">
            <Image src={'/images/logo.png'} alt="PhotArt logo" width={230} height={230} className=""/>
            </div>
            <div className="flex justify-center items-center flex-col flex-1 px-10 lg:px-24">
                <h1 className="text-2xl mb-2 border-b-2 border-white font-bold md:mb-6 lg:text-4xl">Quem somos?</h1>
                <p className="text-md text-center lg:text-lg">Somos uma empresa de fotografia com mais de <span className="font-semibold border-b border-white">10 ANOS DE MERCADO</span>. Lider no mercado na região sul do Brasil,onde somos bem reconhecidos pelos preços justos,rapida entrega e resultado de qualidade.</p>
                <br/>
                <p className="text-md text-center lg:text-lg">Com mais de 45 funcionarios vindo das mais diversas areas seja ela: fotografia,audio-visual,cinematografia e designs. <span className="font-semibold border-b border-white uppercase"> Nos proporcionaremos o melhor para cada necessidade que o cliente precisa.</span></p>
            </div>
        </div>
    )
}