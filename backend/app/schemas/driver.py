from pydantic import BaseModel
from typing import Optional

class DriverCreate(BaseModel):
    name: str
    experience: int
    price_per_hour: float
    phone: Optional[str] = None

class DriverResponse(BaseModel):
    id: int
    name: str
    photo: Optional[str] = None
    experience: int
    price_per_hour: float
    rating: float
    available: bool
    phone: Optional[str] = None

    class Config:
        from_attributes = True

class DriverUpdate(BaseModel):
    available: Optional[bool] = None
    price_per_hour: Optional[float] = None
    phone: Optional[str] = None