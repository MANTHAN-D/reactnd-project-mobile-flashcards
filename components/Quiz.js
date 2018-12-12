import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Animated
} from 'react-native'
import { connect } from 'react-redux'

import SubmitButton from './SubmitButton'

import { headerText, metaText, buttonText } from '../utils/fonts'
import { white, blue, red } from '../utils/colors'
import {
  clearLocalNotification,
  setLocalNotification
} from '../utils/notifications'

class Quiz extends Component {
  state = {
    answered: 0,
    correctAnswers: 0
  }

  componentWillMount = () => {
    this.animatedValue = new Animated.Value(0)
    this.value = 0
    this.animatedValue.addListener(({ value }) => {
      this.value = value
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.totalQuestions !== nextState.answered
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.value >= 90) {
      return this.flipCard()
    }
  }

  flipCard = () => {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start()
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start()
    }
  }

  handleCorrect = () => {
    this.setState(
      state => {
        return {
          answered: state.answered + 1,
          correctAnswers: state.correctAnswers + 1
        }
      },
      () => {
        const { answered } = this.state
        const { totalQuestions } = this.props
        if (answered === totalQuestions) return this.toResult()
      }
    )
  }

  handleInCorrect = () => {
    this.setState(
      state => {
        return {
          answered: state.answered + 1
        }
      },
      () => {
        const { answered } = this.state
        const { totalQuestions } = this.props
        if (answered === totalQuestions) return this.toResult()
      }
    )
  }

  toResult = () => {
    this.setState({
      answered: 0,
      correctAnswers: 0
    })

    const { navigation, totalQuestions } = this.props
    const { correctAnswers } = this.state
    const { title } = navigation.state.params

    const percentage = ((correctAnswers * 100) / totalQuestions).toFixed(2)

    navigation.navigate('Result', { title, percentage })

    clearLocalNotification().then(setLocalNotification)
  }

  render() {
    const { answered } = this.state
    const { totalQuestions, questions } = this.props

    const question = questions[answered].question
    const answer = questions[answered].answer

    const frontAnimatedStyle = {
      transform: [
        {
          rotateY: this.frontInterpolate
        }
      ]
    }

    const backAnimatedStyle = {
      transform: [
        {
          rotateY: this.backInterpolate
        }
      ]
    }

    return (
      <View style={styles.container}>
        <View style={styles.progressContainer}>
          <Text style={metaText}>
            {answered}/{totalQuestions}
          </Text>
        </View>
        <View style={styles.questionContainer}>
          <TouchableOpacity onPress={() => this.flipCard()}>
            <Animated.View
              style={[{ backfaceVisibility: 'hidden' }, frontAnimatedStyle]}
            >
              <View style={[styles.flipCard]}>
                <Text
                  style={[
                    headerText,
                    {
                      padding: 10,
                      fontSize: question.length > 70 ? undefined : 30
                    }
                  ]}
                >
                  {question}
                </Text>
              </View>
              <View style={[{ alignItems: 'center' }]}>
                <Text style={[{ padding: 10, color: red }, metaText]}>
                  {'Tap to see answer!'}
                </Text>
              </View>
            </Animated.View>
            <Animated.View
              style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}
            >
              <View>
                <Text
                  style={[
                    headerText,
                    {
                      padding: 10,
                      fontSize: answer.length > 70 ? undefined : 30
                    }
                  ]}
                >
                  {answer}
                </Text>
              </View>
              <View style={[{ alignItems: 'center' }]}>
                <Text style={[{ padding: 10, color: red }, metaText]}>
                  {'Tap to see question!'}
                </Text>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
        <View style={styles.actionContainer}>
          <SubmitButton
            style={styles.correctSubmitBtn}
            textStyle={buttonText}
            onPress={() => this.handleCorrect()}
          >
            Correct
          </SubmitButton>
          <SubmitButton
            style={styles.incorrectSubmitBtn}
            textStyle={buttonText}
            onPress={() => this.handleInCorrect()}
          >
            Incorrect
          </SubmitButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  progressContainer: {
    padding: 10,
    paddingLeft: 20
  },
  questionContainer: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    justifyContent: 'center',
    shadowRadius: 5,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    alignItems: 'stretch',
    borderColor: blue,
    borderWidth: 0.5
  },
  actionContainer: {
    padding: 10
  },
  correctSubmitBtn: {
    margin: 20,
    backgroundColor: blue,
    height: 60
  },
  incorrectSubmitBtn: {
    margin: 20,
    backgroundColor: red,
    height: 60
  },
  flipCard: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    backfaceVisibility: 'hidden'
  },
  flipCardBack: {
    position: 'absolute',
    top: 50,
    justifyContent: 'space-between'
  }
})

const mapStateToProps = (state, { navigation }) => {
  const { title } = navigation.state.params
  return {
    title,
    totalQuestions: state[title] ? state[title].questions.length : 0,
    questions: state[title] ? state[title].questions : null
  }
}

export default connect(mapStateToProps)(Quiz)
