import { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';
import { Helmet } from 'react-helmet-async';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/instructors`)
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div className='lg:container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-12'>
            <Helmet>
                <title>Instructors - Camp HorizonBound</title>
            </Helmet>
            {
                instructors.map(instructor => <InstructorCard
                    key={instructor._id}
                    instructor={instructor}
                ></InstructorCard>)
            }
        </div>
    );
};

export default Instructors;