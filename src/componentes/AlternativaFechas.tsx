import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import FormLabel from "@mui/material/FormLabel";

interface AlternativaFechasProps {
  onSelectDate?: (selectedDate: string) => void;
}

export default function AlternativaFechas({ onSelectDate }: AlternativaFechasProps) {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const today = dayjs(); // fecha actual

  const handleChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
    if (newValue) {
      onSelectDate?.(newValue.format("YYYY-MM-DD")); // 👈 pasa la fecha al padre en formato ISO corto
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormLabel sx={{ margin: 3}}>Filtrar por fecha</FormLabel>
      <DesktopDatePicker
        value={selectedDate}
        onChange={handleChange}
        minDate={today} // 👈 no permite elegir fechas anteriores a hoy
        format="YYYY-MM-DD"
        slotProps={{
          textField: { fullWidth: true },
        }}
         sx={{ marginLeft: 3, marginY: 2, width: 200}}
      />
    </LocalizationProvider>
  );
}
