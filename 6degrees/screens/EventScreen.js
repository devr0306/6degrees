import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "../styles/event-styles";
import colors from "../colors";
import { useState } from "react";

const EventScreen = ({ navigation, route }) => {
  const [rsvpStatus, setRsvpStatus] = useState("RSVP");
  const [rsvps, setRsvps] = useState(11);

  const toggleRsvpStatus = () => {
    if (rsvpStatus === "RSVP") {
      setRsvpStatus("Cancel RSVP");
      setRsvps(rsvps + 1);
    } else {
      setRsvpStatus("RSVP");
      setRsvps(rsvps - 1);
    }
  };
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.title}>{route.params.title}</Text>
      <View style={styles.dateAndRSVPContainer}>
        <View style={styles.dateContainer}>
          <MaterialCommunityIcons
            name={"calendar"}
            size={32}
            style={styles.icon}
          />
          <Text style={styles.date}>{route.params.date}</Text>
        </View>
        <Text style={styles.date}>{rsvps} RSVPs</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.text}>{route.params.description}</Text>
      </View>
      <View style={styles.priceAndLocationContainer}>
        <View style={styles.locationContainer}>
          <MaterialCommunityIcons
            name={"map-marker"}
            size={32}
            style={styles.icon}
          />
          <Text style={styles.details}>{route.params.location}</Text>
        </View>
      </View>
      {/* <View style={styles.hostContainer}>
        <Text style={styles.text}>Hosted by {route.params.host}</Text>
      </View> */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={toggleRsvpStatus}
        >
          <Text style={styles.signUpButtonText}>{rsvpStatus}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventScreen;
