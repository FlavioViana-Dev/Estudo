import AppError from '@shared/errors/AppErros';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import { Repository } from '../typeorm/repositories/UsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(Repository);
    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }

    const user = usersRepository.create({ name, email, password });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
