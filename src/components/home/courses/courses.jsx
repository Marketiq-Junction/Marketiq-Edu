import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const Courses = () => {
  // Sample course data
  const courseData = [
    {
      title: '6-Month Course',
      image: '/path/to/your/image1.jpg',
    },
    {
      title: '1-Year Course',
      image: '/path/to/your/image2.jpg',
    },
    {
      title: '2-Year Course',
      image: '/path/to/your/image3.jpg',
    },
    {
      title: '3-Year Course',
      image: '/path/to/your/image4.jpg',
    },
  ];

  return (
    <Box py={5} textAlign="center">
      {/* Category Label as a Button-like Element */}
      <Box
        sx={{
          display: 'inline-block',
          backgroundColor: '#50c3c6',
          color: '#fff',
          fontWeight: 'bold',
          padding: '8px 16px',
          borderRadius: '20px',
          mb: 2,
          textTransform: 'uppercase',
          fontSize: '0.875rem',
        }}
      >
        COURSE CATEGORY
      </Box>

      {/* Heading */}
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4 }}>
        Explore Our Courses
      </Typography>

      {/* Course Cards */}
      <Grid container spacing={4} justifyContent="center">
        {courseData.map((course, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                borderRadius: '12px',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-8px)' },
              }}
            >
              <CardMedia
                component="img"
                image={course.image}
                alt={course.title}
                sx={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {course.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Courses;
