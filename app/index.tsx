import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d8d8d8",
      }}
    >
      <Text style={{ fontSize: 33, fontWeight: 500, color: "blue" }}>
        Hello To the Native World
      </Text>
      <Link
        style={{ fontSize: 20, fontWeight: 500, letterSpacing: 2 }}
        href={"/about"}
      >
        About
      </Link>
      <Link
        style={{ fontSize: 20, fontWeight: 500, letterSpacing: 2 }}
        href={"/contact"}
      >
        contact
      </Link>
    </View>
  );
}
