import React, { Fragment } from 'react';

import { Stamp } from '../Stamp/Stamp'

const personData = {
    id: "1",
    name: "Dom"
}

export const App = () => {
    return (
        <Fragment>
            <h1>Welcome!</h1>
            <Stamp isHidden={true}>stamp 1</Stamp>
            <Stamp data={personData}>stamp 2</Stamp>
            <Stamp><span>stamp 3</span></Stamp>
            <Stamp>stamp 4</Stamp>            
        </Fragment>
    )
};