class vehicle {
  constructor() {
    this.type = 'car';
  }
  start(){
    return `Staring: ${this.type} ${this.id}`;
  }
}

module.exports = class Car extends vehicle {
  constructor(id) {
    super();
    this.id = id;
  }
  identify(suffix){
    return `Car Id: ${this.id} ${suffix}` + suffix;
  }
  accessExtend(){
    return 'this is start extended ' + super.start();
  }
}
