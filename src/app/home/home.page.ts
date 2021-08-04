import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {
    this.setEventListeners();
  }

  setEventListeners() {
    document.getElementById('contacts').addEventListener("click", this.openPage.bind(this, 'contacts'));
    document.getElementById('notes').addEventListener("click", this.openPage.bind(this, 'notes'));
  }

  openPage(_key: string, _event) {
    console.log(_key);
    switch (_key) {
      case 'contacts':
        this.router.navigateByUrl('/contacts');
        break;
      case 'notes':
        this.router.navigateByUrl('/notes');
        break;
    }
  }
}
