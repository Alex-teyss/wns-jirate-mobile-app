import { Dimensions, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselItem from "./ItemCarousel";
import styles from "./StyleCarousel";

const { width } = Dimensions.get("window");
export default function CustomSlider({ data }) {
  const settings = {
    sliderWidth: width,
    sliderHeight: width,
    itemWidth: width - 80,
    data: data,
    renderItem: CarouselItem,
    hasParallaxImages: true,
  };
  return (
    <View style={styles.container}>
      <Carousel {...settings} />
    </View>
  );
}