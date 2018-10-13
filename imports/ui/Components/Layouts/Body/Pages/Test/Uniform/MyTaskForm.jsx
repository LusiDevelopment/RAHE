import React from 'react';
import {AutoForm} from 'uniforms--material-ui';
import { Taskschema } from '../../../../../../../api/Schema/Schemas';


export const MyTaskForm = () => (
    <AutoForm
        schema={Taskschema}
        onSubmit={(data) => {}/* handle data when form is submitted */}
    />
);