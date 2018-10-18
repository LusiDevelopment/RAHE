import React from 'react';
import {AutoForm} from 'uniforms--material-ui';
import { TasksSchema } from '../../../../../../../api/Schema/Schemas';


export const MySimpleForm = () => (
    <AutoForm
        schema={TasksSchema}
        onSubmit={(data) => {}/* handle data when form is submitted */}
    />
);

