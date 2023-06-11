import { User } from "../../../domain/entities/User";
import { UserRepository } from "../../../domain/repositories/UserRepository";
// import usersMongo from "./db/mongo/usersMongo.json";
import usersMySQL from "./db/mysql/usersMySQL.json";
// import  usersRedis  from "./db/redis/usersRedis.json";

export class UserRepositoryImp implements UserRepository {
  constructor() {}

  async getUserById(id: string): Promise<User | null> {
    console.log("Using MySQL!");

    const rawUser = usersMySQL.users.find((user) => user.id.toString() === id);
    return rawUser
      ? new User(
          rawUser.id.toString(),
          rawUser.name,
          rawUser.email,
          rawUser.password
        )
      : null;
  }

  async saveUser(user: User): Promise<User | null> {
    const newUser = {
      id: parseInt(user.id),
      name: user.name,
      email: user.email,
      password: user.password,
    };

    usersMySQL.users.push(newUser);
    return user;
  }
}
