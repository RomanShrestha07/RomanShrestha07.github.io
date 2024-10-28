"use client";

import {Typography} from "@material-tailwind/react";
import {
    RectangleGroupIcon,
    FingerPrintIcon,
    SwatchIcon,
    HashtagIcon,
    EyeIcon,
    DocumentTextIcon,
} from "@heroicons/react/24/solid";
import {SkillCard} from "@/components";

const SKILLS = [
    {
        icon: RectangleGroupIcon,
        title: "Frontend Web Development",
        children:
            "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
    },
    {
        icon: FingerPrintIcon,
        title: "Data Visualization",
        children:
            "I excel in bringing data to life through insightful visualization. Utilizing technologies like D3 and Recharts, I have crafted interactive dashboards, transforming complex datasets into easily digestible visuals.",
    },
    {
        icon: SwatchIcon,
        title: "Technology Stack",
        children:
            "I'm proficient in a diverse range of technologies that form the backbone of modern development. My core skills include Python and JavaScript, with extensive use of frameworks like Django and ReactJS.",
    },
    {
        icon: HashtagIcon,
        title: "Innovative Problem Solving",
        children:
            "Solving intricate issues with precision is at the core of my approach. I've effectively debugged critical system errors, ensuring seamless functionality and enhancing user experience by implementing targeted solutions.",
    },
    {
        icon: EyeIcon,
        title: "Strategic Collaboration",
        children:
            "Leading teams to success involves more than just management. I foster effective collaboration between cross-functional teams, ensuring that development goals are met and projects are delivered timely.",
    },
    {
        icon: DocumentTextIcon,
        title: "Testing and Quality Assurance",
        children:
            "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
    },
];

export function Skills() {
    return (
        <section className="px-8">
            <div className="container mx-auto mb-20 text-center">
                <Typography color="blue-gray" className="mb-2 font-bold uppercase" placeholder={undefined}
                            onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    my skills
                </Typography>

                <Typography variant="h1" color="blue-gray" className="mb-4" placeholder={undefined}
                            onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    What I do
                </Typography>

                <Typography
                    variant="lead"
                    className="mx-auto w-full !text-gray-500 lg:w-10/12" placeholder={undefined}
                    onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    I&apos;m not just a developer; I&apos;m an innovative problem-solver. Specializing
                    in bespoke software solutions and data-driven insights, I turn complex
                    challenges into seamless experiences.
                </Typography>
            </div>

            <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                {SKILLS.map((props, idx) => (
                    <SkillCard key={idx} {...props} />
                ))}
            </div>
        </section>
    );
}

export default Skills;
