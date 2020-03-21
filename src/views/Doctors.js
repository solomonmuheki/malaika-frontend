/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from 'react';

export default function Doctors(props) {
  return (
    <li className="employee">
      <div>
        <b>Full Name:</b> {props.fullName}
      </div>
      <div>
        <b>Gender:</b> {props.gender}
      </div>
    </li>
  );
}
