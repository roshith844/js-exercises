class HashTable {
    constructor() {
        this.data = new Array(50); // Initialize array with 50 buckets
    }

    // Hash function to generate index
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    // Insert key-value pair into hash table
    set(key, value) {
        const index = this._hash(key);
        this.data[index] = value
    }

    // Get value for given key from hash table
    get(key) {
        const index = this._hash(key);
        return this.data[index];
    }

    // Delete key-value pair from hash table
    delete(key) {
        const index = this._hash(key);
        this.data[index] == undefined
    }


    display() {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                console.log(this.data[i])
            }

        }
    }
}

const hashTable = new HashTable()
hashTable.set('one', 1)
hashTable.set('two', 2)
hashTable.set('three', 3)
// hashTable.display()

console.log(hashTable.get('one'))






