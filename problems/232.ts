class MyQueue {
  arr: number[] = []

  push (x: number): void {
    this.arr.push(x)
  }

  pop (): number {
    return this.arr.shift()
  }

  peek (): number {
    return this.arr[0]
  }

  empty (): boolean {
    return !this.arr.length
  }
}

export default function () {
  var obj = new MyQueue()
  obj.push(123)
  var param_2 = obj.pop()
  var param_3 = obj.peek()
  var param_4 = obj.empty()
}
