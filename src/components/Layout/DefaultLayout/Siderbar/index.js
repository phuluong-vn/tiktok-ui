import styles from './Siderbar.module.scss'
import classNames from 'classnames/bind';

const cx= classNames.bind(styles);
function Siderbar() {
    return <aside className={cx('wrapper')}>
        <h2>Siderbar</h2>
    </aside>;
}
export default Siderbar;
