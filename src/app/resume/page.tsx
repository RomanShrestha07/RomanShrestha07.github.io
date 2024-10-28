"use client";

import {Navbar, Footer} from "@/components";
import {Card, CardBody} from "@material-tailwind/react";
import {useEffect} from "react";

export default function Resume() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar/>

            <section className="px-6">
                <div
                    className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2"
                >
                    <Card shadow={true} className="container mx-auto border border-gray/50"
                          style={{width: 'max-content'}} placeholder={undefined}
                          onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <CardBody className="w-full" placeholder={undefined}
                                  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <section className="mb-10">
                                <h2 className="text-2xl font-semibold mb-3">Experience</h2>

                                <div className="space-y-5">
                                    <div className="w-8/12">
                                        <h3 className="text-xl font-bold">Patient Watch Officer - Paladin Security</h3>
                                        <p className="text-gray-600">Wayburne Drive, Burnaby, B.C, Canada | April 2024
                                            – Present</p>
                                        <ul className="list-disc list-inside mt-2 text-justify">
                                            <li>Effectively managed patients with a high risk of elopement by staying
                                                vigilant, knowing the layout of the wards, and following the patients
                                                closely while providing updates to site security and healthcare staff
                                                successfully ensuring the patients remain within the secure area.
                                            </li>
                                            <li>Monitored patients with a history of aggression by obtaining a thorough
                                                briefing from clinical staff about the patient’s triggers and previous
                                                incidents proactively managing potential outbursts, enhancing the safety
                                                and well-being of the patients and the healthcare team.
                                            </li>
                                            <li>Successfully de-escalated patients exhibiting aggressive behavior by
                                                identifying non-verbal cues such as agitation and restlessness, and
                                                using calm communication techniques prevented a potential physical
                                                altercation, ensuring the safety of the patients and surrounding staff.
                                            </li>
                                            <li>Responded to a medical emergency involving a patient experiencing a
                                                severe panic attack by calling for immediate clinical staff assistance
                                                and providing detailed updates on the patient’s condition ensured rapid
                                                medical response and proper treatment/medication, stabilizing the
                                                patient and minimizing risk.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="w-8/12">
                                        <h3 className="text-xl font-bold">Salesclerk - Chicko Chicken</h3>
                                        <p className="text-gray-600">Austin Avenue, Coquitlam, B.C, Canada | September
                                            2023 – Present</p>
                                        <ul className="list-disc list-inside mt-2 text-justify">
                                            <li>Provided exceptional customer service by greeting and assisting
                                                customers with inquiries, product selection, and purchases in-person and
                                                on-call, resulting in increased customer satisfaction ratings and repeat
                                                business, ultimately contributing to improved store revenue and
                                                reputation.
                                            </li>
                                            <li>Processed transactions accurately and efficiently using point-of-sale
                                                (POS) systems by skillfully handling cash, credit/debit cards, and
                                                discount offers resulting in seamless transactions for customers,
                                                reducing wait times and ensuring accurate financial records for the
                                                establishment.
                                            </li>
                                            <li>Precisely followed recipes and portion guidelines while operating
                                                kitchen equipment under the guidance of senior kitchen staff, operated
                                                grills, fryers, and ovens ensuring consistency in food quality and
                                                presentation, maintaining the fast-paced standards set by the
                                                establishment and contributing to a positive experience for customers.
                                            </li>
                                            <li>Maintained a clean and organized work area by regularly cleaning and
                                                organizing food storage areas, refrigerators, and workstations resulting
                                                in improved efficiency and hygiene standards, facilitating a smooth
                                                workflow, and ensuring food safety compliance.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="w-8/12">
                                        <h3 className="text-xl font-bold">Software Engineer II - Treeleaf
                                            Technologies</h3>
                                        <p className="text-gray-600">Lalitpur, Bagmati, Nepal | January 2022 – July
                                            2023</p>
                                        <ul className="list-disc list-inside mt-2 text-justify">
                                            <li>Implemented a comprehensive suite of graphing and charting
                                                functionalities within a commercial grade ReactJS project by equipping
                                                it with powerful data visualization tools to present complex information
                                                with clarity elevating the project's overall effectiveness and impact
                                                helping users gain valuable insights.
                                            </li>
                                            <li>Assisted in the development of a ticketing system within a commercial
                                                grade ReactJS project by playing a pivotal role in the conception and
                                                successful implementation of the feature leading to improved project
                                                efficiency and team collaboration, and a more organized responsive
                                                workflow.
                                            </li>
                                            <li>Singlehandedly conceptualized, designed, and implemented a custom text
                                                editor tailored to the company's unique needs by orchestrating a
                                                comprehensive redesign and overhaul of the existing system achieving a
                                                performance gain of up to 50%, ensuring a more responsive and efficient
                                                text editing experience for all users.
                                            </li>
                                            <li>Led a team of junior developers in the successful creation and
                                                deployment of a sophisticated dynamic form system which resulted in a
                                                solution to empower users to effortlessly generate, store, edit, and
                                                review forms and their corresponding responses.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="w-8/12">
                                        <h3 className="text-xl font-bold">Frontend Wed Developer - Envoke Tech</h3>
                                        <p className="text-gray-600">Lalitpur, Bagmati, Nepal | February 2021 – January
                                            2022</p>
                                        <ul className="list-disc list-inside mt-2 text-justify">
                                            <li>Led the front-end development of a Food Delivery Web Application using
                                                ReactJS by writing 70% of the code, driving the project to successful
                                                completion resulting in an accessible user-friendly interface.
                                            </li>
                                            <li>Led the front-end development efforts for a Dental Appointment System
                                                utilizing ReactJS by playing a pivotal role in delivering a feature-rich
                                                application that streamlined appointment scheduling receiving positive
                                                feedback from the administrative staff.
                                            </li>
                                            <li>Contributed to the development of the front-end for a robust Content
                                                Management System (CMS) using ReactJS through effective collaboration
                                                with the design and back-end teams leading to the platform's enhanced
                                                user interface and interactivity.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-semibold mb-3">Education</h2>

                                <div className="space-y-5">
                                    <div>
                                        <h3 className="text-xl font-bold">Post Degree Diploma - Data Analytics</h3>
                                        <p className="text-gray-600">Langara College, Vancouver, B.C, Canada | September
                                            2023 – Present</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold">Bachelor of Science (Hons) - Computing</h3>
                                        <p className="text-gray-600">London Metropolitan University, London, UK |
                                            February 2019 – January 2022</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Front End Languages</h3>
                                        <p>JavaScript | React | NextJS | HTML | CSS</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Back End Languages</h3>
                                        <p>Python | Django | ExpressJS | Node </p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Database</h3>
                                        <p>MySQL | PostgreSQL | Oracle | MongoDB</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Software/Tools</h3>
                                        <p>Git | GitHub | Postman | Docker</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Soft Skills</h3>
                                        <p>Adaptability | Problem Solving | Highly Motivated</p>
                                    </div>
                                </div>
                            </section>
                        </CardBody>
                    </Card>
                </div>
            </section>

            <Footer/>
        </>
    );
}