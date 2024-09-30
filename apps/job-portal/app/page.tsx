import { Box, Button, Container, Typography } from "@mui/material";
import Header from "../components/Header";
import JobCard from "../components/JobCard";

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 10, md: 15 },
          backgroundImage: 'linear-gradient(to right bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(/jobBG.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold', letterSpacing: 1.5 }}
          >
            Find Your Dream Job
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            sx={{
              mb: 3,
              fontWeight: 300,
              opacity: 0.8,
            }}
          >
            Browse through thousands of job opportunities tailored just for you.
          </Typography>
      
        </Container>
      </Box>

      {/* Featured Jobs Section */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#333' }}
        >
          Featured Jobs
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: 4,
          }}
        >
          {/* Job Cards */}
          <JobCard title="Frontend Developer" company="Tech Company" />
          <JobCard title="Backend Developer" company="Startup Inc." />
          <JobCard title="Data Scientist" company="Data Corp" />
          <JobCard title="Full Stack Engineer" company="Innovatech" />
        </Box>
      </Container>

      {/* Call to Action Section */}
      <Box
        sx={{
          py: 10,
          backgroundColor: '#007bff',
          color: '#fff',
          textAlign: 'center',
          mt: 8,
          boxShadow: '0 10px 30px rgba(0, 123, 255, 0.2)',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Ready to take the next step in your career?
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: 4 }}>
            Sign up today to start applying for your dream job.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#fff',
              color: '#007bff',
              fontWeight: 'bold',
              px: 4,
              '&:hover': {
                backgroundColor: '#f5f5f5',
                color: '#0056b3',
              },
            }}
          >
            Get Started
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
