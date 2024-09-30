import { Typography, Card, CardContent, Button } from '@mui/material';

interface JobCardProps {
  title: string;
  company: string;
}

export default function JobCard({ title, company }: JobCardProps) {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
        },
        backgroundColor: '#ffffff', // Background color for the card
        overflow: 'hidden', // Ensure content does not overflow the card
      }}
    >
      <CardContent>
        <Typography variant="h6" component="h3" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {company}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{
            borderRadius: 20,
            padding: '8px 16px',
            transition: 'background-color 0.3s, transform 0.2s',
            '&:hover': {
              backgroundColor: '#3f51b5', // Darker shade for hover effect
              transform: 'scale(1.05)', // Slight scaling on hover
            },
          }}
        >
          Apply Now
        </Button>
      </CardContent>
    </Card>
  );
}
