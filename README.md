# Boilerplate Auth Service - TypeScript
Standard template for a base authentication service, built with TypeScript.

## Running the app
You can run a development version of the service with the following command:

```bash
$ yarn develop
```

This will run the service using nodemon, so any changes in the code will be reflected.

The microservice is dockerised. To build the image use the following command:

```bash
$ docker build --tag auth-service:latest . 
```

To run the newly built image, run the following command:

```bash
$ docker run --publish 8000:8000 --name auth auth-service:latest
```

## Running tests
The project uses Jest for unit tests, and you can execute all tests by using the yarn command `test`.

```bash
$ yarn test
```

All tests can be found inside the `$ROOT/tests` directory of the repository.