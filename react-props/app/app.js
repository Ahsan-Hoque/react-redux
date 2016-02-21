/**
 * Created by ahsan on 2/21/16.
 */


import React from 'react';
import ReactDom from 'react-dom';

import Nav from 'ui/nav';
import Anchor from 'ui/anchor';

ReactDom.render((
    <Nav>
        <Anchor goSomewhere="http://google.com" text="Googles"/><br />
        <Anchor goSomewhere="http://twitter.com" text="Twitters"/>
    </Nav>
), document.getElementById('root'));

