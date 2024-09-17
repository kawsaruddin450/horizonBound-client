import useSelected from "../../../hooks/useSelected";


const MySelection = () => {
    const [selectedCourses, ] = useSelected();
    return (
        <div>
            <h1 className="text-3xl">{selectedCourses.length}</h1>
        </div>
    );
};

export default MySelection;