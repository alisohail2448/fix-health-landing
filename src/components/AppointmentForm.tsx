import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import "../styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

interface Doctor {
  id: number;
  name: string;
  expertise: string;
  city: string;
}

function AppointmentForm(): JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [patientName, setPatientName] = useState<string>("");
  const [patientNumber, setPatientNumber] = useState<string>("");
  const [chiefComplaints, setChiefComplaints] = useState<string>("");
  const [previousExperience, setPreviousExperience] = useState<boolean>(false);
  const [age, setAge] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [company, setCompany] = useState<string>("");

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [doctorsList, setDoctorsList] = useState<Doctor[]>([]);

  const fetchDoctorsList = async (city: string): Promise<void> => {
    try {
      const response = await axios.get(`https://doctors-api.vercel.app/api/doctors?city=${city}`);
      const doctorsData: Doctor[] = response.data;
      console.log("Response-->", response)

      setDoctorsList(doctorsData);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  useEffect(() => {
    fetchDoctorsList(city);
  }, [city]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Validate form inputs
    const errors: Record<string, string> = {};

    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "Patient name must be at least 8 characters";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Patient phone number must be of 10 digits";
    }

    if (!age.trim()) {
      errors.age = "Age is required";
    } else if (parseInt(age, 10) < 1 || parseInt(age, 10) > 150) {
      errors.age = "Invalid age";
    }

    if (!city.trim()) {
      errors.city = "City is required";
    }

    if (!company.trim()) {
      errors.company = "Company is required";
    }

    if (!chiefComplaints.trim()) {
      errors.chiefComplaints = "Chief complaints are required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setPatientName("");
    setPatientNumber("");
    setChiefComplaints("");
    setPreviousExperience(false);
    setAge("");
    setCity("");
    setCompany("");
    setFormErrors({});

    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <div className="form-container">
        <h2 className="form-title">
          <span>Book Appointment Online</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Patient Full Name:
            <input
              type="text"
              value={patientName}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && <p className="error-message">{formErrors.patientName}</p>}
          </label>

          <br />
          <label>
            Patient Phone Number:
            <input
              type="text"
              value={patientNumber}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
          </label>

          <br />
          <label>
            Age:
            <input
              type="text"
              value={age}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(e.target.value)}
              required
            />
            {formErrors.age && <p className="error-message">{formErrors.age}</p>}
          </label>

          <br />
          <label>
            City:
            <input
              type="text"
              value={city}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
              required
            />
             <p style={{ fontSize: '14px' }} >Type City for Api Work: Pune or Mumbai</p>
            {formErrors.city && <p className="error-message">{formErrors.city}</p>}
          </label>

          <br />
          <label>
            Company:
            <input
              type="text"
              value={company}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setCompany(e.target.value)}
              required
            />
            {formErrors.company && <p className="error-message">{formErrors.company}</p>}
          </label>

          <br />
          <label>
            Chief Complaints:
            <textarea
              className="textArea"
              value={chiefComplaints}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setChiefComplaints(e.target.value)}
              required
            />
            {formErrors.chiefComplaints && <p className="error-message">{formErrors.chiefComplaints}</p>}
          </label>

          <br />
          {parseInt(age, 10) > 40 && (
            <label style={{ display: 'flex', alignItems: 'center' }}>
              Previous Experience with Physiotherapy:
              <input
                style={{ width: '20px', marginLeft: '10px' }}
                type="checkbox"
                checked={previousExperience}
                onChange={() => setPreviousExperience(!previousExperience)}
              />
            </label>
          )}

          <div className="doctors-list">
            {city ? <h3>Available Doctors in {city}</h3> : ''}
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '5px', textDecoration: 'none', listStyle: 'none' }}>
              {doctorsList.map((doctor) => (
                <li key={doctor.id}>
                  {doctor.name} - {doctor.expertise}
                </li>
              ))}
            </ul>
          </div>

          <br />
          <button type="submit" className="text-appointment-btn">
            Confirm Appointment
          </button>

          <p className="success-message" style={{ display: isSubmitted ? "block" : "none" }}>
            Appointment details have been sent to the patient's phone number via SMS.
          </p>
        </form>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
