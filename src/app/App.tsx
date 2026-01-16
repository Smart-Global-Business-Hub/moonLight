import LandingPageResponsive from "../imports/LandingPageResponsive";
import Header from "./components/Header";
import BookAppointmentDialog from "./components/BookAppointmentDialog";
import {useState} from "react";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);

  return (
    <>
      <Header onScheduleConsultation={openBooking} />
      <LandingPageResponsive onScheduleConsultation={openBooking} />
      <BookAppointmentDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
}
