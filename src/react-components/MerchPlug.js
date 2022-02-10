function MerchPlug () {
    return (
    <section className="shop-area black-bg pt-115 pb-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8">
                    <div className="section-title title-style-three white-title text-center mb-40">
                        <h2>Shameless <span>merch </span>plug</h2>
                        <p>Our merchandise is the best quality on the market and even some designs
                            are customizable so you can use them for your brand!</p>
                    </div>
                </div>
            </div>
            <div className="row product-active">
                <div className="col-xl-3">
                    <div className="shop-item">
                        <div className="product-thumb">
                            <a href="#"><img src={require("../img/product/s_product_img01.jpg")} alt=""></img></a>
                        </div>
                        <div className="product-content">
                            <div className="product-tag"><a href="#">HOODIE</a></div>
                            <h4><a href="#">Content Creator Definition</a></h4>
                            <div className="product-meta">
                                <div className="product-price">
                                    <h5>$35.00</h5>
                                </div>
                                <div className="product-cart-action">
                                    <a href="#"><i className="fas fa-shopping-basket"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="shop-item">
                        <div className="product-thumb">
                            <a href="#"><img src={require("../img/product/s_product_img02.jpg")} alt=""></img></a>
                        </div>
                        <div className="product-content">
                            <div className="product-tag"><a href="#">T-SHIRT</a></div>
                            <h4><a href="#">God Is A Content Creator</a></h4>
                            <div className="product-meta">
                                <div className="product-price">
                                    <h5>$20.00</h5>
                                </div>
                                <div className="product-cart-action">
                                    <a href="#"><i className="fas fa-shopping-basket"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="shop-item">
                        <div className="product-thumb">
                            <a href="#"><img src={require("../img/product/s_product_img03.jpg")} alt=""></img></a>
                        </div>
                        <div className="product-content">
                            <div className="product-tag"><a href="#">Sweatshirt</a></div>
                            <h4><a href="#">Women's Abstraction</a></h4>
                            <div className="product-meta">
                                <div className="product-price">
                                    <h5>$30.00</h5>
                                </div>
                                <div className="product-cart-action">
                                    <a href="#"><i className="fas fa-shopping-basket"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="shop-item">
                        <div className="product-thumb">
                            <a href="#"><img src={require("../img/product/s_product_img04.jpg")} alt=""></img></a>
                        </div>
                        <div className="product-content">
                            <div className="product-tag"><a href="#">T-SHIRT</a></div>
                            <h4><a href="#">Influencer Definition</a></h4>
                            <div className="product-meta">
                                <div className="product-price">
                                    <h5>$20.00</h5>
                                </div>
                                <div className="product-cart-action">
                                    <a href="#"><i className="fas fa-shopping-basket"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="shop-item">
                        <div className="product-thumb">
                            <a href="#"><img src={require("../img/product/s_product_img05.jpg")} alt=""></img></a>
                        </div>
                        <div className="product-content">
                            <div className="product-tag"><a href="#">SNAPBACK HAT</a></div>
                            <h4><a href="#">One Of A Kind Snapback</a></h4>
                            <div className="product-meta">
                                <div className="product-price">
                                    <h5>$15.00</h5>
                                </div>
                                <div className="product-cart-action">
                                    <a href="#"><i className="fas fa-shopping-basket"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default MerchPlug;