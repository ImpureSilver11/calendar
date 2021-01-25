// https://github.com/facebook/react/blob/master/packages/react/src/ReactHooks.js
import React, {useState} from 'react';
import clsx from 'clsx';

import { fade, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
// import { toggleDrawer } from './toggleDrawer'
import { hoge } from './toggleDrawer'
type Anchor = 'top' | 'left' | 'bottom' | 'right';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
function hoge(anchor: Anchor, open: boolean){

}
export default function LeftSideBar() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const classes = useStyles();

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    // return hoge(anchor, open, event)
  };

  const list = (anchor: Anchor) => (
    // onClick={toggleDrawer(anchor, false)}
    // onKeyDown={toggleDrawer(anchor, false)}
    <div
    className={clsx(classes.list, {
      [classes.fullList]: anchor === 'top' || anchor === 'bottom',
    })}
    role="presentation"
    >
      <List>
        <ListItem button key={'Inbox'}>
          <ListItemIcon>
          <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={'Inbox'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={'Trash'}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={'Trash'} />
        </ListItem>
      </List>
    </div>
  );
  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}>{'left'}</Button>
      {/* {(['left', 'right', 'top', 'bottom'] as Anchor[]).map((anchor) => ( */}
      <React.Fragment key={'left' as Anchor}>
        <SwipeableDrawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list('left')}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  )
}
