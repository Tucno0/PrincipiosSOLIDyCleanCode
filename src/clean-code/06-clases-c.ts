(() => {

  // Aplicando el principio de responsabilidad única
  // Priorizando la composición sobre la herencia

  type Gender = 'M' | 'F';

  interface PersonProps {
    name     : string;
    gender   : Gender;
    birthdate: Date;
  }

  class Person {
    public birthdate: Date;
    public gender   : Gender;
    public name     : string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name       = name;
      this.gender     = gender;
      this.birthdate  = birthdate;
    }
  }

  interface UserProps {
    email    : string;
    role     : string;
  }

  class User {
    public email    : string;
    public lastAcces: Date;
    public role     : string;

    constructor({ email, role }: UserProps) {
      this.email     = email;
      this.lastAcces = new Date();
      this.role      = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder   : string;
    workingDirectory : string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder  : string;

    constructor( {workingDirectory, lastOpenFolder}: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder   = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    birthdate        : Date;
    email            : string;
    gender           : Gender;
    lastOpenFolder   : string;
    name             : string;
    role             : string;
    workingDirectory : string;
  }

  class UserSettings {
    public person: Person;
    public user  : User;
    public settings: Settings;

    constructor({
      name, gender, birthdate, 
      email, role,
      lastOpenFolder, workingDirectory
    }: UserSettingsProps) {
      this.person   = new Person({name, gender, birthdate});
      this.user     = new User({email, role});
      this.settings = new Settings({lastOpenFolder, workingDirectory});
    }
  }

  const userSettings = new UserSettings({
    birthdate : new Date('1987-10-15'),
    email : 'fernando@google.com',
    gender : 'M',
    lastOpenFolder : '/home/user/projects',
    name : 'Fernando',
    role : 'admin',
    workingDirectory : '/home/user',
  });

  console.log({userSettings});
  console.log(userSettings.user.checkCredentials());
})();