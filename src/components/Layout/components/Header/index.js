import classNames from 'classnames/bind';
import styles from './Header.module.scss' 
import images  from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                    <img src={images.logo} alt='logo-tiktok'/>
                <div className={cx('seach')}>
                    <input placeholder='Seach accounts and videos' spellCheck={false}/>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('seach-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('action')}>
                    <button>Register</button>
                    <button>Login</button>
                </div>
            </div>
        </header>
    )
}
export default Header;
