/**
 * Date: 14-02-2025
 * 1352. Product of last K numbers(https://leetcode.com/problems/product-of-the-last-k-numbers/description/?envType=daily-question&envId=2025-02-14)
 */


var ProductOfNumbers = function() {
    this.products = [1]; // Initialize with 1 to handle the first product calculation
    this.lastZeroIndex = -1; // Track the index of the last zero
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
   if (num === 0) {
        this.products = [1]; // Reset the products array
        this.lastZeroIndex = this.products.length - 1; // Update the last zero index
    } else {
        this.products.push(this.products[this.products.length - 1] * num); // Multiply the last product with the new number
    } 
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    if (this.lastZeroIndex >= this.products.length - k) {
        return 0; // If the last k elements include a zero, the product is zero
    }
    return this.products[this.products.length - 1] / this.products[this.products.length - k - 1];
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */