import React, { useContext, useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { GlobalContext } from '../globalContext';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: '10'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Posts() {
  const classes = useStyles();
  const { withQuery, posts } = useContext(GlobalContext);
  const [postList, setpostList] = useState([]);
  const { loading, error, data } = useQuery(gql`
    {
      posts {
        id
        title
        content
      }
    }
  `);

  useEffect(() => {
    withQuery(data?.posts);
    setpostList(posts);
  }, [data]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;
  return posts ? (
    posts.map(({ id, title, content }) => (
      <Card className={classes.root} key={id}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {content}
          </Typography>
        </CardContent>
      </Card>
    ))
  ) : (
    <></>
  );
}

export default Posts;
