# Student Marks Project

This is a full-stack web application for entering and storing student marks and calculating the average CGP. The project includes:
- **Frontend (React.js)**: A form to enter student details such as Name, Roll number, and 6 subjects with their respective marks.
- **Backend (Node.js + Express)**: An API to store the student data in MongoDB Atlas and retrieve it to display in a detailed table.

## Project Structure

- `cgp/` - React frontend (Student form and details page).
- `cgp_backend/` - Node.js + Express backend (API for saving and retrieving student data).

## Features

- React form to input student data.
- Stores data in MongoDB Atlas.
- Backend API for data handling.
- View and print student data in a details table.

---

## Getting Started

Follow the instructions below to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account and a cluster set up.
- [Git](https://git-scm.com/) for version control.

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/student-marks-project.git
   cd student-marks-project
   ```

2. There are two folders in this project:
   - `cgp`: React frontend
   - `cgp_backend`: Node.js backend

### Backend Setup (`cgp_backend`)

1. Navigate to the `cgp_backend` directory:
   ```bash
   cd cgp_backend
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `cgp_backend` directory and add your MongoDB Atlas connection string:
   ```bash
   MONGO_URI=your-mongodb-connection-string
   ```

4. Run the Node.js backend server:
   ```bash
   node server.js
   ```
   The backend will run on [http://localhost:5000](http://localhost:5000).

### Frontend Setup (`cgp`)

1. Open a new terminal window and navigate to the `cgp` directory:
   ```bash
   cd cgp
   ```

2. Install the React dependencies:
   ```bash
   npm install
   ```

3. Run the React app:
   ```bash
   npm start
   ```
   The React frontend will be available at [http://localhost:3000](http://localhost:3000).

---

## Backend API Routes

The backend server has the following routes:

- `POST /api/student`: Save student data to MongoDB.
- `GET /api/students`: Retrieve the list of all students from MongoDB.

### Example POST Request

To add a new student, send a `POST` request to:

```
POST /api/student
```

With the following JSON payload:

```json
{
  "name": "John Doe",
  "roll": "12345",
  "subjects": {
    "subject1": 80,
    "subject2": 85,
    "subject3": 90,
    "subject4": 70,
    "subject5": 75,
    "subject6": 88
  },
  "avgCGP": 81.3
}
```

---

## Environment Variables

The `.env` file is used to store environment-specific configurations such as your MongoDB connection string. Here's the expected format of the `.env` file:

```bash
MONGO_URI=your-mongo-atlas-connection-string
```

---

## Deployment

### Backend Deployment (Heroku)

To deploy the backend on Heroku:

1. Push your backend code to a GitHub repository.
2. On Heroku, create a new app.
3. Link your GitHub repository to Heroku in the app settings.
4. Set the `MONGO_URI` environment variable in Heroku:
   - Go to the app settings in Heroku.
   - Click **Reveal Config Vars**.
   - Add `MONGO_URI` and paste your MongoDB Atlas connection string.
5. Deploy the app.

### Frontend Deployment (Vercel)

To deploy the frontend on Vercel:

1. Push your frontend code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/), sign in with GitHub, and click **New Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect the React app and deploy it.

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License.
