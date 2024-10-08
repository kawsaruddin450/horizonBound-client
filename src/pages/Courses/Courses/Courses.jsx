import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import CourseTabs from "../CourseTabs/CourseTabs";
import { Helmet } from "react-helmet-async";
import useCourses from "../../../hooks/useCourses";


const Courses = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [courses, ] = useCourses();

    const approved = courses?.filter(course => course.status === "approved");
    // const [courses, setCourses] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/courses')
    //         .then(res => res.json())
    //         .then(data => setCourses(data))
    // }, [])

    const hiking = approved.filter(item => item.category === 'hiking');
    const kayaking = approved.filter(item => item.category === 'kayaking');
    const orienteering = approved.filter(item => item.category === 'orienteering');
    const camping = approved.filter(item => item.category === 'camping');
    const cycling = approved.filter(item => item.category === 'cycling');
    const waterSports = approved.filter(item => item.category === 'water_sports');
    const natureExploration = approved.filter(item => item.category === 'nature_exploration');
    const survivalSkills = approved.filter(item => item.category === 'survival_skills');
    const rockClimbing = approved.filter(item => item.category === 'rock_climbing');

    return (
        <div className="lg:container mx-auto">
            <Helmet>
                <title>Courses - Camp HorizonBound</title>
            </Helmet>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Hiking</Tab>
                    <Tab>Kayaking</Tab>
                    <Tab>Orienteering</Tab>
                    <Tab>Camping</Tab>
                    <Tab>Cycling</Tab>
                    <Tab>Water Sports</Tab>
                    <Tab>Nature Exploration</Tab>
                    <Tab>Survival Skills</Tab>
                    <Tab>Rock Climbing</Tab>
                </TabList>
                {/* index 0: all */}
                <TabPanel>
                    <CourseTabs courses={approved}></CourseTabs>
                </TabPanel>
                {/* index 1: hiking */}
                <TabPanel>
                    <CourseTabs courses={hiking}></CourseTabs>
                </TabPanel>
                {/* index 2: kayaking */}
                <TabPanel>
                    <CourseTabs courses={kayaking}></CourseTabs>
                </TabPanel>
                {/* index 3: orienteering */}
                <TabPanel>
                    <CourseTabs courses={orienteering}></CourseTabs>
                </TabPanel>
                {/* index 4: camping */}
                <TabPanel>
                    <CourseTabs courses={camping}></CourseTabs>
                </TabPanel>
                {/* index 5: cycling */}
                <TabPanel>
                    <CourseTabs courses={cycling}></CourseTabs>
                </TabPanel>
                {/* index 6: water sports */}
                <TabPanel>
                    <CourseTabs courses={waterSports}></CourseTabs>
                </TabPanel>
                {/* index 7: nature exploration */}
                <TabPanel>
                    <CourseTabs courses={natureExploration}></CourseTabs>
                </TabPanel>
                {/* index 8: survival skills */}
                <TabPanel>
                    <CourseTabs courses={survivalSkills}></CourseTabs>
                </TabPanel>
                {/* index 9: rock climbing */}
                <TabPanel>
                    <CourseTabs courses={rockClimbing}></CourseTabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Courses;