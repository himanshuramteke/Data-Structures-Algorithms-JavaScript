/**
 * Date:20-04-2025
 * 215.Kth Largest Element in an Array(https://leetcode.com/problems/kth-largest-element-in-an-array/)
 *TC= O(nlogk)
 *SC= O(k)
 * /


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function push(heap, val) {
    heap.push(val);
    heapifyUp(heap, heap.length - 1);
}

function pop(heap) {
    if (heap.length === 1) return heap.pop();
    const top = heap[0];
    heap[0] = heap.pop();
    heapifyDown(heap, 0);
    return top;
}

function peek(heap) {
    return heap[0];
}

function heapifyUp(heap, index) {
    while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (heap[parentIndex] > heap[index]) {
            [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
            index = parentIndex;
        } else break;
    }
}

function heapifyDown(heap, index) {
    const length = heap.length;
    while (true) {
        let smallest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;

        if (left < length && heap[left] < heap[smallest]) smallest = left;
        if (right < length && heap[right] < heap[smallest]) smallest = right;

        if (smallest === index) break;

        [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
        index = smallest;
    }
}

var findKthLargest = function(nums, k) {
     const minHeap = [];

    for (let num of nums) {
        push(minHeap, num);
        if (minHeap.length > k) {
            pop(minHeap);
        }
    }

    return peek(minHeap);
};