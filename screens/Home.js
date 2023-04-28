import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import colors from "../utils";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Choose from "../components/Choose";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { Modal } from "react-native";
import Login from "../components/Login";

const Home = ({ navigation }) => {
  const [scrollP, setScrollP] = useState(0);
  const [showLoginModal, setshowLoginModal] = useState(false);

  const handleScroll = (event) => {
    setScrollP(event.nativeEvent.contentOffset.y);
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <Header scrollP={scrollP} />
      <ScrollView onScroll={handleScroll} showsVerticalScrollIndicator={false}>
        {/* herosection */}
        <HeroSection
          setshowLoginModal={setshowLoginModal}
          showLoginModal={showLoginModal}
        />

        {/* about */}
        <About />

        {/* services */}
        <Services />

        {/* why us */}
        <Choose />

        {/* footer */}
        <Footer
          setshowLoginModal={setshowLoginModal}
          showLoginModal={showLoginModal}
        />

        {/* login modal */}
        <Modal transparent animationType="slide" visible={showLoginModal}>
          <Login
            setshowLoginModal={setshowLoginModal}
            navigation={navigation}
          />
        </Modal>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
