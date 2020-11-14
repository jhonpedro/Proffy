import { Request, Response, NextFunction, raw } from 'express'
import { verify } from 'jsonwebtoken'

const secret = process.env.JWT_SECRET as string

interface TokenPayload {
	id: string
}

export default function loginRequired(
	req: Request,
	res: Response,
	next: NextFunction
): void {
	const raw_token = req.headers.authorization as string

	if (!raw_token) {
		res.sendStatus(401)
	}

	try {
		const [, token] = raw_token?.split(' ')

		const tokenData = verify(token, secret)

		const { id } = tokenData as TokenPayload

		req.user = {
			id,
		}

		return next()
	} catch (error) {
		res.status(401).json({ message: 'Token error' })
	}
}
