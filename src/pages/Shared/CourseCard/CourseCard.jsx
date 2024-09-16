import PrimaryBtn from '../../../components/PrimaryBtn/PrimaryBtn'

const CourseCard = ({course}) => {
    const {name, description, instructor, price, available_seats, image, category} = course;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Course Thumbnail" />
                <span className='absolute top-5 right-5 text-secondary font-semibold bg-white px-6 py-2 rounded-3xl'>${price}</span>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <h3 className='text-xl mt-5'>Instructor: <span className='font-bold'>{instructor}</span></h3>
                <h3 className='text-xl'>Available Seats: {available_seats}</h3>
                <div className="card-actions justify-start mt-5">
                    <PrimaryBtn className="btn btn-primary">Select Now</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;