import store from './store';

export function toggleDrawer() {
  store.drawerState.hidden = !store.drawerState.hidden;
}

export function hideDrawer() {
  store.drawerState.hidden = true;
}
