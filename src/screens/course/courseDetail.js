import React, { Component } from "react";
import { 
    Divider, 
    Grid, 
    Button, ExpansionPanel, ExpansionPanelSummary, 
    ExpansionPanelDetails, Typography, Icon, Card, LinearProgress} from '@material-ui/core';
import ProfessorCard from './components/professorCard';
import CourseComments from './components/courseComments';
import CourseRecommendation from './components/courseRecommendation';
import CourseIntroduction from './components/courseIntroduction';
import CourseCard from './components/courseCard';



export class CourseDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: this.props.location.courseId,
        };
    }

    render() {
        return (
            <Grid container spacing={16}>

                <Grid xs={8}>

                    <div>{this.props.location.courseId}</div>
                  
                    <CourseCard/>

                    <CourseIntroduction/>

                    <CourseComments courseId="GIGFI-HFSIHI"/>

                </Grid>

                <Grid xs={1}></Grid>

                <Grid xs={3}>
                    
                    <ProfessorCard professorId="FGIHISHIG"/>

                    <CourseRecommendation/>

                </Grid>

            </Grid>
        );
    }
}

const styles = {


}
