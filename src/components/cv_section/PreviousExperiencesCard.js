import React, { useState } from 'react';
import './Card.css';
import ArrowDownwardOutlined from "@mui/icons-material/ArrowDownwardOutlined";
import AnimateHeight from 'react-animate-height';

function PreviousExperiencesCard({ title, data }) {

    const [height, setHeight] = useState(0);
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [isArrowDown, setIsArrowDow] = useState(false);
    const toggleContentVisibility = () => {
        setIsArrowDow(!isArrowDown);
        setHeight(height === 0 ? 'auto' : 0);
        if (isContentVisible) {
            setTimeout(() => {
                setIsContentVisible(false);
            }, 300);
        } else {
            setIsContentVisible(true);
        }
    };

    return (
        <div className="section-card" onClick={toggleContentVisibility}>
            <div className='card-title'>
                <h4>{title}</h4>
                <ArrowDownwardOutlined
                    className={`card-icon ${isContentVisible ? 'up' : 'down'}`}
                />
            </div>
            <AnimateHeight
                id="example-panel"
                duration={500}
                height={height} // see props documentation below
            >
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
            </AnimateHeight>
        </div>
    )
}

export default PreviousExperiencesCard;