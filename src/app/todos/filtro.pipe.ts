import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../filtro/filtro.action';
import { Todo } from './models/todo.models';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
   switch( filtro){
    case 'completados':
      return todos.filter( todo => todo.completado);
      case 'pendientes':
      return todos.filter( todo => !todo.completado);
      default:
        return todos;
   }
  }

}
