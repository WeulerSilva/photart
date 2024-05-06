type Props = {
    onClick: () => void;
    photo: string;
}

export const LoopImageSection = ({onClick, photo}: Props) => {

    return (
        <div className={`opacity-35 hover:opacity-100 w-full h-80 bg-green-500 ${photo} bg-cover bg-no-repeat bg-center`} onClick={onClick}></div>
    )
}