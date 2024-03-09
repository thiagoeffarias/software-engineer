import React, { useState } from 'react';
import './Card.css';
import ArrowDownwardOutlined from "@mui/icons-material/ArrowDownwardOutlined";

function Card({ title, data }) {

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
                {data.map((item, index) => {
                    return (
                        <div key={index} className="item">
                            <p className="item-title">{item.title}</p>
                            <p className="item-subtitle">{item.subtitle}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Card;