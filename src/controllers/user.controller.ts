import { RequestHandler } from "express";
import { users } from "../database/user.db";

export const Register: RequestHandler = (req, res) => {
  const { name, email, password } = req.body;

  const findUserName = users.find((user) => user.name == name);
  if (findUserName) {
    res.send("Username is already taken");
    return;
  }

  const findUser = users.find((user) => user.email === email);

  if (findUser) {
    res.json("Email already in use");
    return;
  }

  const lastUser = users[users.length - 1];
  const newUserID = lastUser?._id ? Number(lastUser._id) + 1 : 1;

  const newUser = { _id: newUserID.toString(), name, email, password };
  users.push(newUser);
  res.send("User registered successfully");
};

export const Login: RequestHandler = (req, res) => {
  const { email, name, password } = req.body;

  const user = users.find((user) => user.email === email || user.name === name);

  if (!user) {
    res.send("Invalid username or password");
    return;
  }

  if (user.password !== password) {
    res.send("Invalid username or password");
    return;
  }

  res.json(user);
};

export const getProfile: RequestHandler = (req, res) => {
  const { _id } = req.body;

  const profile = users.find((user) => user._id == _id);

  if (!profile) {
    res.send("This profile doesnt exist");
    return;
  }

  console.log(profile);
  res.json(profile);
};
