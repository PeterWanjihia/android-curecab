import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

const DropDown = ({ data, title, setValue, value, onChange }) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "#F24A4E" }]}
        placeholderStyle={[styles.placeholderStyle]}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? title : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          onChange(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderRadius: 2,
    paddingHorizontal: 8,
    backgroundColor: "#efefef",
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    fontFamily: "Regular",
  },
  placeholderStyle: {
    fontSize: 14,
    fontFamily: "Regular",
    color: "#777",
  },
  selectedTextStyle: {
    fontSize: 14,
    fontFamily: "Regular",
    color: "#777",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
    fontFamily: "Regular",
  },
});
