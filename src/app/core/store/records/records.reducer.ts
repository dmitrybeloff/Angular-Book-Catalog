import * as RecordsActions from './records.actions';

export interface RecordsState {
  record: FullRecord;
  taxonomies: Taxonomy[];
  searchAutoComplete: SimpleRecord[];
  societaCategory: SimpleRecord[];
  narrativaItalianaCategory: SimpleRecord[];
  classiciCategory: SimpleRecord[];
  simpleRecords: SimpleRecord[];
  relatedEditore: SimpleRecord[];
  relatedAuthor: SimpleRecord[];
  relatedCategory: SimpleRecord[];
  taxonomiesList: SimpleRecord[];
  taxonomyNumber: number;
  eMailInfo: string;
  error: string;
}

export const initialState: RecordsState = {
  taxonomies: [],
  record: null,
  searchAutoComplete: [],
  societaCategory: [],
  narrativaItalianaCategory: [],
  classiciCategory: [],
  simpleRecords: [],
  relatedEditore: [],
  relatedAuthor: [],
  relatedCategory: [],
  taxonomiesList: [],
  taxonomyNumber: null,
  eMailInfo: null,
  error: null
};

export function recordsReducer(state: RecordsState = initialState, action: RecordsActions.Actions): RecordsState {
  switch (action.type) {
    case RecordsActions.UPDATEAUTOCOMPLETE: {
      return {
        ...state,
        searchAutoComplete: action.payload
      };
    }
    case RecordsActions.UPDATETAXONOMIES: {
      const sortedTaxonomies = action.payload.sort((a, b) => a.name.localeCompare(b.name, undefined, {numeric: true, sensitivity: 'base'}));
      sortedTaxonomies.forEach(item =>
        item.values.sort((a, b) => a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'}))
      );
      return {
        ...state,
        taxonomies: sortedTaxonomies
      };
    }
    case RecordsActions.UPDATEFULLRECORD: {
      return {
        ...state,
        record: action.payload,
      };
    }
    case RecordsActions.UPDATESIMPLERECORDS: {
      const { payload: { taxonomyName, taxonomyValue, simpleRecords } } = action;
      if (taxonomyName) {
        switch (taxonomyName) {
          case 'autore': {
            return {
              ...state,
              relatedAuthor: simpleRecords
            };
          }
          case 'editore': {
            return {
              ...state,
              relatedEditore: simpleRecords
            };
          }
          case 'categorie': {
            return {
              ...state,
              relatedCategory: simpleRecords
            };
          }
          default: {
            return state;
          }
        }
      } else if (taxonomyValue) {
        switch (taxonomyValue) {
          case 'Cinema, musica, tv, spettacolo': {
            return {
              ...state,
              societaCategory: simpleRecords
            };
          }
          case 'Narrativa italiana': {
            return {
              ...state,
              narrativaItalianaCategory: simpleRecords
            };
          }
          case 'Classici, poesia, teatro e critica': {
            return {
              ...state,
              classiciCategory: simpleRecords
            };
          }
          case 'all': {
            return {
              ...state,
              simpleRecords: simpleRecords
            };
          }
          default: {
            return state;
          }
        }
      } else {
        return state;
      }
    }
    case RecordsActions.UPDATETAXONOMIESLIST: {
      const { payload: { simpleRecords } } = action;
      return {
        ...state,
        taxonomiesList: simpleRecords,
      };
    }
    case RecordsActions.RESETRELATEDRECORDS: {
      return {
        ...state,
        relatedAuthor: [],
        relatedCategory: [],
        relatedEditore: []
      };
    }
    case RecordsActions.RESETFULLRECORD: {
      return {
        ...state,
        record: null
      };
    }
    case RecordsActions.RESETTAXONOMIES: {
      return {
        ...state,
        taxonomiesList: []
      };
    }
    case RecordsActions.UPDATETAXONOMYCOUNT: {
      const { payload } = action;
      return {
        ...state,
        taxonomyNumber: payload,
      };
    }
    case RecordsActions.SENDEMAILSUCCESS: {
      const { payload } = action;
      return {
        ...state,
        eMailInfo: payload,
      };
    }
    case RecordsActions.RESETEMAILINFO: {
      return {
        ...state,
        eMailInfo: null,
      };
    }
    case RecordsActions.RECORDSERROR: {
      let { payload } = action;
      if (!payload || typeof payload !== 'string') {
        payload = 'Errore generale';
      }
      return {
        ...state,
        error: payload,
      };
    }
    case RecordsActions.RESETRECORDSERROR: {
      return {
        ...state,
        error: null,
      };
    }
    default: {
      return state;
    }
  }
}
