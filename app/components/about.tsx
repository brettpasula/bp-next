"use client";

import { Home, School } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box flexGrow="1">
      <Typography id="about" variant="h6">
        About
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <Home />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Born and raised on the prairie of Alberta, Canada. Many of my
            current hobbies and passions were sparked in childhood; golf,
            skiing, curiosity of the natural world.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <Typography>2014 to 2018</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <School />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">(West)bound and down</Typography>
            <Typography>
              I moved to the west coast of Canada in the early 2010's to attend
              the University of British Columbia (UBC) and play on the
              Thunderbirds golf team. I graduated with a Bachelor of Science in
              Geology with Honours in 2018.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <Typography>2018 to 2021</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <School />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">Back to school</Typography>
            <Typography>
              In the fall of 2018 I returned to UBC to complete my Bachelor of
              Computer Science.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
          <Typography variant="h6">Today</Typography>
            Today I work in private industry. I'm passionate about building
            software that makes a positive impact in the world. I enjoy working
            with all parts of the stack, but my hobby interest lies in the
            front-end (I ❤️ design systems).
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
