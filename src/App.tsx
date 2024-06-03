import { Box } from "@mui/material"
import { UploadImages } from "./components";

function App() {

  return (
    <>
    <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "100px",
          width: "1000px",
          maxWidth: "100vw",
          padding: "50px 0",
          margin: "0 auto",
    }}>
    </Box>
    <UploadImages></UploadImages>
    </>
  )
}

export default App;
