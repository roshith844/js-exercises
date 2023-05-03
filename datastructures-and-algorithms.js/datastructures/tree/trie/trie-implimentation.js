class Node {
    constructor() {
        this.children = {}
        this.end = false
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        let current = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!current.children[char]) {
                current.children[char] = new Node()
            }
            current = current.children[char]
        }
        current.end = true
    }

    search(word) {
        let current = this.root
        // loop through the root and check each letter exists with a true value at end
        // while loop condition: true
        // if i th word is present, go the the next, else { return false}
        // if last word check the next node has end true return true 
        let i = 0
        while (true) {
            let char = word[i]
            let lastLetter = word[word.length - 1]
            if (current.children[char]) {
                if (char === lastLetter) {
                    if (current.children[char].end === true) {
                        return true
                    } else {
                        return false
                    }
                }
                current = current.children[char]
            } else {
                return false
            }
            i++
        }
    }

    autocomplete(prefix) {
        let current = this.root;
        let words = [];

        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i];
            if (!current.children[char]) {
                return words;
            }
            current = current.children[char];
        }

        function traverse(node, prefix) {
            for (let char in node.children) {
                let childNode = node.children[char];
                let newPrefix = prefix + char;
                if (childNode.end) {
                    words.push(newPrefix);
                }
                traverse(childNode, newPrefix);
            }
        }

        traverse(current, prefix);

        return words;
    }

}

let trie = new Trie()
trie.insert('india')
trie.insert('shafi')
console.log(trie.search('india'))
console.log(trie.search('america'))