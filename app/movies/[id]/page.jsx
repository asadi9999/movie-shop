import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'

const getData = async (id) => {
    const data = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, { cache: 'no-store' })
    return data.json()
}

const Single = async ({ params }) => {
    const data = await getData(params.id);
    if (!data.id) {
        notFound();
    }
    return (
        <>
            <div className='container mx-auto p-5'>
                <section className=' flex flex-col md:flex-row justify-between items-center gap-5'>
                    <div className=" flex flex-col justify-center gap-8" dir='rtl'>
                        <div className=' font-bold text-center text-red-500'>{data.title}</div><hr />
                        <div><span>سال ساخت: </span>{data.year}</div>
                        <div><span>زمان: </span>{data.runtime}</div>
                        <div><span>کارگردان: </span>{data.director}</div>
                        <div><span>نمره آی ام دی بی: </span>{data.imdb_rating}</div>
                        <div>جایزه: {data.awards}</div>
                        <div className=' flex flex-col gap-4'>
                            <div>خلاصه فیلم: </div>
                            <div className=' w-[650] flex flex-row flex-wrap'>{data.plot}</div>
                        </div>
                            <div className=" flex flex-col gap-6">
                               <div className="">ژانر</div>
                               <div className=" flex flow-row gap-8">
                                    {
                                        data.genres.map((gen, i) => (
                                            <div className=" " key={i}>
                                                <div className=' text-black bg-zinc-300 rounded-md p-2'>{gen}</div>
                                            </div>
                                        ))
                                    }
                               </div>
                            </div>
                    </div>
                    <div>
                        <Image src={data.poster} width={300} height={350} alt={data.title} />
                    </div>
                </section>
                <div className=" flex flex-row justify-center gap-5 py-8 ">
                    {
                        data.images.map((img, i) => (
                            <div className="rounded-lg" key={i}>
                                <Image src={img} width={400} height={480} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Single
