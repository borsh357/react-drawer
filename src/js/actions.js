import { drawerState } from './store';

export function toggleDrawer() {
  drawerState.hidden = !drawerState.hidden;
}
