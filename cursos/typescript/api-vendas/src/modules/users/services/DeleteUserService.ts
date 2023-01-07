// import AppError from '@shared/errors/AppErros';
// import { getCustomRepository } from 'typeorm';
// import User from '../typeorm/entities/User';
// import { UserRepository } from '../typeorm/repositories/UsersRepository';

// interface IRequest {
//   id: string;
// }

// class DeleteProductService {
//   public async execute({ id }: IRequest): Promise<void> {
//     const productsRepository = getCustomRepository(ProductRepository);

//     const product = await productsRepository.findOne(id);

//     if (!product) {
//       throw new AppError('Product not found');
//     }

//     await productsRepository.remove(product);
//   }
// }

// export default DeleteProductService;
