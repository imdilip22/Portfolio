import { Typography, Paper, Container, Box } from '@mui/material';


const educationData = [
  {
    course: "Bachelor of Engineering in Computer Engineering",
    year: "2021-2025",
    college: "Goverment Engineering College Rajkot"
  },
  {
    course: "H.S.C",
    year: "2021",
    college: "Belur Vidhyalaya Mahuva"
  },
  {
    course: "S.S.C",
    year: "2019",
    college: "Belur Vidhyalaya Mahuva"
  },
  // Add more data as needed
];

const Education = () => {
  return (
    
    <Container >
      <h1 id='Education' >Education</h1>
      <Box className="education-container" >
        {educationData.map((edu, index) => (
          <Paper key={index} className="education-paper" data-aos="fade-right">
            <Typography variant="h6" className="education-course">{edu.course} </Typography>
            <Typography variant="body1" className="education-year">{edu.year}</Typography>
            <Typography variant="body2" className="education-college">{edu.college}</Typography>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default Education;
