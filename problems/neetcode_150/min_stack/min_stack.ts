class MinStack {
  nums: Array<number> = [];

  constructor() {}

  push(val: number): void {
    this.nums.push(val);
  }

  pop(): void {
    const value = this.nums.pop();
  }

  top(): number {
    return this.nums[this.nums.length - 1];
  }

  getMin(): number {
    return Math.min(...this.nums);
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
