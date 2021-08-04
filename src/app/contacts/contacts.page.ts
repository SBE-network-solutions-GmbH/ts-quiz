import {Component, OnInit} from '@angular/core';
import {Person, PersonService} from "../person.service";
import {Subject} from "rxjs";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  persons: Person[] = [];
  personSubject = new Subject();

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.getData();
    this.personSubject.subscribe((_person: Person) => {
      this.persons.push(_person);
    })
  }

  getData() {
    fetch('../../assets/contacts.json').then(_res => _res.json()).then(_json => {
      for (let i = 0; i < Object.keys(_json).length; i++) {
        this.persons.push(new Person(_json[i]))
      }
    });
  }

  delete(person: Person) {
    const persons = [];
    while(persons){
      for (let p of persons) {
        if (p.name == person.name)
          this.persons.pop();
      }
    }
  }
}
