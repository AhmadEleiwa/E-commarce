import { Box, Container, Typography } from "@mui/material";

import ViewAllButton from "../ViewAllButton/ViewAllButton";
import Title from "../Title";
import SubTitle from "../SubTitle/index";
import style from "./style.module.css";

const ProductsList = ({
  title,
  subtitle,
  hideAllHeader,
  showButtomButton,
  ShowSubtitle,
  children,
}) => {
  // onlysubtitle : false hideallhidder false
  return (
    <Container
      className={style.ListConotainer}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box mb={7.5}>
        {ShowSubtitle && (
          <Typography mb={7.5}>
            <SubTitle>{subtitle}</SubTitle>
          </Typography>
        )}
        {!hideAllHeader && (
          <Box>
            <Typography mb={3}>
              <SubTitle>{subtitle}</SubTitle>
            </Typography>
            <Box
              mb={7.5}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Title>{title}</Title>
                <Box mr="2rem">
                  <ViewAllButton>view all</ViewAllButton>
                </Box>
              </Box>
            </Box>
          </Box>
        )}

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          {children}
        </Box>
      </Box>
      {showButtomButton && <ViewAllButton>View All Products</ViewAllButton>}
    </Container>
  );
};
ProductsList.defaultProps = {
  title: "Product List",
  subtitle: "subtutle",
  hideAllHeader: false,
  showButtomButton: false,
  ShowSubtitle: false,
};

export default ProductsList;
