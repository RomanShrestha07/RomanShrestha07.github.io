"use client";

import {Typography, Button} from "@material-tailwind/react";
import {
    BookOpenIcon,
    ComputerDesktopIcon,
    ChartPieIcon,
    ArrowRightIcon,
} from "@heroicons/react/24/solid";
import {ResumeItem} from "@/components";
import {useRouter} from "next/navigation";

const RESUME_ITEMS = [
    {
        icon: BookOpenIcon,
        children: "Post-Degree Diploma in Data Analytics",
    },
    {
        icon: ComputerDesktopIcon,
        children: "Bachelor of Science (Honors) in Computing",
    },
    {
        icon: ChartPieIcon,
        children: "Software Developer & Data Analyst",
    },
];

export function Resume() {
    const router = useRouter();

    const handleResumeClick = () => {
        router.push("/resume");
    };

    return (
        <section className="px-8 py-24">
            <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
                <div className="col-span-1">
                    <Typography variant="h2" color="blue-gray" placeholder={undefined}
                                onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        My Resume
                    </Typography>

                    <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500"
                                placeholder={undefined} onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}>
                        Highly skilled Software Engineer and Data Analyst with 3+ years of
                        experience in developing innovative solutions and data-driven insights.
                    </Typography>

                    <Button
                        variant="text"
                        color="gray"
                        className="flex items-center gap-2"
                        onClick={handleResumeClick} placeholder={undefined}
                        onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        view more
                        <ArrowRightIcon
                            strokeWidth={3}
                            className="h-3.5 w-3.5 text-gray-900"
                        />
                    </Button>
                </div>

                <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
                    {RESUME_ITEMS.map((props, idx) => (
                        <ResumeItem key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Resume;
