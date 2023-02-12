import { useEffect, useRef } from "react"


export const useClickOut = (handler: Function) => {
    const domNode = useRef<any>(null);

    useEffect(() => {
        const newHandler = (event: MouseEvent) => {
            if (!domNode.current?.contains(event.target as any)) {
                handler();
            }
        }
        document.addEventListener('mousedown', newHandler);

        return () => document.removeEventListener('mousedown', newHandler);
    });

    return domNode;

}