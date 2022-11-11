class MyStack {
  arr: number[] = []

  push (x: number): void {
    this.arr.push(x)
  }

  pop (): number {
    return this.arr.pop()
  }

  top (): number {
    return this.arr[this.arr.length - 1]
  }

  empty (): boolean {
    return !this.arr.length
  }
}

export default function () {
  const obj = new MyStack()
  obj.push(123)
  const param_2 = obj.pop()
  const param_3 = obj.top()
  const param_4 = obj.empty()
}
