import type {NextPage} from 'next'
import {Button, Container, HStack, Spacer, Text, VStack, Input, Center, useDisclosure} from "@chakra-ui/react";
import Post from "../components/Post";
import NewPostModal from "../components/NewPostModal";
import {useEffect, useState} from "react";
import Card from "../components/Card";
import Comment from "../components/Comment"
import axios from 'axios';

const Home: NextPage = () => {
    // TODO: Implement this NextPage!
    const [open, setOpen] = useState(false);
    const [posts, setPosts] =  useState<any[]>();
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        axios.get("http://localhost:8080/posts")
            .then(res => setPosts(res.data)) }, []
    )

    return (
        <Container minW='xl' maxW='xl' centerContent>
            
            <VStack>
            {posts?.length === 0 && <Text>No posts:(</Text>}
            {posts?.map(post => <Post key={post._id} title={post.title} body={post.body} imageURL={post.url} postedAt={new Date(post.postedAt)}/>)}
            <Post title="My Post" body="At the beach" postedAt={new Date()} imageURL={"https://media4.s-nbcnews.com/i/MSNBC/Components/Video/201708/b_bw_RossenBeachOTT_170815.jpg"} ></Post>  
            <Comment content="WOW YOU'RE SO COOL" postedAt={"2022-02-16"}></Comment>
            <Button onClick={onOpen}>Open Modal</Button>
            <NewPostModal isOpen={isOpen} onClose={onClose}></NewPostModal>
        </VStack>
        </Container>
        
    
    )

}

export default Home
