import { render } from '@testing-library/react';
import React from 'react';
import './claims.css';


const Claims: React.FC<any> = () => {
    /*<div>
      <p>Hello</p>
    </div>*/
  return (
    <div className="content">
      <div className="header-region">
      <h2>My File Claims</h2>
        <button className="rev-btn" type="button">File New Claim</button>
        
      </div>
      <hr />
      <table>
        <tr>
          <th>Claim ID</th>
          <th>Claim Type</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Surgery</td>
          <td>I need to take my face off!</td>
          <td>APPROVED</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Medication</td>
          <td>I need cancer meds</td>
          <td>PENDING</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Other</td>
          <td>Deny this one, dummy.</td>
          <td>DENIED</td>
        </tr>
      </table>
    </div>
  );
}
export default Claims;