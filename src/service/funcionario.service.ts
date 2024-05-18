import { Funcionario } from "../model/funcionario";

export class funcionarioService{
  async create(data: any){
    try{
      return await Funcionario.create(data)
    }catch(error){
      console.log(error)
    }
  }

  async get(){
    try{
      return await Funcionario.find({})
    }catch(error){
      console.log(error)
    }
  }

  async getByCpf(cpf: string){
    try{
      let funciona = await Funcionario.findById({_cpf:cpf})

      if(!funciona){
        return 'não encontrado'
      }
      
      return funciona
    }catch(error){
      console.log(error)
    }
  }

  async update(cpf: string, data: any){
    try{
      let funciona = await Funcionario.findByIdAndUpdate({_cpf: cpf}, data, {new: true})

      if(!funciona){
        return 'não encontrado'
      }
      
      return funciona
    }catch(error){
      console.log(error)
    }
  }

  async delete(cpf: string){
    try{
      let funciona = await Funcionario.findByIdAndDelete(cpf)

      if(!funciona){
        return 'não encontrado'
      }
      
      return funciona
    }catch(error){
      console.log(error)
    }
  }
}

export const funcionarioServices = new funcionarioService()