import { compose } from 'recompose';
import { connect } from 'react-redux';
import { initCatalog, clearFilters, setSortBy } from '@actions/index';
import { isCatalogLoaded, sortProducts, filterProducts, selectSortBy } from '@selectors/catalog';
import { IState } from '@typings/state/index';
import Products from './Products';