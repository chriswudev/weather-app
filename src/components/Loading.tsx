import React from 'react';
import { Spin } from 'antd';
import '../styles/loading.less';

export default class Loading extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <div className="loading">
        <Spin />
      </div>
    );
  }
}
