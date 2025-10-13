import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Footer } from './Footer'
import foto from '../assets/foto_portada.jpg'

export const Home = () => {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    gap: 6,
                    mt: 2,
                    backgroundColor: '#c9c6c6ff',
                    py: 6,
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: { xs: 2, md: 8 },
                }}
            >
                <Box
                    sx={{
                        width: { xs: '100%', sm: '40%' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        p: { xs: 2, md: 4 },
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            whiteSpace: 'pre-line',
                            lineHeight: 1.7,
                            color: '#333', // texto oscuro sobre fondo claro
                        }}
                    >
                        En nuestra empresa creemos que trabajar bien empieza por
                        sentirse bien. Por eso creamos espacios de trabajo
                        diseñados para inspirar, conectar y potenciar tu
                        productividad. Ofrecemos oficinas privadas, escritorios
                        flexibles y salas de reuniones totalmente equipadas,
                        listas para que solo tengas que traer tu notebook y tus
                        ideas. Nos ocupamos de todo lo demás: internet de alta
                        velocidad, café ilimitado, limpieza, recepción y un
                        ambiente profesional pero relajado. Nos apasiona ver
                        cómo nuestros miembros crecen, hacen networking y
                        transforman sus proyectos en realidades. Ya seas
                        freelancer, emprendedor o parte de un equipo en
                        expansión, acá vas a encontrar un lugar donde tu trabajo
                        fluye y tus ideas se potencian. Más que un espacio,
                        somos una comunidad. Vení a conocernos y descubrí una
                        nueva forma de trabajar.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: { xs: '100%', sm: '50%' },
                    }}
                >
                    <Box
                        component="img"
                        src={foto}
                        alt="Portada"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            borderRadius: 2,
                            boxShadow: 2,
                        }}
                    />
                </Box>
            </Box>
            <Footer />
        </>
    )
}
