function Packages () {
    return (
    <section className="cta-area cta-bg">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-5 col-lg-6">
                        <div className="cta-img">
                            <img src={require("../img/images/cta_img.png")} alt=""></img>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cta-content">
                            <div className="cta-icon mb-15">
                                <img src={require("../img/icon/cta_icon.png")} alt=""></img>
                            </div>
                            <div className="section-title title-style-three white-title mb-50">
                                <h2>BEST PACKAGES ON <span>THE MARKET</span></h2>
                                <p>Need more then one asset? We've made packages that will allow you to get more bang for
                                    your buck!</p>
                            </div>
                            <div className="cta-btn">
                                <a href="/packages" className="btn btn-style-two">CHECK THEM OUT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
    )
}

export default Packages; 