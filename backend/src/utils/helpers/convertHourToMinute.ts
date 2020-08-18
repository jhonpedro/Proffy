export default function ConvertHourToMinute(time: string) {
  const [hour, minutes] = time.split(':').map(Number)

  const timeInMinutes = (hour * 60) + minutes

  return timeInMinutes
}