import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss'
import Header from '../components/Header';
import Siderbar from './Siderbar';

const cx = classNames.bind(styles)
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Siderbar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
export default DefaultLayout;
