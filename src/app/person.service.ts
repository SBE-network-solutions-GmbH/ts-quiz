import { Injectable } from '@angular/core';

export class Person {
  firstName: string;
  lastName: string;
  birthday: string;
  avatar:string;

  constructor(_person: Person) {
    this.firstName=_person.firstName;
    this.lastName=_person.lastName;
    this.birthday=_person.birthday;
    this.avatar=_person.avatar;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  addPerson(){
    console.log("ADD")
  }
}
