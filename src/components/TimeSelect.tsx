interface TimeSelectProps {
  value: string;
  onChange: (val: string) => void;
  step: 30 | 60;
}

export default function TimeSelect({ value, onChange, step }: TimeSelectProps) {
  const times = [];

  // Generate time options based on the step
  for (let i = 0; i < 24; i++) {
    times.push((i < 10 ? "0" + i : i) + ":00");
    if (step === 30) {
      times.push((i < 10 ? "0" + i : i) + ":30");
    }
  }

  return (
    <>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {times.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
    </>
  );
}
