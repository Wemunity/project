import React from 'react';
import { cloneDeep } from 'lodash';

export function cn(...args) {
  return args.filter(Boolean).join(' ');
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map(edge => edge.node);
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current;
}

export function capitalizeWordsInString(string) {
  if (!string || string === '') return '';
  const str = string.toLowerCase().split(' ');

  for (let i = 0; i < str.length; i += 1) {
    if (str[i][0]) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
  }

  return str.join(' ');
}

export function buildArticleUrl(article) {
  const date = article._rawTopField.articleDate;
  const path = `/artikkel/${date}/${article.articleSlug.current}/`;
  return path;
}

export function buildImageObj(source) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id }
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}

export function createCompleteExternalLink(url) {
  let completeUrl = '';
  if (!url.includes('http://') && !url.includes('https://')) {
    completeUrl += 'https://';
  }
  completeUrl += url;
  return completeUrl;
}

export function insertVariablesIntoRichText(props, userInfo) {
  const replaceArray = ['navn', 'company'];
  const replaceWith = [userInfo.manager.firstName, userInfo.name];

  const ret = cloneDeep(props.children);

  for (let i = 0; i < props.children.length; i += 1) {
    for (let y = 0; y < replaceArray.length; y += 1) {
      if (typeof ret[i] === 'string') {
        ret[i] = ret[i].replace(`{${replaceArray[y]}}`, replaceWith[y]);
      }
    }
  }

  return <p>{ret}</p>;
}
