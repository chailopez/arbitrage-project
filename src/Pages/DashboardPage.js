import React from 'react';
import ExchangeSushiswapTable from '../Components/ExchangeSushiswapTable';
import ExchangeUniswapTable from '../Components/ExchangeUniswapTable';

const DashboardPage = () => {

   

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 col-sm-12">
                    <h4>Table 1 chills</h4>
                    <ExchangeSushiswapTable />
                </div>

                <div className="col-6 col-sm-12">
                    <h4>Table 2</h4>
                    <ExchangeUniswapTable />
                </div>
            </div>
        </div>
    )
};

export default DashboardPage;