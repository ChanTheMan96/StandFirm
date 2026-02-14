export interface BibleBook {
  id: string;
  bibleId: string;
  abbreviation: string;
  name: string;
  nameLong: string;
}

interface BookDef {
  id: string;
  abbreviation: string;
  name: string;
  nameLong: string;
}

const COMMON_BOOK_DEFS: BookDef[] = [
  { id: 'GEN', abbreviation: 'Gen', name: 'Genesis', nameLong: 'Genesis' },
  { id: 'EXO', abbreviation: 'Exo', name: 'Exodus', nameLong: 'Exodus' },
  { id: 'LEV', abbreviation: 'Lev', name: 'Leviticus', nameLong: 'Leviticus' },
  { id: 'NUM', abbreviation: 'Num', name: 'Numbers', nameLong: 'Numbers' },
  { id: 'DEU', abbreviation: 'Deu', name: 'Deuteronomy', nameLong: 'Deuteronomy' },
  { id: 'JOS', abbreviation: 'Jos', name: 'Joshua', nameLong: 'Joshua' },
  { id: 'JDG', abbreviation: 'Jdg', name: 'Judges', nameLong: 'Judges' },
  { id: 'RUT', abbreviation: 'Rut', name: 'Ruth', nameLong: 'Ruth' },
  { id: '1SA', abbreviation: '1Sa', name: '1 Samuel', nameLong: '1 Samuel' },
  { id: '2SA', abbreviation: '2Sa', name: '2 Samuel', nameLong: '2 Samuel' },
  { id: '1KI', abbreviation: '1Ki', name: '1 Kings', nameLong: '1 Kings' },
  { id: '2KI', abbreviation: '2Ki', name: '2 Kings', nameLong: '2 Kings' },
  { id: '1CH', abbreviation: '1Ch', name: '1 Chronicles', nameLong: '1 Chronicles' },
  { id: '2CH', abbreviation: '2Ch', name: '2 Chronicles', nameLong: '2 Chronicles' },
  { id: 'EZR', abbreviation: 'Ezr', name: 'Ezra', nameLong: 'Ezra' },
  { id: 'NEH', abbreviation: 'Neh', name: 'Nehemiah', nameLong: 'Nehemiah' },
  { id: 'EST', abbreviation: 'Est', name: 'Esther', nameLong: 'Esther' },
  { id: 'JOB', abbreviation: 'Job', name: 'Job', nameLong: 'Job' },
  { id: 'PSA', abbreviation: 'Psa', name: 'Psalms', nameLong: 'Psalms' },
  { id: 'PRO', abbreviation: 'Pro', name: 'Proverbs', nameLong: 'Proverbs' },
  { id: 'ECC', abbreviation: 'Ecc', name: 'Ecclesiastes', nameLong: 'Ecclesiastes' },
  { id: 'SNG', abbreviation: 'Sng', name: 'Song of Songs', nameLong: 'Song of Songs' },
  { id: 'ISA', abbreviation: 'Isa', name: 'Isaiah', nameLong: 'Isaiah' },
  { id: 'JER', abbreviation: 'Jer', name: 'Jeremiah', nameLong: 'Jeremiah' },
  { id: 'LAM', abbreviation: 'Lam', name: 'Lamentations', nameLong: 'Lamentations' },
  { id: 'EZK', abbreviation: 'Ezk', name: 'Ezekiel', nameLong: 'Ezekiel' },
  { id: 'DAN', abbreviation: 'Dan', name: 'Daniel', nameLong: 'Daniel' },
  { id: 'HOS', abbreviation: 'Hos', name: 'Hosea', nameLong: 'Hosea' },
  { id: 'JOL', abbreviation: 'Jol', name: 'Joel', nameLong: 'Joel' },
  { id: 'AMO', abbreviation: 'Amo', name: 'Amos', nameLong: 'Amos' },
  { id: 'OBA', abbreviation: 'Oba', name: 'Obadiah', nameLong: 'Obadiah' },
  { id: 'JON', abbreviation: 'Jon', name: 'Jonah', nameLong: 'Jonah' },
  { id: 'MIC', abbreviation: 'Mic', name: 'Micah', nameLong: 'Micah' },
  { id: 'NAM', abbreviation: 'Nam', name: 'Nahum', nameLong: 'Nahum' },
  { id: 'HAB', abbreviation: 'Hab', name: 'Habakkuk', nameLong: 'Habakkuk' },
  { id: 'ZEP', abbreviation: 'Zep', name: 'Zephaniah', nameLong: 'Zephaniah' },
  { id: 'HAG', abbreviation: 'Hag', name: 'Haggai', nameLong: 'Haggai' },
  { id: 'ZEC', abbreviation: 'Zec', name: 'Zechariah', nameLong: 'Zechariah' },
  { id: 'MAL', abbreviation: 'Mal', name: 'Malachi', nameLong: 'Malachi' },
  { id: 'MAT', abbreviation: 'Mat', name: 'Matthew', nameLong: 'Matthew' },
  { id: 'MRK', abbreviation: 'Mrk', name: 'Mark', nameLong: 'Mark' },
  { id: 'LUK', abbreviation: 'Luk', name: 'Luke', nameLong: 'Luke' },
  { id: 'JHN', abbreviation: 'Jhn', name: 'John', nameLong: 'John' },
  { id: 'ACT', abbreviation: 'Act', name: 'Acts', nameLong: 'Acts' },
  { id: 'ROM', abbreviation: 'Rom', name: 'Romans', nameLong: 'Romans' },
  { id: '1CO', abbreviation: '1Co', name: '1 Corinthians', nameLong: '1 Corinthians' },
  { id: '2CO', abbreviation: '2Co', name: '2 Corinthians', nameLong: '2 Corinthians' },
  { id: 'GAL', abbreviation: 'Gal', name: 'Galatians', nameLong: 'Galatians' },
  { id: 'EPH', abbreviation: 'Eph', name: 'Ephesians', nameLong: 'Ephesians' },
  { id: 'PHP', abbreviation: 'Php', name: 'Philippians', nameLong: 'Philippians' },
  { id: 'COL', abbreviation: 'Col', name: 'Colossians', nameLong: 'Colossians' },
  { id: '1TH', abbreviation: '1Th', name: '1 Thessalonians', nameLong: '1 Thessalonians' },
  { id: '2TH', abbreviation: '2Th', name: '2 Thessalonians', nameLong: '2 Thessalonians' },
  { id: '1TI', abbreviation: '1Ti', name: '1 Timothy', nameLong: '1 Timothy' },
  { id: '2TI', abbreviation: '2Ti', name: '2 Timothy', nameLong: '2 Timothy' },
  { id: 'TIT', abbreviation: 'Tit', name: 'Titus', nameLong: 'Titus' },
  { id: 'PHM', abbreviation: 'Phm', name: 'Philemon', nameLong: 'Philemon' },
  { id: 'HEB', abbreviation: 'Heb', name: 'Hebrews', nameLong: 'Hebrews' },
  { id: 'JAS', abbreviation: 'Jas', name: 'James', nameLong: 'James' },
  { id: '1PE', abbreviation: '1Pe', name: '1 Peter', nameLong: '1 Peter' },
  { id: '2PE', abbreviation: '2Pe', name: '2 Peter', nameLong: '2 Peter' },
  { id: '1JN', abbreviation: '1Jn', name: '1 John', nameLong: '1 John' },
  { id: '2JN', abbreviation: '2Jn', name: '2 John', nameLong: '2 John' },
  { id: '3JN', abbreviation: '3Jn', name: '3 John', nameLong: '3 John' },
  { id: 'JUD', abbreviation: 'Jud', name: 'Jude', nameLong: 'Jude' },
  { id: 'REV', abbreviation: 'Rev', name: 'Revelation', nameLong: 'Revelation' }
];

function withBibleId(bibleId: string): BibleBook[] {
  return COMMON_BOOK_DEFS.map((book) => ({ ...book, bibleId }));
}

export const BIBLE_BOOKS_BY_VERSION: Record<string, BibleBook[]> = {
  '78a9f6124f344018-01': withBibleId('78a9f6124f344018-01'),
  'd6e14a625393b4da-01': withBibleId('d6e14a625393b4da-01'),
  '63097d2a0a2f7db3-01': withBibleId('63097d2a0a2f7db3-01')
};
