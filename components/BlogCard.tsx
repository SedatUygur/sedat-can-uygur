import { Box, Tag, HStack } from "@chakra-ui/react"
import Image from 'next/image'

const BlogCard = ({ blog }) => {

    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            { blog.thumbnail && <Image src={blog.thumbnail} alt='eddiebarth' height='300' width='500' /> }
            <Box p="6">
                <HStack>
                    {
                        blog.categories.slice(0,3).map((category, key) => {
                            return (
                                <div key={key}>
                                    <Tag.Root size="sm" borderRadius="md" variant="subtle" colorPalette="purple">
                                        <Tag.Label>{category}</Tag.Label>
                                    </Tag.Root>
                                </div>
                            )
                        })
                    }
                </HStack>
                <Box
                    mt="1"
                    as="h4"
                    lineHeight="tight"
                >
                    {blog.title}
                </Box>
                <Box as="span" color="gray.600" fontSize="sm">
                    {blog.description.replace(/(<([^>]+)>)/ig, '').slice(0, 45) + ' . . .'}
                </Box>
            </Box>
        </Box>
    )
}

export default BlogCard