import { Request, Response } from 'express';
import { login } from '../../src/api/controllers';

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn().mockReturnValue('accesstoken'),
}));

describe('Login controller', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {
      body: {},
    };
    mockResponse = {
      json: jest.fn(),
      sendStatus: jest.fn(),
      status: jest.fn(),
    };
  });

  it('returns error when given invalid body', () => {
    const expectedResponse = {
      error: 'Body must contain username and password',
    };

    login(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toBeCalledWith(400);
    expect(mockResponse.json).toBeCalledWith(expectedResponse);
  });

  it('returns error if password is incorrect', () => {
    mockRequest.body = {
      username: 'test',
      password: 'invalidpass',
    };

    const expectedResponse = {
      error: 'Username or password incorrect',
    };

    login(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toBeCalledWith(401);
    expect(mockResponse.json).toBeCalledWith(expectedResponse);
  });

  it('returns error if user does not exist', () => {
    mockRequest.body = {
      username: 'ghost',
      password: 'password',
    };

    const expectedResponse = {
      error: 'Username or password incorrect',
    };

    login(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toBeCalledWith(401);
    expect(mockResponse.json).toBeCalledWith(expectedResponse);
  });

  it('returns access token if login successful', () => {
    mockRequest.body = {
      username: 'test',
      password: 'validpass',
    };

    login(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toBeCalledWith(200);
    expect(mockResponse.json).toBeCalledWith({
      user: 'test',
      token: 'accesstoken',
    });
  });
});
