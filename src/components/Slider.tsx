import { useEffect } from "react";
import { sliderData as data } from "../data";
import { useSlide } from '../hooks';



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
            <img
                src={data[indexImg].img}
                alt={data[indexImg].alt}
            />

            <button className="left btn" onClick={handlerLeft}>◀</button>

            <button className="right btn" onClick={handlerRight}>▶</button>
        </div>
    )
}
