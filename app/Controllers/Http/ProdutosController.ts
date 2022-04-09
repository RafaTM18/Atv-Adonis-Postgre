import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Produto from 'App/Models/Produto';

export default class ProdutosController {
    public async index() {
        const prod = await Produto.all()
        return{
          data:prod,
        }
    }

    public async store({ request, response }: HttpContextContract) {
        const body = request.body()
        const prod = await Produto.create(body)
    
        response.status(201)

        return {
            message: 'Produto registrado com sucesso!',
            data: prod,
        }
    }

}
