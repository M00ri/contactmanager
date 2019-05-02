import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Header = props => {
	const { branding } = props
	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
			<div className='container'>
				<NavLink href='/' className='navbar-brand'>
					{branding}
				</NavLink>
				<div>
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item'>
							<NavLink exact to='/' className='nav-link'>
								<i className='fas fa-home' /> Home
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/contact/add' className='nav-link'>
								<i className='fas fa-plus mr-1' />
								Add
							</NavLink>
						</li>
						<li>
							<NavLink to='/about' className='nav-link'>
								<i className='fas fa-question mr-1' />
								About
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

Header.defaultProps = {
	branding: 'My App'
}

Header.propTypes = {
	branding: PropTypes.string.isRequired
}

export default Header
