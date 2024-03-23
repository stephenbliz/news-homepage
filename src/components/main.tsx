import { Box, Button, Heading } from "@chakra-ui/react";
import Image from "next/image";

export default function Main(){
    return(
        <Box as="section" className="md:grid grid-cols-2 gap-4">
            <Box className="col-span-2">
                <Image 
                    src='/assets/images/image-web-3-desktop.jpg'
                    width={1000}
                    height={1000}
                    alt="hero image"
                />
            </Box>
            <Heading as='h1' className="col-span-1 capitalize mt-4 mb-2 md:mt-0 md:mb-0">
                The bright future of web 3.0?
            </Heading>
            <Box className="col-span-1 md:m">
                <Box as="p" className="text-sm xl:text-lg mb-4">
                    We dive into the next evolution of the web that claims to put the 
                    power of the platforms back into the hands of the people. But is it 
                    really fulfilling it promise?
                </Box>
                <Button colorScheme="blackAlpha" fontSize='10px' letterSpacing='4px' className="uppercase">
                    read more
                </Button>
            </Box>
        </Box>
    )
}