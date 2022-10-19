import validator from 'validator';

const requiredStr = (name) => `${name} is required.`;
const invalidStr = (name) => `An invalid ${name} was provided, please provide a valid ${name}.`;
const passwordStr = () => 'Please enter a longer password.';

export const validateSignUp = (formValues) => {
    window.formValues = formValues
    if(!formValues.first_name) {
        return requiredStr('First name');
    }
    if(formValues.first_name.length <= 2) {
        return invalidStr('first name');
    }
    if(!formValues.last_name) {
        return requiredStr('Last name');
    }
    if(formValues.last_name.length <= 2) {
        return invalidStr('last name');
    }
    if(!formValues.email) {
        return requiredStr('Email');
    }
    if(!validator.isEmail(formValues.email)) {
        return invalidStr('Email');
    }
    if(!formValues.password) {
        return requiredStr('Password');
    }
    if(formValues.password.length <= 3) {
        return passwordStr();
    }

    return 'valid';
}

export const validateLogin = (formValues) => {
    if(!formValues.email) {
        return requiredStr('Email');
    }
    if(!validator.isEmail(formValues.email)) {
        return invalidStr('Email');
    }
    if(!formValues.password) {
        return requiredStr('Password');
    }
    if(formValues.password.length <= 3) {
        return passwordStr();
    }

    return 'valid';
}

export const validateNewVideo = (formValues) => {
    window.formValues = formValues
    if(!formValues.title) {
        return requiredStr('Title');
    }
    if(!formValues.video_url) {
        return requiredStr('Video URL');
    }
    if(!formValues.img_src) {
        return requiredStr('Image source');
    }

    return 'valid';
}