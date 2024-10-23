import { useState, useEffect } from 'react';

export const useEnvironmentalNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const API_KEY = 'e6feeddf1c4344f7beb1d6b7c7dad079';
      const URL = `https://newsapi.org/v2/everything?q=environment&language=pt&apiKey=${API_KEY}`; // Alterado para "environment"

      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`Erro ao buscar as notícias: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // Corrigido para acessar data.articles
        const newsData = data.articles.filter(article => article.title !== '[Removed]' && article.description !== '[Removed]').map((article) => ({
          title: article.title || 'Sem título',
          description: article.description,
          author: article.author || 'Autor desconhecido',
          urlToImage: article.urlToImage || 'default-image.jpg',
          publishedAt: article.publishedAt,
          content: article.content,
          url: article.url
        }));

        setArticles(newsData);
        setLoading(false);
      } catch (err) {
        setError(`Erro ao carregar as notícias: ${err.message}`); // Melhorando a mensagem de erro
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { articles, loading, error };
};

export default useEnvironmentalNews;
