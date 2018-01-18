var expect = require('chai').expect;
const Queue = require('../technicalChallenge2');
describe('#enqueue', () => {
  it('Properly enqueues an item', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.stack1._arr).to.deep.equal([1]);
    expect(queue.stack1.length()).to.be.equal(1);
    queue.enqueue(2);
    expect(queue.stack1._arr).to.deep.equal([1, 2]);
    expect(queue.stack1.length()).to.be.equal(2);
  });
});

describe('#dequeue', () => {
  it('Properly dequeues an item', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    let value = queue.dequeue();
    expect(value).to.be.equal(1);
    expect(queue.stack2.length()).to.be.equal(1);

    value = queue.dequeue();
    expect(value).to.be.equal(2);

    expect(queue.stack2.length()).to.be.equal(0);
  });
});
describe('#dequeue and enqueue ', () => {
  it('Properly dequeues an item after another enqueue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    let value = queue.dequeue();
    expect(value).to.be.equal(1);
    expect(queue.stack2.length()).to.be.equal(1);
    queue.enqueue(3);
    value = queue.dequeue();
    expect(value).to.be.equal(2);
    value = queue.dequeue();
    expect(value).to.be.equal(3);
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.stack1._arr).to.deep.equal([4, 5]);
    value = queue.dequeue();
    expect(value).to.be.equal(4);
  });
});
