import React, { Fragment } from 'react';
import { Header } from '../';

const PageWithHeader = (props) => {
  return (<Fragment>
    <Header />
    {props.children}
  </Fragment>);
};

export default PageWithHeader;