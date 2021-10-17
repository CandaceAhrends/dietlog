//dummied up response
export const user = Promise.resolve(userData());

function userData() {
  return {
    userId: 123,
    firstName: "Candace",
    lastName: "Ahrends",
    permissions: {},
    lastLogin: null,
  };
}
