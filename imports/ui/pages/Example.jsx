import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react';

import { countryOptions } from '../common';

class Example extends React.Component {
  handleChange(e, { value }) {
    console.log(this);
    //  this.value = value;
  }

  handleClose = (e, valueObj) => {
    console.log('close: ');
    console.log(this.value);
  };

  render() {
    return (
      <Header as="h2" textAlign="center">
        <Image src="/ftlogo.png" />
        <p>Example</p>
        <p>(Only visible when logged in.)</p>
        <Dropdown
          placeholder="Select Country"
          fluid
          multiple
          search
          selection
          onChange={this.handleChange}
          onClose={this.handleClose}
          options={countryOptions}
        />
      </Header>
    );
  }
}
export default Example;
