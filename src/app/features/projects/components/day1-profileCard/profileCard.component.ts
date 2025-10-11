import { Component } from '@angular/core';
import { CapitalizePipe } from '../../../../shared/pipes/capitalize.pipe';
import { ProfileFormComponent } from './profileForm/profileForm.component';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profileCard.component.html',
  styleUrl: './profileCard.component.css',
  imports: [CapitalizePipe, ProfileFormComponent],
})
export class ProfileCardComponent {
  profile = {
    name: '',
    age: '',
    description: '',
  };

  handleAgeChange(value: number): void {
    this.profile.age = value < 1 ? '1' : value > 100 ? '100' : String(value);
  }
}
