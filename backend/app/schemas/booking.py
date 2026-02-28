from pydantic import BaseModel
from typing import Optional

class BookingCreate(BaseModel):
    driver_id: int
    date: str
    hours: int
    location: str

class BookingResponse(BaseModel):
    id: int
    user_id: int
    driver_id: int
    date: str
    hours: int
    location: str
    status: str
    total_price: float

    class Config:
        from_attributes = True

class BookingUpdate(BaseModel):
    status: Optional[str] = None