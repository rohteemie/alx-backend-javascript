export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) === 'string') { this._name = name; } else { throw new TypeError(); }

    if (typeof (length) === 'number') { this._length = length; } else { throw new TypeError(); }

    if (Array.isArray(students)) { this._students = students; } else { throw new TypeError(); }
  }

  get name() { return this._name; }

  get length() { return this._length; }

  get students() { return this._students; }

  set name(name) {
    if (typeof (name) === 'string') this._name = name;
    throw new TypeError('Name must be a string');
  }

  set length(length) {
    if (typeof (length) === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  set students(students) {
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw new TypeError('students must be an array');
    }
  }
}
