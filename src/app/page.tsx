import Aside from "@/components/aside";
import Header from "@/components/header";
import Section from "@/components/section";
import { Box } from "@chakra-ui/react";
import  Main  from "@/components/main";


export default function Page(){
    return(
        <Box className="md:grid grid-cols-3 gap-5 p-4">
            <Box as="header" className="col-span-3"><Header /></Box>
            <Box as="main" className="col-span-2"><Main /></Box>
            <Box as="aside" className="col-span-1"><Aside /></Box>
            <Box as="section" className="col-span-3"><Section /></Box>
        </Box>
    )
}