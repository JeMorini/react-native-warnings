import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const guidelineBaseWidth = 375;

const scale = (size) => (width / guidelineBaseWidth) * size;

export { width, scale };
