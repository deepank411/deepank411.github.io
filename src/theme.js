const themeLight = {
	colors: {
		background: "#ECEFF4",
		cardBackground: "#E5E9F0",
		buttonBackground: "#5E81AC",
		textColor: "#2E3440",
		buttonColor: "#ECEFF4"
	}
};

const themeDark = {
	colors: {
		background: "#2E3440",
		cardBackground: "#3B4252",
		buttonBackground: "#d08770",
		textColor: "#ECEFF4",
		buttonColor: "#2E3440"
	}
};

const theme = isDarkMode => (isDarkMode ? themeDark : themeLight);

export default theme;