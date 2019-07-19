import React from 'react'
import styles from './Dashboard.module.css'
import { Toolbar } from '../../Components/Toolbar/Toolbar';
import { BootstrapContainerandRow } from '../../Components/BootstrapContainerandRow';
import StudentCard from '../../Components/StudentCard/StudentCard';
import { SearchAndSortBar } from '../../Components/SearchAndSortBar/SearchAndSortBar';



class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            students: [],
            filtered_list: [],
            alphabeticalSortOrder: "ASC",
            totalMarksSortOrder:"ASC"
        }
    }

    componentDidMount() {
        if (document.cookie.indexOf('EmbibeloginCookie=') === -1) {
            this.props.history.push('/')
            return;
        }
        fetch("https://api.myjson.com/bins/1dlper").then(res => res.json()).then((result) => {
            let studentList = []
            Object.keys(result).map(key => {
                let totalMarks = 0;
                Object.values(result[key].marks).map(marksInEachSubject => {
                    totalMarks += Number(marksInEachSubject)
                    return true;
                })
                result[key].totalMarks = totalMarks;
                studentList.push(result[key])
                return true;
            })
            this.setState({
                loading: false,
                students: studentList,
                filtered_list: studentList
            })
        })
    }

    renderStudentDetails() {
        return this.state.filtered_list.map(student => {
            return (<StudentCard student={student} studentClicked={e => this.handleStudentClick(student)} />
            )
        })
    }

    handleStudentClick = (student) => {
        this.props.history.push({ pathname: '/student/' + student.rollNo, state: student })
    }

    handleOnChange = (event) => {
        if (!event.target.value) {
            this.setState({
                filtered_list: this.state.students
            })
            return;
        }
        let filtered_list = this.state.students.filter(student => {
            return student.name.toLowerCase().match(event.target.value.toLowerCase()) != null
        })
        this.setState({
            filtered_list: filtered_list
        })
    }

    handleAlphabeticalSort = () => {
        if (this.state.alphabeticalSortOrder === "ASC") {
            let filtered_list = this.state.students.sort(function (a, b) {
                return (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : 0;
            });
            this.setState({
                alphabeticalSortOrder: "DSC",
                filtered_list: filtered_list
            })
        }
        else if (this.state.alphabeticalSortOrder === "DSC") {
            let filtered_list = this.state.students.sort(function (a, b) {
                return (a.name.toLowerCase() > b.name.toLowerCase()) ? -1 : (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : 0;
            });
            this.setState({
                alphabeticalSortOrder: "ASC",
                filtered_list: filtered_list
            })
        }

    }

    handleMarkSort = () => {
        if (this.state.totalMarksSortOrder === "ASC") {
            let filtered_list = this.state.students.sort(function (a, b) {
                return (a.totalMarks - b.totalMarks)
            });
            this.setState({
                totalMarksSortOrder: "DSC",
                filtered_list: filtered_list
            })
        }
        else if (this.state.totalMarksSortOrder === "DSC") {
            let filtered_list = this.state.students.sort(function (a, b) {
                return (b.totalMarks - a.totalMarks);
            });
            this.setState({
                totalMarksSortOrder: "ASC",
                filtered_list: filtered_list
            })
        }
    }

    render() {
        if (this.state.loading)
            return (<h2>Loading...</h2>)

        return (
            <div className={styles.container}>

                <Toolbar title="Student DashBoard" />
                <SearchAndSortBar type="text" searchValueChanged={this.handleOnChange} toggleAlphabeticalSort={this.handleAlphabeticalSort} toggleMarksSort={this.handleMarkSort} />
                <BootstrapContainerandRow>

                    {this.renderStudentDetails()}
                </BootstrapContainerandRow>
            </div>
        )
    }

}
export default Dashboard