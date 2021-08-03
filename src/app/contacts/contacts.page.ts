import {Component, OnInit} from '@angular/core';
import {Person, PersonService} from "../person.service";



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    fetch('../../assets/contacts.json').then(_res => _res.json()).then(_json => {
      console.log("JSON", _json);
      for (let i = 0; i < Object.keys(_json).length; i++) {
        this.persons.push(new Person(_json[i]))
      }
      console.log(this.persons);
    });
  }

}
