import axios from 'axios';
import { server } from '../index';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import { Button, HStack, Heading, Image, RadioGroup, Text, VStack ,Radio} from '@chakra-ui/react';
import ErrorComponent from './ErrorComponent';
import CoinDetails from './CoinDetails';
import { Link } from 'react-router-dom';

const Coins = () => {
    const [coins ,setCoins] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [page,setPage] = useState(1);
    const [currency,setCurrency] = useState('inr')
    //have to design
    const currencySymbol = currency ==='inr'? "₹":currency === 'eur'?"€":currency === 'usd'?"$":currency ==="#" ;

    const changePage = (page) =>{
        setLoading(true);
        setPage(page);
    }


    useEffect(() => {
        try {
            const fetchCoins = async() => {
                const {data}  = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}&per_page=30`)
                setCoins(data);
                setLoading(false);
            };
            fetchCoins();
        }catch (error) {
            setError(true);
            setLoading(false);
        }
    },[currency ,page]);
if(error) return <ErrorComponent/>
  return (
    <>
    
    {loading ? <Loader/> : 
    (
        <>  
        <RadioGroup value = {currency} onChange = {setCurrency} p = {"8"}>
            <HStack spacing = {"4"}>
                <Radio colorScheme='pink' size='lg' value = {"inr"} >INR</Radio>
                <Radio colorScheme='pink' size='lg' value = {"eur"}>EUR</Radio>
                <Radio colorScheme='pink' size='lg' value = {"usd"}>USD</Radio>
            </HStack>
        </RadioGroup>
        <HStack>
            <HStack
            wrap = {'wrap'}
            gap = {"4"}
            p = {"4"}>
            { coins.map((i)=>(
                <CoinCard key = {i.id}  id = {i.id} name = {i.name} img = {i.image} url = {i.url} symbol = {i.symbol} price = {i.current_price} currencySymbol = {currencySymbol} />
            ))}
            </HStack>
            
        </HStack>
        <HStack p = {"8"}
        justifyContent={'center'}
        >
            { page !==1 && <Button bgColor={"pink.200"} borderRadius={"full"} onClick = {()=> changePage(page - 1)}>Previous</Button>}
            
            <Button variant={'outline'} colorScheme='teal'>{page}</Button>
            <Button  bgColor={"pink.200"} borderRadius={"full"} onClick = {()=> changePage(page + 1)}>Next</Button>
        </HStack>
        </>
    )
    }
    </>
  )
}

export default Coins 

const CoinCard = ({id,name,img,symbol,price,currencySymbol = "₹"}) =>(
    <Link to = {`/coins/${id}`} target = "blank">

<VStack
w = {"52"} shadow = {'lg'} p = {"8"} borderRadius={"lg"} transition={"all 0.3s"}
css = {{
    "&:hover":{
        transform : 'scale(1.1)'
    },
}
}
>
    <Image 
    src = {img}
    w = {"20"}
    objectFit={'contain'}
    />
    <Heading size = {'md'} >{symbol}</Heading>
    <Text>{currencySymbol} {price}</Text>
    <Text noOfLines={1} >{name}</Text>
</VStack>
    </Link>
)