import styled from "styled-components";

export const SideNav = styled.aside`
  position: fixed;
  z-index: 999;
  top: 0;

  width: 214px;
  height: 100%;

  -webkit-transition: 0.3s ease all;
  -moz-transition: 0.3s ease all;
  -o-transition: 0.3s ease all;
  transition: 0.3s ease all;

  span.badge.new {
    line-height: 20px;
    margin-top: 11px;
    background-color:#9c27b0;
  }

  .brand-sidebar {
    position: fixed;
    top: 0;
    left: 0;

    width: inherit;
    height: 64px;
    background:#575758;
    -webkit-box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.2);

    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .brand-sidebar .logo-wrapper {
    font-size: 3rem;
    line-height: 17px !important;
    margin: 0;
    white-space: nowrap;
  }
  .brand-sidebar .logo-wrapper a.brand-logo img {
    height: 18px;
  }
  .brand-sidebar .logo-wrapper a.navbar-toggler {
    position: absolute;
    top: 7px;
    right: 22px;
  }
  .brand-sidebar .logo-wrapper a.navbar-toggler i {
    font-size: 15px;
    line-height: 56px;

    display: block;

    height: 56px;

    color: #333;
  }
  .brand-sidebar span.logo-text {
    font-size: 22px;
    color: #fff;
    visibility: visible;
    padding-left: 8px;
    -webkit-transition: opacity 0.2s linear;
    -moz-transition: opacity 0.2s linear;
    -o-transition: opacity 0.2s linear;
    transition: opacity 0.2s linear;
    opacity: 1;
  }
  .brand-sidebar .brand-logo {
    font-size: 2.1rem;
    line-height: 0;
    position: absolute;
    display: inline-block;
    margin: 1px 0;
    padding: 28px 12px;
    color: #333;
  }
  .brand-sidebar .brand-logo img {
    height: 18px;
  }
  .brand-sidebar .brand-logo.center {
    left: 50%;

    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  @media only screen and (max-width: 992px) {
    .brand-sidebar .brand-logo {
      left: 50%;

      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    .brand-sidebar .brand-logo.left,
    .brand-sidebar .brand-logo.right {
      padding: 0;

      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    .brand-sidebar .brand-logo.left {
      left: 0.5rem;
    }
    .brand-sidebar .brand-logo.right {
      right: 0.5rem;
      left: auto;
    }
  }
  .brand-sidebar .brand-logo.right {
    right: 0.5rem;

    padding: 0;
  }
  .brand-sidebar .brand-logo i,
  .brand-sidebar .brand-logo [class^="mdi-"],
  .brand-sidebar .brand-logo [class*="mdi-"],
  .brand-sidebar .brand-logo i.material-icons {
    float: left;

    margin-right: 15px;
  }

  .sidenav {
    top: 64px;

    overflow: hidden;

    width: inherit;
    height: 100%;

    -webkit-transition: auto !important;
    -moz-transition: auto !important;
    -o-transition: auto !important;
    transition: auto !important;

    border: none;
    -webkit-box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.2);

    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    background: #575758 !important;
  }
  .sidenav.native-scroll {
    overflow-y: scroll !important;
  }
  .sidenav a {
    line-height: 42px;

    height: 42px;
  }
  .sidenav .navigation-header {
    font-size: 0.85rem;
    font-weight: 600;

    margin-top: 10px;
    padding: 0 17px;

    text-transform: uppercase;
  }
  .sidenav .navigation-header .navigation-header-icon {
    display: none;
  }
  .sidenav .navigation-header .navigation-header-text {
    font-size: 0.85rem;
    font-weight: 600;
    line-height: 30px;

    height: 30px;
    margin: 0;
    padding: 0 !important;

    color: #969696;
  }
  .sidenav .navigation-header .navigation-header-text:hover {
    background-color: transparent !important;
  }
  .sidenav li {
    line-height: 44px;

    padding: 0;
  }
 
  .sidenav li a i {
    font-size: 1.4rem;
    line-height: inherit;

    display: block;
    float: left;

    width: 2rem;
    margin-right: 1rem;

    text-align: center;
  }
  .sidenav .collapsible-header {
    font-weight: 400;

    margin: 0;
    /* Sidebar nav open close icons*/
  }
  .sidenav .collapsible-header:after {
    font-family: "Material Icons";
    font-size: 18px;

    position: absolute;
    right: 16px;

    content: "keyboard_arrow_right";
    transition: transform 0.3s ease-in-out, opacity 0.25s ease-in-out 0.1s,
      -webkit-transform 0.3s ease-in-out;

    color: #afafaf;
  }
  .sidenav .collapsible-header.active:after {
    content: "keyboard_arrow_down";
  }
  .sidenav li .collapsible-body {
    background: transparent;
  }
  .sidenav li .collapsible-body a i {
    font-size: 0.7rem;
  }
  .sidenav li a.active {
    color: #fff !important;
    background: #9c27b0 !important;
    box-shadow: 1px 1px 3px 0 rgb(122,82,175) !important;
  }
  .sidenav li a.active i {
    color: #fff;
  }
  .sidenav li:not(.active).open {
    background-color: rgba(0, 0, 0, 0.035);
  }
  .sidenav li.active {
    background-color: transparent;
  }
  .sidenav li.active > .collapsible-header:after {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  .sidenav li.open {
    background: rgba(0, 0, 0, 0.035);
  }
  .sidenav li > a,
  .sidenav li a.collapsible-header {
    font-weight: 400;
    line-height: 44px;

    height: 44px;
    padding: 0 16px !important;
  }
  .sidenav li > a > i.material-icons,
  .sidenav li a.collapsible-header > i.material-icons {
    line-height: 44px;

    height: 44px;
    margin: 0 20px 0 0;
  }
  .sidenav li > a:not(.active):hover {
    background-color: rgba(0, 0, 0, 0.035) !important;
  }
  .sidenav .collapsible-body > ul:not(.collapsible) > li.active,
  .sidenav.sidenav-fixed .collapsible-body > ul:not(.collapsible) > li.active {
    background-color: #e6b5ee;
  }
  .sidenav .collapsible-body > ul:not(.collapsible) > li.active a,
  .sidenav .collapsible-body > ul:not(.collapsible) > li.active i,
  .sidenav.sidenav-fixed .collapsible-body > ul:not(.collapsible) > li.active a,
  .sidenav.sidenav-fixed
    .collapsible-body
    > ul:not(.collapsible)
    > li.active
    i {
    color: #9c27b0;
    background: none;
  }

  .nav-expanded .sidenav .menu-title {
    visibility: visible;

    -webkit-transition: opacity 0.2s linear;
    -moz-transition: opacity 0.2s linear;
    -o-transition: opacity 0.2s linear;
    transition: opacity 0.2s linear;

    opacity: 1;
  }

  .nav-expanded .navigation-header-text {
    display: block;
  }

  .nav-expanded .navigation-header-icon {
    display: none;
  }

  .nav-collapsed.sidenav-main {
    width: 64px;
  }

  .nav-collapsed .brand-sidebar .navbar-toggler,
  .nav-collapsed .brand-sidebar .brand-logo span {
    visibility: hidden;

    -webkit-transition: visibility 0s 2s, opacity 0.05s linear;
    -moz-transition: visibility 0s 2s, opacity 0.05s linear;
    -o-transition: visibility 0s 2s, opacity 0.05s linear;
    transition: visibility 0s 2s, opacity 0.05s linear;

    opacity: 0;
  }

  .nav-collapsed .navigation-header-text {
    display: none;
  }

  .nav-collapsed .navigation-header-icon {
    display: block !important;
  }

  .nav-collapsed .sidenav .user-options,
  .nav-collapsed .sidenav .menu-title,
  .nav-collapsed .sidenav .collapsible-body span,
  .nav-collapsed .sidenav .collapsible-header:after {
    display: none;
  }

  .nav-collapsed .sidenav .menu-title {
    visibility: visible;

    -webkit-transition: opacity 0.2s linear;
    -moz-transition: opacity 0.2s linear;
    -o-transition: opacity 0.2s linear;
    transition: opacity 0.2s linear;

    opacity: 1;
  }

  .nav-lock .navigation-header-icon {
    display: none;
  }

  .nav-collapsible.nav-collapsed span.badge.pill {
    visibility: hidden;

    -webkit-transition: visibility 0s 2s, opacity 0.05s linear;
    -moz-transition: visibility 0s 2s, opacity 0.05s linear;
    -o-transition: visibility 0s 2s, opacity 0.05s linear;
    transition: visibility 0s 2s, opacity 0.05s linear;

    opacity: 0;
  }

  .nav-collapsible span.badge {
    color: #fff;
  }
  .nav-collapsible span.badge.pill {
    position: absolute;
    right: 10px;

    visibility: visible;
    float: none;

    -webkit-transition: opacity 0.2s linear;
    -moz-transition: opacity 0.2s linear;
    -o-transition: opacity 0.2s linear;
    transition: opacity 0.2s linear;

    opacity: 1;
  }

  .navbar-full .brand-sidebar {
    background: transparent;
  }
  .navbar-full .brand-sidebar .brand-logo {
    color: #fff;
  }
  .navbar-full .brand-sidebar .logo-wrapper a.navbar-toggler i {
    color: #fff;
  }

  .sidenav-active-rounded .sidenav li > a.active {
    color: #fff;
    border-radius: 0 25px 25px 0;
  }
  .sidenav-active-rounded .sidenav li > a.active > i {
    color: #fff;
  }

  .sidenav-active-rounded .sidenav li:not(.open) > a.active {
    color: #fff;
  }
  .sidenav-active-rounded .sidenav li:not(.open) > a.active > i {
    color: #fff;
  }

  .sidenav-active-rounded .sidenav li:not(.active) > a:hover {
    margin-right: 16px;

    border-radius: 0 25px 25px 0;
  }

  .sidenav-active-rounded .sidenav li > a,
  .sidenav-active-rounded .sidenav li a.collapsible-header {
    margin-right: 16px;
    padding: 0 0 0 16px !important;

    -webkit-transition: none;
    -moz-transition: none;
    -o-transition: none;
    transition: none;
  }

  .sidenav-active-rounded .sidenav .collapsible-header:after {
    right: 9px;
  }

  .sidenav-active-rounded.nav-collapsed li > a,
  .sidenav-active-rounded.nav-collapsed li a.collapsible-header {
    margin-right: 10px;
  }

  .sidenav-active-rounded.nav-collapsed li.close {
    background-color: rgba(0, 0, 0, 0.08);
  }

  @media only screen and (max-width: 992px) {
    .sidenav-main {
      width: auto;
      height: 0;
    }
    .sidenav-main .brand-sidebar {
      left: 80px;

      background: transparent;
      -webkit-box-shadow: none;
      box-shadow: none;
    }
    .sidenav-main .brand-sidebar .navbar-toggler {
      display: none;
    }
    .sidenav-main .brand-sidebar .logo-wrapper {
      padding: 0 !important;
    }
    .sidenav-main .brand-sidebar .sidenav-trigger {
      top: -48px;
    }
    .sidenav-main .sidenav {
      top: 0;

      width: 250px;
    }
    .sidenav-main .btn-sidenav-toggle {
      position: relative;
      top: 10px;
      left: 10px;
    }
  }

  @media only screen and (max-width: 600px) {
    .sidenav-main .brand-sidebar .brand-logo {
      padding: 16px 12px 20px 12px;
    }
    .sidenav-main .btn-sidenav-toggle {
      position: relative;
      top: 6px;
      left: 6px;
    }
  }

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .sidenav .collapsible-header {
      /* Sidebar nav open close icons*/
    }
    .sidenav .collapsible-header:after {
      width: 0;

      content: "+";
    }
    .sidenav li.active > .collapsible-header:after {
      right: 0;

      width: 0;

      content: "-";
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }
`;
