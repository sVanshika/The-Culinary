import React from 'react';

const Home = () => {
    return(
        <div className="home">
            <div className="home-container">
                <div className="title">
                <h4>The</h4>
                <h1>CULINARY</h1>
                </div>
            </div>

            <div className="homeCategories">

            <div className="row category">
                <div className="col-md breakfast">
                    <a href="/breakfast" className="col">
                        <span>Breakfast</span>
                    </a>
                </div>
                <div className="col-md snacks">
                    <a href="/snacks" className="col">
                        <span>Snacks</span>
                    </a>
                </div>
                <div className="col-md cakes">
                    <a href="/cakes" className="col">
                        <span>Cakes</span>
                    </a>
                </div>
            </div>


            <div className="row category">
                <div className="col-md mainCourse">
                    <a href="/maincourse" className="col ">
                        <span>Main Course</span>
                    </a>
                </div>
                <div className="col-md desserts">
                    <a href="/desserts" className="col ">
                        <span>Desserts</span>
                    </a>
                </div>
                <div className="col-md beverages">
                    <a href="/beverages" className="col ">
                        <span>Beverages</span>
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home;