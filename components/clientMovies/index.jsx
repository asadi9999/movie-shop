// "use client"
import React from 'react'
// import { useEffect,useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
// *********************************************************************************
const getData = async () => {
    const data = await fetch('https://www.moviesapi.ir/api/v1/movies?page={page}');
    return data.json();
}
const ClientMovies = async () => {
    const data = await getData();
    // const [movies,setMovies]=useState([]);
    // useEffect(() => {
    //     axios.get('https://www.moviesapi.ir/api/v1/movies?page={page}')
    //     .then(res => setMovies(res.data.data))
    //     .catch(e => console.log(e))
    // },[]);
    return (
        <>
            <div className="">
                {
                    data.data.map((mov, i) => (
                        <div key={i} className=' flex flex-row justify-around gap-5 border-2 rounded-xl'>
                            <div className=' flex flex-row justify-start items-center gap-4'>
                                movie name: <h1>{mov.title}</h1>
                                movie genres:  <h1>{mov.genres}</h1>
                            </div>

                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ClientMovies
