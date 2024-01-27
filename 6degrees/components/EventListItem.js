import { View, TouchableOpacity, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "../styles/feed-styles";
import colors from "../colors";

const EventListItem = ({
  title,
  date,
  description,
  location,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.date} numberOfLines={1}>
            {date}
          </Text>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.text} numberOfLines={2}>
            {description}
          </Text>
          <View style={styles.priceAndLocationContainer}>
            <View style={styles.location}>
              <MaterialCommunityIcons
                name={"map-marker"}
                size={16}
                style={styles.icon}
              />
              <Text style={styles.text}>{location}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventListItem;
