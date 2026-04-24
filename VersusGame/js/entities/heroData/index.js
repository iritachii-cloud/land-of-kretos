import { vvitchData } from './vvitch_xabar.js';
import { selvinaData } from './selvina_ekorth.js';
import { shenkuData } from './shenku_fenghou.js';
import { geigeiData } from './geigei_fuks.js';

/**
 * heroCustomData: maps hero ID → custom properties.
 * If a hero is not listed here, all defaults are used.
 */
export const heroCustomData = {
    1: vvitchData,   // VVitch X‑abar
    2: selvinaData,  // Selvina E‑korth
    9: shenkuData,   // Shenku Fenghou
    4: geigeiData    // Geigei Fuks
};