import { useEffect, useState } from "react"

interface windowSize {
    width: number,
    height: number
}

export const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState<windowSize>({
        width: 0,
        height: 0
    });

    useEffect(() => {
        const windowsResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerWidth
            });
        }

        window.addEventListener('resize', windowsResize);

        windowsResize();
        return  ()=> window.removeEventListener('resize', windowsResize);
    }, []);

    return windowSize;
}  