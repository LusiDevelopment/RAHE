import React from 'react';
import {AutoForm} from 'uniforms--material-ui';
import { BlogPostSchema } from '../../../../../../../api/Schema/UniformSchema';

export const MySimpleForm = () => (
    <AutoForm
        schema={BlogPostSchema}
        onSubmit={(data) => {}/* handle data when form is submitted */}
    />
);