class CQueue {
  arr: number[] = []

  appendTail (value: number): void {
    this.arr.push(value)
  }

  deleteHead (): number {
    return this.arr.shift() || -1
  }
}

export default function () {
  const q = new CQueue()
}