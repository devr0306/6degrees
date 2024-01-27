import { View, Text, ScrollView } from "react-native";
import EventListItem from "../components/EventListItem";

const FeedScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView style={{ width: "100%", height: "100%" }}>
        <EventListItem
          navigation={navigation}
          title="Poker Night"
          date="Feb 1 10:00pm"
          description="Poker with friends for a while that night"
          location="Signature 1909"
          image="../assets/icon.png"
        />
      </ScrollView>
    </View>
  );
};

export default FeedScreen;
