# Boiletplate Auth Service - TS
Standard template for a base authentication service.

## Running the app
The microservice is dockerised. To build the image use the following command:
```bash
docker build --tag auth-service:latest . 
```

To run the newly built image, run the following command:
```bash
docker run --publish 8000:8000 --name auth auth-service:latest
```