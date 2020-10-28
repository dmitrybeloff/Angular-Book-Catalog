interface RecordsStartLimit {
  start: number;
  limit: number;
}

interface Taxonomy {
  name: string;
  values: string[];
}

interface Email {
  eMail: string;
  subject: string;
  content: string;
}

interface EmailInfo {
  info: string;
}

interface TaxonomyCount {
  count: number;
}

interface SimpleRecord {
  title: string;
  image: string;
  autore_name: string;
  autore_slug: string;
  slug: string;
  categorie_slug: string;
  descrizione: string;
}

interface FullRecord {
  title: string;
  descrizione: string;
  categorie_name: string;
  categorie_slug: string;
  autore_name: string;
  autore_slug: string;
  traduttore_name: string;
  traduttore_slug: string;
  editore_name: string;
  editore_slug: string;
  collana_name: string;
  collana_slug: string;
  annoedizione_name: string;
  annoedizione_slug: string;
  incommerciodal_name: string;
  incommerciodal_slug: string;
  pagine: string;
  image: string;
  slug: string;
}

interface SimpleRecordsRequestPayload {
  taxonomyName: string;
  taxonomyValue: string;
  startLimit: RecordsStartLimit;
}

interface RandomSimpleRecordsRequestPayload {
  title: string;
  taxonomyName: string;
  taxonomyValue: string;
  limit: number;
}

interface SimpleRecordsResponsePayload {
  taxonomyName: string;
  taxonomyValue: string;
  simpleRecords: SimpleRecord[];
}

interface RelatedRecordsResponsePayload {
  taxonomy: string;
  simpleRecords: SimpleRecord[];
}
