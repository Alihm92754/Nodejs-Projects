import * as yup from 'yup';

const MINIMUM_LENGTH = {
  name: 4,
  city: 2,
  country: 3,
  email: 10
}

const MAXIMUM_LENGTH = {
  name: 25,
  city: 30,
  country: 30,
  email: 100
}

export const getUser = {
    schema: {
      params: {
        yupSchema: yup.object().shape({
            id: yup.number().required(),
        })
      },
    },
}

export const addUser = {
    schema: {
      body: {
        yupSchema: yup.object().shape({
            name: yup.string().required().min(MINIMUM_LENGTH.name).max(MAXIMUM_LENGTH.name),
            email: yup.string().email().min(MINIMUM_LENGTH.email).max(MAXIMUM_LENGTH.email),
            city: yup.string().required().min(MINIMUM_LENGTH.city).max(MAXIMUM_LENGTH.city),
            country: yup.string().required().min(MINIMUM_LENGTH.country).max(MAXIMUM_LENGTH.country),
        })
      },
    },
};

export const updateUser = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup.number().required(),
      })
    },
    body: {
      yupSchema: yup.object().shape({
          name: yup.string().required().min(MINIMUM_LENGTH.name).max(MAXIMUM_LENGTH.name),
          email: yup.string().email().min(MINIMUM_LENGTH.email).max(MAXIMUM_LENGTH.email),
          city: yup.string().required().min(MINIMUM_LENGTH.city).max(MAXIMUM_LENGTH.city),
          country: yup.string().required().min(MINIMUM_LENGTH.country).max(MAXIMUM_LENGTH.country),
      })
    },
  },
};

export const deleteUser = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
          id: yup.number().required(),
      })
    },
  },
};