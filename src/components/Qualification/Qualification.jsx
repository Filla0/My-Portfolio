import React, { useState } from "react";
import "./qualification.css";


const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Python</h3>
                                <span className="qualification__subtitle">Netherland - NDC</span>
                                <div className="qualification__calander">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualaification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualaification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Netherland - HYF</span>
                                <div className="qualification__calander">
                                    <i className="uil uil-calendar-alt"></i> 03/2022 - 10/2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Business Admistrator</h3>
                                <span className="qualification__subtitle">Ethiopia - NGUC</span>
                                <div className="qualification__calander">
                                    <i className="uil uil-calendar-alt"></i> 09/2017 - 08/2020
                                </div>
                            </div>

                            <div>
                                <span className="qualaification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* <div className="qualification__data">
                        <div></div>
                            <div>
                                <span className="qualaification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Computer Meaintenance</h3>
                                <span className="qualification__subtitle">Ethiopa - Institute</span>
                                <div className="qualification__calander">
                                    <i className="uil uil-calendar-alt"></i>2017 - 2018
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">IT expert</h3>
                                <span className="qualification__subtitle">Teana Sabawian - Europe</span>
                                <div className="qualification__calander">
                                    <i className="uil uil-calander-alt"></i>2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualaification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualaification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Media Team leader</h3>
                                <span className="qualification__subtitle">Dekna - Netherland</span>
                                <div className="qualification__calander">
                                    <i className="uil uil-calander-alt"></i>03/2022 - present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Computer Technician</h3>
                                <span className="qualification__subtitle">F.H - Ethiopa</span>
                                <div className="qualification__calander">
                                    <i className="uil uil-calander-alt"></i> 01/2018 - 03/2020
                                </div>
                            </div>

                            <div>
                                <span className="qualaification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification