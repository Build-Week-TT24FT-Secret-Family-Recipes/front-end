import * as yup from 'yup';

const recipeFormSchema = yup.object().shape({
    title: yup.string()
        .required('Title is required.'),
    source: yup.string()
        .required('Source is required.'),
    ingredients: yup.string()
        .required('Ingredients is required.'),
    instructions: yup.string()
        .required('Instructions is required.'),
     category: yup.string()
        .oneOf(['French', 'Japanese', 'Chinese','Spanish', 'Italian'])
        .required('Category is required.'),
});
export default recipeFormSchema;