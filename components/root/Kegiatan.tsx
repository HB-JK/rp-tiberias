"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';

function Kegiatan() {
    const list_kegiatan = [
        {
            id: 1,
            img: "/assets/kegiatan-1.jpg",
            name: "membaca alkitab",
            description:
                "Setiap hari Jumat malam kami akan melakukan kegiatan mebaca Alkitab bersama di gereja. Kami ingin bersama-sama tumbuh dalam iman dan mengenal Yesus sang Juruslamat.",
        },
        {
            id: 2,
            img: "/assets/kegiatan-2.jpg",
            name: "doa malam",
            description:
                "Setiap hari Jumat malam kami akan melakukan kegiatan mebaca Alkitab bersama di gereja. Kami ingin bersama-sama tumbuh dalam iman dan mengenal Yesus sang Juruslamat.",
        },
        {
            id: 3,
            img: "/assets/kegiatan-3.jpg",
            name: "diakonia",
            description:
                "Setiap hari Jumat malam kami akan melakukan kegiatan mebaca Alkitab bersama di gereja. Kami ingin bersama-sama tumbuh dalam iman dan mengenal Yesus sang Juruslamat.",
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
                                <div className="aspect-[4/2] w-full">
                                    <img
                                        src={value.img}
                                        alt={value.name}
                                        className="w-full"
                                    />
                                </div>

                                <div className="p-3 space-y-2 group-hover:text-white">
                                    <h4 className="capitalize text-center font-semibold">
                                        {value.name}
                                    </h4>
                                    <p className="lg:text-sm text-xs text-justify">
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
