import React, { useState } from 'react';
import './Card.css';
import ArrowDownwardOutlined from "@mui/icons-material/ArrowDownwardOutlined";

function PreviousExperiencesCard({ title, data }) {

    const [isContentVisible, setIsContentVisible] = useState(false);
    const toggleContentVisibility = () => {
        setIsContentVisible(!isContentVisible);
    };

    return (
        <div className="section-card" onClick={toggleContentVisibility}>
            <div className='card-title'>
                <h4>{title}</h4>
                <ArrowDownwardOutlined
                    className={`card-icon ${isContentVisible ? 'down' : 'up'}`}
                />
            </div>
            <div className={`card-content ${isContentVisible ? 'show' : 'hide'}`}>
                {
                    isContentVisible ?
                        data.map((item, index) => {
                            return (
                                <div key={index} className="item">
                                    <p className="item-company-name">{item.companyName}</p>
                                    <p className="item-date">{item.startEndDate}</p>
                                    <p className="item-description">{item.description}</p>
                                    {
                                        item.subitems ? item.subitems.map((subitem, index) => {
                                            return (
                                                <div key={index} className="subitem">
                                                    <p className="subitem-company-name">{subitem.companyName}</p>
                                                    <p className="subitem-date">{subitem.startEndDate}</p>
                                                    <p className="subitem-project-name">{subitem.projectName}</p>
                                                    <p className="subitem-description">{subitem.description}</p>
                                                </div>
                                            )
                                        }) : null
                                    }
                                </div>
                            );
                        }) : null
                }
            </div>
        </div>
    )
}

export default PreviousExperiencesCard;