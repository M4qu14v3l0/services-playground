// Next Image
import Image from "next/image"

//Next Link
import Link from "next/link"

export default function Card({ category , name , link , color , size }) {
  return (
    <>
        <Link 
            className="h-[480px] w-[300px] bg-white shadow-lg rounded-xl flex flex-col items-center justify-center gap-10 p-4 transition-all duration-75 ease-in-out  hover:scale-[1.1]"
            href={{
                pathname:'/item',
                query: {category , color , size}
                }}
                >
            <div className="relative w-[200px] h-[200px]">
                <Image 
                    src={link}
                    fill
                    style={{objectFit: 'cover'}}
                    alt={name}
                />
            </div>
            <h2 className="font-bold tracking-wide text-xl">{name}</h2>
        </Link>
    </>
  )
}
