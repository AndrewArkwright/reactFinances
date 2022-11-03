import PropTypes from "prop-types"

const Button = ({ text, onClick}) => {
  return <button className = "btn" onClick = {onClick}> {text} </button>
}

Button.defaultProps = {
    text: "Add"
}

Button.propTypes = {
    text: PropTypes.string,
    onClick : PropTypes.func,
}

export default Button