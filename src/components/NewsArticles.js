import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NewsArticles = () => {
    const { articles, loading, error } = useSelector((state) => state.news);

    if (loading) return <p>Loading...</p>;
    if (error === 'Articles Not Found') return <p>Articles Not Found</p>;
    if (error) return <p>Error: {error}</p>;
    if (!articles.length) return <p>No news articles found</p>;

    return (
        <>
            <Typography sx={{ mt: 2, fontSize: "2.7em", fontFamily: "Poppins, sans-serif", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Weather News
            </Typography>
            <Grid container spacing={2}>
                {articles.map((article, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Card
                            sx={{
                                maxWidth: 345,
                                borderRadius: "1em",
                                margin: "2.5em",
                                marginBottom: "2em",
                                boxShadow: 15,
                                transition: "transform 0.2s, box-shadow 0.5s",
                                backgroundColor: "#4c8af4", color: "white", 
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: 50 
                                }
                            }}
                        >
                            <CardMedia
                                component="img"
                                alt="article image"
                                height="140"
                                image={article.urlToImage}
                            />
                            <CardContent sx={{ marginBottom: '0', paddingBottom: '0', padding : '1em' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {article.title}
                                </Typography>
                                <Typography variant="body2">
                                    {article.description}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 2 }}>
                                    <strong>Source:</strong> {article.source.name}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center', mt: '0.2em', m: '0.1em', mb: '1em' }}>
                                <Button
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    size="small"
                                    sx={{
                                        backgroundColor: "white", color: "#4c8af4",
                                        transition: "background-color 0.2s",
                                        "&:hover": {
                                            boxShadow: 50,
                                            color: "white",
                                            backgroundColor: "#2563eb"
                                        }
                                    }}
                                >
                                    Read more
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default NewsArticles;
