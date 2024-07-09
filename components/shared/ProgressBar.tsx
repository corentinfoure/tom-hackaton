import { StyleSheet, View } from 'react-native'

export type ProgressBarProps = {
  currentStep: number
  totalSteps: number
}

export const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  let fillWidth = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0
  fillWidth = Math.min(Math.max(fillWidth, 0), 100)

  return (
    <View style={[styles.container, { backgroundColor: 'grey' }]}>
      <View
        accessibilityValue={{
          min: 0,
          max: 100,
          now: fillWidth,
        }}
        style={[styles.fill, { width: `${fillWidth}%`, backgroundColor: 'blue' }]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 15,
    width: '90%',
    borderWidth: 1,
    marginLeft: 15,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  fill: {
    height: '100%',
    borderRadius: 10,
  },
})