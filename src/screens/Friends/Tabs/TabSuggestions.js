import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  StyleSheet,
} from "react-native";
import TabSuggestionsItems from "./TabSuggestionsItems";
import { images, colors, fontSizes } from "../../../constants";

function TabSuggestions(props) {
  //list of group example = state
  const [groups, setGroups] = useState([
    {
      ID: "01",
      name: "Công Tằng Tôn Vũ Tạ Văn Huy",
      imageUrl: "https://i.pravatar.cc/1001",
    },
    {
      ID: "02",
      name: "Khang",
      imageUrl: "https://i.pravatar.cc/23070",
    },
    {
      ID: "03",
      name: "Bảo",
      imageUrl: "https://i.pravatar.cc/3000",
    },
    {
      ID: "04",
      name: "Phúc",
      imageUrl: "https://i.pravatar.cc/4090",
    },
    {
      ID: "05",
      name: "Minh",
      imageUrl: "https://i.pravatar.cc/580",
    },
    {
      ID: "06",
      name: "Khoa",
      imageUrl: "https://i.pravatar.cc/3071",
    },
    {
      ID: "07",
      name: "Anh",
      imageUrl: "https://i.pravatar.cc/3602",
    },
    {
      ID: "08",
      name: "Đạt",
      imageUrl: "https://i.pravatar.cc/3503",
    },
    {
      ID: "09",
      name: "Duy",
      imageUrl: "https://i.pravatar.cc/3044",
    },
    {
      ID: "10",
      name: "Guy",
      imageUrl: "https://i.pravatar.cc/3035",
    },
    {
      ID: "11",
      name: "Quy",
      imageUrl: "https://i.pravatar.cc/3026",
    },
  ]);

  //use for search bar (textInput)
  const [searchText, setSearchText] = useState("");

  //navigation to/back
  const { navigate, goBack } = props.navigation;

  return (
    <View style={styles.container}>
      <View /* Search bar */ style={styles.searchBarView}>
        <TextInput
          style={styles.searchBarTypingArea}
          autoCorrect={false}
          inputMode="search"
          onChangeText={(text) => {
            setSearchText(text);
          }}
          placeholder="Tìm kiếm..."
          placeholderTextColor={colors.inactive}
        />
        <Image source={images.searchIcon} style={styles.searchBarImage} />
      </View>

      <View style={styles.blackLine} />

      <ScrollView>
        {groups
          .filter((eachGroup) =>
            eachGroup.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((eachGroup) => (
            <TabSuggestionsItems
              group={eachGroup}
              key={eachGroup.ID}
              onPress={() => {
                navigate("ShowProfile", { user: eachGroup });
              }}
            />
          ))}
      </ScrollView>
    </View>
  );
}
export default TabSuggestions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
  },
  searchBarView: {
    height: "7%",
    paddingHorizontal: 7,
    flexDirection: "row",
    paddingTop: 10,
    backgroundColor: colors.transparentWhite,
  },
  searchBarTypingArea: {
    height: "95%",
    flex: 1,
    paddingStart: 45,
  },
  searchBarImage: {
    width: 20,
    height: 20,
    position: "absolute",
    top: "45%",
    left: "6%",
    tintColor: colors.inactive,
  },
  blackLine: {
    backgroundColor: colors.inactive,
    height: 1,
    width: "95%",
    alignSelf: "center",
  },
});
