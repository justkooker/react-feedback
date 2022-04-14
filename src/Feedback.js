import { Component } from "react";

import FeedbackOption from "./components/Feedback/FeedbackOption";
import FeedbackStatistic from "./components/Feedback/FeedbackStatistic";
import Section from "./components/Feedback/Section";
import Notification from "./components/Feedback/Notification";

import styles from "./Feedback.module.css";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  option = ["good", "neutral", "bad"];
  leaveFeedback = (option) => {
    this.setState((prevState) => {
      return { [option]: prevState[option] + 1 };
    });
  };
  totalFeddback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  positivePercentage = () => {
    return Math.round(
      (this.state.good /
        (this.state.bad + this.state.good + this.state.neutral)) *
        100
    );
  };
  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div className={styles.container}>
        <Section title={"Please leave feedback!"}>
          <FeedbackOption
            onLeaveFeedback={this.leaveFeedback}
            options={this.option}
          />
        </Section>
        <Section title={"Statistic!"}>
          <FeedbackStatistic
            total={this.totalFeddback()}
            positiveFeedback={this.positivePercentage()}
            good={good}
            bad={bad}
            neutral={neutral}
          />
        </Section>
        <Notification total={this.totalFeddback()} />
      </div>
    );
  }
}

export default Feedback;
