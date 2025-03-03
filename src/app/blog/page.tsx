"use client";
import { useEffect, useState } from 'react';

import styles from "../page.module.css";
import BlogCard from '@/components/BlogCard';

export default function About() {
    const [blogList, setBlogList] = useState([]);
    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@eddiebarth')
            .then(response => response.json())
            .then(data => setBlogList(data.items))
            .catch(err => console.error(err));
    }, []);
    return (
        <div className={styles.page}>
            <div className={styles.workHeading}>Blogs</div>
            { blogList ? blogList.map((blog, key) => {
                return (
                    <div key={key}>
                        <BlogCard blog={blog} />
                    </div>
                )
                }) : <div>Loading...</div>
            }
        </div>
    );
}