import React, {Component}  from 'react';
import {ValidatedForm,AutoForm,AutoFields,ErrorsField,SubmitField,AutoField} from 'uniforms--material-ui';


export default class MAutoForm extends AutoForm {
    onSubmit () {
        // If you don't care about this Promise
        return super.onSubmit(...arguments).then(() => this.reset());

    }
}