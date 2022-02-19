import {FC} from "react";
import {Box, Divider, Text, Center} from "@chakra-ui/react";

interface Props {
    content: string;
    postedAt: string;
}

const Comment: FC<Props> = ({content, postedAt}) => {
    // TODO: Implemnt a Comment!
    return (
        <Center>
        <Box maxW='sm' minW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                {/* <Badge borderRadius='full' px='2' colorScheme='teal'>
                    New
                </Badge> */}
                <Box
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                >
                    @logan.o.schultz
                </Box>
                </Box>
        
                <Box>
                <Box as='span' color='gray.600' fontSize='sm'>
                    {content}
                </Box>
                </Box>
        
                <Box display='flex' mt='2' alignItems='center'>
                <Box as='span' color='gray.600' fontSize='sm'>
                    {postedAt}
                </Box>
                </Box>
            </Box>
            </Box>
            </Center>
    );
}

export default Comment;