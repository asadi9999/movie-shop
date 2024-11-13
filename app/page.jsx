import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ClientMovies from "@/components/clientMovies";


const getData = async () => {
    const data = await fetch('https://moviesapi.ir/api/v1/movies?page={page}', { cache: 'no-store' });
    return data.json();
}


const page = async () => {
    const data = await getData();
    return (
        <>
            <main>
                <title>ایران فیلم
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                    </svg>
                </title>
                <meta name="ایران فیلم" content="فیلم" />
                    <div className="flex flex-row justify-between items-center flex-wrap gap-4 my-4 px-5 p-5">
                        {
                            data.data.map((mov, i) => (
                                <Link className=" h-full w-72 border-2 rounded-lg p-2" key={i} href={`/movies/${mov.id}`}>
                                    <div className=" h-[32rem] w-full border-zinc-300 flex flex-col flex-wrap justify-center items-center gap-5">
                                        <div className=" flex flex-row justify-center items-center">
                                            <Image unoptimized src={mov.poster} alt={mov.title} width={240} height={260} className=" bg-cover" />
                                        </div>
                                        <div className="flex flex-row justify-center items-center w-full text-center">
                                            < h3 className=" text-center left-1 right-1"> {mov.title}</h3 >
                                        </div>
                                        <div className=" flex flex-row justify-center items-center gap-x-10 text-sm ">
                                            <div className="bg-zinc-300 px-2 py-1 rounded-md max-w-max max-h-max text-black">سال تولید:{mov.year}</div>
                                            <div className="bg-zinc-300 px-2 py-1 rounded-md max-w-max max-h-max text-black">کشورسازنده:{mov.country}</div>
                                        </div>
                                    </div>
                                </Link>

                            ))
                        }
                    </div>
                {/* <ClientMovies/> */}
            </main>
        </>
    )
}

export default page


