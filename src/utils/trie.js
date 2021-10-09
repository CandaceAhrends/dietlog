class Trie {
  static createNode(parent, data) {
    return {
      parent,
      data,
      children: [],
    };
  }
  constructor() {
    this.root = Trie.createNode(null, "root");
    this.current = this.root;
  }
  reset() {
    this.current = this.root;
  }
  traverse(node) {
    console.log(node.data);
    node.children.forEach((child) => {
      if (child.children.length) {
        this.traverse(child);
      } else {
        console.log(child.data);
      }
    });
  }
  print() {
    this.current = this.root;
    this.traverse(this.current);
  }
  insertNode(parent, data) {
    const node = Trie.createNode(parent, data);
    this.current.children.push(node);
    return node;
  }
  findChildNode(data) {
    const parentNode = this.current || { children: [] };
    return parentNode.children.find((node) => {
      return node.data === data;
    });
  }
  setNodeAsCurrent(node) {
    this.current = node;
  }
  addData(data) {
    let node = this.findChildNode(data) || this.insertNode(this.current, data);
    this.setNodeAsCurrent(node);
  }

  addWord(word) {
    this.reset();
    const chars = word.split("");
    chars.forEach((char) => this.addData(char));
  }
}

const test = new Trie();

test.addWord("ab");
test.addWord("abc");
test.print();
