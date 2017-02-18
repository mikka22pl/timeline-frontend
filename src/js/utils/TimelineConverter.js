import _ from 'lodash';

export const timelinesToWrite = (list) => {
  return list.map((tag) => {
    return { id: _.isNumber(tag.value) ? tag.value : null, name: tag.label };
  });
};
