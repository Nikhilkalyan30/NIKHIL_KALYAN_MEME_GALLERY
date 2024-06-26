import React, { useEffect, useState } from 'react'

// Styles
import { Wrapper, Text } from './Footer.styles'

const Footer = () => {
	const [currentYear, setCurrentYear] = useState(0)

	const year = new Date().getFullYear()

	useEffect(() => {
		setCurrentYear(year)
	}, [year])

	return (
		<Wrapper>
			<Text>
				Meme Gallery &copy; {currentYear} <a href='https://github.com/Nikhil Kalyan'>Nikhil Kalyan</a>
			</Text>
		</Wrapper>
	)
}

export default Footer
