import './Slides.css';
import React, { useState, useEffect } from 'react';

const colors = ["#0088FE", "#00C49F", "#FFBB28",  "#DDBB24"];

const LEFT = -1;
const RIGHT = 1

export function Slideshow() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(RIGHT);
    const delay = 3500;

    function defineDirection(prevIndex) {
        if (direction == RIGHT && prevIndex + 1 === colors.length -1) {
            return LEFT
        } else if (direction == LEFT && prevIndex === 1){
            return RIGHT;
        } else {
            return direction;
        }
    }
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex(prevIndex => {
                setDirection(defineDirection(prevIndex));
                console.log("direction: " + direction)
                return direction === RIGHT ? prevIndex + 1 : prevIndex - 1;
            });
        }, delay);
        
        return () => clearTimeout(timer);
    }, [index, direction, colors.length, delay]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((backgroundColor, index) => (
                    <div
                        className="slide"
                        key={index}
                        style={{ backgroundColor }}
                    >
                        <h1>{index}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}