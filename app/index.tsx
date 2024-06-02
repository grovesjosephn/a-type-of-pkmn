import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'column',
          },
        ]}>
        <View style={{flex: 1, backgroundColor: 'red'}}>
          <Text style={{color: 'blue'}}>hi</Text>
        </View>
        <View style={{flex: 2, flexDirection: 'row', backgroundColor: 'darkorange', borderRadius: '4px'}}>
          <View style={{ backgroundColor: 'white', borderWidth: '1px', borderStyle: 'solid', borderColor: 'black', borderRadius: "4px", padding: '4px', maxHeight: 'fit-content'}} >
            <Text>Ice</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
  },
});
