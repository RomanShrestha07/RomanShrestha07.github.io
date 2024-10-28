"use client";

import Image from "next/image";
import {Input, Button, Typography} from "@material-tailwind/react";

function Hero() {
    return (
        <header className="bg-white p-8" style={{paddingBottom: '4rem'}}>
            <div
                className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
                <div className="row-start-2 lg:row-auto">
                    <Typography
                        variant="h1"
                        color="blue-gray"
                        className="mb-4 lg:text-5xl !leading-tight text-3xl" placeholder={undefined}
                        onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Welcome to my Software Development Portfolio
                    </Typography>

                    <Typography
                        variant="lead"
                        className="mb-4 !text-gray-500 md:pr-16 xl:pr-28" placeholder={undefined}
                        onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        I&apos;m Roman Shrestha, a passionate software engineer and data analyst.
                        My work bridges the realms of data and technology, crafting solutions
                        that are as insightful as they are innovative.
                    </Typography>
                </div>

                <Image
                    width={1024}
                    height={1024}
                    alt="team work"
                    src="/image/avatar2.jpg"
                    className="h-[36rem] w-full rounded-xl object-cover"
                />
            </div>
        </header>
    );
}

export default Hero;
