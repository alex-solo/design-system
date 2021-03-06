const plugin = require("tailwindcss/plugin");
const pagination = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {
    ".pagination_btn_style": {
      fontFamily: theme("fontFamily.header"),
      fontWeight: theme("fontWeight.regular"),
      fontSize: theme("fontSize.btnother"),
      color: theme("colors.multi.blue.blue60b"),
      backgroundColor: theme("colors.multi.neutrals.grey30a"),
      borderColor: theme("colors.multi.neutrals.grey40a"),
      borderWidth: "1px",
      padding: "8px 16px",
      "&:hover": {
        backgroundColor: theme("colors.multi.neutrals.grey50a"),
      },
      // width: "44px",
      // height: "50px",
    },
    ".pagination_cur_style": {
      fontFamily: theme("fontFamily.header"),
      fontWeight: theme("fontWeight.regular"),
      fontSize: theme("fontSize.btnother"),
      color: theme("colors.multi.neutrals.white"),
      backgroundColor: theme("colors.multi.blue.blue50a"),
      padding: "8px 16px",
      borderWidth: "1px",
      // width: "44px",
      // height: "50px",
    },
    ".pagination_prev_next": {
      fontFamily: theme("fontFamily.header"),
      fontWeight: theme("fontWeight.regular"),
      fontSize: theme("fontSize.btnother"),
      color: theme("colors.multi.blue.blue60b"),
      backgroundColor: theme("colors.multi.neutrals.grey30a"),
      borderColor: theme("colors.multi.neutrals.grey40a"),
      borderWidth: "1px",
      padding: "8px 16px",
      "&:hover": {
        backgroundColor: theme("colors.multi.neutrals.grey50a"),
      },
    },
  };

  addUtilities(newUtilities);
});
module.exports = pagination;
