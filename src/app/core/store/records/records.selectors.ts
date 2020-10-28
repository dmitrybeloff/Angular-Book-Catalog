import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';

export const getRecords = (state: AppState) => state.recordsState;
export const getSearchAutoCompleteValues = createSelector(getRecords, ({ searchAutoComplete }) => searchAutoComplete);
export const getTaxonomies = createSelector(getRecords, ({ taxonomies }) => taxonomies);
export const getSocietaCategory = createSelector(getRecords, ({ societaCategory }) => societaCategory);
export const getNarrativaItalianaCategory = createSelector(getRecords, ({ narrativaItalianaCategory }) => narrativaItalianaCategory);
export const getClassiciCategory = createSelector(getRecords, ({ classiciCategory }) => classiciCategory);
export const getSimpleRecords = createSelector(getRecords, ({ simpleRecords }) => simpleRecords);
export const getRelatedAuthorRecords = createSelector(getRecords, ({ relatedAuthor }) => relatedAuthor);
export const getRelatedEditoreRecords = createSelector(getRecords, ({ relatedEditore }) => relatedEditore);
export const getRelatedCategoryRecords = createSelector(getRecords, ({ relatedCategory }) => relatedCategory);
export const getTaxonomiesList = createSelector(getRecords, ({ taxonomiesList }) => taxonomiesList);
export const getRecord = createSelector(getRecords, ({ record }) => record);
export const getTaxonomyNumber = createSelector(getRecords, ({ taxonomyNumber }) => taxonomyNumber);
export const getEmailInfo = createSelector(getRecords, ({ eMailInfo }) => eMailInfo);
export const getError = createSelector(getRecords, ({ error }) => error);
