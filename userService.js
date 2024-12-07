const users = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
];

export function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
}
