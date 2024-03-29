import { User } from "../../entities/User";
import { UserRepository } from "../UserRepository";

// Database dependency
export class GhostUserRepository implements UserRepository {
    private users: User[] = [];
    public async findByEmail(email: string): Promise<User> {
        const user = this.users.find(u => u.email == email);

        return user;
    }
    public async save(user: User): Promise<void> {
        this.users.push(user);
    }
}