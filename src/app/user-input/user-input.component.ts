import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = "0";
  enteredAnualInvestment = "0";
  enteredExpectedReturn = "5";
  enteredDuration = "10";
  onSubmit() {
    console.log("da");
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredDuration);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredAnualInvestment);

  }
}
