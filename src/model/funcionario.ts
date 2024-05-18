import { Schema, model } from "mongoose";

interface IFuncionario{
  cpf: string,
  nome: string,
  cargo: string,
  departamento: string,
}

const schema = new Schema<IFuncionario>({
  cpf: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  cargo: {
    type: String,
    // required: true
  },
  departamento: {
    type: String,
    // required: true
  }
})

export const Funcionario = model<IFuncionario>('Funcionario', schema)