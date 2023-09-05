(() => {

  type Gender = 'M' | 'F';

  class Person {
    // public name: string;
    // public gender: Gender;
    // public birthdate: Date;

    // constructor( name: string, gender: Gender, birthdate: Date) {
    //   this.name = name;
    //   this.gender = gender;
    //   this.birthdate = birthdate;
    // }

    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date,
    ) {}
  }

  const newPerson = new Person('Juan', 'M', new Date('1980-01-01'));
  console.log({newPerson});
})();