import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss' 
import images  from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';


const cx = classNames.bind(styles)
function Header() {
    const [seachResult,setSearchResult] = useState([]);
    useEffect(() =>{
        setTimeout(() => {
            setSearchResult([1,2,3]);
        }, 3000);    })
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                    <img src={images.logo} alt='logo-tiktok'/>
                    <Tippy 
                    interactive
                    visible = {seachResult.length >0}
                    render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('seach-title')}>Account</h4>
                            <AccountItem/>
                            <AccountItem/>
                            <AccountItem/>
                        </PopperWrapper>
                    </div>
                    )}
                    >
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
                    </Tippy>
                <div className={cx('action')}>
                    <button>Register</button>
                    <button>Login</button>
                </div>
            </div>
        </header>
    )
}
export default Header;
