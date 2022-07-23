import React from 'react'
import Footer from '../../components/common/footer'
import Header from '../../components/common/header'
import TabOptions from '../../components/common/optionsTab'
import Delivery from '../../components/delivery';
import DiningOut from '../../components/diningOut';
import NightLife from '../../components/nightLife';

function Home() {
    const [activeTab, setActiveTab] = React.useState("Delivery");
  return (
    <div>
    <Header />
    <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
    {getCorrectScreen(activeTab)}
    <Footer/>
    </div>
  )
}

function getCorrectScreen(tab)
{
    switch(tab)
    {
        case "Delivery":
            return <Delivery />;
        case "Dining Out":
            return <DiningOut />;
        case "Night Life":
            return <NightLife />;
        default :
            return <Delivery />;
    }
}

export default Home