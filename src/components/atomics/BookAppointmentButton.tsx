// components/BookAppointmentButton.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AppointmentModal from "./AppointmentModal";
import { Button } from "@/components/atomics/button";

const BookAppointmentButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button
        size="header"
        className="flex items-center"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src="/icons/calendar.svg"
          alt="calendar-icon"
          height={0}
          width={0}
          className="h-5 w-5 mr-2.5"
        />
        Book Appointment
      </Button>

      <AppointmentModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default BookAppointmentButton;
