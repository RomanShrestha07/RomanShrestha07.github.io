"use client";

import {ProjectCard} from "@/components";
import {Typography} from "@material-tailwind/react";

const PROJECTS = [
    {
        img: "/image/capstone_project.png",
        title: "Glycerin-to-Glycol Production Using Machine Learning (Capstone Project)",
        url: "https://github.com/RomanShrestha07/capstone-project-sanitized",
        // desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
    },
    {
        img: "/image/sp_500.png",
        title: "S&P 500 Visualization with ChatGPT Insights",
        url: "https://github.com/RomanShrestha07/sp-500-analysis",
        // desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
    },
    {
        img: "/image/clustering_analysis.png",
        title: "Clustering Analysis",
        url: "https://github.com/RomanShrestha07/DANA_4840_Group_Project",
    },
    {
        img: "/image/heart_disease.png",
        title: "Heart Disease Diagnosis",
        url: "https://github.com/RomanShrestha07/DANA_4830_Group_Project",
    },
    {
        img: "/image/battery_ageing.png",
        title: "Battery Ageing Analysis",
        url: "https://github.com/RomanShrestha07/CPSC_4830_Group_Project",
    },
    {
        img: "/image/antd_dashboard.png",
        title: "Ant Design Dashboard",
        url: "https://github.com/RomanShrestha07/antd-admin",
    },
    {
        img: "/image/messenger_clone.png",
        title: "React Messenger Clone",
        url: "https://github.com/RomanShrestha07/react-messenger",
    },
    {
        img: "/image/news_aggregator.png",
        title: "News Crawler Aggregator Categorizer (Undergraduate Thesis Project)",
        url: "https://github.com/RomanShrestha07/News_Aggregator",
    },
];

export function Projects() {
    return (
        <section className="py-28 px-8">
            <div className="container mx-auto mb-20 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-4" placeholder={undefined}
                            onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    My Projects
                </Typography>

                <Typography
                    variant="lead"
                    className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-10/12"
                    placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Whether it&apos;s crafting a web application or innovating with data analytics,
                    my projects transform ideas into impactful solutions. Explore how I&apos;ve
                    empowered applications with personalization and intuitive design.
                </Typography>
            </div>

            <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
                {PROJECTS.map((props, idx) => (
                    <ProjectCard desc={""} key={idx} {...props} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
