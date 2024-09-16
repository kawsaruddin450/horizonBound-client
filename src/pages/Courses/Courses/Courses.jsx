import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';


const Courses = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

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
        <div>
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
                {/* index 0 */}
                <TabPanel>
                    <div>
                        {courses.length}
                    </div>
                </TabPanel>
                {/* index 1 */}
                <TabPanel>
                    <div>
                        {hiking.length}
                    </div>
                </TabPanel>
                {/* index 2 */}
                <TabPanel>
                    <div>
                        {kayaking.length}
                    </div>
                </TabPanel>
                {/* index 3 */}
                <TabPanel>
                    <div>
                        {orienteering.length}
                    </div>
                </TabPanel>
                {/* index 4 */}
                <TabPanel>
                    <div>
                        {camping.length}
                    </div>
                </TabPanel>
                {/* index 5 */}
                <TabPanel>
                    <div>
                        {cycling.length}
                    </div>
                </TabPanel>
                {/* index 6 */}
                <TabPanel>
                    <div>
                        {waterSports.length}
                    </div>
                </TabPanel>
                {/* index 7 */}
                <TabPanel>
                    <div>
                        {natureExploration.length}
                    </div>
                </TabPanel>
                {/* index 8 */}
                <TabPanel>
                    <div>
                        {survivalSkills.length}
                    </div>
                </TabPanel>
                {/* index 9 */}
                <TabPanel>
                    <div>
                        {rockClimbing.length}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Courses;