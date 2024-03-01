import { writeCookie } from "../common";
// import { getTokenFromCookie } from "../common";

// SIGN UP
export const signupuUser = async (username, email, password) => {
  const response = await fetch("http://localhost:5002/users/signUp", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });

  const data = await response.json();
  return data;
};

// LOG IN
export const login = async (username, password) => {
  console.log("click");
  const response = await fetch("http://localhost:5002/users/logIn", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const userData = await response.json();
  writeCookie("jwt_token", userData.user.token, 3);

  //   writeCookie("jwt_token", userData.user.token, 7);
  return userData;
};

// AUTH CHECK

export const authCheck = async (jwt) => {
  try {
    const response = await fetch("http://localhost:5002/users/authCheck", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      //
    });
    const data = await response.json();
    return data;
    //
  } catch (error) {
    console.log(error);
  }
};

// GET ALL USERS

// export const getAll = async () => {
//   let token = getTokenFromCookie("jwt_token");
//   console.log("click");
//   const response = await fetch("http://localhost:5002/users/getUsers", {
//     method: "GET",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   const data = await response.json();
//   console.log(data);
//   return data;
// };

// // AUTH CHECK
// export const authCheck = async (jwt) => {
//   try {
//     const response = await fetch("http://localhost:5002/users/authCheck", {
//       method: "GET",
//       mode: "cors",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${jwt}`,
//       },
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default { signupuUser, login, getAll, authCheck };
