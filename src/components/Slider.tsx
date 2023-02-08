import { sliderData } from "../data"
import { useSlide } from '../hooks';
import { useEffect, useState } from 'react';


export const Slider = () => {
    const [imgs, setImgs] = useState<string[]>([]);
    useEffect(() => setImgs(sliderData.map(data => data.img)), []);

    
    const { indexImg, handlerLeft, handlerRight } = useSlide(imgs.length);
    return (
        <div className="slide_show">
            <img src={imgs[indexImg]} alt='' />
            <button onClick={handlerLeft}>◀</button>

            <button onClick={handlerRight}>▶</button>
        </div>
    )
}
