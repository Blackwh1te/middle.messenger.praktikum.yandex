// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import patterns from 'shared/utils/validation/patterns'
import Input from 'shared/ui/Input'
import Fragment from 'shared/ui/Fragment'
import './ChatForm.pcss'

const ChatForm = () => {
  return (
    <form className="chat-form">
      <Fragment>
        {
          new Input({
            className: 'chat-form__input',
            name: 'user-message',
            placeholder: 'Message...',
            patterns: [patterns.notEmpty],
          })
        }
      </Fragment>
      <button className="chat-form__button" type="submit" title="Send message">
        <img
          className="chat-form__button-icon"
          src="/icons/send-2.svg"
          alt="Send"
          width="50"
          height="50"
          loading="lazy"
          aria-label="Send message"
        />
      </button>
    </form>
  )
}

export default ChatForm
