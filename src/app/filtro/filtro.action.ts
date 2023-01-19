import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos'|'completados'|'pendientes';

export const setFiltro = createAction('[Filtro Component] SetFiltro',
props<{filtro: filtrosValidos}>()
);
