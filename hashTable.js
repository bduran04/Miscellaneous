class HashTable {
    constructor(size) {
        this.keyMap = new Array(size);
    }
    
    _hash(key) {
        let hash = 0;
        for (let i =0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }
    
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
        this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    
    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) {
            return this.keyMap[index][i][1];
            }
        }
        }
        return undefined;
    }
    
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
        if (this.keyMap[i]) {
            for (let j = 0; j < this.keyMap[i].length; j++) {
            if (!keysArr.includes(this.keyMap[i][j][0])) {
                keysArr.push(this.keyMap[i][j][0]);
            }
            }
        }
        }
        return keysArr;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')