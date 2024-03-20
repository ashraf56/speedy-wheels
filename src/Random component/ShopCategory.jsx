import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from './ToyCard';


const ShopCategory = () => {

  let [alltoy, setalltoy] = useState([]);
  let [active, setactive] = useState('truck')

  useEffect(() => {

    fetch(`https://wheels-server-one.vercel.app/atoy/${active}`)
      .then(res => res.json())
      .then(data => {

        setalltoy(data)
      })

  }, [active])
  const TabClick = (tabs) => {
    setactive(tabs);
  };

  return (
    <div className='my-5'>
      <h1 className='text-center text-uppercase fw-bold py-4' > Find Your Favorites</h1>
      {alltoy.length === 0 ? <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div> : 
      <Tabs>
        <TabList>
          <Tab onClick={() => TabClick("truck")}> <span className='fw-bold text-uppercase'>Truck</span> </Tab>
          <Tab onClick={() => TabClick("SportsCar")} > <span className='fw-bold text-uppercase'>SportsCar</span></Tab>
          <Tab onClick={() => TabClick("policecar")}> <span className='fw-bold text-uppercase'>Policecar</span></Tab>
        </TabList>
        <TabPanel>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {
              alltoy.slice(0, 4).map(toy => <ToyCard
                toy={toy}

              ></ToyCard>)
            }
          </div>


        </TabPanel>
        <TabPanel>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {
              alltoy.slice(0, 4).map(toy => <ToyCard
                toy={toy}

              ></ToyCard>)
            }
          </div>

        </TabPanel>
        <TabPanel>

          <div className="row row-cols-1 row-cols-md-2 g-4">
            {
              alltoy.slice(0, 4).map(toy => <ToyCard
                toy={toy}

              ></ToyCard>)
            }
          </div>
        </TabPanel>
      </Tabs>}
    </div>
  );
};

export default ShopCategory;