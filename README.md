# Sydney Time API

API service that provides current time information for Sydney timezone.

## Endpoint

- `GET /time` - Returns current Sydney time
- `GET /health` - Health check endpoint

## Running Locally

```bash
npm install
npm start
```

## Running with Docker

```bash
docker build -t api-sydney .
docker run -p 3004:3004 api-sydney
```