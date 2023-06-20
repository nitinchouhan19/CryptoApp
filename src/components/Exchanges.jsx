import axios from 'axios';
import { server } from '../index';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import { HStack, Heading, Image, Text, VStack ,Container} from '@chakra-ui/react';
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {

    const [exchanges ,setExchanges] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);

    useEffect(() => {
        try {
            const fetchExchanges = async() => {
                const {data}  = await axios.get(`${server}/exchanges`)
                setExchanges(data);
                setLoading(false);
            };
            fetchExchanges();
        }catch (error) {
            setError(true);
            setLoading(false);
        }
    },[]);

if(error) return <ErrorComponent/>;
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  )
}

export default Exchanges
const ExchangeCard = ({name,img,url,rank}) =>(
    <a href = {url} target = "blank">

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
    <Heading size = {'md'} >{rank}</Heading>
    <Text noOfLines={1}>{name}</Text>
</VStack>
    </a>
)