# Health Plus App

## Overview

Health Plus is a minimalistic healthcare application designed to provide users with a seamless experience in booking medical consultations. The app features an attractive hero image, a user-friendly consultation booking form, and testimonials from satisfied users.

## Features

1. **An Attractive Hero Image**
   - The app welcomes users with a visually appealing hero image that sets a positive tone for their healthcare journey.

2. **Consultation Booking Form**
   - The consultation booking form follows a step-by-step process:
     1. **Name + Phone number**
     2. **Age + City + Company**
     3. **Chief complaints**
     4. **Previous experience with physiotherapy**
     5. **Display best available doctors filtered for the user's city**

3. **Testimonials**
   - Users can read testimonials from individuals who have benefited from Health Plus. This helps build trust and confidence in the healthcare services offered.

## API for Fetching Available Doctors

The application relies on a simple API (`doctors.json`) to retrieve information about available doctors. The API returns details such as the doctor's name, expertise, and city.

### Doctors JSON Format

```json
{
  "doctors": [
    { "id": 1, "name": "Dr. Smith", "expertise": "Orthopedic Surgeon", "city": "New York" },
    { "id": 2, "name": "Dr. Johnson", "expertise": "Cardiologist", "city": "New York" },
    { "id": 3, "name": "Dr. Patel", "expertise": "Dermatologist", "city": "Los Angeles" }
    // Add more doctors as needed
  ]
}
