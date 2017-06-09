// All articles
export const getAllArticles = `
    query getAllArticles {
        viewer {
            allArticles{
                edges {
                    node {
                        id
                        title
                        content
                        category
                        Author {
                            id
                            name
                        }
                    }
                }
            }
        }
    }`;

// Campus category articles
export const getCampusArticles = `
    query getCampusArticles($where: ArticleWhereArgs) {
        viewer {
            allArticles(where: $where) {
                edges {
                    node {
                        id
                        title
                        content
                        category
                        Author {
                            id
                            name
                        }
                    }
                }
            }
        }
    }`;

export const getOpinionArticles = `
    query getOpinionArticles($where: ArticleWhereArgs) {
        viewer {
            allArticles(where: $where) {
                edges {
                    node {
                        id
                        title
                        content
                        category
                        Author {
                            id
                            name
                        }
                    }
                }
            }
        }
    }`;

export const getCommunityArticles = `
    query getCommunityArticles($where: ArticleWhereArgs) {
        viewer {
            allArticles(where: $where) {
                edges {
                    node {
                        id
                        title
                        content
                        category
                        Author {
                            id
                            name
                        }
                    }
                }
            }
        }
    }`;

// Create new article
export const createArticle = `
    mutation createArticleQuery($input: CreateArticleInput!) {
        createArticle(input: $input) {
            changedArticle {
                id
                modifiedAt
                title
                content
                category
                Author {
                    id
                    name
                }
            }
        }
    }`;

export const getCategoryArticles = `
    query getCategoryArticles($where: ArticleWhereArgs) {
        viewer {
            allArticles(where: $where) {
                edges {
                    node {
                        id
                        title
                        content
                        category
                        createdAt
                        Author {
                            id
                            name
                        }
                    }
                }
            }
        }
    }`;

