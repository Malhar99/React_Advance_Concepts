import React, { useEffect, useContext , useState} from 'react';
import { useMutation, gql } from '@apollo/client';
import { GlobalContext } from '../globalContext';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '30',
  },
  fields: {
    margin: theme.spacing(1)
  },
}));

function Createposts() {
  const classes = useStyles();
  const { createQuery } = useContext(GlobalContext);
  const [inputTitle, setInputTitle] = useState('')
  const [inputContent, setInputContent] = useState('')
  const [postCreated, { data }] = useMutation(gql`
    mutation Createpost($title: String!, $content: String!) {
      postCreated(title: $title, content: $content) {
        id
        title
        content
      }
    }
  `);

  useEffect(() => {
    if (data !== undefined && data !== []) {
      console.log('IN' + data);
      createQuery(data?.postCreated);
    }
  }, [data]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    postCreated({
      variables: {
        title: inputTitle,
        content: inputContent,
      },
    });
  };
  return (
    <div className={classes.root}>
      <h2>Submit Blog Post</h2>
      <form  autoComplete="off">
        <TextField
          className={classes.fields}
          id="outlined-basic"
          label="Title"
          fullWidth="true"
          variant="outlined"
          onChange={(e)=>{setInputTitle(e.target.value)}}
          required="true"
        />

        <TextField
          className={classes.fields}
          id="outlined-basic"
          label="Content"
          fullWidth="true"
          variant="outlined"
          onChange={(e)=>{setInputContent(e.target.value)}}
          required="true"
        />

        <Button type="submit" variant="contained" color="primary" className={classes.fields} onClick={handleOnSubmit}>
          Submit
        </Button>
      </form>

      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          postCreated({
            variables: {
              title: inputtitle.value,
              content: inputcontent.value,
            },
          });
        }}
      >
        <div>
          <label>Title</label>
          <input
            ref={(node) => {
              inputtitle = node;
            }}
          />
        </div>
        <div>
          <label>Content</label>
          <input
            ref={(node) => {
              inputcontent = node;
            }}
          />
        </div>
        <button type="submit">Add post</button>
      </form> */}
    </div>
  );
}

export default Createposts;
