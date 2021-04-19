const { id } = require('@ethersproject/hash');
const axios = require ('axios')

const get_sushi_pairs = async () => {
    try{
        const result = await axios.post(
            'https://api.thegraph.com/subgraphs/name/sushiswap/exchange',
            {
                query: 
                {
                    pairs{
                      id,
                      name,
                      token0Price,
                      token1Price
                    }
                  }
                  
            }
        );
        //console.log(result.data.data.pairs);
        const sushi_data = Array.from(result.data.data.pairs);
        const pairs = [];
        const ids = [];

        var i;
        for (i = 0; i < sushi_data.length; i++) {
            pairs.push(sushi_data[i]['name'])
            ids.push(sushi_data[i]['id'])
        }
        console.log(pairs, ids)
    } catch(error) {
        console.error(error);
    }

}

get_sushi_pairs()