
interface Vehicle {
  start();
  stop();
}

class Car implements Vehicle {
  engine: string;

  constructor (engine: string) {
    this.engine = engine;
  }

  start() {
    return 'Started ' + this.engine;
  }

  stop() {
    return 'Stopped ' + this.engine;
  }
}
