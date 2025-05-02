
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Link href='/users' className='text-blue-500'>Go to Users</Link>
      < ProductCard />

          </main>
  )
}
