import React from 'react';
import { Panel1 } from './Panel1';
import { Panel2 } from './Panel2';

export const Home = () => {
    return (
        <div className="container">
            <Panel1 />
            <Panel2 />
        </div>
    );
}