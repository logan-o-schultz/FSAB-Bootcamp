import {FC, FormEvent, useState} from "react";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/modal";
import {Button, Center, FormControl, FormLabel, Input, Textarea, VStack} from "@chakra-ui/react";
import axios from "axios";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const NewPostModal: FC<Props> = ({isOpen, onClose}) => {
    // TODO: Fill out this handleSubmit function!

    function handleSubmit(e: any) {
        e.preventDefault();
        console.log('here')
        console.log(e)
        axios.post('http://localhost:8080/posts', {
            url: e.target[0].value,
            title: e.target[1].value,
            body: e.target[2].value
        })
            .then((response) => {
                console.log("Success")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // TODO: Implemnt a NewPostModal!
    
  return (
      <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Write a new post!
          </ModalBody>
          <Center>
            <form onSubmit={handleSubmit}>
              {/* <Input name='title'></Input>
              <Input name='body'></Input> */}
              <FormControl maxW={'sm'}>
              <FormLabel >Image URL</FormLabel>
              <Input name='imageURL'/>
              <FormLabel >Post Title</FormLabel>
              <Input name='title'/>
              <FormLabel >Post Body</FormLabel>
              <Textarea placeholder='Here is a sample placeholder' name='body'/>
              </FormControl>
              <ModalFooter>
              <Button variant='ghost' mr={3} onClick={onClose}>
              Close
              </Button>
              <Button colorScheme='blue' type='submit'>Post</Button>
              </ModalFooter>
              {/* <Button colorScheme='blue' type="submit">Post</Button> */}
            </form>
            
            </Center>
          
        </ModalContent>
      </Modal>
  );
}

export default NewPostModal;
