// ! this is where we put the logic for our user to sign in and out
// *this is used to hash out passwords
import bcrypt from "bcryptjs";
// *this allows us to store the user for some amt of time from hours, days, to weeks for ex.
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";

const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;
  console.log('this is req.body in sigin of servers/controllers/user.js:',req.body)

  try {
    const existingUser = await UserModal.findOne({ email });

    if (!existingUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
    
    //* { email: existingUser.email, id: existingUser._id }, secret, { expiresIn: "1h" }; this is all the information we want to store in the token
        // *secret; is our secret password
        // *{ expiresIn: "1h" } this is our options
    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" });
    // const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: existingUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) return res.status(400).json({ message: "User already exists" });

    if(password!==confirmPassword) return res.status(400).json({ message: "Passwords don't match" });
    //* 12; this is salt aka how hard you want to make the password
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};
