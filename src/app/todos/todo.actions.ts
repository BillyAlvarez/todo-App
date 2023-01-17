import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] Crea TODO', props<{texto: string}>()
    );

    export const toggle = createAction(
        '[TODO] Toggle TODO', props<{id: number}>()
        );
