import styles from '../styles/blogsprojects.module.css'
import React, { useState, useEffect } from 'react'
import { useMediaQuery } from "@chakra-ui/react"
import { useSwipeable } from "react-swipeable";

export const CarouselItem = ({ children, width }) => {
    return (
        // backgroundColor: currentTheme.secondary
        <div className={styles.carouselItem} style={{ width: width }}>
            {children}
        </div>
    );
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [paused, setPaused] = useState(false);
    const [isSmall] = useMediaQuery(['(max-width: 1200px)'], {
        ssr: true,
        fallback: [false],
    });
    const [isVerySmall] = useMediaQuery(['(max-width: 800px)'], {
        ssr: true,
        fallback: [false],
    });
    const dividingFactor = isSmall ? isVerySmall ? 1 : 2 : 3
    const arrayLength = Math.ceil(React.Children.count(children)/dividingFactor)
    const repeat = Array.from(Array(arrayLength).keys())

    useEffect(() => {
        setActiveIndex(0)
    }, [dividingFactor])

    useEffect(() => {
        const interval = setInterval(() => {
          if (!paused) {
            updateIndex(activeIndex + 1);
          }
        }, 3000);
    
        return () => {
          if (interval) {
            clearInterval(interval);
          }
        };
      });

    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
            newIndex = arrayLength - 1;
        } else if (newIndex >= arrayLength) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (
        <div {...handlers} className={styles.carousel} data-aos="fade-up" id="blogs">
            {/* style={{ backgroundColor: currentTheme.secondary }} */}
            <div className={styles.blogHeading}>My favorite blogs on Medium</div>
            <div className={styles.inner} style={{ transform: `translateX(-${activeIndex * 100}%)`}} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child, { width:  isSmall ? isVerySmall ? '100%' : '50%' : '33.33%' });
                })}
            </div>
            <div className={styles.indicators}>
                <button onClick={() => { updateIndex(activeIndex - 1); }}>
                    &lt;
                </button>
                {repeat.map((dot, index) => {
                    return (
                        <button
                            key={dot}
                            className={`${index === activeIndex ? styles.active : ""}`}
                            onClick={() => { updateIndex(index)}}>
                            &bull;
                        </button>
                    );
                })}
                <button onClick={() => { updateIndex(activeIndex + 1); }}>
                    &gt;
                </button>
            </div>
        </div>
    )
}

export default Carousel