/*

Renders the "Around The Galaxy" component for the bottom of the homescreen

*/


function AroundTheGalaxy () {
    return (
    <section className=" blog-area pt-115 pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title title-style-three text-center mb-70">
                            <h2>AROUND THE <span>GALAXY</span></h2>
                            <p>Here you'll find information about our social media, blog, discount opportunites as well as
                                information about any sort of upcoming events!</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-post blog-style-two mb-50">
                            <div className="blog-thumb mb-30">
                                <a href="#"><img src={require("../img/blog/s_blog_thumb01.jpg")} alt=""></img></a>
                            </div>
                            <div className="blog-post-content">
                                <h4><a href="#">ATG Podcast | Episode 1</a></h4>
                                <div className="blog-meta">
                                    <ul>
                                        <li><i className="far fa-clock"></i>Jan 1, 2021</li>
                                        <li><i className="fas fa-tag"></i><a href="#">Podcast</a></li>
                                    </ul>
                                </div>
                                <p>In this episode we go over what it means to be a creator and how to
                                    find your inner drive as well as [...]</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-post blog-style-two mb-50">
                            <div className="blog-thumb mb-30">
                                <a href="#"><img src={require("../img/blog/s_blog_thumb02.jpg")} alt=""></img></a>
                            </div>
                            <div className="blog-post-content">
                                <h4><a href="#">How To: Use Layer Masks</a></h4>
                                <div className="blog-meta">
                                    <ul>
                                        <li><i className="far fa-clock"></i>Jan 2, 2022</li>
                                        <li><i className="fas fa-tag"></i><a href="#">Tutorial</a></li>
                                    </ul>
                                </div>
                                <p>In this tutorial we go over how exactly to use layer masks within photoshop
                                    and how you can [...]</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-post blog-style-two mb-50">
                            <div className="blog-thumb mb-30">
                                <a href="#"><img src={require("../img/blog/s_blog_thumb03.jpg")} alt=""></img></a>
                            </div>
                            <div className="blog-post-content">
                                <h4><a href="#">How To: Write A Good Hook</a></h4>
                                <div className="blog-meta">
                                    <ul>
                                        <li><i className="far fa-clock"></i>Jan 3, 2022</li>
                                        <li><i className="fas fa-tag"></i><a href="#">Tutorial</a></li>
                                    </ul>
                                </div>
                                <p>In this tutorial we explain how you can hook people in to your content and how
                                    you can [...]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AroundTheGalaxy