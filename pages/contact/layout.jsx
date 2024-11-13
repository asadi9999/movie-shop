import "./globals.css";
import Footer from "../components/footer";
import Header from "../components/header";


export default function RootLayout({ children }) {
    return (
        <>
            <div className="">
                <Header/>
                <main>{children}</main>
                <aside className=" text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorum, esse sit ratione blanditiis vero consequatur commodi asperiores, quibusdam corporis numquam eveniet, doloremque eaque nostrum neque. Aspernatur tenetur aut eligendi asperiores! Minima nemo impedit voluptatibus similique nobis debitis sapiente aliquid, ipsum sed architecto ea possimus illum tempore, harum, molestiae dolor perferendis officiis laborum itaque repudiandae? Quas soluta velit commodi dolores! Ipsum nostrum nulla incidunt deleniti laborum eligendi modi dicta nihil atque sed! Blanditiis, sit cupiditate. Illo laboriosam itaque praesentium perferendis aperiam nostrum minus perspiciatis, eaque facilis quaerat error a ipsam commodi eos deleniti veniam velit ipsum excepturi explicabo neque, cumque corporis labore amet? Rem, sit consequuntur repellendus, eum adipisci illo minus culpa aperiam dolorum pariatur reprehenderit nostrum nihil voluptatem sapiente necessitatibus nesciunt vero doloremque nemo quis dolore expedita architecto magni! Consectetur, nostrum dignissimos esse, ipsa fugit sequi excepturi laborum porro nihil distinctio nisi aperiam quidem quibusdam repudiandae facere nesciunt corporis, aspernatur saepe blanditiis alias! Dolorum repudiandae sed, ducimus ratione sequi totam dolor reprehenderit quam! Accusantium eum, temporibus dolores rem, omnis distinctio sit blanditiis quibusdam officiis deleniti voluptatibus, debitis necessitatibus amet! Vero aliquid consequuntur distinctio in est eveniet cumque aliquam, enim temporibus, incidunt aperiam mollitia quibusdam quidem perspiciatis itaque voluptates. A!</aside>
                <Footer/>
            </div>
        </>

    );
}
