// Shared Components
import Card from "@/components/shared/Card"

const inventory = [
  {
    category: 'linux',
    name: "T-shirt Linux",
    link: "https://uploads.tiendada.com/public/file-storage/im/product/2249761d-d70f-4a0f-bb20-120c85eb41cc.jpeg",
    color: "blue",
    size: "small"
  },
  {
    category: 'react',
    name: "T-shirt React",
    link: "https://uploads.tiendada.com/public/file-storage/im/product/gsj7uqhlymp7uvrzglg7.jpg",
    color: "blue",
    size: "small"
  },
]


export default function Home() {

  return (


    <main className="w-full h-full">
      <section className="container mx-auto p-10 flex flex-wrap gap-20 justify-center">
        {
          inventory.map((item , index) => (
            <Card 
              key={index}
              category={item.category}
              name={item.name}
              link={item.link}
              color={item.color}
              size={item.size}
            />
          ))
        }
      </section>
    </main>
  )
}
