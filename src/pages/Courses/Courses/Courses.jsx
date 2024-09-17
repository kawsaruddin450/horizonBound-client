import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import CourseTabs from "../CourseTabs/CourseTabs";


const Courses = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    console.log(selectedCourses);
    const hiking = courses.filter(item => item.category === 'hiking');
    const kayaking = courses.filter(item => item.category === 'kayaking');
    const orienteering = courses.filter(item => item.category === 'orienteering');
    const camping = courses.filter(item => item.category === 'camping');
    const cycling = courses.filter(item => item.category === 'cycling');
    const waterSports = courses.filter(item => item.category === 'water_sports');
    const natureExploration = courses.filter(item => item.category === 'nature_exploration');
    const survivalSkills = courses.filter(item => item.category === 'survival_skills');
    const rockClimbing = courses.filter(item => item.category === 'rock_climbing');

    return (
        <div className="lg:container mx-auto">
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
                    <CourseTabs courses={courses}></CourseTabs>
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