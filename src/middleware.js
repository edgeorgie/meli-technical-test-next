import { NextResponse } from 'next/server'

const middleware = (req) => {
	const url = req.nextUrl.clone()
	if (url.pathname === '/') {
		url.pathname = '/items'
		return NextResponse.redirect(url)
	}
}

export default middleware
