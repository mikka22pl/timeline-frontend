import _ from 'lodash';

import { tagsToWrite } from './TagsConverter';
import { timelinesToWrite } from './TimelineConverter';

export const articleToRead = (data) => {
  if (!data.id || data.id < 1) {
    return {category: "world"};
  }
  return {
    ...data,
    title: data.name,
    date: data.onDate,
    category: data.category && data.category.name,
    tags: (data.tags || []).map(tg => {
      return {value: tg.id, label: tg.name};
    })
  };
};
export const articleTo2Read = (data) => {
  if (!data.id || data.id < 1) {
    return {category: "world"};
  }
  return {
    ...data,
    date: data.pubDate,
    category: data.category && data.category.name,
    tags: (data.tags || []).map(tg => {
      return {value: tg.id, label: tg.name};
    }),
    timelines: (data.timelines || []).map(tl => {
      return {value: tl.id, label: tl.name};
    })
  };
};
export const articleToWrite = (formData) => {
  return {
    ...formData,
    name: formData.title,
    category: { name: formData.category },
    tags: tagsToWrite(formData.tags),
    timelines: timelinesToWrite(formData.timelines),
    onDate: formData.date
  };
};
