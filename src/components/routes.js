import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Front from './front.js';
import Message from './message.js';
import Surprise from './surprise.js';

const AuctionsRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Front} />
            <Route exact path="/2" component={Message} />
            <Route exact path="/3" component={Surprise} />
        </Switch>
    );
};

export default AuctionsRoutes;