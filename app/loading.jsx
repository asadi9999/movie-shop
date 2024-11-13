import React from 'react'
import Image from 'next/image'
const Loading = () => {
  return (
    <>
    <div className="container mx-auto my-auto w-[500] h-[1200] p-10 flex flex-row justify-center items-center">
      <Image src={'/images/loading.svg'} width={150} height={150} className=' flex flex-row justify-center items-center bg-black text-white'></Image>
    </div>
        
    </>
  )
}

export default Loading
