import { useState } from "react"


export const useSlide = (arrLength:number) => {

    const [indexImg, setIndexImg] = useState<number>(0);

    const handlerRight = () => {
        if (indexImg >= arrLength - 1) {
            setIndexImg(0);
            return;
        }
        setIndexImg(indexImg + 1);
    }

    const handlerLeft = () => {
        if (indexImg === 0) {
            setIndexImg(arrLength - 1);
            return;
        }
        setIndexImg(indexImg - 1);
    }

    return {

        indexImg,
        // *Metodos
        setIndexImg,
        handlerLeft,
        handlerRight
    }

}