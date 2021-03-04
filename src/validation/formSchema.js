import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup.string()
        .trim()
        .lowercase('Username must be lower case')
        .required('Username is required, please fill out.')
        .min(2, 'Username must be 2 characters or longer.'),
    email: yup.string()
        .email('Email address must be valid.')
        .required('Email is required.'),
    password: yup.string()
        .required('Password is required')
        .min(7, 'Password must be 7 characters or longer.'),
    title: yup.string()
        .required('Title is required.'),
    source: yup.string()
        .required('Source is required.'),
    ingredients: yup.string()
        .required('Ingredients is required.'),
    instructions: yup.string()
        .required('Instructions is required.'),
    category: yup.string()
        .required('Category is required.'),
});
export default formSchema;