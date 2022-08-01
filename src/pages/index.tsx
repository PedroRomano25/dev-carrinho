import type { NextPage } from 'next'
import router from 'next/router'
import { useEffect } from 'react'


const Home: NextPage = () => {
  useEffect(() => {
    router.push('/AcimaDe10')
  },[])

  return (
    <div >
    </div>
  )
}

export default Home
