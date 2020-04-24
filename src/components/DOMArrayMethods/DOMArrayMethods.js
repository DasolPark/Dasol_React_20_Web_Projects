import React from 'react';

import './DOMArrayMethods.css';

export default class DOMArrayMethods extends React.Component {
  render() {
    return (
      <div className="dom-array-method__wrapper">
        <div className="dom-array-method__container">
          <h1>DOM Array Methods</h1>
          <p>[forEach, map, filter, sort, reduce]</p>

          <div className="dom-array-method__inner-container">
            <aside>
              <button>Add User</button>
              <button>Double</button>
              <button>Show Only Millionaire</button>
              <button>Sort</button>
              <button>Calculate</button>
            </aside>

            <main>
              <h2><strong>Person</strong> Wealth</h2>
            </main>
          </div>
        </div>
      </div>
    )
  }
}