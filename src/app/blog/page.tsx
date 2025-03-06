"use client";
import { useEffect, useState } from 'react';

import BlogCard from '@/components/BlogCard';
import Carousel, { CarouselItem } from "@/components/Carousel";
import { userInfo } from '@/public/js/userInfo';
import styles from "../page.module.css";

export default function Blog() {
    const [blogList, setBlogList] = useState([]);
    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@eddiebarth')
            .then(response => response.json())
            .then(data => setBlogList(data.items))
            .catch(err => console.error(err));
    }, []);
    return (
        userInfo.blogs.visible ? 
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
            </div> : null
    );
}