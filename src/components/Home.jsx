import { VStack,Text,Image } from "@chakra-ui/react"
const Home = () => {
  return (
    <div>
        <VStack
        display = {'flex'}
        
        justifyContent={"center"}
        shadow = {'md'}
        bgColor = {"pink.100"}
        paddingX = {10}
        paddingY = {10}
        margin={20}
        borderRadius={'50'}
        >
            <Text fontSize = {20} fontWeight = "bold" color = "pink.500">
                Welcome to CryptoApp
            </Text>
            <Image borderRadius={'50'} src = "https://venturesafrica.com/wp-content/uploads/2019/02/Cryptocurrency-Bitcoin-1536x1024.jpeg"/>
        </VStack>
    </div>
  )
}

export default Home
