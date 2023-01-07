import { EntityRepository, Repository as R } from 'typeorm';
import User from '../entities/User';

@EntityRepository(User)
export class Repository extends R<User> {
  public async findByName(name: string): Promise<User | undefined> {
    const user = this.findOne({ where: { name } });
    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = this.findOne({ where: { id } });
    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.findOne({ where: { email } });
    return user;
  }
}
