export type IRes = {
  articles: Array<INews>;
  status: string;
  totalResults: number;
};

export type INews = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
};
