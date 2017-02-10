import _ from 'lodash';

export const tagsToWrite = (data) => {
  return data.map((tag) => {
    return { id: _.isNumber(tag.value) ? tag.value : null, name: tag.label };
  });
};
