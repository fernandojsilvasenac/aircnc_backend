const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/Booking.controller')

// localhost:3335/bookings/113131313131/spots

router.post('/:spot_id/spots', BookingController.store);
router.post('/:booking_id/approvals', BookingController.storeApproval)
router.post('/:booking_id/rejections', BookingController.storeRejection)

module.exports = router;