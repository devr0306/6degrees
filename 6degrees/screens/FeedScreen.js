import { View, Text, ScrollView } from "react-native";
import EventListItem from "../components/EventListItem";
import { useEffect, useState } from "react";
import { getEvents } from "../firebase/firebaseFunctions";

const FeedScreen = ({ navigation }) => {
  const [events, setEvents] = useState([{}, {}]);

  useEffect(() => {
    getEvents().then((response) => setEvents(response));
  }, []);

  return (
    <View>
      <ScrollView style={{ width: "100%", height: "100%" }}>
        {events?.map((event, index) => {
          return (
            <EventListItem
              key={index}
              navigation={navigation}
              title={event.title}
              date={event.date}
              location={event.location}
              description={event.description}
            />
          );
        })}
        <EventListItem
          navigation={navigation}
          title="Poker Night"
          date="Feb 1 10:00pm"
          description="Poker with friends for a while that night"
          location="Signature 1909"
        />
      </ScrollView>
    </View>
  );
};

export default FeedScreen;
