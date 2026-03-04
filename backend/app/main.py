from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine
from app import models
from app.routers import auth, drivers, bookings, users

app = FastAPI(title="Rent-A-Driver API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.User.metadata.create_all(bind=engine)

app.include_router(auth.router)
app.include_router(drivers.router)
app.include_router(bookings.router)
app.include_router(users.router)

@app.get("/")
def root():
    return {"message": "Welcome to Rent-A-Driver API"}