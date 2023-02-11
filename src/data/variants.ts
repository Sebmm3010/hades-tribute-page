import { animate, Variants } from "framer-motion"

// * Hero
export const boonsContainer: Variants = {
    initial: {
        x: 0
    },
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
}
export const boons: Variants = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

export const bigImg: Variants = {
    initial: {
        x: '-10%',
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

export const smallImg: Variants = {
    initial: {
        x: '-20%',
        opacity: 0,
        rotate: -45
    },
    animate: {
        x: 0,
        opacity: 1,
        rotate: 0,
        transition: {
            duration: 1
        }
    }
}

//* Slider

export const slider: Variants = {
    initial: {
        opacity: 0.5
    },
    visible: {
        opacity: 1
    },
    exit: {
        opacity: 0.5
    }
}

//* Characters

export const characterImg: Variants={
    initial:{
        opacity:0,
        x:100
    },
    animate:{
        opacity:1,
        x:0
    },
    exit:{
        opacity: 0,
        x: -100
    }
}
export const characterInfo: Variants = {
    initial: {
        opacity: 0,
        x: -100
    },
    animate: {
        opacity: 1,
        x: 0
    },
    exit:{
        opacity:0,
        x:100
    }
}