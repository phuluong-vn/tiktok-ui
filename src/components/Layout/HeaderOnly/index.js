

function HeaderOnly({ children }) {
    return (
        <div>
            <HeaderOnly />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
export default HeaderOnly;
