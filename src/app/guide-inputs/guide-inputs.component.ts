import { Component } from '@angular/core';

@Component({
  selector: 'app-guide-inputs',
  templateUrl: './guide-inputs.component.html',
  styleUrls: ['./guide-inputs.component.css']
})
export class GuideInputsComponent {
  toggleSelected = false;
  saving = false;
  selectedItem: any;
  sideBarShown = false;

  save() {
    this.saving = true;
    setTimeout(() => {
      this.saving = false;
    }, 3000);
  }

}
