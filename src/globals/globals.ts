import { getMode } from '@stencil/core';
import { Mode } from '../interface';

let defaultMode: Mode;

export const getIonMode = (ref?: any): Mode => {
    return (ref && getMode(ref)) || defaultMode;
};
