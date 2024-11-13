'use client'
import React from 'react'
import Header from '@/components/header'
import '../../app/globals.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
// import { config } from 'next/dist/build/templates/pages'
// The return value is *not* serializedhttps://jsonplaceholder.typicode.com/posts




const index = () => {
  const [fact, setFact] = useState([])
  const fetchFact = () => {
    axios.get(`https://catfact.ninja/fact`).then((res) => {
      setFact(res.data.fact)
    })
    console.log(fact)
  }
    if (!fetchFact.ok) {
      console.log('error')
    }
    useEffect(() => {
      fetchFact()
    }, [])
  return (
    <><Header/>
      <div className="w-full h-[30rem] flex flex-col justify-center container mx-auto my-auto">
        <div className=' flex flex-col justify-between items-center g-8'>
          <h1>our services</h1>
          <button onClick={fetchFact} className=' bg-green-400 rounded-md p-5 '>fetch data</button>
          <input type="text" />
          <div className='max-w-lg bg-zinc-700 border-4 rounded-md p-10'>
            <p className='text-justify'>{fact}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default index
{/* <p>id:{fact.id}</p>
<p className='text-white'>title:{fact.title}</p>
<p>body:{fact.body}</p>
<button onClick={fetchData} className=' bg-zinc-700 text-white rounded-md p-3'>show Fact</button> */}
