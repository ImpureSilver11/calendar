import React, { useState } from 'react';
type Anchor = 'top' | 'left' | 'bottom' | 'right';

// export function toggleDrawer(anchor: string, open: boolean): any {
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });
//   return (anchor: string, open: boolean) => (
//     event: React.KeyboardEvent | React.MouseEvent,
//   ) => {
//     if (
//       event &&
//       event.type === 'keydown' &&
//       ((event as React.KeyboardEvent).key === 'Tab' ||
//         (event as React.KeyboardEvent).key === 'Shift')
//     ) {
//       return;
//     }
//     setState({ ...state, [anchor]: open });
//   };
// };

export function hoge(anchor: Anchor, open: boolean, event: React.KeyboardEvent | React.MouseEvent){
  const [state, setState] = useState(null);
  if (
    event &&
    event.type === 'keydown' &&
    ((event as React.KeyboardEvent).key === 'Tab' ||
      (event as React.KeyboardEvent).key === 'Shift')
  ) {
    return;
  }

  return setState({ ...state, [anchor]: open });
}