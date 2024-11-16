import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { IContact } from '../../../types';
import React from 'react';

interface Props {
  contact: IContact;
}

const Contact: React.FC<Props> = ({contact}) => {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: '350px',
        margin: '10px auto',
        display: 'flex',
        alignItems: 'center',
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: '120px' }}>
        <img
          src={contact.photo}
          srcSet={contact.photo}
          loading="lazy"
          alt={contact.name}
        />
      </AspectRatio>
      <CardContent sx={{marginLeft: '30px'}}>
        <Typography sx={{fontSize: '20px'}} id="card-description" >
          {contact.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Contact;