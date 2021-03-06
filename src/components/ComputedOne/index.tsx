import React from 'react';
import { add } from 'Utils/math';
import qs from 'query-string';
import './index.less';

interface IProps {
  a: number;
  b: number;
}

const ComputedOne = (props: IProps) => {
  const { a, b } = props;
  const sum = add(a, b);

  const obj = qs.stringify({
    a: 1,
  });

  return <p className="computed-one">{`Hi, I'm computed one, my sum is ${sum}.${obj}`}</p>;
};

export default ComputedOne;
