// src/auth.js
import { writable, get } from 'svelte/store';
import userStore from './userStore.js';
import continueWatchingStore from './continueWatchingStore.js';
import moviesStore from './movieStore.js';
import { DANGER, MSG_STATUS } from './movieEnum.js';

// Define a sample user for demonstration purposes
const sampleUser = {
  email: 'user@example.com',
  name: 'John Doe',
  password: 'mypassword', // You should never store passwords in plain text; this is for demonstration only.
  // Other user information, if needed
};

// Initialize the store with default values
const authStore = writable({
  isLoggedIn: false,
  user: null,
});

authStore.logout = () => {
  authStore.update((state) => ({
    ...state,
    isLoggedIn: false,
    user: null,
  }));
  continueWatchingStore.update(() => []);
};

// Add the login function to the store
authStore.login = async (email, password) => {
  // Simulate an API call for authentication
  // Replace this with your actual authentication logic (e.g., calling your backend API)
  const isUserValid = await authenticateUser(email, password);

  if (isUserValid) {
    const user = await userExists(email);
    authStore.update((state) => ({
      ...state,
      isLoggedIn: true,
      user, // You would typically retrieve the user data from your backend API here.
    }));
  } else {
    // Handle login error
    return {status: MSG_STATUS[DANGER], msg: "Login failed. User doesn't exist or the password is incorrect."};
  }
};

// Add the signup function to the auth store
authStore.signup = async (user) => {
  const userAlreadyExist = await userExists(user.email);

  if(userAlreadyExist){
    return {status: MSG_STATUS[DANGER], msg: 'User already exist. Please login.'};
  }

  // Simulate an API call for user registration
  // Replace this with your actual signup logic (e.g., calling your backend API to add the user)
  const isUserCreated = await createUser(user);

  if (isUserCreated) {
    // You can handle the successful signup in your application if needed
    await authStore.login(user.email, user.password);
    // return {success: 1, msg: 'User created successfully!'}
  } else {
    // Handle signup error
    return {status: MSG_STATUS[DANGER], msg: 'Signup failed. Please try again.'};
  }
};

export default authStore;

// Replace this function with your actual authentication logic (e.g., calling your backend API)
async function authenticateUser(email, password) {
  // Simulate a delay to mimic API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Get the list of users from the userStore
  const users = get(userStore);
  
  // Find the user with the provided email
  const user = users.find(u => u.email === email);

  // Check if the user with the provided email exists and if the password matches
  return user && user.password === password;
}

// Replace this function with your actual authentication logic (e.g., calling your backend API)
async function userExists(email) {
  // Simulate a delay to mimic API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Get the list of users from the userStore
  const users = get(userStore);
  
  // Find the user with the provided email
  const user = users.find(u => u.email === email);

  // Check if the user with the provided email exists and if the password matches
  return user;
}

// Replace this function with your actual signup logic (e.g., calling your backend API to add the user)
async function createUser({name, email, password}) {
  // Simulate a delay to mimic API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Here you would typically add the user to your backend database
  // For demonstration purposes, we'll add the user to the userStore
  const newUser = { name, email, password };
  userStore.update(users => [...users, newUser]);
  return true;
}