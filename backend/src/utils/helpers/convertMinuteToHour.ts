export default function convertMinuteToHour(minutes: number) {
	let hours = 0

	while (true) {
		if (minutes < 60) {
			break
		}
		minutes -= 60
		hours++
	}

	return `${hours > 9 ? hours : '0' + hours}:${
		minutes > 9 ? minutes : '0' + minutes
	}`
}
