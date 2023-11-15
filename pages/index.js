import { Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../lib/api";

const initValues = {name:"", email:"", message:""};

const initState = { values: initValues};

export default function Home(){
    
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});

    const { values, isLoading} = state;

    const onBlur = ({target}) => 
    setTouched((prev) => ({
        ...prev,
        [target.name]:true
    }));

    const handleChange = ({target}) => 
        setState((prev) => ({
            ...prev,
            values:{
                ...prev.values,
                [target.name]: target.value
            },   
        }));
    

    const onSubmit = async () => {
        setState((prev)=>({
            ...prev,
            isLoading:true
        }));
        await sendContactForm(values)
    }



    return <Container maxW='450px' mt={12} >
            <Heading>Contact</Heading>
            
            <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
                <FormLabel>Nombre</FormLabel>
                <Input 
                    type="text"
                    value={values.name}
                    errorBorderColor="red.300"
                    name='name'
                    onChange={handleChange}
                    onBlur={onBlur}
                />
                <FormErrorMessage>Complete este campo</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
                <FormLabel>email</FormLabel>
                <Input 
                    type="text"
                    value={values.email}
                    name='email'
                    errorBorderColor="red.300"
                    onChange={handleChange}
                    onBlur={onBlur}
                    />
                <FormErrorMessage>Complete este campo</FormErrorMessage>
                
            </FormControl>
            
            <FormControl isRequired isInvalid={touched.message && !values.message} mb={5}>
                <FormLabel>Mensaje</FormLabel>
                <Textarea 
                    type="text"
                    value={values.message}
                    rows={4}
                    name='message'
                    errorBorderColor="red.300"
                    onChange={handleChange}
                    onBlur={onBlur}
                />
                <FormErrorMessage>Complete este campo</FormErrorMessage>
            </FormControl>
            
            <Button
                // variant='outline'
                colorScheme="blue"
                isLoading={isLoading}
                disabled={!values.name || !values.email || !values.message}
                onClick={onSubmit}
            >
                Enviar
            </Button>
        </Container>
}