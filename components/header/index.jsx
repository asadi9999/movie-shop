import headerItems from './headerItems'
import Link from 'next/link'
import '../../app/index.css'
import { MdLocalMovies } from "react-icons/md";
const Header = () => {
    return (
        <>
            <header className='header-site flex flex-row justify-center items-center mx-auto w-full '>
                <div className="bg-blue-400 container mx-auto h-[85px] flex flex-row justify-between items-center w-full">
                    <nav>
                        <ul className='flex flex-row-reverse gap-10 p-3 text-white text-2xl'>
                            {
                                headerItems.map((item) => {
                                    return (

                                        <li id={item.id}>
                                            <Link href={item.path}>{item.title}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <div className="flex flex-row justify-start items-center gap-2 pr-5 text-2xl">
                        <Link href='/'>ایران فیلم</Link>
                        <MdLocalMovies className=' scale-125'/>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
