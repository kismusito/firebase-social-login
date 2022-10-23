import { Grid, Typography } from "@mui/material";
import { Post } from "modules/posts/schemas/post.schema";
import { StyledPaper } from "views/styled/paper";
import { Icon } from "@iconify/react";

type Props = {
  post: Post;
};

export const PostItem = ({ post }: Props): JSX.Element => {
  return (
    <StyledPaper
      sx={{
        my: 1,
        mx: "auto",
        p: 2,
      }}
    >
      <Grid container>
        <Grid item xs={10} display="flex" alignItems="center">
          <Typography fontSize={22} sx={{ mb: 2 }}>
            {post.title}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          gap={0.8}
        >
          <Icon icon="akar-icons:star" fontSize={22} />
          <Icon icon="akar-icons:edit" fontSize={22} />
          <Icon icon="ant-design:delete-outlined" fontSize={22} />
        </Grid>
      </Grid>
      <Typography fontSize={12}>{post.body}</Typography>
    </StyledPaper>
  );
};
