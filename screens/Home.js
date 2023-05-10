import { View, ScrollView, Modal, StyleSheet } from "react-native";
import { useCallback, useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Choose from "../components/Choose";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Login from "../components/Login";
import { colors } from "../assets/colors";

const Home = ({ navigation }) => {
  const [visible, setVisible] = useState(false)

  const onPress = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeroSection onPress={onPress} />

        <About />

        <Services />

        <Choose />

        <Footer onPress={onPress} />

        <Modal transparent animationType="slide" visible={visible}>
          <Login onPress={onPress} navigation={navigation} />
        </Modal>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
