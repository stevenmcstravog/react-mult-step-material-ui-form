import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Form from "./components/Form";
import "./App.css";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#344955"
		},
		secondary: {
			main: "#f9aa33"
		}
	},
	typography: { useNextVariants: true }
});

class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<Form />
			</MuiThemeProvider>
		);
	}
}

export default App;
