import { Action, createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.action';


export const filtroIni : filtrosValidos = 'todos';

const _filtroReducer = createReducer<filtrosValidos, Action>(filtroIni,
    on( setFiltro, (state, {filtro}) => filtro),
   );

   export function filtroReducer(state: any, action: any) {
    return _filtroReducer(state, action);
}