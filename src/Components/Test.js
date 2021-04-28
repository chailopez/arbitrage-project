const axios = require('axios');

const SushiSwap = async () =>  {
    try{
        const result = await axios.post(
            'https://api.thegraph.com/subgraphs/name/sushiswap/exchange',
            {
                query: `
                {
                    pairs {
                        id,
                        name,
                        token0Price,
                        token1Price
                    }
                }`
            }
        );

        console.log(result.data.data.pairs)
    }
    catch(error) {
        console.log(error);
    }
} 

const Uniswap = async () =>  {
    try{
        const result = await axios.post(
            'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
            {
                query: `
                {
                    pairs {
                      token0Price
                      token1Price
                      token0{
                        symbol
                      }
                      token0{
                          symbol
                      }
                    }                  
                  }`
            }
        );

        //console.log(result.data.data.pairs)
        return result.data.data.pairs;
    }
    catch(error) {
        console.log(error);
    }
} 

//SushiSwap();
Uniswap().then(function(result){
    console.log(typeof(result))
});
