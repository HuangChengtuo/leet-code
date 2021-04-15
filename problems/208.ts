class Trie {
  tree: { [key: string]: any }

  constructor() {
    this.tree = {}
  }

  insert(word: string): void {
    let head = this.tree
    for (const s of word) {
      if (!head[s]) {
        head[s] = {}
      }
      head = head[s]
    }
    head.isEnd = true
  }

  search(word: string): boolean {
    let head = this.tree
    for (const s of word) {
      if (!head[s]) {
        return false
      }
      head = head[s]
    }
    return !!(head && head.isEnd)
  }

  startsWith(prefix: string): boolean {
    let head = this.tree
    for (const s of prefix) {
      if (!head[s]) {
        return false
      }
      head = head[s]
    }
    return !!head
  }
}


export default function () {
  const trie = new Trie()
  trie.insert("apple");
  console.log(trie.search("apple"))   // 返回 True
  console.log(trie.search("app"))     // 返回 False
  console.log(trie.startsWith("app")) // 返回 True
  trie.insert("app");
  console.log(trie.search("app")) // 返回 True
}