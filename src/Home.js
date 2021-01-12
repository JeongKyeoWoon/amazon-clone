import React from 'react';
import Product from './Product';
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg" alt="" />
            {/* http://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg */}

            {/* product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.SX325_BO1,204,203,200_.jpg"
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.SX325_BO1,204,203,200_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.SX325_BO1,204,203,200_.jpg"
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.SX325_BO1,204,203,200_.jpg"
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.SX325_BO1,204,203,200_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.SX325_BO1,204,203,200_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
