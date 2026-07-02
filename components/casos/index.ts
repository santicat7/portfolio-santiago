import type { CasoData } from "@/components/casos/CasoEstudio";
import { amargaLorenzo } from "@/components/casos/amarga-lorenzo";
import { elClub } from "@/components/casos/el-club";
import { mundoFlip } from "@/components/casos/mundo-flip";

// Registro de proyectos con página de caso a medida.
// La clave es el slug del proyecto en /data/proyectos.ts.
// Para sumar un caso nuevo: creá su archivo de datos y agregalo acá.
export const casos: Record<string, CasoData> = {
  "amarga-lorenzo": amargaLorenzo,
  "el-club": elClub,
  "mundo-flip": mundoFlip,
};
