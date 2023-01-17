
import { Action,createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.models';
import { crear, toggle } from './todo.actions';


export const estadoInicial: Todo[] = [
    new Todo('Tomar desayuno'),
    new Todo('Pololear con mi amorcito'),
    new Todo('Dormir cucharita')
];

export const _todoReducer = createReducer(estadoInicial,

  on(crear, (state,{texto}) => [...state, new Todo(texto)] ),

  on(toggle, (state,{id}) => {

    return state.map( todo =>{
        if( todo.id === id){
            return{
                ...todo,
                completado : !todo.completado
            }
        }else{
            return todo;
        }
    })
  }),
);


export function todoReducer(state: Todo[]= estadoInicial,action: Action){
    return _todoReducer(state,action);
}
