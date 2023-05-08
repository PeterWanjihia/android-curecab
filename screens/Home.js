import { View, ScrollView, Modal, StyleSheet } from "react-native";
import { useCallback, useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Choose from "../components/Choose";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Login from "../components/Login";
import { colors } from "../utils";

const Home = ({ navigation }) => {
  const [scrollP, setScrollP] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleScroll = (event) => {
    setScrollP(event.nativeEvent.contentOffset.y);
  };

  const onPress = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      {/* header */}
      <Header scrollP={scrollP} />
      <ScrollView onScroll={handleScroll} showsVerticalScrollIndicator={false}>
        {/* herosection */}
        <HeroSection onPress={onPress} />

        {/* about */}
        <About />

        {/* services */}
        <Services />

        {/* why us */}
        <Choose />

        {/* footer */}
        <Footer onPress={onPress} />

        {/* login modal */}
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
