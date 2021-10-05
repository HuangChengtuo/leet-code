import type { Iterator } from '../DataStructure'

class PeekingIterator {
  iterator: Iterator
  nextElement: number

  constructor (iterator: Iterator) {
    this.iterator = iterator
    this.nextElement = this.iterator.next()
  }

  peek (): number {
    return this.nextElement
  }

  next (): number {
    const ret = this.nextElement;
    this.nextElement = this.iterator.hasNext() ? this.iterator.next() : null;
    return ret
  }

  hasNext (): boolean {
    return !!this.nextElement
  }
}
