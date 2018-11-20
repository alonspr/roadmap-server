# Server

Node, Express and MongoDB REST Service

## Installation
```
npm install
```

## Run
```
mongod

npm run dev
```

## Build and serve
```
npm run build
npm run serve
```

## Usage

Get all items
```
curl -X GET http://localhost:5000/api/item
```

Create new user
```
 curl -X POST http://localhost:5000/api/item -H "Content-Type: application/json" -d '{"name":"client 1", "age": 6, "price": 6000, "phone": "0505354545"}'
```

Update item
```
curl -X PUT http://localhost:5000/api/item/10 -H "Content-Type: application/json" -d '{"name":"client 1"}'
```

Delete item
```
curl -X DELETE http://localhost:5000/api/item/10
```
