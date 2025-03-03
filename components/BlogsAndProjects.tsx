import Projects from '@/components/Projects';
import { Toaster } from "@/src/components/ui/toaster";
import styles from '@/styles/blogsprojects.module.css'

const BlogsAndProjects = () => {
    return (
        <div className={styles.blogsProjectsMain}>
           <div className={styles.workHeading}>Blogs and Projects</div>
           <Projects />
           <Toaster />
        </div>
    )
}

export default BlogsAndProjects