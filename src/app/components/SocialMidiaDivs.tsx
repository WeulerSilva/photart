type Props = {
    social: string;
    image: string;
    link: string;
}

export const SocialMidiaDivs = ({social,image,link}: Props) => {
  const handleClick = (page: string) => {
    window.location.href = page;
  }

    return (
      <div className="w-[20%] h-[80%]" onClick={() => handleClick(link)}>
        <div className="w-full h-full">
          <div className={`w-full h-[60%] bg-black ${image} bg-cover bg-no-repeat bg-center`}></div>
          <h6 className="text-black text-2xl py-[10px]">{social}</h6>
          <div className="w-[80px] h-[4px] bg-black"></div>
        </div>
      </div>
    )
}