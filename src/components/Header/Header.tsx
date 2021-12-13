import React from 'react';

export type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

const Header = function (props: HeaderProps) {
  const { className = '', ...otherProps } = props;
  return <div>Header</div>;
};

export default Header;
