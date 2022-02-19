import { Box, Text, Button } from '@chakra-ui/react'
import { useState } from 'react'

function Card() {
    const [isClicked, setIsClicked] = useState(false)

    return <div>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' p={12}>
            <Text font-size='5xl'>Title</Text>
            <Text font-size='sm'>This is body text...</Text>
            <Text>{isClicked ? "hi" : "bye"}</Text>
            <Button colorScheme='blue' onClick ={() => setIsClicked(true)}>Click me</Button>
        </Box>
    </div>
}

export default Card;