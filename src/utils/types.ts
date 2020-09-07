export type stringObjectType = { [key: string]: string };

export type booksListType = {
  list: string;
  "bestsellers-date"?: Date;
  "published-date"?: Date;
  offset?: number;
};

export type booksOverviewType = {
  "published-date"?: Date;
};

export type booksReviewsType = {
  isbn?: number;
  title?: string;
  author?: string;
};
