import { data } from 'autoprefixer';
import { notFound } from 'next/navigation';
import React from 'react'


const getData= async() => {
    const data = await fetch('https://freetestapi.com/api/v1/movies' ,{cache:'no-store'});
    return data.json();
}



const Films =async () => {
    const data = await getData();
    if (!data) {
      notFound
  }
    console.log(data)
  return (
    <>
        <main>
          {
            data.map((item,i) => (
              <p key={i}>{item.year}</p>
            ))
          }
        </main>
    </>
  )
}

export default Films
