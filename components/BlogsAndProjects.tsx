import { Toaster } from "@/src/components/ui/toaster";

import Projects from '@/components/Projects';
import styles from '@/styles/blogsprojects.module.css'
import { headings } from '@/public/js/userInfo';

const BlogsAndProjects = () => {
    return (
        <div className={styles.blogsProjectsMain}>
           <div className={styles.workHeading}>{headings.workHomePage}</div>
           <Projects />
           <Toaster />
        </div>
    )
}

export default BlogsAndProjects