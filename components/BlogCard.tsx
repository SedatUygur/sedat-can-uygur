/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Tag, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/blogsprojects.module.css';

interface Blog {
  thumbnail: string;
  title: string;
  description: string;
  link: string;
  url: string;
  categories: string[];
  tag_list: string[];
}

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className={styles.blogCardMain}>
      <Box
        className={styles.blogCardBox}
        maxW="sm"
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
      >
        {blog.thumbnail && (
          <Image src={blog.thumbnail} alt="Sedat Can Uygur" height="300" width="500" />
        )}
        <Box p="6">
          <HStack>
            {blog.categories
              ? blog.categories.slice(0, 3).map((category: any, key: any) => {
                  return (
                    <div key={key}>
                      <Tag.Root
                        size="sm"
                        borderRadius="md"
                        variant="outline"
                        colorPalette="purple"
                      >
                        <Tag.Label>{category}</Tag.Label>
                      </Tag.Root>
                    </div>
                  );
                })
              : blog.tag_list
                ? blog.tag_list.slice(0, 3).map((category: any, key: any) => {
                    return (
                      <div key={key}>
                        <Tag.Root
                          size="sm"
                          borderRadius="md"
                          variant="outline"
                          colorScheme="blue"
                        >
                          <Tag.Label>{category}</Tag.Label>
                        </Tag.Root>
                      </div>
                    );
                  })
                : null}
          </HStack>
          <Box mt="1" as="h4" lineHeight="tight">
            {blog.title}
          </Box>
          <Box className={styles.blogCardDescription} as="span" fontSize="sm">
            {blog.description.replace(/(<([^>]+)>)/gi, '').slice(0, 85) + ' ...'}
          </Box>
          <div className={styles.viewMore}>
            <Box>
              <Link href={blog.link || blog.url} className={styles.cta2}>
                View More
              </Link>
            </Box>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default BlogCard;
