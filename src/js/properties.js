const baseUrl = 'http://localhost:8080/timeline';

export default {
  fetchArticleUrl: `${baseUrl}/article`,
  fetchArticlesUrl: `${baseUrl}/articles`,
  fetchTimelineUrl: `${baseUrl}/articles`,
  fetchTagsUrl: `${baseUrl}/tags`,
  saveArticleUrl: `${baseUrl}/article/save`,
  // RSS Feeds
  fetchRssFeedsUrl: `${baseUrl}/rss/feeds`,
  fetchRssEntriesUrl: `${baseUrl}/rss/entries`,
  fetchRssDraftEntriesUrl: `${baseUrl}/rss/entries/draft`,
  saveFeedUrl: `${baseUrl}/rss/feed/save`,
  acceptRssEntryUrl: `${baseUrl}/rss/entry/accept`
}

export const displayDateFormat = 'YYYY-MM-DD';
export const labelDateFormat = 'yyyy-mm-dd';
export const displayDateTimeFormat = 'DD-MMM-YY/hh:mm';
export const dataModelDateFormat = 'YYYY-MM-DD';
