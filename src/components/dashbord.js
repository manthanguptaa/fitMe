import React from "react"
import "./dashbord.css"
import { Link } from "react-router-dom"
var username = "Lodu Sahil";
var usertitle = "ConnectHub/Employee";
var currentView = "overview";
const poses = ['chairpose.jpg', 'dance.png', 'eagle.png', 'garland.png', 'gate.png', 'half-moon.png', 'parivrtta-trikonasana.png', 'tadasana.png', 'vrksasana.png'];
const images = poses.map(image => {
    return <img key={image} src={require(`../assets/images/poses/${image}`)} width='200' height='200' className="img-responsive float-left" />
});
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: "overview"
        };
        this.setView = this.setView.bind(this);
    }

    setView(view) {
        this.setState({ view: view });
        currentView = view;
        console.log(view);
    }

    render() {
        switch (this.state.view) {
            case "overview":
                return (
                    <div id="dashboard">
                        <Sidebar setView={this.setView} />
                        <Overview />
                    </div>
                );
            case "schedule":
                return (
                    <div id="dashboard">
                        <Sidebar setView={this.setView} />
                        <ScheduleView />
                    </div>
                );
            case "performance":
                return (
                    <div id="dashboard">
                        <Sidebar setView={this.setView} />
                        <PerformanceView />
                    </div>
                );
            case "Excercise":
                return (
                    <div id="dashboard">
                        <Sidebar setView={this.setView} />
                        <AdministratorView />
                    </div>
                );
        }
    }
}

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    setView(view) {
        this.props.setView(view);
        console.log("level 2 " + view);
    }
    render() {
        return (
            <div className="sidebar-menu">
                <UserProfileView username={username} usertitle={usertitle} />
                <SidebarMenu
                    item1={"Overview"}
                    item2={"Schedule"}
                    item3={"Performance"}
                    item4={"Administration"}
                    setView={this.props.setView}
                />
                <div>
                    <button id="sign-out-btn" className="full-btn">
                        Sign Out
					</button>
                </div>
            </div>
        );
    }
}

class UserProfileView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-profile">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2wn18dnC8OmX7Qx49epjgoHREUBHEviB10griBGemOmkYQoK5g"
                    id="profile-pic"
                />
                <h3 id="display-name">{this.props.username}</h3>
                <p className="subtitle">{this.props.usertitle}</p>
            </div>
        );
    }
}

class SidebarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            overview: "active-item",
            schedule: "inactive-item",
            performance: "inactive-item",
            Excercise: "inactive-item"
        };
        this.setBtnAndView = this.setBtnAndView.bind(this);
    }

    setBtnAndView(view) {
        this.props.setView(view);
        if (view == "overview") {
            this.setState({
                overview: "active-item",
                schedule: "inactive-item",
                performance: "inactive-item",
                Excercise: "inactive-item"
            });
        } else if (view == "schedule") {
            this.setState({
                overview: "inactive-item",
                schedule: "active-item",
                performance: "inactive-item",
                Excercise: "inactive-item"
            });
        } else if (view == "performance") {
            this.setState({
                overview: "inactive-item",
                schedule: "inactive-item",
                performance: "active-item",
                Excercise: "inactive-item"
            });
        } else if (view == "Excercise") {
            this.setState({
                overview: "inactive-item",
                schedule: "inactive-item",
                performance: "inactive-item",
                Excercise: "active-item"
            });
        }
    }

    render() {
        return (
            <div class="menu-items">
                <a
                    class={this.state.overview}
                    href="#"
                    onClick={() => this.setBtnAndView("overview")}
                >
                    {this.props.item1}
                </a>
                <a
                    class={this.state.schedule}
                    href="#"
                    onClick={() => this.setBtnAndView("schedule")}
                >
                    {this.props.item2}
                </a>
                <a
                    class={this.state.performance}
                    href="#"
                    onClick={() => this.setBtnAndView("performance")}
                >
                    {this.props.item3}
                </a>
                <a
                    class={this.state.Excercise}
                    href="#"
                    onClick={() => this.setBtnAndView("Excercise")}
                >
                    {this.props.item4}
                </a>
            </div>
        );
    }
}

class Overview extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="dash-view">
                <h2 class="view-heading">Here's your breakdown.</h2>
                <DashboardCard />
            </div>
        );
    }
}

class ScheduleView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="dash-view">
                <h2 class="view-heading">Check your schedule.</h2>

            </div>
        );
    }
}

class PerformanceView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="dash-view">
                <h2 class="view-heading">Track your performance.</h2>
                <DashboardCard />
            </div>
        );
    }
}

class AdministratorView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="dash-view">

                <h2 class="view-heading">Select the Yoga Pose ....</h2>

                <div class="container">
                    <div class="row">
                        <div class="col-md-4">

                            <Link onClick={() => console.log(images)} to="">
                                {images}

                            </Link>
                        </div>
                    </div>
                </div>
            </div>




        );
    }
}

class DashboardCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        switch (currentView) {
            case "overview":
                return (
                    <div class="dash-card">
                        <OverviewCardContent />
                    </div>);
            case "schedule":
                return (
                    <div class="dash-card">
                        <ScheduleCardContent />
                    </div>);
            case "performance":
                return (
                    <div class="dash-card">
                        <PerformanceCardContent />
                    </div>);
            case "Excercise":
                return (
                    <div class="dash-card">
                        <AdministratorCardContent />
                    </div>);
        }
    }
}

const OverviewCardContent = () => (
    <div>
        <h4 class="card-heading">Your Weekly Outlook</h4>
        <p class="card-subtitle">You are on track to hit your target this week.</p>
        <div id="stats-container">
            <div>
                <h5 class="lg-nmbr">13</h5>
                <p>Sales this week.</p>
            </div>
            <div>
                <h5 class="lg-nmbr">87%</h5>
                <p>Of your targets hit.</p>
            </div>
            <div>
                <h5 class="lg-nmbr">5</h5>
                <p>Sales this week.</p>
            </div>
            <div>
                <h5 class="lg-nmbr">45</h5>
                <p>Sales this week.</p>
            </div>
        </div>
    </div>
);
const ScheduleCardContent = () => (
    <div>
        <h4 class="card-heading">Your Roster</h4>
        <p class="card-subtitle">Your work schedule for this week.</p>
        <div class="table-container">
            <table>
                <tr>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                </tr>
                <tr>
                    <td>9AM to 5PM</td>
                    <td>9AM to 5PM</td>
                    <td>9AM to 5PM</td>
                    <td>9AM to 5PM</td>
                    <td>9AM to 5PM</td>
                    <td>N/A</td>
                    <td>N/A</td>
                </tr>

            </table>
        </div>
    </div>
);
const PerformanceCardContent = () => (
    <div>
        <h4 class="card-heading">Your Performance</h4>
        <p class="card-subtitle">You need to focus on conversion.</p>
    </div>
);
const AdministratorCardContent = () => (
    <div>
        <h4 class="card-heading">Select the Excercise You want to DO...</h4>

    </div>
);


export default Dashboard
