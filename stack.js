// implementation of stack
class Stack {
    constructor() {
        this.data = [];
        this.count = 0;
    }

    push(e) {
        this.data[this.count] = e;
        console.log(`${e} added to ${this.count} position.`);
        this.count++;
    }

    pop() {
        if(this.count === 0) return 'Stack is empty.';
        let item = this.data[this.count - 1];
        this.count--;
        console.log(`${item} removed.`);
    }

    peek() {
        console.log(`Top element of stack is ${this.data[this.count-1]}`);
        // if(this.count === 0) return undefined;
        // else return this.data[this.count-1];
    }

    print() {
        for (let i = 0; i < this.count; i++) {
         console.log(this.data[i]);
        }
    }

    reverse() {
        return this.data.reverse().join('');
    }
}

// stack pop, push, peek operations example
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.push(5);
stack.push(7);
stack.pop();
stack.peek();

stack.print();

// decimal to binary conversion example
const decimalToBinary = (num) => {
    const s = new Stack();
    
    while (num > 0) { 
      s.push(num % 2); 
      num = Math.floor(num / 2); 
    } 
    return s.reverse();
  }

console.log(decimalToBinary(10));
console.log(decimalToBinary(12));