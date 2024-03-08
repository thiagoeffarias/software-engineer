import React, { useState } from 'react';
import './Card.css';
import ArrowDownwardOutlined from "@mui/icons-material/ArrowDownwardOutlined";

function Card({ title }) {

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
                <p className="item-title">Bachelor's Degree in Computer Systems Engineering. </p>
                <p className="item-subtitle">Polytechnic Institute of Cávado and Ave (Portugal, 2018 -2021)</p>
                <p className="item-title">Bachelor's Degree in Building Construction Technology. </p>
                <p className="item-subtitle">Federal Institute of Santa Catarina (Brazil, 2010-2015)</p>
            </div>
        </div>
    )
}

export default Card;