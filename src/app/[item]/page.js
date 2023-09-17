// Next - Image
import Image from "next/image"
import Link from "next/link"


const inventory_options = [
  {
    category: "linux",
    link: "https://uploads.tiendada.com/public/file-storage/im/product/2249761d-d70f-4a0f-bb20-120c85eb41cc.jpeg",
    color: "black"
  },
  {
    category: "linux",
    link: "https://uploads.tiendada.com/public/file-storage/im/product/e535f8de-3480-4938-9a8f-466782451a0d.jpeg",
    color: "blue"
  },
  {
    category: "linux",
    link: "https://uploads.tiendada.com/public/file-storage/im/product/dfeeb87d-cf11-495b-a57f-6d97ed47882f.jpeg",
    color: "green",
  },
  {
    category: "react",
    link: "https://uploads.tiendada.com/public/file-storage/im/product/gsj7uqhlymp7uvrzglg7.jpg",
    color: "blue"
  },
  {
    category: "react",
    link: "https://uploads.tiendada.com/public/file-storage/im/product/yu3wovpb2sdyjswgablk.jpg",
    color: "white"
  },
  {
    category: "react",
    link: "https://uploads.tiendada.com/public/file-storage/im/product/s6vgzuywh1ldujoiigzb.jpg",
    color: "black"
  }
]

  const linux = ["black" , "blue" , "green"]
  const react = ["blue" , "white" , "black"]

  const sizes = ['small' , 'medium' , 'large' , 'xl']

export default function Item({searchParams}) {

  const item = inventory_options.filter((item) => item.category === searchParams.category).find((item) => item.color === searchParams.color)
  const colorsCategory = searchParams.category === 'linux' ? linux : react

  return (
    <>
      <section className="container h-[500px] max-w-5xl mx-auto px-5 grid grid-cols-2 rounded-xl shadow-lg justify-center items-center">
        <div className="relative w-[340px] h-[380px] mx-auto">
          <Image 
              src={item.link}
              fill
              style={{objectFit: 'cover'}}
              alt={item.category}
              className="rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-10 p-6">
          <h2 className="uppercase font-bold text-lg">{item.category} - T-shirt</h2>
          <hr/>
          Shirt color
          <div className="flex flex-row gap-10">
            {
              colorsCategory.map((color , index) => (
                <Link
                  href={{
                    pathname: '/item',
                    query: {category: searchParams.category  , color , size: searchParams.size}
                  }}
                  key={index}
                  className={`${color === searchParams.color ? 'border border-blue-500 p-2 rounded-xl' : 'border border-gray-50-500 p-2 rounded-xl'}  w-24 text-center`}
                > 
                  {color}
                </Link>
              ))
            }
          </div>

          Shirt size
          <div className="flex flex-row gap-10">
            {
              sizes.map((size , index) => (
                <Link
                  href={{
                    pathname: '/item',
                    query: {category: searchParams.category  , color: searchParams.color , size}
                  }}
                  key={index}
                  className={`${size === searchParams.size ? 'border border-blue-500 p-2 rounded-xl' : 'border border-gray-50-500 p-2 rounded-xl'} w-24 text-center `}
                > 
                  {size}
                </Link>
              ))
            }
          </div>

          <div className="w-full flex justify-center items-center">
            <Link href={'#'} className='w-32 bg-blue-500 h-12 text-white rounded-xl flex justify-center items-center'>
              Buy now
            </Link>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center items-center mt-10">
            <Link href={'/'} className='w-32 bg-blue-600 h-12 text-white rounded-xl flex justify-center items-center'>
              Return
            </Link>
        </div>
    </>
  )
}
