function Topbar() {
    const navigation_list = [
        {id: "#home", name: "Homex"},
        {id: "#visi_misi", name: "Visi Misi"},
        {id: "#kegiatan", name: "Kegiatan"},
        {id: "#anggota", name: "Anggota"},
        {id: "#more", name: "Lainnya"}
    ];
    
    const list_of_navigation = navigation_list.map(
        (value) => {
            return <a href={value.id} key={value.id} className="w-1/5 py-2 group border-in text-center text-white lg:text-lg text-sm hover:text-primary transition-all">
                <span>{value.name}</span>
                
                <div className="group-hover:w-full w-0 transition-all h-[2px] bg-primary"></div>
            </a>;
        }
    );
    
    return (
        <nav className="topbar">
            <div className="flex justify-between w-full">
                <a href="/" className="md:max-w-52 max-w-36 flex items-center space-x-2">
                    <img className="lg:w-12 w-10 aspect-square" src="/assets/logo.png" alt="Logo" />
                    <h5 className="md:text-sm text-xs w-4/6 text-white font-bold">Rayon Pemuda Tiberias</h5>
                </a>
                
                <div className="md:flex hidden justify-left space-x-10 w-2/3 items-center">
                    {list_of_navigation}
                </div>
            </div>
        </nav>
    )
}

export default Topbar;