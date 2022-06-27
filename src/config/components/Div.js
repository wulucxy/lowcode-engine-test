import React, { Children, Component } from 'react';

export default class DivView extends Component {
  static displayName = 'Div';

  static version = '0.0.0';
  
  render() {
    return <div {...this.props} />;
  }
}