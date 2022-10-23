import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "store";

import { logout } from "modules/auth/actions";

import { Button } from "views/styled/button";
import { getPosts } from "modules/posts/actions";
import { Container, Grid } from "@mui/material";
import { getPostItems } from "modules/posts/selectors";
import { PostItem } from "views/ui/post-item";

export const Dashboard = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(getPostItems);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
      <Grid container>
        <Grid item xs={6}>
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </Grid>
        <Grid item xs={6}>
          s
        </Grid>
      </Grid>
    </Container>
  );
};
