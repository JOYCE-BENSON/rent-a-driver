from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine
from app import models
from app.routers import auth, drivers

app = FastAPI(title="Rent-A-Driver API", version="1.0.0")

# Allow React frontend to talk to this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create all database tables automatically
models.User.metadata.create_all(bind=engine)

# Register routers
app.include_router(auth.router)
app.include_router(drivers.router)

@app.get("/")
def root():
    return {"message": "Welcome to Rent-A-Driver API"}