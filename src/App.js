
import React from 'react';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import {
  Drawer ,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,

} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Coins from './components/Coins.jsx';
import Exchanges from './components/Exchanges.jsx';
import CoinDetails from './components/CoinDetails.jsx';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Router>
    <Header/>
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/coins' element = {<Coins/>}/>
      <Route path = '/exchanges' element = {<Exchanges/>}/>
      <Route path = '/coins/:id' element = {<CoinDetails/>}/>
    </Routes>
    
    
    </Router>
  );
}

export default App;
