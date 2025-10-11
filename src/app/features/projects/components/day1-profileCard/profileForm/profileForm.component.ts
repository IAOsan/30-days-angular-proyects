import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProfile } from '../profile.model';

@Component({
  standalone: true,
  selector: 'app-profile-form',
  templateUrl: './profileForm.component.html',
  imports: [FormsModule],
})
export class ProfileFormComponent {
  @Input({ required: true }) profile!: IProfile;
  @Input({ required: true }) onAgeChange!: (value: number) => void;
}
