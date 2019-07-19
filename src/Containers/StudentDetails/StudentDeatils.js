import React from 'react';
import { BootstrapContainerandRow } from '../../Components/BootstrapContainerandRow';
import { Card } from '../../Components/Card/Card';
import { Toolbar } from '../../Components/Toolbar/Toolbar';
import styles from './StudentDetails.module.css'

class StudentDetail extends React.Component{

    componentDidMount(){
        //Fetch Student Id from route
        const {studentId} = this.props.match.params
        //Do Something with this studentId 
        console.log(studentId)

    }

    getTotalMarks(marks){
        let TotalMarks = 0 ;
         Object.values(marks).map(marksInEachSubject=>{
             TotalMarks += Number(marksInEachSubject)
             return true;
        })
        return TotalMarks;
    }

    render(){
        let studentDeatils = this.props.location.state
        return (
            <div>
                <Toolbar title="Student Deatils"/>
        <BootstrapContainerandRow>
            <Card className="col-4">
            <p className={styles.nameTag}>{studentDeatils.name.charAt(0)}</p>
            <p className={styles.name}>{studentDeatils.name}</p>
            <p className={styles.rollNo}>Roll Number : {studentDeatils.rollNo}</p>
            <p className={styles.subjectMarksLabel}> Subject Wise Marks :</p>
            <ul>
            {this.renderSubjectWiseMarks(studentDeatils.marks)}
            </ul>
            <p className={styles.marks}>Total Marks : {this.getTotalMarks(studentDeatils.marks)}</p>
            </Card>
        </BootstrapContainerandRow>
        </div>
        )
    }

    renderSubjectWiseMarks(subjectsAndMarks){
        return Object.keys(subjectsAndMarks).map(key=>{
            return (
                <li className={styles.marks}>{key} : {subjectsAndMarks[key]} </li>
            )
        })
    }

}

export default StudentDetail