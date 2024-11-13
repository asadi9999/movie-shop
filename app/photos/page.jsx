import { data } from "autoprefixer"
import { notFound } from "next/navigation";
import './photos.css'


const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
    return data.json();
}

const Photos = async () => {
    const data = await getData();
    console.log(data.address)
    if (!data) {
        notFound
    }
    return (
        <>
            <main>
                <div className=" flex flex-row justify-between items-center flex-wrap gap-4 my-4 px-5 p-5">
                    {
                        data.map((mov, i) => (
                            <div className="relative h-full w-72 border-2 rounded-lg p-2" key={i} >
                                <div className=" h-[28rem] w-full border-zinc-300">
                                    <div className="flex flex-col justify-center items-center w-full text-center overflow-hidden">
                                        < h3 className=" text-center"> {mov.name}</h3 >
                                        <hr className="border-1 w-full" />
                                        < p className="text-justify"><span className="txt">user name: </span> {mov.username}</p >
                                        < p className="text-justify"><span className="txt">emai: </span>{mov.email}</p >
                                        < p className="text-justify"><span className="txt">city: </span>{mov.address.city}</p >
                                        < p className="text-justify"><span className="txt">street: </span>{mov.address.street}</p >
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* <ClientMovies/> */}
            </main>
        </>
    )
}

export default Photos
// const [data, setData] = useState(null)
// useEffect(() => {
//     async function fetchData(id) {
//         const response = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`);
//         const res = await response.json();
//         setData(res);
//     }
//     fetchData();
// }, [])
// if (data === null) {
//     return <div className=' w-96 h-96 flex flex-row justify-center items-center mx-auto my-auto'>loading...</div>
// }
// <div className="">
//     {
//         data.data.map((mov, i) => (
//             <div className="">
//                 <ul>
//                     <li key={i}>
//                         {mov.title}
//                     </li>
//                 </ul>
//             </div>
//         ))
//     }
// </div>