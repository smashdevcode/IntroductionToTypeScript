
class Parent {
  parentName: string;

  constructor(parentName: string) {
    this.parentName = parentName;
  }
}

class Child extends Parent {
  childName: string;

  constructor(childName: string, parentName: string) {
    this.childName = childName;
    super(parentName);
  }
}

var child = new Child('Sam', 'Bob');
