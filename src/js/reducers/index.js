import {combineReducers} from "redux";
import {reducer as form} from "redux-form";

import articles from './articles';
import article from './article';
import entry from './entry';
import linkedTags from './linkedTags';
import rssEntries from './rssEntries';
import rssFeeds from './rssFeeds';
import tags from './tags';
import tagsOptions from './tagsOptions';
import timeline from './timeline';
import timelines from './timelines';

export default combineReducers({
    form,
    articles,
    article,
    entry,
    rssFeeds,
    rssEntries,
    tags,
    tagsOptions,
    linkedTags,
    timeline,
    timelines
});
