import {FC} from "react";
import {Box, Divider, Text, VStack, Badge, Image, Center} from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons"
import Comment from "./Comment";

interface Props {
    title: string;
    body: string;
    postedAt: Date;
    imageURL: string;
}

const Post: FC<Props> = ({title, body, postedAt, imageURL}) => { // 
    // TODO: Implemnt a Post!
      return (
          <Center>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image src={imageURL} alt=''/>
    
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
    
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated
            >
              {title}
            </Box>
    
            <Box>
              <Box as='span' color='gray.600' fontSize='sm'>
                {body}
              </Box>
            </Box>
    
            <Box display='flex' mt='2' alignItems='center'>
              <Box as='span' color='gray.600' fontSize='sm'>
                {postedAt.toString()}
              </Box>
            </Box>
          </Box>
        </Box>
        </Center>
      )
}

export default Post;