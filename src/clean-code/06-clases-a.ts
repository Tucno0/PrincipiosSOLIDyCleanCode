(() => {

  // No aplicando el principio de responsabilidad única
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
      public name     : string,
      public gender   : Gender,
      public birthdate: Date,
    ) {}
  }

  class User extends Person {
    public lastAcces: Date;

    constructor(
      public email: string,
      public role : string,
      name        : string,
      gender      : Gender,
      birthdate   : Date,
    ){
      super(name, gender, birthdate);
      this.lastAcces = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory : string,
      public lastOpenFolder   : string,
      email     : string,
      role      : string,
      name      : string,
      gender    : Gender,
      birthdate : Date,
    ){
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    '/home/user',
    '/home/user/projects',
    'fernando@google.com',
    'admin',
    'Fernando',
    'M',
    new Date('1987-10-15'),
  )

  console.log({userSettings, areCretdentialsValid: userSettings.checkCredentials()});
})();