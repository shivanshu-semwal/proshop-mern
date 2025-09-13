import bcrypt from "bcryptjs";

const users = [
    {
        name: "admin user",
        email: "admin@example.com",
        password: bcrypt.hashSync("12345", 10),
        isAdmin: true,
    },
    {
        name: "jerry",
        email: "jerry@example.com",
        password: bcrypt.hashSync("12345", 10),
    },
    {
        name: "tom",
        email: "tom@example.com",
        password: bcrypt.hashSync("12345", 10),
    },
];

export default users;
