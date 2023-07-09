import axios from 'axios';

const loginFetch = async ({ email, password }) => {
  let data = await axios
    .post('http://localhost:4000/api/auth/', {
      email,
      password,
    })
    .then((res) => {
      return { data: res.data, status: res.status };
    })
    .catch((err) => {
      return {
        message: err.response.data.errors[0].msg,
        status: err.response.status,
      };
    });
//   console.log(data);
  return data;
};

const signUpFetch = async ({ fullName,email, password,phoneNumber }) => {
    let data = await axios
      .post('http://localhost:4000/api/auth/signup', {
        fullName,
        email,
        password,
        phoneNumber
      })
      .then((res) => {
        return { data: res.data, status: res.status };
      })
      .catch((err) => {
        return {
          message: err.response.data.Message,
          status: err.response.status,
        };
      });
    // console.log(data);
    return data;
  };

export { loginFetch };
export {signUpFetch};
