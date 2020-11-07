import multer from 'multer'
import { resolve, extname } from 'path'

const randomNumber = (min: number, max: number) => {
	return Math.ceil(Math.random() * (max - min) + min)
}

export default {
	storage: multer.diskStorage({
		destination: (req, res, cb) => {
			cb(null, resolve(__dirname, '..', '..', 'uploads'))
		},
		filename: (req, file, cb) => {
			cb(
				null,
				`${file.originalname.replace(
					extname(file.originalname),
					''
				)}_${Date.now()}_${randomNumber(1, 10000)}${extname(file.originalname)}`
			)
		},
	}),
}
