// import AppError from '@shared/errors/AppErros';
// import { getCustomRepository } from 'typeorm';
// import User from '../typeorm/entities/User';
// import { UserRepository } from '../typeorm/repositories/UsersRepository';

// interface IRequest {
//   id: string;
// }

// class ShowProductService {
//   public async execute({ id }: IRequest): Promise<Product | undefined> {
//     const productsRepository = getCustomRepository(ProductRepository);

//     const product = await productsRepository.findOne(id);

//     if (!product) {
//       throw new AppError('Product not found');
//     }

//     return product;
//   }
// }

// export default ShowProductService;
