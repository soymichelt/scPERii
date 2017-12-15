/* Node elements */
import React, { Component } from 'react';

/* React Components */
import Nav from '../../components/header/Nav';
import Footer from '../../components/footer/Footer';
import AsideContentLeft from '../../components/body/asideLeft/AsideContentLeft';

/* CSS */
import './Home.css';

class Home extends Component {
    
    render() {

        return (

            <section className="home-page">

                <Nav />

                <section className="wrap-content row">
                    <section className="container-fluid">
                        <aside className="aside-container hide-on-small-only col l2 m4 s12">
                            <div className="aside-content card-panel">
                                <AsideContentLeft />
                            </div>
                        </aside>
                    </section>
                </section>

                <Footer />

            </section>

        );

    }

}

export default Home;