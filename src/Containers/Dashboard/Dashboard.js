import React from 'react'
import styles from './Dashboard.module.css'
import { Toolbar } from '../../Components/Toolbar/Toolbar';
import { BootstrapContainerandRow } from '../../Components/BootstrapContainerandRow';
import StudentCard from '../../Components/StudentCard/StudentCard';
import { SearchAndSortBar } from '../../Components/SearchAndSortBar/SearchAndSortBar';



class Dashboard extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            loading:true,
            students:[],
            filtered_list:[],
        }
    }

    componentDidMount(){
        if (document.cookie.indexOf('EmbibeloginCookie=') === -1){
            this.props.history.push('/')
            return;
        }
        fetch("https://api.myjson.com/bins/1dlper").then(res => res.json()).then((result) => {  
            let studentList = []
            Object.keys(result).map(key=>{
                studentList.push(result[key])
                return true;
            })
            this.setState({
                loading:false,
                students:studentList,
                filtered_list:studentList
            })
        })
    }

    renderStudentDetails(){
       return this.state.filtered_list.map(student=>{
          return (<StudentCard student={student} studentClicked={e=>this.handleStudentClick(student)}/>
          )
       })
    }

    handleStudentClick = (student)=>{
         this.props.history.push({ pathname :'/student/'+student.rollNo,state:student})
    }

    handleOnChange = (event) =>{
        if(!event.target.value)  
        {      
            this.setState({
                filtered_list:this.state.students
            })
            return;
        }
       var filtered_list = this.state.students.filter(student=>{
           return student.name.toLowerCase().match(event.target.value.toLowerCase()) != null
       })
       this.setState({
           search : false,
           filtered_list:filtered_list
       })
    }

    render(){
        if (this.state.loading)
        return (<h2>Loading...</h2>)

        return(
            <div className={styles.container}>
              
            <Toolbar title="Student DashBoard" />
            <SearchAndSortBar type="text" searchValueChanged={this.handleOnChange} />
            <BootstrapContainerandRow>
           
           {this.renderStudentDetails()}
            </BootstrapContainerandRow> 
                        </div>
        )
    }

}
export default Dashboard