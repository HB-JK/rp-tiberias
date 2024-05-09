"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';

function Kegiatan() {
    const list_kegiatan = [
        {
            id: 1,
            img: "/assets/baca-alkitab.jpg",
            name: "membaca alkitab",
            description:
                "Setiap hari Jumat malam kami akan melakukan kegiatan mebaca Alkitab bersama di gereja. Kami ingin bersama-sama tumbuh dalam iman dan mengenal Yesus sang Juruslamat.",
        },
        {
            id: 2,
            img: "/assets/berdoa-bersama.jpg",
            name: "doa bersama",
            description:
                "Kegiatan ini berjalan setiap hari Rabu, kami akan berkumpul untuk berdoa bersama. Sharing banyak hal mengenai pertumbuhan iman. Setiap anggota dapot meminta untuk didoakan.",
        },
        {
            id: 3,
            img: "/assets/natal-bersama.jpg",
            name: "natal bersama",
            description:
                "Ibadah ini dilakukan dilingkup anggota RP Tiberias menjelang hari Natal. Kami akan melakukan sharing dan memaknai natal dengan hikmat bersama-sama.",
        },
    ];

    return (
        <section id="kegiatan" className="justify-center">
            <div className="main-container flex-col sm:space-y-8 space-y-4">
                <div className="space-y-1">
                    <h2 className="caption-1 font-semibold">
                        Ini loh, Kegiatan Kami
                    </h2>
                    <h5 className="caption-2">
                        Beragam aktivitas rohani yang kami lakukan
                    </h5>
                </div>

                <div className="flex flex-wrap md:flex-nowrap justify-between gap-2 gap-y-4">
                    {list_kegiatan.map((value) => (
                        <div
                            key={value.id}
                            className="lg:w-[31%] sm:w-[47%] w-full"
                        >
                            <div className="card hover:bg-primary active:bg-primary transition-all group">
                                <div className="aspect-[4/2] w-full rounded-t-md overflow-hidden">
                                    <img
                                        src={value.img}
                                        alt={value.name}
                                        className="w-full object-cover"
                                    />
                                </div>

                                <div className="p-3 space-y-2 group-hover:text-white">
                                    <h4 className="capitalize text-center font-semibold">
                                        {value.name}
                                    </h4>
                                    <p className="lg:text-sm text-xs text-justify text-ellipsis line-clamp-3">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    ...
                </Swiper> */}
            </div>
        </section>
    );
}

export default Kegiatan;
