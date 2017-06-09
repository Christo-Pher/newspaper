var createArticle = `mutation createArticleQuery($input: CreateArticleInput!) {
  createArticle(input: $input) {
    changedArticle {
      id
      modifiedAt
      title
      content
      category
      author {
        edges {
          node {
            username
            id
            name
          }
        }
      }
    }
  }
}`;



var getAllArticles = `query getAllArticles {
  viewer {
    allArticles {
      edges {
        node {
          title
          category
          content
          Author {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }
    }
  }
}`;



$.ajax({
    
    type: "POST",
    url: "https://us-west-2.api.scaphold.io/graphql/WEB130-FP",
    data: JSON.stringify({
        query: getAllArticles
    }),
    contentType: 'application/json',
    success: function(response) {
        console.log(response);
        let articles = [];
        if (response.hasOwnProperty('data')) {
            let articleEdges = response.data.viewer.allArticles.edges;
            for (var article of articleEdges) {
                articles.push(article.node);
            }
        }
        
        
        $('#article-1').find('h1').html(articles[0].title);
        $('#article-1').find('article').html(articles[0].content);
        
        $('#article-2').find('h1').html(articles[1].title);
        $('#article-2').find('article').html(articles[1].content);
        
        $('#article-3').find('h1').html(articles[2].title);
        $('#article-3').find('article').html(articles[2].content);
        
        $('#article-4').find('h1').html(articles[3].title);
        $('#article-4').find('article').html(articles[3].content);
        
        console.log('Here you go:');
        console.log(articles);
    }
    
});





