import React from 'react'
import Image from 'next/image'
const notFoundPage = () => {
  return (
    <>
        <div className=' container w-full h-full p-10 flex flex-row justify-center items-center'>
            <p>
            صفحه موردنظریافت نشد....
            </p>
            <Image src={'../public/images/vecteezy_cartoon-pencil-vector_19506885.jpg'} width={400} height={800} className=' bg-cover'/>

        </div>
    </>
  )
}

export default notFoundPage
