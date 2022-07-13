import items from './mockData/items';
import Item from './components/Item/Item';
import Appbar from './components/Appbar/Appbar'
import { useEffect, useState } from 'react';
//import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(items);
  const [cartItems, setCartItems] = useState({});

  function filterItem(searchTerm1) {
    setSearchTerm(searchTerm1);
    const filterBasedOnSearchTerm = items.filter(item => item.NAME.toLowerCase().includes(searchTerm1.toLowerCase()) || item.TYPE.toLowerCase().startsWith(searchTerm.toLowerCase()));
    setFilteredData(filterBasedOnSearchTerm);
  }

  useEffect(() => {
    console.log('executing under useEffect App.js', searchTerm, filteredData, cartItems);
  })

  return (
    <div className="App">
      <Appbar searchTerm={searchTerm} setSearchTerm={filterItem} cartItems={cartItems} updateCartItems={setCartItems}/>
      <div className='menu-items'>
        {
          filteredData.map((item, index) => <Item item={item} key={index} updateCartItems={setCartItems} cartItems={cartItems} />)
        }
      </div>
    </div>
  );
}

export default App;