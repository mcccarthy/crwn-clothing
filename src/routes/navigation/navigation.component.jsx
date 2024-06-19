import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
<<<<<<< HEAD

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
=======
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss'


const Navigation = () => {
	return (
		<Fragment>
>>>>>>> 4a5753784865fc6babd25709278a2bc502da9071
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
<<<<<<< HEAD
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
=======
          <Link className='nav-links' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-links' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation;
>>>>>>> 4a5753784865fc6babd25709278a2bc502da9071
