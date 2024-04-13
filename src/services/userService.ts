let data: any = [];
export const userService = {
  getAll() {
    return data;
  },
  getById(id: string) {
    return data.find((x: any) => x.id == id);
  },
  notExist(login: string) {
    const user = data.find((x: any) => x.login === login);
    return user === undefined;
  },
  create(x: any) {
    const newUser = { ...x, id: Date.now().toString() };
    data.push(newUser);
    return newUser;
  },
  delete(id: string) {
    data = data.filter((x: any) => x.id != id);
  },
  update(id: string, x: any) {
    const index = data.findIndex((obj: any) => obj.id === id);
    const userUpdate = { ...x, id: id };
    if (index !== -1) {
      data[index] = userUpdate;
    }
    return userUpdate;
  },
};
