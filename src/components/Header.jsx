import { Link } from 'react-router-dom';
import { Button, HStack } from '@chakra-ui/react';

const Header = () => {
  return (
    <>
    <HStack 
    p = {4}
    shadow = {'md'}
    bgColor = {"pink.100"} 
    justifyContent={"space-between"}
    pos = {'sticky'}
    >
        <Button variant = {'unstyled'}>CryptoApp</Button>
        <HStack
        justifyContent={"space-around"}
        >
        <Link to = "/">Home</Link>
        <Link to = "/coins">Coins</Link>
        <Link to = "exchanges">Exchanges</Link>
        </HStack>
    </HStack>
    </>
  )
}

export default Header
