// At every iteration, check for minimum price till that iterations and calculate profit till there
// and on every further iteration just keep on updating min and profit 

function bestTimeToBuyAndSellStocks(prices) {
    let profit = 0;
    let min = prices[0];

    for (let i = 1; i < prices.length; i++) {

        if (prices[i] < min) {
            min = prices[i];
        }

        let possibleEarning = prices[i] - min;

        if (possibleEarning > 0 && possibleEarning > profit) {
            profit = possibleEarning;
        }

    }

    return profit;
}

console.log(bestTimeToBuyAndSellStocks([7, 1, 5, 3, 6, 4]));