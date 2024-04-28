import Kegiatan from "@/components/root/Kegiatan";

export default function Home() {
    const landing_content = {
        visi: "Menjadikan anggota dari Rayon Tiberias dapat memberikan dan menyebarkan kasih kepada sesama dalam kasih Tuhan Yesus Kristus.",
        misi: "Menjadikan pemuda Rayon Tiberias untuk bertumbuh dengan keinginan untuk melayani Tuhan dan sesama. Sekaligus membantu orang dalam kasih Kristus sambil menyebarkan ajaran Kristus yang benar sesuai dengan Alkitab.",
    };

    const list_member = [
        {
            id: 1,
            name: "kevin immanuel",
            role: "ketua",
            img: "/assets/member/kevin.webp",
            instagram_name: "kevin_immanuel",
        },
        {
            id: 2,
            name: "clay aiken",
            role: "member",
            img: "/assets/member/clay.jpeg",
            instagram_name: "clay_aiken_",
        },
        {
            id: 3,
            name: "ivana angelia",
            role: "member",
            img: "/assets/member/ivana.jpeg",
            instagram_name: "ivanaangelia",
        },
    ];

    return (
        <>
            <header
                id="home"
                className="bg-hero bg-no-repeat bg-center bg-cover lg:h-screen md:h-[90vh] sm:h-[80vh] h-[50vh] flex items-center"
            >
                <div className="main-container hero">
                    <h4 className="text-center text-white lg:text-4xl md:text-2xl sm:text-xl text-sm font-medium">
                        Shalom Semua
                    </h4>
                    <h1 className="text-center text-white lg:text-7xl md:text-5xl sm:text-4xl text-2xl font-bold">
                        Rayon Pemuda Tiberias
                    </h1>
                    <p className=" text-center text-white lg:text-base sm:text-sm text-xs lg:font-medium md:text-normal lg:px-32 md:px-24 sm:px-16">
                        Komunitas persekutuan para pemuda pemudi Kristen untuk
                        membangun dan menguatkan iman mereka dalam Kristus.
                    </p>
                    <button className="main-button">Selengkapnya</button>
                </div>
            </header>

            <section id="visi_misi" className="justify-center">
                <div className="main-container flex-wrap justify-between items-center md:space-y-0 space-y-6">
                    <div className="flex flex-col md:space-y-6 space-y-2 justify-between md:w-5/12">
                        <div className="visi md:space-y-4 space-y-1">
                            <div className="group md:space-y-1">
                                <h5 className="caption-3">Tentang Kami</h5>
                                <h2 className="caption-1">Visi</h2>
                            </div>
                            <p className="lg:text-base text-sm text-justify">
                                {landing_content.visi}
                            </p>
                        </div>
                        <div className="visi md:space-y-4 space-y-1">
                            <div className="group text-right md:space-y-1">
                                <h5 className="caption-3">Kami Lakukan</h5>
                                <h2 className="caption-1">Misi</h2>
                            </div>
                            <p className="lg:text-base text-sm text-justify">
                                {landing_content.misi}
                            </p>
                        </div>
                    </div>

                    <div className="visi-misi-images md:w-1/2 order-2">
                        <img
                            src="/assets/visi-misi.png"
                            alt="Visi misi image"
                        />
                    </div>
                </div>
            </section>

            <Kegiatan />

            <section id="anggota" className="justify-center pb-12">
                <div className="main-container items-center text-center flex-col sm:space-y-8 space-y-4">
                    <div className="space-y-1">
                        <h5 className="caption-2">Kenalan yuk!</h5>
                        <h2 className="caption-1 font-semibold">
                            Ini Anggota Kami
                        </h2>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap justify-between">
                        {list_member.map((value) => (
                            <div className="md:w-1/3 sm:w-1/2 w-full p-3 flex flex-col items-center gap-2">
                                <div className="member-img sm:w-5/6 w-2/3">
                                    <img
                                        src={value.img}
                                        alt={value.name}
                                        className="rounded-full w-full aspect-square mx-auto object-cover"
                                    />
                                </div>
                                <div className="member-bio space-y-2">
                                    <div className="text-center">
                                        <h3 className="text-xl font-semibold capitalize">
                                            {value.name}
                                        </h3>
                                        <p className="text-sm">
                                            @{value.instagram_name}
                                        </p>
                                    </div>

                                    <div className="text-center text-sm capitalize">
                                        {value.role}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
