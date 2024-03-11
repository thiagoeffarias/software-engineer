import React, { useState } from 'react';
import './Card.css';
import ArrowDownwardOutlined from "@mui/icons-material/ArrowDownwardOutlined";
import AnimateHeight from 'react-animate-height';

function Card({ title, data }) {

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
                    className={`card-icon ${isArrowDown ? 'up' : 'down'}`}
                />
            </div>
            <AnimateHeight
                id="example-panel"
                duration={500}
                height={height} // see props documentation below
            >
                <div className={`card-content ${isContentVisible ? 'show' : 'hide'}`}>
                    {
                        isContentVisible ? data.map((item, index) => {
                            return (
                                <div key={index} className="item">
                                    <p className="item-title">{item.title}</p>
                                    <p className="item-subtitle">{item.subtitle}</p>
                                </div>
                            );
                        }) : null
                    }
                </div>
            </AnimateHeight>
        </div>
    )
}

export default Card;