"use client";
import { useEffect, useState } from 'react';

import styles from "../page.module.css";
import BlogCard from '@/components/BlogCard';
import Carousel, { CarouselItem } from "@/components/Carousel";

export default function Blog() {
    const [blogList, setBlogList] = useState([]);
    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@eddiebarth')
            .then(response => response.json())
            .then(data => setBlogList(data.items))
            .catch(err => console.error(err));
    }, []);
    return (
        <div className={styles.page}>
            {
                blogList ? <Carousel>
                    {blogList.slice(0,6).map((blog, key) => {
                        return (
                            <CarouselItem key={key} width={undefined}>
                                <BlogCard blog={blog} />
                            </CarouselItem>
                        )
                    })}
                </Carousel> : <p>Loading...</p>
            }
        </div>
    );
}