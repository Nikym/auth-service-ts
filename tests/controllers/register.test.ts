import { Request, Response } from 'express';
import { register } from '../../src/api/controllers';

describe('Register controller', () => {
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

    register(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toBeCalledWith(400);
    expect(mockResponse.json).toBeCalledWith(expectedResponse);
  });

  it('returns error if username length is invalid', () => {
    const expectedResponse = {
      error: 'Username must be 3 or more characters long',
    };

    mockRequest.body = {
      username: 'te',
      password: 'testing!',
    };
    register(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toBeCalledWith(400);
    expect(mockResponse.json).toBeCalledWith(expectedResponse);
  });

  it('returns error if password length is invalid', () => {
    const expectedResponse = {
      error: 'Password must be 8 or more characters long',
    };

    mockRequest.body = {
      username: 'test',
      password: 'test',
    };
    register(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toBeCalledWith(400);
    expect(mockResponse.json).toBeCalledWith(expectedResponse);
  });

  it('returns HTTP 200 if registration successful', () => {
    mockRequest.body = {
      username: 'test',
      password: 'testing!',
    };
    register(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.sendStatus).toBeCalledWith(200);
  });
});
