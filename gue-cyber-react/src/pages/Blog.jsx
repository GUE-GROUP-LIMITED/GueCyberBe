import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();
  const posts = t('seo.blogCybersecurity', { returnObjects: true });

  return (
    <main>
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ mb: 3 }}>Blog</Typography>
          <Box sx={{ display: 'grid', gap: 2 }}>
            {posts.map((p, i) => (
              <Card key={i} component={Link} to="/" sx={{ textDecoration: 'none' }}>
                <CardContent>
                  <Typography sx={{ fontWeight: 800 }}>{p}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </main>
  );
}
