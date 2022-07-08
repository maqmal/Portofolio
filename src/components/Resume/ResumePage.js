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
                        year={'April 2022 - July 2022'}
                        title={'Software Engineer - Backend'}
                        subTitle={'Traveloka'}
                        text={(
                            <React.Fragment>
                                <p style={{ fontSize: '2vh' }}>Working at <span>Traveloka Eats</span> backend team.</p>
                                <ol>
                                    <li>
                                        Help engineering team to maintain and develop one of Traveloka core product.
                                    </li>
                                    <li>
                                        Create and testing business operation application to help product team achieve their goal.
                                    </li>
                                </ol>
                            </React.Fragment>
                        )}
                    />
                    <ResumeItem
                        year={'November 2021'}
                        title={'2nd International Conference on Computer Science and Engineering (IC2SE)'}
                        subTitle={'UPI YPTK'}
                        text={(
                            <React.Fragment>
                                <ol>
                                    <li>
                                        Become an <span>author and speaker</span> at international conference, held  by Universitas Putra Indonesia "Yayasan Perguruan Tinggi Komputer" (UPI YPTK) Padang.
                                    </li>
                                    <li>
                                        Presenting research paper with the title <span>"Generating Music with Emotion Using Transformer"</span>.
                                    </li>
                                </ol>
                            </React.Fragment>
                        )}
                    />
                    <ResumeItem
                        year={'November 2021'}
                        title={'Finalist - Machine Learning Tech Titan League Competition'}
                        subTitle={'Telkomsel'}
                        text={(
                            <React.Fragment>
                                <ol>
                                    <li>
                                        Managed to reach the <span>top 100 finalist</span> Tech Titan League competition Machine Learning path.
                                    </li>
                                    <li>
                                        The competition is about <span>solving machine learning question</span> and <span> create image classification model</span>.
                                    </li>
                                </ol>
                            </React.Fragment>
                        )}
                    />
                    <ResumeItem
                        year={'July 2021 - September 2021'}
                        title={'Fresh Graduate Academy - Microsoft Fundamental'}
                        subTitle={'Digital Talent Scholarship'}
                        text={(
                            <React.Fragment>
                                <p style={{ fontSize: '2vh' }}>The Fresh Graduate Academy Digital Talent Scholarship (FGA DTS) is a training program to
                                    prepare graduates who have not or are not currently working to have professional competence.</p>
                                <ol>
                                    <li>
                                        Participate in the <span>Microsoft Fundamental </span> Learning Path.
                                    </li>
                                    <li>
                                        Learned the concept of <span>Cloud Computing</span> and taken the <span>Azure Certification</span> Badge in the Microsoft Learn Portal.
                                    </li>
                                </ol>
                            </React.Fragment>
                        )}
                    />
                    <ResumeItem
                        year={'April 2021 - September 2021'}
                        title={'Data Scientist Internship'}
                        subTitle={'Telkom Direktorat Digital Bisnis'}
                        text={(
                            <React.Fragment>
                                <ol>
                                    <li>
                                        Internship participant at Telkom Indonesia.
                                    </li>
                                    <li>
                                        Create a <span>web crawling software </span>to automatically get
                                        <span> covid-19 data</span> from 15 region in Indonesia. The data is used in
                                        <span> PeduliLindungi application</span>.
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

    font-size: 2vh;
}

@media screen and (max-width:1200px){
    margin-left: 5%;
}
`

export default ResumePage