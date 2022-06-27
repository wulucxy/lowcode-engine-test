import React, { useState } from 'react';
import moment from 'moment';
import { get, set, has } from 'lodash';

function convertProps(
  props,
  list,
  mapper,
) {
  const out = {};
  list.forEach(key => {
    if (has(props, key)) {
      set(out, key, mapper(get(props, key), key));
    }
  });
  return out;
}

export function withSingleChild(
  Comp,
  needsConvert = ['children'],
) {
  return (props) => {
    const convertedProps = convertProps(props, needsConvert, prop => {
      let node = React.Children.toArray(prop)[0];
      if (node === null || typeof node !== 'object') {
        node = <div>{node}</div>;
      }
      return node;
    });

    return <Comp {...(props)} {...(convertedProps)} />;
  };
}