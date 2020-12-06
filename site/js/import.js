import '../scss/root.scss';

import "../html/*.html"

import '../js/*.js';

import {MDCTopAppBar} from '@material/top-app-bar';

import {MDCDrawer} from '@material/drawer';

import {mdcAutoInit} from '@material/auto-init';

// Instantiation
const listEl = document.querySelector('.mdc-drawer .mdc-list');
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

//Add event listeners
listEl.addEventListener('click', (event) => {
    goto(event);
    drawer.open = !drawer.open;
});

//If drawr is open close it
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});
