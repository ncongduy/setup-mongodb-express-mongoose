import UserModel, { UserType } from './user.model';

const findAllUser = async () => {
  return await UserModel.find();
};

const findUser = async (id: string) => {
  const foundUser = await UserModel.findById(id);

  if (!foundUser) throw Error('User does not exist.');

  return foundUser;
};

const createUser = async (data: UserType) => {
  return await UserModel.create(data);
};

const updateUser = async (data: UserType, id: string) => {
  const newUpdateUser = await UserModel.findByIdAndUpdate(id, data, { new: true });

  if (!newUpdateUser) throw Error('User does not exist.');

  return newUpdateUser;
};

const deleteUser = async (id: string) => {
  const foundAndDeleteUser = await UserModel.findByIdAndDelete(id);

  if (!foundAndDeleteUser) throw Error('User does not exist.');

  return foundAndDeleteUser;
};

export default { findAllUser, findUser, createUser, updateUser, deleteUser };
