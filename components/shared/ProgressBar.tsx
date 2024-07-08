import { StyleSheet, View } from 'react-native'
import Animated, { clamp, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

export type ProgressBarProps = {
  currentStep: number
  totalSteps: number
}

const ANIMATION_DURATION = 800

export const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {

  let fillWidth = clamp(totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0, 0, 100)
  if (fillWidth > 100) fillWidth = 100

  const width = useSharedValue(0)
  const animatedStyles = useAnimatedStyle(() => ({
    width: `${width.value}%`,
  }))

  const animationConfig = {
    duration: ANIMATION_DURATION,
  }

  width.value = withTiming(fillWidth, animationConfig)

  return (
    <View style={[ styles.container, { backgroundColor: 'grey' }]}>
      <Animated.View
        accessibilityValue={{
          min: 0,
          max: 100,
          now: fillWidth,
        }}
        style={[ styles.fill, animatedStyles, { backgroundColor: 'blue' } ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  fill: {
    height: '100%',
  },
})
