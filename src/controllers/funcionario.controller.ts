import { funcionarioServices } from "../service/funcionario.service";
import { Request, Response } from "express";

class funcionarioController{
  create = async(req: Request, res: Response) => {
    let data = {
      cpf: req.body.cpf,
      nome: req.body.nome,
      cargo: req.body.cargo,
      departamento: req.body.departamento,
    }

    try{
      res.status(201).send(await funcionarioServices.create(data))
    }catch(error){
      res.send(error)
    }
  }

  get = async(req: Request, res: Response) => {
    res.send(await funcionarioServices.get())
  }

  getByCpf = async(req: Request, res: Response) => {
    res.send(await funcionarioServices.getByCpf(req.params.cpf))
  }

  update = async(req: Request, res: Response) => {
    res.send(await funcionarioServices.update(req.params.cpf, req.body))
  }

  delete = async(req: Request, res: Response) => {
    await funcionarioServices.delete(req.params.cpf)
    res.send('sucesso')
  }
}

export const FuncionarioController = new funcionarioController()