
'use client'; //Always do fetching from Server component instead Client component .,this file is to just learn that you can aldo fetch from client

//http://localhost:3000/theory/client-page-example

import { useEffect, useState } from 'react';
import { fetchListOfProducts } from '@/actions';

const ClientPageExample = () => {
  const [products, setProducts] = useState([]);
  const[loading,setLoading]=useState(true );

  const getListOfProducts = async () => {
    setLoading(false);
    const data = await fetchListOfProducts();
    if (data) setProducts(data);
    setLoading(true);
  };

  useEffect(() => {
    getListOfProducts();
  }, []);

  if(loading) return <h1>Loading...... Please Wait  </h1>

  return (
    <div>
      <h1 className="font-bold bg-amber-400 inline">Client Page Example</h1>
      <ul>
        {products && products.length > 0 ? (
          products.map((item, index) => <li key={index}>{item.title}</li>)
        ) : (
          <h2>No Products Found</h2>
        )}
      </ul>
    </div>
  );
};

export default ClientPageExample;
