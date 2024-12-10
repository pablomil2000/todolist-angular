import { Injectable } from '@angular/core';
import { Tarea } from '../interface/tarea.interface';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private tareas: Tarea[] = [];

  constructor() { }

  getTareas(): Tarea[] {
    // get tareas from local storage
    const storedTareas = localStorage.getItem('tareas');

    if (storedTareas){
      this.tareas = JSON.parse(storedTareas);
    }else{
      this.tareas = [];
    }


    return this.tareas;
  }

  addTarea(tarea: Tarea): void {
    this.tareas.push(tarea);
  }

  deleteTarea(tarea: Tarea): void {
    this.tareas = this.tareas.filter((tarea2)=>tarea2.id !== tarea.id);
    this.updateStorage(this.tareas);

  }

  updateTarea(id: string, nuevaTarea: Partial<Tarea>): void {
    this.tareas = this.tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, ...nuevaTarea } : tarea
    );
  }

  updateStorage(Tareas: Tarea[]): void {

    localStorage.setItem('tareas', JSON.stringify(Tareas));
  }
}
