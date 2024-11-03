import React from 'react';
import Banner from '../Components/Bannner/Banner';
import Heading from '../Components/Heading';


const Home = () => {
    return (
     <div>
        <Banner></Banner>
        <Heading title={'Browse Coffees by Category'} subtitle={'Choose your desired coffee category to browse through specific coffee that your test'}></Heading>

        <div role="tablist" className="tabs tabs-lifted">
        <a role="tab" className="tab">Tab 1</a>
        <a role="tab" className="tab tab-active">Tab 2</a>
        <a role="tab" className="tab">Tab 3</a>
        </div>
     </div>
    );
};

export default Home;