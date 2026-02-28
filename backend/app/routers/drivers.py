from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app.models.driver import Driver
from app.schemas.driver import DriverCreate, DriverResponse, DriverUpdate

router = APIRouter(prefix="/drivers", tags=["Drivers"])

@router.get("/", response_model=List[DriverResponse])
def get_all_drivers(db: Session = Depends(get_db)):
    drivers = db.query(Driver).filter(Driver.available == True).all()
    return drivers

@router.get("/{driver_id}", response_model=DriverResponse)
def get_driver(driver_id: int, db: Session = Depends(get_db)):
    driver = db.query(Driver).filter(Driver.id == driver_id).first()
    if not driver:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Driver not found"
        )
    return driver

@router.post("/", response_model=DriverResponse)
def create_driver(driver: DriverCreate, db: Session = Depends(get_db)):
    new_driver = Driver(
        name=driver.name,
        experience=driver.experience,
        price_per_hour=driver.price_per_hour,
        phone=driver.phone
    )
    db.add(new_driver)
    db.commit()
    db.refresh(new_driver)
    return new_driver

@router.patch("/{driver_id}", response_model=DriverResponse)
def update_driver(driver_id: int, driver_update: DriverUpdate, db: Session = Depends(get_db)):
    driver = db.query(Driver).filter(Driver.id == driver_id).first()
    if not driver:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Driver not found"
        )
    for key, value in driver_update.dict(exclude_unset=True).items():
        setattr(driver, key, value)
    db.commit()
    db.refresh(driver)
    return driver