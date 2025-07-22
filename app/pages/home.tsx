import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import React from "react";

const HomePage = () => {
  const [date, setDate] = React.useState<Date>()

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
        <Button>Button</Button>
        <Calendar mode="single" selected={date} onSelect={setDate} />
    </main>
  );
};

export default HomePage;
