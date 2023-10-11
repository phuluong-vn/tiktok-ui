import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem()
{
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/07e5bbc3a3afe2bb8817e2157fbc3e12~c5_100x100.jpeg?x-expires=1697169600&x-signature=aWr9C8rJ8Nm1rOuQfmYB64pp%2Fi0%3D" alt='avatar'/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyen Van A
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}/>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    )

}
export default AccountItem;