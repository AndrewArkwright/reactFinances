import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className = "header">
        <h1>{title}</h1>
        <Button onClick = {onAdd} text={showAdd ? "Close" : "Add"}/>
    </header>
  )
}

Header.defaultProps = {
    title: "Financial Calculator"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header