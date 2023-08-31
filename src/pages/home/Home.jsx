import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/herosection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCart from '../../components/productCart/ProductCart';
import Track from '../../components/track/Track';
import Testmonial from '../../components/testmonial/Testmonial';
import { Link } from 'react-router-dom';

const Home = () => {
    const context = useContext(myContext);
    // console.log(context)
    return (
        <Layout>
        <HeroSection />
        <Filter />
        <ProductCart />
        <div className='flex justify-center mt-10 mb-4'>
            <Link to={'/allproducts'}>
                <button className='bg-gray-300 px-5 py-2 rounded-xl'>See More</button>
            </Link>

        </div>
        <Track />
        <Testmonial />
        
        </Layout>
    )
}

export default Home