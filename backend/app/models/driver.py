from sqlalchemy import Column, Integer, String, Boolean, Float, DateTime
from sqlalchemy.sql import func
from app.database import Base

class Driver(Base):
    __tablename__ = "drivers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    photo = Column(String, nullable=True)
    experience = Column(Integer, nullable=False)
    price_per_hour = Column(Float, nullable=False)
    rating = Column(Float, default=0.0)
    available = Column(Boolean, default=True)
    phone = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())