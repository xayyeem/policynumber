import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = '';
  removeSpecialChar(data: any) {
    data.value = data.value.replace(/[^a-zA-Z0-9 ]/g, '');
  }
  onKeydown(event: KeyboardEvent, inputElement: HTMLInputElement) {
    if (event.key === 'Enter') {
      console.log(event); // Logs the keyboard event
      inputElement.value = inputElement.value.replace(/[^a-zA-Z0-9 ]/g, ''); // Removes special characters
    }
  }
}
