import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function Media(props) {
  return (
    <Grid container>
      <Grid item sm={6} xs={12} md={3} >
        <Box sx={{ width: '100%', padding: 2, my: 5}}>
          <Skeleton variant="rectangular" width='100%' height={118} />

          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      </Grid>
      <Grid item sm={6} xs={12} md={3} >
        <Box sx={{ width: '100%', padding: 2, my: 5}}>
          <Skeleton variant="rectangular" width='100%' height={118} />

          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      </Grid>
      <Grid item sm={6} xs={12} md={3} >
        <Box sx={{ width: '100%', padding: 2, my: 5}}>
          <Skeleton variant="rectangular" width='100%' height={118} />

          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      </Grid>
      <Grid item sm={6} xs={12} md={3} >
        <Box sx={{ width: '100%', padding: 2, my: 5}}>
          <Skeleton variant="rectangular" width='100%' height={118} />

          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      </Grid>
      <Grid item sm={6} xs={12} md={3} >
        <Box sx={{ width: '100%', padding: 2, my: 5}}>
          <Skeleton variant="rectangular" width='100%' height={118} />

          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      </Grid>
      <Grid item sm={6} xs={12} md={3} >
        <Box sx={{ width: '100%', padding: 2, my: 5}}>
          <Skeleton variant="rectangular" width='100%' height={118} />

          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      </Grid>

      <Grid item sm={6} xs={12} md={3} >
        <Box sx={{ width: '100%', padding: 2, my: 5}}>
          <Skeleton variant="rectangular" width='100%' height={118} />

          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      </Grid>
      <Grid item sm={6} xs={12} md={3} >
        <Box sx={{ width: '100%', padding: 2, my: 5}}>
          <Skeleton variant="rectangular" width='100%' height={118} />

          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      </Grid>

    </Grid>
  );
}

export default function YouTube() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media />
      <Media />
    </Box>
  );
}
