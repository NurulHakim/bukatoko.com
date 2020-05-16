import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { ICatalogProduct } from '@typings/state/index';
import FiltersList from '../FiltersList';
import Product from '../Product';
import '@styles/Products.css';

interface Props {
    catalogLoaded: boolean;
    catalog: ICatalogProduct[];
    sortBy: string;
    initCatalog: () => void;
    clearFilters: () => void;
    setSortBy: (value: string) => void;
  }
  
  interface State {
    drawerOpen: boolean;
    value: string;
  }