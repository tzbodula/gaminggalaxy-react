const e = React.createElement;
const data = require('../data.js');

class GalaxyMerchContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        'use strict';
        return e(
            {
                data.products.map((product) => (
                    <div>
                        <img src={product.image} alt={product.name}/>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                ))
            }
        );
    }
}

const domContainer = document.querySelector('#galaxy_merch_container');
ReactDOM.render(e(GalaxyMerchContainer), domContainer);