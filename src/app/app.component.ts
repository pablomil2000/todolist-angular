import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormTareaComponent } from "./form-tarea/form-tarea.component";
import { Tarea } from "./tarea/interface/tarea.interface";
import { TareaService } from './tarea/services/tarea.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormTareaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todolist';
  tareas: Tarea[] = [];

  constructor(private tareasService: TareaService) {
    this.tareas = tareasService.getTareas();
  }

  togleTareaComplete(tarea: Tarea): void {
    tarea.completed = !tarea.completed;
    this.ordenarTareas();

    // this.tareasService.updateStorage(this.tareas);
  }
  ordenarTareas(): void {
    this.tareas.sort((a, b) => Number(a.completed) - Number(b.completed));
    // this.tareasService.updateStorage(this.tareas);
  }

  getTarea(tareaName: string) {

    this.tareas.push({ id: crypto.randomUUID(), name: tareaName, completed: false });
    // add to localstorage
    this.ordenarTareas();
    // this.tareasService.updateStorage(this.tareas)
  }

  deleteTarea(tarea: Tarea): void {
    this.tareasService.deleteTarea(tarea);
    this.tareas = this.tareasService.getTareas();
  }
}
