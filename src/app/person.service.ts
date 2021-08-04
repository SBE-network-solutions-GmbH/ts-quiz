import {Injectable} from '@angular/core';
import {uniqueNamesGenerator, Config, starWars} from 'unique-names-generator';

export class Person {
  name: string;
  birthday: string;
  avatar: string;

  constructor(_person: Person) {
    this.name = _person.name;
    this.birthday = _person.birthday;
    this.avatar = _person.avatar;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  config: Config = {
    dictionaries: [starWars]
  }

  constructor() {
  }

  async addPerson(_subject) {
    let characterName: string = uniqueNamesGenerator(this.config);
    let birthday = new Date().toISOString().split('T')[0];
    let avatar = "../../assets/avatars/star_wars.png"
    let person = new Person({name: characterName, birthday: birthday, avatar: avatar});
    _subject.next(person);
  }
}
