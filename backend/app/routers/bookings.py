from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app.models.booking import Booking
from app.models.driver import Driver
from app.schemas.booking import BookingCreate, BookingResponse, BookingUpdate

router = APIRouter(prefix="/bookings", tags=["Bookings"])

@router.post("/", response_model=BookingResponse)
def create_booking(booking: BookingCreate, user_id: int, db: Session = Depends(get_db)):
    # Check if driver exists and is available
    driver = db.query(Driver).filter(Driver.id == booking.driver_id).first()
    if not driver:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Driver not found"
        )
    if not driver.available:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Driver is not available"
        )
    
    # Calculate total price
    total_price = driver.price_per_hour * booking.hours
    
    # Create booking
    new_booking = Booking(
        user_id=user_id,
        driver_id=booking.driver_id,
        date=booking.date,
        hours=booking.hours,
        location=booking.location,
        total_price=total_price
    )
    
    db.add(new_booking)
    db.commit()
    db.refresh(new_booking)
    return new_booking

@router.get("/me", response_model=List[BookingResponse])
def get_my_bookings(user_id: int, db: Session = Depends(get_db)):
    bookings = db.query(Booking).filter(Booking.user_id == user_id).all()
    return bookings

@router.get("/", response_model=List[BookingResponse])
def get_all_bookings(db: Session = Depends(get_db)):
    bookings = db.query(Booking).all()
    return bookings

@router.patch("/{booking_id}", response_model=BookingResponse)
def update_booking_status(booking_id: int, booking_update: BookingUpdate, db: Session = Depends(get_db)):
    booking = db.query(Booking).filter(Booking.id == booking_id).first()
    if not booking:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Booking not found"
        )
    if booking_update.status:
        booking.status = booking_update.status
    db.commit()
    db.refresh(booking)
    return booking