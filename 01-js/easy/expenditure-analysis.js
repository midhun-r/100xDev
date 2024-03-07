/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

const isAnagram = require("./anagram");

function calculateTotalSpentByCategory(transactions) {
  const totalSpendByCategory = [];
  for(let i=0;i<transactions.length;i++) {
    let transaction = transactions[i];
    let category = transaction.category;
        if(totalSpendByCategory[category]){
          totalSpendByCategory[category] += transaction.price;

        }else {
          totalSpendByCategory[category] = transaction.price;

        }
    }

  }

  return totalSpendByCategory;


module.exports = calculateTotalSpentByCategory;
