"use client";
import { InstagramLogo, FacebookLogo } from "@phosphor-icons/react";

function Footer() {
    return (
        <footer className="bg-gray-950">
            <div className="flex flex-wrap justify-between py-16 px-10 gap-y-6">
                <div className="lg:w-1/4 sm:w-1/2 w-full text-white space-y-3">
                    <h1 className="lg:text-4xl md:text-2xl text-xl font-semibold">
                        Rayon Pemuda Tiberias
                    </h1>
                    <div className="flex gap-2">
                        <a
                            className="bg-gray-600 rounded-full p-2"
                            href="https://www.instagram.com/rp_tiberias12/"
                        >
                            <InstagramLogo className="text-3xl" />
                        </a>
                        <a
                            className="bg-gray-600 rounded-full p-2"
                            href="https://www.instagram.com/rp_tiberias12/"
                        >
                            <FacebookLogo className="text-3xl" />
                        </a>
                    </div>
                </div>

                <div className="lg:w-[35%] sm:w-1/2 lg:py-2">
                    <p className="text-gray-200 sm:text-base text-sm text-justify font-normal">
                        Roma 12 : 10 “Hendaklah kamu saling mengasihi sebagai
                        saudara dan saling mendahului dalam memberi hormat.”
                    </p>
                </div>

                <div className="lg:w-[35%] md:w-1/2 w-full py-2 space-y-6">
                    <div className="flex gap-4">
                        <a
                            href="#anggota"
                            className="text-gray-200 underline hover:text-primary transition-all sm:text-base text-xs"
                        >
                            Anggota
                        </a>
                        <a
                            href="#visi_misi"
                            className="text-gray-200 underline hover:text-primary transition-all sm:text-base text-xs"
                        >
                            Tentang kami
                        </a>
                        <a className="text-gray-200 underline hover:text-primary transition-all sm:text-base text-xs">
                            Kontak Kami
                        </a>
                    </div>

                    <p className="text-gray-200 sm:text-base text-sm text-justify font-normal">
                        Jl. Gajah Mada No.250, Benua Melayu Darat, Kec.
                        Pontianak Sel., Kota Pontianak, Kalimantan Barat 78122
                    </p>
                </div>
            </div>

            <div className="text-center w-full p-3">
                <p className="text-gray-300 sm:text-base text-sm capitalize">
                    copyright ©2024 rayon pemuda tiberias
                </p>
            </div>
        </footer>
    );
}

export default Footer;
