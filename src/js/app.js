import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { IndexRedirect, Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from "history";

import store from "./store"
import AllArticlesPage from './containers/AllArticlesPage';
import ArticleEditPage from './containers/ArticleEditPage';
import LayoutContainer from './containers/LayoutContainer';
import ListPage from './containers/ListPage';
import RssEntriesPage from './containers/rss/RssEntriesPage';
import RssFeedsPage from './containers/rss/RssFeedsPage';
import TimelinePage from './containers/TimelinePage';
//import '../../node_modules/jquery/dist/jquery';
//import '../../node_modules/bootstrap/dist/js/bootstrap';

const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

ReactDOM.render(
  <Provider store={store}>
    <Router history={appHistory}>
      <Route path="/" component={LayoutContainer}>
        <Route path="home" name="home" component={ListPage} />
        <Route path="timeline(/:tagId)" name="timeline" component={TimelinePage} />
        <Route path="articles(/:feedId)" name="allArticles" component={AllArticlesPage} />
        <Route path="article/form(/:articleId)" name="articleForm" component={ArticleEditPage} />
        <Route path="rss/feeds" name="rssFeeds" component={RssFeedsPage} />
        <Route path="rss/entries/:feedId(/:draft)" name="rssEntries" component={RssEntriesPage} />
        <IndexRedirect to="home"/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
