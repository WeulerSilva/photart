"use client"

import { useEffect, useState } from "react";
import 'animate.css/animate.min.css';
import { GoChevronLeft, GoChevronRight, GoX } from "react-icons/go";
import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from "react-scroll-parallax";
import { ParallaxLoopSection } from "./components/ParallaxLoopSection";
import { PhotoInLeft } from "./components/PhotoInLeft";
import { PhotoInParallax } from "./components/PhotoInParallax";
import { SocialMidiaDivs } from "./components/SocialMidiaDivs";
import { AboutUsDiv } from "./components/AboutUsDiv";
import { PartnershipDivs } from "./components/PartnershipDivs";
import Image from "next/image";



export default function Home() {
  const [showDivs, setShowDivs] = useState(false);
  const [showDivsTwo, setShowDivsTwo] = useState(false);
  const [showDivsThree, setShowDivsThree] = useState(false);
  const [changeName, setChangeName] = useState<number>(0);
  const [photoModal, setPhotoModal] = useState<boolean>(false);
  const [loopModal, setLoopModal] = useState<boolean>(false);
  const [openModal,setOpenModal] = useState<boolean>(false);
  const [currentPhoto,setCurrentPhoto] = useState<number | null>(null);
  const changeNames = ['Amigos', 'Paixão', 'Carisma', 'Amor', 'Beleza', 'Vida', 'Saúde', 'Bem-Estar', 'Familia', 'Natureza'];
  const changePhotoModal = ['landscape', 'landscape-one', 'landscape-two', 'landscape-three','photo-one', 'photo-two', 'photo-three'];
  const changeLoopModal = ['loop-one','loop-two','loop-three','loop-four','loop-five','loop-six','loop-seven','loop-eight','loop-nine','loop-ten'];
  const changePhotos= ['photo-one', 'photo-two', 'photo-three','photo-one', 'photo-two', 'photo-three','photo-one','photo-one'];

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if(changeName >= 0 && changeName < 9) {
        setChangeName(changeName +1);
      }else if(changeName === 9) {
        setChangeName(0);
      }      
    },1000)
  }, [changeName]);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const referenceValue = 400;
    const referenceTwoValue = 4700;
    const referenceThree = 7250;
    if (scrollTop > referenceValue) {
      setShowDivs(true);
    }
    if (scrollTop > referenceTwoValue) {
      setShowDivsTwo(true);
    }
    if(scrollTop > referenceThree) {
      setShowDivsThree(true);
      console.log('foi')
    }
  };

  const handlePhotoModal = (number: number) => {
    setCurrentPhoto(number);
    setPhotoModal(true);
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    setPhotoModal(false);
    setLoopModal(false);
    setOpenModal(false);
  }

  const handleNumberSelect = (number: number) => {
    setLoopModal(true);
    setCurrentPhoto(number);
    setOpenModal(true);
  }

  const handleModalPlus = () => {
    if(photoModal) {
      setCurrentPhoto(prev => (prev === null || prev >= changePhotoModal.length - 1) ? 0 : prev + 1);
    }
    if(loopModal) {
      setCurrentPhoto(prev => (prev === null || prev >= changeLoopModal.length - 1) ? 0 : prev + 1);
    }
  }
  
  const handleModalMinus = () => {
    if (photoModal) {
      setCurrentPhoto(prev => (prev === null || prev <= 0) ? changePhotoModal.length - 1 : prev - 1);
    }
    if (loopModal) {
      setCurrentPhoto(prev => (prev === null || prev <= 0) ? changeLoopModal.length - 1 : prev - 1);
    }
  }

  return (
    <>
        <div className='flex flex-col overflow-hidden' id="home">
          <div className="w-screen min-h-[85vh] relative bg-black flex flex-col justify-center items-center bg-fixed">
            <div className={`w-[75%] h-[400px]  bg-${changePhotos[changeName]} bg-cover bg-no-repeat bg-center sm:h-[600px] 
            lg:bg-contain`} onClick={() => handlePhotoModal(4)}></div>
            <h1 className="absolute bottom-[-17px] text-white uppercase text-4xl font-bold">photart</h1>
          </div>
    
          <div className="flex w-screen h-[50vh] bg-white justify-cente relative z-[2]">
            <h1 className="absolute flex w-screen justify-center uppercase top-[-22px] text-black font-bold text-4xl">photart</h1>
    
            {showDivs && (
              <div className="w-[100%] flex justify-center mt-8 ease-linear">
                <PhotoInLeft/>
              </div>
            )}
          </div>
    
          <div className="h-[600px] flex justify-between flex-col items-center bg-fixed lg:flex-row bg-black">
            <div className="flex justify-center items-center flex-col w-[375px] h-[400px] lg:w-[400px]">
              <div className="flex justify-end items-end w-full h-full">
                <div className="w-[50%] h-[100%] bg-white bg-landscape-one bg-cover bg-no-repeat bg-center border-white hover:border-[1px]"
                  onClick={() => handlePhotoModal(1)}></div>
              </div>
              <div className="flex justify-start items-start w-full h-full">
                <video className="w-[50%] h-[100%] border-white hover:border-[1px]"
                  src="https://cdn.pixabay.com/video/2023/09/21/181537-866999852_tiny.mp4"
                  loop
                  autoPlay
                  muted
                  onClick={() => handlePhotoModal(2)}/>
              </div>
            </div>
    
            <h1 className="font-black text-6xl w-[320px] text-center text-white lg:text-6xl">{changeNames[changeName]}</h1>
    
            <div className="flex justify-center items-center flex-col w-[375px] h-[400px] lg:w-[400px]">
              <div className="flex justify-start items-start w-full h-full">
                <div className="w-[50%] h-[100%] bg-white bg-landscape-three bg-cover bg-no-repeat bg-center border-white hover:border-[1px]"
                  onClick={() => handlePhotoModal(3)}></div>
              </div>
              
              <div className="flex justify-end items-end w-full h-full">
                <div className="w-[50%] h-[100%] bg-white bg-landscape bg-cover bg-no-repeat bg-center border-white hover:border-[1px]"
                  onClick={() => handlePhotoModal(0)}></div>
              </div>
            </div>
          </div>
    
          <div className="p-10 flex justify-center items-center flex-col text-white bg-black">
            <h2 className="text-[45px] border-white border-b-2 mb-8 font-bold lg:text-8xl">PhotArt</h2>
            <p className="text-2xl text-center">Nos capturando momentos únicos e transformando-os em memórias eternas. Na nossa agência de fotografia, cada clique conta uma história e cada imagem transmite emoção. De retratos a paisagens, estamos aqui para revelar a beleza do mundo através das lentes. Deixe-nos contar a sua história através da magia da fotografia.</p>
          </div>
    
          <PhotoInParallax/>

          <div className="w-screen h-screen bg-[#f6f4ef] relative z-[3]">
            <h1 className="text-gray-600 text-2xl mt-24 px-4 lg:text-6xl">Através das lentes, buscamos revelar a beleza oculta no cotidiano, transformando momentos simples em obras de arte.</h1>
            <div className="flex flex-col justify-center items-start w-full h-full lg:flex-row">
              <p className="w-full h-[80%] text-lg text-gray-500 p-4 mt-5 lg:text-xl lg:w-[32.5%] lg:h-[80%]">Nossas fotografias são mais do que simples registros visuais. são obras de arte que transcendem o comum, incorporando a tradição e um gosto refinado pelo belo. Assim como os designers inteligentes, esses fotógrafos têm o dom de transformar momentos ordinários em imagens extraordinárias, elevando a fotografia a um nível de excelência que cativa e inspira.</p>
              
              <ParallaxProvider>
                <div className="flex justify-around items-center w-full h-full lg:w-[77.5%]">
                  <div className="flex justify-center items-center w-[45%] h-full">
                  
                  <ParallaxBanner 
                    style={{ width: '95%',height: '80%' }}
                    layers={[{ image: 'https://cdn.pixabay.com/photo/2023/11/07/22/59/building-8373618_1280.jpg', speed: -25}]}                    
                    className="aspect-[2/1] w-[95%] h-[80%]"
                  />
                  </div>
                  
                  <div className="flex flex-col justify-around items-start w-[45%] h-full">
                  <ParallaxBanner style={{width: '100%', height: '45%'}}>
                    <ParallaxBannerLayer speed={-20}>
                      <video
                        autoPlay
                        muted
                        src="https://cdn.pixabay.com/video/2023/08/31/178472-859955927_tiny.mp4"
                        loop
                      />
                    </ParallaxBannerLayer>
                  </ParallaxBanner>

                  <ParallaxBanner style={{width: '100%', height: '55%', marginLeft: '40px'}}>
                    <ParallaxBannerLayer speed={5}>
                      <video
                        className="w-[80%]"
                        autoPlay
                        muted
                        src="https://cdn.pixabay.com/video/2022/07/24/125314-733046618_tiny.mp4"
                        loop
                      />
                    </ParallaxBannerLayer>
                  </ParallaxBanner>

                    
                  </div>
                </div>
              </ParallaxProvider>

            </div>
          </div>

          <div className="w-screen h-screen bg-landScape-transiction bg-cover bg-no-repeat bg-center"></div>

          <div className="w-scrren h-[400px] bg-[#f6f4ef] flex justify-center items-center flex-col">
            {showDivsTwo &&
              <>
                <h2 className="text-[#4b5563] text-2xl border-white border-b-4 animate__animated 
                  animate__bounceInLeft md:text-5xl">Pq escolher a PHOTOART?</h2>
                <h5 className="text-[#6b7280] text-2xl border-white border-b-4 md:text-3xl">Pq aqui temos</h5>
              </>
            }
            
          </div>

        <ParallaxLoopSection  onNumberSelect={handleNumberSelect}/>

        <AboutUsDiv/>

        <PartnershipDivs/>

        <div className="flex justify-start items-center w-screen h-[500px] bg-[#f6f4ef] flex-col" id="contact">
            <h1 className="text-[#4b5563] text-3xl text-center mt-10 sm:text-5xl">Conheça Nossas Redes Socias<br/> ou <br/>Fale Conosco</h1>

            {showDivsThree &&
              <div className="grid grid-cols-2 place-items-center mt-10 w-screen h-[400px] sm:flex sm:justify-around sm:items-center animate__animated animate__backInLeft">
               
                    <SocialMidiaDivs image="bg-instagram" social="Instagram" link=""/>
                    <SocialMidiaDivs image="bg-whatsapp" social="WhatsApp" link="https://wa.me/82996816140"/>
                    <SocialMidiaDivs image="bg-github" social="GitHub" link="https://github.com/WeulerSilva"/>
                    <SocialMidiaDivs image="bg-linkedin" social="Linkldin" link="https://www.linkedin.com/in/weuler-silva-b5887627a/"/>

                </div>
              }
        </div>
          
          <div className="w-screen h-10 bg-gray-700">
            <h1 className="text-center mt-5 text-white">I´m Weuler Silva and I Made This WebSite...</h1>
          </div>

      </div>  

      {openModal &&
      <div className="fixed z-50 inset-0 overflow-hidden" id="contact">
        <div className={`w-screen h-screen bg-fixed animate__animated animate__backInLeft animate__fast bg-white relative z-[10]`}>
          <div className="flex justify-center items-center w-full h-[10%]">
            <div></div>
            <div className="w-[40px] h-[40px] bg-black flex justify-center items-center">
              <Image src={'/images/logo.png'} alt="PhotArt logo" width={150} height={96} className=""/>
            </div>
            <div className="w-[40px] h-[40px] bg-black absolute right-4" onClick={() => handleCloseModal()}>
             <GoX className="w-full h-full"/>
            </div>
          </div>
          <div className="flex justify-around items-center w-full h-[90%]">
            <div className="w-[40px] h-[40px] bg-black cursor-pointer" onClick={() => handleModalMinus()}>
              <GoChevronLeft className="w-full h-full text-white"/>
            </div>

            {photoModal &&
              <div className={` w-[80%] h-[90%] bg-${changePhotoModal[currentPhoto || 0]} bg-cover bg-no-repeat bg-center`}></div>
            }
            {loopModal &&
              <div className={` w-[80%] h-[90%] bg-${changeLoopModal[currentPhoto || 0]} bg-cover bg-no-repeat bg-center`}></div>
            }
            
            <div className="w-[40px] h-[40px] bg-black cursor-pointer" onClick={(() => handleModalPlus())}>
              <GoChevronRight className="w-full h-full text-white"/>
            </div>
          </div>
        </div>
      </div>
      
      }
    </>
  )
}
