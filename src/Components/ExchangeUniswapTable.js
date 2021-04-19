import React from 'react';
import { gql, useQuery } from '@apollo/client';
import NumberUtils from '../Utils/NumberUtils';

const ExchangeUniswapTable = () => {
    const GET_QUERY =  gql`
        query {
            pairs {
                id,
                name,
                token0Price,
                token1Price
            }
        }
    `;

    const columns = [
        'id',
        'name',
        'token0Price',
        'token1Price'
    ];

    const { loading, error, data } = useQuery(GET_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error, la macamos :(</p>;
    
    
    return (
        <div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        {columns.map((column, index) => (<th key={index}>{column.toUpperCase()}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {data.pairs.map(({id, name, token0Price, token1Price}) => {
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td 
                                    data-bs-toggle="tooltip" 
                                    data-bs-placement="top" 
                                    title={token0Price} 
                                    data-value={token0Price}>{NumberUtils.formatDecimal(token0Price)}
                                </td>
                                <td 
                                    data-bs-toggle="tooltip" 
                                    data-bs-placement="top" 
                                    title={token1Price} 
                                    data-value={token1Price}>{NumberUtils.formatDecimal(token1Price)}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    );
};

export default ExchangeUniswapTable;
