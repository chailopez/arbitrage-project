const formatDecimal = (amount) => {
    return new Intl.NumberFormat('en-US', {style: 'decimal'}).format(amount);
}

const NumberUtils = {
    formatDecimal
};

export default NumberUtils;