// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginhandler } from "../redux/userRedux";
// import { useRouter } from "next/router";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const { isFetching, error } = useSelector((state) => state.user);

//   const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
//   const currentUser = user && JSON.parse(user).currentUser;

//   const handleClick = (e) => {
//     e.preventDefault();
//     loginhandler(dispatch, { username, password });
//   };

//   const handleUser = (e) => {
//     e.preventDefault();
//     const user = {
//       username: "user1",
//       password: "123456789",
//     };
//     loginhandler(dispatch, user);
//     // router.back();
//   };

//   useEffect(() => {
//     if (currentUser !== null) {
//       router.back();
//     }
//   }, [currentUser]);

//   return (
//     <div className="loginContainer">
//       <div>
//         <h1>SIGN IN</h1>
//         <form>
//           <input
//             placeholder="Username"
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             placeholder="Password"
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button
//             onClick={handleClick}
//             disabled={isFetching}
//           >
//             LOGIN
//           </button>
//           {error && <span>Wrong Credential entered...</span>}

//           <button
//             onClick={handleUser}
//             disabled={isFetching}
//           >
//             LOGIN AS USER
//           </button>
//           <div>
//             <a href="/register">
//               CREATE A NEW ACCOUNT
//             </a>
//             <a href="/">
//               GO TO HOMEPAGE
//             </a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
