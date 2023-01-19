
import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.models';
import { borrar, crear, editar, limpiarTodos, toggle, toggleAll } from './todo.actions';


export const estadoInicial: Todo[] = [
    new Todo('Tomar desayuno'),
    new Todo('Trabajar y Estudiar'),
    new Todo('Pololear con mi amorcito'),
    new Todo('Hacer Rutina Ejercicios'),
    new Todo('Dormir cucharita ;D')
];

export const _todoReducer = createReducer(estadoInicial,

    on(crear, (state, { texto }) => [...state, new Todo(texto)]),
    
    on(limpiarTodos, state => state.filter( todo => !todo.completado )),

    on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),

    on(toggleAll, (state, { completado })=> state.map( todo => {
        return {
            ...todo, completado: completado
        }
    })),

    on(toggle, (state, { id }) => {

        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                }
            } else {
                return todo;
            }
        })
    }),
    on(editar, (state, { id, texto }) => {

        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    texto: texto
                }
            } else {
                return todo;
            }
        })
    }),
);


export function todoReducer(state: Todo[] = estadoInicial, action: Action) {
    return _todoReducer(state, action);
}
