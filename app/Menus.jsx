import Link from 'next/link'
import './index.css'
const Menus = () => {
    return (
        <>
            <div className="flex flex-row w-full p-5 h-36 ">
                <ul className='flex flex-row bg-gray-200 justify-center gap-10 items-center p-5 w-full'>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/products">products</Link>
                    </li>
                    <li>
                        <Link href="/about">about</Link>
                    </li>
                    <li>
                        <Link href="/contact">contact</Link>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Menus
