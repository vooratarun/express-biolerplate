const allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers'],
};

const roles = Object.keys(allRoles);
// const roleRights = new Map(Object.entries(allRoles));

// console.log("roles", roles);

let roleRights = new Map();
roleRights.set("user",["getUsers","manageUsers"]);
roleRights.set("admin",["getUsers","manageUsers"])

// console.log("roleRights",roleRights)


module.exports = {
  roles,
  roleRights,
};
