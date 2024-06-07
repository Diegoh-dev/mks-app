import { Skeleton } from "@mui/material";
import styles from "./Skeleton.module.scss";
export function SkeletonComponent() {
  return (
    <div className={styles.card}>
      <div className={styles.skeletonImage}>
        <Skeleton
          animation="wave"
          variant="rounded"
          width={125}
          height={155}
          sx={{
            bgcolor: "#CCC",
          }}
        />
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Skeleton
          animation="wave"
          variant="text"
          width={100}
          height={26}
          sx={{
            bgcolor: "#CCC",
          }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          width={100}
          height={26}
          sx={{
            bgcolor: "#CCC",
          }}
        />
      </div>

      <Skeleton
        animation="wave"
        variant="text"
        width={217}
        height={26}
        sx={{
          bgcolor: "#CCC",
        }}
      />
      <Skeleton
        animation="wave"
        variant="text"
        width={217}
        height={26}
        sx={{
          bgcolor: "#CCC",
        }}
      />

      <Skeleton
        animation="wave"
        variant="rounded"
        width={217}
        height={26}
        sx={{
          bgcolor: "#CCC",
          marginTop: ".5rem",
        }}
      />
    </div>
  );
}
