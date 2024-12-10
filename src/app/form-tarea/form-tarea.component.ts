import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-tarea.component.html',
  styleUrl: './form-tarea.component.css',
})
export class FormTareaComponent {
  nuevaTarea: string = '';
  @Output() tareaAgregada = new EventEmitter<string>();

  agregarTarea(): void {
    if (this.nuevaTarea.trim()) {
      this.tareaAgregada.emit(this.nuevaTarea);
      this.nuevaTarea = '';
    }
  }
}
