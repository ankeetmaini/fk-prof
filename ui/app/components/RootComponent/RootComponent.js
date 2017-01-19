import React, { Component } from 'react';

import Header from 'components/HeaderComponent';
import AppIdSelector from 'components/AppIdSelectorComponent';

import 'components/RootComponent/RootComponent.css';

const BaseComponent = Komponent => class extends Component {
  componentDidUpdate () {
      componentHandler.upgradeDom(); // eslint-disable-line
  }

  render () {
    return <Komponent {...this.props} />;
  }
};

const RootComponent = ({ children }) => (
  <div>
    <Header />
    <main className="app mdl-layout__content">
      <div className="page-content">
        <AppIdSelector />
        { children }
      </div>
    </main>
  </div>
);

RootComponent.propTypes = {
  children: React.PropTypes.node,
};

export default BaseComponent(RootComponent);
