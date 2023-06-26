import Categories from '@/components/Categories'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex-start flex-col paddings mb-16 ">
    
    <Categories/>
    <h1>Posts</h1>
    <h1>LoadMore</h1>
      
    </main>
  )
}
