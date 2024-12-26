import bcrypt from 'bcryptjs';

const newPassword = "123456";  // This is the new password you want to set
const salt = bcrypt.genSaltSync(10);  // Generate a salt
const hashedPassword = bcrypt.hashSync(newPassword, salt);  // Hash the password

console.log("Hashed Password:", hashedPassword);
