import React, { useEffect } from "react";
import styled from "styled-components";
import { MainLayout } from '../../styles/Layout';
import Title from "../Title/Title";
import ResumeItem from "./ResumeItem";
import SmallTitle from "../Title/SmallTitle";
import Skills from "./Skills";

import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import BallotRoundedIcon from '@material-ui/icons/BallotRounded';

const ResumePage = () => {
    const briefcase = <BusinessCenterRoundedIcon />;
    const school = <SchoolRoundedIcon />;
    const build = <BallotRoundedIcon />;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <MainLayout>
            <Title title={'Resume'} span={'resume'} />
            <ResumePageStyled>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                            year={'October 2022 - Now'}
                            title={'Fullstack Software Developer'}
                            subTitle={'Deloitte'}
                            text={(
                                <React.Fragment>
                                    <ol>
                                        <li>
                                            Demonstrating excellent <span>problem-solving skills, identifying and
                                            resolving critical software defects in a timely manner</span>, resulting in
                                            <span> high-quality software </span> that meets or exceeds users expectations.
                                        </li>
                                        <li>
                                            Utilizing <span>React.js </span> and supporting libraries/frameworks such as
                                            <span> Redux, Material-UI, and Express.js, </span> to contribute to the design and
                                            architecture of software features and components, ensuring
                                            scalability, reliability, and maintainability of the codebase.
                                        </li>
                                        <li>
                                            Developed a tracker websites using <span> Microsoft Power Automate,
                                            Power Apps, and Sharepoint </span> that were used by internal teams to
                                            streamline their business processes. The websites included
                                            features such as forms input, workflows creation, and data
                                            visualization dashboards.
                                        </li>
                                        <li>
                                            Created API for web crawlers using <span> .NET </span> that extracted data from
                                            various website structures. The crawlers were then integrated into
                                            other applications to <span>provide data insights and automation
                                            capabilities.</span>
                                        </li>
                                        <li>
                                            Created <span>OCR tools using Python</span> to extract PDF data and <span>export it
                                            into Excel format</span> to reduce manual works and fasten the business
                                            process.
                                        </li>
                                    </ol>
                                </React.Fragment>
                            )}
                        />
                        <ResumeItem
                            year={'January 2023 - April 2023'}
                            title={'Freelance Python Developer'}
                            subTitle={'PT Wanteg Sekuritas'}
                            text={(
                                <React.Fragment>
                                    <ol>
                                        <li>
                                            Created <span> crawler software </span> in <span> Python </span> with HTTP call capability using
                                            <span> multithreading</span> techniques, resulting in <span> faster execution time </span> and
                                            improved efficiency. The crawler used techniques such as request
                                            batching, response caching, and error handling to <span> optimize the
                                            network utilization and reduce latency.</span>
                                        </li>
                                        <li>
                                            Implemented <span> optimization techniques </span> such as <span> caching </span> and
                                            reducing network overhead to further improve performance and
                                            developed a <span> comprehensive logging </span> to track the crawler's
                                            performance and detect issues proactively
                                        </li>
                                    </ol>
                                </React.Fragment>
                            )}
                        />
                        <ResumeItem
                            year={'April 2022 - July 2022'}
                            title={'Software Engineer - Backend'}
                            subTitle={'Traveloka'}
                            text={(
                                <React.Fragment>
                                    <ol>
                                        <li>
                                            Worked on developing and optimizing the <span> database </span> for Traveloka's
                                            system, resulting in faster execution time and improved user
                                            experience. This included analyzing the database schema and query
                                            performance, identifying bottlenecks, and implementing
                                            <span> optimization </span> strategies such as <span> indexing, partitioning, and caching.</span>
                                        </li>
                                        <li>
                                            Created <span> APIs </span> and <span> RPCs </span> using <span> Java and Postgresql </span> that were used by
                                            other teams to integrate the booking system with other services.
                                            This involved designing the API contracts, implementing the API
                                            endpoints, and ensuring the API security and scalability.
                                        </li>
                                        <li>
                                            Participated in <span> code reviews </span> and quality assurance processes to
                                            maintain code quality and avoid technical debt.
                                        </li>
                                    </ol>
                                </React.Fragment>
                            )}
                        />
                        <ResumeItem
                            year={'April 2021 - September 2021'}
                            title={'Data Scientist Intern'}
                            subTitle={'Telkom Indonesia'}
                            text={(
                                <React.Fragment>
                                    <ol>
                                        <li>
                                            Created a <span> crawler software </span> using <span> Python </span> that gathered COVID data
                                            from multiple government websites, cleaned and processed the
                                            data, and presented the data in a clear and understandable format.
                                            The crawler used techniques such as <span> web scraping, data parsing,
                                            and data validation </span> to ensure data accuracy and completeness.
                                        </li>
                                        <li>
                                            Conducted statistical analysis on the gathered data to identify
                                            patterns and trends. This included using tools such as <span> pandas,
                                            numpy, and matplotlib </span> to perform descriptive and inferential
                                            statistics, data visualization, and hypothesis testing.
                                        </li>
                                        <li>
                                            Collaborated with other data scientists and subject matter experts
                                            to develop insights and recommendations based on the data
                                            analysis. This involved presenting the findings in a concise and
                                            impactful way using <span> visualization and storytelling techniques.</span>
                                        </li>
                                    </ol>
                                </React.Fragment>)}
                        />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Education'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem
                        year={'August 2018 - March 2022'}
                        title={'Telkom University'}
                        subTitle={'Bachelor in Informatics'}
                        text={(
                            <React.Fragment>
                                <ol>
                                    <li>
                                        <span>Cumlaude Graduate </span>🎊
                                    </li>
                                    <li>
                                        GPA: 3.54/4
                                    </li>
                                    <li>
                                        <span>Thesis </span>involved in studying deep learning model to <span>
                                            automatically generate music</span> based on the user mood.
                                    </li>
                                    <li>
                                        Lecturer Assistant of <span> Introduction to Artificial Intelligence and </span>
                                        <span>Machine Learning lecture</span> (March 2021 - June 2021)
                                    </li>
                                    <li>
                                        <span>Research Assistant </span> of Drone Lab in Telkom University (January 2019 - December 2020).
                                    </li>
                                </ol>
                            </React.Fragment>)}
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={build} title={'Skills'} />
                </div>
            </ResumePageStyled>
            <Skills />
            <br />
            <br />
        </MainLayout>
    )
}

const ResumePageStyled = styled.section`
margin-top: 5%;
.small-title{
    padding-bottom: 3rem;
}
.u-small-title-margin{
    margin-top: 4rem;
}
.resume-content{
    border-left: 2px solid var(--border-color);
}

span{    
    background: var(--grad); /* fallback for old browsers */
    background: -webkit-linear-gradient(140deg, var(--grad), #b354d9); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(140deg, var(--grad), #b354d9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

    font-size: 2.4vh;
}

@media screen and (max-width:1200px){
    margin-left: 5%;
}
`

export default ResumePage