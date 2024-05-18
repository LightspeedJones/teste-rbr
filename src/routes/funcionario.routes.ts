import express from 'express'
import { FuncionarioController } from '../controllers/funcionario.controller'

export const router = express.Router()

router.post('/', FuncionarioController.create)
router.get('/', FuncionarioController.get)
router.get('/:cpf', FuncionarioController.getByCpf)
router.put('/:cpf', FuncionarioController.update)
router.delete('/:cpf', FuncionarioController.delete)