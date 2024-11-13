'use client'
import React from 'react'
import Image from 'next/image'



const error = () => {
    return (
        <>
            <div className=" flex flex-col justify-between items-center gap-10">
                <div>
                    خطا در سرور
                </div>
                <div className=" flex flex-row justify-center items-center p-5">
                    <Image src={'/images/Cyber Security-01.jpg'} width={500} height={800} />
                </div>
            </div>
        </>

    )
}

export default error
