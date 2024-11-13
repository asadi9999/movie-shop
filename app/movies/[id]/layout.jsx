export default function RootLayout({ children }) {
    return (
        <div className="left-0 flex flex-row-reverse justify-around  gap-2">
            <main>
                {children}

            </main>
                <aside className=" w-[250px] left-1 flex flex-col justify-between items-center p-2">
                    <p className=" text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolorum, inventore voluptate quas iure non corporis odit aperiam est quis tempore, fuga rem atque fugiat molestiae quo architecto nihil. Maiores ad consequuntur dolor beatae vel. Mollitia deserunt, exercitationem aliquam sunt, nobis totam consectetur voluptatem eligendi vitae voluptates, dolore maxime eos.
                    </p>
                    <p className=" text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolorum, inventore voluptate quas iure non corporis odit aperiam est quis tempore, fuga rem atque fugiat molestiae quo architecto nihil. Maiores ad consequuntur dolor beatae vel. Mollitia deserunt, exercitationem aliquam sunt, nobis totam consectetur voluptatem eligendi vitae voluptates, dolore maxime eos.
                    </p>
                    <p className=" text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolorum, inventore voluptate quas iure non corporis odit aperiam est quis tempore, fuga rem atque fugiat molestiae quo architecto nihil. Maiores ad consequuntur dolor beatae vel. Mollitia deserunt, exercitationem aliquam sunt, nobis totam consectetur voluptatem eligendi vitae voluptates, dolore maxime eos.
                    </p>
                    <span className=" bg-zinc-200 p-2 border-r-fuchsia-400 rounded-md text-slate-900 ">
                        a site of Movies
                    </span>
                </aside>

        </div>
    );
}
