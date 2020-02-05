import React, { Component } from "react";
import FeedbackOptions from "./feedback/FeedbackOptions";
import Statistics from "./statictics/Statistics";
import Section from "./section/Section";
import Notification from "./notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  handleClickIncrement = event => {
    event.preventDefault();
    const { name } = event.target;
    this.setState(prev => ({
      [name]: prev[name] + 1
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = event => {
    const { good, neutral, bad } = this.state;
    const totalAmount = good + neutral + bad;
    return totalAmount;
  };

  countPositiveFeedbackPercentage = event => {
    const { good } = this.state;
    const totalPercentage = (
      (good / this.countTotalFeedback()) *
      100
    ).toFixed();
    return totalPercentage;
  };

  render() {
    const totalAmount = this.countTotalFeedback();
    const totalPercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <Section title="">
        <FeedbackOptions
          onLeaveFeedback={this.handleClickIncrement}
        ></FeedbackOptions>
        {good || neutral || bad ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalAmount}
            positivePercentage={totalPercentage}
          />
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </Section>
    );
  }
}

export default App;
