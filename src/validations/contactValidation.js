import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
   fullname: Yup.string().max(10, 'Name should be less than 11 characters').required('* Name is required'),
   avatar: Yup.string().url('image-url is not valid, please enter a valid url').nullable(),
   phone: Yup.string().matches(/^[0-9]*$/, 'Phone number is not valid').min(10, 'Phone number should be between 10 and 11 digits').max(11, 'Phone number should be between 10 and 11 digits').required('* Phone number is required'),
   email: Yup.string().email('Email is not valid').nullable(),
   home_address: Yup.string().nullable(),
   job: Yup.string().nullable(),
   group: Yup.string().nullable(),
})