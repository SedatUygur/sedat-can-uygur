import styles from '../styles/blogsprojects.module.css'
import React, { useState } from 'react'
import { useMediaQuery } from "@chakra-ui/react"

export const CarouselItem = ({ children, width }) => {
    return (
        <div className={styles.carouselItem} style={{ width: width }}>
            {children}
        </div>
    );
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isSmall] = useMediaQuery(['(max-width: 1200px)'], {
        ssr: true,
        fallback: [false],
    });
    const [isVerySmall] = useMediaQuery(['(max-width: 800px)'], {
        ssr: true,
        fallback: [false],
    });
    const dividingFactor = isSmall ? isVerySmall ? 1 : 2 : 3

    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children)/dividingFactor - 1;
        } else if (newIndex >= React.Children.count(children)/dividingFactor) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };

    return (
        <div className={styles.carousel}>
            <div className={styles.inner}>
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child, { width:  isSmall ? isVerySmall ? '100%' : '50%' : '33.33%' });
                })}
            </div>
            <div className={styles.indicators}>
                <button onClick={() => { updateIndex(activeIndex - 1); }}>
                    Prev
                </button>
                <button onClick={() => { updateIndex(activeIndex + 1); }}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default Carousel