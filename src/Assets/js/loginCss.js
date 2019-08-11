import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
      height: "100vh"
    },
    image: {
      /* backgroundImage: "url(https://source.unsplash.com/random)", */
      backgroundImage: "url(Images/Font-testigo.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      //backgroundColor: theme.palette.primary.main
      backgroundColor: "black"
    },
    form: {
      width: "85%", // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor:"black",
      color:"white"
    },
    typography: {
        padding: theme.spacing(2),
      }
  }));
  

 
 export default useStyles;