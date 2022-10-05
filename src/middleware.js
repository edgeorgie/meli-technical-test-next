import { NextResponse } from 'next/server'

const middleware = (req) => {
	const url = req.nextUrl.clone()
	if (url.pathname === '/404') {
		url.pathname = '/items'
		return NextResponse.redirect(url)
	}
}

export default middleware
