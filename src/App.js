import React, { Component } from 'react';
import Customer from './components/Customer';

import './App.css';

const customers = [{
    'id': 1,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : 'hong',
    'birthday': '910108',
    'gender' : 'M',
    'job' : 'Univ'
},{
  'id': 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : 'gil',
  'birthday': '910108',
  'gender' : 'M',
  'job' : 'Univ'
},
{
  'id': 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : 'dong',
  'birthday': '910108',
  'gender' : 'M',
  'job' : 'Univ'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return(
              <Customer
                  key={c.id}
                  id = {c.id}
                  image ={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
            );
          })
        }
      </div>
     
    );
  }
}

export default App;
