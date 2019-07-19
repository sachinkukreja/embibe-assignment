import React from 'react'
import { Card } from '../Card/Card';
import styles from './StudentCard.module.css'

class StudentCard extends React.PureComponent{


    getTotalMarks(marks){
        let TotalMarks = 0 ;
         Object.values(marks).map(marksInEachSubject=>{
             TotalMarks += Number(marksInEachSubject)
             return true;
        })
        return TotalMarks;
    }

    render(){
        const student = this.props.student;
        return(
        <div className="col-lg-4 col-md-6 col-12" onClick={this.props.studentClicked}>
            <Card >
            <p className={styles.nameTag}>{student.name.charAt(0)}</p>
            <p className={styles.name}>{student.name}</p>
            <p className={styles.rollNo}>Roll Number : {student.rollNo}</p>
            <p className={styles.totalMarks}>Total Marks: {this.getTotalMarks(student.marks)}</p>
         </Card>
         </div>)

    }
}
export default StudentCard