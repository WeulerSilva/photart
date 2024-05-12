type Props = {
    onClick: () => void;
    photo: string;
}

export const LoopImageSection = ({onClick, photo}: Props) => {

    return (
        <div className={`opacity-35 hover:opacity-100 cursor-pointer w-full h-80 bg-black ${photo} bg-cover bg-no-repeat bg-center`} onClick={onClick}></div>
    )
}