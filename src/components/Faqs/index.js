// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="faqs-heading">FAQs</h1>
          <ul className="faq-item-container ">
            {faqsList.map(eachFaq => (
              <FaqItem faqItem={eachFaq} key={eachFaq.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
