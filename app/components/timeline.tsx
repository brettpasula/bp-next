"use client"; // needed for the Timeline MUI component

import {
  Computer,
  DownhillSkiing,
  GolfCourse,
  Home,
  Landscape,
  Memory,
  School,
} from "@mui/icons-material";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

/**
 * Uses the {@link https://mui.com/material-ui/react-timeline/ | Material UI Labs Timeline} component.
 */
export default function AboutTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
      position="right"
    >
      <TimelineItem>
        <TimelineOppositeContent>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <Home />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Home</Typography>
          <Typography variant="body1">
            Born and raised on the prairie of Alberta, Canada. Many of my
            current hobbies and passions were sparked in childhood:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <Landscape />
              </ListItemIcon>
              <ListItemText primary="Getting outdoors" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <GolfCourse />
              </ListItemIcon>
              <ListItemText primary="Golf" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DownhillSkiing />
              </ListItemIcon>
              <ListItemText primary="Skiing" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Memory />
              </ListItemIcon>
              <ListItemText primary="Computing" />
            </ListItem>
          </List>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" marginTop="11.5px">
            2014 to 2018
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <School />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">(West)bound and down</Typography>
          <Typography variant="body1" gutterBottom>
            I moved to the west coast of Canada in the early 2010&apos;s to
            attend the University of British Columbia (UBC) and play on the
            Thunderbirds golf team. I graduated with a Bachelor of Science in
            Geology with Honours in 2018. As part of my studies I completed
            courses on igneous, metamorphic and sedimentary petrology,
            groundwater hydrology, structural geology, geomorphology, soils,
            statistics, GIS, geochemistry and volcanology. I worked a summer
            season in northeast BC assisting with a seismic survey (and back in
            the lab on off weeks), and another season in the Golden Triangle
            working with a junior exploration company.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" marginTop="11.5px">
            2018 to 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <School />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Back to school</Typography>
          <Typography variant="body1" gutterBottom>
            An introductory programming course I took as part of my previous
            degree initiated my interest in computer programming. In the fall of
            2018 I returned to UBC to complete my Bachelor of Computer Science.
            As part of my BCS degree I completed a co-op term and courses on
            data visualization, relational databases, machine learning,
            hardware, networking, algorithms and data structures. I supplemented
            my degree with additional business courses on financial and
            managerial accounting, process and operations, entrepreneurship, and
            ethics.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
        <Typography variant="body2" marginTop="11.5px">
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <Computer />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Today</Typography>
          <Typography variant="body1" gutterBottom>
            I&apos;m passionate about building software that makes a positive
            impact in the world. I enjoy working with all parts of the stack,
            but my hobby interest lies in the front-end (I ❤️ design systems).
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
