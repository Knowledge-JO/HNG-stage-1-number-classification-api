# Number Classification API

This is a simple Node.js API built with Express that classifies numbers by checking if they are prime, perfect, and provides additional number properties along with a fun fact using the Numbers API.

## Features

- Check if a number is **prime**
- Check if a number is **perfect**
- Check if a number is **even or odd**
- Get additional mathematical properties of a number **e.g armstrong**
- Get the sum of digits of a number
- Fetch a **fun fact** about the number from the Numbers API

## Local and Public URLs

- **Local:** `http://localhost:3000`
- **Public:** `https://number-classification-api-fut3.onrender.com`

## Technologies Used

- **Node.js**
- **Express.js**
- **CORS**
- **dotenv**

---

## Installation

### 1. Clone the Repository

```sh
git clone https://github.com/Knowledge-JO/HNG-stage-1-number-classification-api.git
```

### 2. Navigate to the Project Directory

```sh
cd your-repo-name
```

### 3. Install Dependencies

```sh
npm install
```

### 4. Start the Server

```sh
npm start
```

The server will start on `http://localhost:3000`

---

## API Endpoints

### Classify a Number

#### Request:

```sh
GET /api/classify-number?number=28
```

#### Response:

```json
{
  "number": 28,
  "is_prime": false,
  "is_perfect": true,
  "properties": ["even"],
  "digit_sum": 10,
  "fun_fact": "28 is a perfect number."
}
```

### 400 Bad request

If invalid query param is passed

```json
{
  "number": "<param>",
  "error": true
}
```

### 404 Handler

If an unknown endpoint is accessed:

```json
{
  "status": 404,
  "message": "Resource not found"
}
```
