import { getCustomRepository } from 'typeorm';
import Entity from '../typeorm/entities/User';
import { Repository } from '../typeorm/repositories/UsersRepository';

class ListUserService {
  public async execute(): Promise<Entity[]> {
    const repository = getCustomRepository(Repository);
    const list = repository.find();
    return list;
  }
}

export default ListUserService;
