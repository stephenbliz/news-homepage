import { Box, Divider, Heading } from "@chakra-ui/react";

export default function Aside(){
    return(
        <Box as="section" fontSize={{md: '11px', lg: '16px'}} className="bg-black h-full p-4 text-white mt-8 md:mt-0">
            <Heading className="text-yellow-700 mb-4">
                New
            </Heading>
            <Box className="pt-2 pb-4 border-b mb-2">
                <Heading as='h3' fontSize={{md: '16px', lg: '20px'}} className="mb-2 hover:text-yellow-700 cursor-pointer">
                    Hydrogen VS Electric Cars
                </Heading>
                <Box as="p" >
                    Will hydrogen fueled cars ever catch up to EVs?
                </Box>
            </Box>
            <Box className="pt-2 pb-4 border-b mb-2">
                <Heading as='h3' fontSize={{md: '16px', lg: '20px'}} className="mb-2 hover:text-yellow-700 cursor-pointer">
                    The Downside of AI is Artistry
                </Heading>
                <Box as="p" >
                    What are the possible adverse effects of on-demand AI image generation?
                </Box>
            </Box>
            <Box className="pt-2 pb-4">
                <Heading as='h3' fontSize={{md: '16px', lg: '20px'}} className="mb-2 hover:text-yellow-700 cursor-pointer">
                    Is VC Funding Drying Up?
                </Heading>
                <Box as="p" >
                    Private funding by VC firms is down 50% YoY. We take a look at what that means.
                </Box>
            </Box>

        </Box>
    )
}