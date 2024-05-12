type Props = {
    image: string;
    color: string;
    text: string;
}

export const PartnershipLogo = ({image, color, text}: Props) => {
    return (
        <div className="w-[150px] h-[190px] space-y-1">
            <div className={`w-[150px] h-[150px] ${color} ${image} bg-cover bg-no-repeat bg-center`}></div>
            <p className="text-black font-semibold">{text}</p>
            <span className="inline-block w-[50px] h-[10px] bg-black"></span>
        </div>
    )
}