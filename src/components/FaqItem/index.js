// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onClickPlusIcon = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderAnswer = () => {
    const {faqItem} = this.props
    const {answerText} = faqItem
    const {isActive} = this.state
    if (isActive) {
      return (
        <div>
          <hr className="header-line" />
          <p className="faq-paragraph">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqItem} = this.props
    const {questionText} = faqItem
    const {isActive} = this.state
    const plusOrMinusImg = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isActive ? 'minus' : 'plus'

    return (
      <li className="faq-container">
        <div className="container">
          <h1 className="faq-question">{questionText}</h1>
          <button
            type="button"
            className="button"
            onClick={this.onClickPlusIcon}
          >
            <img src={plusOrMinusImg} alt={altText} className="icon" />
          </button>
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
