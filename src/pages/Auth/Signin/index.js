import React from "react";
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert } from "@chakra-ui/react"
import { useFormik } from "formik"
import validationSchema from "./validations"
import { fetchLogin } from "../../../api";
import { useAuth } from "../../../contexts/AuthContext";
function Signin() {
    const { login } = useAuth();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: async (values, bag) => {
            try{
                const loginResponse = await fetchLogin({
                email: values.email,
                password: values.password
            })
                login(loginResponse)
                
            }catch(e){
                bag.setErrors({general: e.response.data.message})
            }
        },
    })
    return (
        <Flex align="center" width="full" justifyContent="center">
            <Box pt={10}>
                <Box textAlign="center">
                    <Heading>SignIn</Heading>
                </Box>
                <Box my={5} textAlign="left">
                {
                    formik.errors.general && (
                        <Alert status="error">{formik.errors.general}</Alert>
                    )
                }
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormLabel>E-mail</FormLabel>
                            <Input
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                isInvalid={formik.touched.email && formik.errors.email}>
                            </Input>
                        </FormControl>

                        <FormControl mt="4">
                            <FormLabel>Password</FormLabel>
                            <Input name="password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                isInvalid={formik.touched.password && formik.errors.password}>
                            </Input>
                           
                        </FormControl>
                       
                        <Button mt="4" width="full" type="submit">Signın</Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    )
}

export default Signin;