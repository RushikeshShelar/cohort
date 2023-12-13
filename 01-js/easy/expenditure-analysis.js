/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryWiseTotal = {};
  for (let i = 0; i < transactions.length; i++) {
    const { category, price } = transactions[i];
    if (category in categoryWiseTotal) {
      categoryWiseTotal[category] += price;
    } else {
      categoryWiseTotal[category] = price;
    }
  }
  const result = [];
  for (let category in categoryWiseTotal) {
    result.push({ category, "totalSpent": categoryWiseTotal[category] });
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
