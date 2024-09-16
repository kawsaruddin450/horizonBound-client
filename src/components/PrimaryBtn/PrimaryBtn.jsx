
const PrimaryBtn = ({children}) => {
    return (
        <div>
            <button className="btn btn-secondary rounded-3xl px-8 font-bold">{children}</button>
        </div>
    );
};

export default PrimaryBtn;