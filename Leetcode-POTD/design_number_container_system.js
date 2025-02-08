/**
 * Date:08-02-2025
 * 2349.Design a number container system.(https://leetcode.com/problems/design-a-number-container-system/description/?envType=daily-question&envId=2025-02-08)
 */

var NumberContainers = function() {
    this.indexToNumber = new Map(); 
    this.numberToIndices = new Map();
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
    if (this.indexToNumber.has(index)) {
        const oldNumber = this.indexToNumber.get(index);
        const indices = this.numberToIndices.get(oldNumber);
        if (indices) {
            const idx = indices.indexOf(index);
            if (idx !== -1) {
                indices.splice(idx, 1);
            }
            if (indices.length === 0) {
                this.numberToIndices.delete(oldNumber);
            }
        }
    }

    // Update the index to the new number
    this.indexToNumber.set(index, number);

    // Add the index to the new number's list
    if (!this.numberToIndices.has(number)) {
        this.numberToIndices.set(number, []);
    }
    const newIndices = this.numberToIndices.get(number);
    // Insert the index in a sorted manner
    let low = 0, high = newIndices.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (newIndices[mid] < index) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    newIndices.splice(low, 0, index);
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
    if (!this.numberToIndices.has(number) || this.numberToIndices.get(number).length === 0) {
        return -1;
    }
    return this.numberToIndices.get(number)[0];
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */