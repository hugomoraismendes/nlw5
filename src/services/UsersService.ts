import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
    private usersRepository: Repository<User>;

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }
    async create(email: string) {
        const userExists = await this.findByEmail(email);

        if (userExists) {
            return userExists;
        }

        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);

        return user;
    }

    async findByEmail(email: string) {
        const emailUsers = await this.usersRepository.findOne({
            email
        });

        return emailUsers;
    }
}

export { UsersService };