// API: Page
export const API_PAGE = 'api/pages';
export const API_PAGE_EDIT = 'api/pages/:id/edit';
export const API_PAGE_STORE = '/api/pages';
export const API_PAGE_UPDATE = '/api/pages/';
export const API_PAGE_DELETE = 'api/pages/:id';

// Route: Page
export const PAGE = '/pages';
export const PAGE_EDIT = 'pages/edit/:id';
export const PAGE_CREATE = 'pages/create';

// Actions: Page
export const ACTIONS = [
  { name: 'Edit', url: 'pages/edit/:id', classname: 'edit', type: 'LinkAction' },
  {
    name: 'Delete',
    url: '/api/pages/',
    callback: 'handleDelete',
    classname: 'delete',
    type: 'AnchorAction',
  },
];

// Toolbar: Page
export const TOOLBAR = [
  { name: 'Add', url: 'pages/create', classname: 'add' },
  { name: 'Download', url: '', classname: 'file_upload' },
  { name: 'Upload', url: '', classname: 'file_download' },
];

// Columns: Page
export const COLUMNS = [{ key: 'id', display: 'ID' }, { key: 'name', display: 'Name' }];

// Breadcrumb: Page
export const BREADCRUMB_PAGE = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Page',
    subPath: 'pages',
    path: '/pages',
  },
];
export const BREADCRUMB_PAGE_EDIT = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Page',
    subPath: 'pages',
    path: '/pages',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: '/pages/edit',
  },
];
export const BREADCRUMB_PAGE_CREATE = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Page',
    subPath: 'pages',
    path: '/pages',
  },
  {
    name: 'Create',
    subPath: 'create',
    path: '/pages/create',
  },
];
