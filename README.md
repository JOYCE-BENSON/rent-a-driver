# RentADriver

> Your Car. Our Driver. Your Freedom.

🌐 **Live Demo:** [https://rent-a-driver.vercel.app](https://rent-a-driver.vercel.app)

🔧 **API Docs:** [https://rent-a-driver-backend.onrender.com/docs](https://rent-a-driver-backend.onrender.com/docs)

A full-stack web application that connects customers with professional drivers in Nairobi. Built as a portfolio project to demonstrate full-stack development skills.

![RentADriver](frontend/src/assets/range-rover.jpg)

---

## Features

- **User Authentication** — Secure signup and login with JWT tokens
- **Driver Listings** — Browse verified professional drivers with ratings and experience
- **Instant Booking** — Book a driver with date, time, location and automatic price calculation
- **Customer Dashboard** — View and track all your bookings
- **Responsive Design** — Works on desktop and mobile

---

## Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- Axios
- React Router DOM

**Backend**
- FastAPI (Python)
- PostgreSQL
- SQLAlchemy
- JWT Authentication
- Bcrypt Password Hashing

---

## Getting Started

### Prerequisites
- Node.js v20+
- Python 3.13+
- PostgreSQL

### Backend Setup
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Create a `.env` file in the backend folder:
```
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/rentadriver
SECRET_KEY=your-secret-key
```

Run the backend:
```bash
uvicorn app.main:app --reload
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /auth/signup | Register a new user |
| POST | /auth/login | Login and get JWT token |
| GET | /drivers/ | Get all available drivers |
| GET | /drivers/{id} | Get a single driver |
| POST | /drivers/ | Add a new driver |
| POST | /bookings/ | Create a booking |
| GET | /bookings/me | Get my bookings |
| GET | /users/ | Get all users |

---

## Author

**Joyce Benson**
- GitHub: [@JOYCE-BENSON](https://github.com/JOYCE-BENSON)
- Email: bensonjoyce25@gmail.com

---

## License

This project is open source and available under the [MIT License](LICENSE).