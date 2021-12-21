import React from 'react';
import { add } from 'Utils/math';
import qs from 'query-string';

interface IProps {
  a: number;
  b: number;
}

const ComputedTwo = (props: IProps) => {
  const { a, b } = props;
  const sum = add(a, b);

  return <p className="computed-one">{`Hi, I'm computed two, my sum is ${sum}.`}</p>;
};

export default ComputedTwo;
