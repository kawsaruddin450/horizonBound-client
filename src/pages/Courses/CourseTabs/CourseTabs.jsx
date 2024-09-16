import CourseCard from "../../Shared/CourseCard/CourseCard";


const CourseTabs = ({courses}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
            {
                courses.map(course => <CourseCard
                key={course._id}
                course={course}
                ></CourseCard>)
            }
        </div>
    );
};

export default CourseTabs;