import * as React from 'react';
import Layout from './containers/Layout'

import "./App.css";

export default (props) => (
    <Layout>
        {props.children}
    </Layout>
)