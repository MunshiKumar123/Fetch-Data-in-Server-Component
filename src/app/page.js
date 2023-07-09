'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function Home() {


  return (
    <main>
      <h3>Api Data Get</h3>
      <ul>
        <li><Link href="/product">product list</Link></li>
      </ul>


    </main>
  )
}
