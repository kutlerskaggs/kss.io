import Colors from "material-ui/lib/styles/colors";
import ColorManipulator from "material-ui/lib/utils/color-manipulator";
import Spacing from "material-ui/lib/styles/spacing";
import zIndex from "material-ui/lib/styles/zIndex";

export default {
    spacing: Spacing,
    zIndex: zIndex,
    fontFamily: "Roboto, sans-serif",
    palette: {
        primary1Color: Colors.white,
        primary2Color: Colors.cyan700,
        primary3Color: Colors.lightBlack,
        accent1Color: Colors.pinkA200,
        accent2Color: "#45cba1",
        accent3Color: Colors.yellowA700,
        textColor: Colors.grey200,
        alternateTextColor: Colors.grey800,
        canvasColor: Colors.white,
        borderColor: Colors.grey300,
        disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
        pickerHeaderColor: Colors.cyan500
    }
};
