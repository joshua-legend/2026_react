import { Chip } from "@mui/material";

const ReviewCount = (props) => {
  return (
    <div>
      리뷰 카운트: <Chip label={props.reviewCount} color="primary" />
    </div>
  );
};
// material ui
export default ReviewCount;
