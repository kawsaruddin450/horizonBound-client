

const InstructorCard = ({instructor}) => {
    const {name, email, image} = instructor;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Instructor Photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;