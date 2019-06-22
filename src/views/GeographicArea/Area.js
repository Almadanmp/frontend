import React, {Component} from 'react';
import US001 from "./US001";
import US002 from './US002';
import US004 from './US004';
import US006 from './US006';
import US006Redux from './US006Redux/US006Redux';

import US007Redux from './US007Redux/US007Redux';
import US010 from './US010';
import US011 from './US011';
import AreasList from './TableAreas/AreasList';

class Area extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {collapse: false};
  }

  toggle() {
    this.setState(state => ({collapse: !state.collapse}));
  }

  render() {
    return (
      <div>
        <h2>Welcome to the Geographic Area Menu</h2>
        <p></p>
        <AreasList/>
        <US001/>
        <US007Redux/>
      </div>
    );
  }
}

export default Area;
