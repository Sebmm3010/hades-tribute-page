import { useEffect } from 'react';
import { motion as m } from 'framer-motion';
import { useSlide } from '../hooks';
import { slider, sliderData as data } from "../data";



export const Slider = () => {

    const { indexImg, handlerLeft, handlerRight } = useSlide(data.length);

    let slideInterval: number;

    function autoSlide() {
        slideInterval = setInterval(handlerRight, 10000);
    }

    useEffect(() => {
        autoSlide()
        return () => clearInterval(slideInterval);
    }, [indexImg]);


    return (
        <div className="slide_show">
            <m.img
                variants={slider}
                src={data[indexImg].img}
                alt={data[indexImg].alt}
                key={data[indexImg].alt}
                initial="initial"
                animate="visible"
                exit="exit"
            />

            <button className="left btn" onClick={handlerLeft}>◀</button>

            <button className="right btn" onClick={handlerRight}>▶</button>
        </div>
    )
}
