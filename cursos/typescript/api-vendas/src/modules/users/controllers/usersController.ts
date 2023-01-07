import { Request, Response } from 'express';
import CreateService from '../services/CreateUserService';
// import DeleteProductService from '../services/DeleteProductService';
import ListService from '../services/ListUserService';
// import ShowProductService from '../services/ShowProductService';
// import UpdateProductService from '../services/UpdateProductService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const service = new ListService();
    const list = await service.execute();
    return response.json(list);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const service = new CreateService();
    const entity = await service.execute({ name, email, password });

    return response.json(entity);
  }
}
