import React from 'react';
import Tabs from '../Tabs';

const App = () => (
  <div>
    <Tabs items={['Audiences', 'Partners', 'Brands']} />
    <br />
    <br />
    <br />
    <Tabs items={['Apple', 'Orange', 'Banana', 'Mango']} />
  </div>
);

export default App;
