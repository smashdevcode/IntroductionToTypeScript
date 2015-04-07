
// Class definition with explicit field.
class Car1 {
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

// Class definition with implicit field.
class Car2 {
  constructor (public engine: string) {
  }

  start() {
    return 'Started ' + this.engine;
  }

  stop() {
    return 'Stopped ' + this.engine;
  }
}

// Class definition with property.
class Car3 {
  private _engine: string;

  constructor (engine: string) {
    this.engine = engine;
  }

  get engine(): string {
    return this._engine;
  }

  set engine(value: string) {
    if (value === undefined) throw 'Supply an engine!';
    this._engine = value;
  }
}
