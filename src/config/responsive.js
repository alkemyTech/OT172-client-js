/*
    Plantilla  mobile first, usado en los modernos frameworks CSS responsive
design, se basa en preparar primero la vista óptima para el móvil y 
utilizar las media queries para ir adaptando la maqueta a dispositivos 
mayores.
*/

/* Pantallas muy pequeñas (móviles en portrait de menos de 576px) No hace falta media-query porque será nuestro diseño por defecto */

/* Pantallas pequeñas (móviles en landscape de más de 576px) */
const screenLittle = '@media (min-width: 576px)'

/* Pantallas medianas (tablets de más de 768px) */
const screenMiddle = '@media (min-width: 768px)'

/* Pantallas grandes (desktops de más de 992px) */
const screenBig = '@media (min-width: 992px)'

/* Pantallas muy grandes (desktops de más de 1200px) */
const screenVeryBig = '@media (min-width: 1200px)'

export const mediaQueries = {
  screenBig,
  screenLittle,
  screenMiddle,
  screenVeryBig
}


