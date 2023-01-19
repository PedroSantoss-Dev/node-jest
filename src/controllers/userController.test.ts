import { Request } from 'express';
import { UserController } from './userController';
import { makeMockResponse } from '../mocks/mockResponse';

describe('Users controller',() => {
    const userController = new UserController();
    const mockRequest = {} as Request
    const mockResponse =  makeMockResponse()

    it('Deve listar os nossos usuários', () => {
        userController.getUser(mockRequest,mockResponse)

        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toHaveLength(3);
    })
    it('Deve criar um novo usuário',() => {
        mockRequest.body = {
            name: "Maria"
        }
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({message:`Maria foi criado com sucesso`});

    })
    it('Não deve criar novo usuário quando o campo esta em branco',() => {
        mockRequest.body = {
            name: ""
        }
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(403);
        expect(mockResponse.state.json).toMatchObject({message:"não foi possível cadastrar usuários sem nome."});
    })

})