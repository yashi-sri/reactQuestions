import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Container } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AuthContext } from "../Context/AuthContext";
import SidebarLayout from "./SidebarLayout";
import HeaderLayout from "./HeaderLayout";

const AdminLayout = () => {
  const { token } = useContext(AuthContext);
  const isMobile = useMediaQuery("(max-width:600px)"); //mobile breakpoint
  return (
    <>
      {token && (
        <div
          component="main"
          style={{
            marginLeft: isMobile ? "60px" : "0px", //  mobile margin
          }}
        >
          <HeaderLayout />
          <SidebarLayout />{" "}
          <div
            style={{
              marginTop: "90px",
            }}
          >
            <Container maxWidth="xl">
              <Outlet />
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminLayout;
