/* 
1.go to firebase.google.com & Create a Firebase project (Step 1 of 3)

2.then Adding firebase app > web>register the app

3.Install Firebase using npm : npm install firebase

4.Initialize Firebase in my src folder> rename firebase.init.js then import getAuth to export auth (for example: const auth = getAuth(app)

export default auth;) 

5. go to https://console.firebase.google.com/project/ema-john-authentications/authentication/providers and enable provider what provider i want

6. create login / signup components & setup route

7. attached form field handler and form submit handler 

8.go to https://github.com/CSFrequency/react-firebase-hooks & copy this "npm install --save react-firebase-hooks" 
  and install in your project for Auth hooks

9. then go Documentation > Authentication Hooks> useCreateUserWithEmailAndPassword >
10. #SIGNUP:- import 'useCreateUserWithEmailAndPassword(auth)' from react firebase hooks and also 'createUserWithEmailAndPassword(email,password);' for create user account
 
11.IF User acc created then redirect to the expected page example:'const navigate = useNavigate();'

11. #SIGNIN:- import 'useSignInWithEmailAndPassword(auth)' from react firebase hooks and also 'SignInWithEmailAndPassword(email,password);' for user SIGN IN account
12. create requireAuth componemt ==> check user exists also track visitor location
13.in routes wrap protected component by using require auth compo.


_____________________


Set up Firebase Hosting
1.npm install -g firebase-tools (one time)
2.firebase login (one time)
3.firebase init ( each project for one time)
4.npm run build 
5.firebase deploy
*/