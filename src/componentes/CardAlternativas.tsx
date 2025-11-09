import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import type { ISpace } from '../types';

type Props = {
    space: ISpace
}

export default function SpaceCard({ space }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/reserva", { state: { space } });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={space.pictureUrl}
          alt={space.spaceType}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {space.building?.name || "Nombre de edificio no disponible"} 
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {space.description}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            Capacidad: {space.capacity}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            ${space.pricePerDay} / día
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          Lo quiero!
        </Button>
      </CardActions>
    </Card>
  );
}
