const baseUrl = 'http://localhost:8080/timeline';

export default {
  fetchArticleUrl: `${baseUrl}/article`,
  fetchArticlesUrl: `${baseUrl}/articles`,
  fetchTagsUrl: `${baseUrl}/tags`,
  saveArticleUrl: `${baseUrl}/article/save`,
  // RSS Feeds
  fetchLinkedTagsUrl: `${baseUrl}/tags/linked`,
  fetchRssFeedsUrl: `${baseUrl}/rss/feeds`,
  loadRssEntriesUrl: `${baseUrl}/rss/feed/draft`,
  fetchRssEntriesUrl: `${baseUrl}/rss/entries`,
  fetchRssDraftEntriesUrl: `${baseUrl}/rss/entries/draft`,
  saveFeedUrl: `${baseUrl}/rss/feed/save`,
  acceptRssEntryUrl: `${baseUrl}/rss/entry/accept`,
  rejectRssEntryUrl: `${baseUrl}/rss/entry/reject`,
  saveEntryUrl: `${baseUrl}/rss/entry/save`,
  // Timeline
  fetchTimelineUrl: `${baseUrl}/articles`,
  fetchTimelinesUrl: `${baseUrl}/timelines`,
  saveTimelineUrl: `${baseUrl}/timeline/save`,
  fetchArticlesByTagsUrl: `${baseUrl}/articles/search`
}

export const displayDateFormat = 'YYYY-MM-DD';
export const labelDateFormat = 'yyyy-mm-dd';
export const displayDateTimeFormat = 'DD-MMM-YY/hh:mm';
export const dataModelDateFormat = 'YYYY-MM-DD';
